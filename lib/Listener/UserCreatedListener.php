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
use OCA\News\Service\Exceptions\ServiceConflictException;
use OCA\News\Service\Exceptions\ServiceNotFoundException;


class UserCreatedListener implements IEventListener {

    /**
     * Feed service
     * @var FeedServiceV2
     */
    protected $feedService;

    public function __construct(FeedServiceV2 $feedService,  $config) {
        $this->feedService = $feedService;
    }

    public function handle(Event $event): void {
        if (!($event instanceOf UserCreatedEvent)) {
            return;
        }

        $user = $event->getUser();
        $this->addFeed(
            $user->getUID(), 
            // WARNING: example URL, work in progress
            'https://en.wikipedia.org/w/api.php?action=featuredfeed&feed=potd&feedformat=atom'
        );
    }

    protected function addFeed(string $userId, string $url) {
        try {
            $feed = $this->feedService->create(
                $userId,
                $url
            );
        } catch (ServiceNotFoundException|ServiceConflictException $e) {
            return;
        }

        $this->feedService->fetch($feed);
    }
}