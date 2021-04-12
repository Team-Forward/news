/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2014
 */

/**
 * Used to update the admin settings
 */
(function (window, document, $) {
    'use strict';

    $(document).ready(function () {

        var listFeeds = [];

        var useCronUpdatesInput =
            $('#news input[name="news-use-cron-updates"]');
        var autoPurgeMinimumIntervalInput =
            $('#news input[name="news-auto-purge-minimum-interval"]');
        var autoPurgeCountInput =
            $('#news input[name="news-auto-purge-count"]');
        var maxRedirectsInput =
            $('#news input[name="news-max-redirects"]');
        var feedFetcherTimeoutInput =
            $('#news input[name="news-feed-fetcher-timeout"]');
        var maxSizeInput =
            $('#news input[name="news-max-size"]');
        var exploreUrlInput =
            $('#news input[name="news-explore-url"]');
        var updateIntervalInput =
            $('#news input[name="news-update-interval"]');
        var savedMessage = $('#news-saved-message');


        var listRss = $('#news a[name="news-feed-element-rss"]')
        listRss.each(function(index, objRss) {
            console.log('====', objRss.innerText);
            listFeeds.push(objRss.innerText);
        });

        // var listRss = $('#bricolage').val();
        // console.log('====', listRss);
        // listRss = JSON.parse(listRss);
        // listRss.each(function(index, objRss) {
        //     listFeeds.push(objRss);
        // });


        var saved = function () {
            if (savedMessage.is(':visible')) {
                savedMessage.hide();
            }

            savedMessage.fadeIn(function () {
                setTimeout(function () {
                    savedMessage.fadeOut();
                }, 5000);
            });
        };

        var submit = function () {
            var autoPurgeMinimumInterval = autoPurgeMinimumIntervalInput.val();
            var autoPurgeCount = autoPurgeCountInput.val();
            var maxRedirects = maxRedirectsInput.val();
            var feedFetcherTimeout = feedFetcherTimeoutInput.val();
            var maxSize = maxSizeInput.val();
            var exploreUrl = exploreUrlInput.val();
            var updateInterval = updateIntervalInput.val()
            var useCronUpdates = useCronUpdatesInput.is(':checked');

            var data = {
                autoPurgeMinimumInterval:
                    parseInt(autoPurgeMinimumInterval, 10),
                autoPurgeCount: parseInt(autoPurgeCount, 10),
                maxRedirects: parseInt(maxRedirects, 10),
                feedFetcherTimeout: parseInt(feedFetcherTimeout, 10),
                maxSize: parseInt(maxSize, 10),
                useCronUpdates: useCronUpdates,
                exploreUrl: exploreUrl,
                updateInterval: parseInt(updateInterval, 10),
                defaultFeeds: JSON.stringify(listFeeds)
            };

            var url = OC.generateUrl('/apps/news/admin');

            $.ajax({
                type: 'PUT',
                contentType: 'application/json; charset=utf-8',
                url: url,
                data: JSON.stringify(data),
                dataType: 'json'
            }).then(function (data) {
                saved();
                autoPurgeMinimumIntervalInput
                    .val(data.autoPurgeMinimumInterval);
                autoPurgeCountInput.val(data.autoPurgeCount);
                maxRedirectsInput.val(data.maxRedirects);
                maxSizeInput.val(data.maxSize);
                feedFetcherTimeoutInput.val(data.feedFetcherTimeout);
                useCronUpdatesInput.prop('checked', data.useCronUpdates);
                exploreUrlInput.val(data.exploreUrl);
                updateIntervalInput.val(data.updateInterval);
            });

        };

        $( "#addFeed" ).click(function() {
            var urlFlux = $("#urlFlux").val();
            listFeeds.push(urlFlux);
            submit();
        });

        $('#news input[type="text"][name!="urlFlux"]').blur(submit);
        $('#news input[type="checkbox"]').change(submit);
        $('#news-migrate').click(function () {
            var button = $(this);
            button.addClass('loading');

            $.post(OC.generateUrl('/apps/news/admin/migrate'))
            .always(function () {
                button.removeClass('loading');
            });

            return false;
        });
    });


}(window, document, jQuery));
