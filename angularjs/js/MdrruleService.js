(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('MdrruleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRule = function(ruleGroupId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke({'/mdrrule/add-rule':{
                ruleGroupId:ruleGroupId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettings:typeSettings
                ,serviceContext:serviceContext
            }});
        };
        service.deleteRule = function(ruleId) {
            return SessionService.invoke({'/mdrrule/delete-rule':{
                ruleId:ruleId
            }});
        };
        service.fetchRule = function(ruleId) {
            return SessionService.invoke({'/mdrrule/fetch-rule':{
                ruleId:ruleId
            }});
        };
        service.getRule = function(ruleId) {
            return SessionService.invoke({'/mdrrule/get-rule':{
                ruleId:ruleId
            }});
        };
        service.updateRule = function(ruleId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke({'/mdrrule/update-rule':{
                ruleId:ruleId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettings:typeSettings
                ,serviceContext:serviceContext
            }});
        };
        service.updateRule = function(ruleId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return SessionService.invoke({'/mdrrule/update-rule':{
                ruleId:ruleId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettingsProperties:typeSettingsProperties
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();