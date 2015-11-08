(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getCompanyEntries = function(companyId,start,end) {
            return SessionService.invoke({'/assetentry/get-company-entries':{
                companyId:companyId
                ,start:start
                ,end:end
            }});
        };
        service.getCompanyEntriesCount = function(companyId) {
            return SessionService.invoke({'/assetentry/get-company-entries-count':{
                companyId:companyId
            }});
        };
        service.getEntries = function(entryQuery) {
            return SessionService.invoke({'/assetentry/get-entries':{
                entryQuery:entryQuery
            }});
        };
        service.getEntriesCount = function(entryQuery) {
            return SessionService.invoke({'/assetentry/get-entries-count':{
                entryQuery:entryQuery
            }});
        };
        service.getEntry = function(entryId) {
            return SessionService.invoke({'/assetentry/get-entry':{
                entryId:entryId
            }});
        };
        service.incrementViewCounter = function(className,classPK) {
            return SessionService.invoke({'/assetentry/increment-view-counter':{
                className:className
                ,classPK:classPK
            }});
        };
        service.updateEntry = function(groupId,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke({'/assetentry/update-entry':{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,classUuid:classUuid
                ,classTypeId:classTypeId
                ,categoryIds:categoryIds
                ,tagNames:tagNames
                ,visible:visible
                ,startDate:startDate
                ,endDate:endDate
                ,expirationDate:expirationDate
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,summary:summary
                ,url:url
                ,layoutUuid:layoutUuid
                ,height:height
                ,width:width
                ,priority:priority
                ,sync:sync
            }});
        };
        service.updateEntry = function(groupId,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,publishDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke({'/assetentry/update-entry':{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,classUuid:classUuid
                ,classTypeId:classTypeId
                ,categoryIds:categoryIds
                ,tagNames:tagNames
                ,visible:visible
                ,startDate:startDate
                ,endDate:endDate
                ,publishDate:publishDate
                ,expirationDate:expirationDate
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,summary:summary
                ,url:url
                ,layoutUuid:layoutUuid
                ,height:height
                ,width:width
                ,priority:priority
                ,sync:sync
            }});
        };
        service.updateEntry = function(groupId,createDate,modifiedDate,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke({'/assetentry/update-entry':{
                groupId:groupId
                ,createDate:createDate
                ,modifiedDate:modifiedDate
                ,className:className
                ,classPK:classPK
                ,classUuid:classUuid
                ,classTypeId:classTypeId
                ,categoryIds:categoryIds
                ,tagNames:tagNames
                ,visible:visible
                ,startDate:startDate
                ,endDate:endDate
                ,expirationDate:expirationDate
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,summary:summary
                ,url:url
                ,layoutUuid:layoutUuid
                ,height:height
                ,width:width
                ,priority:priority
                ,sync:sync
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();