/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Marco Nassabain <marco.nassabain@hotmail.com>
 */
app.controller('ShareController', function (ShareResource, Loading) {
    'use strict';

    this.userList = [];

    this.searchUsers = function(search) {

        Loading.setLoading('user', true);

        // TODO: search === undefined 🤢 je pense pas que c'est ouf comme syntaxe
        if (search === '' || search === undefined) {
            this.userList = [];
            Loading.setLoading('user', false);
            return;
        }

        // TODO: bug - requetes retardataires (regarder issues git)
        var response = ShareResource.getUsers(search);
        response.then((response) => {
            this.userList = response.ocs.data.users;
            Loading.setLoading('user', false);
        });
    };

    this.shareItem = function(itemId, userId) {
        Loading.setLoading(userId, true);
        var response = ShareResource.shareItem(itemId, userId);
        response.then((result) => {
            Loading.setLoading(userId, false);
            return result;
        });
    };

});