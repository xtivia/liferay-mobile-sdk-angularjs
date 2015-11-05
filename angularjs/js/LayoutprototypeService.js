(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutprototypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutPrototype = function(nameMap,description,active) {
            return service.invoke('/layoutprototype/add-layout-prototype',[{
                nameMap:nameMap
                ,description:description
                ,active:active
            }]);
        };
        service.addLayoutPrototype = function(nameMap,description,active,serviceContext) {
            return service.invoke('/layoutprototype/add-layout-prototype',[{
                nameMap:nameMap
                ,description:description
                ,active:active
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteLayoutPrototype = function(layoutPrototypeId) {
            return service.invoke('/layoutprototype/delete-layout-prototype',[{
                layoutPrototypeId:layoutPrototypeId
            }]);
        };
        service.getLayoutPrototype = function(layoutPrototypeId) {
            return service.invoke('/layoutprototype/get-layout-prototype',[{
                layoutPrototypeId:layoutPrototypeId
            }]);
        };
        service.search = function(companyId,active,obc) {
            return service.invoke('/layoutprototype/search',[{
                companyId:companyId
                ,active:active
                ,obc:obc
            }]);
        };
        service.updateLayoutPrototype = function(layoutPrototypeId,nameMap,description,active) {
            return service.invoke('/layoutprototype/update-layout-prototype',[{
                layoutPrototypeId:layoutPrototypeId
                ,nameMap:nameMap
                ,description:description
                ,active:active
            }]);
        };
        service.updateLayoutPrototype = function(layoutPrototypeId,nameMap,description,active,serviceContext) {
            return service.invoke('/layoutprototype/update-layout-prototype',[{
                layoutPrototypeId:layoutPrototypeId
                ,nameMap:nameMap
                ,description:description
                ,active:active
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});