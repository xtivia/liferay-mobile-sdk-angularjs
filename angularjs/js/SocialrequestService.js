(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialrequestService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.updateRequest = function(requestId,status,themeDisplay) {
            return SessionService.invoke('/socialrequest/update-request',[{
                requestId:requestId
                ,status:status
                ,themeDisplay:themeDisplay
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();