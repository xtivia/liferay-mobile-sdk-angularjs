(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('StagingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.cleanUpStagingRequest = function(stagingRequestId) {
            return SessionService.invoke({'/staging/clean-up-staging-request':{
                stagingRequestId:stagingRequestId
            }});
        };
        service.createStagingRequest = function(groupId,checksum) {
            return SessionService.invoke({'/staging/create-staging-request':{
                groupId:groupId
                ,checksum:checksum
            }});
        };
        service.publishStagingRequest = function(stagingRequestId,privateLayout,parameterMap) {
            return SessionService.invoke({'/staging/publish-staging-request':{
                stagingRequestId:stagingRequestId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
            }});
        };
        service.updateStagingRequest = function(stagingRequestId,fileName,bytes) {
            return SessionService.invoke({'/staging/update-staging-request':{
                stagingRequestId:stagingRequestId
                ,fileName:fileName
                ,bytes:bytes
            }});
        };
        service.validateStagingRequest = function(stagingRequestId,privateLayout,parameterMap) {
            return SessionService.invoke({'/staging/validate-staging-request':{
                stagingRequestId:stagingRequestId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();