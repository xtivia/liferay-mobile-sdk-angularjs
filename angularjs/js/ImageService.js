(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ImageService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getImage = function(imageId) {
            return SessionService.invoke({'/image/get-image':{
                imageId:imageId
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();