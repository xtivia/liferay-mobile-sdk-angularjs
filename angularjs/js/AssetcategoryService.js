(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('AssetcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCategory = function(title,vocabularyId,serviceContext) {
            return SessionService.invoke({'/assetcategory/add-category':{
                title:title
                ,vocabularyId:vocabularyId
                ,serviceContext:serviceContext
            }});
        };
        service.addCategory = function(parentCategoryId,titleMap,descriptionMap,vocabularyId,categoryProperties,serviceContext) {
            return SessionService.invoke({'/assetcategory/add-category':{
                parentCategoryId:parentCategoryId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,vocabularyId:vocabularyId
                ,categoryProperties:categoryProperties
                ,serviceContext:serviceContext
            }});
        };
        service.deleteCategories = function(categoryIds) {
            return SessionService.invoke({'/assetcategory/delete-categories':{
                categoryIds:categoryIds
            }});
        };
        service.deleteCategories = function(categoryIds,serviceContext) {
            return SessionService.invoke({'/assetcategory/delete-categories':{
                categoryIds:categoryIds
                ,serviceContext:serviceContext
            }});
        };
        service.deleteCategory = function(categoryId) {
            return SessionService.invoke({'/assetcategory/delete-category':{
                categoryId:categoryId
            }});
        };
        service.getCategories = function(className,classPK) {
            return SessionService.invoke({'/assetcategory/get-categories':{
                className:className
                ,classPK:classPK
            }});
        };
        service.getCategory = function(categoryId) {
            return SessionService.invoke({'/assetcategory/get-category':{
                categoryId:categoryId
            }});
        };
        service.getChildCategories = function(parentCategoryId) {
            return SessionService.invoke({'/assetcategory/get-child-categories':{
                parentCategoryId:parentCategoryId
            }});
        };
        service.getChildCategories = function(parentCategoryId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-child-categories':{
                parentCategoryId:parentCategoryId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getJsonSearch = function(groupId,name,vocabularyIds,start,end) {
            return SessionService.invoke({'/assetcategory/get-json-search':{
                groupId:groupId
                ,name:name
                ,vocabularyIds:vocabularyIds
                ,start:start
                ,end:end
            }});
        };
        service.getJsonVocabularyCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-json-vocabulary-categories':{
                vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getJsonVocabularyCategories = function(groupId,title,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-json-vocabulary-categories':{
                groupId:groupId
                ,title:title
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getVocabularyCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories':{
                vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getVocabularyCategories = function(parentCategoryId,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories':{
                parentCategoryId:parentCategoryId
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getVocabularyCategories = function(groupId,name,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories':{
                groupId:groupId
                ,name:name
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getVocabularyCategoriesCount = function(groupId,vocabularyId) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories-count':{
                groupId:groupId
                ,vocabularyId:vocabularyId
            }});
        };
        service.getVocabularyCategoriesCount = function(groupId,name,vocabularyId) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories-count':{
                groupId:groupId
                ,name:name
                ,vocabularyId:vocabularyId
            }});
        };
        service.getVocabularyCategoriesDisplay = function(vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories-display':{
                vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getVocabularyCategoriesDisplay = function(groupId,name,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories-display':{
                groupId:groupId
                ,name:name
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getVocabularyRootCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-root-categories':{
                vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getVocabularyRootCategories = function(groupId,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-root-categories':{
                groupId:groupId
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getVocabularyRootCategoriesCount = function(groupId,vocabularyId) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-root-categories-count':{
                groupId:groupId
                ,vocabularyId:vocabularyId
            }});
        };
        service.moveCategory = function(categoryId,parentCategoryId,vocabularyId,serviceContext) {
            return SessionService.invoke({'/assetcategory/move-category':{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,vocabularyId:vocabularyId
                ,serviceContext:serviceContext
            }});
        };
        service.search = function(groupId,name,categoryProperties,start,end) {
            return SessionService.invoke({'/assetcategory/search':{
                groupId:groupId
                ,name:name
                ,categoryProperties:categoryProperties
                ,start:start
                ,end:end
            }});
        };
        service.search = function(groupIds,title,vocabularyIds,start,end) {
            return SessionService.invoke({'/assetcategory/search':{
                groupIds:groupIds
                ,title:title
                ,vocabularyIds:vocabularyIds
                ,start:start
                ,end:end
            }});
        };
        service.search = function(groupId,keywords,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/search':{
                groupId:groupId
                ,keywords:keywords
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.updateCategory = function(categoryId,parentCategoryId,titleMap,descriptionMap,vocabularyId,categoryProperties,serviceContext) {
            return SessionService.invoke({'/assetcategory/update-category':{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,vocabularyId:vocabularyId
                ,categoryProperties:categoryProperties
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();