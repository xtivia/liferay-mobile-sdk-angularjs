(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetcategorypropertyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCategoryProperty = function(entryId,key,value) {
            return service.invoke('/assetcategoryproperty/add-category-property',[{
                entryId:entryId
                ,key:key
                ,value:value
            }]);
        };
        service.deleteCategoryProperty = function(categoryPropertyId) {
            return service.invoke('/assetcategoryproperty/delete-category-property',[{
                categoryPropertyId:categoryPropertyId
            }]);
        };
        service.getCategoryProperties = function(entryId) {
            return service.invoke('/assetcategoryproperty/get-category-properties',[{
                entryId:entryId
            }]);
        };
        service.getCategoryPropertyValues = function(companyId,key) {
            return service.invoke('/assetcategoryproperty/get-category-property-values',[{
                companyId:companyId
                ,key:key
            }]);
        };
        service.updateCategoryProperty = function(categoryPropertyId,key,value) {
            return service.invoke('/assetcategoryproperty/update-category-property',[{
                categoryPropertyId:categoryPropertyId
                ,key:key
                ,value:value
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});