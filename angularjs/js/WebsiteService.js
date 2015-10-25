(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('WebsiteService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addWebsite = function(className,classPK,url,typeId,primary) {
            return service.invoke('/website/add-website',[{
                className:className
                ,classPK:classPK
                ,url:url
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        service.addWebsite = function(className,classPK,url,typeId,primary,serviceContext) {
            return service.invoke('/website/add-website',[{
                className:className
                ,classPK:classPK
                ,url:url
                ,typeId:typeId
                ,primary:primary
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteWebsite = function(websiteId) {
            return service.invoke('/website/delete-website',[{
                websiteId:websiteId
            }]);
        };
        service.getWebsite = function(websiteId) {
            return service.invoke('/website/get-website',[{
                websiteId:websiteId
            }]);
        };
        service.getWebsites = function(className,classPK) {
            return service.invoke('/website/get-websites',[{
                className:className
                ,classPK:classPK
            }]);
        };
        service.updateWebsite = function(websiteId,url,typeId,primary) {
            return service.invoke('/website/update-website',[{
                websiteId:websiteId
                ,url:url
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});