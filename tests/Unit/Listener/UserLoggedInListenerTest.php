<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author    Marco Nassabain <cosenal@gmail.com>
 * @author    Nicolas Wendling <nicolas.wendling1011@gmail.com>
 */

namespace OCA\News\Tests\Unit\Db;

use OCA\News\Listener\UserLoggedInListener;
use OCA\News\Service\FeedServiceV2;
use OCA\News\Service\FolderServiceV2;
use OCP\User\Events\UserLoggedInEvent;
use OCA\News\AppInfo\Application;
use OCP\EventDispatcher\Event;
use OCA\News\Db\Folder;
use OCA\News\Db\Feed;
use OCP\IConfig;
use OCP\IL10N;
use OCP\IUser;

use PHPUnit\Framework\TestCase;

/**
 * Class UserLoggedInListenerTest
 *
 * @package OCA\News\Tests\Unit\Listener
 */
class UserLoggedInListenerTest extends TestCase
{
    /**
     * @var UserLoggedInListener
     */
    private $class;

    /**
     * @var MockObject|FeedServiceV2
     */
    private $feedService;

    /**
     * @var MockObject|FolderServiceV2
     */
    private $folderService;

    /**
     * @var MockObject|IConfig
     */
    private $settings;

    /**
     * Localization interface
     * @var IL10N
     */
    private $l10n;

    protected function setUp(): void
    {
        $this->feedService = $this->getMockBuilder(FeedServiceV2::class)
            ->disableOriginalConstructor()
            ->getMock();

        $this->folderService = $this->getMockBuilder(FolderServiceV2::class)
            ->disableOriginalConstructor()
            ->getMock();

        $this->settings = $this->getMockBuilder(IConfig::class)
            ->disableOriginalConstructor()
            ->getMock();

        $this->l10n = $this->getMockBuilder(IL10N::class)
            ->disableOriginalConstructor()
            ->getMock();

        $this->class = new UserLoggedInListener(
            $this->feedService,
            $this->folderService,
            $this->settings,
            $this->l10n
        );
    }

    public function testHandle()
    {
        $userId = 'nicolas';
        $defaultFeeds = json_encode(['url 1', 'url 2']);
        $folderName = 'Recommended feeds';
        $folder = new Folder();
        $folder->setId(1);
        $existingFeed = new Feed();

        $user = $this->getMockBuilder(IUser::class)
            ->getMock();

        $event = $this->getMockBuilder(UserLoggedInEvent::class)
            ->disableOriginalConstructor()
            ->getMock();

        $event->expects($this->once())
            ->method('getUser')
            ->will($this->returnValue($user));

        $user->expects($this->once())
            ->method('getUID')
            ->will($this->returnValue($userId));

        $this->settings->expects($this->once())
            ->method('getAppValue')
            ->with(Application::NAME,
                'defaultFeeds',
                Application::DEFAULT_SETTINGS['defaultFeeds']
            )
            ->will($this->returnValue($defaultFeeds));

        $this->l10n->expects($this->once())
            ->method('t')
            ->with($folderName)
            ->will($this->returnValue($folderName));

        $this->folderService->expects($this->once())
            ->method('findFromUserByName')
            ->with($userId, $folderName)
            ->will($this->returnValue($folder));

        $this->feedService->expects($this->exactly(2))
            ->method('existsForUser')
            ->withConsecutive([$userId, 'url 1'], [$userId, 'url 2'])
            ->willReturnOnConsecutiveCalls(false, true);

        $this->feedService->expects($this->once())
            ->method('create')
            ->with($userId, 'url 1', 1);


        $this->class->handle($event);
    }

    public function testAddFeed()
    {
        $feed = new Feed();
        $event = $this->getMockBuilder(UserLoggedInEvent::class)
            ->disableOriginalConstructor()
            ->getMock();

        $this->feedService->expects($this->once())
            ->method('create')
            ->with('marco', 'http://nourl.com', 1)
            ->will($this->returnValue($feed));

        $this->feedService->expects($this->once())
            ->method('fetch')
            ->with($feed);

        $this->class->addFeed('marco', 'http://nourl.com', 1);
    }
}
