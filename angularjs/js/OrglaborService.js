(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('OrglaborService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addOrgLabor = function(organizationId,typeId,sunOpen,sunClose,monOpen,monClose,tueOpen,tueClose,wedOpen,wedClose,thuOpen,thuClose,friOpen,friClose,satOpen,satClose) {
            return service.invoke('/orglabor/add-org-labor',[{
                organizationId:organizationId
                ,typeId:typeId
                ,sunOpen:sunOpen
                ,sunClose:sunClose
                ,monOpen:monOpen
                ,monClose:monClose
                ,tueOpen:tueOpen
                ,tueClose:tueClose
                ,wedOpen:wedOpen
                ,wedClose:wedClose
                ,thuOpen:thuOpen
                ,thuClose:thuClose
                ,friOpen:friOpen
                ,friClose:friClose
                ,satOpen:satOpen
                ,satClose:satClose
            }]);
        };
        service.deleteOrgLabor = function(orgLaborId) {
            return service.invoke('/orglabor/delete-org-labor',[{
                orgLaborId:orgLaborId
            }]);
        };
        service.getOrgLabor = function(orgLaborId) {
            return service.invoke('/orglabor/get-org-labor',[{
                orgLaborId:orgLaborId
            }]);
        };
        service.getOrgLabors = function(organizationId) {
            return service.invoke('/orglabor/get-org-labors',[{
                organizationId:organizationId
            }]);
        };
        service.updateOrgLabor = function(orgLaborId,typeId,sunOpen,sunClose,monOpen,monClose,tueOpen,tueClose,wedOpen,wedClose,thuOpen,thuClose,friOpen,friClose,satOpen,satClose) {
            return service.invoke('/orglabor/update-org-labor',[{
                orgLaborId:orgLaborId
                ,typeId:typeId
                ,sunOpen:sunOpen
                ,sunClose:sunClose
                ,monOpen:monOpen
                ,monClose:monClose
                ,tueOpen:tueOpen
                ,tueClose:tueClose
                ,wedOpen:wedOpen
                ,wedClose:wedClose
                ,thuOpen:thuOpen
                ,thuClose:thuClose
                ,friOpen:friOpen
                ,friClose:friClose
                ,satOpen:satOpen
                ,satClose:satClose
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});