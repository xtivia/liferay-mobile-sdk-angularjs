(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCategory = function(parentCategoryId,name,description,displayStyle,emailAddress,inProtocol,inServerName,inServerPort,inUseSSL,inUserName,inPassword,inReadInterval,outEmailAddress,outCustom,outServerName,outServerPort,outUseSSL,outUserName,outPassword,mailingListActive,allowAnonymousEmail,serviceContext) {
            return service.invoke('/mbcategory/add-category',[{
                parentCategoryId:parentCategoryId
                ,name:name
                ,description:description
                ,displayStyle:displayStyle
                ,emailAddress:emailAddress
                ,inProtocol:inProtocol
                ,inServerName:inServerName
                ,inServerPort:inServerPort
                ,inUseSSL:inUseSSL
                ,inUserName:inUserName
                ,inPassword:inPassword
                ,inReadInterval:inReadInterval
                ,outEmailAddress:outEmailAddress
                ,outCustom:outCustom
                ,outServerName:outServerName
                ,outServerPort:outServerPort
                ,outUseSSL:outUseSSL
                ,outUserName:outUserName
                ,outPassword:outPassword
                ,mailingListActive:mailingListActive
                ,allowAnonymousEmail:allowAnonymousEmail
                ,serviceContext:serviceContext
            }]);
        };
        service.addCategory = function(userId,parentCategoryId,name,description,serviceContext) {
            return service.invoke('/mbcategory/add-category',[{
                userId:userId
                ,parentCategoryId:parentCategoryId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteCategory = function(categoryId,includeTrashedEntries) {
            return service.invoke('/mbcategory/delete-category',[{
                categoryId:categoryId
                ,includeTrashedEntries:includeTrashedEntries
            }]);
        };
        service.deleteCategory = function(groupId,categoryId) {
            return service.invoke('/mbcategory/delete-category',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        service.getCategories = function(groupId) {
            return service.invoke('/mbcategory/get-categories',[{
                groupId:groupId
            }]);
        };
        service.getCategories = function(groupId,status) {
            return service.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,status:status
            }]);
        };
        service.getCategories = function(groupId,parentCategoryId,start,end) {
            return service.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
                ,start:start
                ,end:end
            }]);
        };
        service.getCategories = function(groupId,parentCategoryIds,start,end) {
            return service.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryIds:parentCategoryIds
                ,start:start
                ,end:end
            }]);
        };
        service.getCategories = function(groupId,parentCategoryId,status,start,end) {
            return service.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.getCategories = function(groupId,parentCategoryIds,status,start,end) {
            return service.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryIds:parentCategoryIds
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.getCategoriesCount = function(groupId,parentCategoryId) {
            return service.invoke('/mbcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
            }]);
        };
        service.getCategoriesCount = function(groupId,parentCategoryIds) {
            return service.invoke('/mbcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryIds:parentCategoryIds
            }]);
        };
        service.getCategoriesCount = function(groupId,parentCategoryId,status) {
            return service.invoke('/mbcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
                ,status:status
            }]);
        };
        service.getCategoriesCount = function(groupId,parentCategoryIds,status) {
            return service.invoke('/mbcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryIds:parentCategoryIds
                ,status:status
            }]);
        };
        service.getCategory = function(categoryId) {
            return service.invoke('/mbcategory/get-category',[{
                categoryId:categoryId
            }]);
        };
        service.getCategoryIds = function(groupId,categoryId) {
            return service.invoke('/mbcategory/get-category-ids',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        service.getSubcategoryIds = function(categoryIds,groupId,categoryId) {
            return service.invoke('/mbcategory/get-subcategory-ids',[{
                categoryIds:categoryIds
                ,groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        service.getSubscribedCategories = function(groupId,userId,start,end) {
            return service.invoke('/mbcategory/get-subscribed-categories',[{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
            }]);
        };
        service.getSubscribedCategoriesCount = function(groupId,userId) {
            return service.invoke('/mbcategory/get-subscribed-categories-count',[{
                groupId:groupId
                ,userId:userId
            }]);
        };
        service.moveCategory = function(categoryId,parentCategoryId,mergeWithParentCategory) {
            return service.invoke('/mbcategory/move-category',[{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,mergeWithParentCategory:mergeWithParentCategory
            }]);
        };
        service.moveCategoryFromTrash = function(categoryId,newCategoryId) {
            return service.invoke('/mbcategory/move-category-from-trash',[{
                categoryId:categoryId
                ,newCategoryId:newCategoryId
            }]);
        };
        service.moveCategoryToTrash = function(categoryId) {
            return service.invoke('/mbcategory/move-category-to-trash',[{
                categoryId:categoryId
            }]);
        };
        service.restoreCategoryFromTrash = function(categoryId) {
            return service.invoke('/mbcategory/restore-category-from-trash',[{
                categoryId:categoryId
            }]);
        };
        service.subscribeCategory = function(groupId,categoryId) {
            return service.invoke('/mbcategory/subscribe-category',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        service.unsubscribeCategory = function(groupId,categoryId) {
            return service.invoke('/mbcategory/unsubscribe-category',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        service.updateCategory = function(categoryId,parentCategoryId,name,description,displayStyle,emailAddress,inProtocol,inServerName,inServerPort,inUseSSL,inUserName,inPassword,inReadInterval,outEmailAddress,outCustom,outServerName,outServerPort,outUseSSL,outUserName,outPassword,mailingListActive,allowAnonymousEmail,mergeWithParentCategory,serviceContext) {
            return service.invoke('/mbcategory/update-category',[{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,name:name
                ,description:description
                ,displayStyle:displayStyle
                ,emailAddress:emailAddress
                ,inProtocol:inProtocol
                ,inServerName:inServerName
                ,inServerPort:inServerPort
                ,inUseSSL:inUseSSL
                ,inUserName:inUserName
                ,inPassword:inPassword
                ,inReadInterval:inReadInterval
                ,outEmailAddress:outEmailAddress
                ,outCustom:outCustom
                ,outServerName:outServerName
                ,outServerPort:outServerPort
                ,outUseSSL:outUseSSL
                ,outUserName:outUserName
                ,outPassword:outPassword
                ,mailingListActive:mailingListActive
                ,allowAnonymousEmail:allowAnonymousEmail
                ,mergeWithParentCategory:mergeWithParentCategory
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});