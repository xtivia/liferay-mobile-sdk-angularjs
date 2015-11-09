(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialactivityService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getActivities = function(className,start,end) {
            return SessionService.invoke({'/socialactivity/get-activities':{
                className:className
                ,start:start
                ,end:end
            }});
        };
        service.getActivities = function(classNameId,start,end) {
            return SessionService.invoke({'/socialactivity/get-activities':{
                classNameId:classNameId
                ,start:start
                ,end:end
            }});
        };
        service.getActivities = function(mirrorActivityId,className,classPK,start,end) {
            return SessionService.invoke({'/socialactivity/get-activities':{
                mirrorActivityId:mirrorActivityId
                ,className:className
                ,classPK:classPK
                ,start:start
                ,end:end
            }});
        };
        service.getActivities = function(mirrorActivityId,classNameId,classPK,start,end) {
            return SessionService.invoke({'/socialactivity/get-activities':{
                mirrorActivityId:mirrorActivityId
                ,classNameId:classNameId
                ,classPK:classPK
                ,start:start
                ,end:end
            }});
        };
        service.getActivitiesCount = function(className) {
            return SessionService.invoke({'/socialactivity/get-activities-count':{
                className:className
            }});
        };
        service.getActivitiesCount = function(classNameId) {
            return SessionService.invoke({'/socialactivity/get-activities-count':{
                classNameId:classNameId
            }});
        };
        service.getActivitiesCount = function(mirrorActivityId,className,classPK) {
            return SessionService.invoke({'/socialactivity/get-activities-count':{
                mirrorActivityId:mirrorActivityId
                ,className:className
                ,classPK:classPK
            }});
        };
        service.getActivitiesCount = function(mirrorActivityId,classNameId,classPK) {
            return SessionService.invoke({'/socialactivity/get-activities-count':{
                mirrorActivityId:mirrorActivityId
                ,classNameId:classNameId
                ,classPK:classPK
            }});
        };
        service.getActivity = function(activityId) {
            return SessionService.invoke({'/socialactivity/get-activity':{
                activityId:activityId
            }});
        };
        service.getActivitySetActivities = function(activitySetId,start,end) {
            return SessionService.invoke({'/socialactivity/get-activity-set-activities':{
                activitySetId:activitySetId
                ,start:start
                ,end:end
            }});
        };
        service.getGroupActivities = function(groupId,start,end) {
            return SessionService.invoke({'/socialactivity/get-group-activities':{
                groupId:groupId
                ,start:start
                ,end:end
            }});
        };
        service.getGroupActivitiesCount = function(groupId) {
            return SessionService.invoke({'/socialactivity/get-group-activities-count':{
                groupId:groupId
            }});
        };
        service.getGroupUsersActivities = function(groupId,start,end) {
            return SessionService.invoke({'/socialactivity/get-group-users-activities':{
                groupId:groupId
                ,start:start
                ,end:end
            }});
        };
        service.getGroupUsersActivitiesCount = function(groupId) {
            return SessionService.invoke({'/socialactivity/get-group-users-activities-count':{
                groupId:groupId
            }});
        };
        service.getMirrorActivity = function(mirrorActivityId) {
            return SessionService.invoke({'/socialactivity/get-mirror-activity':{
                mirrorActivityId:mirrorActivityId
            }});
        };
        service.getOrganizationActivities = function(organizationId,start,end) {
            return SessionService.invoke({'/socialactivity/get-organization-activities':{
                organizationId:organizationId
                ,start:start
                ,end:end
            }});
        };
        service.getOrganizationActivitiesCount = function(organizationId) {
            return SessionService.invoke({'/socialactivity/get-organization-activities-count':{
                organizationId:organizationId
            }});
        };
        service.getOrganizationUsersActivities = function(organizationId,start,end) {
            return SessionService.invoke({'/socialactivity/get-organization-users-activities':{
                organizationId:organizationId
                ,start:start
                ,end:end
            }});
        };
        service.getOrganizationUsersActivitiesCount = function(organizationId) {
            return SessionService.invoke({'/socialactivity/get-organization-users-activities-count':{
                organizationId:organizationId
            }});
        };
        service.getRelationActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-relation-activities':{
                userId:userId
                ,start:start
                ,end:end
            }});
        };
        service.getRelationActivities = function(userId,type,start,end) {
            return SessionService.invoke({'/socialactivity/get-relation-activities':{
                userId:userId
                ,type:type
                ,start:start
                ,end:end
            }});
        };
        service.getRelationActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-relation-activities-count':{
                userId:userId
            }});
        };
        service.getRelationActivitiesCount = function(userId,type) {
            return SessionService.invoke({'/socialactivity/get-relation-activities-count':{
                userId:userId
                ,type:type
            }});
        };
        service.getUserActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-user-activities':{
                userId:userId
                ,start:start
                ,end:end
            }});
        };
        service.getUserActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-user-activities-count':{
                userId:userId
            }});
        };
        service.getUserGroupsActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-user-groups-activities':{
                userId:userId
                ,start:start
                ,end:end
            }});
        };
        service.getUserGroupsActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-user-groups-activities-count':{
                userId:userId
            }});
        };
        service.getUserGroupsAndOrganizationsActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-user-groups-and-organizations-activities':{
                userId:userId
                ,start:start
                ,end:end
            }});
        };
        service.getUserGroupsAndOrganizationsActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-user-groups-and-organizations-activities-count':{
                userId:userId
            }});
        };
        service.getUserOrganizationsActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-user-organizations-activities':{
                userId:userId
                ,start:start
                ,end:end
            }});
        };
        service.getUserOrganizationsActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-user-organizations-activities-count':{
                userId:userId
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();