(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('JournalfeedService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFeed = function(groupId,feedId,autoFeedId,name,description,type,structureId,templateId,rendererTemplateId,delta,orderByCol,orderByType,targetLayoutFriendlyUrl,targetPortletId,contentField,feedType,feedVersion,serviceContext) {
            return SessionService.invoke({'/journalfeed/add-feed':{
                groupId:groupId
                ,feedId:feedId
                ,autoFeedId:autoFeedId
                ,name:name
                ,description:description
                ,type:type
                ,structureId:structureId
                ,templateId:templateId
                ,rendererTemplateId:rendererTemplateId
                ,delta:delta
                ,orderByCol:orderByCol
                ,orderByType:orderByType
                ,targetLayoutFriendlyUrl:targetLayoutFriendlyUrl
                ,targetPortletId:targetPortletId
                ,contentField:contentField
                ,feedType:feedType
                ,feedVersion:feedVersion
                ,serviceContext:serviceContext
            }});
        };
        service.deleteFeed = function(feedId) {
            return SessionService.invoke({'/journalfeed/delete-feed':{
                feedId:feedId
            }});
        };
        service.deleteFeed = function(groupId,feedId) {
            return SessionService.invoke({'/journalfeed/delete-feed':{
                groupId:groupId
                ,feedId:feedId
            }});
        };
        service.getFeed = function(feedId) {
            return SessionService.invoke({'/journalfeed/get-feed':{
                feedId:feedId
            }});
        };
        service.getFeed = function(groupId,feedId) {
            return SessionService.invoke({'/journalfeed/get-feed':{
                groupId:groupId
                ,feedId:feedId
            }});
        };
        service.updateFeed = function(groupId,feedId,name,description,type,structureId,templateId,rendererTemplateId,delta,orderByCol,orderByType,targetLayoutFriendlyUrl,targetPortletId,contentField,feedType,feedVersion,serviceContext) {
            return SessionService.invoke({'/journalfeed/update-feed':{
                groupId:groupId
                ,feedId:feedId
                ,name:name
                ,description:description
                ,type:type
                ,structureId:structureId
                ,templateId:templateId
                ,rendererTemplateId:rendererTemplateId
                ,delta:delta
                ,orderByCol:orderByCol
                ,orderByType:orderByType
                ,targetLayoutFriendlyUrl:targetLayoutFriendlyUrl
                ,targetPortletId:targetPortletId
                ,contentField:contentField
                ,feedType:feedType
                ,feedVersion:feedVersion
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();