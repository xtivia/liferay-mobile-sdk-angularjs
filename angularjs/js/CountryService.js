(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('CountryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCountry = function(name,a2,a3,number,idd,active) {
            return SessionService.invoke({'/country/add-country':{
                name:name
                ,a2:a2
                ,a3:a3
                ,number:number
                ,idd:idd
                ,active:active
            }});
        };
        service.fetchCountry = function(countryId) {
            return SessionService.invoke({'/country/fetch-country':{
                countryId:countryId
            }});
        };
        service.fetchCountryByA2 = function(a2) {
            return SessionService.invoke({'/country/fetch-country-by-a2':{
                a2:a2
            }});
        };
        service.fetchCountryByA3 = function(a3) {
            return SessionService.invoke({'/country/fetch-country-by-a3':{
                a3:a3
            }});
        };
        service.getCountries = function() {
            return SessionService.invoke({'/country/get-countries':{
                
            }});
        };
        service.getCountries = function(active) {
            return SessionService.invoke({'/country/get-countries':{
                active:active
            }});
        };
        service.getCountry = function(countryId) {
            return SessionService.invoke({'/country/get-country':{
                countryId:countryId
            }});
        };
        service.getCountryByA2 = function(a2) {
            return SessionService.invoke({'/country/get-country-by-a2':{
                a2:a2
            }});
        };
        service.getCountryByA3 = function(a3) {
            return SessionService.invoke({'/country/get-country-by-a3':{
                a3:a3
            }});
        };
        service.getCountryByName = function(name) {
            return SessionService.invoke({'/country/get-country-by-name':{
                name:name
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();