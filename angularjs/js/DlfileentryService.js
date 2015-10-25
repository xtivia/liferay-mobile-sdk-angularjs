(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.cancelCheckOut = function(fileEntryId) {
            return service.invoke('/dlfileentry/cancel-check-out',[{
                fileEntryId:fileEntryId
            }]);
        };
        service.checkInFileEntry = function(fileEntryId,lockUuid) {
            return service.invoke('/dlfileentry/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        service.checkInFileEntry = function(fileEntryId,lockUuid,serviceContext) {
            return service.invoke('/dlfileentry/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
                ,serviceContext:serviceContext
            }]);
        };
        service.checkInFileEntry = function(fileEntryId,major,changeLog,serviceContext) {
            return service.invoke('/dlfileentry/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,major:major
                ,changeLog:changeLog
                ,serviceContext:serviceContext
            }]);
        };
        service.checkOutFileEntry = function(fileEntryId) {
            return service.invoke('/dlfileentry/check-out-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        service.checkOutFileEntry = function(fileEntryId,serviceContext) {
            return service.invoke('/dlfileentry/check-out-file-entry',[{
                fileEntryId:fileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        service.checkOutFileEntry = function(fileEntryId,owner,expirationTime) {
            return service.invoke('/dlfileentry/check-out-file-entry',[{
                fileEntryId:fileEntryId
                ,owner:owner
                ,expirationTime:expirationTime
            }]);
        };
        service.checkOutFileEntry = function(fileEntryId,owner,expirationTime,serviceContext) {
            return service.invoke('/dlfileentry/check-out-file-entry',[{
                fileEntryId:fileEntryId
                ,owner:owner
                ,expirationTime:expirationTime
                ,serviceContext:serviceContext
            }]);
        };
        service.copyFileEntry = function(groupId,repositoryId,fileEntryId,destFolderId,serviceContext) {
            return service.invoke('/dlfileentry/copy-file-entry',[{
                groupId:groupId
                ,repositoryId:repositoryId
                ,fileEntryId:fileEntryId
                ,destFolderId:destFolderId
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteFileEntry = function(fileEntryId) {
            return service.invoke('/dlfileentry/delete-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        service.deleteFileEntry = function(groupId,folderId,title) {
            return service.invoke('/dlfileentry/delete-file-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,title:title
            }]);
        };
        service.deleteFileVersion = function(fileEntryId,version) {
            return service.invoke('/dlfileentry/delete-file-version',[{
                fileEntryId:fileEntryId
                ,version:version
            }]);
        };
        service.fetchFileEntryByImageId = function(imageId) {
            return service.invoke('/dlfileentry/fetch-file-entry-by-image-id',[{
                imageId:imageId
            }]);
        };
        service.getFileEntries = function(groupId,folderId,start,end,obc) {
            return service.invoke('/dlfileentry/get-file-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFileEntries = function(groupId,folderId,fileEntryTypeId,start,end,obc) {
            return service.invoke('/dlfileentry/get-file-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFileEntries = function(groupId,folderId,mimeTypes,start,end,obc) {
            return service.invoke('/dlfileentry/get-file-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFileEntries = function(groupId,folderId,status,start,end,obc) {
            return service.invoke('/dlfileentry/get-file-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getFileEntriesCount = function(groupId,folderId) {
            return service.invoke('/dlfileentry/get-file-entries-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getFileEntriesCount = function(groupId,folderId,fileEntryTypeId) {
            return service.invoke('/dlfileentry/get-file-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
            }]);
        };
        service.getFileEntriesCount = function(groupId,folderId,mimeTypes) {
            return service.invoke('/dlfileentry/get-file-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
            }]);
        };
        service.getFileEntriesCount = function(groupId,folderId,status) {
            return service.invoke('/dlfileentry/get-file-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        service.getFileEntry = function(fileEntryId) {
            return service.invoke('/dlfileentry/get-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        service.getFileEntry = function(groupId,folderId,title) {
            return service.invoke('/dlfileentry/get-file-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,title:title
            }]);
        };
        service.getFileEntryByUuidAndGroupId = function(uuid,groupId) {
            return service.invoke('/dlfileentry/get-file-entry-by-uuid-and-group-id',[{
                uuid:uuid
                ,groupId:groupId
            }]);
        };
        service.getFileEntryLock = function(fileEntryId) {
            return service.invoke('/dlfileentry/get-file-entry-lock',[{
                fileEntryId:fileEntryId
            }]);
        };
        service.getFoldersFileEntriesCount = function(groupId,folderIds,status) {
            return service.invoke('/dlfileentry/get-folders-file-entries-count',[{
                groupId:groupId
                ,folderIds:folderIds
                ,status:status
            }]);
        };
        service.getGroupFileEntries = function(groupId,userId,rootFolderId,start,end,obc) {
            return service.invoke('/dlfileentry/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getGroupFileEntries = function(groupId,userId,rootFolderId,mimeTypes,status,start,end,obc) {
            return service.invoke('/dlfileentry/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getGroupFileEntries = function(groupId,userId,repositoryId,rootFolderId,mimeTypes,status,start,end,obc) {
            return service.invoke('/dlfileentry/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,repositoryId:repositoryId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getGroupFileEntriesCount = function(groupId,userId,rootFolderId) {
            return service.invoke('/dlfileentry/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }]);
        };
        service.getGroupFileEntriesCount = function(groupId,userId,rootFolderId,mimeTypes,status) {
            return service.invoke('/dlfileentry/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
            }]);
        };
        service.getGroupFileEntriesCount = function(groupId,userId,repositoryId,rootFolderId,mimeTypes,status) {
            return service.invoke('/dlfileentry/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,repositoryId:repositoryId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
            }]);
        };
        service.hasFileEntryLock = function(fileEntryId) {
            return service.invoke('/dlfileentry/has-file-entry-lock',[{
                fileEntryId:fileEntryId
            }]);
        };
        service.isFileEntryCheckedOut = function(fileEntryId) {
            return service.invoke('/dlfileentry/is-file-entry-checked-out',[{
                fileEntryId:fileEntryId
            }]);
        };
        service.moveFileEntry = function(fileEntryId,newFolderId,serviceContext) {
            return service.invoke('/dlfileentry/move-file-entry',[{
                fileEntryId:fileEntryId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        service.refreshFileEntryLock = function(lockUuid,companyId,expirationTime) {
            return service.invoke('/dlfileentry/refresh-file-entry-lock',[{
                lockUuid:lockUuid
                ,companyId:companyId
                ,expirationTime:expirationTime
            }]);
        };
        service.revertFileEntry = function(fileEntryId,version,serviceContext) {
            return service.invoke('/dlfileentry/revert-file-entry',[{
                fileEntryId:fileEntryId
                ,version:version
                ,serviceContext:serviceContext
            }]);
        };
        service.search = function(groupId,creatorUserId,status,start,end) {
            return service.invoke('/dlfileentry/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.search = function(groupId,creatorUserId,folderId,mimeTypes,status,start,end) {
            return service.invoke('/dlfileentry/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.verifyFileEntryCheckOut = function(fileEntryId,lockUuid) {
            return service.invoke('/dlfileentry/verify-file-entry-check-out',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        service.verifyFileEntryLock = function(fileEntryId,lockUuid) {
            return service.invoke('/dlfileentry/verify-file-entry-lock',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});