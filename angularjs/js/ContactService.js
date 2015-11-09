(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ContactService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getContact = function(contactId) {
            return SessionService.invoke({'/contact/get-contact':{
                contactId:contactId
            }});
        };
        service.getContacts = function(classNameId,classPK,start,end,orderByComparator) {
            return SessionService.invoke({'/contact/get-contacts':{
                classNameId:classNameId
                ,classPK:classPK
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }});
        };
        service.getContactsCount = function(classNameId,classPK) {
            return SessionService.invoke({'/contact/get-contacts-count':{
                classNameId:classNameId
                ,classPK:classPK
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();