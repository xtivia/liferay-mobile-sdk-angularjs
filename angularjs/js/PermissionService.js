(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PermissionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.checkPermission = function(groupId,name,primKey) {
            return service.invoke('/permission/check-permission',[{
                groupId:groupId
                ,name:name
                ,primKey:primKey
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});