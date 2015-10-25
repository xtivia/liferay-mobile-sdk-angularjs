(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbbanService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addBan = function(banUserId,serviceContext) {
            return service.invoke('/mbban/add-ban',[{
                banUserId:banUserId
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteBan = function(banUserId,serviceContext) {
            return service.invoke('/mbban/delete-ban',[{
                banUserId:banUserId
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});