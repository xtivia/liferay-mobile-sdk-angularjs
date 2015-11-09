(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AddressService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addAddress = function(className,classPK,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary) {
            return SessionService.invoke({'/address/add-address':{
                className:className
                ,classPK:classPK
                ,street1:street1
                ,street2:street2
                ,street3:street3
                ,city:city
                ,zip:zip
                ,regionId:regionId
                ,countryId:countryId
                ,typeId:typeId
                ,mailing:mailing
                ,primary:primary
            }});
        };
        service.addAddress = function(className,classPK,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary,serviceContext) {
            return SessionService.invoke({'/address/add-address':{
                className:className
                ,classPK:classPK
                ,street1:street1
                ,street2:street2
                ,street3:street3
                ,city:city
                ,zip:zip
                ,regionId:regionId
                ,countryId:countryId
                ,typeId:typeId
                ,mailing:mailing
                ,primary:primary
                ,serviceContext:serviceContext
            }});
        };
        service.deleteAddress = function(addressId) {
            return SessionService.invoke({'/address/delete-address':{
                addressId:addressId
            }});
        };
        service.getAddress = function(addressId) {
            return SessionService.invoke({'/address/get-address':{
                addressId:addressId
            }});
        };
        service.getAddresses = function(className,classPK) {
            return SessionService.invoke({'/address/get-addresses':{
                className:className
                ,classPK:classPK
            }});
        };
        service.updateAddress = function(addressId,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary) {
            return SessionService.invoke({'/address/update-address':{
                addressId:addressId
                ,street1:street1
                ,street2:street2
                ,street3:street3
                ,city:city
                ,zip:zip
                ,regionId:regionId
                ,countryId:countryId
                ,typeId:typeId
                ,mailing:mailing
                ,primary:primary
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();