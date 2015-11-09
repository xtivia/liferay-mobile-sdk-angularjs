(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('UsergroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroupUserGroups = function(groupId,userGroupIds) {
            return SessionService.invoke({'/usergroup/add-group-user-groups':{
                groupId:groupId
                ,userGroupIds:userGroupIds
            }});
        };
        service.addTeamUserGroups = function(teamId,userGroupIds) {
            return SessionService.invoke({'/usergroup/add-team-user-groups':{
                teamId:teamId
                ,userGroupIds:userGroupIds
            }});
        };
        service.addUserGroup = function(name,description) {
            return SessionService.invoke({'/usergroup/add-user-group':{
                name:name
                ,description:description
            }});
        };
        service.addUserGroup = function(name,description,serviceContext) {
            return SessionService.invoke({'/usergroup/add-user-group':{
                name:name
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        service.deleteUserGroup = function(userGroupId) {
            return SessionService.invoke({'/usergroup/delete-user-group':{
                userGroupId:userGroupId
            }});
        };
        service.getUserGroup = function(name) {
            return SessionService.invoke({'/usergroup/get-user-group':{
                name:name
            }});
        };
        service.getUserGroup = function(userGroupId) {
            return SessionService.invoke({'/usergroup/get-user-group':{
                userGroupId:userGroupId
            }});
        };
        service.getUserUserGroups = function(userId) {
            return SessionService.invoke({'/usergroup/get-user-user-groups':{
                userId:userId
            }});
        };
        service.unsetGroupUserGroups = function(groupId,userGroupIds) {
            return SessionService.invoke({'/usergroup/unset-group-user-groups':{
                groupId:groupId
                ,userGroupIds:userGroupIds
            }});
        };
        service.unsetTeamUserGroups = function(teamId,userGroupIds) {
            return SessionService.invoke({'/usergroup/unset-team-user-groups':{
                teamId:teamId
                ,userGroupIds:userGroupIds
            }});
        };
        service.updateUserGroup = function(userGroupId,name,description) {
            return SessionService.invoke({'/usergroup/update-user-group':{
                userGroupId:userGroupId
                ,name:name
                ,description:description
            }});
        };
        service.updateUserGroup = function(userGroupId,name,description,serviceContext) {
            return SessionService.invoke({'/usergroup/update-user-group':{
                userGroupId:userGroupId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();