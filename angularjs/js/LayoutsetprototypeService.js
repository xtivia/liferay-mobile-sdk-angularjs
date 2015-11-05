(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetprototypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutSetPrototype = function(nameMap,description,active,layoutsUpdateable,serviceContext) {
            return SessionService.invoke('/layoutsetprototype/add-layout-set-prototype',[{
                nameMap:nameMap
                ,description:description
                ,active:active
                ,layoutsUpdateable:layoutsUpdateable
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteLayoutSetPrototype = function(layoutSetPrototypeId) {
            return SessionService.invoke('/layoutsetprototype/delete-layout-set-prototype',[{
                layoutSetPrototypeId:layoutSetPrototypeId
            }]);
        };
        service.getLayoutSetPrototype = function(layoutSetPrototypeId) {
            return SessionService.invoke('/layoutsetprototype/get-layout-set-prototype',[{
                layoutSetPrototypeId:layoutSetPrototypeId
            }]);
        };
        service.search = function(companyId,active,obc) {
            return SessionService.invoke('/layoutsetprototype/search',[{
                companyId:companyId
                ,active:active
                ,obc:obc
            }]);
        };
        service.updateLayoutSetPrototype = function(layoutSetPrototypeId,settings) {
            return SessionService.invoke('/layoutsetprototype/update-layout-set-prototype',[{
                layoutSetPrototypeId:layoutSetPrototypeId
                ,settings:settings
            }]);
        };
        service.updateLayoutSetPrototype = function(layoutSetPrototypeId,nameMap,description,active,layoutsUpdateable,serviceContext) {
            return SessionService.invoke('/layoutsetprototype/update-layout-set-prototype',[{
                layoutSetPrototypeId:layoutSetPrototypeId
                ,nameMap:nameMap
                ,description:description
                ,active:active
                ,layoutsUpdateable:layoutsUpdateable
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();