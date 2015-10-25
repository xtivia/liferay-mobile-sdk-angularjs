(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PortletService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getWarPortlets = function() {
            return service.invoke('/portlet/get-war-portlets',[{
                
            }]);
        };
        service.updatePortlet = function(companyId,portletId,roles,active) {
            return service.invoke('/portlet/update-portlet',[{
                companyId:companyId
                ,portletId:portletId
                ,roles:roles
                ,active:active
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});