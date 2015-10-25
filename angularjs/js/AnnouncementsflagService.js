(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AnnouncementsflagService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFlag = function(entryId,value) {
            return service.invoke('/announcementsflag/add-flag',[{
                entryId:entryId
                ,value:value
            }]);
        };
        service.deleteFlag = function(flagId) {
            return service.invoke('/announcementsflag/delete-flag',[{
                flagId:flagId
            }]);
        };
        service.getFlag = function(entryId,value) {
            return service.invoke('/announcementsflag/get-flag',[{
                entryId:entryId
                ,value:value
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});