(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdractionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addAction = function(ruleGroupInstanceId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return service.invoke('/mdraction/add-action',[{
                ruleGroupInstanceId:ruleGroupInstanceId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettings:typeSettings
                ,serviceContext:serviceContext
            }]);
        };
        service.addAction = function(ruleGroupInstanceId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return service.invoke('/mdraction/add-action',[{
                ruleGroupInstanceId:ruleGroupInstanceId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettingsProperties:typeSettingsProperties
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteAction = function(actionId) {
            return service.invoke('/mdraction/delete-action',[{
                actionId:actionId
            }]);
        };
        service.fetchAction = function(actionId) {
            return service.invoke('/mdraction/fetch-action',[{
                actionId:actionId
            }]);
        };
        service.getAction = function(actionId) {
            return service.invoke('/mdraction/get-action',[{
                actionId:actionId
            }]);
        };
        service.updateAction = function(actionId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return service.invoke('/mdraction/update-action',[{
                actionId:actionId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettings:typeSettings
                ,serviceContext:serviceContext
            }]);
        };
        service.updateAction = function(actionId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return service.invoke('/mdraction/update-action',[{
                actionId:actionId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettingsProperties:typeSettingsProperties
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});