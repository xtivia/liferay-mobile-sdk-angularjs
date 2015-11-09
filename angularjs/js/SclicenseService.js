(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('SclicenseService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLicense = function(name,url,openSource,active,recommended) {
            return SessionService.invoke({'/sclicense/add-license':{
                name:name
                ,url:url
                ,openSource:openSource
                ,active:active
                ,recommended:recommended
            }});
        };
        service.deleteLicense = function(licenseId) {
            return SessionService.invoke({'/sclicense/delete-license':{
                licenseId:licenseId
            }});
        };
        service.getLicense = function(licenseId) {
            return SessionService.invoke({'/sclicense/get-license':{
                licenseId:licenseId
            }});
        };
        service.updateLicense = function(licenseId,name,url,openSource,active,recommended) {
            return SessionService.invoke({'/sclicense/update-license':{
                licenseId:licenseId
                ,name:name
                ,url:url
                ,openSource:openSource
                ,active:active
                ,recommended:recommended
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();