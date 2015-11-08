(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ExpandocolumnService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addColumn = function(tableId,name,type) {
            return SessionService.invoke({'/expandocolumn/add-column':{
                tableId:tableId
                ,name:name
                ,type:type
            }});
        };
        service.addColumn = function(tableId,name,type,defaultData) {
            return SessionService.invoke({'/expandocolumn/add-column':{
                tableId:tableId
                ,name:name
                ,type:type
                ,defaultData:defaultData
            }});
        };
        service.deleteColumn = function(columnId) {
            return SessionService.invoke({'/expandocolumn/delete-column':{
                columnId:columnId
            }});
        };
        service.updateColumn = function(columnId,name,type) {
            return SessionService.invoke({'/expandocolumn/update-column':{
                columnId:columnId
                ,name:name
                ,type:type
            }});
        };
        service.updateColumn = function(columnId,name,type,defaultData) {
            return SessionService.invoke({'/expandocolumn/update-column':{
                columnId:columnId
                ,name:name
                ,type:type
                ,defaultData:defaultData
            }});
        };
        service.updateTypeSettings = function(columnId,typeSettings) {
            return SessionService.invoke({'/expandocolumn/update-type-settings':{
                columnId:columnId
                ,typeSettings:typeSettings
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();