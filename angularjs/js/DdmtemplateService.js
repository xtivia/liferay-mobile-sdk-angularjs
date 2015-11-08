(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdmtemplateService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTemplate = function(groupId,classNameId,classPK,nameMap,descriptionMap,type,mode,language,script,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/add-template':{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,mode:mode
                ,language:language
                ,script:script
                ,serviceContext:serviceContext
            }});
        };
        service.addTemplate = function(groupId,classNameId,classPK,templateKey,nameMap,descriptionMap,type,mode,language,script,cacheable,smallImage,smallImageURL,smallImageFile,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/add-template':{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,templateKey:templateKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,mode:mode
                ,language:language
                ,script:script
                ,cacheable:cacheable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallImageFile:smallImageFile
                ,serviceContext:serviceContext
            }});
        };
        service.copyTemplate = function(templateId,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/copy-template':{
                templateId:templateId
                ,serviceContext:serviceContext
            }});
        };
        service.copyTemplate = function(templateId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/copy-template':{
                templateId:templateId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,serviceContext:serviceContext
            }});
        };
        service.copyTemplates = function(classNameId,classPK,newClassPK,type,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/copy-templates':{
                classNameId:classNameId
                ,classPK:classPK
                ,newClassPK:newClassPK
                ,type:type
                ,serviceContext:serviceContext
            }});
        };
        service.deleteTemplate = function(templateId) {
            return SessionService.invoke({'/ddmtemplate/delete-template':{
                templateId:templateId
            }});
        };
        service.fetchTemplate = function(groupId,classNameId,templateKey) {
            return SessionService.invoke({'/ddmtemplate/fetch-template':{
                groupId:groupId
                ,classNameId:classNameId
                ,templateKey:templateKey
            }});
        };
        service.getTemplate = function(templateId) {
            return SessionService.invoke({'/ddmtemplate/get-template':{
                templateId:templateId
            }});
        };
        service.getTemplate = function(groupId,classNameId,templateKey) {
            return SessionService.invoke({'/ddmtemplate/get-template':{
                groupId:groupId
                ,classNameId:classNameId
                ,templateKey:templateKey
            }});
        };
        service.getTemplate = function(groupId,classNameId,templateKey,includeGlobalTemplates) {
            return SessionService.invoke({'/ddmtemplate/get-template':{
                groupId:groupId
                ,classNameId:classNameId
                ,templateKey:templateKey
                ,includeGlobalTemplates:includeGlobalTemplates
            }});
        };
        service.getTemplates = function(groupId,classNameId) {
            return SessionService.invoke({'/ddmtemplate/get-templates':{
                groupId:groupId
                ,classNameId:classNameId
            }});
        };
        service.getTemplates = function(groupId,classNameId,classPK) {
            return SessionService.invoke({'/ddmtemplate/get-templates':{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
            }});
        };
        service.getTemplates = function(groupId,classNameId,classPK,type) {
            return SessionService.invoke({'/ddmtemplate/get-templates':{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,type:type
            }});
        };
        service.getTemplates = function(groupId,classNameId,classPK,type,mode) {
            return SessionService.invoke({'/ddmtemplate/get-templates':{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,type:type
                ,mode:mode
            }});
        };
        service.getTemplatesByClassPk = function(groupId,classPK) {
            return SessionService.invoke({'/ddmtemplate/get-templates-by-class-pk':{
                groupId:groupId
                ,classPK:classPK
            }});
        };
        service.getTemplatesByStructureClassNameId = function(groupId,structureClassNameId,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/get-templates-by-structure-class-name-id':{
                groupId:groupId
                ,structureClassNameId:structureClassNameId
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.getTemplatesByStructureClassNameIdCount = function(groupId,structureClassNameId) {
            return SessionService.invoke({'/ddmtemplate/get-templates-by-structure-class-name-id-count':{
                groupId:groupId
                ,structureClassNameId:structureClassNameId
            }});
        };
        service.search = function(companyId,groupId,classNameId,classPK,keywords,type,mode,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/search':{
                companyId:companyId
                ,groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,keywords:keywords
                ,type:type
                ,mode:mode
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.search = function(companyId,groupIds,classNameIds,classPKs,keywords,type,mode,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/search':{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,classPKs:classPKs
                ,keywords:keywords
                ,type:type
                ,mode:mode
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.search = function(companyId,groupId,classNameId,classPK,name,description,type,mode,language,andOperator,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/search':{
                companyId:companyId
                ,groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,name:name
                ,description:description
                ,type:type
                ,mode:mode
                ,language:language
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.search = function(companyId,groupIds,classNameIds,classPKs,name,description,type,mode,language,andOperator,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/search':{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,classPKs:classPKs
                ,name:name
                ,description:description
                ,type:type
                ,mode:mode
                ,language:language
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.searchCount = function(companyId,groupId,classNameId,classPK,name,description,type,mode,language,andOperator) {
            return SessionService.invoke({'/ddmtemplate/search-count':{
                companyId:companyId
                ,groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,name:name
                ,description:description
                ,type:type
                ,mode:mode
                ,language:language
                ,andOperator:andOperator
            }});
        };
        service.searchCount = function(companyId,groupIds,classNameIds,classPKs,name,description,type,mode,language,andOperator) {
            return SessionService.invoke({'/ddmtemplate/search-count':{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,classPKs:classPKs
                ,name:name
                ,description:description
                ,type:type
                ,mode:mode
                ,language:language
                ,andOperator:andOperator
            }});
        };
        service.searchCount = function(companyId,groupId,classNameId,classPK,keywords,type,mode) {
            return SessionService.invoke({'/ddmtemplate/search-count':{
                companyId:companyId
                ,groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,keywords:keywords
                ,type:type
                ,mode:mode
            }});
        };
        service.searchCount = function(companyId,groupIds,classNameIds,classPKs,keywords,type,mode) {
            return SessionService.invoke({'/ddmtemplate/search-count':{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,classPKs:classPKs
                ,keywords:keywords
                ,type:type
                ,mode:mode
            }});
        };
        service.updateTemplate = function(templateId,classPK,nameMap,descriptionMap,type,mode,language,script,cacheable,smallImage,smallImageURL,smallImageFile,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/update-template':{
                templateId:templateId
                ,classPK:classPK
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,mode:mode
                ,language:language
                ,script:script
                ,cacheable:cacheable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallImageFile:smallImageFile
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();