(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ScproductversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addProductVersion = function(productEntryId,version,changeLog,downloadPageURL,directDownloadURL,testDirectDownloadURL,repoStoreArtifact,frameworkVersionIds,serviceContext) {
            return SessionService.invoke({'/scproductversion/add-product-version':{
                productEntryId:productEntryId
                ,version:version
                ,changeLog:changeLog
                ,downloadPageURL:downloadPageURL
                ,directDownloadURL:directDownloadURL
                ,testDirectDownloadURL:testDirectDownloadURL
                ,repoStoreArtifact:repoStoreArtifact
                ,frameworkVersionIds:frameworkVersionIds
                ,serviceContext:serviceContext
            }});
        };
        service.deleteProductVersion = function(productVersionId) {
            return SessionService.invoke({'/scproductversion/delete-product-version':{
                productVersionId:productVersionId
            }});
        };
        service.getProductVersion = function(productVersionId) {
            return SessionService.invoke({'/scproductversion/get-product-version':{
                productVersionId:productVersionId
            }});
        };
        service.getProductVersions = function(productEntryId,start,end) {
            return SessionService.invoke({'/scproductversion/get-product-versions':{
                productEntryId:productEntryId
                ,start:start
                ,end:end
            }});
        };
        service.getProductVersionsCount = function(productEntryId) {
            return SessionService.invoke({'/scproductversion/get-product-versions-count':{
                productEntryId:productEntryId
            }});
        };
        service.updateProductVersion = function(productVersionId,version,changeLog,downloadPageURL,directDownloadURL,testDirectDownloadURL,repoStoreArtifact,frameworkVersionIds) {
            return SessionService.invoke({'/scproductversion/update-product-version':{
                productVersionId:productVersionId
                ,version:version
                ,changeLog:changeLog
                ,downloadPageURL:downloadPageURL
                ,directDownloadURL:directDownloadURL
                ,testDirectDownloadURL:testDirectDownloadURL
                ,repoStoreArtifact:repoStoreArtifact
                ,frameworkVersionIds:frameworkVersionIds
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();