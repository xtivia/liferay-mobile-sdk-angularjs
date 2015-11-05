(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdrrulegroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRuleGroup = function(groupId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke('/mdrrulegroup/add-rule-group',[{
                groupId:groupId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,serviceContext:serviceContext
            }]);
        };
        service.copyRuleGroup = function(ruleGroupId,groupId,serviceContext) {
            return SessionService.invoke('/mdrrulegroup/copy-rule-group',[{
                ruleGroupId:ruleGroupId
                ,groupId:groupId
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteRuleGroup = function(ruleGroupId) {
            return SessionService.invoke('/mdrrulegroup/delete-rule-group',[{
                ruleGroupId:ruleGroupId
            }]);
        };
        service.fetchRuleGroup = function(ruleGroupId) {
            return SessionService.invoke('/mdrrulegroup/fetch-rule-group',[{
                ruleGroupId:ruleGroupId
            }]);
        };
        service.getRuleGroup = function(ruleGroupId) {
            return SessionService.invoke('/mdrrulegroup/get-rule-group',[{
                ruleGroupId:ruleGroupId
            }]);
        };
        service.updateRuleGroup = function(ruleGroupId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke('/mdrrulegroup/update-rule-group',[{
                ruleGroupId:ruleGroupId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();