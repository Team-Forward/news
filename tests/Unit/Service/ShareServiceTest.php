<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author    Marco Nassabain <marco.nassabain@hotmail.com>
 */


namespace OCA\News\Tests\Unit\Service;

use FeedIo\Explorer;
use FeedIo\Reader\ReadErrorException;

use OC\L10N\L10N;
use OCA\News\Service\Exceptions\ServiceConflictException;
use OCA\News\Service\Exceptions\ServiceNotFoundException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCA\News\Service\FeedServiceV2;
use OCA\News\Service\ItemServiceV2;
use OCA\News\Service\ShareService;
use OCA\News\Utility\Time;

use OCA\News\Db\Feed;
use OCA\News\Db\Item;
use OCP\IConfig;
use OCP\IL10N;

use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;


class ShareServiceTest extends TestCase
{
    /**
     * @var MockObject|ItemServiceV2
     */
    private $itemService;

    /**
     * @var MockObject|FeedServiceV2
     */
    private $feedService;

    /**
     * @var MockObject|LoggerInterface
     */
    private $logger;

    /** @var ShareService */
    private $class;

    /**
     * @var string
     */
    private $uid;

    /**
     * @var string
     */
    private $recipient;

    protected function setUp(): void
    {
        $this->logger = $this->getMockBuilder(LoggerInterface::class)
            ->disableOriginalConstructor()
            ->getMock();
        $this->itemService = $this
            ->getMockBuilder(ItemServiceV2::class)
            ->disableOriginalConstructor()
            ->getMock();
        $this->feedService = $this
            ->getMockBuilder(FeedServiceV2::class)
            ->disableOriginalConstructor()
            ->getMock();

        $this->time = 333333;

        $this->class = new ShareService(
            $this->feedService,
            $this->itemService,
            $this->logger
        );

        $this->uid = 'sender';
        $this->recipient = 'recipient';
    }

    public function testShareItemWithUser()
    {
        $feedUrl = 'http://nextcloud/sharedwithme';
        $itemId = 3;

        // Item to be shared
        $item = new Item();
        $item->setGuid('_guid_')
            ->setGuidHash(md5('_guid_'))
            ->setUrl('_url_')
            ->setTitle('_title_')
            ->setAuthor('_author_')
            ->setUnread(0)
            ->setStarred(1)
            ->setFeedId(10);

        // Shared item
        $sharedItem = clone $item;
        $sharedItem->setUnread(1)       // A newly shared item is unread, ...
            ->setStarred(0)             // ... not starred, ...
            ->setFeedId(100)            // ... placed in the 'Shared with me' feed, ...
            ->setSharedBy($this->uid);  // ... and contains the senders user ID

        // Dummy feed 'Shared with me'
        $feed = new Feed();
        $feed->setId(100);
        $feed->setUserId($this->recipient)
            ->setUrl($feedUrl)
            ->setLink($feedUrl)
            ->setTitle('Shared with me')
            ->setAdded($this->time)
            ->setFolderId(null)
            ->setPreventUpdate(true);


        $this->itemService->expects($this->once())
            ->method('find')
            ->with($this->uid, $itemId)
            ->will($this->returnValue($item));

        $this->feedService->expects($this->once())
            ->method('findByUrl')
            ->with($this->recipient, $feedUrl)
            ->will($this->returnValue($feed));

        // Here we test if the setters worked properly using 'with()'
        $this->itemService->expects($this->once())
            ->method('insertOrUpdate')
            ->with($sharedItem)
            ->will($this->returnValue($sharedItem));


        $this->class->shareItemWithUser($this->uid, $itemId, $this->recipient);
    }

    public function testShareItemWithUserCreatesOwnFeedWhenNotFound()
    {
        $feedUrl = 'http://nextcloud/sharedwithme';
        $itemId = 3;

        // Item to be shared
        $item = new Item();
        $item->setGuid('_guid_')
            ->setGuidHash(md5('_guid_'))
            ->setUrl('_url_')
            ->setTitle('_title_')
            ->setAuthor('_author_')
            ->setUnread(0)
            ->setStarred(1)
            ->setFeedId(10);

        // Shared item
        $sharedItem = clone $item;
        $sharedItem->setUnread(1)       // A newly shared item is unread, ...
            ->setStarred(0)             // ... not starred, ...
            ->setFeedId(100)            // ... placed in the 'Shared with me' feed, ...
            ->setSharedBy($this->uid);  // ... and contains the senders user ID

        // Dummy feed 'Shared with me'
        $feed = new Feed();
        $feed->setId(100);
        $feed->setUserId($this->recipient)
            ->setUrl($feedUrl)
            ->setLink($feedUrl)
            ->setTitle('Shared with me')
            ->setAdded($this->time)
            ->setFolderId(null)
            ->setPreventUpdate(true);


        $this->itemService->expects($this->once())
            ->method('find')
            ->with($this->uid, $itemId)
            ->will($this->returnValue($item));

        $this->feedService->expects($this->once())
            ->method('findByUrl')
            ->with($this->recipient, $feedUrl)
            ->will($this->returnValue(null));

        $this->feedService->expects($this->once())
            ->method('insert')
            ->will($this->returnValue($feed));

        // Here we test if the setters worked properly using 'with()'
        $this->itemService->expects($this->once())
            ->method('insertOrUpdate')
            ->with($sharedItem)
            ->will($this->returnValue($sharedItem));


        $this->class->shareItemWithUser($this->uid, $itemId, $this->recipient);
    }


    public function testShareItemWithUserItemDoesNotExist()
    {
        $this->expectException(ServiceNotFoundException::class);
        $this->itemService->expects($this->once())
            ->method('find')
            ->will($this->throwException(new ServiceNotFoundException('')));

        $this->class->shareItemWithUser('sender', 1, 'recipient');
    }
}
