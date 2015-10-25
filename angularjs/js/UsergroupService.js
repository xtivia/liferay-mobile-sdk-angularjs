(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UsergroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroupUserGroups = function(groupId,userGroupIds) {
            return service.invoke('/usergroup/add-group-user-groups',[{
                groupId:groupId
                ,userGroupIds:userGroupIds
            }]);
        };
        service.addTeamUserGroups = function(teamId,userGroupIds) {
            return service.invoke('/usergroup/add-team-user-groups',[{
                teamId:teamId
                ,userGroupIds:userGroupIds
            }]);
        };
        service.addUserGroup = function(name,description) {
            return service.invoke('/usergroup/add-user-group',[{
                name:name
                ,description:description
            }]);
        };
        service.addUserGroup = function(name,description,serviceContext) {
            return service.invoke('/usergroup/add-user-group',[{
                name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteUserGroup = function(userGroupId) {
            return service.invoke('/usergroup/delete-user-group',[{
                userGroupId:userGroupId
            }]);
        };
        service.getUserGroup = function(name) {
            return service.invoke('/usergroup/get-user-group',[{
                name:name
            }]);
        };
        service.getUserGroup = function(userGroupId) {
            return service.invoke('/usergroup/get-user-group',[{
                userGroupId:userGroupId
            }]);
        };
        service.getUserUserGroups = function(userId) {
            return service.invoke('/usergroup/get-user-user-groups',[{
                userId:userId
            }]);
        };
        service.unsetGroupUserGroups = function(groupId,userGroupIds) {
            return service.invoke('/usergroup/unset-group-user-groups',[{
                groupId:groupId
                ,userGroupIds:userGroupIds
            }]);
        };
        service.unsetTeamUserGroups = function(teamId,userGroupIds) {
            return service.invoke('/usergroup/unset-team-user-groups',[{
                teamId:teamId
                ,userGroupIds:userGroupIds
            }]);
        };
        service.updateUserGroup = function(userGroupId,name,description) {
            return service.invoke('/usergroup/update-user-group',[{
                userGroupId:userGroupId
                ,name:name
                ,description:description
            }]);
        };
        service.updateUserGroup = function(userGroupId,name,description,serviceContext) {
            return service.invoke('/usergroup/update-user-group',[{
                userGroupId:userGroupId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});