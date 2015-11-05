(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbthreadService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteThread = function(threadId) {
            return SessionService.invoke('/mbthread/delete-thread',[{
                threadId:threadId
            }]);
        };
        service.getGroupThreads = function(groupId,userId,status,start,end) {
            return SessionService.invoke('/mbthread/get-group-threads',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.getGroupThreads = function(groupId,userId,modifiedDate,status,start,end) {
            return SessionService.invoke('/mbthread/get-group-threads',[{
                groupId:groupId
                ,userId:userId
                ,modifiedDate:modifiedDate
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.getGroupThreads = function(groupId,userId,status,subscribed,start,end) {
            return SessionService.invoke('/mbthread/get-group-threads',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,subscribed:subscribed
                ,start:start
                ,end:end
            }]);
        };
        service.getGroupThreads = function(groupId,userId,status,subscribed,includeAnonymous,start,end) {
            return SessionService.invoke('/mbthread/get-group-threads',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,subscribed:subscribed
                ,includeAnonymous:includeAnonymous
                ,start:start
                ,end:end
            }]);
        };
        service.getGroupThreadsCount = function(groupId,userId,status) {
            return SessionService.invoke('/mbthread/get-group-threads-count',[{
                groupId:groupId
                ,userId:userId
                ,status:status
            }]);
        };
        service.getGroupThreadsCount = function(groupId,userId,modifiedDate,status) {
            return SessionService.invoke('/mbthread/get-group-threads-count',[{
                groupId:groupId
                ,userId:userId
                ,modifiedDate:modifiedDate
                ,status:status
            }]);
        };
        service.getGroupThreadsCount = function(groupId,userId,status,subscribed) {
            return SessionService.invoke('/mbthread/get-group-threads-count',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,subscribed:subscribed
            }]);
        };
        service.getGroupThreadsCount = function(groupId,userId,status,subscribed,includeAnonymous) {
            return SessionService.invoke('/mbthread/get-group-threads-count',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,subscribed:subscribed
                ,includeAnonymous:includeAnonymous
            }]);
        };
        service.getThreads = function(groupId,categoryId,status,start,end) {
            return SessionService.invoke('/mbthread/get-threads',[{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.getThreadsCount = function(groupId,categoryId,status) {
            return SessionService.invoke('/mbthread/get-threads-count',[{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
            }]);
        };
        service.lockThread = function(threadId) {
            return SessionService.invoke('/mbthread/lock-thread',[{
                threadId:threadId
            }]);
        };
        service.moveThread = function(categoryId,threadId) {
            return SessionService.invoke('/mbthread/move-thread',[{
                categoryId:categoryId
                ,threadId:threadId
            }]);
        };
        service.moveThreadFromTrash = function(categoryId,threadId) {
            return SessionService.invoke('/mbthread/move-thread-from-trash',[{
                categoryId:categoryId
                ,threadId:threadId
            }]);
        };
        service.moveThreadToTrash = function(threadId) {
            return SessionService.invoke('/mbthread/move-thread-to-trash',[{
                threadId:threadId
            }]);
        };
        service.restoreThreadFromTrash = function(threadId) {
            return SessionService.invoke('/mbthread/restore-thread-from-trash',[{
                threadId:threadId
            }]);
        };
        service.search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke('/mbthread/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.search = function(groupId,creatorUserId,startDate,endDate,status,start,end) {
            return SessionService.invoke('/mbthread/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,startDate:startDate
                ,endDate:endDate
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.splitThread = function(messageId,subject,serviceContext) {
            return SessionService.invoke('/mbthread/split-thread',[{
                messageId:messageId
                ,subject:subject
                ,serviceContext:serviceContext
            }]);
        };
        service.unlockThread = function(threadId) {
            return SessionService.invoke('/mbthread/unlock-thread',[{
                threadId:threadId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();