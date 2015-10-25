(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ClassnameService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.fetchClassName = function(value) {
            return service.invoke('/classname/fetch-class-name',[{
                value:value
            }]);
        };
        service.fetchClassNameId = function(clazz) {
            return service.invoke('/classname/fetch-class-name-id',[{
                clazz:clazz
            }]);
        };
        service.fetchClassNameId = function(value) {
            return service.invoke('/classname/fetch-class-name-id',[{
                value:value
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});