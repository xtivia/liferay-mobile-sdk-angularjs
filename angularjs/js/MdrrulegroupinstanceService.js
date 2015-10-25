(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdrrulegroupinstanceService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRuleGroupInstance = function(groupId,className,classPK,ruleGroupId,serviceContext) {
            return service.invoke('/mdrrulegroupinstance/add-rule-group-instance',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,ruleGroupId:ruleGroupId
                ,serviceContext:serviceContext
            }]);
        };
        service.addRuleGroupInstance = function(groupId,className,classPK,ruleGroupId,priority,serviceContext) {
            return service.invoke('/mdrrulegroupinstance/add-rule-group-instance',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,ruleGroupId:ruleGroupId
                ,priority:priority
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteRuleGroupInstance = function(ruleGroupInstanceId) {
            return service.invoke('/mdrrulegroupinstance/delete-rule-group-instance',[{
                ruleGroupInstanceId:ruleGroupInstanceId
            }]);
        };
        service.getRuleGroupInstances = function(className,classPK,start,end,orderByComparator) {
            return service.invoke('/mdrrulegroupinstance/get-rule-group-instances',[{
                className:className
                ,classPK:classPK
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        service.getRuleGroupInstancesCount = function(className,classPK) {
            return service.invoke('/mdrrulegroupinstance/get-rule-group-instances-count',[{
                className:className
                ,classPK:classPK
            }]);
        };
        service.updateRuleGroupInstance = function(ruleGroupInstanceId,priority) {
            return service.invoke('/mdrrulegroupinstance/update-rule-group-instance',[{
                ruleGroupInstanceId:ruleGroupInstanceId
                ,priority:priority
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});