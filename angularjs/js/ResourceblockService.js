(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ResourceblockService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCompanyScopePermission = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/add-company-scope-permission':{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.addGroupScopePermission = function(scopeGroupId,companyId,groupId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/add-group-scope-permission':{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,groupId:groupId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.addIndividualScopePermission = function(companyId,groupId,name,primKey,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/add-individual-scope-permission':{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,primKey:primKey
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.removeAllGroupScopePermissions = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/remove-all-group-scope-permissions':{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.removeCompanyScopePermission = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/remove-company-scope-permission':{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.removeGroupScopePermission = function(scopeGroupId,companyId,groupId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/remove-group-scope-permission':{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,groupId:groupId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.removeIndividualScopePermission = function(companyId,groupId,name,primKey,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/remove-individual-scope-permission':{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,primKey:primKey
                ,roleId:roleId
                ,actionId:actionId
            }});
        };
        service.setCompanyScopePermissions = function(scopeGroupId,companyId,name,roleId,actionIds) {
            return SessionService.invoke({'/resourceblock/set-company-scope-permissions':{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,name:name
                ,roleId:roleId
                ,actionIds:actionIds
            }});
        };
        service.setGroupScopePermissions = function(scopeGroupId,companyId,groupId,name,roleId,actionIds) {
            return SessionService.invoke({'/resourceblock/set-group-scope-permissions':{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,groupId:groupId
                ,name:name
                ,roleId:roleId
                ,actionIds:actionIds
            }});
        };
        service.setIndividualScopePermissions = function(companyId,groupId,name,primKey,roleIdsToActionIds) {
            return SessionService.invoke({'/resourceblock/set-individual-scope-permissions':{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,primKey:primKey
                ,roleIdsToActionIds:roleIdsToActionIds
            }});
        };
        service.setIndividualScopePermissions = function(companyId,groupId,name,primKey,roleId,actionIds) {
            return SessionService.invoke({'/resourceblock/set-individual-scope-permissions':{
                companyId:companyId
                ,groupId:groupId
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