(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('TrashentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteEntries = function(entryIds) {
            return SessionService.invoke('/trashentry/delete-entries',[{
                entryIds:entryIds
            }]);
        };
        service.deleteEntries = function(groupId) {
            return SessionService.invoke('/trashentry/delete-entries',[{
                groupId:groupId
            }]);
        };
        service.deleteEntry = function(entryId) {
            return SessionService.invoke('/trashentry/delete-entry',[{
                entryId:entryId
            }]);
        };
        service.deleteEntry = function(className,classPK) {
            return SessionService.invoke('/trashentry/delete-entry',[{
                className:className
                ,classPK:classPK
            }]);
        };
        service.getEntries = function(groupId) {
            return SessionService.invoke('/trashentry/get-entries',[{
                groupId:groupId
            }]);
        };
        service.getEntries = function(groupId,start,end,obc) {
            return SessionService.invoke('/trashentry/get-entries',[{
                groupId:groupId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.moveEntry = function(className,classPK,destinationContainerModelId,serviceContext) {
            return SessionService.invoke('/trashentry/move-entry',[{
                className:className
                ,classPK:classPK
                ,destinationContainerModelId:destinationContainerModelId
                ,serviceContext:serviceContext
            }]);
        };
        service.restoreEntry = function(entryId) {
            return SessionService.invoke('/trashentry/restore-entry',[{
                entryId:entryId
            }]);
        };
        service.restoreEntry = function(entryId,overrideClassPK,name) {
            return SessionService.invoke('/trashentry/restore-entry',[{
                entryId:entryId
                ,overrideClassPK:overrideClassPK
                ,name:name
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();