(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('DlappService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFileEntry = function(repositoryId,folderId,sourceFileName,mimeType,title,description,changeLog,bytes,serviceContext) {
            return SessionService.invoke({'/dlapp/add-file-entry':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,bytes:bytes
                ,serviceContext:serviceContext
            }});
        };
        service.addFileEntry = function(repositoryId,folderId,sourceFileName,mimeType,title,description,changeLog,file,serviceContext) {
            return SessionService.invoke({'/dlapp/add-file-entry':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,file:file
                ,serviceContext:serviceContext
            }});
        };
        service.addFileShortcut = function(repositoryId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke({'/dlapp/add-file-shortcut':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,toFileEntryId:toFileEntryId
                ,serviceContext:serviceContext
            }});
        };
        service.addFolder = function(repositoryId,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke({'/dlapp/add-folder':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        service.addTempFileEntry = function(groupId,folderId,fileName,tempFolderName,file,mimeType) {
            return SessionService.invoke({'/dlapp/add-temp-file-entry':{
                groupId:groupId
                ,folderId:folderId
                ,fileName:fileName
                ,tempFolderName:tempFolderName
                ,file:file
                ,mimeType:mimeType
            }});
        };
        service.cancelCheckOut = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/cancel-check-out':{
                fileEntryId:fileEntryId
            }});
        };
        service.checkInFileEntry = function(fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlapp/check-in-file-entry':{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }});
        };
        service.checkInFileEntry = function(fileEntryId,lockUuid,serviceContext) {
            return SessionService.invoke({'/dlapp/check-in-file-entry':{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
                ,serviceContext:serviceContext
            }});
        };
        service.checkInFileEntry = function(fileEntryId,majorVersion,changeLog,serviceContext) {
            return SessionService.invoke({'/dlapp/check-in-file-entry':{
                fileEntryId:fileEntryId
                ,majorVersion:majorVersion
                ,changeLog:changeLog
                ,serviceContext:serviceContext
            }});
        };
        service.checkOutFileEntry = function(fileEntryId,serviceContext) {
            return SessionService.invoke({'/dlapp/check-out-file-entry':{
                fileEntryId:fileEntryId
                ,serviceContext:serviceContext
            }});
        };
        service.checkOutFileEntry = function(fileEntryId,owner,expirationTime,serviceContext) {
            return SessionService.invoke({'/dlapp/check-out-file-entry':{
                fileEntryId:fileEntryId
                ,owner:owner
                ,expirationTime:expirationTime
                ,serviceContext:serviceContext
            }});
        };
        service.copyFolder = function(repositoryId,sourceFolderId,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke({'/dlapp/copy-folder':{
                repositoryId:repositoryId
                ,sourceFolderId:sourceFolderId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        service.deleteFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/delete-file-entry':{
                fileEntryId:fileEntryId
            }});
        };
        service.deleteFileEntryByTitle = function(repositoryId,folderId,title) {
            return SessionService.invoke({'/dlapp/delete-file-entry-by-title':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,title:title
            }});
        };
        service.deleteFileShortcut = function(fileShortcutId) {
            return SessionService.invoke({'/dlapp/delete-file-shortcut':{
                fileShortcutId:fileShortcutId
            }});
        };
        service.deleteFileVersion = function(fileEntryId,version) {
            return SessionService.invoke({'/dlapp/delete-file-version':{
                fileEntryId:fileEntryId
                ,version:version
            }});
        };
        service.deleteFolder = function(folderId) {
            return SessionService.invoke({'/dlapp/delete-folder':{
                folderId:folderId
            }});
        };
        service.deleteFolder = function(repositoryId,parentFolderId,name) {
            return SessionService.invoke({'/dlapp/delete-folder':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,name:name
            }});
        };
        service.deleteTempFileEntry = function(groupId,folderId,fileName,tempFolderName) {
            return SessionService.invoke({'/dlapp/delete-temp-file-entry':{
                groupId:groupId
                ,folderId:folderId
                ,fileName:fileName
                ,tempFolderName:tempFolderName
            }});
        };
        service.getFileEntries = function(repositoryId,folderId) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId
                ,folderId:folderId
            }});
        };
        service.getFileEntries = function(repositoryId,folderId,fileEntryTypeId) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
            }});
        };
        service.getFileEntries = function(repositoryId,folderId,mimeTypes) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
            }});
        };
        service.getFileEntries = function(repositoryId,folderId,start,end) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,start:start
                ,end:end
            }});
        };
        service.getFileEntries = function(repositoryId,folderId,fileEntryTypeId,start,end) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
                ,start:start
                ,end:end
            }});
        };
        service.getFileEntries = function(repositoryId,folderId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getFileEntries = function(repositoryId,folderId,fileEntryTypeId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,start,end) {
            return SessionService.invoke({'/dlapp/get-file-entries-and-file-shortcuts':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.getFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status) {
            return SessionService.invoke({'/dlapp/get-file-entries-and-file-shortcuts-count':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
            }});
        };
        service.getFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status,mimeTypes) {
            return SessionService.invoke({'/dlapp/get-file-entries-and-file-shortcuts-count':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
            }});
        };
        service.getFileEntriesCount = function(repositoryId,folderId) {
            return SessionService.invoke({'/dlapp/get-file-entries-count':{
                repositoryId:repositoryId
                ,folderId:folderId
            }});
        };
        service.getFileEntriesCount = function(repositoryId,folderId,fileEntryTypeId) {
            return SessionService.invoke({'/dlapp/get-file-entries-count':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
            }});
        };
        service.getFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/get-file-entry':{
                fileEntryId:fileEntryId
            }});
        };
        service.getFileEntry = function(groupId,folderId,title) {
            return SessionService.invoke({'/dlapp/get-file-entry':{
                groupId:groupId
                ,folderId:folderId
                ,title:title
            }});
        };
        service.getFileEntryByUuidAndGroupId = function(uuid,groupId) {
            return SessionService.invoke({'/dlapp/get-file-entry-by-uuid-and-group-id':{
                uuid:uuid
                ,groupId:groupId
            }});
        };
        service.getFileShortcut = function(fileShortcutId) {
            return SessionService.invoke({'/dlapp/get-file-shortcut':{
                fileShortcutId:fileShortcutId
            }});
        };
        service.getFolder = function(folderId) {
            return SessionService.invoke({'/dlapp/get-folder':{
                folderId:folderId
            }});
        };
        service.getFolder = function(repositoryId,parentFolderId,name) {
            return SessionService.invoke({'/dlapp/get-folder':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,name:name
            }});
        };
        service.getFolders = function(repositoryId,parentFolderId) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
            }});
        };
        service.getFolders = function(repositoryId,parentFolderId,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,includeMountFolders:includeMountFolders
            }});
        };
        service.getFolders = function(repositoryId,parentFolderId,start,end) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
            }});
        };
        service.getFolders = function(repositoryId,parentFolderId,includeMountFolders,start,end) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
            }});
        };
        service.getFolders = function(repositoryId,parentFolderId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getFolders = function(repositoryId,parentFolderId,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getFolders = function(repositoryId,parentFolderId,status,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,status:status
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,includeMountFolders,start,end) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,mimeTypes,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts-count':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status,mimeTypes,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts-count':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
                ,includeMountFolders:includeMountFolders
            }});
        };
        service.getFoldersCount = function(repositoryId,parentFolderId) {
            return SessionService.invoke({'/dlapp/get-folders-count':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
            }});
        };
        service.getFoldersCount = function(repositoryId,parentFolderId,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders-count':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,includeMountFolders:includeMountFolders
            }});
        };
        service.getFoldersCount = function(repositoryId,parentFolderId,status,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders-count':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,status:status
                ,includeMountFolders:includeMountFolders
            }});
        };
        service.getFoldersFileEntriesCount = function(repositoryId,folderIds,status) {
            return SessionService.invoke({'/dlapp/get-folders-file-entries-count':{
                repositoryId:repositoryId
                ,folderIds:folderIds
                ,status:status
            }});
        };
        service.getGroupFileEntries = function(groupId,userId,start,end) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
            }});
        };
        service.getGroupFileEntries = function(groupId,userId,rootFolderId,start,end) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
            }});
        };
        service.getGroupFileEntries = function(groupId,userId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getGroupFileEntries = function(groupId,userId,rootFolderId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getGroupFileEntries = function(groupId,userId,rootFolderId,mimeTypes,status,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getGroupFileEntriesCount = function(groupId,userId) {
            return SessionService.invoke({'/dlapp/get-group-file-entries-count':{
                groupId:groupId
                ,userId:userId
            }});
        };
        service.getGroupFileEntriesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke({'/dlapp/get-group-file-entries-count':{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }});
        };
        service.getGroupFileEntriesCount = function(groupId,userId,rootFolderId,mimeTypes,status) {
            return SessionService.invoke({'/dlapp/get-group-file-entries-count':{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
            }});
        };
        service.getMountFolders = function(repositoryId,parentFolderId) {
            return SessionService.invoke({'/dlapp/get-mount-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
            }});
        };
        service.getMountFolders = function(repositoryId,parentFolderId,start,end) {
            return SessionService.invoke({'/dlapp/get-mount-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
            }});
        };
        service.getMountFolders = function(repositoryId,parentFolderId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-mount-folders':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getMountFoldersCount = function(repositoryId,parentFolderId) {
            return SessionService.invoke({'/dlapp/get-mount-folders-count':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
            }});
        };
        service.getSubfolderIds = function(repositoryId,folderId) {
            return SessionService.invoke({'/dlapp/get-subfolder-ids':{
                repositoryId:repositoryId
                ,folderId:folderId
            }});
        };
        service.getSubfolderIds = function(repositoryId,folderId,recurse) {
            return SessionService.invoke({'/dlapp/get-subfolder-ids':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,recurse:recurse
            }});
        };
        service.getSubfolderIds = function(repositoryId,folderIds,folderId) {
            return SessionService.invoke({'/dlapp/get-subfolder-ids':{
                repositoryId:repositoryId
                ,folderIds:folderIds
                ,folderId:folderId
            }});
        };
        service.getTempFileEntryNames = function(groupId,folderId,tempFolderName) {
            return SessionService.invoke({'/dlapp/get-temp-file-entry-names':{
                groupId:groupId
                ,folderId:folderId
                ,tempFolderName:tempFolderName
            }});
        };
        service.lockFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/lock-file-entry':{
                fileEntryId:fileEntryId
            }});
        };
        service.lockFileEntry = function(fileEntryId,owner,expirationTime) {
            return SessionService.invoke({'/dlapp/lock-file-entry':{
                fileEntryId:fileEntryId
                ,owner:owner
                ,expirationTime:expirationTime
            }});
        };
        service.lockFolder = function(repositoryId,folderId) {
            return SessionService.invoke({'/dlapp/lock-folder':{
                repositoryId:repositoryId
                ,folderId:folderId
            }});
        };
        service.lockFolder = function(repositoryId,folderId,owner,inheritable,expirationTime) {
            return SessionService.invoke({'/dlapp/lock-folder':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,owner:owner
                ,inheritable:inheritable
                ,expirationTime:expirationTime
            }});
        };
        service.moveFileEntry = function(fileEntryId,newFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-file-entry':{
                fileEntryId:fileEntryId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }});
        };
        service.moveFileEntryFromTrash = function(fileEntryId,newFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-file-entry-from-trash':{
                fileEntryId:fileEntryId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }});
        };
        service.moveFileEntryToTrash = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/move-file-entry-to-trash':{
                fileEntryId:fileEntryId
            }});
        };
        service.moveFileShortcutFromTrash = function(fileShortcutId,newFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-file-shortcut-from-trash':{
                fileShortcutId:fileShortcutId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }});
        };
        service.moveFileShortcutToTrash = function(fileShortcutId) {
            return SessionService.invoke({'/dlapp/move-file-shortcut-to-trash':{
                fileShortcutId:fileShortcutId
            }});
        };
        service.moveFolder = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-folder':{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }});
        };
        service.moveFolderFromTrash = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-folder-from-trash':{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }});
        };
        service.moveFolderToTrash = function(folderId) {
            return SessionService.invoke({'/dlapp/move-folder-to-trash':{
                folderId:folderId
            }});
        };
        service.refreshFileEntryLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke({'/dlapp/refresh-file-entry-lock':{
                lockUuid:lockUuid
                ,companyId:companyId
                ,expirationTime:expirationTime
            }});
        };
        service.refreshFolderLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke({'/dlapp/refresh-folder-lock':{
                lockUuid:lockUuid
                ,companyId:companyId
                ,expirationTime:expirationTime
            }});
        };
        service.restoreFileEntryFromTrash = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/restore-file-entry-from-trash':{
                fileEntryId:fileEntryId
            }});
        };
        service.restoreFileShortcutFromTrash = function(fileShortcutId) {
            return SessionService.invoke({'/dlapp/restore-file-shortcut-from-trash':{
                fileShortcutId:fileShortcutId
            }});
        };
        service.restoreFolderFromTrash = function(folderId) {
            return SessionService.invoke({'/dlapp/restore-folder-from-trash':{
                folderId:folderId
            }});
        };
        service.revertFileEntry = function(fileEntryId,version,serviceContext) {
            return SessionService.invoke({'/dlapp/revert-file-entry':{
                fileEntryId:fileEntryId
                ,version:version
                ,serviceContext:serviceContext
            }});
        };
        service.search = function(repositoryId,searchContext) {
            return SessionService.invoke({'/dlapp/search':{
                repositoryId:repositoryId
                ,searchContext:searchContext
            }});
        };
        service.search = function(repositoryId,searchContext,query) {
            return SessionService.invoke({'/dlapp/search':{
                repositoryId:repositoryId
                ,searchContext:searchContext
                ,query:query
            }});
        };
        service.search = function(repositoryId,creatorUserId,status,start,end) {
            return SessionService.invoke({'/dlapp/search':{
                repositoryId:repositoryId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.search = function(repositoryId,creatorUserId,folderId,mimeTypes,status,start,end) {
            return SessionService.invoke({'/dlapp/search':{
                repositoryId:repositoryId
                ,creatorUserId:creatorUserId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.subscribeFileEntryType = function(groupId,fileEntryTypeId) {
            return SessionService.invoke({'/dlapp/subscribe-file-entry-type':{
                groupId:groupId
                ,fileEntryTypeId:fileEntryTypeId
            }});
        };
        service.subscribeFolder = function(groupId,folderId) {
            return SessionService.invoke({'/dlapp/subscribe-folder':{
                groupId:groupId
                ,folderId:folderId
            }});
        };
        service.unlockFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/unlock-file-entry':{
                fileEntryId:fileEntryId
            }});
        };
        service.unlockFileEntry = function(fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlapp/unlock-file-entry':{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }});
        };
        service.unlockFolder = function(repositoryId,folderId,lockUuid) {
            return SessionService.invoke({'/dlapp/unlock-folder':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,lockUuid:lockUuid
            }});
        };
        service.unlockFolder = function(repositoryId,parentFolderId,name,lockUuid) {
            return SessionService.invoke({'/dlapp/unlock-folder':{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,name:name
                ,lockUuid:lockUuid
            }});
        };
        service.unsubscribeFileEntryType = function(groupId,fileEntryTypeId) {
            return SessionService.invoke({'/dlapp/unsubscribe-file-entry-type':{
                groupId:groupId
                ,fileEntryTypeId:fileEntryTypeId
            }});
        };
        service.unsubscribeFolder = function(groupId,folderId) {
            return SessionService.invoke({'/dlapp/unsubscribe-folder':{
                groupId:groupId
                ,folderId:folderId
            }});
        };
        service.updateFileEntry = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,bytes,serviceContext) {
            return SessionService.invoke({'/dlapp/update-file-entry':{
                fileEntryId:fileEntryId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,majorVersion:majorVersion
                ,bytes:bytes
                ,serviceContext:serviceContext
            }});
        };
        service.updateFileEntry = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,file,serviceContext) {
            return SessionService.invoke({'/dlapp/update-file-entry':{
                fileEntryId:fileEntryId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,majorVersion:majorVersion
                ,file:file
                ,serviceContext:serviceContext
            }});
        };
        service.updateFileEntryAndCheckIn = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,file,serviceContext) {
            return SessionService.invoke({'/dlapp/update-file-entry-and-check-in':{
                fileEntryId:fileEntryId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,majorVersion:majorVersion
                ,file:file
                ,serviceContext:serviceContext
            }});
        };
        service.updateFileShortcut = function(fileShortcutId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke({'/dlapp/update-file-shortcut':{
                fileShortcutId:fileShortcutId
                ,folderId:folderId
                ,toFileEntryId:toFileEntryId
                ,serviceContext:serviceContext
            }});
        };
        service.updateFolder = function(folderId,name,description,serviceContext) {
            return SessionService.invoke({'/dlapp/update-folder':{
                folderId:folderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        service.verifyFileEntryCheckOut = function(repositoryId,fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlapp/verify-file-entry-check-out':{
                repositoryId:repositoryId
                ,fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }});
        };
        service.verifyFileEntryLock = function(repositoryId,fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlapp/verify-file-entry-lock':{
                repositoryId:repositoryId
                ,fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }});
        };
        service.verifyInheritableLock = function(repositoryId,folderId,lockUuid) {
            return SessionService.invoke({'/dlapp/verify-inheritable-lock':{
                repositoryId:repositoryId
                ,folderId:folderId
                ,lockUuid:lockUuid
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();