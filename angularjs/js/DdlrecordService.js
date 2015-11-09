(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('DdlrecordService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRecord = function(groupId,recordSetId,displayIndex,fields,serviceContext) {
            return SessionService.invoke({'/ddlrecord/add-record':{
                groupId:groupId
                ,recordSetId:recordSetId
                ,displayIndex:displayIndex
                ,fields:fields
                ,serviceContext:serviceContext
            }});
        };
        service.addRecord = function(groupId,recordSetId,displayIndex,fieldsMap,serviceContext) {
            return SessionService.invoke({'/ddlrecord/add-record':{
                groupId:groupId
                ,recordSetId:recordSetId
                ,displayIndex:displayIndex
                ,fieldsMap:fieldsMap
                ,serviceContext:serviceContext
            }});
        };
        service.deleteRecord = function(recordId) {
            return SessionService.invoke({'/ddlrecord/delete-record':{
                recordId:recordId
            }});
        };
        service.deleteRecordLocale = function(recordId,locale,serviceContext) {
            return SessionService.invoke({'/ddlrecord/delete-record-locale':{
                recordId:recordId
                ,locale:locale
                ,serviceContext:serviceContext
            }});
        };
        service.getRecord = function(recordId) {
            return SessionService.invoke({'/ddlrecord/get-record':{
                recordId:recordId
            }});
        };
        service.revertRecordVersion = function(recordId,version,serviceContext) {
            return SessionService.invoke({'/ddlrecord/revert-record-version':{
                recordId:recordId
                ,version:version
                ,serviceContext:serviceContext
            }});
        };
        service.updateRecord = function(recordId,displayIndex,fieldsMap,mergeFields,serviceContext) {
            return SessionService.invoke({'/ddlrecord/update-record':{
                recordId:recordId
                ,displayIndex:displayIndex
                ,fieldsMap:fieldsMap
                ,mergeFields:mergeFields
                ,serviceContext:serviceContext
            }});
        };
        service.updateRecord = function(recordId,majorVersion,displayIndex,fields,mergeFields,serviceContext) {
            return SessionService.invoke({'/ddlrecord/update-record':{
                recordId:recordId
                ,majorVersion:majorVersion
                ,displayIndex:displayIndex
                ,fields:fields
                ,mergeFields:mergeFields
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();