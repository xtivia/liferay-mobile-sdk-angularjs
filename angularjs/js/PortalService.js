(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PortalService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getAutoDeployDirectory = function() {
            return SessionService.invoke('/portal/get-auto-deploy-directory',[{
                
            }]);
        };
        service.getBuildNumber = function() {
            return SessionService.invoke('/portal/get-build-number',[{
                
            }]);
        };
        service.testAddClassNameAndTestTransactionPortletBar_PortalRollback = function(transactionPortletBarText) {
            return SessionService.invoke('/portal/test-add-class-name-and-test-transaction-portlet-bar_-portal-rollback',[{
                transactionPortletBarText:transactionPortletBarText
            }]);
        };
        service.testAddClassNameAndTestTransactionPortletBar_PortletRollback = function(transactionPortletBarText) {
            return SessionService.invoke('/portal/test-add-class-name-and-test-transaction-portlet-bar_-portlet-rollback',[{
                transactionPortletBarText:transactionPortletBarText
            }]);
        };
        service.testAddClassNameAndTestTransactionPortletBar_Success = function(transactionPortletBarText) {
            return SessionService.invoke('/portal/test-add-class-name-and-test-transaction-portlet-bar_-success',[{
                transactionPortletBarText:transactionPortletBarText
            }]);
        };
        service.testAddClassName_Rollback = function(classNameValue) {
            return SessionService.invoke('/portal/test-add-class-name_-rollback',[{
                classNameValue:classNameValue
            }]);
        };
        service.testAddClassName_Success = function(classNameValue) {
            return SessionService.invoke('/portal/test-add-class-name_-success',[{
                classNameValue:classNameValue
            }]);
        };
        service.testAutoSyncHibernateSessionStateOnTxCreation = function() {
            return SessionService.invoke('/portal/test-auto-sync-hibernate-session-state-on-tx-creation',[{
                
            }]);
        };
        service.testDeleteClassName = function() {
            return SessionService.invoke('/portal/test-delete-class-name',[{
                
            }]);
        };
        service.testGetBuildNumber = function() {
            return SessionService.invoke('/portal/test-get-build-number',[{
                
            }]);
        };
        service.testGetUserId = function() {
            return SessionService.invoke('/portal/test-get-user-id',[{
                
            }]);
        };
        service.testHasClassName = function() {
            return SessionService.invoke('/portal/test-has-class-name',[{
                
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();