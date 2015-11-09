(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('PermissionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.checkPermission = function(groupId,name,primKey) {
            return SessionService.invoke({'/permission/check-permission':{
                groupId:groupId
                ,name:name
                ,primKey:primKey
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();