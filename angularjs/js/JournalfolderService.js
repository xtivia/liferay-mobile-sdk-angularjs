(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFolder = function(groupId,parentFolderId,name,description,serviceContext) {
            return service.invoke('/journalfolder/add-folder',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteFolder = function(folderId) {
            return service.invoke('/journalfolder/delete-folder',[{
                folderId:folderId
            }]);
        };
        service.deleteFolder = function(folderId,includeTrashedEntries) {
            return service.invoke('/journalfolder/delete-folder',[{
                folderId:folderId
                ,includeTrashedEntries:includeTrashedEntries
            }]);
        };
        service.getFolder = function(folderId) {
            return service.invoke('/journalfolder/get-folder',[{
                folderId:folderId
            }]);
        };
        service.getFolderIds = function(groupId,folderId) {
            return service.invoke('/journalfolder/get-folder-ids',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getFolders = function(groupId) {
            return service.invoke('/journalfolder/get-folders',[{
                groupId:groupId
            }]);
        };
        service.getFolders = function(groupId,parentFolderId) {
            return service.invoke('/journalfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        service.getFolders = function(groupId,parentFolderId,status) {
            return service.invoke('/journalfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
            }]);
        };
        service.getFolders = function(groupId,parentFolderId,start,end) {
            return service.invoke('/journalfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
            }]);
        };
        service.getFolders = function(groupId,parentFolderId,status,start,end) {
            return service.invoke('/journalfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.getFoldersAndArticles = function(groupId,folderId,start,end,obc) {
            return service.invoke('/journalfolder/get-folders-and-articles',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFoldersAndArticles = function(groupId,folderId,status,start,end,obc) {
            return service.invoke('/journalfolder/get-folders-and-articles',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFoldersAndArticlesCount = function(groupId,folderId) {
            return service.invoke('/journalfolder/get-folders-and-articles-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getFoldersAndArticlesCount = function(groupId,folderId,status) {
            return service.invoke('/journalfolder/get-folders-and-articles-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        service.getFoldersAndArticlesCount = function(groupId,folderIds,status) {
            return service.invoke('/journalfolder/get-folders-and-articles-count',[{
                groupId:groupId
                ,folderIds:folderIds
                ,status:status
            }]);
        };
        service.getFoldersCount = function(groupId,parentFolderId) {
            return service.invoke('/journalfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        service.getFoldersCount = function(groupId,parentFolderId,status) {
            return service.invoke('/journalfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
            }]);
        };
        service.getSubfolderIds = function(folderIds,groupId,folderId) {
            return service.invoke('/journalfolder/get-subfolder-ids',[{
                folderIds:folderIds
                ,groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getSubfolderIds = function(groupId,folderId,recurse) {
            return service.invoke('/journalfolder/get-subfolder-ids',[{
                groupId:groupId
                ,folderId:folderId
                ,recurse:recurse
            }]);
        };
        service.moveFolder = function(folderId,parentFolderId,serviceContext) {
            return service.invoke('/journalfolder/move-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }]);
        };
        service.moveFolderFromTrash = function(folderId,parentFolderId,serviceContext) {
            return service.invoke('/journalfolder/move-folder-from-trash',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }]);
        };
        service.moveFolderToTrash = function(folderId) {
            return service.invoke('/journalfolder/move-folder-to-trash',[{
                folderId:folderId
            }]);
        };
        service.restoreFolderFromTrash = function(folderId) {
            return service.invoke('/journalfolder/restore-folder-from-trash',[{
                folderId:folderId
            }]);
        };
        service.updateFolder = function(folderId,parentFolderId,name,description,mergeWithParentFolder,serviceContext) {
            return service.invoke('/journalfolder/update-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,mergeWithParentFolder:mergeWithParentFolder
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});