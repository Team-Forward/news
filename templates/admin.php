<?php
script('news', 'admin/Admin');
style('news', 'admin');
?>

<div class="section" id="news">
    <h2>News</h2>
    <div class="form-line">
        <p><input type="checkbox" name="news-use-cron-updates"
               <?php if ($_['useCronUpdates']) p('checked'); ?>>
            <label for="news-use-cron-updates">
                <?php p($l->t('Use system cron for updates')); ?>
            </label>
        </p>
        <p>
            <em><?php p($l->t(
                'Disable this if you run a custom updater such as the Python ' .
                'updater included in the app.'
            )); ?></em>
        </p>
    </div>
    <div class="form-line">
        <p>
            <label for="news-auto-purge-minimum-interval">
                <?php p($l->t('Purge interval')); ?></p>
            </label>
        <p>
            <em>
            <?php p($l->t(
                'Minimum amount of seconds after deleted feeds and folders ' .
                'are removed from the database; values below 60 seconds are ' .
                'ignored.'
            )); ?></em>
        </p>
        <p><input type="text" name="news-auto-purge-minimum-interval"
               value="<?php p($_['autoPurgeMinimumInterval']); ?>"></p>
    </div>
    <div class="form-line">
        <p>
            <label for="news-auto-purge-count">
                <?php p($l->t('Maximum read count per feed')); ?>
            </label>
        </p>
        <p>
            <em>
            <?php p($l->t(
                'Defines the maximum amount of articles that can be read per ' .
                "feed which won't be deleted by the cleanup job; ".
                'if old articles reappear after being read, increase ' .
                'this value; negative values such as -1 will turn this ' .
                'feature off.'
            )); ?></em>
        </p>
        <p><input type="text" name="news-auto-purge-count"
               value="<?php p($_['autoPurgeCount']); ?>"></p>
    </div>
    <div class="form-line">
        <p>
            <label for="news-max-redirects">
                <?php p($l->t('Maximum redirects')); ?>
            </label>
        </p>
        <p>
            <em>
                <?php p($l->t(
                    'How many redirects the feed fetcher should follow.'
                )); ?>
            </em>
        </p>
        <p><input type="text" name="news-max-redirects"
               value="<?php p($_['maxRedirects']); ?>"></p>
    </div>
    <div class="form-line">
        <p>
            <label for="news-feed-fetcher-timeout">
                <?php p($l->t('Feed fetcher timeout')); ?>
            </label>
        </p>
        <p>
            <em>
            <?php p($l->t(
                'Maximum number of seconds to wait for an RSS or Atom feed ' .
                'to load; if it takes longer the update will be aborted.'
            )); ?></em>
        </p>
        <p><input type="text" name="news-feed-fetcher-timeout"
               value="<?php p($_['feedFetcherTimeout']); ?>"></p>
    </div>
    <div class="form-line">
        <p>
            <label for="news-explore-url">
                <?php p($l->t('Explore Service URL')); ?>
            </label>
        </p>
        <p>
            <em>
                <?php p($l->t(
                    'If given, this service\'s URL will be queried for ' .
                    'displaying the feeds in the explore feed section. To ' .
                    'fall back to the built in explore service, leave this ' .
                    'input empty.'
                )); ?>
            </em>
            <a href="https://github.com/nextcloud/news/tree/master/docs/explore"><?php p($l->t(
                'For more information check the wiki.'
            )); ?></a>
        </p>
        <p><input type="text" name="news-explore-url"
               value="<?php p($_['exploreUrl']); ?>"></p>
    </div>
    <div class="form-line">
        <p>
            <label for="news-updater-interval">
                <?php p($l->t('Update interval')); ?>
            </label>
        </p>
        <p>
            <em>
                <?php p($l->t(
                    'Interval in seconds in which the feeds will be updated.'
                )); ?>
            </em>
            <a href="https://github.com/nextcloud/news/tree/master/docs/updateInterval"><?php p($l->t(
                'For more information check the wiki.'
            )); ?></a>
        </p>
        <p><input type="text" name="news-update-interval"
               value="<?php p($_['updateInterval']); ?>"></p>
    </div>
    <div class="form-line">
        <p>
            <label for="news-feed-fetcher-timeout">
                <?php p($l->t('Default feeds')); ?>
            </label>
        </p>
        <p>
            <em>
            <?php p($l->t('List of feeds imported by default to all users. The imported feeds are stored in a folder named "Recommended feeds".')); ?></em>
        </p>
        <p><input type="text"
                name="urlFlux"
                id="urlFlux"
                placeholder="<?php p($l->t('Enter an URL')); ?>"
            >
           <button
                id="addFeed"
                class="icon-add"
                style="padding-top: 1.3em;">
            </button>
        </p>

        <div id="listFeeds">
            <?php if (!empty($_['defaultFeeds'])) { ?>
            <ul
                name="news-feed-list-flux"
                id="feeds"
                class="with-icon"
                data-id="0"
                style="margin-left: 0.5em; margin-top: 1em;display:flex; flex-direction: column; list-style:disc"
                news-droppable>
                <!-- the li is repeated the following is an example -->
                <?php foreach (explode(',', $_['defaultFeeds']) as $defaultFeed) {
                    $defaultFeed = str_replace('"', '', $defaultFeed);
                    $defaultFeed = str_replace('[', '', $defaultFeed);
                    $defaultFeed = str_replace(']', '', $defaultFeed);
                ?>
                <li
                    style="display: inline-flex; margin-top: 0.7em">
                    <a style="padding-top: 0.25em; width: 400px; overflow-wrap: break-word"
                        class="title"
                        name="news-feed-element-flux"
                    >
                        <?php echo($defaultFeed); ?>
                    </a>
                    <div style="margin-left: 1em">
                        <button
                            class="icon-delete deleteFeed"
                            style="padding-top: 1.3em;">
                        </button>
                    </div>
                </li>
                <?php } ?>
            </ul>
            <?php } ?>
        </div>
    </div>

    <div class="form-line">
        <p>
            <label for="news-feed-fetcher-timeout">
                <?php p($l->t('Custom hashtags')); ?>
            </label>
        </p>
        <p>
            <em>
            <?php p($l->t('List of hashtags that a user can automatically include in their social media post.')); ?></em>
        </p>
        <p>
            <input type="text"
                name="hashtag"
                id="hashtag"
                placeholder="<?php p($l->t('Enter a hashtag')); ?>"
            >
           <button
                id="addHashtag"
                class="icon-add"
                style="padding-top: 1.3em;"
                >
            </button>
        </p>
        <div id="listHashtags">
            <?php if (!empty($_['customHashtags'])) { ?>
            <ul
                name="news-feed-list-hashtag"
                id="hashtags"
                class="with-icon"
                data-id="0"
                style="margin-left: 0.5em; margin-top: 1em;display:flex; flex-direction: column; list-style:disc;"
                news-droppable>
                <!-- the li is repeated the following is an example -->
                <?php foreach (explode(',', $_['customHashtags']) as $defaultHashtag) {
                    $defaultHashtag = str_replace('"', '', $defaultHashtag);
                    $defaultHashtag = str_replace('[', '', $defaultHashtag);
                    $defaultHashtag = str_replace(']', '', $defaultHashtag);
                ?>
                <li class="columnHashtag"
                    draggable="true"
                    style="display: inline-flex; margin-top: 0.7em; width: 250px; justify-content: space-between">
                    <a style="padding-top: 0.25em; width: 200px; overflow-wrap: break-word"
                        class="title"
                        name="news-feed-element-hashtag"
                    >
                        <?php echo($defaultHashtag); ?>
                    </a>
                    <div style="margin-left: 1em">
                        <button
                            class="icon-delete deleteHashtag"
                            style="padding-top: 1.3em;">
                        </button>
                    </div>
                </li>
                <?php } ?>
                <li class="columnHashtag"
                    style="list-style-type: none;"
                ></li>
            </ul>
            <?php } ?>
        </div>
    </div>

    <div id="news-saved-message">
        <span class="msg success"><?php p($l->t('Saved')); ?></span>
    </div>
</div>
