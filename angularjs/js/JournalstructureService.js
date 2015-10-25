(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalstructureService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addStructure = function(groupId,structureId,autoStructureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return service.invoke('/journalstructure/add-structure',[{
                groupId:groupId
                ,structureId:structureId
                ,autoStructureId:autoStructureId
                ,parentStructureId:parentStructureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        service.copyStructure = function(groupId,oldStructureId,newStructureId,autoStructureId) {
            return service.invoke('/journalstructure/copy-structure',[{
                groupId:groupId
                ,oldStructureId:oldStructureId
                ,newStructureId:newStructureId
                ,autoStructureId:autoStructureId
            }]);
        };
        service.deleteStructure = function(groupId,structureId) {
            return service.invoke('/journalstructure/delete-structure',[{
                groupId:groupId
                ,structureId:structureId
            }]);
        };
        service.getStructure = function(groupId,structureId) {
            return service.invoke('/journalstructure/get-structure',[{
                groupId:groupId
                ,structureId:structureId
            }]);
        };
        service.getStructure = function(groupId,structureId,includeGlobalStructures) {
            return service.invoke('/journalstructure/get-structure',[{
                groupId:groupId
                ,structureId:structureId
                ,includeGlobalStructures:includeGlobalStructures
            }]);
        };
        service.getStructures = function(groupId) {
            return service.invoke('/journalstructure/get-structures',[{
                groupId:groupId
            }]);
        };
        service.getStructures = function(groupIds) {
            return service.invoke('/journalstructure/get-structures',[{
                groupIds:groupIds
            }]);
        };
        service.search = function(companyId,groupIds,keywords,start,end,obc) {
            return service.invoke('/journalstructure/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.search = function(companyId,groupIds,structureId,name,description,andOperator,start,end,obc) {
            return service.invoke('/journalstructure/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,structureId:structureId
                ,name:name
                ,description:description
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.searchCount = function(companyId,groupIds,keywords) {
            return service.invoke('/journalstructure/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
            }]);
        };
        service.searchCount = function(companyId,groupIds,structureId,name,description,andOperator) {
            return service.invoke('/journalstructure/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,structureId:structureId
                ,name:name
                ,description:description
                ,andOperator:andOperator
            }]);
        };
        service.updateStructure = function(groupId,structureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return service.invoke('/journalstructure/update-structure',[{
                groupId:groupId
                ,structureId:structureId
                ,parentStructureId:parentStructureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});