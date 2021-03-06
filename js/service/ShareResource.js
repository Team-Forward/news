/**
 * Nextcloud - News
 *
 * @author Marco Nassabain <marco.nassabain@hotmail.com>
 * @author Nicolas Wendling <nicolas.wendling1011@gmail.com>
 */
app.factory('ShareResource', function (Resource, $http, BASE_URL) {
    'use strict';

    var ShareResource = function ($http, BASE_URL) {
        Resource.call(this, $http, BASE_URL);
    };

    ShareResource.prototype = Object.create(Resource.prototype);

    ShareResource.prototype.getUsers = function (search) {
        return this.http({
            url: OC.linkToOCS(`apps/files_sharing/api/v1/sharees?search=${search}&itemType=news_item&perPage=5`, 1),
            method: 'GET',
        }).then(function(response) {
            return response.data;
        });
    };

    ShareResource.prototype.shareItem = function (itemId, userId) {
        var url = this.BASE_URL +
            '/items/' + itemId + '/share/' + userId;

        return this.http({
            url: url,
            method: 'POST',
        });
    };


    return new ShareResource($http, BASE_URL);
});
