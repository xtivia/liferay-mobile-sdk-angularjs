(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ExpandovalueService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addValue = function(companyId,className,tableName,columnName,classPK,data) {
            return SessionService.invoke({'/expandovalue/add-value':{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,columnName:columnName
                ,classPK:classPK
                ,data:data
            }});
        };
        service.addValues = function(companyId,className,tableName,classPK,attributeValues) {
            return SessionService.invoke({'/expandovalue/add-values':{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,classPK:classPK
                ,attributeValues:attributeValues
            }});
        };
        service.getData = function(companyId,className,tableName,columnName,classPK) {
            return SessionService.invoke({'/expandovalue/get-data':{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,columnName:columnName
                ,classPK:classPK
            }});
        };
        service.getData = function(companyId,className,tableName,columnNames,classPK) {
            return SessionService.invoke({'/expandovalue/get-data':{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,columnNames:columnNames
                ,classPK:classPK
            }});
        };
        service.getJsonData = function(companyId,className,tableName,columnName,classPK) {
            return SessionService.invoke({'/expandovalue/get-json-data':{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,columnName:columnName
                ,classPK:classPK
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();