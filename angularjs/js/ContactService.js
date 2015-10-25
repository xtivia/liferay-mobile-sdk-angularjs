(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ContactService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getContact = function(contactId) {
            return service.invoke('/contact/get-contact',[{
                contactId:contactId
            }]);
        };
        service.getContacts = function(classNameId,classPK,start,end,orderByComparator) {
            return service.invoke('/contact/get-contacts',[{
                classNameId:classNameId
                ,classPK:classPK
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        service.getContactsCount = function(classNameId,classPK) {
            return service.invoke('/contact/get-contacts-count',[{
                classNameId:classNameId
                ,classPK:classPK
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});