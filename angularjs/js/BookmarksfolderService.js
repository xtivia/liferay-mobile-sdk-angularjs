(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BookmarksfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFolder = function(parentFolderId,name,description,serviceContext) {
            return SessionService.invoke({'/bookmarksfolder/add-folder':{
                parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        service.deleteFolder = function(folderId) {
            return SessionService.invoke({'/bookmarksfolder/delete-folder':{
                folderId:folderId
            }});
        };
        service.deleteFolder = function(folderId,includeTrashedEntries) {
            return SessionService.invoke({'/bookmarksfolder/delete-folder':{
                folderId:folderId
                ,includeTrashedEntries:includeTrashedEntries
            }});
        };
        service.getFolder = function(folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folder':{
                folderId:folderId
            }});
        };
        service.getFolderIds = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folder-ids':{
                groupId:groupId
                ,folderId:folderId
            }});
        };
        service.getFolders = function(groupId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders':{
                groupId:groupId
            }});
        };
        service.getFolders = function(groupId,parentFolderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders':{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }});
        };
        service.getFolders = function(groupId,parentFolderId,start,end) {
            return SessionService.invoke({'/bookmarksfolder/get-folders':{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
            }});
        };
        service.getFolders = function(groupId,parentFolderId,status,start,end) {
            return SessionService.invoke({'/bookmarksfolder/get-folders':{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.getFoldersAndEntries = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries':{
                groupId:groupId
                ,folderId:folderId
            }});
        };
        service.getFoldersAndEntries = function(groupId,folderId,status) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries':{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }});
        };
        service.getFoldersAndEntries = function(groupId,folderId,status,start,end) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries':{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.getFoldersAndEntriesCount = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries-count':{
                groupId:groupId
                ,folderId:folderId
            }});
        };
        service.getFoldersAndEntriesCount = function(groupId,folderId,status) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries-count':{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }});
        };
        service.getFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-count':{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }});
        };
        service.getFoldersCount = function(groupId,parentFolderId,status) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-count':{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
            }});
        };
        service.getSubfolderIds = function(folderIds,groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-subfolder-ids':{
                folderIds:folderIds
                ,groupId:groupId
                ,folderId:folderId
            }});
        };
        service.getSubfolderIds = function(groupId,folderId,recurse) {
            return SessionService.invoke({'/bookmarksfolder/get-subfolder-ids':{
                groupId:groupId
                ,folderId:folderId
                ,recurse:recurse
            }});
        };
        service.moveFolder = function(folderId,parentFolderId) {
            return SessionService.invoke({'/bookmarksfolder/move-folder':{
                folderId:folderId
                ,parentFolderId:parentFolderId
            }});
        };
        service.moveFolderFromTrash = function(folderId,parentFolderId) {
            return SessionService.invoke({'/bookmarksfolder/move-folder-from-trash':{
                folderId:folderId
                ,parentFolderId:parentFolderId
            }});
        };
        service.moveFolderToTrash = function(folderId) {
            return SessionService.invoke({'/bookmarksfolder/move-folder-to-trash':{
                folderId:folderId
            }});
        };
        service.restoreFolderFromTrash = function(folderId) {
            return SessionService.invoke({'/bookmarksfolder/restore-folder-from-trash':{
                folderId:folderId
            }});
        };
        service.subscribeFolder = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/subscribe-folder':{
                groupId:groupId
                ,folderId:folderId
            }});
        };
        service.unsubscribeFolder = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/unsubscribe-folder':{
                groupId:groupId
                ,folderId:folderId
            }});
        };
        service.updateFolder = function(folderId,parentFolderId,name,description,mergeWithParentFolder,serviceContext) {
            return SessionService.invoke({'/bookmarksfolder/update-folder':{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,mergeWithParentFolder:mergeWithParentFolder
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();