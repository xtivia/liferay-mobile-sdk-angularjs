(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('UsergroupgrouproleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addUserGroupGroupRoles = function(userGroupId,groupId,roleIds) {
            return SessionService.invoke({'/usergroupgrouprole/add-user-group-group-roles':{
                userGroupId:userGroupId
                ,groupId:groupId
                ,roleIds:roleIds
            }});
        };
        service.addUserGroupGroupRoles = function(userGroupIds,groupId,roleId) {
            return SessionService.invoke({'/usergroupgrouprole/add-user-group-group-roles':{
                userGroupIds:userGroupIds
                ,groupId:groupId
                ,roleId:roleId
            }});
        };
        service.deleteUserGroupGroupRoles = function(userGroupId,groupId,roleIds) {
            return SessionService.invoke({'/usergroupgrouprole/delete-user-group-group-roles':{
                userGroupId:userGroupId
                ,groupId:groupId
                ,roleIds:roleIds
            }});
        };
        service.deleteUserGroupGroupRoles = function(userGroupIds,groupId,roleId) {
            return SessionService.invoke({'/usergroupgrouprole/delete-user-group-group-roles':{
                userGroupIds:userGroupIds
                ,groupId:groupId
                ,roleId:roleId
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();