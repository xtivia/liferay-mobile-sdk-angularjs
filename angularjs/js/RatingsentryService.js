(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RatingsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteEntry = function(className,classPK) {
            return service.invoke('/ratingsentry/delete-entry',[{
                className:className
                ,classPK:classPK
            }]);
        };
        service.updateEntry = function(className,classPK,score) {
            return service.invoke('/ratingsentry/update-entry',[{
                className:className
                ,classPK:classPK
                ,score:score
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});