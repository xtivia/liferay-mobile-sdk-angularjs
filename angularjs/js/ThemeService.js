(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ThemeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getThemes = function(companyId) {
            return SessionService.invoke({'/theme/get-themes':{
                companyId:companyId
            }});
        };
        service.getWarThemes = function() {
            return SessionService.invoke({'/theme/get-war-themes':{
                
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();