(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('FlagsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEntry = function(className,classPK,reporterEmailAddress,reportedUserId,contentTitle,contentURL,reason,serviceContext) {
            return SessionService.invoke({'/flagsentry/add-entry':{
                className:className
                ,classPK:classPK
                ,reporterEmailAddress:reporterEmailAddress
                ,reportedUserId:reportedUserId
                ,contentTitle:contentTitle
                ,contentURL:contentURL
                ,reason:reason
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();