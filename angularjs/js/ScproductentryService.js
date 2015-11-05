(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ScproductentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addProductEntry = function(name,type,tags,shortDescription,longDescription,pageURL,author,repoGroupId,repoArtifactId,licenseIds,thumbnails,fullImages,serviceContext) {
            return service.invoke('/scproductentry/add-product-entry',[{
                name:name
                ,type:type
                ,tags:tags
                ,shortDescription:shortDescription
                ,longDescription:longDescription
                ,pageURL:pageURL
                ,author:author
                ,repoGroupId:repoGroupId
                ,repoArtifactId:repoArtifactId
                ,licenseIds:licenseIds
                ,thumbnails:thumbnails
                ,fullImages:fullImages
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteProductEntry = function(productEntryId) {
            return service.invoke('/scproductentry/delete-product-entry',[{
                productEntryId:productEntryId
            }]);
        };
        service.getProductEntry = function(productEntryId) {
            return service.invoke('/scproductentry/get-product-entry',[{
                productEntryId:productEntryId
            }]);
        };
        service.updateProductEntry = function(productEntryId,name,type,tags,shortDescription,longDescription,pageURL,author,repoGroupId,repoArtifactId,licenseIds,thumbnails,fullImages) {
            return service.invoke('/scproductentry/update-product-entry',[{
                productEntryId:productEntryId
                ,name:name
                ,type:type
                ,tags:tags
                ,shortDescription:shortDescription
                ,longDescription:longDescription
                ,pageURL:pageURL
                ,author:author
                ,repoGroupId:repoGroupId
                ,repoArtifactId:repoArtifactId
                ,licenseIds:licenseIds
                ,thumbnails:thumbnails
                ,fullImages:fullImages
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});