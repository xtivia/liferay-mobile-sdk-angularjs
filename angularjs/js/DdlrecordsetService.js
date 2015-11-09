(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('DdlrecordsetService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRecordSet = function(groupId,ddmStructureId,recordSetKey,nameMap,descriptionMap,minDisplayRows,scope,serviceContext) {
            return SessionService.invoke({'/ddlrecordset/add-record-set':{
                groupId:groupId
                ,ddmStructureId:ddmStructureId
                ,recordSetKey:recordSetKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,minDisplayRows:minDisplayRows
                ,scope:scope
                ,serviceContext:serviceContext
            }});
        };
        service.deleteRecordSet = function(recordSetId) {
            return SessionService.invoke({'/ddlrecordset/delete-record-set':{
                recordSetId:recordSetId
            }});
        };
        service.getRecordSet = function(recordSetId) {
            return SessionService.invoke({'/ddlrecordset/get-record-set':{
                recordSetId:recordSetId
            }});
        };
        service.search = function(companyId,groupId,keywords,scope,start,end,orderByComparator) {
            return SessionService.invoke({'/ddlrecordset/search':{
                companyId:companyId
                ,groupId:groupId
                ,keywords:keywords
                ,scope:scope
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.search = function(companyId,groupId,name,description,scope,andOperator,start,end,orderByComparator) {
            return SessionService.invoke({'/ddlrecordset/search':{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,description:description
                ,scope:scope
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.searchCount = function(companyId,groupId,keywords,scope) {
            return SessionService.invoke({'/ddlrecordset/search-count':{
                companyId:companyId
                ,groupId:groupId
                ,keywords:keywords
                ,scope:scope
            }});
        };
        service.searchCount = function(companyId,groupId,name,description,scope,andOperator) {
            return SessionService.invoke({'/ddlrecordset/search-count':{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,description:description
                ,scope:scope
                ,andOperator:andOperator
            }});
        };
        service.updateMinDisplayRows = function(recordSetId,minDisplayRows,serviceContext) {
            return SessionService.invoke({'/ddlrecordset/update-min-display-rows':{
                recordSetId:recordSetId
                ,minDisplayRows:minDisplayRows
                ,serviceContext:serviceContext
            }});
        };
        service.updateRecordSet = function(recordSetId,ddmStructureId,nameMap,descriptionMap,minDisplayRows,serviceContext) {
            return SessionService.invoke({'/ddlrecordset/update-record-set':{
                recordSetId:recordSetId
                ,ddmStructureId:ddmStructureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,minDisplayRows:minDisplayRows
                ,serviceContext:serviceContext
            }});
        };
        service.updateRecordSet = function(groupId,ddmStructureId,recordSetKey,nameMap,descriptionMap,minDisplayRows,serviceContext) {
            return SessionService.invoke({'/ddlrecordset/update-record-set':{
                groupId:groupId
                ,ddmStructureId:ddmStructureId
                ,recordSetKey:recordSetKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,minDisplayRows:minDisplayRows
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();