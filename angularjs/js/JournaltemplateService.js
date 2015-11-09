(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournaltemplateService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTemplate = function(groupId,templateId,autoTemplateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,serviceContext) {
            return SessionService.invoke({'/journaltemplate/add-template':{
                groupId:groupId
                ,templateId:templateId
                ,autoTemplateId:autoTemplateId
                ,structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsl:xsl
                ,formatXsl:formatXsl
                ,langType:langType
                ,cacheable:cacheable
                ,serviceContext:serviceContext
            }});
        };
        service.addTemplate = function(groupId,templateId,autoTemplateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,smallImage,smallImageURL,smallFile,serviceContext) {
            return SessionService.invoke({'/journaltemplate/add-template':{
                groupId:groupId
                ,templateId:templateId
                ,autoTemplateId:autoTemplateId
                ,structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsl:xsl
                ,formatXsl:formatXsl
                ,langType:langType
                ,cacheable:cacheable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,serviceContext:serviceContext
            }});
        };
        service.copyTemplate = function(groupId,oldTemplateId,newTemplateId,autoTemplateId) {
            return SessionService.invoke({'/journaltemplate/copy-template':{
                groupId:groupId
                ,oldTemplateId:oldTemplateId
                ,newTemplateId:newTemplateId
                ,autoTemplateId:autoTemplateId
            }});
        };
        service.deleteTemplate = function(groupId,templateId) {
            return SessionService.invoke({'/journaltemplate/delete-template':{
                groupId:groupId
                ,templateId:templateId
            }});
        };
        service.getStructureTemplates = function(groupId,structureId) {
            return SessionService.invoke({'/journaltemplate/get-structure-templates':{
                groupId:groupId
                ,structureId:structureId
            }});
        };
        service.getTemplate = function(groupId,templateId) {
            return SessionService.invoke({'/journaltemplate/get-template':{
                groupId:groupId
                ,templateId:templateId
            }});
        };
        service.getTemplate = function(groupId,templateId,includeGlobalTemplates) {
            return SessionService.invoke({'/journaltemplate/get-template':{
                groupId:groupId
                ,templateId:templateId
                ,includeGlobalTemplates:includeGlobalTemplates
            }});
        };
        service.search = function(companyId,groupIds,templateId,structureId,structureIdComparator,name,description,andOperator,start,end,obc) {
            return SessionService.invoke({'/journaltemplate/search':{
                companyId:companyId
                ,groupIds:groupIds
                ,templateId:templateId
                ,structureId:structureId
                ,structureIdComparator:structureIdComparator
                ,name:name
                ,description:description
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.search = function(companyId,groupIds,keywords,structureId,structureIdComparator,start,end,obc) {
            return SessionService.invoke({'/journaltemplate/search':{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,structureId:structureId
                ,structureIdComparator:structureIdComparator
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.searchCount = function(companyId,groupIds,keywords,structureId,structureIdComparator) {
            return SessionService.invoke({'/journaltemplate/search-count':{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,structureId:structureId
                ,structureIdComparator:structureIdComparator
            }});
        };
        service.searchCount = function(companyId,groupIds,templateId,structureId,structureIdComparator,name,description,andOperator) {
            return SessionService.invoke({'/journaltemplate/search-count':{
                companyId:companyId
                ,groupIds:groupIds
                ,templateId:templateId
                ,structureId:structureId
                ,structureIdComparator:structureIdComparator
                ,name:name
                ,description:description
                ,andOperator:andOperator
            }});
        };
        service.updateTemplate = function(groupId,templateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,serviceContext) {
            return SessionService.invoke({'/journaltemplate/update-template':{
                groupId:groupId
                ,templateId:templateId
                ,structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsl:xsl
                ,formatXsl:formatXsl
                ,langType:langType
                ,cacheable:cacheable
                ,serviceContext:serviceContext
            }});
        };
        service.updateTemplate = function(groupId,templateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,smallImage,smallImageURL,smallFile,serviceContext) {
            return SessionService.invoke({'/journaltemplate/update-template':{
                groupId:groupId
                ,templateId:templateId
                ,structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsl:xsl
                ,formatXsl:formatXsl
                ,langType:langType
                ,cacheable:cacheable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();