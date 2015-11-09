(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BookmarksentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEntry = function(groupId,folderId,name,url,description,serviceContext) {
            return SessionService.invoke({'/bookmarksentry/add-entry':{
                groupId:groupId
                ,folderId:folderId
                ,name:name
                ,url:url
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        service.deleteEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/delete-entry':{
                entryId:entryId
            }});
        };
        service.getEntries = function(groupId,folderId,start,end) {
            return SessionService.invoke({'/bookmarksentry/get-entries':{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
            }});
        };
        service.getEntries = function(groupId,folderId,start,end,orderByComparator) {
            return SessionService.invoke({'/bookmarksentry/get-entries':{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.getEntriesCount = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksentry/get-entries-count':{
                groupId:groupId
                ,folderId:folderId
            }});
        };
        service.getEntriesCount = function(groupId,folderId,status) {
            return SessionService.invoke({'/bookmarksentry/get-entries-count':{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }});
        };
        service.getEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/get-entry':{
                entryId:entryId
            }});
        };
        service.getFoldersEntriesCount = function(groupId,folderIds) {
            return SessionService.invoke({'/bookmarksentry/get-folders-entries-count':{
                groupId:groupId
                ,folderIds:folderIds
            }});
        };
        service.getGroupEntries = function(groupId,start,end) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries':{
                groupId:groupId
                ,start:start
                ,end:end
            }});
        };
        service.getGroupEntries = function(groupId,userId,start,end) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries':{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
            }});
        };
        service.getGroupEntries = function(groupId,userId,rootFolderId,start,end) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries':{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
            }});
        };
        service.getGroupEntriesCount = function(groupId) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries-count':{
                groupId:groupId
            }});
        };
        service.getGroupEntriesCount = function(groupId,userId) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries-count':{
                groupId:groupId
                ,userId:userId
            }});
        };
        service.getGroupEntriesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries-count':{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }});
        };
        service.moveEntry = function(entryId,parentFolderId) {
            return SessionService.invoke({'/bookmarksentry/move-entry':{
                entryId:entryId
                ,parentFolderId:parentFolderId
            }});
        };
        service.moveEntryFromTrash = function(entryId,parentFolderId) {
            return SessionService.invoke({'/bookmarksentry/move-entry-from-trash':{
                entryId:entryId
                ,parentFolderId:parentFolderId
            }});
        };
        service.moveEntryToTrash = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/move-entry-to-trash':{
                entryId:entryId
            }});
        };
        service.openEntry = function(entry) {
            return SessionService.invoke({'/bookmarksentry/open-entry':{
                entry:entry
            }});
        };
        service.openEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/open-entry':{
                entryId:entryId
            }});
        };
        service.restoreEntryFromTrash = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/restore-entry-from-trash':{
                entryId:entryId
            }});
        };
        service.search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke({'/bookmarksentry/search':{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.subscribeEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/subscribe-entry':{
                entryId:entryId
            }});
        };
        service.unsubscribeEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/unsubscribe-entry':{
                entryId:entryId
            }});
        };
        service.updateEntry = function(entryId,groupId,folderId,name,url,description,serviceContext) {
            return SessionService.invoke({'/bookmarksentry/update-entry':{
                entryId:entryId
                ,groupId:groupId
                ,folderId:folderId
                ,name:name
                ,url:url
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();