(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFolder = function(groupId,repositoryId,mountPoint,parentFolderId,name,description,serviceContext) {
            return service.invoke('/dlfolder/add-folder',[{
                groupId:groupId
                ,repositoryId:repositoryId
                ,mountPoint:mountPoint
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteFolder = function(folderId) {
            return service.invoke('/dlfolder/delete-folder',[{
                folderId:folderId
            }]);
        };
        service.deleteFolder = function(folderId,includeTrashedEntries) {
            return service.invoke('/dlfolder/delete-folder',[{
                folderId:folderId
                ,includeTrashedEntries:includeTrashedEntries
            }]);
        };
        service.deleteFolder = function(groupId,parentFolderId,name) {
            return service.invoke('/dlfolder/delete-folder',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,name:name
            }]);
        };
        service.getFileEntriesAndFileShortcuts = function(groupId,folderId,status,start,end) {
            return service.invoke('/dlfolder/get-file-entries-and-file-shortcuts',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.getFileEntriesAndFileShortcutsCount = function(groupId,folderId,status) {
            return service.invoke('/dlfolder/get-file-entries-and-file-shortcuts-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        service.getFileEntriesAndFileShortcutsCount = function(groupId,folderId,status,mimeTypes) {
            return service.invoke('/dlfolder/get-file-entries-and-file-shortcuts-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
            }]);
        };
        service.getFolder = function(folderId) {
            return service.invoke('/dlfolder/get-folder',[{
                folderId:folderId
            }]);
        };
        service.getFolder = function(groupId,parentFolderId,name) {
            return service.invoke('/dlfolder/get-folder',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,name:name
            }]);
        };
        service.getFolderIds = function(groupId,folderId) {
            return service.invoke('/dlfolder/get-folder-ids',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getFolders = function(groupId,parentFolderId,start,end,obc) {
            return service.invoke('/dlfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFolders = function(groupId,parentFolderId,status,includeMountfolders,start,end,obc) {
            return service.invoke('/dlfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
                ,includeMountfolders:includeMountfolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFoldersAndFileEntriesAndFileShortcuts = function(groupId,folderId,status,includeMountFolders,start,end,obc) {
            return service.invoke('/dlfolder/get-folders-and-file-entries-and-file-shortcuts',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFoldersAndFileEntriesAndFileShortcuts = function(groupId,folderId,status,mimeTypes,includeMountFolders,start,end,obc) {
            return service.invoke('/dlfolder/get-folders-and-file-entries-and-file-shortcuts',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFoldersAndFileEntriesAndFileShortcutsCount = function(groupId,folderId,status,includeMountFolders) {
            return service.invoke('/dlfolder/get-folders-and-file-entries-and-file-shortcuts-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
            }]);
        };
        service.getFoldersAndFileEntriesAndFileShortcutsCount = function(groupId,folderId,status,mimeTypes,includeMountFolders) {
            return service.invoke('/dlfolder/get-folders-and-file-entries-and-file-shortcuts-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
                ,includeMountFolders:includeMountFolders
            }]);
        };
        service.getFoldersCount = function(groupId,parentFolderId) {
            return service.invoke('/dlfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        service.getFoldersCount = function(groupId,parentFolderId,status,includeMountfolders) {
            return service.invoke('/dlfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
                ,includeMountfolders:includeMountfolders
            }]);
        };
        service.getMountFolders = function(groupId,parentFolderId,start,end,obc) {
            return service.invoke('/dlfolder/get-mount-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getMountFoldersCount = function(groupId,parentFolderId) {
            return service.invoke('/dlfolder/get-mount-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        service.getSubfolderIds = function(folderIds,groupId,folderId) {
            return service.invoke('/dlfolder/get-subfolder-ids',[{
                folderIds:folderIds
                ,groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getSubfolderIds = function(groupId,folderId,recurse) {
            return service.invoke('/dlfolder/get-subfolder-ids',[{
                groupId:groupId
                ,folderId:folderId
                ,recurse:recurse
            }]);
        };
        service.hasFolderLock = function(folderId) {
            return service.invoke('/dlfolder/has-folder-lock',[{
                folderId:folderId
            }]);
        };
        service.hasInheritableLock = function(folderId) {
            return service.invoke('/dlfolder/has-inheritable-lock',[{
                folderId:folderId
            }]);
        };
        service.isFolderLocked = function(folderId) {
            return service.invoke('/dlfolder/is-folder-locked',[{
                folderId:folderId
            }]);
        };
        service.lockFolder = function(folderId) {
            return service.invoke('/dlfolder/lock-folder',[{
                folderId:folderId
            }]);
        };
        service.lockFolder = function(folderId,owner,inheritable,expirationTime) {
            return service.invoke('/dlfolder/lock-folder',[{
                folderId:folderId
                ,owner:owner
                ,inheritable:inheritable
                ,expirationTime:expirationTime
            }]);
        };
        service.moveFolder = function(folderId,parentFolderId,serviceContext) {
            return service.invoke('/dlfolder/move-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }]);
        };
        service.refreshFolderLock = function(lockUuid,companyId,expirationTime) {
            return service.invoke('/dlfolder/refresh-folder-lock',[{
                lockUuid:lockUuid
                ,companyId:companyId
                ,expirationTime:expirationTime
            }]);
        };
        service.unlockFolder = function(folderId,lockUuid) {
            return service.invoke('/dlfolder/unlock-folder',[{
                folderId:folderId
                ,lockUuid:lockUuid
            }]);
        };
        service.unlockFolder = function(groupId,parentFolderId,name,lockUuid) {
            return service.invoke('/dlfolder/unlock-folder',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,name:name
                ,lockUuid:lockUuid
            }]);
        };
        service.updateFolder = function(folderId,name,description,defaultFileEntryTypeId,fileEntryTypeIds,overrideFileEntryTypes,serviceContext) {
            return service.invoke('/dlfolder/update-folder',[{
                folderId:folderId
                ,name:name
                ,description:description
                ,defaultFileEntryTypeId:defaultFileEntryTypeId
                ,fileEntryTypeIds:fileEntryTypeIds
                ,overrideFileEntryTypes:overrideFileEntryTypes
                ,serviceContext:serviceContext
            }]);
        };
        service.verifyInheritableLock = function(folderId,lockUuid) {
            return service.invoke('/dlfolder/verify-inheritable-lock',[{
                folderId:folderId
                ,lockUuid:lockUuid
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});