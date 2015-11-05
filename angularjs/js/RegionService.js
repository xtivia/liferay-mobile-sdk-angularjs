(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RegionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRegion = function(countryId,regionCode,name,active) {
            return service.invoke('/region/add-region',[{
                countryId:countryId
                ,regionCode:regionCode
                ,name:name
                ,active:active
            }]);
        };
        service.fetchRegion = function(countryId,regionCode) {
            return service.invoke('/region/fetch-region',[{
                countryId:countryId
                ,regionCode:regionCode
            }]);
        };
        service.getRegion = function(regionId) {
            return service.invoke('/region/get-region',[{
                regionId:regionId
            }]);
        };
        service.getRegion = function(countryId,regionCode) {
            return service.invoke('/region/get-region',[{
                countryId:countryId
                ,regionCode:regionCode
            }]);
        };
        service.getRegions = function() {
            return service.invoke('/region/get-regions',[{
                
            }]);
        };
        service.getRegions = function(active) {
            return service.invoke('/region/get-regions',[{
                active:active
            }]);
        };
        service.getRegions = function(countryId) {
            return service.invoke('/region/get-regions',[{
                countryId:countryId
            }]);
        };
        service.getRegions = function(countryId,active) {
            return service.invoke('/region/get-regions',[{
                countryId:countryId
                ,active:active
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});