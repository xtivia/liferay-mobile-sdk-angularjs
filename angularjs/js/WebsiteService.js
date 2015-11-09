(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('WebsiteService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addWebsite = function(className,classPK,url,typeId,primary) {
            return SessionService.invoke({'/website/add-website':{
                className:className
                ,classPK:classPK
                ,url:url
                ,typeId:typeId
                ,primary:primary
            }});
        };
        service.addWebsite = function(className,classPK,url,typeId,primary,serviceContext) {
            return SessionService.invoke({'/website/add-website':{
                className:className
                ,classPK:classPK
                ,url:url
                ,typeId:typeId
                ,primary:primary
                ,serviceContext:serviceContext
            }});
        };
        service.deleteWebsite = function(websiteId) {
            return SessionService.invoke({'/website/delete-website':{
                websiteId:websiteId
            }});
        };
        service.getWebsite = function(websiteId) {
            return SessionService.invoke({'/website/get-website':{
                websiteId:websiteId
            }});
        };
        service.getWebsites = function(className,classPK) {
            return SessionService.invoke({'/website/get-websites':{
                className:className
                ,classPK:classPK
            }});
        };
        service.updateWebsite = function(websiteId,url,typeId,primary) {
            return SessionService.invoke({'/website/update-website':{
                websiteId:websiteId
                ,url:url
                ,typeId:typeId
                ,primary:primary
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();