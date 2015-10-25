(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RoleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRole = function(name,titleMap,descriptionMap,type) {
            return service.invoke('/role/add-role',[{
                name:name
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,type:type
            }]);
        };
        service.addRole = function(className,classPK,name,titleMap,descriptionMap,type,subtype,serviceContext) {
            return service.invoke('/role/add-role',[{
                className:className
                ,classPK:classPK
                ,name:name
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,subtype:subtype
                ,serviceContext:serviceContext
            }]);
        };
        service.addUserRoles = function(userId,roleIds) {
            return service.invoke('/role/add-user-roles',[{
                userId:userId
                ,roleIds:roleIds
            }]);
        };
        service.deleteRole = function(roleId) {
            return service.invoke('/role/delete-role',[{
                roleId:roleId
            }]);
        };
        service.getGroupRoles = function(groupId) {
            return service.invoke('/role/get-group-roles',[{
                groupId:groupId
            }]);
        };
        service.getRole = function(roleId) {
            return service.invoke('/role/get-role',[{
                roleId:roleId
            }]);
        };
        service.getRole = function(companyId,name) {
            return service.invoke('/role/get-role',[{
                companyId:companyId
                ,name:name
            }]);
        };
        service.getUserGroupGroupRoles = function(userId,groupId) {
            return service.invoke('/role/get-user-group-group-roles',[{
                userId:userId
                ,groupId:groupId
            }]);
        };
        service.getUserGroupRoles = function(userId,groupId) {
            return service.invoke('/role/get-user-group-roles',[{
                userId:userId
                ,groupId:groupId
            }]);
        };
        service.getUserRelatedRoles = function(userId,groups) {
            return service.invoke('/role/get-user-related-roles',[{
                userId:userId
                ,groups:groups
            }]);
        };
        service.getUserRoles = function(userId) {
            return service.invoke('/role/get-user-roles',[{
                userId:userId
            }]);
        };
        service.hasUserRole = function(userId,companyId,name,inherited) {
            return service.invoke('/role/has-user-role',[{
                userId:userId
                ,companyId:companyId
                ,name:name
                ,inherited:inherited
            }]);
        };
        service.hasUserRoles = function(userId,companyId,names,inherited) {
            return service.invoke('/role/has-user-roles',[{
                userId:userId
                ,companyId:companyId
                ,names:names
                ,inherited:inherited
            }]);
        };
        service.unsetUserRoles = function(userId,roleIds) {
            return service.invoke('/role/unset-user-roles',[{
                userId:userId
                ,roleIds:roleIds
            }]);
        };
        service.updateRole = function(roleId,name,titleMap,descriptionMap,subtype,serviceContext) {
            return service.invoke('/role/update-role',[{
                roleId:roleId
                ,name:name
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,subtype:subtype
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});