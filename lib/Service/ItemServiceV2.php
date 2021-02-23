<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author    Alessandro Cosentino <cosenal@gmail.com>
 * @author    Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright 2020 Sean Molenaar
 */

namespace OCA\News\Service;

use OCA\News\AppInfo\Application;
use OCA\News\Db\Item;
use OCA\News\Db\ItemMapperV2;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IConfig;
use Psr\Log\LoggerInterface;

/**
 * Class ItemService
 *
 * @package OCA\News\Service
 */
class ItemServiceV2 extends Service
{

    /**
     * @var IConfig
     */
    protected $config;

    /**
     * ItemService constructor.
     *
     * @param ItemMapperV2    $mapper
     * @param IConfig          $config
     * @param LoggerInterface $logger
     */
    public function __construct(
        ItemMapperV2 $mapper,
        IConfig $config,
        LoggerInterface $logger
    ) {
        parent::__construct($mapper, $logger);
        $this->config = $config;
    }

    /**
     * Finds all items of a user
     *
     * @param string $userId The ID/name of the user
     * @param array $params Filter parameters
     *
     *
     * @return Item[]
     */
    public function findAllForUser(string $userId, array $params = []): array
    {
        return $this->mapper->findAllFromUser($userId, $params);
    }

    /**
     * Find all items
     *
     * @return Item[]
     */
    public function findAll(): array
    {
        return $this->mapper->findAll();
    }

    /**
     * Insert an item or update.
     *
     * @param Item $item
     */
    public function insertOrUpdate(Item $item)
    {
        try {
            $db_item = $this->mapper->findByGuidHash($item->getFeedId(), $item->getGuidHash());

            // Transfer user modifications
            $item->setUnread($db_item->isUnread())
                 ->setStarred($db_item->isStarred())
                 ->setId($db_item->getId());

            $this->mapper->update($item);
        } catch (DoesNotExistException $exception) {
            $this->mapper->insert($item);
        }
    }

    public function findAllForFeed(int $feedId): array
    {
        return $this->mapper->findAllForFeed($feedId);
    }

    public function purgeOverThreshold(int $threshold = null)
    {

        $threshold = (int) $threshold ?? $this->config->getAppValue(
            Application::NAME,
            'autoPurgeCount',
            Application::DEFAULT_SETTINGS['autoPurgeCount']
        );

        if ($threshold === 0) {
            return '';
        }

        return $this->mapper->deleteOverThreshold($threshold);
    }


    /**
     * Share an item with a user
     *
     * @param string $userId Item owner
     * @param int    $id     Item ID
     * @param bool   $shareWithId   User to share with
     * 
     * Sharing by copying - the item is duplicated, and the 'sharedBy' and
     * 'sharedWith' fields are filled accordingly.
     * We copy the 'feedId', because the article will still be owned by
     * $userId, and it'll be stored in his feed
     *
     * @return Item
     * @throws ServiceNotFoundException|ServiceConflictException
     */
    public function share(string $userId, int $id, string $shareWithId): Entity
    {
        // TODO: check if item is already shared with the user
        
        /** @var Item $item */
        $item = $this->find($userId, $id);

        // duplicate the item
        $sharedItem = Item::fromImport($item->jsonSerialize());

        // copy and initialize fields
        $sharedItem->setUnread(true);
        $sharedItem->setStarred(false);
        $sharedItem->setFeedId($item->getFeedId());
        $sharedItem->setFingerprint($item->getFingerprint());
        $sharedItem->setContentHash($item->getContentHash());
        $sharedItem->setSearchIndex($item->getSearchIndex());

        // set share data
        $sharedItem->setSharedBy($userId);
        $sharedItem->setSharedWith($shareWithId);

        // return $this->mapper->update($item);
        return $this->mapper->insert($sharedItem);
    }

    // TODO: implement shared() -> return all items shared with user
}
