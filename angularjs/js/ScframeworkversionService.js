(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ScframeworkversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFrameworkVersion = function(name,url,active,priority,serviceContext) {
            return service.invoke('/scframeworkversion/add-framework-version',[{
                name:name
                ,url:url
                ,active:active
                ,priority:priority
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteFrameworkVersion = function(frameworkVersionId) {
            return service.invoke('/scframeworkversion/delete-framework-version',[{
                frameworkVersionId:frameworkVersionId
            }]);
        };
        service.getFrameworkVersion = function(frameworkVersionId) {
            return service.invoke('/scframeworkversion/get-framework-version',[{
                frameworkVersionId:frameworkVersionId
            }]);
        };
        service.getFrameworkVersions = function(groupId,active) {
            return service.invoke('/scframeworkversion/get-framework-versions',[{
                groupId:groupId
                ,active:active
            }]);
        };
        service.getFrameworkVersions = function(groupId,active,start,end) {
            return service.invoke('/scframeworkversion/get-framework-versions',[{
                groupId:groupId
                ,active:active
                ,start:start
                ,end:end
            }]);
        };
        service.updateFrameworkVersion = function(frameworkVersionId,name,url,active,priority) {
            return service.invoke('/scframeworkversion/update-framework-version',[{
                frameworkVersionId:frameworkVersionId
                ,name:name
                ,url:url
                ,active:active
                ,priority:priority
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});