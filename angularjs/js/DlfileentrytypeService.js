(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileentrytypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFileEntryType = function(groupId,name,description,ddmStructureIds,serviceContext) {
            return SessionService.invoke('/dlfileentrytype/add-file-entry-type',[{
                groupId:groupId
                ,name:name
                ,description:description
                ,ddmStructureIds:ddmStructureIds
                ,serviceContext:serviceContext
            }]);
        };
        service.addFileEntryType = function(groupId,fileEntryTypeKey,nameMap,descriptionMap,ddmStructureIds,serviceContext) {
            return SessionService.invoke('/dlfileentrytype/add-file-entry-type',[{
                groupId:groupId
                ,fileEntryTypeKey:fileEntryTypeKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,ddmStructureIds:ddmStructureIds
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteFileEntryType = function(fileEntryTypeId) {
            return SessionService.invoke('/dlfileentrytype/delete-file-entry-type',[{
                fileEntryTypeId:fileEntryTypeId
            }]);
        };
        service.getFileEntryType = function(fileEntryTypeId) {
            return SessionService.invoke('/dlfileentrytype/get-file-entry-type',[{
                fileEntryTypeId:fileEntryTypeId
            }]);
        };
        service.getFileEntryTypes = function(groupIds) {
            return SessionService.invoke('/dlfileentrytype/get-file-entry-types',[{
                groupIds:groupIds
            }]);
        };
        service.getFileEntryTypes = function(groupIds,start,end) {
            return SessionService.invoke('/dlfileentrytype/get-file-entry-types',[{
                groupIds:groupIds
                ,start:start
                ,end:end
            }]);
        };
        service.getFileEntryTypesCount = function(groupIds) {
            return SessionService.invoke('/dlfileentrytype/get-file-entry-types-count',[{
                groupIds:groupIds
            }]);
        };
        service.getFolderFileEntryTypes = function(groupIds,folderId,inherited) {
            return SessionService.invoke('/dlfileentrytype/get-folder-file-entry-types',[{
                groupIds:groupIds
                ,folderId:folderId
                ,inherited:inherited
            }]);
        };
        service.search = function(companyId,groupIds,keywords,includeBasicFileEntryType,start,end,orderByComparator) {
            return SessionService.invoke('/dlfileentrytype/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,includeBasicFileEntryType:includeBasicFileEntryType
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        service.searchCount = function(companyId,groupIds,keywords,includeBasicFileEntryType) {
            return SessionService.invoke('/dlfileentrytype/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,includeBasicFileEntryType:includeBasicFileEntryType
            }]);
        };
        service.updateFileEntryType = function(fileEntryTypeId,name,description,ddmStructureIds,serviceContext) {
            return SessionService.invoke('/dlfileentrytype/update-file-entry-type',[{
                fileEntryTypeId:fileEntryTypeId
                ,name:name
                ,description:description
                ,ddmStructureIds:ddmStructureIds
                ,serviceContext:serviceContext
            }]);
        };
        service.updateFileEntryType = function(fileEntryTypeId,nameMap,descriptionMap,ddmStructureIds,serviceContext) {
            return SessionService.invoke('/dlfileentrytype/update-file-entry-type',[{
                fileEntryTypeId:fileEntryTypeId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,ddmStructureIds:ddmStructureIds
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();