(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AnnouncementsdeliveryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.updateDelivery = function(userId,type,email,sms,website) {
            return SessionService.invoke({'/announcementsdelivery/update-delivery':{
                userId:userId
                ,type:type
                ,email:email
                ,sms:sms
                ,website:website
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();