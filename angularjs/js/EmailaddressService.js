(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('EmailaddressService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEmailAddress = function(className,classPK,address,typeId,primary) {
            return service.invoke('/emailaddress/add-email-address',[{
                className:className
                ,classPK:classPK
                ,address:address
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        service.addEmailAddress = function(className,classPK,address,typeId,primary,serviceContext) {
            return service.invoke('/emailaddress/add-email-address',[{
                className:className
                ,classPK:classPK
                ,address:address
                ,typeId:typeId
                ,primary:primary
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteEmailAddress = function(emailAddressId) {
            return service.invoke('/emailaddress/delete-email-address',[{
                emailAddressId:emailAddressId
            }]);
        };
        service.getEmailAddress = function(emailAddressId) {
            return service.invoke('/emailaddress/get-email-address',[{
                emailAddressId:emailAddressId
            }]);
        };
        service.getEmailAddresses = function(className,classPK) {
            return service.invoke('/emailaddress/get-email-addresses',[{
                className:className
                ,classPK:classPK
            }]);
        };
        service.updateEmailAddress = function(emailAddressId,address,typeId,primary) {
            return service.invoke('/emailaddress/update-email-address',[{
                emailAddressId:emailAddressId
                ,address:address
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});