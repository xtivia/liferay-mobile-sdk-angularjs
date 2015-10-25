(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdmstructureService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addStructure = function(groupId,parentStructureId,classNameId,structureKey,nameMap,descriptionMap,xsd,storageType,type,serviceContext) {
            return service.invoke('/ddmstructure/add-structure',[{
                groupId:groupId
                ,parentStructureId:parentStructureId
                ,classNameId:classNameId
                ,structureKey:structureKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,storageType:storageType
                ,type:type
                ,serviceContext:serviceContext
            }]);
        };
        service.addStructure = function(userId,groupId,parentStructureKey,classNameId,structureKey,nameMap,descriptionMap,xsd,storageType,type,serviceContext) {
            return service.invoke('/ddmstructure/add-structure',[{
                userId:userId
                ,groupId:groupId
                ,parentStructureKey:parentStructureKey
                ,classNameId:classNameId
                ,structureKey:structureKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,storageType:storageType
                ,type:type
                ,serviceContext:serviceContext
            }]);
        };
        service.addStructure = function(userId,groupId,classNameId,nameMap,descriptionMap,xsd,serviceContext) {
            return service.invoke('/ddmstructure/add-structure',[{
                userId:userId
                ,groupId:groupId
                ,classNameId:classNameId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        service.copyStructure = function(structureId,serviceContext) {
            return service.invoke('/ddmstructure/copy-structure',[{
                structureId:structureId
                ,serviceContext:serviceContext
            }]);
        };
        service.copyStructure = function(structureId,nameMap,descriptionMap,serviceContext) {
            return service.invoke('/ddmstructure/copy-structure',[{
                structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteStructure = function(structureId) {
            return service.invoke('/ddmstructure/delete-structure',[{
                structureId:structureId
            }]);
        };
        service.fetchStructure = function(groupId,classNameId,structureKey) {
            return service.invoke('/ddmstructure/fetch-structure',[{
                groupId:groupId
                ,classNameId:classNameId
                ,structureKey:structureKey
            }]);
        };
        service.getStructure = function(structureId) {
            return service.invoke('/ddmstructure/get-structure',[{
                structureId:structureId
            }]);
        };
        service.getStructure = function(groupId,classNameId,structureKey) {
            return service.invoke('/ddmstructure/get-structure',[{
                groupId:groupId
                ,classNameId:classNameId
                ,structureKey:structureKey
            }]);
        };
        service.getStructure = function(groupId,classNameId,structureKey,includeGlobalStructures) {
            return service.invoke('/ddmstructure/get-structure',[{
                groupId:groupId
                ,classNameId:classNameId
                ,structureKey:structureKey
                ,includeGlobalStructures:includeGlobalStructures
            }]);
        };
        service.getStructures = function(groupId) {
            return service.invoke('/ddmstructure/get-structures',[{
                groupId:groupId
            }]);
        };
        service.getStructures = function(groupIds) {
            return service.invoke('/ddmstructure/get-structures',[{
                groupIds:groupIds
            }]);
        };
        service.getStructures = function(groupIds,classNameId) {
            return service.invoke('/ddmstructure/get-structures',[{
                groupIds:groupIds
                ,classNameId:classNameId
            }]);
        };
        service.getStructures = function(groupIds,classNameId,start,end) {
            return service.invoke('/ddmstructure/get-structures',[{
                groupIds:groupIds
                ,classNameId:classNameId
                ,start:start
                ,end:end
            }]);
        };
        service.search = function(companyId,groupIds,classNameIds,name,description,storageType,type,andOperator,start,end,orderByComparator) {
            return service.invoke('/ddmstructure/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,name:name
                ,description:description
                ,storageType:storageType
                ,type:type
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        service.search = function(companyId,groupIds,classNameIds,keywords,start,end,orderByComparator) {
            return service.invoke('/ddmstructure/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,keywords:keywords
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        service.searchCount = function(companyId,groupIds,classNameIds,keywords) {
            return service.invoke('/ddmstructure/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,keywords:keywords
            }]);
        };
        service.searchCount = function(companyId,groupIds,classNameIds,name,description,storageType,type,andOperator) {
            return service.invoke('/ddmstructure/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,name:name
                ,description:description
                ,storageType:storageType
                ,type:type
                ,andOperator:andOperator
            }]);
        };
        service.updateStructure = function(structureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return service.invoke('/ddmstructure/update-structure',[{
                structureId:structureId
                ,parentStructureId:parentStructureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        service.updateStructure = function(groupId,parentStructureId,classNameId,structureKey,nameMap,descriptionMap,xsd,serviceContext) {
            return service.invoke('/ddmstructure/update-structure',[{
                groupId:groupId
                ,parentStructureId:parentStructureId
                ,classNameId:classNameId
                ,structureKey:structureKey
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