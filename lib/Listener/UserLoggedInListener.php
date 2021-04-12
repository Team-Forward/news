<?php

namespace OCA\News\Listener;

use OCP\User\Events\UserLoggedInEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCA\News\Service\FeedServiceV2;
use OCA\News\Service\FolderServiceV2;
use OCP\IConfig;
use OCP\IL10N;
use OCA\News\AppInfo\Application;
use OCA\News\Service\Exceptions\ServiceConflictException;
use OCA\News\Service\Exceptions\ServiceNotFoundException;

class UserLoggedInListener implements IEventListener
{

    /**
     * Feed service
     * @var FeedServiceV2
     */
    protected $feedService;

    /**
     * Folder service
     * @var FolderServiceV2
     */
    protected $folderService;

    /**
     * Admin config
     * @var IConfig
     */
    protected $settings;

    /**
     * Localization interface
     * @var IL10N
     */
    protected $l10n;

    public function __construct(
        FeedServiceV2 $feedService,
        FolderServiceV2 $folderService,
        IConfig $settings,
        IL10N $l10n
    ) {
        $this->feedService   = $feedService;
        $this->folderService = $folderService;
        $this->settings      = $settings;
        $this->l10n          = $l10n;
    }

    public function handle(Event $event): void
    {
        if (!($event instanceof UserLoggedInEvent)) {
            return;
        }

        // Get the new user ID
        $userId = $event->getUser()->getUID();

        // Get the default feeds from the db
        $defaultFeeds = $this->settings->getAppValue(
            Application::NAME,
            'defaultFeeds',
            Application::DEFAULT_SETTINGS['defaultFeeds']
        );

        // Convert the json string into a php variable
        $defaultFeeds = json_decode($defaultFeeds);

        // Fetch default folder, or create if inexistant
        $defaultFolderName = $this->l10n->t('Recommended feeds');
        $defaultFolder = $this->folderService->findFromUserByName($userId, $defaultFolderName);
        if (is_null($defaultFolder)) {
            $defaultFolder = $this->folderService->create($userId, $defaultFolderName);
        }
        $defaultFolderId = $defaultFolder->getId();

        if (!is_null($defaultFeeds)) {
            // Adding of all the default feeds
            foreach ($defaultFeeds as $url) {
                if (!($this->feedService->existsForUser($userId, $url))) {
                    $this->addFeed(
                        $userId,
                        $url,
                        $defaultFolderId
                    );
                }
            }
        }
    }

    /**
     * @param string $userId
     * @param string $url
     * @param int    $folderId
     *
     * @return void
     */
    protected function addFeed(string $userId, string $url, int $folderId): void
    {
        try {
            $feed = $this->feedService->create(
                $userId,
                $url,
                $folderId
            );
        } catch (ServiceNotFoundException|ServiceConflictException $e) {
            return;
        }

        // Fetch to commit modifs into the db
        $this->feedService->fetch($feed);
    }
}
