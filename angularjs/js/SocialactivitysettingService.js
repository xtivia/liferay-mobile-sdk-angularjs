(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialactivitysettingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getActivityDefinition = function(groupId,className,activityType) {
            return service.invoke('/socialactivitysetting/get-activity-definition',[{
                groupId:groupId
                ,className:className
                ,activityType:activityType
            }]);
        };
        service.getActivityDefinitions = function(groupId,className) {
            return service.invoke('/socialactivitysetting/get-activity-definitions',[{
                groupId:groupId
                ,className:className
            }]);
        };
        service.getActivitySettings = function(groupId) {
            return service.invoke('/socialactivitysetting/get-activity-settings',[{
                groupId:groupId
            }]);
        };
        service.getJsonActivityDefinitions = function(groupId,className) {
            return service.invoke('/socialactivitysetting/get-json-activity-definitions',[{
                groupId:groupId
                ,className:className
            }]);
        };
        service.updateActivitySetting = function(groupId,className,enabled) {
            return service.invoke('/socialactivitysetting/update-activity-setting',[{
                groupId:groupId
                ,className:className
                ,enabled:enabled
            }]);
        };
        service.updateActivitySetting = function(groupId,className,activityType,activityCounterDefinition) {
            return service.invoke('/socialactivitysetting/update-activity-setting',[{
                groupId:groupId
                ,className:className
                ,activityType:activityType
                ,activityCounterDefinition:activityCounterDefinition
            }]);
        };
        service.updateActivitySettings = function(groupId,className,activityType,activityCounterDefinitions) {
            return service.invoke('/socialactivitysetting/update-activity-settings',[{
                groupId:groupId
                ,className:className
                ,activityType:activityType
                ,activityCounterDefinitions:activityCounterDefinitions
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});