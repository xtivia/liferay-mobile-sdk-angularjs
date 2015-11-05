(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UsergrouproleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addUserGroupRoles = function(userId,groupId,roleIds) {
            return SessionService.invoke('/usergrouprole/add-user-group-roles',[{
                userId:userId
                ,groupId:groupId
                ,roleIds:roleIds
            }]);
        };
        service.addUserGroupRoles = function(userIds,groupId,roleId) {
            return SessionService.invoke('/usergrouprole/add-user-group-roles',[{
                userIds:userIds
                ,groupId:groupId
                ,roleId:roleId
            }]);
        };
        service.deleteUserGroupRoles = function(userId,groupId,roleIds) {
            return SessionService.invoke('/usergrouprole/delete-user-group-roles',[{
                userId:userId
                ,groupId:groupId
                ,roleIds:roleIds
            }]);
        };
        service.deleteUserGroupRoles = function(userIds,groupId,roleId) {
            return SessionService.invoke('/usergrouprole/delete-user-group-roles',[{
                userIds:userIds
                ,groupId:groupId
                ,roleId:roleId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();