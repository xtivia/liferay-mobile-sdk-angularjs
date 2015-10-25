(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('StagingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.cleanUpStagingRequest = function(stagingRequestId) {
            return service.invoke('/staging/clean-up-staging-request',[{
                stagingRequestId:stagingRequestId
            }]);
        };
        service.createStagingRequest = function(groupId,checksum) {
            return service.invoke('/staging/create-staging-request',[{
                groupId:groupId
                ,checksum:checksum
            }]);
        };
        service.publishStagingRequest = function(stagingRequestId,privateLayout,parameterMap) {
            return service.invoke('/staging/publish-staging-request',[{
                stagingRequestId:stagingRequestId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
            }]);
        };
        service.updateStagingRequest = function(stagingRequestId,fileName,bytes) {
            return service.invoke('/staging/update-staging-request',[{
                stagingRequestId:stagingRequestId
                ,fileName:fileName
                ,bytes:bytes
            }]);
        };
        service.validateStagingRequest = function(stagingRequestId,privateLayout,parameterMap) {
            return service.invoke('/staging/validate-staging-request',[{
                stagingRequestId:stagingRequestId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});