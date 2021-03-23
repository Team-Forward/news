<?php
/**
 * @author Nicolas Wendling
 * @email nicolas.wendling1011@gmail.com
 * @create date 2021-03-22 15:15:10
 * @modify date 2021-03-22 15:15:10
 * @desc Add the default feeds when a user is created
 */

namespace OCA\News\Listener;

use OCP\User\Events\UserCreatedEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCA\News\Service\FeedServiceV2;
use OCP\IConfig;
use OCA\News\AppInfo\Application;
use OCA\News\Service\Exceptions\ServiceConflictException;
use OCA\News\Service\Exceptions\ServiceNotFoundException;

class UserCreatedListener implements IEventListener
{

    /**
     * Feed service
     * @var FeedServiceV2
     */
    protected $feedService;

    /**
     * Admin config
     * @var IConfig
     */
    protected $settings;

    public function __construct(FeedServiceV2 $feedService, IConfig $settings)
    {
        $this->feedService = $feedService;
        $this->settings = $settings;
    }

    public function handle(Event $event): void
    {
        if (!($event instanceof UserCreatedEvent)) {
            return;
        }

        // Get the new user ID
        $userID = $event->getUser()->getUID();

        // Get the default feeds from the db
        $defaultFeeds = $this->settings->getAppValue(
            Application::NAME,
            'defaultFeeds',
            Application::DEFAULT_SETTINGS['defaultFeeds']
        );

        // Convert the json string into a php variable
        $defaultFeeds = json_decode($defaultFeeds);

        if (!is_null($defaultFeeds)) {
            // Adding of all the default feeds
            foreach ($defaultFeeds as $url) {
                $this->addFeed(
                    $userID,
                    $url
                );
            }
        }
    }

    /**
     * @param string $userId
     * @param string $url
     *
     * @return void
     */
    protected function addFeed(string $userId, string $url): void
    {
        try {
            $feed = $this->feedService->create(
                $userId,
                $url
            );
        } catch (ServiceNotFoundException|ServiceConflictException $e) {
            return;
        }

        // Fetch to commit modifs into the db
        $this->feedService->fetch($feed);
    }
}
