(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getFileVersion = function(fileVersionId) {
            return SessionService.invoke({'/dlfileversion/get-file-version':{
                fileVersionId:fileVersionId
            }});
        };
        service.getFileVersions = function(fileEntryId,status) {
            return SessionService.invoke({'/dlfileversion/get-file-versions':{
                fileEntryId:fileEntryId
                ,status:status
            }});
        };
        service.getFileVersionsCount = function(fileEntryId,status) {
            return SessionService.invoke({'/dlfileversion/get-file-versions-count':{
                fileEntryId:fileEntryId
                ,status:status
            }});
        };
        service.getLatestFileVersion = function(fileEntryId) {
            return SessionService.invoke({'/dlfileversion/get-latest-file-version':{
                fileEntryId:fileEntryId
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();