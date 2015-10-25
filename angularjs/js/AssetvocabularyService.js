(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetvocabularyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addVocabulary = function(title,serviceContext) {
            return service.invoke('/assetvocabulary/add-vocabulary',[{
                title:title
                ,serviceContext:serviceContext
            }]);
        };
        service.addVocabulary = function(titleMap,descriptionMap,settings,serviceContext) {
            return service.invoke('/assetvocabulary/add-vocabulary',[{
                titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,settings:settings
                ,serviceContext:serviceContext
            }]);
        };
        service.addVocabulary = function(title,titleMap,descriptionMap,settings,serviceContext) {
            return service.invoke('/assetvocabulary/add-vocabulary',[{
                title:title
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,settings:settings
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteVocabularies = function(vocabularyIds) {
            return service.invoke('/assetvocabulary/delete-vocabularies',[{
                vocabularyIds:vocabularyIds
            }]);
        };
        service.deleteVocabularies = function(vocabularyIds,serviceContext) {
            return service.invoke('/assetvocabulary/delete-vocabularies',[{
                vocabularyIds:vocabularyIds
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteVocabulary = function(vocabularyId) {
            return service.invoke('/assetvocabulary/delete-vocabulary',[{
                vocabularyId:vocabularyId
            }]);
        };
        service.getCompanyVocabularies = function(companyId) {
            return service.invoke('/assetvocabulary/get-company-vocabularies',[{
                companyId:companyId
            }]);
        };
        service.getGroupVocabularies = function(groupId) {
            return service.invoke('/assetvocabulary/get-group-vocabularies',[{
                groupId:groupId
            }]);
        };
        service.getGroupVocabularies = function(groupId,createDefaultVocabulary) {
            return service.invoke('/assetvocabulary/get-group-vocabularies',[{
                groupId:groupId
                ,createDefaultVocabulary:createDefaultVocabulary
            }]);
        };
        service.getGroupVocabularies = function(groupId,start,end,obc) {
            return service.invoke('/assetvocabulary/get-group-vocabularies',[{
                groupId:groupId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getGroupVocabularies = function(groupId,name,start,end,obc) {
            return service.invoke('/assetvocabulary/get-group-vocabularies',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getGroupVocabulariesCount = function(groupId) {
            return service.invoke('/assetvocabulary/get-group-vocabularies-count',[{
                groupId:groupId
            }]);
        };
        service.getGroupVocabulariesCount = function(groupId,name) {
            return service.invoke('/assetvocabulary/get-group-vocabularies-count',[{
                groupId:groupId
                ,name:name
            }]);
        };
        service.getGroupVocabulariesDisplay = function(groupId,name,start,end,obc) {
            return service.invoke('/assetvocabulary/get-group-vocabularies-display',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getGroupVocabulariesDisplay = function(groupId,title,start,end,addDefaultVocabulary,obc) {
            return service.invoke('/assetvocabulary/get-group-vocabularies-display',[{
                groupId:groupId
                ,title:title
                ,start:start
                ,end:end
                ,addDefaultVocabulary:addDefaultVocabulary
                ,obc:obc
            }]);
        };
        service.getGroupsVocabularies = function(groupIds) {
            return service.invoke('/assetvocabulary/get-groups-vocabularies',[{
                groupIds:groupIds
            }]);
        };
        service.getGroupsVocabularies = function(groupIds,className) {
            return service.invoke('/assetvocabulary/get-groups-vocabularies',[{
                groupIds:groupIds
                ,className:className
            }]);
        };
        service.getJsonGroupVocabularies = function(groupId,name,start,end,obc) {
            return service.invoke('/assetvocabulary/get-json-group-vocabularies',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getVocabularies = function(vocabularyIds) {
            return service.invoke('/assetvocabulary/get-vocabularies',[{
                vocabularyIds:vocabularyIds
            }]);
        };
        service.getVocabulary = function(vocabularyId) {
            return service.invoke('/assetvocabulary/get-vocabulary',[{
                vocabularyId:vocabularyId
            }]);
        };
        service.updateVocabulary = function(vocabularyId,titleMap,descriptionMap,settings,serviceContext) {
            return service.invoke('/assetvocabulary/update-vocabulary',[{
                vocabularyId:vocabularyId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,settings:settings
                ,serviceContext:serviceContext
            }]);
        };
        service.updateVocabulary = function(vocabularyId,title,titleMap,descriptionMap,settings,serviceContext) {
            return service.invoke('/assetvocabulary/update-vocabulary',[{
                vocabularyId:vocabularyId
                ,title:title
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,settings:settings
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});