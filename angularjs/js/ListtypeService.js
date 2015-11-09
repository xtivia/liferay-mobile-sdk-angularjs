(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ListtypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getListType = function(listTypeId) {
            return SessionService.invoke({'/listtype/get-list-type':{
                listTypeId:listTypeId
            }});
        };
        service.getListTypes = function(type) {
            return SessionService.invoke({'/listtype/get-list-types':{
                type:type
            }});
        };
        service.validate = function(listTypeId,type) {
            return SessionService.invoke({'/listtype/validate':{
                listTypeId:listTypeId
                ,type:type
            }});
        };
        service.validate = function(listTypeId,classNameId,type) {
            return SessionService.invoke({'/listtype/validate':{
                listTypeId:listTypeId
                ,classNameId:classNameId
                ,type:type
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();