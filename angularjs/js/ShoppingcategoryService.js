(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCategory = function(parentCategoryId,name,description,serviceContext) {
            return SessionService.invoke({'/shoppingcategory/add-category':{
                parentCategoryId:parentCategoryId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }});
        };
        service.deleteCategory = function(categoryId) {
            return SessionService.invoke({'/shoppingcategory/delete-category':{
                categoryId:categoryId
            }});
        };
        service.getCategories = function(groupId) {
            return SessionService.invoke({'/shoppingcategory/get-categories':{
                groupId:groupId
            }});
        };
        service.getCategories = function(groupId,parentCategoryId,start,end) {
            return SessionService.invoke({'/shoppingcategory/get-categories':{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
                ,start:start
                ,end:end
            }});
        };
        service.getCategoriesCount = function(groupId,parentCategoryId) {
            return SessionService.invoke({'/shoppingcategory/get-categories-count':{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
            }});
        };
        service.getCategory = function(categoryId) {
            return SessionService.invoke({'/shoppingcategory/get-category':{
                categoryId:categoryId
            }});
        };
        service.getSubcategoryIds = function(categoryIds,groupId,categoryId) {
            return SessionService.invoke({'/shoppingcategory/get-subcategory-ids':{
                categoryIds:categoryIds
                ,groupId:groupId
                ,categoryId:categoryId
            }});
        };
        service.updateCategory = function(categoryId,parentCategoryId,name,description,mergeWithParentCategory,serviceContext) {
            return SessionService.invoke({'/shoppingcategory/update-category':{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,name:name
                ,description:description
                ,mergeWithParentCategory:mergeWithParentCategory
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();