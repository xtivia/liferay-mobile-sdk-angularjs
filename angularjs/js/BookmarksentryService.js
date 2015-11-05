(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BookmarksentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEntry = function(groupId,folderId,name,url,description,serviceContext) {
            return service.invoke('/bookmarksentry/add-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,name:name
                ,url:url
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteEntry = function(entryId) {
            return service.invoke('/bookmarksentry/delete-entry',[{
                entryId:entryId
            }]);
        };
        service.getEntries = function(groupId,folderId,start,end) {
            return service.invoke('/bookmarksentry/get-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
            }]);
        };
        service.getEntries = function(groupId,folderId,start,end,orderByComparator) {
            return service.invoke('/bookmarksentry/get-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        service.getEntriesCount = function(groupId,folderId) {
            return service.invoke('/bookmarksentry/get-entries-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getEntriesCount = function(groupId,folderId,status) {
            return service.invoke('/bookmarksentry/get-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        service.getEntry = function(entryId) {
            return service.invoke('/bookmarksentry/get-entry',[{
                entryId:entryId
            }]);
        };
        service.getFoldersEntriesCount = function(groupId,folderIds) {
            return service.invoke('/bookmarksentry/get-folders-entries-count',[{
                groupId:groupId
                ,folderIds:folderIds
            }]);
        };
        service.getGroupEntries = function(groupId,start,end) {
            return service.invoke('/bookmarksentry/get-group-entries',[{
                groupId:groupId
                ,start:start
                ,end:end
            }]);
        };
        service.getGroupEntries = function(groupId,userId,start,end) {
            return service.invoke('/bookmarksentry/get-group-entries',[{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
            }]);
        };
        service.getGroupEntries = function(groupId,userId,rootFolderId,start,end) {
            return service.invoke('/bookmarksentry/get-group-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
            }]);
        };
        service.getGroupEntriesCount = function(groupId) {
            return service.invoke('/bookmarksentry/get-group-entries-count',[{
                groupId:groupId
            }]);
        };
        service.getGroupEntriesCount = function(groupId,userId) {
            return service.invoke('/bookmarksentry/get-group-entries-count',[{
                groupId:groupId
                ,userId:userId
            }]);
        };
        service.getGroupEntriesCount = function(groupId,userId,rootFolderId) {
            return service.invoke('/bookmarksentry/get-group-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }]);
        };
        service.moveEntry = function(entryId,parentFolderId) {
            return service.invoke('/bookmarksentry/move-entry',[{
                entryId:entryId
                ,parentFolderId:parentFolderId
            }]);
        };
        service.moveEntryFromTrash = function(entryId,parentFolderId) {
            return service.invoke('/bookmarksentry/move-entry-from-trash',[{
                entryId:entryId
                ,parentFolderId:parentFolderId
            }]);
        };
        service.moveEntryToTrash = function(entryId) {
            return service.invoke('/bookmarksentry/move-entry-to-trash',[{
                entryId:entryId
            }]);
        };
        service.openEntry = function(entry) {
            return service.invoke('/bookmarksentry/open-entry',[{
                entry:entry
            }]);
        };
        service.openEntry = function(entryId) {
            return service.invoke('/bookmarksentry/open-entry',[{
                entryId:entryId
            }]);
        };
        service.restoreEntryFromTrash = function(entryId) {
            return service.invoke('/bookmarksentry/restore-entry-from-trash',[{
                entryId:entryId
            }]);
        };
        service.search = function(groupId,creatorUserId,status,start,end) {
            return service.invoke('/bookmarksentry/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.subscribeEntry = function(entryId) {
            return service.invoke('/bookmarksentry/subscribe-entry',[{
                entryId:entryId
            }]);
        };
        service.unsubscribeEntry = function(entryId) {
            return service.invoke('/bookmarksentry/unsubscribe-entry',[{
                entryId:entryId
            }]);
        };
        service.updateEntry = function(entryId,groupId,folderId,name,url,description,serviceContext) {
            return service.invoke('/bookmarksentry/update-entry',[{
                entryId:entryId
                ,groupId:groupId
                ,folderId:folderId
                ,name:name
                ,url:url
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});