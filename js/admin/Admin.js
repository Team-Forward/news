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

        var listFeeds_result = [];
        var listHashtags_result = [];

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

        var listFeeds = $('#news a[name="news-feed-element-flux"]')
        listFeeds.each(function(index, objFeed) {
            listFeeds_result.push(objFeed.innerText.replace(/['"]+/g, '').replace(/\\/g, '').replace(/[\[\]']+/g,''));
        });
        var listHashtags = $('#news a[name="news-feed-element-hashtag"]')
        listHashtags.each(function(index, objHash) {
            listHashtags_result.push(objHash.innerText.replace(/['"]+/g, '').replace(/\\/g, '').replace(/[\[\]']+/g,''));
        });

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
                defaultFeeds: listFeeds_result.length===0 ? "" : JSON.stringify(listFeeds_result),
                customHashtags: listHashtags_result.length===0 ? "" : JSON.stringify(listHashtags_result)
            };

            var url = OC.generateUrl('/apps/news/admin');

            $.ajax({
                type: 'PUT',
                contentType: 'application/json; charset=utf-8',
                url: url,
                data: JSON.stringify(data),
                dataType: 'json',
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
                $(" #listFeeds").load(" #feeds");
                $(" #listHashtags").load(" #hashtags ");
            });

        };

        $( "#addFeed" ).click(function() {

            var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
            var regex = new RegExp(expression);
            var urlFlux = $("#urlFlux").val();

            if(urlFlux.match(regex)){
                listFeeds_result.push(urlFlux);
                $("#urlFlux").val("");
            }
            else{
                alert("Enter a valid URL!");
            }
            submit();
        });

        $(document).ajaxComplete(function() {
            initDrag();
        });

        $( "#addHashtag" ).click(function() {
            var hashtagVal = $("#hashtag").val();
            if(hashtagVal!=""){
                if(hashtagVal.charAt(0)!="#"){
                    hashtagVal = "#"+hashtagVal;
                }
                listHashtags_result.push(hashtagVal);
                $("#hashtag").val("");
            }
            submit();
        });

        $(document).on('click',' .deleteFeed',function(){
            var index = $(this).parents("li").index();
            listFeeds_result.splice(index, 1);
            submit();
        });

        $(document).on('click',' .deleteHashtag',function(){
            var index = $(this).parents("li").index();
            listHashtags_result.splice(index, 1);
            submit();
        });

        $('#news input[type="text"][name!="urlFlux"][name!="hashtag"]').blur(submit);
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

        var cols = [];
        var dragSrcEl = null;
        var indexFrom = -1
        var indexTo = -1;
        initDrag();

        function initDrag() {
            cols = document.querySelectorAll('#hashtags .columnHashtag');
            [].forEach.call(cols, addDnDHandlers);
        }

        function handleDragStart(e) {
            dragSrcEl = this;
            indexFrom = $(this).index();

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.outerHTML);
        }

        function handleDragOver(e) {
            if (e.preventDefault) {
            e.preventDefault();
            }
            this.classList.add('over');
            e.dataTransfer.dropEffect = 'move';

            return false;
        }

        function handleDragEnter(e) {
            this.classList.add('dragElem');
        }

        function handleDragLeave(e) {
            this.classList.remove('over');
        }

        function handleDrop(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }

            if (dragSrcEl != this) {
                this.parentNode.removeChild(dragSrcEl);
                var dropHTML = e.dataTransfer.getData('text/html');
                this.insertAdjacentHTML('beforebegin',dropHTML);
                var dropElem = this.previousSibling;
                addDnDHandlers(dropElem);
                indexTo = $(this).index();
            }
            this.classList.remove('over');

            return false;
        }

        function handleDragEnd(e) {
            changeOrder(listHashtags_result, indexFrom, indexTo);
            this.classList.remove('over');

            submit();
        }

        function addDnDHandlers(elem) {
            elem.addEventListener('dragstart', handleDragStart, false);
            elem.addEventListener('dragenter', handleDragEnter, false)
            elem.addEventListener('dragover', handleDragOver, false);
            elem.addEventListener('dragleave', handleDragLeave, false);
            elem.addEventListener('drop', handleDrop, false);
            elem.addEventListener('dragend', handleDragEnd, false);
        }

        function changeOrder(arr, from, to) {
            if(to!=-1){
                let cutOut = arr.splice(from, 1) [0];
                arr.splice(to-1, 0, cutOut);
            }
        };

    });


}(window, document, jQuery));
