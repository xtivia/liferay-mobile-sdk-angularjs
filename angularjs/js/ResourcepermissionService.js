(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ResourcepermissionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addResourcePermission = function(groupId,companyId,name,scope,primKey,roleId,actionId) {
            return SessionService.invoke({'/resourcepermission/add-resource-permission':{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,scope:scope
                ,primKey:primKey
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.removeResourcePermission = function(groupId,companyId,name,scope,primKey,roleId,actionId) {
            return SessionService.invoke({'/resourcepermission/remove-resource-permission':{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,scope:scope
                ,primKey:primKey
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.removeResourcePermissions = function(groupId,companyId,name,scope,roleId,actionId) {
            return SessionService.invoke({'/resourcepermission/remove-resource-permissions':{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,scope:scope
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.setIndividualResourcePermissions = function(groupId,companyId,name,primKey,roleIdsToActionIds) {
            return SessionService.invoke({'/resourcepermission/set-individual-resource-permissions':{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,primKey:primKey
                ,roleIdsToActionIds:roleIdsToActionIds
            }});
        };
        service.setIndividualResourcePermissions = function(groupId,companyId,name,primKey,roleId,actionIds) {
            return SessionService.invoke({'/resourcepermission/set-individual-resource-permissions':{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,primKey:primKey
                ,roleId:roleId
                ,actionIds:actionIds
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();