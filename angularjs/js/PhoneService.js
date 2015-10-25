(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PhoneService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addPhone = function(className,classPK,number,extension,typeId,primary) {
            return service.invoke('/phone/add-phone',[{
                className:className
                ,classPK:classPK
                ,number:number
                ,extension:extension
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        service.addPhone = function(className,classPK,number,extension,typeId,primary,serviceContext) {
            return service.invoke('/phone/add-phone',[{
                className:className
                ,classPK:classPK
                ,number:number
                ,extension:extension
                ,typeId:typeId
                ,primary:primary
                ,serviceContext:serviceContext
            }]);
        };
        service.deletePhone = function(phoneId) {
            return service.invoke('/phone/delete-phone',[{
                phoneId:phoneId
            }]);
        };
        service.getPhone = function(phoneId) {
            return service.invoke('/phone/get-phone',[{
                phoneId:phoneId
            }]);
        };
        service.getPhones = function(className,classPK) {
            return service.invoke('/phone/get-phones',[{
                className:className
                ,classPK:classPK
            }]);
        };
        service.updatePhone = function(phoneId,number,extension,typeId,primary) {
            return service.invoke('/phone/update-phone',[{
                phoneId:phoneId
                ,number:number
                ,extension:extension
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});