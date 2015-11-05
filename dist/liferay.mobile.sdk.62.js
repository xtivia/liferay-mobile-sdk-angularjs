(function() {
    'use strict';

    angular
        .module('mobile.sdk.v62', []);
})();
(function() {
    'use strict';
    // Used only for the BottomSheetExample
    angular
        .module('mobile.sdk.v62')
    ;
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AddressService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addAddress = function(className,classPK,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary) {
            return SessionService.invoke('/address/add-address',[{
                className:className
                ,classPK:classPK
                ,street1:street1
                ,street2:street2
                ,street3:street3
                ,city:city
                ,zip:zip
                ,regionId:regionId
                ,countryId:countryId
                ,typeId:typeId
                ,mailing:mailing
                ,primary:primary
            }]);
        };
        service.addAddress = function(className,classPK,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary,serviceContext) {
            return SessionService.invoke('/address/add-address',[{
                className:className
                ,classPK:classPK
                ,street1:street1
                ,street2:street2
                ,street3:street3
                ,city:city
                ,zip:zip
                ,regionId:regionId
                ,countryId:countryId
                ,typeId:typeId
                ,mailing:mailing
                ,primary:primary
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteAddress = function(addressId) {
            return SessionService.invoke('/address/delete-address',[{
                addressId:addressId
            }]);
        };
        service.getAddress = function(addressId) {
            return SessionService.invoke('/address/get-address',[{
                addressId:addressId
            }]);
        };
        service.getAddresses = function(className,classPK) {
            return SessionService.invoke('/address/get-addresses',[{
                className:className
                ,classPK:classPK
            }]);
        };
        service.updateAddress = function(addressId,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary) {
            return SessionService.invoke('/address/update-address',[{
                addressId:addressId
                ,street1:street1
                ,street2:street2
                ,street3:street3
                ,city:city
                ,zip:zip
                ,regionId:regionId
                ,countryId:countryId
                ,typeId:typeId
                ,mailing:mailing
                ,primary:primary
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();

(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AnnouncementsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addEntry = function(plid,classNameId,classPK,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority,alert) {
            return SessionService.invoke('/announcementsentry/add-entry',[{
                plid:plid
                ,classNameId:classNameId
                ,classPK:classPK
                ,title:title
                ,content:content
                ,url:url
                ,type:type
                ,displayDateMonth:displayDateMonth
                ,displayDateDay:displayDateDay
                ,displayDateYear:displayDateYear
                ,displayDateHour:displayDateHour
                ,displayDateMinute:displayDateMinute
                ,expirationDateMonth:expirationDateMonth
                ,expirationDateDay:expirationDateDay
                ,expirationDateYear:expirationDateYear
                ,expirationDateHour:expirationDateHour
                ,expirationDateMinute:expirationDateMinute
                ,priority:priority
                ,alert:alert
            }]);
        };
        addEntry = function(plid,classNameId,classPK,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,displayImmediately,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority,alert) {
            return SessionService.invoke('/announcementsentry/add-entry',[{
                plid:plid
                ,classNameId:classNameId
                ,classPK:classPK
                ,title:title
                ,content:content
                ,url:url
                ,type:type
                ,displayDateMonth:displayDateMonth
                ,displayDateDay:displayDateDay
                ,displayDateYear:displayDateYear
                ,displayDateHour:displayDateHour
                ,displayDateMinute:displayDateMinute
                ,displayImmediately:displayImmediately
                ,expirationDateMonth:expirationDateMonth
                ,expirationDateDay:expirationDateDay
                ,expirationDateYear:expirationDateYear
                ,expirationDateHour:expirationDateHour
                ,expirationDateMinute:expirationDateMinute
                ,priority:priority
                ,alert:alert
            }]);
        };
        deleteEntry = function(entryId) {
            return SessionService.invoke('/announcementsentry/delete-entry',[{
                entryId:entryId
            }]);
        };
        getEntry = function(entryId) {
            return SessionService.invoke('/announcementsentry/get-entry',[{
                entryId:entryId
            }]);
        };
        updateEntry = function(entryId,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,displayImmediately,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority) {
            return SessionService.invoke('/announcementsentry/update-entry',[{
                entryId:entryId
                ,title:title
                ,content:content
                ,url:url
                ,type:type
                ,displayDateMonth:displayDateMonth
                ,displayDateDay:displayDateDay
                ,displayDateYear:displayDateYear
                ,displayDateHour:displayDateHour
                ,displayDateMinute:displayDateMinute
                ,displayImmediately:displayImmediately
                ,expirationDateMonth:expirationDateMonth
                ,expirationDateDay:expirationDateDay
                ,expirationDateYear:expirationDateYear
                ,expirationDateHour:expirationDateHour
                ,expirationDateMinute:expirationDateMinute
                ,priority:priority
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AnnouncementsflagService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFlag = function(entryId,value) {
            return SessionService.invoke('/announcementsflag/add-flag',[{
                entryId:entryId
                ,value:value
            }]);
        };
        deleteFlag = function(flagId) {
            return SessionService.invoke('/announcementsflag/delete-flag',[{
                flagId:flagId
            }]);
        };
        getFlag = function(entryId,value) {
            return SessionService.invoke('/announcementsflag/get-flag',[{
                entryId:entryId
                ,value:value
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addCategory = function(title,vocabularyId,serviceContext) {
            return SessionService.invoke('/assetcategory/add-category',[{
                title:title
                ,vocabularyId:vocabularyId
                ,serviceContext:serviceContext
            }]);
        };
        addCategory = function(parentCategoryId,titleMap,descriptionMap,vocabularyId,categoryProperties,serviceContext) {
            return SessionService.invoke('/assetcategory/add-category',[{
                parentCategoryId:parentCategoryId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,vocabularyId:vocabularyId
                ,categoryProperties:categoryProperties
                ,serviceContext:serviceContext
            }]);
        };
        deleteCategories = function(categoryIds) {
            return SessionService.invoke('/assetcategory/delete-categories',[{
                categoryIds:categoryIds
            }]);
        };
        deleteCategories = function(categoryIds,serviceContext) {
            return SessionService.invoke('/assetcategory/delete-categories',[{
                categoryIds:categoryIds
                ,serviceContext:serviceContext
            }]);
        };
        deleteCategory = function(categoryId) {
            return SessionService.invoke('/assetcategory/delete-category',[{
                categoryId:categoryId
            }]);
        };
        getCategories = function(className,classPK) {
            return SessionService.invoke('/assetcategory/get-categories',[{
                className:className
                ,classPK:classPK
            }]);
        };
        getCategory = function(categoryId) {
            return SessionService.invoke('/assetcategory/get-category',[{
                categoryId:categoryId
            }]);
        };
        getChildCategories = function(parentCategoryId) {
            return SessionService.invoke('/assetcategory/get-child-categories',[{
                parentCategoryId:parentCategoryId
            }]);
        };
        getChildCategories = function(parentCategoryId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-child-categories',[{
                parentCategoryId:parentCategoryId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getJsonSearch = function(groupId,name,vocabularyIds,start,end) {
            return SessionService.invoke('/assetcategory/get-json-search',[{
                groupId:groupId
                ,name:name
                ,vocabularyIds:vocabularyIds
                ,start:start
                ,end:end
            }]);
        };
        getJsonVocabularyCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-json-vocabulary-categories',[{
                vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getJsonVocabularyCategories = function(groupId,title,vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-json-vocabulary-categories',[{
                groupId:groupId
                ,title:title
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularyCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-vocabulary-categories',[{
                vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularyCategories = function(parentCategoryId,vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-vocabulary-categories',[{
                parentCategoryId:parentCategoryId
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularyCategories = function(groupId,name,vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-vocabulary-categories',[{
                groupId:groupId
                ,name:name
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularyCategoriesCount = function(groupId,vocabularyId) {
            return SessionService.invoke('/assetcategory/get-vocabulary-categories-count',[{
                groupId:groupId
                ,vocabularyId:vocabularyId
            }]);
        };
        getVocabularyCategoriesCount = function(groupId,name,vocabularyId) {
            return SessionService.invoke('/assetcategory/get-vocabulary-categories-count',[{
                groupId:groupId
                ,name:name
                ,vocabularyId:vocabularyId
            }]);
        };
        getVocabularyCategoriesDisplay = function(vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-vocabulary-categories-display',[{
                vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularyCategoriesDisplay = function(groupId,name,vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-vocabulary-categories-display',[{
                groupId:groupId
                ,name:name
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularyRootCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-vocabulary-root-categories',[{
                vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularyRootCategories = function(groupId,vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/get-vocabulary-root-categories',[{
                groupId:groupId
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularyRootCategoriesCount = function(groupId,vocabularyId) {
            return SessionService.invoke('/assetcategory/get-vocabulary-root-categories-count',[{
                groupId:groupId
                ,vocabularyId:vocabularyId
            }]);
        };
        moveCategory = function(categoryId,parentCategoryId,vocabularyId,serviceContext) {
            return SessionService.invoke('/assetcategory/move-category',[{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,vocabularyId:vocabularyId
                ,serviceContext:serviceContext
            }]);
        };
        search = function(groupId,name,categoryProperties,start,end) {
            return SessionService.invoke('/assetcategory/search',[{
                groupId:groupId
                ,name:name
                ,categoryProperties:categoryProperties
                ,start:start
                ,end:end
            }]);
        };
        search = function(groupIds,title,vocabularyIds,start,end) {
            return SessionService.invoke('/assetcategory/search',[{
                groupIds:groupIds
                ,title:title
                ,vocabularyIds:vocabularyIds
                ,start:start
                ,end:end
            }]);
        };
        search = function(groupId,keywords,vocabularyId,start,end,obc) {
            return SessionService.invoke('/assetcategory/search',[{
                groupId:groupId
                ,keywords:keywords
                ,vocabularyId:vocabularyId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        updateCategory = function(categoryId,parentCategoryId,titleMap,descriptionMap,vocabularyId,categoryProperties,serviceContext) {
            return SessionService.invoke('/assetcategory/update-category',[{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,vocabularyId:vocabularyId
                ,categoryProperties:categoryProperties
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetcategorypropertyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addCategoryProperty = function(entryId,key,value) {
            return SessionService.invoke('/assetcategoryproperty/add-category-property',[{
                entryId:entryId
                ,key:key
                ,value:value
            }]);
        };
        deleteCategoryProperty = function(categoryPropertyId) {
            return SessionService.invoke('/assetcategoryproperty/delete-category-property',[{
                categoryPropertyId:categoryPropertyId
            }]);
        };
        getCategoryProperties = function(entryId) {
            return SessionService.invoke('/assetcategoryproperty/get-category-properties',[{
                entryId:entryId
            }]);
        };
        getCategoryPropertyValues = function(companyId,key) {
            return SessionService.invoke('/assetcategoryproperty/get-category-property-values',[{
                companyId:companyId
                ,key:key
            }]);
        };
        updateCategoryProperty = function(categoryPropertyId,key,value) {
            return SessionService.invoke('/assetcategoryproperty/update-category-property',[{
                categoryPropertyId:categoryPropertyId
                ,key:key
                ,value:value
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getCompanyEntries = function(companyId,start,end) {
            return SessionService.invoke('/assetentry/get-company-entries',[{
                companyId:companyId
                ,start:start
                ,end:end
            }]);
        };
        getCompanyEntriesCount = function(companyId) {
            return SessionService.invoke('/assetentry/get-company-entries-count',[{
                companyId:companyId
            }]);
        };
        getEntries = function(entryQuery) {
            return SessionService.invoke('/assetentry/get-entries',[{
                entryQuery:entryQuery
            }]);
        };
        getEntriesCount = function(entryQuery) {
            return SessionService.invoke('/assetentry/get-entries-count',[{
                entryQuery:entryQuery
            }]);
        };
        getEntry = function(entryId) {
            return SessionService.invoke('/assetentry/get-entry',[{
                entryId:entryId
            }]);
        };
        incrementViewCounter = function(className,classPK) {
            return SessionService.invoke('/assetentry/increment-view-counter',[{
                className:className
                ,classPK:classPK
            }]);
        };
        updateEntry = function(groupId,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke('/assetentry/update-entry',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,classUuid:classUuid
                ,classTypeId:classTypeId
                ,categoryIds:categoryIds
                ,tagNames:tagNames
                ,visible:visible
                ,startDate:startDate
                ,endDate:endDate
                ,expirationDate:expirationDate
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,summary:summary
                ,url:url
                ,layoutUuid:layoutUuid
                ,height:height
                ,width:width
                ,priority:priority
                ,sync:sync
            }]);
        };
        updateEntry = function(groupId,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,publishDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke('/assetentry/update-entry',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,classUuid:classUuid
                ,classTypeId:classTypeId
                ,categoryIds:categoryIds
                ,tagNames:tagNames
                ,visible:visible
                ,startDate:startDate
                ,endDate:endDate
                ,publishDate:publishDate
                ,expirationDate:expirationDate
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,summary:summary
                ,url:url
                ,layoutUuid:layoutUuid
                ,height:height
                ,width:width
                ,priority:priority
                ,sync:sync
            }]);
        };
        updateEntry = function(groupId,createDate,modifiedDate,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke('/assetentry/update-entry',[{
                groupId:groupId
                ,createDate:createDate
                ,modifiedDate:modifiedDate
                ,className:className
                ,classPK:classPK
                ,classUuid:classUuid
                ,classTypeId:classTypeId
                ,categoryIds:categoryIds
                ,tagNames:tagNames
                ,visible:visible
                ,startDate:startDate
                ,endDate:endDate
                ,expirationDate:expirationDate
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,summary:summary
                ,url:url
                ,layoutUuid:layoutUuid
                ,height:height
                ,width:width
                ,priority:priority
                ,sync:sync
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssettagService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addTag = function(name,tagProperties,serviceContext) {
            return SessionService.invoke('/assettag/add-tag',[{
                name:name
                ,tagProperties:tagProperties
                ,serviceContext:serviceContext
            }]);
        };
        deleteTag = function(tagId) {
            return SessionService.invoke('/assettag/delete-tag',[{
                tagId:tagId
            }]);
        };
        deleteTags = function(tagIds) {
            return SessionService.invoke('/assettag/delete-tags',[{
                tagIds:tagIds
            }]);
        };
        getGroupTags = function(groupId) {
            return SessionService.invoke('/assettag/get-group-tags',[{
                groupId:groupId
            }]);
        };
        getGroupTags = function(groupId,start,end,obc) {
            return SessionService.invoke('/assettag/get-group-tags',[{
                groupId:groupId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupTagsCount = function(groupId) {
            return SessionService.invoke('/assettag/get-group-tags-count',[{
                groupId:groupId
            }]);
        };
        getGroupTagsDisplay = function(groupId,name,start,end) {
            return SessionService.invoke('/assettag/get-group-tags-display',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
            }]);
        };
        getGroupsTags = function(groupIds) {
            return SessionService.invoke('/assettag/get-groups-tags',[{
                groupIds:groupIds
            }]);
        };
        getJsonGroupTags = function(groupId,name,start,end) {
            return SessionService.invoke('/assettag/get-json-group-tags',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
            }]);
        };
        getTag = function(tagId) {
            return SessionService.invoke('/assettag/get-tag',[{
                tagId:tagId
            }]);
        };
        getTags = function(className,classPK) {
            return SessionService.invoke('/assettag/get-tags',[{
                className:className
                ,classPK:classPK
            }]);
        };
        getTags = function(groupId,classNameId,name) {
            return SessionService.invoke('/assettag/get-tags',[{
                groupId:groupId
                ,classNameId:classNameId
                ,name:name
            }]);
        };
        getTags = function(groupId,name,tagProperties,start,end) {
            return SessionService.invoke('/assettag/get-tags',[{
                groupId:groupId
                ,name:name
                ,tagProperties:tagProperties
                ,start:start
                ,end:end
            }]);
        };
        getTags = function(groupIds,name,tagProperties,start,end) {
            return SessionService.invoke('/assettag/get-tags',[{
                groupIds:groupIds
                ,name:name
                ,tagProperties:tagProperties
                ,start:start
                ,end:end
            }]);
        };
        getTags = function(groupId,classNameId,name,start,end,obc) {
            return SessionService.invoke('/assettag/get-tags',[{
                groupId:groupId
                ,classNameId:classNameId
                ,name:name
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getTagsCount = function(groupId,name) {
            return SessionService.invoke('/assettag/get-tags-count',[{
                groupId:groupId
                ,name:name
            }]);
        };
        getTagsCount = function(groupId,classNameId,name) {
            return SessionService.invoke('/assettag/get-tags-count',[{
                groupId:groupId
                ,classNameId:classNameId
                ,name:name
            }]);
        };
        getTagsCount = function(groupId,name,tagProperties) {
            return SessionService.invoke('/assettag/get-tags-count',[{
                groupId:groupId
                ,name:name
                ,tagProperties:tagProperties
            }]);
        };
        mergeTags = function(fromTagId,toTagId,overrideProperties) {
            return SessionService.invoke('/assettag/merge-tags',[{
                fromTagId:fromTagId
                ,toTagId:toTagId
                ,overrideProperties:overrideProperties
            }]);
        };
        mergeTags = function(fromTagIds,toTagId,overrideProperties) {
            return SessionService.invoke('/assettag/merge-tags',[{
                fromTagIds:fromTagIds
                ,toTagId:toTagId
                ,overrideProperties:overrideProperties
            }]);
        };
        search = function(groupId,name,tagProperties,start,end) {
            return SessionService.invoke('/assettag/search',[{
                groupId:groupId
                ,name:name
                ,tagProperties:tagProperties
                ,start:start
                ,end:end
            }]);
        };
        search = function(groupIds,name,tagProperties,start,end) {
            return SessionService.invoke('/assettag/search',[{
                groupIds:groupIds
                ,name:name
                ,tagProperties:tagProperties
                ,start:start
                ,end:end
            }]);
        };
        updateTag = function(tagId,name,tagProperties,serviceContext) {
            return SessionService.invoke('/assettag/update-tag',[{
                tagId:tagId
                ,name:name
                ,tagProperties:tagProperties
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssettagpropertyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addTagProperty = function(tagId,key,value) {
            return SessionService.invoke('/assettagproperty/add-tag-property',[{
                tagId:tagId
                ,key:key
                ,value:value
            }]);
        };
        deleteTagProperty = function(tagPropertyId) {
            return SessionService.invoke('/assettagproperty/delete-tag-property',[{
                tagPropertyId:tagPropertyId
            }]);
        };
        getTagProperties = function(tagId) {
            return SessionService.invoke('/assettagproperty/get-tag-properties',[{
                tagId:tagId
            }]);
        };
        getTagPropertyValues = function(companyId,key) {
            return SessionService.invoke('/assettagproperty/get-tag-property-values',[{
                companyId:companyId
                ,key:key
            }]);
        };
        updateTagProperty = function(tagPropertyId,key,value) {
            return SessionService.invoke('/assettagproperty/update-tag-property',[{
                tagPropertyId:tagPropertyId
                ,key:key
                ,value:value
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetvocabularyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addVocabulary = function(title,serviceContext) {
            return SessionService.invoke('/assetvocabulary/add-vocabulary',[{
                title:title
                ,serviceContext:serviceContext
            }]);
        };
        addVocabulary = function(titleMap,descriptionMap,settings,serviceContext) {
            return SessionService.invoke('/assetvocabulary/add-vocabulary',[{
                titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,settings:settings
                ,serviceContext:serviceContext
            }]);
        };
        addVocabulary = function(title,titleMap,descriptionMap,settings,serviceContext) {
            return SessionService.invoke('/assetvocabulary/add-vocabulary',[{
                title:title
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,settings:settings
                ,serviceContext:serviceContext
            }]);
        };
        deleteVocabularies = function(vocabularyIds) {
            return SessionService.invoke('/assetvocabulary/delete-vocabularies',[{
                vocabularyIds:vocabularyIds
            }]);
        };
        deleteVocabularies = function(vocabularyIds,serviceContext) {
            return SessionService.invoke('/assetvocabulary/delete-vocabularies',[{
                vocabularyIds:vocabularyIds
                ,serviceContext:serviceContext
            }]);
        };
        deleteVocabulary = function(vocabularyId) {
            return SessionService.invoke('/assetvocabulary/delete-vocabulary',[{
                vocabularyId:vocabularyId
            }]);
        };
        getCompanyVocabularies = function(companyId) {
            return SessionService.invoke('/assetvocabulary/get-company-vocabularies',[{
                companyId:companyId
            }]);
        };
        getGroupVocabularies = function(groupId) {
            return SessionService.invoke('/assetvocabulary/get-group-vocabularies',[{
                groupId:groupId
            }]);
        };
        getGroupVocabularies = function(groupId,createDefaultVocabulary) {
            return SessionService.invoke('/assetvocabulary/get-group-vocabularies',[{
                groupId:groupId
                ,createDefaultVocabulary:createDefaultVocabulary
            }]);
        };
        getGroupVocabularies = function(groupId,start,end,obc) {
            return SessionService.invoke('/assetvocabulary/get-group-vocabularies',[{
                groupId:groupId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupVocabularies = function(groupId,name,start,end,obc) {
            return SessionService.invoke('/assetvocabulary/get-group-vocabularies',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupVocabulariesCount = function(groupId) {
            return SessionService.invoke('/assetvocabulary/get-group-vocabularies-count',[{
                groupId:groupId
            }]);
        };
        getGroupVocabulariesCount = function(groupId,name) {
            return SessionService.invoke('/assetvocabulary/get-group-vocabularies-count',[{
                groupId:groupId
                ,name:name
            }]);
        };
        getGroupVocabulariesDisplay = function(groupId,name,start,end,obc) {
            return SessionService.invoke('/assetvocabulary/get-group-vocabularies-display',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupVocabulariesDisplay = function(groupId,title,start,end,addDefaultVocabulary,obc) {
            return SessionService.invoke('/assetvocabulary/get-group-vocabularies-display',[{
                groupId:groupId
                ,title:title
                ,start:start
                ,end:end
                ,addDefaultVocabulary:addDefaultVocabulary
                ,obc:obc
            }]);
        };
        getGroupsVocabularies = function(groupIds) {
            return SessionService.invoke('/assetvocabulary/get-groups-vocabularies',[{
                groupIds:groupIds
            }]);
        };
        getGroupsVocabularies = function(groupIds,className) {
            return SessionService.invoke('/assetvocabulary/get-groups-vocabularies',[{
                groupIds:groupIds
                ,className:className
            }]);
        };
        getJsonGroupVocabularies = function(groupId,name,start,end,obc) {
            return SessionService.invoke('/assetvocabulary/get-json-group-vocabularies',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getVocabularies = function(vocabularyIds) {
            return SessionService.invoke('/assetvocabulary/get-vocabularies',[{
                vocabularyIds:vocabularyIds
            }]);
        };
        getVocabulary = function(vocabularyId) {
            return SessionService.invoke('/assetvocabulary/get-vocabulary',[{
                vocabularyId:vocabularyId
            }]);
        };
        updateVocabulary = function(vocabularyId,titleMap,descriptionMap,settings,serviceContext) {
            return SessionService.invoke('/assetvocabulary/update-vocabulary',[{
                vocabularyId:vocabularyId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,settings:settings
                ,serviceContext:serviceContext
            }]);
        };
        updateVocabulary = function(vocabularyId,title,titleMap,descriptionMap,settings,serviceContext) {
            return SessionService.invoke('/assetvocabulary/update-vocabulary',[{
                vocabularyId:vocabularyId
                ,title:title
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,settings:settings
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BackgroundtaskService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getBackgroundTaskStatusJson = function(backgroundTaskId) {
            return SessionService.invoke('/backgroundtask/get-background-task-status-json',[{
                backgroundTaskId:backgroundTaskId
            }]);
        };
        getBackgroundTasksCount = function(groupId,taskExecutorClassName,completed) {
            return SessionService.invoke('/backgroundtask/get-background-tasks-count',[{
                groupId:groupId
                ,taskExecutorClassName:taskExecutorClassName
                ,completed:completed
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BlogsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        deleteEntry = function(entryId) {
            return SessionService.invoke('/blogsentry/delete-entry',[{
                entryId:entryId
            }]);
        };
        getCompanyEntries = function(companyId,displayDate,status,max) {
            return SessionService.invoke('/blogsentry/get-company-entries',[{
                companyId:companyId
                ,displayDate:displayDate
                ,status:status
                ,max:max
            }]);
        };
        getCompanyEntriesRss = function(companyId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke('/blogsentry/get-company-entries-rss',[{
                companyId:companyId
                ,displayDate:displayDate
                ,status:status
                ,max:max
                ,type:type
                ,version:version
                ,displayStyle:displayStyle
                ,feedURL:feedURL
                ,entryURL:entryURL
                ,themeDisplay:themeDisplay
            }]);
        };
        getEntry = function(entryId) {
            return SessionService.invoke('/blogsentry/get-entry',[{
                entryId:entryId
            }]);
        };
        getEntry = function(groupId,urlTitle) {
            return SessionService.invoke('/blogsentry/get-entry',[{
                groupId:groupId
                ,urlTitle:urlTitle
            }]);
        };
        getGroupEntries = function(groupId,status,max) {
            return SessionService.invoke('/blogsentry/get-group-entries',[{
                groupId:groupId
                ,status:status
                ,max:max
            }]);
        };
        getGroupEntries = function(groupId,displayDate,status,max) {
            return SessionService.invoke('/blogsentry/get-group-entries',[{
                groupId:groupId
                ,displayDate:displayDate
                ,status:status
                ,max:max
            }]);
        };
        getGroupEntries = function(groupId,status,start,end) {
            return SessionService.invoke('/blogsentry/get-group-entries',[{
                groupId:groupId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getGroupEntries = function(groupId,displayDate,status,start,end) {
            return SessionService.invoke('/blogsentry/get-group-entries',[{
                groupId:groupId
                ,displayDate:displayDate
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getGroupEntriesCount = function(groupId,status) {
            return SessionService.invoke('/blogsentry/get-group-entries-count',[{
                groupId:groupId
                ,status:status
            }]);
        };
        getGroupEntriesCount = function(groupId,displayDate,status) {
            return SessionService.invoke('/blogsentry/get-group-entries-count',[{
                groupId:groupId
                ,displayDate:displayDate
                ,status:status
            }]);
        };
        getGroupEntriesRss = function(groupId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke('/blogsentry/get-group-entries-rss',[{
                groupId:groupId
                ,displayDate:displayDate
                ,status:status
                ,max:max
                ,type:type
                ,version:version
                ,displayStyle:displayStyle
                ,feedURL:feedURL
                ,entryURL:entryURL
                ,themeDisplay:themeDisplay
            }]);
        };
        getGroupsEntries = function(companyId,groupId,displayDate,status,max) {
            return SessionService.invoke('/blogsentry/get-groups-entries',[{
                companyId:companyId
                ,groupId:groupId
                ,displayDate:displayDate
                ,status:status
                ,max:max
            }]);
        };
        getOrganizationEntries = function(organizationId,displayDate,status,max) {
            return SessionService.invoke('/blogsentry/get-organization-entries',[{
                organizationId:organizationId
                ,displayDate:displayDate
                ,status:status
                ,max:max
            }]);
        };
        getOrganizationEntriesRss = function(organizationId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke('/blogsentry/get-organization-entries-rss',[{
                organizationId:organizationId
                ,displayDate:displayDate
                ,status:status
                ,max:max
                ,type:type
                ,version:version
                ,displayStyle:displayStyle
                ,feedURL:feedURL
                ,entryURL:entryURL
                ,themeDisplay:themeDisplay
            }]);
        };
        moveEntryToTrash = function(entryId) {
            return SessionService.invoke('/blogsentry/move-entry-to-trash',[{
                entryId:entryId
            }]);
        };
        restoreEntryFromTrash = function(entryId) {
            return SessionService.invoke('/blogsentry/restore-entry-from-trash',[{
                entryId:entryId
            }]);
        };
        subscribe = function(groupId) {
            return SessionService.invoke('/blogsentry/subscribe',[{
                groupId:groupId
            }]);
        };
        unsubscribe = function(groupId) {
            return SessionService.invoke('/blogsentry/unsubscribe',[{
                groupId:groupId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BookmarksentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addEntry = function(groupId,folderId,name,url,description,serviceContext) {
            return SessionService.invoke('/bookmarksentry/add-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,name:name
                ,url:url
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteEntry = function(entryId) {
            return SessionService.invoke('/bookmarksentry/delete-entry',[{
                entryId:entryId
            }]);
        };
        getEntries = function(groupId,folderId,start,end) {
            return SessionService.invoke('/bookmarksentry/get-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
            }]);
        };
        getEntries = function(groupId,folderId,start,end,orderByComparator) {
            return SessionService.invoke('/bookmarksentry/get-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        getEntriesCount = function(groupId,folderId) {
            return SessionService.invoke('/bookmarksentry/get-entries-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getEntriesCount = function(groupId,folderId,status) {
            return SessionService.invoke('/bookmarksentry/get-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        getEntry = function(entryId) {
            return SessionService.invoke('/bookmarksentry/get-entry',[{
                entryId:entryId
            }]);
        };
        getFoldersEntriesCount = function(groupId,folderIds) {
            return SessionService.invoke('/bookmarksentry/get-folders-entries-count',[{
                groupId:groupId
                ,folderIds:folderIds
            }]);
        };
        getGroupEntries = function(groupId,start,end) {
            return SessionService.invoke('/bookmarksentry/get-group-entries',[{
                groupId:groupId
                ,start:start
                ,end:end
            }]);
        };
        getGroupEntries = function(groupId,userId,start,end) {
            return SessionService.invoke('/bookmarksentry/get-group-entries',[{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getGroupEntries = function(groupId,userId,rootFolderId,start,end) {
            return SessionService.invoke('/bookmarksentry/get-group-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
            }]);
        };
        getGroupEntriesCount = function(groupId) {
            return SessionService.invoke('/bookmarksentry/get-group-entries-count',[{
                groupId:groupId
            }]);
        };
        getGroupEntriesCount = function(groupId,userId) {
            return SessionService.invoke('/bookmarksentry/get-group-entries-count',[{
                groupId:groupId
                ,userId:userId
            }]);
        };
        getGroupEntriesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke('/bookmarksentry/get-group-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }]);
        };
        moveEntry = function(entryId,parentFolderId) {
            return SessionService.invoke('/bookmarksentry/move-entry',[{
                entryId:entryId
                ,parentFolderId:parentFolderId
            }]);
        };
        moveEntryFromTrash = function(entryId,parentFolderId) {
            return SessionService.invoke('/bookmarksentry/move-entry-from-trash',[{
                entryId:entryId
                ,parentFolderId:parentFolderId
            }]);
        };
        moveEntryToTrash = function(entryId) {
            return SessionService.invoke('/bookmarksentry/move-entry-to-trash',[{
                entryId:entryId
            }]);
        };
        openEntry = function(entry) {
            return SessionService.invoke('/bookmarksentry/open-entry',[{
                entry:entry
            }]);
        };
        openEntry = function(entryId) {
            return SessionService.invoke('/bookmarksentry/open-entry',[{
                entryId:entryId
            }]);
        };
        restoreEntryFromTrash = function(entryId) {
            return SessionService.invoke('/bookmarksentry/restore-entry-from-trash',[{
                entryId:entryId
            }]);
        };
        search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke('/bookmarksentry/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        subscribeEntry = function(entryId) {
            return SessionService.invoke('/bookmarksentry/subscribe-entry',[{
                entryId:entryId
            }]);
        };
        unsubscribeEntry = function(entryId) {
            return SessionService.invoke('/bookmarksentry/unsubscribe-entry',[{
                entryId:entryId
            }]);
        };
        updateEntry = function(entryId,groupId,folderId,name,url,description,serviceContext) {
            return SessionService.invoke('/bookmarksentry/update-entry',[{
                entryId:entryId
                ,groupId:groupId
                ,folderId:folderId
                ,name:name
                ,url:url
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BookmarksfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFolder = function(parentFolderId,name,description,serviceContext) {
            return SessionService.invoke('/bookmarksfolder/add-folder',[{
                parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteFolder = function(folderId) {
            return SessionService.invoke('/bookmarksfolder/delete-folder',[{
                folderId:folderId
            }]);
        };
        deleteFolder = function(folderId,includeTrashedEntries) {
            return SessionService.invoke('/bookmarksfolder/delete-folder',[{
                folderId:folderId
                ,includeTrashedEntries:includeTrashedEntries
            }]);
        };
        getFolder = function(folderId) {
            return SessionService.invoke('/bookmarksfolder/get-folder',[{
                folderId:folderId
            }]);
        };
        getFolderIds = function(groupId,folderId) {
            return SessionService.invoke('/bookmarksfolder/get-folder-ids',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getFolders = function(groupId) {
            return SessionService.invoke('/bookmarksfolder/get-folders',[{
                groupId:groupId
            }]);
        };
        getFolders = function(groupId,parentFolderId) {
            return SessionService.invoke('/bookmarksfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        getFolders = function(groupId,parentFolderId,start,end) {
            return SessionService.invoke('/bookmarksfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
            }]);
        };
        getFolders = function(groupId,parentFolderId,status,start,end) {
            return SessionService.invoke('/bookmarksfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getFoldersAndEntries = function(groupId,folderId) {
            return SessionService.invoke('/bookmarksfolder/get-folders-and-entries',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getFoldersAndEntries = function(groupId,folderId,status) {
            return SessionService.invoke('/bookmarksfolder/get-folders-and-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        getFoldersAndEntries = function(groupId,folderId,status,start,end) {
            return SessionService.invoke('/bookmarksfolder/get-folders-and-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getFoldersAndEntriesCount = function(groupId,folderId) {
            return SessionService.invoke('/bookmarksfolder/get-folders-and-entries-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getFoldersAndEntriesCount = function(groupId,folderId,status) {
            return SessionService.invoke('/bookmarksfolder/get-folders-and-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        getFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke('/bookmarksfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        getFoldersCount = function(groupId,parentFolderId,status) {
            return SessionService.invoke('/bookmarksfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
            }]);
        };
        getSubfolderIds = function(folderIds,groupId,folderId) {
            return SessionService.invoke('/bookmarksfolder/get-subfolder-ids',[{
                folderIds:folderIds
                ,groupId:groupId
                ,folderId:folderId
            }]);
        };
        getSubfolderIds = function(groupId,folderId,recurse) {
            return SessionService.invoke('/bookmarksfolder/get-subfolder-ids',[{
                groupId:groupId
                ,folderId:folderId
                ,recurse:recurse
            }]);
        };
        moveFolder = function(folderId,parentFolderId) {
            return SessionService.invoke('/bookmarksfolder/move-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
            }]);
        };
        moveFolderFromTrash = function(folderId,parentFolderId) {
            return SessionService.invoke('/bookmarksfolder/move-folder-from-trash',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
            }]);
        };
        moveFolderToTrash = function(folderId) {
            return SessionService.invoke('/bookmarksfolder/move-folder-to-trash',[{
                folderId:folderId
            }]);
        };
        restoreFolderFromTrash = function(folderId) {
            return SessionService.invoke('/bookmarksfolder/restore-folder-from-trash',[{
                folderId:folderId
            }]);
        };
        subscribeFolder = function(groupId,folderId) {
            return SessionService.invoke('/bookmarksfolder/subscribe-folder',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        unsubscribeFolder = function(groupId,folderId) {
            return SessionService.invoke('/bookmarksfolder/unsubscribe-folder',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        updateFolder = function(folderId,parentFolderId,name,description,mergeWithParentFolder,serviceContext) {
            return SessionService.invoke('/bookmarksfolder/update-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,mergeWithParentFolder:mergeWithParentFolder
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ClassnameService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        fetchClassName = function(value) {
            return SessionService.invoke('/classname/fetch-class-name',[{
                value:value
            }]);
        };
        fetchClassNameId = function(clazz) {
            return SessionService.invoke('/classname/fetch-class-name-id',[{
                clazz:clazz
            }]);
        };
        fetchClassNameId = function(value) {
            return SessionService.invoke('/classname/fetch-class-name-id',[{
                value:value
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('CompanyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        deleteLogo = function(companyId) {
            return SessionService.invoke('/company/delete-logo',[{
                companyId:companyId
            }]);
        };
        getCompanyById = function(companyId) {
            return SessionService.invoke('/company/get-company-by-id',[{
                companyId:companyId
            }]);
        };
        getCompanyByLogoId = function(logoId) {
            return SessionService.invoke('/company/get-company-by-logo-id',[{
                logoId:logoId
            }]);
        };
        getCompanyByMx = function(mx) {
            return SessionService.invoke('/company/get-company-by-mx',[{
                mx:mx
            }]);
        };
        getCompanyByVirtualHost = function(virtualHost) {
            return SessionService.invoke('/company/get-company-by-virtual-host',[{
                virtualHost:virtualHost
            }]);
        };
        getCompanyByWebId = function(webId) {
            return SessionService.invoke('/company/get-company-by-web-id',[{
                webId:webId
            }]);
        };
        updateCompany = function(companyId,virtualHost,mx,homeURL,name,legalName,legalId,legalType,sicCode,tickerSymbol,industry,type,size) {
            return SessionService.invoke('/company/update-company',[{
                companyId:companyId
                ,virtualHost:virtualHost
                ,mx:mx
                ,homeURL:homeURL
                ,name:name
                ,legalName:legalName
                ,legalId:legalId
                ,legalType:legalType
                ,sicCode:sicCode
                ,tickerSymbol:tickerSymbol
                ,industry:industry
                ,type:type
                ,size:size
            }]);
        };
        updateCompany = function(companyId,virtualHost,mx,maxUsers,active) {
            return SessionService.invoke('/company/update-company',[{
                companyId:companyId
                ,virtualHost:virtualHost
                ,mx:mx
                ,maxUsers:maxUsers
                ,active:active
            }]);
        };
        updateDisplay = function(companyId,languageId,timeZoneId) {
            return SessionService.invoke('/company/update-display',[{
                companyId:companyId
                ,languageId:languageId
                ,timeZoneId:timeZoneId
            }]);
        };
        updateLogo = function(companyId,bytes) {
            return SessionService.invoke('/company/update-logo',[{
                companyId:companyId
                ,bytes:bytes
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ContactService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getContact = function(contactId) {
            return SessionService.invoke('/contact/get-contact',[{
                contactId:contactId
            }]);
        };
        getContacts = function(classNameId,classPK,start,end,orderByComparator) {
            return SessionService.invoke('/contact/get-contacts',[{
                classNameId:classNameId
                ,classPK:classPK
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        getContactsCount = function(classNameId,classPK) {
            return SessionService.invoke('/contact/get-contacts-count',[{
                classNameId:classNameId
                ,classPK:classPK
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('CountryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addCountry = function(name,a2,a3,number,idd,active) {
            return SessionService.invoke('/country/add-country',[{
                name:name
                ,a2:a2
                ,a3:a3
                ,number:number
                ,idd:idd
                ,active:active
            }]);
        };
        fetchCountry = function(countryId) {
            return SessionService.invoke('/country/fetch-country',[{
                countryId:countryId
            }]);
        };
        fetchCountryByA2 = function(a2) {
            return SessionService.invoke('/country/fetch-country-by-a2',[{
                a2:a2
            }]);
        };
        fetchCountryByA3 = function(a3) {
            return SessionService.invoke('/country/fetch-country-by-a3',[{
                a3:a3
            }]);
        };
        getCountries = function() {
            return SessionService.invoke('/country/get-countries',[{
                
            }]);
        };
        getCountries = function(active) {
            return SessionService.invoke('/country/get-countries',[{
                active:active
            }]);
        };
        getCountry = function(countryId) {
            return SessionService.invoke('/country/get-country',[{
                countryId:countryId
            }]);
        };
        getCountryByA2 = function(a2) {
            return SessionService.invoke('/country/get-country-by-a2',[{
                a2:a2
            }]);
        };
        getCountryByA3 = function(a3) {
            return SessionService.invoke('/country/get-country-by-a3',[{
                a3:a3
            }]);
        };
        getCountryByName = function(name) {
            return SessionService.invoke('/country/get-country-by-name',[{
                name:name
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdlrecordService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addRecord = function(groupId,recordSetId,displayIndex,fields,serviceContext) {
            return SessionService.invoke('/ddlrecord/add-record',[{
                groupId:groupId
                ,recordSetId:recordSetId
                ,displayIndex:displayIndex
                ,fields:fields
                ,serviceContext:serviceContext
            }]);
        };
        addRecord = function(groupId,recordSetId,displayIndex,fieldsMap,serviceContext) {
            return SessionService.invoke('/ddlrecord/add-record',[{
                groupId:groupId
                ,recordSetId:recordSetId
                ,displayIndex:displayIndex
                ,fieldsMap:fieldsMap
                ,serviceContext:serviceContext
            }]);
        };
        deleteRecord = function(recordId) {
            return SessionService.invoke('/ddlrecord/delete-record',[{
                recordId:recordId
            }]);
        };
        deleteRecordLocale = function(recordId,locale,serviceContext) {
            return SessionService.invoke('/ddlrecord/delete-record-locale',[{
                recordId:recordId
                ,locale:locale
                ,serviceContext:serviceContext
            }]);
        };
        getRecord = function(recordId) {
            return SessionService.invoke('/ddlrecord/get-record',[{
                recordId:recordId
            }]);
        };
        revertRecordVersion = function(recordId,version,serviceContext) {
            return SessionService.invoke('/ddlrecord/revert-record-version',[{
                recordId:recordId
                ,version:version
                ,serviceContext:serviceContext
            }]);
        };
        updateRecord = function(recordId,displayIndex,fieldsMap,mergeFields,serviceContext) {
            return SessionService.invoke('/ddlrecord/update-record',[{
                recordId:recordId
                ,displayIndex:displayIndex
                ,fieldsMap:fieldsMap
                ,mergeFields:mergeFields
                ,serviceContext:serviceContext
            }]);
        };
        updateRecord = function(recordId,majorVersion,displayIndex,fields,mergeFields,serviceContext) {
            return SessionService.invoke('/ddlrecord/update-record',[{
                recordId:recordId
                ,majorVersion:majorVersion
                ,displayIndex:displayIndex
                ,fields:fields
                ,mergeFields:mergeFields
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdlrecordsetService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addRecordSet = function(groupId,ddmStructureId,recordSetKey,nameMap,descriptionMap,minDisplayRows,scope,serviceContext) {
            return SessionService.invoke('/ddlrecordset/add-record-set',[{
                groupId:groupId
                ,ddmStructureId:ddmStructureId
                ,recordSetKey:recordSetKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,minDisplayRows:minDisplayRows
                ,scope:scope
                ,serviceContext:serviceContext
            }]);
        };
        deleteRecordSet = function(recordSetId) {
            return SessionService.invoke('/ddlrecordset/delete-record-set',[{
                recordSetId:recordSetId
            }]);
        };
        getRecordSet = function(recordSetId) {
            return SessionService.invoke('/ddlrecordset/get-record-set',[{
                recordSetId:recordSetId
            }]);
        };
        search = function(companyId,groupId,keywords,scope,start,end,orderByComparator) {
            return SessionService.invoke('/ddlrecordset/search',[{
                companyId:companyId
                ,groupId:groupId
                ,keywords:keywords
                ,scope:scope
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        search = function(companyId,groupId,name,description,scope,andOperator,start,end,orderByComparator) {
            return SessionService.invoke('/ddlrecordset/search',[{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,description:description
                ,scope:scope
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        searchCount = function(companyId,groupId,keywords,scope) {
            return SessionService.invoke('/ddlrecordset/search-count',[{
                companyId:companyId
                ,groupId:groupId
                ,keywords:keywords
                ,scope:scope
            }]);
        };
        searchCount = function(companyId,groupId,name,description,scope,andOperator) {
            return SessionService.invoke('/ddlrecordset/search-count',[{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,description:description
                ,scope:scope
                ,andOperator:andOperator
            }]);
        };
        updateMinDisplayRows = function(recordSetId,minDisplayRows,serviceContext) {
            return SessionService.invoke('/ddlrecordset/update-min-display-rows',[{
                recordSetId:recordSetId
                ,minDisplayRows:minDisplayRows
                ,serviceContext:serviceContext
            }]);
        };
        updateRecordSet = function(recordSetId,ddmStructureId,nameMap,descriptionMap,minDisplayRows,serviceContext) {
            return SessionService.invoke('/ddlrecordset/update-record-set',[{
                recordSetId:recordSetId
                ,ddmStructureId:ddmStructureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,minDisplayRows:minDisplayRows
                ,serviceContext:serviceContext
            }]);
        };
        updateRecordSet = function(groupId,ddmStructureId,recordSetKey,nameMap,descriptionMap,minDisplayRows,serviceContext) {
            return SessionService.invoke('/ddlrecordset/update-record-set',[{
                groupId:groupId
                ,ddmStructureId:ddmStructureId
                ,recordSetKey:recordSetKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,minDisplayRows:minDisplayRows
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdmstructureService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addStructure = function(groupId,parentStructureId,classNameId,structureKey,nameMap,descriptionMap,xsd,storageType,type,serviceContext) {
            return SessionService.invoke('/ddmstructure/add-structure',[{
                groupId:groupId
                ,parentStructureId:parentStructureId
                ,classNameId:classNameId
                ,structureKey:structureKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,storageType:storageType
                ,type:type
                ,serviceContext:serviceContext
            }]);
        };
        addStructure = function(userId,groupId,parentStructureKey,classNameId,structureKey,nameMap,descriptionMap,xsd,storageType,type,serviceContext) {
            return SessionService.invoke('/ddmstructure/add-structure',[{
                userId:userId
                ,groupId:groupId
                ,parentStructureKey:parentStructureKey
                ,classNameId:classNameId
                ,structureKey:structureKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,storageType:storageType
                ,type:type
                ,serviceContext:serviceContext
            }]);
        };
        addStructure = function(userId,groupId,classNameId,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke('/ddmstructure/add-structure',[{
                userId:userId
                ,groupId:groupId
                ,classNameId:classNameId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        copyStructure = function(structureId,serviceContext) {
            return SessionService.invoke('/ddmstructure/copy-structure',[{
                structureId:structureId
                ,serviceContext:serviceContext
            }]);
        };
        copyStructure = function(structureId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke('/ddmstructure/copy-structure',[{
                structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,serviceContext:serviceContext
            }]);
        };
        deleteStructure = function(structureId) {
            return SessionService.invoke('/ddmstructure/delete-structure',[{
                structureId:structureId
            }]);
        };
        fetchStructure = function(groupId,classNameId,structureKey) {
            return SessionService.invoke('/ddmstructure/fetch-structure',[{
                groupId:groupId
                ,classNameId:classNameId
                ,structureKey:structureKey
            }]);
        };
        getStructure = function(structureId) {
            return SessionService.invoke('/ddmstructure/get-structure',[{
                structureId:structureId
            }]);
        };
        getStructure = function(groupId,classNameId,structureKey) {
            return SessionService.invoke('/ddmstructure/get-structure',[{
                groupId:groupId
                ,classNameId:classNameId
                ,structureKey:structureKey
            }]);
        };
        getStructure = function(groupId,classNameId,structureKey,includeGlobalStructures) {
            return SessionService.invoke('/ddmstructure/get-structure',[{
                groupId:groupId
                ,classNameId:classNameId
                ,structureKey:structureKey
                ,includeGlobalStructures:includeGlobalStructures
            }]);
        };
        getStructures = function(groupId) {
            return SessionService.invoke('/ddmstructure/get-structures',[{
                groupId:groupId
            }]);
        };
        getStructures = function(groupIds) {
            return SessionService.invoke('/ddmstructure/get-structures',[{
                groupIds:groupIds
            }]);
        };
        getStructures = function(groupIds,classNameId) {
            return SessionService.invoke('/ddmstructure/get-structures',[{
                groupIds:groupIds
                ,classNameId:classNameId
            }]);
        };
        getStructures = function(groupIds,classNameId,start,end) {
            return SessionService.invoke('/ddmstructure/get-structures',[{
                groupIds:groupIds
                ,classNameId:classNameId
                ,start:start
                ,end:end
            }]);
        };
        search = function(companyId,groupIds,classNameIds,name,description,storageType,type,andOperator,start,end,orderByComparator) {
            return SessionService.invoke('/ddmstructure/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,name:name
                ,description:description
                ,storageType:storageType
                ,type:type
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        search = function(companyId,groupIds,classNameIds,keywords,start,end,orderByComparator) {
            return SessionService.invoke('/ddmstructure/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,keywords:keywords
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        searchCount = function(companyId,groupIds,classNameIds,keywords) {
            return SessionService.invoke('/ddmstructure/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,keywords:keywords
            }]);
        };
        searchCount = function(companyId,groupIds,classNameIds,name,description,storageType,type,andOperator) {
            return SessionService.invoke('/ddmstructure/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,name:name
                ,description:description
                ,storageType:storageType
                ,type:type
                ,andOperator:andOperator
            }]);
        };
        updateStructure = function(structureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke('/ddmstructure/update-structure',[{
                structureId:structureId
                ,parentStructureId:parentStructureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        updateStructure = function(groupId,parentStructureId,classNameId,structureKey,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke('/ddmstructure/update-structure',[{
                groupId:groupId
                ,parentStructureId:parentStructureId
                ,classNameId:classNameId
                ,structureKey:structureKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdmtemplateService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addTemplate = function(groupId,classNameId,classPK,nameMap,descriptionMap,type,mode,language,script,serviceContext) {
            return SessionService.invoke('/ddmtemplate/add-template',[{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,mode:mode
                ,language:language
                ,script:script
                ,serviceContext:serviceContext
            }]);
        };
        addTemplate = function(groupId,classNameId,classPK,templateKey,nameMap,descriptionMap,type,mode,language,script,cacheable,smallImage,smallImageURL,smallImageFile,serviceContext) {
            return SessionService.invoke('/ddmtemplate/add-template',[{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,templateKey:templateKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,mode:mode
                ,language:language
                ,script:script
                ,cacheable:cacheable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallImageFile:smallImageFile
                ,serviceContext:serviceContext
            }]);
        };
        copyTemplate = function(templateId,serviceContext) {
            return SessionService.invoke('/ddmtemplate/copy-template',[{
                templateId:templateId
                ,serviceContext:serviceContext
            }]);
        };
        copyTemplate = function(templateId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke('/ddmtemplate/copy-template',[{
                templateId:templateId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,serviceContext:serviceContext
            }]);
        };
        copyTemplates = function(classNameId,classPK,newClassPK,type,serviceContext) {
            return SessionService.invoke('/ddmtemplate/copy-templates',[{
                classNameId:classNameId
                ,classPK:classPK
                ,newClassPK:newClassPK
                ,type:type
                ,serviceContext:serviceContext
            }]);
        };
        deleteTemplate = function(templateId) {
            return SessionService.invoke('/ddmtemplate/delete-template',[{
                templateId:templateId
            }]);
        };
        fetchTemplate = function(groupId,classNameId,templateKey) {
            return SessionService.invoke('/ddmtemplate/fetch-template',[{
                groupId:groupId
                ,classNameId:classNameId
                ,templateKey:templateKey
            }]);
        };
        getTemplate = function(templateId) {
            return SessionService.invoke('/ddmtemplate/get-template',[{
                templateId:templateId
            }]);
        };
        getTemplate = function(groupId,classNameId,templateKey) {
            return SessionService.invoke('/ddmtemplate/get-template',[{
                groupId:groupId
                ,classNameId:classNameId
                ,templateKey:templateKey
            }]);
        };
        getTemplate = function(groupId,classNameId,templateKey,includeGlobalTemplates) {
            return SessionService.invoke('/ddmtemplate/get-template',[{
                groupId:groupId
                ,classNameId:classNameId
                ,templateKey:templateKey
                ,includeGlobalTemplates:includeGlobalTemplates
            }]);
        };
        getTemplates = function(groupId,classNameId) {
            return SessionService.invoke('/ddmtemplate/get-templates',[{
                groupId:groupId
                ,classNameId:classNameId
            }]);
        };
        getTemplates = function(groupId,classNameId,classPK) {
            return SessionService.invoke('/ddmtemplate/get-templates',[{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
            }]);
        };
        getTemplates = function(groupId,classNameId,classPK,type) {
            return SessionService.invoke('/ddmtemplate/get-templates',[{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,type:type
            }]);
        };
        getTemplates = function(groupId,classNameId,classPK,type,mode) {
            return SessionService.invoke('/ddmtemplate/get-templates',[{
                groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,type:type
                ,mode:mode
            }]);
        };
        getTemplatesByClassPk = function(groupId,classPK) {
            return SessionService.invoke('/ddmtemplate/get-templates-by-class-pk',[{
                groupId:groupId
                ,classPK:classPK
            }]);
        };
        getTemplatesByStructureClassNameId = function(groupId,structureClassNameId,start,end,orderByComparator) {
            return SessionService.invoke('/ddmtemplate/get-templates-by-structure-class-name-id',[{
                groupId:groupId
                ,structureClassNameId:structureClassNameId
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        getTemplatesByStructureClassNameIdCount = function(groupId,structureClassNameId) {
            return SessionService.invoke('/ddmtemplate/get-templates-by-structure-class-name-id-count',[{
                groupId:groupId
                ,structureClassNameId:structureClassNameId
            }]);
        };
        search = function(companyId,groupId,classNameId,classPK,keywords,type,mode,start,end,orderByComparator) {
            return SessionService.invoke('/ddmtemplate/search',[{
                companyId:companyId
                ,groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,keywords:keywords
                ,type:type
                ,mode:mode
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        search = function(companyId,groupIds,classNameIds,classPKs,keywords,type,mode,start,end,orderByComparator) {
            return SessionService.invoke('/ddmtemplate/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,classPKs:classPKs
                ,keywords:keywords
                ,type:type
                ,mode:mode
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        search = function(companyId,groupId,classNameId,classPK,name,description,type,mode,language,andOperator,start,end,orderByComparator) {
            return SessionService.invoke('/ddmtemplate/search',[{
                companyId:companyId
                ,groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,name:name
                ,description:description
                ,type:type
                ,mode:mode
                ,language:language
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        search = function(companyId,groupIds,classNameIds,classPKs,name,description,type,mode,language,andOperator,start,end,orderByComparator) {
            return SessionService.invoke('/ddmtemplate/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,classPKs:classPKs
                ,name:name
                ,description:description
                ,type:type
                ,mode:mode
                ,language:language
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        searchCount = function(companyId,groupId,classNameId,classPK,name,description,type,mode,language,andOperator) {
            return SessionService.invoke('/ddmtemplate/search-count',[{
                companyId:companyId
                ,groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,name:name
                ,description:description
                ,type:type
                ,mode:mode
                ,language:language
                ,andOperator:andOperator
            }]);
        };
        searchCount = function(companyId,groupIds,classNameIds,classPKs,name,description,type,mode,language,andOperator) {
            return SessionService.invoke('/ddmtemplate/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,classPKs:classPKs
                ,name:name
                ,description:description
                ,type:type
                ,mode:mode
                ,language:language
                ,andOperator:andOperator
            }]);
        };
        searchCount = function(companyId,groupId,classNameId,classPK,keywords,type,mode) {
            return SessionService.invoke('/ddmtemplate/search-count',[{
                companyId:companyId
                ,groupId:groupId
                ,classNameId:classNameId
                ,classPK:classPK
                ,keywords:keywords
                ,type:type
                ,mode:mode
            }]);
        };
        searchCount = function(companyId,groupIds,classNameIds,classPKs,keywords,type,mode) {
            return SessionService.invoke('/ddmtemplate/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,classNameIds:classNameIds
                ,classPKs:classPKs
                ,keywords:keywords
                ,type:type
                ,mode:mode
            }]);
        };
        updateTemplate = function(templateId,classPK,nameMap,descriptionMap,type,mode,language,script,cacheable,smallImage,smallImageURL,smallImageFile,serviceContext) {
            return SessionService.invoke('/ddmtemplate/update-template',[{
                templateId:templateId
                ,classPK:classPK
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,mode:mode
                ,language:language
                ,script:script
                ,cacheable:cacheable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallImageFile:smallImageFile
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlappService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFileEntry = function(repositoryId,folderId,sourceFileName,mimeType,title,description,changeLog,bytes,serviceContext) {
            return SessionService.invoke('/dlapp/add-file-entry',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,bytes:bytes
                ,serviceContext:serviceContext
            }]);
        };
        addFileEntry = function(repositoryId,folderId,sourceFileName,mimeType,title,description,changeLog,file,serviceContext) {
            return SessionService.invoke('/dlapp/add-file-entry',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,file:file
                ,serviceContext:serviceContext
            }]);
        };
        addFileShortcut = function(repositoryId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke('/dlapp/add-file-shortcut',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,toFileEntryId:toFileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        addFolder = function(repositoryId,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke('/dlapp/add-folder',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        addTempFileEntry = function(groupId,folderId,fileName,tempFolderName,file,mimeType) {
            return SessionService.invoke('/dlapp/add-temp-file-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,fileName:fileName
                ,tempFolderName:tempFolderName
                ,file:file
                ,mimeType:mimeType
            }]);
        };
        cancelCheckOut = function(fileEntryId) {
            return SessionService.invoke('/dlapp/cancel-check-out',[{
                fileEntryId:fileEntryId
            }]);
        };
        checkInFileEntry = function(fileEntryId,lockUuid) {
            return SessionService.invoke('/dlapp/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        checkInFileEntry = function(fileEntryId,lockUuid,serviceContext) {
            return SessionService.invoke('/dlapp/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
                ,serviceContext:serviceContext
            }]);
        };
        checkInFileEntry = function(fileEntryId,majorVersion,changeLog,serviceContext) {
            return SessionService.invoke('/dlapp/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,majorVersion:majorVersion
                ,changeLog:changeLog
                ,serviceContext:serviceContext
            }]);
        };
        checkOutFileEntry = function(fileEntryId,serviceContext) {
            return SessionService.invoke('/dlapp/check-out-file-entry',[{
                fileEntryId:fileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        checkOutFileEntry = function(fileEntryId,owner,expirationTime,serviceContext) {
            return SessionService.invoke('/dlapp/check-out-file-entry',[{
                fileEntryId:fileEntryId
                ,owner:owner
                ,expirationTime:expirationTime
                ,serviceContext:serviceContext
            }]);
        };
        copyFolder = function(repositoryId,sourceFolderId,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke('/dlapp/copy-folder',[{
                repositoryId:repositoryId
                ,sourceFolderId:sourceFolderId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteFileEntry = function(fileEntryId) {
            return SessionService.invoke('/dlapp/delete-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        deleteFileEntryByTitle = function(repositoryId,folderId,title) {
            return SessionService.invoke('/dlapp/delete-file-entry-by-title',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,title:title
            }]);
        };
        deleteFileShortcut = function(fileShortcutId) {
            return SessionService.invoke('/dlapp/delete-file-shortcut',[{
                fileShortcutId:fileShortcutId
            }]);
        };
        deleteFileVersion = function(fileEntryId,version) {
            return SessionService.invoke('/dlapp/delete-file-version',[{
                fileEntryId:fileEntryId
                ,version:version
            }]);
        };
        deleteFolder = function(folderId) {
            return SessionService.invoke('/dlapp/delete-folder',[{
                folderId:folderId
            }]);
        };
        deleteFolder = function(repositoryId,parentFolderId,name) {
            return SessionService.invoke('/dlapp/delete-folder',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,name:name
            }]);
        };
        deleteTempFileEntry = function(groupId,folderId,fileName,tempFolderName) {
            return SessionService.invoke('/dlapp/delete-temp-file-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,fileName:fileName
                ,tempFolderName:tempFolderName
            }]);
        };
        getFileEntries = function(repositoryId,folderId) {
            return SessionService.invoke('/dlapp/get-file-entries',[{
                repositoryId:repositoryId
                ,folderId:folderId
            }]);
        };
        getFileEntries = function(repositoryId,folderId,fileEntryTypeId) {
            return SessionService.invoke('/dlapp/get-file-entries',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
            }]);
        };
        getFileEntries = function(repositoryId,folderId,mimeTypes) {
            return SessionService.invoke('/dlapp/get-file-entries',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
            }]);
        };
        getFileEntries = function(repositoryId,folderId,start,end) {
            return SessionService.invoke('/dlapp/get-file-entries',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,start:start
                ,end:end
            }]);
        };
        getFileEntries = function(repositoryId,folderId,fileEntryTypeId,start,end) {
            return SessionService.invoke('/dlapp/get-file-entries',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
                ,start:start
                ,end:end
            }]);
        };
        getFileEntries = function(repositoryId,folderId,start,end,obc) {
            return SessionService.invoke('/dlapp/get-file-entries',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFileEntries = function(repositoryId,folderId,fileEntryTypeId,start,end,obc) {
            return SessionService.invoke('/dlapp/get-file-entries',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,start,end) {
            return SessionService.invoke('/dlapp/get-file-entries-and-file-shortcuts',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status) {
            return SessionService.invoke('/dlapp/get-file-entries-and-file-shortcuts-count',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
            }]);
        };
        getFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status,mimeTypes) {
            return SessionService.invoke('/dlapp/get-file-entries-and-file-shortcuts-count',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
            }]);
        };
        getFileEntriesCount = function(repositoryId,folderId) {
            return SessionService.invoke('/dlapp/get-file-entries-count',[{
                repositoryId:repositoryId
                ,folderId:folderId
            }]);
        };
        getFileEntriesCount = function(repositoryId,folderId,fileEntryTypeId) {
            return SessionService.invoke('/dlapp/get-file-entries-count',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
            }]);
        };
        getFileEntry = function(fileEntryId) {
            return SessionService.invoke('/dlapp/get-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        getFileEntry = function(groupId,folderId,title) {
            return SessionService.invoke('/dlapp/get-file-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,title:title
            }]);
        };
        getFileEntryByUuidAndGroupId = function(uuid,groupId) {
            return SessionService.invoke('/dlapp/get-file-entry-by-uuid-and-group-id',[{
                uuid:uuid
                ,groupId:groupId
            }]);
        };
        getFileShortcut = function(fileShortcutId) {
            return SessionService.invoke('/dlapp/get-file-shortcut',[{
                fileShortcutId:fileShortcutId
            }]);
        };
        getFolder = function(folderId) {
            return SessionService.invoke('/dlapp/get-folder',[{
                folderId:folderId
            }]);
        };
        getFolder = function(repositoryId,parentFolderId,name) {
            return SessionService.invoke('/dlapp/get-folder',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,name:name
            }]);
        };
        getFolders = function(repositoryId,parentFolderId) {
            return SessionService.invoke('/dlapp/get-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
            }]);
        };
        getFolders = function(repositoryId,parentFolderId,includeMountFolders) {
            return SessionService.invoke('/dlapp/get-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,includeMountFolders:includeMountFolders
            }]);
        };
        getFolders = function(repositoryId,parentFolderId,start,end) {
            return SessionService.invoke('/dlapp/get-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
            }]);
        };
        getFolders = function(repositoryId,parentFolderId,includeMountFolders,start,end) {
            return SessionService.invoke('/dlapp/get-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
            }]);
        };
        getFolders = function(repositoryId,parentFolderId,start,end,obc) {
            return SessionService.invoke('/dlapp/get-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFolders = function(repositoryId,parentFolderId,includeMountFolders,start,end,obc) {
            return SessionService.invoke('/dlapp/get-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFolders = function(repositoryId,parentFolderId,status,includeMountFolders,start,end,obc) {
            return SessionService.invoke('/dlapp/get-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,status:status
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,includeMountFolders,start,end) {
            return SessionService.invoke('/dlapp/get-folders-and-file-entries-and-file-shortcuts',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,includeMountFolders,start,end,obc) {
            return SessionService.invoke('/dlapp/get-folders-and-file-entries-and-file-shortcuts',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,mimeTypes,includeMountFolders,start,end,obc) {
            return SessionService.invoke('/dlapp/get-folders-and-file-entries-and-file-shortcuts',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status,includeMountFolders) {
            return SessionService.invoke('/dlapp/get-folders-and-file-entries-and-file-shortcuts-count',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status,mimeTypes,includeMountFolders) {
            return SessionService.invoke('/dlapp/get-folders-and-file-entries-and-file-shortcuts-count',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
                ,includeMountFolders:includeMountFolders
            }]);
        };
        getFoldersCount = function(repositoryId,parentFolderId) {
            return SessionService.invoke('/dlapp/get-folders-count',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
            }]);
        };
        getFoldersCount = function(repositoryId,parentFolderId,includeMountFolders) {
            return SessionService.invoke('/dlapp/get-folders-count',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,includeMountFolders:includeMountFolders
            }]);
        };
        getFoldersCount = function(repositoryId,parentFolderId,status,includeMountFolders) {
            return SessionService.invoke('/dlapp/get-folders-count',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,status:status
                ,includeMountFolders:includeMountFolders
            }]);
        };
        getFoldersFileEntriesCount = function(repositoryId,folderIds,status) {
            return SessionService.invoke('/dlapp/get-folders-file-entries-count',[{
                repositoryId:repositoryId
                ,folderIds:folderIds
                ,status:status
            }]);
        };
        getGroupFileEntries = function(groupId,userId,start,end) {
            return SessionService.invoke('/dlapp/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getGroupFileEntries = function(groupId,userId,rootFolderId,start,end) {
            return SessionService.invoke('/dlapp/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
            }]);
        };
        getGroupFileEntries = function(groupId,userId,start,end,obc) {
            return SessionService.invoke('/dlapp/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupFileEntries = function(groupId,userId,rootFolderId,start,end,obc) {
            return SessionService.invoke('/dlapp/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupFileEntries = function(groupId,userId,rootFolderId,mimeTypes,status,start,end,obc) {
            return SessionService.invoke('/dlapp/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupFileEntriesCount = function(groupId,userId) {
            return SessionService.invoke('/dlapp/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
            }]);
        };
        getGroupFileEntriesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke('/dlapp/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }]);
        };
        getGroupFileEntriesCount = function(groupId,userId,rootFolderId,mimeTypes,status) {
            return SessionService.invoke('/dlapp/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
            }]);
        };
        getMountFolders = function(repositoryId,parentFolderId) {
            return SessionService.invoke('/dlapp/get-mount-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
            }]);
        };
        getMountFolders = function(repositoryId,parentFolderId,start,end) {
            return SessionService.invoke('/dlapp/get-mount-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
            }]);
        };
        getMountFolders = function(repositoryId,parentFolderId,start,end,obc) {
            return SessionService.invoke('/dlapp/get-mount-folders',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getMountFoldersCount = function(repositoryId,parentFolderId) {
            return SessionService.invoke('/dlapp/get-mount-folders-count',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
            }]);
        };
        getSubfolderIds = function(repositoryId,folderId) {
            return SessionService.invoke('/dlapp/get-subfolder-ids',[{
                repositoryId:repositoryId
                ,folderId:folderId
            }]);
        };
        getSubfolderIds = function(repositoryId,folderId,recurse) {
            return SessionService.invoke('/dlapp/get-subfolder-ids',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,recurse:recurse
            }]);
        };
        getSubfolderIds = function(repositoryId,folderIds,folderId) {
            return SessionService.invoke('/dlapp/get-subfolder-ids',[{
                repositoryId:repositoryId
                ,folderIds:folderIds
                ,folderId:folderId
            }]);
        };
        getTempFileEntryNames = function(groupId,folderId,tempFolderName) {
            return SessionService.invoke('/dlapp/get-temp-file-entry-names',[{
                groupId:groupId
                ,folderId:folderId
                ,tempFolderName:tempFolderName
            }]);
        };
        lockFileEntry = function(fileEntryId) {
            return SessionService.invoke('/dlapp/lock-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        lockFileEntry = function(fileEntryId,owner,expirationTime) {
            return SessionService.invoke('/dlapp/lock-file-entry',[{
                fileEntryId:fileEntryId
                ,owner:owner
                ,expirationTime:expirationTime
            }]);
        };
        lockFolder = function(repositoryId,folderId) {
            return SessionService.invoke('/dlapp/lock-folder',[{
                repositoryId:repositoryId
                ,folderId:folderId
            }]);
        };
        lockFolder = function(repositoryId,folderId,owner,inheritable,expirationTime) {
            return SessionService.invoke('/dlapp/lock-folder',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,owner:owner
                ,inheritable:inheritable
                ,expirationTime:expirationTime
            }]);
        };
        moveFileEntry = function(fileEntryId,newFolderId,serviceContext) {
            return SessionService.invoke('/dlapp/move-file-entry',[{
                fileEntryId:fileEntryId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveFileEntryFromTrash = function(fileEntryId,newFolderId,serviceContext) {
            return SessionService.invoke('/dlapp/move-file-entry-from-trash',[{
                fileEntryId:fileEntryId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveFileEntryToTrash = function(fileEntryId) {
            return SessionService.invoke('/dlapp/move-file-entry-to-trash',[{
                fileEntryId:fileEntryId
            }]);
        };
        moveFileShortcutFromTrash = function(fileShortcutId,newFolderId,serviceContext) {
            return SessionService.invoke('/dlapp/move-file-shortcut-from-trash',[{
                fileShortcutId:fileShortcutId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveFileShortcutToTrash = function(fileShortcutId) {
            return SessionService.invoke('/dlapp/move-file-shortcut-to-trash',[{
                fileShortcutId:fileShortcutId
            }]);
        };
        moveFolder = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke('/dlapp/move-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveFolderFromTrash = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke('/dlapp/move-folder-from-trash',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveFolderToTrash = function(folderId) {
            return SessionService.invoke('/dlapp/move-folder-to-trash',[{
                folderId:folderId
            }]);
        };
        refreshFileEntryLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke('/dlapp/refresh-file-entry-lock',[{
                lockUuid:lockUuid
                ,companyId:companyId
                ,expirationTime:expirationTime
            }]);
        };
        refreshFolderLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke('/dlapp/refresh-folder-lock',[{
                lockUuid:lockUuid
                ,companyId:companyId
                ,expirationTime:expirationTime
            }]);
        };
        restoreFileEntryFromTrash = function(fileEntryId) {
            return SessionService.invoke('/dlapp/restore-file-entry-from-trash',[{
                fileEntryId:fileEntryId
            }]);
        };
        restoreFileShortcutFromTrash = function(fileShortcutId) {
            return SessionService.invoke('/dlapp/restore-file-shortcut-from-trash',[{
                fileShortcutId:fileShortcutId
            }]);
        };
        restoreFolderFromTrash = function(folderId) {
            return SessionService.invoke('/dlapp/restore-folder-from-trash',[{
                folderId:folderId
            }]);
        };
        revertFileEntry = function(fileEntryId,version,serviceContext) {
            return SessionService.invoke('/dlapp/revert-file-entry',[{
                fileEntryId:fileEntryId
                ,version:version
                ,serviceContext:serviceContext
            }]);
        };
        search = function(repositoryId,searchContext) {
            return SessionService.invoke('/dlapp/search',[{
                repositoryId:repositoryId
                ,searchContext:searchContext
            }]);
        };
        search = function(repositoryId,searchContext,query) {
            return SessionService.invoke('/dlapp/search',[{
                repositoryId:repositoryId
                ,searchContext:searchContext
                ,query:query
            }]);
        };
        search = function(repositoryId,creatorUserId,status,start,end) {
            return SessionService.invoke('/dlapp/search',[{
                repositoryId:repositoryId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        search = function(repositoryId,creatorUserId,folderId,mimeTypes,status,start,end) {
            return SessionService.invoke('/dlapp/search',[{
                repositoryId:repositoryId
                ,creatorUserId:creatorUserId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        subscribeFileEntryType = function(groupId,fileEntryTypeId) {
            return SessionService.invoke('/dlapp/subscribe-file-entry-type',[{
                groupId:groupId
                ,fileEntryTypeId:fileEntryTypeId
            }]);
        };
        subscribeFolder = function(groupId,folderId) {
            return SessionService.invoke('/dlapp/subscribe-folder',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        unlockFileEntry = function(fileEntryId) {
            return SessionService.invoke('/dlapp/unlock-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        unlockFileEntry = function(fileEntryId,lockUuid) {
            return SessionService.invoke('/dlapp/unlock-file-entry',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        unlockFolder = function(repositoryId,folderId,lockUuid) {
            return SessionService.invoke('/dlapp/unlock-folder',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,lockUuid:lockUuid
            }]);
        };
        unlockFolder = function(repositoryId,parentFolderId,name,lockUuid) {
            return SessionService.invoke('/dlapp/unlock-folder',[{
                repositoryId:repositoryId
                ,parentFolderId:parentFolderId
                ,name:name
                ,lockUuid:lockUuid
            }]);
        };
        unsubscribeFileEntryType = function(groupId,fileEntryTypeId) {
            return SessionService.invoke('/dlapp/unsubscribe-file-entry-type',[{
                groupId:groupId
                ,fileEntryTypeId:fileEntryTypeId
            }]);
        };
        unsubscribeFolder = function(groupId,folderId) {
            return SessionService.invoke('/dlapp/unsubscribe-folder',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        updateFileEntry = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,bytes,serviceContext) {
            return SessionService.invoke('/dlapp/update-file-entry',[{
                fileEntryId:fileEntryId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,majorVersion:majorVersion
                ,bytes:bytes
                ,serviceContext:serviceContext
            }]);
        };
        updateFileEntry = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,file,serviceContext) {
            return SessionService.invoke('/dlapp/update-file-entry',[{
                fileEntryId:fileEntryId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,majorVersion:majorVersion
                ,file:file
                ,serviceContext:serviceContext
            }]);
        };
        updateFileEntryAndCheckIn = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,file,serviceContext) {
            return SessionService.invoke('/dlapp/update-file-entry-and-check-in',[{
                fileEntryId:fileEntryId
                ,sourceFileName:sourceFileName
                ,mimeType:mimeType
                ,title:title
                ,description:description
                ,changeLog:changeLog
                ,majorVersion:majorVersion
                ,file:file
                ,serviceContext:serviceContext
            }]);
        };
        updateFileShortcut = function(fileShortcutId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke('/dlapp/update-file-shortcut',[{
                fileShortcutId:fileShortcutId
                ,folderId:folderId
                ,toFileEntryId:toFileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        updateFolder = function(folderId,name,description,serviceContext) {
            return SessionService.invoke('/dlapp/update-folder',[{
                folderId:folderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        verifyFileEntryCheckOut = function(repositoryId,fileEntryId,lockUuid) {
            return SessionService.invoke('/dlapp/verify-file-entry-check-out',[{
                repositoryId:repositoryId
                ,fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        verifyFileEntryLock = function(repositoryId,fileEntryId,lockUuid) {
            return SessionService.invoke('/dlapp/verify-file-entry-lock',[{
                repositoryId:repositoryId
                ,fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        verifyInheritableLock = function(repositoryId,folderId,lockUuid) {
            return SessionService.invoke('/dlapp/verify-inheritable-lock',[{
                repositoryId:repositoryId
                ,folderId:folderId
                ,lockUuid:lockUuid
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        cancelCheckOut = function(fileEntryId) {
            return SessionService.invoke('/dlfileentry/cancel-check-out',[{
                fileEntryId:fileEntryId
            }]);
        };
        checkInFileEntry = function(fileEntryId,lockUuid) {
            return SessionService.invoke('/dlfileentry/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        checkInFileEntry = function(fileEntryId,lockUuid,serviceContext) {
            return SessionService.invoke('/dlfileentry/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
                ,serviceContext:serviceContext
            }]);
        };
        checkInFileEntry = function(fileEntryId,major,changeLog,serviceContext) {
            return SessionService.invoke('/dlfileentry/check-in-file-entry',[{
                fileEntryId:fileEntryId
                ,major:major
                ,changeLog:changeLog
                ,serviceContext:serviceContext
            }]);
        };
        checkOutFileEntry = function(fileEntryId) {
            return SessionService.invoke('/dlfileentry/check-out-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        checkOutFileEntry = function(fileEntryId,serviceContext) {
            return SessionService.invoke('/dlfileentry/check-out-file-entry',[{
                fileEntryId:fileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        checkOutFileEntry = function(fileEntryId,owner,expirationTime) {
            return SessionService.invoke('/dlfileentry/check-out-file-entry',[{
                fileEntryId:fileEntryId
                ,owner:owner
                ,expirationTime:expirationTime
            }]);
        };
        checkOutFileEntry = function(fileEntryId,owner,expirationTime,serviceContext) {
            return SessionService.invoke('/dlfileentry/check-out-file-entry',[{
                fileEntryId:fileEntryId
                ,owner:owner
                ,expirationTime:expirationTime
                ,serviceContext:serviceContext
            }]);
        };
        copyFileEntry = function(groupId,repositoryId,fileEntryId,destFolderId,serviceContext) {
            return SessionService.invoke('/dlfileentry/copy-file-entry',[{
                groupId:groupId
                ,repositoryId:repositoryId
                ,fileEntryId:fileEntryId
                ,destFolderId:destFolderId
                ,serviceContext:serviceContext
            }]);
        };
        deleteFileEntry = function(fileEntryId) {
            return SessionService.invoke('/dlfileentry/delete-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        deleteFileEntry = function(groupId,folderId,title) {
            return SessionService.invoke('/dlfileentry/delete-file-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,title:title
            }]);
        };
        deleteFileVersion = function(fileEntryId,version) {
            return SessionService.invoke('/dlfileentry/delete-file-version',[{
                fileEntryId:fileEntryId
                ,version:version
            }]);
        };
        fetchFileEntryByImageId = function(imageId) {
            return SessionService.invoke('/dlfileentry/fetch-file-entry-by-image-id',[{
                imageId:imageId
            }]);
        };
        getFileEntries = function(groupId,folderId,start,end,obc) {
            return SessionService.invoke('/dlfileentry/get-file-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFileEntries = function(groupId,folderId,fileEntryTypeId,start,end,obc) {
            return SessionService.invoke('/dlfileentry/get-file-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFileEntries = function(groupId,folderId,mimeTypes,start,end,obc) {
            return SessionService.invoke('/dlfileentry/get-file-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFileEntries = function(groupId,folderId,status,start,end,obc) {
            return SessionService.invoke('/dlfileentry/get-file-entries',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFileEntriesCount = function(groupId,folderId) {
            return SessionService.invoke('/dlfileentry/get-file-entries-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getFileEntriesCount = function(groupId,folderId,fileEntryTypeId) {
            return SessionService.invoke('/dlfileentry/get-file-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,fileEntryTypeId:fileEntryTypeId
            }]);
        };
        getFileEntriesCount = function(groupId,folderId,mimeTypes) {
            return SessionService.invoke('/dlfileentry/get-file-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
            }]);
        };
        getFileEntriesCount = function(groupId,folderId,status) {
            return SessionService.invoke('/dlfileentry/get-file-entries-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        getFileEntry = function(fileEntryId) {
            return SessionService.invoke('/dlfileentry/get-file-entry',[{
                fileEntryId:fileEntryId
            }]);
        };
        getFileEntry = function(groupId,folderId,title) {
            return SessionService.invoke('/dlfileentry/get-file-entry',[{
                groupId:groupId
                ,folderId:folderId
                ,title:title
            }]);
        };
        getFileEntryByUuidAndGroupId = function(uuid,groupId) {
            return SessionService.invoke('/dlfileentry/get-file-entry-by-uuid-and-group-id',[{
                uuid:uuid
                ,groupId:groupId
            }]);
        };
        getFileEntryLock = function(fileEntryId) {
            return SessionService.invoke('/dlfileentry/get-file-entry-lock',[{
                fileEntryId:fileEntryId
            }]);
        };
        getFoldersFileEntriesCount = function(groupId,folderIds,status) {
            return SessionService.invoke('/dlfileentry/get-folders-file-entries-count',[{
                groupId:groupId
                ,folderIds:folderIds
                ,status:status
            }]);
        };
        getGroupFileEntries = function(groupId,userId,rootFolderId,start,end,obc) {
            return SessionService.invoke('/dlfileentry/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupFileEntries = function(groupId,userId,rootFolderId,mimeTypes,status,start,end,obc) {
            return SessionService.invoke('/dlfileentry/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupFileEntries = function(groupId,userId,repositoryId,rootFolderId,mimeTypes,status,start,end,obc) {
            return SessionService.invoke('/dlfileentry/get-group-file-entries',[{
                groupId:groupId
                ,userId:userId
                ,repositoryId:repositoryId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getGroupFileEntriesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke('/dlfileentry/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }]);
        };
        getGroupFileEntriesCount = function(groupId,userId,rootFolderId,mimeTypes,status) {
            return SessionService.invoke('/dlfileentry/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
            }]);
        };
        getGroupFileEntriesCount = function(groupId,userId,repositoryId,rootFolderId,mimeTypes,status) {
            return SessionService.invoke('/dlfileentry/get-group-file-entries-count',[{
                groupId:groupId
                ,userId:userId
                ,repositoryId:repositoryId
                ,rootFolderId:rootFolderId
                ,mimeTypes:mimeTypes
                ,status:status
            }]);
        };
        hasFileEntryLock = function(fileEntryId) {
            return SessionService.invoke('/dlfileentry/has-file-entry-lock',[{
                fileEntryId:fileEntryId
            }]);
        };
        isFileEntryCheckedOut = function(fileEntryId) {
            return SessionService.invoke('/dlfileentry/is-file-entry-checked-out',[{
                fileEntryId:fileEntryId
            }]);
        };
        moveFileEntry = function(fileEntryId,newFolderId,serviceContext) {
            return SessionService.invoke('/dlfileentry/move-file-entry',[{
                fileEntryId:fileEntryId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        refreshFileEntryLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke('/dlfileentry/refresh-file-entry-lock',[{
                lockUuid:lockUuid
                ,companyId:companyId
                ,expirationTime:expirationTime
            }]);
        };
        revertFileEntry = function(fileEntryId,version,serviceContext) {
            return SessionService.invoke('/dlfileentry/revert-file-entry',[{
                fileEntryId:fileEntryId
                ,version:version
                ,serviceContext:serviceContext
            }]);
        };
        search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke('/dlfileentry/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        search = function(groupId,creatorUserId,folderId,mimeTypes,status,start,end) {
            return SessionService.invoke('/dlfileentry/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,folderId:folderId
                ,mimeTypes:mimeTypes
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        verifyFileEntryCheckOut = function(fileEntryId,lockUuid) {
            return SessionService.invoke('/dlfileentry/verify-file-entry-check-out',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        verifyFileEntryLock = function(fileEntryId,lockUuid) {
            return SessionService.invoke('/dlfileentry/verify-file-entry-lock',[{
                fileEntryId:fileEntryId
                ,lockUuid:lockUuid
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileentrytypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFileEntryType = function(groupId,name,description,ddmStructureIds,serviceContext) {
            return SessionService.invoke('/dlfileentrytype/add-file-entry-type',[{
                groupId:groupId
                ,name:name
                ,description:description
                ,ddmStructureIds:ddmStructureIds
                ,serviceContext:serviceContext
            }]);
        };
        addFileEntryType = function(groupId,fileEntryTypeKey,nameMap,descriptionMap,ddmStructureIds,serviceContext) {
            return SessionService.invoke('/dlfileentrytype/add-file-entry-type',[{
                groupId:groupId
                ,fileEntryTypeKey:fileEntryTypeKey
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,ddmStructureIds:ddmStructureIds
                ,serviceContext:serviceContext
            }]);
        };
        deleteFileEntryType = function(fileEntryTypeId) {
            return SessionService.invoke('/dlfileentrytype/delete-file-entry-type',[{
                fileEntryTypeId:fileEntryTypeId
            }]);
        };
        getFileEntryType = function(fileEntryTypeId) {
            return SessionService.invoke('/dlfileentrytype/get-file-entry-type',[{
                fileEntryTypeId:fileEntryTypeId
            }]);
        };
        getFileEntryTypes = function(groupIds) {
            return SessionService.invoke('/dlfileentrytype/get-file-entry-types',[{
                groupIds:groupIds
            }]);
        };
        getFileEntryTypes = function(groupIds,start,end) {
            return SessionService.invoke('/dlfileentrytype/get-file-entry-types',[{
                groupIds:groupIds
                ,start:start
                ,end:end
            }]);
        };
        getFileEntryTypesCount = function(groupIds) {
            return SessionService.invoke('/dlfileentrytype/get-file-entry-types-count',[{
                groupIds:groupIds
            }]);
        };
        getFolderFileEntryTypes = function(groupIds,folderId,inherited) {
            return SessionService.invoke('/dlfileentrytype/get-folder-file-entry-types',[{
                groupIds:groupIds
                ,folderId:folderId
                ,inherited:inherited
            }]);
        };
        search = function(companyId,groupIds,keywords,includeBasicFileEntryType,start,end,orderByComparator) {
            return SessionService.invoke('/dlfileentrytype/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,includeBasicFileEntryType:includeBasicFileEntryType
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        searchCount = function(companyId,groupIds,keywords,includeBasicFileEntryType) {
            return SessionService.invoke('/dlfileentrytype/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,includeBasicFileEntryType:includeBasicFileEntryType
            }]);
        };
        updateFileEntryType = function(fileEntryTypeId,name,description,ddmStructureIds,serviceContext) {
            return SessionService.invoke('/dlfileentrytype/update-file-entry-type',[{
                fileEntryTypeId:fileEntryTypeId
                ,name:name
                ,description:description
                ,ddmStructureIds:ddmStructureIds
                ,serviceContext:serviceContext
            }]);
        };
        updateFileEntryType = function(fileEntryTypeId,nameMap,descriptionMap,ddmStructureIds,serviceContext) {
            return SessionService.invoke('/dlfileentrytype/update-file-entry-type',[{
                fileEntryTypeId:fileEntryTypeId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,ddmStructureIds:ddmStructureIds
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileshortcutService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFileShortcut = function(groupId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke('/dlfileshortcut/add-file-shortcut',[{
                groupId:groupId
                ,folderId:folderId
                ,toFileEntryId:toFileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        deleteFileShortcut = function(fileShortcutId) {
            return SessionService.invoke('/dlfileshortcut/delete-file-shortcut',[{
                fileShortcutId:fileShortcutId
            }]);
        };
        getFileShortcut = function(fileShortcutId) {
            return SessionService.invoke('/dlfileshortcut/get-file-shortcut',[{
                fileShortcutId:fileShortcutId
            }]);
        };
        updateFileShortcut = function(fileShortcutId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke('/dlfileshortcut/update-file-shortcut',[{
                fileShortcutId:fileShortcutId
                ,folderId:folderId
                ,toFileEntryId:toFileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getFileVersion = function(fileVersionId) {
            return SessionService.invoke('/dlfileversion/get-file-version',[{
                fileVersionId:fileVersionId
            }]);
        };
        getFileVersions = function(fileEntryId,status) {
            return SessionService.invoke('/dlfileversion/get-file-versions',[{
                fileEntryId:fileEntryId
                ,status:status
            }]);
        };
        getFileVersionsCount = function(fileEntryId,status) {
            return SessionService.invoke('/dlfileversion/get-file-versions-count',[{
                fileEntryId:fileEntryId
                ,status:status
            }]);
        };
        getLatestFileVersion = function(fileEntryId) {
            return SessionService.invoke('/dlfileversion/get-latest-file-version',[{
                fileEntryId:fileEntryId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFolder = function(groupId,repositoryId,mountPoint,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke('/dlfolder/add-folder',[{
                groupId:groupId
                ,repositoryId:repositoryId
                ,mountPoint:mountPoint
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteFolder = function(folderId) {
            return SessionService.invoke('/dlfolder/delete-folder',[{
                folderId:folderId
            }]);
        };
        deleteFolder = function(folderId,includeTrashedEntries) {
            return SessionService.invoke('/dlfolder/delete-folder',[{
                folderId:folderId
                ,includeTrashedEntries:includeTrashedEntries
            }]);
        };
        deleteFolder = function(groupId,parentFolderId,name) {
            return SessionService.invoke('/dlfolder/delete-folder',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,name:name
            }]);
        };
        getFileEntriesAndFileShortcuts = function(groupId,folderId,status,start,end) {
            return SessionService.invoke('/dlfolder/get-file-entries-and-file-shortcuts',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getFileEntriesAndFileShortcutsCount = function(groupId,folderId,status) {
            return SessionService.invoke('/dlfolder/get-file-entries-and-file-shortcuts-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        getFileEntriesAndFileShortcutsCount = function(groupId,folderId,status,mimeTypes) {
            return SessionService.invoke('/dlfolder/get-file-entries-and-file-shortcuts-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
            }]);
        };
        getFolder = function(folderId) {
            return SessionService.invoke('/dlfolder/get-folder',[{
                folderId:folderId
            }]);
        };
        getFolder = function(groupId,parentFolderId,name) {
            return SessionService.invoke('/dlfolder/get-folder',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,name:name
            }]);
        };
        getFolderIds = function(groupId,folderId) {
            return SessionService.invoke('/dlfolder/get-folder-ids',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getFolders = function(groupId,parentFolderId,start,end,obc) {
            return SessionService.invoke('/dlfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFolders = function(groupId,parentFolderId,status,includeMountfolders,start,end,obc) {
            return SessionService.invoke('/dlfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
                ,includeMountfolders:includeMountfolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcuts = function(groupId,folderId,status,includeMountFolders,start,end,obc) {
            return SessionService.invoke('/dlfolder/get-folders-and-file-entries-and-file-shortcuts',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcuts = function(groupId,folderId,status,mimeTypes,includeMountFolders,start,end,obc) {
            return SessionService.invoke('/dlfolder/get-folders-and-file-entries-and-file-shortcuts',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
                ,includeMountFolders:includeMountFolders
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcutsCount = function(groupId,folderId,status,includeMountFolders) {
            return SessionService.invoke('/dlfolder/get-folders-and-file-entries-and-file-shortcuts-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,includeMountFolders:includeMountFolders
            }]);
        };
        getFoldersAndFileEntriesAndFileShortcutsCount = function(groupId,folderId,status,mimeTypes,includeMountFolders) {
            return SessionService.invoke('/dlfolder/get-folders-and-file-entries-and-file-shortcuts-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,mimeTypes:mimeTypes
                ,includeMountFolders:includeMountFolders
            }]);
        };
        getFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke('/dlfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        getFoldersCount = function(groupId,parentFolderId,status,includeMountfolders) {
            return SessionService.invoke('/dlfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
                ,includeMountfolders:includeMountfolders
            }]);
        };
        getMountFolders = function(groupId,parentFolderId,start,end,obc) {
            return SessionService.invoke('/dlfolder/get-mount-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getMountFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke('/dlfolder/get-mount-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        getSubfolderIds = function(folderIds,groupId,folderId) {
            return SessionService.invoke('/dlfolder/get-subfolder-ids',[{
                folderIds:folderIds
                ,groupId:groupId
                ,folderId:folderId
            }]);
        };
        getSubfolderIds = function(groupId,folderId,recurse) {
            return SessionService.invoke('/dlfolder/get-subfolder-ids',[{
                groupId:groupId
                ,folderId:folderId
                ,recurse:recurse
            }]);
        };
        hasFolderLock = function(folderId) {
            return SessionService.invoke('/dlfolder/has-folder-lock',[{
                folderId:folderId
            }]);
        };
        hasInheritableLock = function(folderId) {
            return SessionService.invoke('/dlfolder/has-inheritable-lock',[{
                folderId:folderId
            }]);
        };
        isFolderLocked = function(folderId) {
            return SessionService.invoke('/dlfolder/is-folder-locked',[{
                folderId:folderId
            }]);
        };
        lockFolder = function(folderId) {
            return SessionService.invoke('/dlfolder/lock-folder',[{
                folderId:folderId
            }]);
        };
        lockFolder = function(folderId,owner,inheritable,expirationTime) {
            return SessionService.invoke('/dlfolder/lock-folder',[{
                folderId:folderId
                ,owner:owner
                ,inheritable:inheritable
                ,expirationTime:expirationTime
            }]);
        };
        moveFolder = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke('/dlfolder/move-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }]);
        };
        refreshFolderLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke('/dlfolder/refresh-folder-lock',[{
                lockUuid:lockUuid
                ,companyId:companyId
                ,expirationTime:expirationTime
            }]);
        };
        unlockFolder = function(folderId,lockUuid) {
            return SessionService.invoke('/dlfolder/unlock-folder',[{
                folderId:folderId
                ,lockUuid:lockUuid
            }]);
        };
        unlockFolder = function(groupId,parentFolderId,name,lockUuid) {
            return SessionService.invoke('/dlfolder/unlock-folder',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,name:name
                ,lockUuid:lockUuid
            }]);
        };
        updateFolder = function(folderId,name,description,defaultFileEntryTypeId,fileEntryTypeIds,overrideFileEntryTypes,serviceContext) {
            return SessionService.invoke('/dlfolder/update-folder',[{
                folderId:folderId
                ,name:name
                ,description:description
                ,defaultFileEntryTypeId:defaultFileEntryTypeId
                ,fileEntryTypeIds:fileEntryTypeIds
                ,overrideFileEntryTypes:overrideFileEntryTypes
                ,serviceContext:serviceContext
            }]);
        };
        verifyInheritableLock = function(folderId,lockUuid) {
            return SessionService.invoke('/dlfolder/verify-inheritable-lock',[{
                folderId:folderId
                ,lockUuid:lockUuid
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('EmailaddressService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addEmailAddress = function(className,classPK,address,typeId,primary) {
            return SessionService.invoke('/emailaddress/add-email-address',[{
                className:className
                ,classPK:classPK
                ,address:address
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        addEmailAddress = function(className,classPK,address,typeId,primary,serviceContext) {
            return SessionService.invoke('/emailaddress/add-email-address',[{
                className:className
                ,classPK:classPK
                ,address:address
                ,typeId:typeId
                ,primary:primary
                ,serviceContext:serviceContext
            }]);
        };
        deleteEmailAddress = function(emailAddressId) {
            return SessionService.invoke('/emailaddress/delete-email-address',[{
                emailAddressId:emailAddressId
            }]);
        };
        getEmailAddress = function(emailAddressId) {
            return SessionService.invoke('/emailaddress/get-email-address',[{
                emailAddressId:emailAddressId
            }]);
        };
        getEmailAddresses = function(className,classPK) {
            return SessionService.invoke('/emailaddress/get-email-addresses',[{
                className:className
                ,classPK:classPK
            }]);
        };
        updateEmailAddress = function(emailAddressId,address,typeId,primary) {
            return SessionService.invoke('/emailaddress/update-email-address',[{
                emailAddressId:emailAddressId
                ,address:address
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ExpandocolumnService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addColumn = function(tableId,name,type) {
            return SessionService.invoke('/expandocolumn/add-column',[{
                tableId:tableId
                ,name:name
                ,type:type
            }]);
        };
        addColumn = function(tableId,name,type,defaultData) {
            return SessionService.invoke('/expandocolumn/add-column',[{
                tableId:tableId
                ,name:name
                ,type:type
                ,defaultData:defaultData
            }]);
        };
        deleteColumn = function(columnId) {
            return SessionService.invoke('/expandocolumn/delete-column',[{
                columnId:columnId
            }]);
        };
        updateColumn = function(columnId,name,type) {
            return SessionService.invoke('/expandocolumn/update-column',[{
                columnId:columnId
                ,name:name
                ,type:type
            }]);
        };
        updateColumn = function(columnId,name,type,defaultData) {
            return SessionService.invoke('/expandocolumn/update-column',[{
                columnId:columnId
                ,name:name
                ,type:type
                ,defaultData:defaultData
            }]);
        };
        updateTypeSettings = function(columnId,typeSettings) {
            return SessionService.invoke('/expandocolumn/update-type-settings',[{
                columnId:columnId
                ,typeSettings:typeSettings
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ExpandovalueService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addValue = function(companyId,className,tableName,columnName,classPK,data) {
            return SessionService.invoke('/expandovalue/add-value',[{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,columnName:columnName
                ,classPK:classPK
                ,data:data
            }]);
        };
        addValues = function(companyId,className,tableName,classPK,attributeValues) {
            return SessionService.invoke('/expandovalue/add-values',[{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,classPK:classPK
                ,attributeValues:attributeValues
            }]);
        };
        getData = function(companyId,className,tableName,columnName,classPK) {
            return SessionService.invoke('/expandovalue/get-data',[{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,columnName:columnName
                ,classPK:classPK
            }]);
        };
        getData = function(companyId,className,tableName,columnNames,classPK) {
            return SessionService.invoke('/expandovalue/get-data',[{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,columnNames:columnNames
                ,classPK:classPK
            }]);
        };
        getJsonData = function(companyId,className,tableName,columnName,classPK) {
            return SessionService.invoke('/expandovalue/get-json-data',[{
                companyId:companyId
                ,className:className
                ,tableName:tableName
                ,columnName:columnName
                ,classPK:classPK
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('FlagsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addEntry = function(className,classPK,reporterEmailAddress,reportedUserId,contentTitle,contentURL,reason,serviceContext) {
            return SessionService.invoke('/flagsentry/add-entry',[{
                className:className
                ,classPK:classPK
                ,reporterEmailAddress:reporterEmailAddress
                ,reportedUserId:reportedUserId
                ,contentTitle:contentTitle
                ,contentURL:contentURL
                ,reason:reason
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('GroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addGroup = function(parentGroupId,liveGroupId,name,description,type,manualMembership,membershipRestriction,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke('/group/add-group',[{
                parentGroupId:parentGroupId
                ,liveGroupId:liveGroupId
                ,name:name
                ,description:description
                ,type:type
                ,manualMembership:manualMembership
                ,membershipRestriction:membershipRestriction
                ,friendlyURL:friendlyURL
                ,site:site
                ,active:active
                ,serviceContext:serviceContext
            }]);
        };
        addGroup = function(name,description,type,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke('/group/add-group',[{
                name:name
                ,description:description
                ,type:type
                ,friendlyURL:friendlyURL
                ,site:site
                ,active:active
                ,serviceContext:serviceContext
            }]);
        };
        addGroup = function(parentGroupId,name,description,type,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke('/group/add-group',[{
                parentGroupId:parentGroupId
                ,name:name
                ,description:description
                ,type:type
                ,friendlyURL:friendlyURL
                ,site:site
                ,active:active
                ,serviceContext:serviceContext
            }]);
        };
        addRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke('/group/add-role-groups',[{
                roleId:roleId
                ,groupIds:groupIds
            }]);
        };
        checkRemoteStagingGroup = function(groupId) {
            return SessionService.invoke('/group/check-remote-staging-group',[{
                groupId:groupId
            }]);
        };
        deleteGroup = function(groupId) {
            return SessionService.invoke('/group/delete-group',[{
                groupId:groupId
            }]);
        };
        disableStaging = function(groupId) {
            return SessionService.invoke('/group/disable-staging',[{
                groupId:groupId
            }]);
        };
        enableStaging = function(groupId) {
            return SessionService.invoke('/group/enable-staging',[{
                groupId:groupId
            }]);
        };
        getCompanyGroup = function(companyId) {
            return SessionService.invoke('/group/get-company-group',[{
                companyId:companyId
            }]);
        };
        getGroup = function(groupId) {
            return SessionService.invoke('/group/get-group',[{
                groupId:groupId
            }]);
        };
        getGroup = function(companyId,name) {
            return SessionService.invoke('/group/get-group',[{
                companyId:companyId
                ,name:name
            }]);
        };
        getGroups = function(companyId,parentGroupId,site) {
            return SessionService.invoke('/group/get-groups',[{
                companyId:companyId
                ,parentGroupId:parentGroupId
                ,site:site
            }]);
        };
        getManageableSiteGroups = function(portlets,max) {
            return SessionService.invoke('/group/get-manageable-site-groups',[{
                portlets:portlets
                ,max:max
            }]);
        };
        getManageableSites = function(portlets,max) {
            return SessionService.invoke('/group/get-manageable-sites',[{
                portlets:portlets
                ,max:max
            }]);
        };
        getOrganizationsGroups = function(organizations) {
            return SessionService.invoke('/group/get-organizations-groups',[{
                organizations:organizations
            }]);
        };
        getUserGroup = function(companyId,userId) {
            return SessionService.invoke('/group/get-user-group',[{
                companyId:companyId
                ,userId:userId
            }]);
        };
        getUserGroupsGroups = function(userGroups) {
            return SessionService.invoke('/group/get-user-groups-groups',[{
                userGroups:userGroups
            }]);
        };
        getUserOrganizationsGroups = function(userId,start,end) {
            return SessionService.invoke('/group/get-user-organizations-groups',[{
                userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getUserPlaces = function(classNames,max) {
            return SessionService.invoke('/group/get-user-places',[{
                classNames:classNames
                ,max:max
            }]);
        };
        getUserPlaces = function(userId,classNames,max) {
            return SessionService.invoke('/group/get-user-places',[{
                userId:userId
                ,classNames:classNames
                ,max:max
            }]);
        };
        getUserPlaces = function(userId,classNames,includeControlPanel,max) {
            return SessionService.invoke('/group/get-user-places',[{
                userId:userId
                ,classNames:classNames
                ,includeControlPanel:includeControlPanel
                ,max:max
            }]);
        };
        getUserPlacesCount = function() {
            return SessionService.invoke('/group/get-user-places-count',[{
                
            }]);
        };
        getUserSites = function() {
            return SessionService.invoke('/group/get-user-sites',[{
                
            }]);
        };
        getUserSitesGroups = function() {
            return SessionService.invoke('/group/get-user-sites-groups',[{
                
            }]);
        };
        getUserSitesGroups = function(classNames,max) {
            return SessionService.invoke('/group/get-user-sites-groups',[{
                classNames:classNames
                ,max:max
            }]);
        };
        getUserSitesGroups = function(userId,classNames,max) {
            return SessionService.invoke('/group/get-user-sites-groups',[{
                userId:userId
                ,classNames:classNames
                ,max:max
            }]);
        };
        getUserSitesGroups = function(userId,classNames,includeControlPanel,max) {
            return SessionService.invoke('/group/get-user-sites-groups',[{
                userId:userId
                ,classNames:classNames
                ,includeControlPanel:includeControlPanel
                ,max:max
            }]);
        };
        getUserSitesGroupsCount = function() {
            return SessionService.invoke('/group/get-user-sites-groups-count',[{
                
            }]);
        };
        hasUserGroup = function(userId,groupId) {
            return SessionService.invoke('/group/has-user-group',[{
                userId:userId
                ,groupId:groupId
            }]);
        };
        search = function(companyId,name,description,params,start,end) {
            return SessionService.invoke('/group/search',[{
                companyId:companyId
                ,name:name
                ,description:description
                ,params:params
                ,start:start
                ,end:end
            }]);
        };
        search = function(companyId,classNameIds,keywords,params,start,end,obc) {
            return SessionService.invoke('/group/search',[{
                companyId:companyId
                ,classNameIds:classNameIds
                ,keywords:keywords
                ,params:params
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        search = function(companyId,classNameIds,name,description,params,andOperator,start,end,obc) {
            return SessionService.invoke('/group/search',[{
                companyId:companyId
                ,classNameIds:classNameIds
                ,name:name
                ,description:description
                ,params:params
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        searchCount = function(companyId,name,description,params) {
            return SessionService.invoke('/group/search-count',[{
                companyId:companyId
                ,name:name
                ,description:description
                ,params:params
            }]);
        };
        setRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke('/group/set-role-groups',[{
                roleId:roleId
                ,groupIds:groupIds
            }]);
        };
        unsetRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke('/group/unset-role-groups',[{
                roleId:roleId
                ,groupIds:groupIds
            }]);
        };
        updateFriendlyUrl = function(groupId,friendlyURL) {
            return SessionService.invoke('/group/update-friendly-url',[{
                groupId:groupId
                ,friendlyURL:friendlyURL
            }]);
        };
        updateGroup = function(groupId,parentGroupId,name,description,type,manualMembership,membershipRestriction,friendlyURL,active,serviceContext) {
            return SessionService.invoke('/group/update-group',[{
                groupId:groupId
                ,parentGroupId:parentGroupId
                ,name:name
                ,description:description
                ,type:type
                ,manualMembership:manualMembership
                ,membershipRestriction:membershipRestriction
                ,friendlyURL:friendlyURL
                ,active:active
                ,serviceContext:serviceContext
            }]);
        };
        updateGroup = function(groupId,typeSettings) {
            return SessionService.invoke('/group/update-group',[{
                groupId:groupId
                ,typeSettings:typeSettings
            }]);
        };
        updateStagedPortlets = function(groupId,stagedPortletIds) {
            return SessionService.invoke('/group/update-staged-portlets',[{
                groupId:groupId
                ,stagedPortletIds:stagedPortletIds
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ImageService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getImage = function(imageId) {
            return SessionService.invoke('/image/get-image',[{
                imageId:imageId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalarticleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addArticle = function(groupId,folderId,classNameId,classPK,articleId,autoArticleId,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/add-article',[{
                groupId:groupId
                ,folderId:folderId
                ,classNameId:classNameId
                ,classPK:classPK
                ,articleId:articleId
                ,autoArticleId:autoArticleId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,content:content
                ,type:type
                ,ddmStructureKey:ddmStructureKey
                ,ddmTemplateKey:ddmTemplateKey
                ,layoutUuid:layoutUuid
                ,displayDateMonth:displayDateMonth
                ,displayDateDay:displayDateDay
                ,displayDateYear:displayDateYear
                ,displayDateHour:displayDateHour
                ,displayDateMinute:displayDateMinute
                ,expirationDateMonth:expirationDateMonth
                ,expirationDateDay:expirationDateDay
                ,expirationDateYear:expirationDateYear
                ,expirationDateHour:expirationDateHour
                ,expirationDateMinute:expirationDateMinute
                ,neverExpire:neverExpire
                ,reviewDateMonth:reviewDateMonth
                ,reviewDateDay:reviewDateDay
                ,reviewDateYear:reviewDateYear
                ,reviewDateHour:reviewDateHour
                ,reviewDateMinute:reviewDateMinute
                ,neverReview:neverReview
                ,indexable:indexable
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        addArticle = function(groupId,folderId,classNameId,classPK,articleId,autoArticleId,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,smallImage,smallImageURL,smallFile,images,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/add-article',[{
                groupId:groupId
                ,folderId:folderId
                ,classNameId:classNameId
                ,classPK:classPK
                ,articleId:articleId
                ,autoArticleId:autoArticleId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,content:content
                ,type:type
                ,ddmStructureKey:ddmStructureKey
                ,ddmTemplateKey:ddmTemplateKey
                ,layoutUuid:layoutUuid
                ,displayDateMonth:displayDateMonth
                ,displayDateDay:displayDateDay
                ,displayDateYear:displayDateYear
                ,displayDateHour:displayDateHour
                ,displayDateMinute:displayDateMinute
                ,expirationDateMonth:expirationDateMonth
                ,expirationDateDay:expirationDateDay
                ,expirationDateYear:expirationDateYear
                ,expirationDateHour:expirationDateHour
                ,expirationDateMinute:expirationDateMinute
                ,neverExpire:neverExpire
                ,reviewDateMonth:reviewDateMonth
                ,reviewDateDay:reviewDateDay
                ,reviewDateYear:reviewDateYear
                ,reviewDateHour:reviewDateHour
                ,reviewDateMinute:reviewDateMinute
                ,neverReview:neverReview
                ,indexable:indexable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,images:images
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        copyArticle = function(groupId,oldArticleId,newArticleId,autoArticleId,version) {
            return SessionService.invoke('/journalarticle/copy-article',[{
                groupId:groupId
                ,oldArticleId:oldArticleId
                ,newArticleId:newArticleId
                ,autoArticleId:autoArticleId
                ,version:version
            }]);
        };
        deleteArticle = function(groupId,articleId,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/delete-article',[{
                groupId:groupId
                ,articleId:articleId
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        deleteArticle = function(groupId,articleId,version,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/delete-article',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        expireArticle = function(groupId,articleId,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/expire-article',[{
                groupId:groupId
                ,articleId:articleId
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        expireArticle = function(groupId,articleId,version,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/expire-article',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        getArticle = function(id) {
            return SessionService.invoke('/journalarticle/get-article',[{
                id:id
            }]);
        };
        getArticle = function(groupId,articleId) {
            return SessionService.invoke('/journalarticle/get-article',[{
                groupId:groupId
                ,articleId:articleId
            }]);
        };
        getArticle = function(groupId,articleId,version) {
            return SessionService.invoke('/journalarticle/get-article',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
            }]);
        };
        getArticle = function(groupId,className,classPK) {
            return SessionService.invoke('/journalarticle/get-article',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
            }]);
        };
        getArticleByUrlTitle = function(groupId,urlTitle) {
            return SessionService.invoke('/journalarticle/get-article-by-url-title',[{
                groupId:groupId
                ,urlTitle:urlTitle
            }]);
        };
        getArticleContent = function(groupId,articleId,languageId,themeDisplay) {
            return SessionService.invoke('/journalarticle/get-article-content',[{
                groupId:groupId
                ,articleId:articleId
                ,languageId:languageId
                ,themeDisplay:themeDisplay
            }]);
        };
        getArticleContent = function(groupId,articleId,version,languageId,themeDisplay) {
            return SessionService.invoke('/journalarticle/get-article-content',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,languageId:languageId
                ,themeDisplay:themeDisplay
            }]);
        };
        getArticles = function(groupId,folderId) {
            return SessionService.invoke('/journalarticle/get-articles',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getArticles = function(groupId,folderId,start,end,obc) {
            return SessionService.invoke('/journalarticle/get-articles',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getArticlesByArticleId = function(groupId,articleId,start,end,obc) {
            return SessionService.invoke('/journalarticle/get-articles-by-article-id',[{
                groupId:groupId
                ,articleId:articleId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getArticlesByLayoutUuid = function(groupId,layoutUuid) {
            return SessionService.invoke('/journalarticle/get-articles-by-layout-uuid',[{
                groupId:groupId
                ,layoutUuid:layoutUuid
            }]);
        };
        getArticlesByStructureId = function(groupId,ddmStructureKey,start,end,obc) {
            return SessionService.invoke('/journalarticle/get-articles-by-structure-id',[{
                groupId:groupId
                ,ddmStructureKey:ddmStructureKey
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getArticlesByStructureId = function(groupId,classNameId,ddmStructureKey,status,start,end,obc) {
            return SessionService.invoke('/journalarticle/get-articles-by-structure-id',[{
                groupId:groupId
                ,classNameId:classNameId
                ,ddmStructureKey:ddmStructureKey
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getArticlesCount = function(groupId,folderId) {
            return SessionService.invoke('/journalarticle/get-articles-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getArticlesCount = function(groupId,folderId,status) {
            return SessionService.invoke('/journalarticle/get-articles-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        getArticlesCountByArticleId = function(groupId,articleId) {
            return SessionService.invoke('/journalarticle/get-articles-count-by-article-id',[{
                groupId:groupId
                ,articleId:articleId
            }]);
        };
        getArticlesCountByStructureId = function(groupId,ddmStructureKey) {
            return SessionService.invoke('/journalarticle/get-articles-count-by-structure-id',[{
                groupId:groupId
                ,ddmStructureKey:ddmStructureKey
            }]);
        };
        getArticlesCountByStructureId = function(groupId,classNameId,ddmStructureKey,status) {
            return SessionService.invoke('/journalarticle/get-articles-count-by-structure-id',[{
                groupId:groupId
                ,classNameId:classNameId
                ,ddmStructureKey:ddmStructureKey
                ,status:status
            }]);
        };
        getDisplayArticleByUrlTitle = function(groupId,urlTitle) {
            return SessionService.invoke('/journalarticle/get-display-article-by-url-title',[{
                groupId:groupId
                ,urlTitle:urlTitle
            }]);
        };
        getFoldersAndArticlesCount = function(groupId,folderIds) {
            return SessionService.invoke('/journalarticle/get-folders-and-articles-count',[{
                groupId:groupId
                ,folderIds:folderIds
            }]);
        };
        getGroupArticles = function(groupId,userId,rootFolderId,start,end,orderByComparator) {
            return SessionService.invoke('/journalarticle/get-group-articles',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        getGroupArticles = function(groupId,userId,rootFolderId,status,start,end,orderByComparator) {
            return SessionService.invoke('/journalarticle/get-group-articles',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,status:status
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        getGroupArticlesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke('/journalarticle/get-group-articles-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }]);
        };
        getGroupArticlesCount = function(groupId,userId,rootFolderId,status) {
            return SessionService.invoke('/journalarticle/get-group-articles-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,status:status
            }]);
        };
        getLatestArticle = function(resourcePrimKey) {
            return SessionService.invoke('/journalarticle/get-latest-article',[{
                resourcePrimKey:resourcePrimKey
            }]);
        };
        getLatestArticle = function(groupId,articleId,status) {
            return SessionService.invoke('/journalarticle/get-latest-article',[{
                groupId:groupId
                ,articleId:articleId
                ,status:status
            }]);
        };
        getLatestArticle = function(groupId,className,classPK) {
            return SessionService.invoke('/journalarticle/get-latest-article',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
            }]);
        };
        moveArticle = function(groupId,articleId,newFolderId) {
            return SessionService.invoke('/journalarticle/move-article',[{
                groupId:groupId
                ,articleId:articleId
                ,newFolderId:newFolderId
            }]);
        };
        moveArticleFromTrash = function(groupId,articleId,newFolderId,serviceContext) {
            return SessionService.invoke('/journalarticle/move-article-from-trash',[{
                groupId:groupId
                ,articleId:articleId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveArticleFromTrash = function(groupId,resourcePrimKey,newFolderId,serviceContext) {
            return SessionService.invoke('/journalarticle/move-article-from-trash',[{
                groupId:groupId
                ,resourcePrimKey:resourcePrimKey
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveArticleToTrash = function(groupId,articleId) {
            return SessionService.invoke('/journalarticle/move-article-to-trash',[{
                groupId:groupId
                ,articleId:articleId
            }]);
        };
        removeArticleLocale = function(companyId,languageId) {
            return SessionService.invoke('/journalarticle/remove-article-locale',[{
                companyId:companyId
                ,languageId:languageId
            }]);
        };
        removeArticleLocale = function(groupId,articleId,version,languageId) {
            return SessionService.invoke('/journalarticle/remove-article-locale',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,languageId:languageId
            }]);
        };
        restoreArticleFromTrash = function(resourcePrimKey) {
            return SessionService.invoke('/journalarticle/restore-article-from-trash',[{
                resourcePrimKey:resourcePrimKey
            }]);
        };
        restoreArticleFromTrash = function(groupId,articleId) {
            return SessionService.invoke('/journalarticle/restore-article-from-trash',[{
                groupId:groupId
                ,articleId:articleId
            }]);
        };
        search = function(companyId,groupId,folderIds,classNameId,keywords,version,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,start,end,obc) {
            return SessionService.invoke('/journalarticle/search',[{
                companyId:companyId
                ,groupId:groupId
                ,folderIds:folderIds
                ,classNameId:classNameId
                ,keywords:keywords
                ,version:version
                ,type:type
                ,ddmStructureKey:ddmStructureKey
                ,ddmTemplateKey:ddmTemplateKey
                ,displayDateGT:displayDateGT
                ,displayDateLT:displayDateLT
                ,status:status
                ,reviewDate:reviewDate
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        search = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,andOperator,start,end,obc) {
            return SessionService.invoke('/journalarticle/search',[{
                companyId:companyId
                ,groupId:groupId
                ,folderIds:folderIds
                ,classNameId:classNameId
                ,articleId:articleId
                ,version:version
                ,title:title
                ,description:description
                ,content:content
                ,type:type
                ,ddmStructureKey:ddmStructureKey
                ,ddmTemplateKey:ddmTemplateKey
                ,displayDateGT:displayDateGT
                ,displayDateLT:displayDateLT
                ,status:status
                ,reviewDate:reviewDate
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        search = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKeys,ddmTemplateKeys,displayDateGT,displayDateLT,status,reviewDate,andOperator,start,end,obc) {
            return SessionService.invoke('/journalarticle/search',[{
                companyId:companyId
                ,groupId:groupId
                ,folderIds:folderIds
                ,classNameId:classNameId
                ,articleId:articleId
                ,version:version
                ,title:title
                ,description:description
                ,content:content
                ,type:type
                ,ddmStructureKeys:ddmStructureKeys
                ,ddmTemplateKeys:ddmTemplateKeys
                ,displayDateGT:displayDateGT
                ,displayDateLT:displayDateLT
                ,status:status
                ,reviewDate:reviewDate
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke('/journalarticle/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        searchCount = function(companyId,groupId,folderIds,classNameId,keywords,version,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate) {
            return SessionService.invoke('/journalarticle/search-count',[{
                companyId:companyId
                ,groupId:groupId
                ,folderIds:folderIds
                ,classNameId:classNameId
                ,keywords:keywords
                ,version:version
                ,type:type
                ,ddmStructureKey:ddmStructureKey
                ,ddmTemplateKey:ddmTemplateKey
                ,displayDateGT:displayDateGT
                ,displayDateLT:displayDateLT
                ,status:status
                ,reviewDate:reviewDate
            }]);
        };
        searchCount = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,andOperator) {
            return SessionService.invoke('/journalarticle/search-count',[{
                companyId:companyId
                ,groupId:groupId
                ,folderIds:folderIds
                ,classNameId:classNameId
                ,articleId:articleId
                ,version:version
                ,title:title
                ,description:description
                ,content:content
                ,type:type
                ,ddmStructureKey:ddmStructureKey
                ,ddmTemplateKey:ddmTemplateKey
                ,displayDateGT:displayDateGT
                ,displayDateLT:displayDateLT
                ,status:status
                ,reviewDate:reviewDate
                ,andOperator:andOperator
            }]);
        };
        searchCount = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKeys,ddmTemplateKeys,displayDateGT,displayDateLT,status,reviewDate,andOperator) {
            return SessionService.invoke('/journalarticle/search-count',[{
                companyId:companyId
                ,groupId:groupId
                ,folderIds:folderIds
                ,classNameId:classNameId
                ,articleId:articleId
                ,version:version
                ,title:title
                ,description:description
                ,content:content
                ,type:type
                ,ddmStructureKeys:ddmStructureKeys
                ,ddmTemplateKeys:ddmTemplateKeys
                ,displayDateGT:displayDateGT
                ,displayDateLT:displayDateLT
                ,status:status
                ,reviewDate:reviewDate
                ,andOperator:andOperator
            }]);
        };
        subscribe = function(groupId) {
            return SessionService.invoke('/journalarticle/subscribe',[{
                groupId:groupId
            }]);
        };
        unsubscribe = function(groupId) {
            return SessionService.invoke('/journalarticle/unsubscribe',[{
                groupId:groupId
            }]);
        };
        updateArticle = function(userId,groupId,folderId,articleId,version,titleMap,descriptionMap,content,layoutUuid,serviceContext) {
            return SessionService.invoke('/journalarticle/update-article',[{
                userId:userId
                ,groupId:groupId
                ,folderId:folderId
                ,articleId:articleId
                ,version:version
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,content:content
                ,layoutUuid:layoutUuid
                ,serviceContext:serviceContext
            }]);
        };
        updateArticle = function(groupId,folderId,articleId,version,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,smallImage,smallImageURL,smallFile,images,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/update-article',[{
                groupId:groupId
                ,folderId:folderId
                ,articleId:articleId
                ,version:version
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,content:content
                ,type:type
                ,ddmStructureKey:ddmStructureKey
                ,ddmTemplateKey:ddmTemplateKey
                ,layoutUuid:layoutUuid
                ,displayDateMonth:displayDateMonth
                ,displayDateDay:displayDateDay
                ,displayDateYear:displayDateYear
                ,displayDateHour:displayDateHour
                ,displayDateMinute:displayDateMinute
                ,expirationDateMonth:expirationDateMonth
                ,expirationDateDay:expirationDateDay
                ,expirationDateYear:expirationDateYear
                ,expirationDateHour:expirationDateHour
                ,expirationDateMinute:expirationDateMinute
                ,neverExpire:neverExpire
                ,reviewDateMonth:reviewDateMonth
                ,reviewDateDay:reviewDateDay
                ,reviewDateYear:reviewDateYear
                ,reviewDateHour:reviewDateHour
                ,reviewDateMinute:reviewDateMinute
                ,neverReview:neverReview
                ,indexable:indexable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,images:images
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        updateArticle = function(groupId,folderId,articleId,version,content,serviceContext) {
            return SessionService.invoke('/journalarticle/update-article',[{
                groupId:groupId
                ,folderId:folderId
                ,articleId:articleId
                ,version:version
                ,content:content
                ,serviceContext:serviceContext
            }]);
        };
        updateArticleTranslation = function(groupId,articleId,version,locale,title,description,content,images) {
            return SessionService.invoke('/journalarticle/update-article-translation',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,locale:locale
                ,title:title
                ,description:description
                ,content:content
                ,images:images
            }]);
        };
        updateArticleTranslation = function(groupId,articleId,version,locale,title,description,content,images,serviceContext) {
            return SessionService.invoke('/journalarticle/update-article-translation',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,locale:locale
                ,title:title
                ,description:description
                ,content:content
                ,images:images
                ,serviceContext:serviceContext
            }]);
        };
        updateContent = function(groupId,articleId,version,content) {
            return SessionService.invoke('/journalarticle/update-content',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,content:content
            }]);
        };
        updateStatus = function(groupId,articleId,version,status,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/update-status',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,status:status
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalfeedService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFeed = function(groupId,feedId,autoFeedId,name,description,type,structureId,templateId,rendererTemplateId,delta,orderByCol,orderByType,targetLayoutFriendlyUrl,targetPortletId,contentField,feedType,feedVersion,serviceContext) {
            return SessionService.invoke('/journalfeed/add-feed',[{
                groupId:groupId
                ,feedId:feedId
                ,autoFeedId:autoFeedId
                ,name:name
                ,description:description
                ,type:type
                ,structureId:structureId
                ,templateId:templateId
                ,rendererTemplateId:rendererTemplateId
                ,delta:delta
                ,orderByCol:orderByCol
                ,orderByType:orderByType
                ,targetLayoutFriendlyUrl:targetLayoutFriendlyUrl
                ,targetPortletId:targetPortletId
                ,contentField:contentField
                ,feedType:feedType
                ,feedVersion:feedVersion
                ,serviceContext:serviceContext
            }]);
        };
        deleteFeed = function(feedId) {
            return SessionService.invoke('/journalfeed/delete-feed',[{
                feedId:feedId
            }]);
        };
        deleteFeed = function(groupId,feedId) {
            return SessionService.invoke('/journalfeed/delete-feed',[{
                groupId:groupId
                ,feedId:feedId
            }]);
        };
        getFeed = function(feedId) {
            return SessionService.invoke('/journalfeed/get-feed',[{
                feedId:feedId
            }]);
        };
        getFeed = function(groupId,feedId) {
            return SessionService.invoke('/journalfeed/get-feed',[{
                groupId:groupId
                ,feedId:feedId
            }]);
        };
        updateFeed = function(groupId,feedId,name,description,type,structureId,templateId,rendererTemplateId,delta,orderByCol,orderByType,targetLayoutFriendlyUrl,targetPortletId,contentField,feedType,feedVersion,serviceContext) {
            return SessionService.invoke('/journalfeed/update-feed',[{
                groupId:groupId
                ,feedId:feedId
                ,name:name
                ,description:description
                ,type:type
                ,structureId:structureId
                ,templateId:templateId
                ,rendererTemplateId:rendererTemplateId
                ,delta:delta
                ,orderByCol:orderByCol
                ,orderByType:orderByType
                ,targetLayoutFriendlyUrl:targetLayoutFriendlyUrl
                ,targetPortletId:targetPortletId
                ,contentField:contentField
                ,feedType:feedType
                ,feedVersion:feedVersion
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFolder = function(groupId,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke('/journalfolder/add-folder',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteFolder = function(folderId) {
            return SessionService.invoke('/journalfolder/delete-folder',[{
                folderId:folderId
            }]);
        };
        deleteFolder = function(folderId,includeTrashedEntries) {
            return SessionService.invoke('/journalfolder/delete-folder',[{
                folderId:folderId
                ,includeTrashedEntries:includeTrashedEntries
            }]);
        };
        getFolder = function(folderId) {
            return SessionService.invoke('/journalfolder/get-folder',[{
                folderId:folderId
            }]);
        };
        getFolderIds = function(groupId,folderId) {
            return SessionService.invoke('/journalfolder/get-folder-ids',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getFolders = function(groupId) {
            return SessionService.invoke('/journalfolder/get-folders',[{
                groupId:groupId
            }]);
        };
        getFolders = function(groupId,parentFolderId) {
            return SessionService.invoke('/journalfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        getFolders = function(groupId,parentFolderId,status) {
            return SessionService.invoke('/journalfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
            }]);
        };
        getFolders = function(groupId,parentFolderId,start,end) {
            return SessionService.invoke('/journalfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,start:start
                ,end:end
            }]);
        };
        getFolders = function(groupId,parentFolderId,status,start,end) {
            return SessionService.invoke('/journalfolder/get-folders',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getFoldersAndArticles = function(groupId,folderId,start,end,obc) {
            return SessionService.invoke('/journalfolder/get-folders-and-articles',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFoldersAndArticles = function(groupId,folderId,status,start,end,obc) {
            return SessionService.invoke('/journalfolder/get-folders-and-articles',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getFoldersAndArticlesCount = function(groupId,folderId) {
            return SessionService.invoke('/journalfolder/get-folders-and-articles-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        getFoldersAndArticlesCount = function(groupId,folderId,status) {
            return SessionService.invoke('/journalfolder/get-folders-and-articles-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        getFoldersAndArticlesCount = function(groupId,folderIds,status) {
            return SessionService.invoke('/journalfolder/get-folders-and-articles-count',[{
                groupId:groupId
                ,folderIds:folderIds
                ,status:status
            }]);
        };
        getFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke('/journalfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
            }]);
        };
        getFoldersCount = function(groupId,parentFolderId,status) {
            return SessionService.invoke('/journalfolder/get-folders-count',[{
                groupId:groupId
                ,parentFolderId:parentFolderId
                ,status:status
            }]);
        };
        getSubfolderIds = function(folderIds,groupId,folderId) {
            return SessionService.invoke('/journalfolder/get-subfolder-ids',[{
                folderIds:folderIds
                ,groupId:groupId
                ,folderId:folderId
            }]);
        };
        getSubfolderIds = function(groupId,folderId,recurse) {
            return SessionService.invoke('/journalfolder/get-subfolder-ids',[{
                groupId:groupId
                ,folderId:folderId
                ,recurse:recurse
            }]);
        };
        moveFolder = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke('/journalfolder/move-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveFolderFromTrash = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke('/journalfolder/move-folder-from-trash',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,serviceContext:serviceContext
            }]);
        };
        moveFolderToTrash = function(folderId) {
            return SessionService.invoke('/journalfolder/move-folder-to-trash',[{
                folderId:folderId
            }]);
        };
        restoreFolderFromTrash = function(folderId) {
            return SessionService.invoke('/journalfolder/restore-folder-from-trash',[{
                folderId:folderId
            }]);
        };
        updateFolder = function(folderId,parentFolderId,name,description,mergeWithParentFolder,serviceContext) {
            return SessionService.invoke('/journalfolder/update-folder',[{
                folderId:folderId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,mergeWithParentFolder:mergeWithParentFolder
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalstructureService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addStructure = function(groupId,structureId,autoStructureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke('/journalstructure/add-structure',[{
                groupId:groupId
                ,structureId:structureId
                ,autoStructureId:autoStructureId
                ,parentStructureId:parentStructureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        copyStructure = function(groupId,oldStructureId,newStructureId,autoStructureId) {
            return SessionService.invoke('/journalstructure/copy-structure',[{
                groupId:groupId
                ,oldStructureId:oldStructureId
                ,newStructureId:newStructureId
                ,autoStructureId:autoStructureId
            }]);
        };
        deleteStructure = function(groupId,structureId) {
            return SessionService.invoke('/journalstructure/delete-structure',[{
                groupId:groupId
                ,structureId:structureId
            }]);
        };
        getStructure = function(groupId,structureId) {
            return SessionService.invoke('/journalstructure/get-structure',[{
                groupId:groupId
                ,structureId:structureId
            }]);
        };
        getStructure = function(groupId,structureId,includeGlobalStructures) {
            return SessionService.invoke('/journalstructure/get-structure',[{
                groupId:groupId
                ,structureId:structureId
                ,includeGlobalStructures:includeGlobalStructures
            }]);
        };
        getStructures = function(groupId) {
            return SessionService.invoke('/journalstructure/get-structures',[{
                groupId:groupId
            }]);
        };
        getStructures = function(groupIds) {
            return SessionService.invoke('/journalstructure/get-structures',[{
                groupIds:groupIds
            }]);
        };
        search = function(companyId,groupIds,keywords,start,end,obc) {
            return SessionService.invoke('/journalstructure/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        search = function(companyId,groupIds,structureId,name,description,andOperator,start,end,obc) {
            return SessionService.invoke('/journalstructure/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,structureId:structureId
                ,name:name
                ,description:description
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        searchCount = function(companyId,groupIds,keywords) {
            return SessionService.invoke('/journalstructure/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
            }]);
        };
        searchCount = function(companyId,groupIds,structureId,name,description,andOperator) {
            return SessionService.invoke('/journalstructure/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,structureId:structureId
                ,name:name
                ,description:description
                ,andOperator:andOperator
            }]);
        };
        updateStructure = function(groupId,structureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke('/journalstructure/update-structure',[{
                groupId:groupId
                ,structureId:structureId
                ,parentStructureId:parentStructureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsd:xsd
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournaltemplateService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addTemplate = function(groupId,templateId,autoTemplateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,serviceContext) {
            return SessionService.invoke('/journaltemplate/add-template',[{
                groupId:groupId
                ,templateId:templateId
                ,autoTemplateId:autoTemplateId
                ,structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsl:xsl
                ,formatXsl:formatXsl
                ,langType:langType
                ,cacheable:cacheable
                ,serviceContext:serviceContext
            }]);
        };
        addTemplate = function(groupId,templateId,autoTemplateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,smallImage,smallImageURL,smallFile,serviceContext) {
            return SessionService.invoke('/journaltemplate/add-template',[{
                groupId:groupId
                ,templateId:templateId
                ,autoTemplateId:autoTemplateId
                ,structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsl:xsl
                ,formatXsl:formatXsl
                ,langType:langType
                ,cacheable:cacheable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,serviceContext:serviceContext
            }]);
        };
        copyTemplate = function(groupId,oldTemplateId,newTemplateId,autoTemplateId) {
            return SessionService.invoke('/journaltemplate/copy-template',[{
                groupId:groupId
                ,oldTemplateId:oldTemplateId
                ,newTemplateId:newTemplateId
                ,autoTemplateId:autoTemplateId
            }]);
        };
        deleteTemplate = function(groupId,templateId) {
            return SessionService.invoke('/journaltemplate/delete-template',[{
                groupId:groupId
                ,templateId:templateId
            }]);
        };
        getStructureTemplates = function(groupId,structureId) {
            return SessionService.invoke('/journaltemplate/get-structure-templates',[{
                groupId:groupId
                ,structureId:structureId
            }]);
        };
        getTemplate = function(groupId,templateId) {
            return SessionService.invoke('/journaltemplate/get-template',[{
                groupId:groupId
                ,templateId:templateId
            }]);
        };
        getTemplate = function(groupId,templateId,includeGlobalTemplates) {
            return SessionService.invoke('/journaltemplate/get-template',[{
                groupId:groupId
                ,templateId:templateId
                ,includeGlobalTemplates:includeGlobalTemplates
            }]);
        };
        search = function(companyId,groupIds,templateId,structureId,structureIdComparator,name,description,andOperator,start,end,obc) {
            return SessionService.invoke('/journaltemplate/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,templateId:templateId
                ,structureId:structureId
                ,structureIdComparator:structureIdComparator
                ,name:name
                ,description:description
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        search = function(companyId,groupIds,keywords,structureId,structureIdComparator,start,end,obc) {
            return SessionService.invoke('/journaltemplate/search',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,structureId:structureId
                ,structureIdComparator:structureIdComparator
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        searchCount = function(companyId,groupIds,keywords,structureId,structureIdComparator) {
            return SessionService.invoke('/journaltemplate/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,keywords:keywords
                ,structureId:structureId
                ,structureIdComparator:structureIdComparator
            }]);
        };
        searchCount = function(companyId,groupIds,templateId,structureId,structureIdComparator,name,description,andOperator) {
            return SessionService.invoke('/journaltemplate/search-count',[{
                companyId:companyId
                ,groupIds:groupIds
                ,templateId:templateId
                ,structureId:structureId
                ,structureIdComparator:structureIdComparator
                ,name:name
                ,description:description
                ,andOperator:andOperator
            }]);
        };
        updateTemplate = function(groupId,templateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,serviceContext) {
            return SessionService.invoke('/journaltemplate/update-template',[{
                groupId:groupId
                ,templateId:templateId
                ,structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsl:xsl
                ,formatXsl:formatXsl
                ,langType:langType
                ,cacheable:cacheable
                ,serviceContext:serviceContext
            }]);
        };
        updateTemplate = function(groupId,templateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,smallImage,smallImageURL,smallFile,serviceContext) {
            return SessionService.invoke('/journaltemplate/update-template',[{
                groupId:groupId
                ,templateId:templateId
                ,structureId:structureId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,xsl:xsl
                ,formatXsl:formatXsl
                ,langType:langType
                ,cacheable:cacheable
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addLayout = function(groupId,privateLayout,parentLayoutId,name,title,description,type,hidden,friendlyURL,serviceContext) {
            return SessionService.invoke('/layout/add-layout',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,name:name
                ,title:title
                ,description:description
                ,type:type
                ,hidden:hidden
                ,friendlyURL:friendlyURL
                ,serviceContext:serviceContext
            }]);
        };
        addLayout = function(groupId,privateLayout,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURL,serviceContext) {
            return SessionService.invoke('/layout/add-layout',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,localeNamesMap:localeNamesMap
                ,localeTitlesMap:localeTitlesMap
                ,descriptionMap:descriptionMap
                ,keywordsMap:keywordsMap
                ,robotsMap:robotsMap
                ,type:type
                ,hidden:hidden
                ,friendlyURL:friendlyURL
                ,serviceContext:serviceContext
            }]);
        };
        addLayout = function(groupId,privateLayout,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,typeSettings,hidden,friendlyURLMap,serviceContext) {
            return SessionService.invoke('/layout/add-layout',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,localeNamesMap:localeNamesMap
                ,localeTitlesMap:localeTitlesMap
                ,descriptionMap:descriptionMap
                ,keywordsMap:keywordsMap
                ,robotsMap:robotsMap
                ,type:type
                ,typeSettings:typeSettings
                ,hidden:hidden
                ,friendlyURLMap:friendlyURLMap
                ,serviceContext:serviceContext
            }]);
        };
        deleteLayout = function(plid,serviceContext) {
            return SessionService.invoke('/layout/delete-layout',[{
                plid:plid
                ,serviceContext:serviceContext
            }]);
        };
        deleteLayout = function(groupId,privateLayout,layoutId,serviceContext) {
            return SessionService.invoke('/layout/delete-layout',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,serviceContext:serviceContext
            }]);
        };
        deleteTempFileEntry = function(groupId,fileName,tempFolderName) {
            return SessionService.invoke('/layout/delete-temp-file-entry',[{
                groupId:groupId
                ,fileName:fileName
                ,tempFolderName:tempFolderName
            }]);
        };
        exportLayouts = function(groupId,privateLayout,parameterMap,startDate,endDate) {
            return SessionService.invoke('/layout/export-layouts',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }]);
        };
        exportLayouts = function(groupId,privateLayout,layoutIds,parameterMap,startDate,endDate) {
            return SessionService.invoke('/layout/export-layouts',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutIds:layoutIds
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }]);
        };
        exportLayoutsAsFile = function(groupId,privateLayout,layoutIds,parameterMap,startDate,endDate) {
            return SessionService.invoke('/layout/export-layouts-as-file',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutIds:layoutIds
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }]);
        };
        exportLayoutsAsFileInBackground = function(taskName,groupId,privateLayout,layoutIds,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke('/layout/export-layouts-as-file-in-background',[{
                taskName:taskName
                ,groupId:groupId
                ,privateLayout:privateLayout
                ,layoutIds:layoutIds
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
                ,fileName:fileName
            }]);
        };
        exportPortletInfo = function(companyId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke('/layout/export-portlet-info',[{
                companyId:companyId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }]);
        };
        exportPortletInfo = function(plid,groupId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke('/layout/export-portlet-info',[{
                plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }]);
        };
        exportPortletInfoAsFile = function(portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke('/layout/export-portlet-info-as-file',[{
                portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }]);
        };
        exportPortletInfoAsFile = function(plid,groupId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke('/layout/export-portlet-info-as-file',[{
                plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }]);
        };
        exportPortletInfoAsFileInBackground = function(taskName,portletId,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke('/layout/export-portlet-info-as-file-in-background',[{
                taskName:taskName
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
                ,fileName:fileName
            }]);
        };
        exportPortletInfoAsFileInBackground = function(taskName,plid,groupId,portletId,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke('/layout/export-portlet-info-as-file-in-background',[{
                taskName:taskName
                ,plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
                ,fileName:fileName
            }]);
        };
        getAncestorLayouts = function(plid) {
            return SessionService.invoke('/layout/get-ancestor-layouts',[{
                plid:plid
            }]);
        };
        getDefaultPlid = function(groupId,scopeGroupId,portletId) {
            return SessionService.invoke('/layout/get-default-plid',[{
                groupId:groupId
                ,scopeGroupId:scopeGroupId
                ,portletId:portletId
            }]);
        };
        getDefaultPlid = function(groupId,scopeGroupId,privateLayout,portletId) {
            return SessionService.invoke('/layout/get-default-plid',[{
                groupId:groupId
                ,scopeGroupId:scopeGroupId
                ,privateLayout:privateLayout
                ,portletId:portletId
            }]);
        };
        getLayoutByUuidAndGroupId = function(uuid,groupId,privateLayout) {
            return SessionService.invoke('/layout/get-layout-by-uuid-and-group-id',[{
                uuid:uuid
                ,groupId:groupId
                ,privateLayout:privateLayout
            }]);
        };
        getLayoutName = function(groupId,privateLayout,layoutId,languageId) {
            return SessionService.invoke('/layout/get-layout-name',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,languageId:languageId
            }]);
        };
        getLayoutReferences = function(companyId,portletId,preferencesKey,preferencesValue) {
            return SessionService.invoke('/layout/get-layout-references',[{
                companyId:companyId
                ,portletId:portletId
                ,preferencesKey:preferencesKey
                ,preferencesValue:preferencesValue
            }]);
        };
        getLayouts = function(groupId,privateLayout) {
            return SessionService.invoke('/layout/get-layouts',[{
                groupId:groupId
                ,privateLayout:privateLayout
            }]);
        };
        getLayouts = function(groupId,privateLayout,parentLayoutId) {
            return SessionService.invoke('/layout/get-layouts',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
            }]);
        };
        getLayouts = function(groupId,privateLayout,parentLayoutId,incomplete,start,end) {
            return SessionService.invoke('/layout/get-layouts',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,incomplete:incomplete
                ,start:start
                ,end:end
            }]);
        };
        getLayoutsCount = function(groupId,privateLayout,parentLayoutId) {
            return SessionService.invoke('/layout/get-layouts-count',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
            }]);
        };
        getTempFileEntryNames = function(groupId,tempFolderName) {
            return SessionService.invoke('/layout/get-temp-file-entry-names',[{
                groupId:groupId
                ,tempFolderName:tempFolderName
            }]);
        };
        importLayouts = function(groupId,privateLayout,parameterMap,bytes) {
            return SessionService.invoke('/layout/import-layouts',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,bytes:bytes
            }]);
        };
        importLayouts = function(groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke('/layout/import-layouts',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,file:file
            }]);
        };
        importLayoutsInBackground = function(taskName,groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke('/layout/import-layouts-in-background',[{
                taskName:taskName
                ,groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,file:file
            }]);
        };
        importPortletInfo = function(portletId,parameterMap,file) {
            return SessionService.invoke('/layout/import-portlet-info',[{
                portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }]);
        };
        importPortletInfo = function(plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke('/layout/import-portlet-info',[{
                plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }]);
        };
        importPortletInfoInBackground = function(taskName,portletId,parameterMap,file) {
            return SessionService.invoke('/layout/import-portlet-info-in-background',[{
                taskName:taskName
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }]);
        };
        importPortletInfoInBackground = function(taskName,plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke('/layout/import-portlet-info-in-background',[{
                taskName:taskName
                ,plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }]);
        };
        schedulePublishToLive = function(sourceGroupId,targetGroupId,privateLayout,layoutIdMap,parameterMap,scope,startDate,endDate,groupName,cronText,schedulerStartDate,schedulerEndDate,description) {
            return SessionService.invoke('/layout/schedule-publish-to-live',[{
                sourceGroupId:sourceGroupId
                ,targetGroupId:targetGroupId
                ,privateLayout:privateLayout
                ,layoutIdMap:layoutIdMap
                ,parameterMap:parameterMap
                ,scope:scope
                ,startDate:startDate
                ,endDate:endDate
                ,groupName:groupName
                ,cronText:cronText
                ,schedulerStartDate:schedulerStartDate
                ,schedulerEndDate:schedulerEndDate
                ,description:description
            }]);
        };
        schedulePublishToRemote = function(sourceGroupId,privateLayout,layoutIdMap,parameterMap,remoteAddress,remotePort,remotePathContext,secureConnection,remoteGroupId,remotePrivateLayout,startDate,endDate,groupName,cronText,schedulerStartDate,schedulerEndDate,description) {
            return SessionService.invoke('/layout/schedule-publish-to-remote',[{
                sourceGroupId:sourceGroupId
                ,privateLayout:privateLayout
                ,layoutIdMap:layoutIdMap
                ,parameterMap:parameterMap
                ,remoteAddress:remoteAddress
                ,remotePort:remotePort
                ,remotePathContext:remotePathContext
                ,secureConnection:secureConnection
                ,remoteGroupId:remoteGroupId
                ,remotePrivateLayout:remotePrivateLayout
                ,startDate:startDate
                ,endDate:endDate
                ,groupName:groupName
                ,cronText:cronText
                ,schedulerStartDate:schedulerStartDate
                ,schedulerEndDate:schedulerEndDate
                ,description:description
            }]);
        };
        setLayouts = function(groupId,privateLayout,parentLayoutId,layoutIds,serviceContext) {
            return SessionService.invoke('/layout/set-layouts',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,layoutIds:layoutIds
                ,serviceContext:serviceContext
            }]);
        };
        unschedulePublishToLive = function(groupId,jobName,groupName) {
            return SessionService.invoke('/layout/unschedule-publish-to-live',[{
                groupId:groupId
                ,jobName:jobName
                ,groupName:groupName
            }]);
        };
        unschedulePublishToRemote = function(groupId,jobName,groupName) {
            return SessionService.invoke('/layout/unschedule-publish-to-remote',[{
                groupId:groupId
                ,jobName:jobName
                ,groupName:groupName
            }]);
        };
        updateLayout = function(groupId,privateLayout,layoutId,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURL,iconImage,iconBytes,serviceContext) {
            return SessionService.invoke('/layout/update-layout',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,parentLayoutId:parentLayoutId
                ,localeNamesMap:localeNamesMap
                ,localeTitlesMap:localeTitlesMap
                ,descriptionMap:descriptionMap
                ,keywordsMap:keywordsMap
                ,robotsMap:robotsMap
                ,type:type
                ,hidden:hidden
                ,friendlyURL:friendlyURL
                ,iconImage:iconImage
                ,iconBytes:iconBytes
                ,serviceContext:serviceContext
            }]);
        };
        updateLayout = function(groupId,privateLayout,layoutId,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURLMap,iconImage,iconBytes,serviceContext) {
            return SessionService.invoke('/layout/update-layout',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,parentLayoutId:parentLayoutId
                ,localeNamesMap:localeNamesMap
                ,localeTitlesMap:localeTitlesMap
                ,descriptionMap:descriptionMap
                ,keywordsMap:keywordsMap
                ,robotsMap:robotsMap
                ,type:type
                ,hidden:hidden
                ,friendlyURLMap:friendlyURLMap
                ,iconImage:iconImage
                ,iconBytes:iconBytes
                ,serviceContext:serviceContext
            }]);
        };
        updateLayout = function(groupId,privateLayout,layoutId,typeSettings) {
            return SessionService.invoke('/layout/update-layout',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,typeSettings:typeSettings
            }]);
        };
        updateLookAndFeel = function(groupId,privateLayout,layoutId,themeId,colorSchemeId,css,wapTheme) {
            return SessionService.invoke('/layout/update-look-and-feel',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,themeId:themeId
                ,colorSchemeId:colorSchemeId
                ,css:css
                ,wapTheme:wapTheme
            }]);
        };
        updateName = function(plid,name,languageId) {
            return SessionService.invoke('/layout/update-name',[{
                plid:plid
                ,name:name
                ,languageId:languageId
            }]);
        };
        updateName = function(groupId,privateLayout,layoutId,name,languageId) {
            return SessionService.invoke('/layout/update-name',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,name:name
                ,languageId:languageId
            }]);
        };
        updateParentLayoutId = function(plid,parentPlid) {
            return SessionService.invoke('/layout/update-parent-layout-id',[{
                plid:plid
                ,parentPlid:parentPlid
            }]);
        };
        updateParentLayoutId = function(groupId,privateLayout,layoutId,parentLayoutId) {
            return SessionService.invoke('/layout/update-parent-layout-id',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,parentLayoutId:parentLayoutId
            }]);
        };
        updateParentLayoutIdAndPriority = function(plid,parentPlid,priority) {
            return SessionService.invoke('/layout/update-parent-layout-id-and-priority',[{
                plid:plid
                ,parentPlid:parentPlid
                ,priority:priority
            }]);
        };
        updatePriority = function(plid,priority) {
            return SessionService.invoke('/layout/update-priority',[{
                plid:plid
                ,priority:priority
            }]);
        };
        updatePriority = function(groupId,privateLayout,layoutId,priority) {
            return SessionService.invoke('/layout/update-priority',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,priority:priority
            }]);
        };
        updatePriority = function(groupId,privateLayout,layoutId,nextLayoutId,previousLayoutId) {
            return SessionService.invoke('/layout/update-priority',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,nextLayoutId:nextLayoutId
                ,previousLayoutId:previousLayoutId
            }]);
        };
        validateImportLayoutsFile = function(groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke('/layout/validate-import-layouts-file',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,file:file
            }]);
        };
        validateImportPortletInfo = function(plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke('/layout/validate-import-portlet-info',[{
                plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutbranchService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addLayoutBranch = function(layoutRevisionId,name,description,master,serviceContext) {
            return SessionService.invoke('/layoutbranch/add-layout-branch',[{
                layoutRevisionId:layoutRevisionId
                ,name:name
                ,description:description
                ,master:master
                ,serviceContext:serviceContext
            }]);
        };
        deleteLayoutBranch = function(layoutBranchId) {
            return SessionService.invoke('/layoutbranch/delete-layout-branch',[{
                layoutBranchId:layoutBranchId
            }]);
        };
        updateLayoutBranch = function(layoutBranchId,name,description,serviceContext) {
            return SessionService.invoke('/layoutbranch/update-layout-branch',[{
                layoutBranchId:layoutBranchId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutprototypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addLayoutPrototype = function(nameMap,description,active) {
            return SessionService.invoke('/layoutprototype/add-layout-prototype',[{
                nameMap:nameMap
                ,description:description
                ,active:active
            }]);
        };
        addLayoutPrototype = function(nameMap,description,active,serviceContext) {
            return SessionService.invoke('/layoutprototype/add-layout-prototype',[{
                nameMap:nameMap
                ,description:description
                ,active:active
                ,serviceContext:serviceContext
            }]);
        };
        deleteLayoutPrototype = function(layoutPrototypeId) {
            return SessionService.invoke('/layoutprototype/delete-layout-prototype',[{
                layoutPrototypeId:layoutPrototypeId
            }]);
        };
        getLayoutPrototype = function(layoutPrototypeId) {
            return SessionService.invoke('/layoutprototype/get-layout-prototype',[{
                layoutPrototypeId:layoutPrototypeId
            }]);
        };
        search = function(companyId,active,obc) {
            return SessionService.invoke('/layoutprototype/search',[{
                companyId:companyId
                ,active:active
                ,obc:obc
            }]);
        };
        updateLayoutPrototype = function(layoutPrototypeId,nameMap,description,active) {
            return SessionService.invoke('/layoutprototype/update-layout-prototype',[{
                layoutPrototypeId:layoutPrototypeId
                ,nameMap:nameMap
                ,description:description
                ,active:active
            }]);
        };
        updateLayoutPrototype = function(layoutPrototypeId,nameMap,description,active,serviceContext) {
            return SessionService.invoke('/layoutprototype/update-layout-prototype',[{
                layoutPrototypeId:layoutPrototypeId
                ,nameMap:nameMap
                ,description:description
                ,active:active
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutrevisionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addLayoutRevision = function(userId,layoutSetBranchId,layoutBranchId,parentLayoutRevisionId,head,plid,portletPreferencesPlid,privateLayout,name,title,description,keywords,robots,typeSettings,iconImage,iconImageId,themeId,colorSchemeId,wapThemeId,wapColorSchemeId,css,serviceContext) {
            return SessionService.invoke('/layoutrevision/add-layout-revision',[{
                userId:userId
                ,layoutSetBranchId:layoutSetBranchId
                ,layoutBranchId:layoutBranchId
                ,parentLayoutRevisionId:parentLayoutRevisionId
                ,head:head
                ,plid:plid
                ,portletPreferencesPlid:portletPreferencesPlid
                ,privateLayout:privateLayout
                ,name:name
                ,title:title
                ,description:description
                ,keywords:keywords
                ,robots:robots
                ,typeSettings:typeSettings
                ,iconImage:iconImage
                ,iconImageId:iconImageId
                ,themeId:themeId
                ,colorSchemeId:colorSchemeId
                ,wapThemeId:wapThemeId
                ,wapColorSchemeId:wapColorSchemeId
                ,css:css
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        updateLayoutSetPrototypeLinkEnabled = function(groupId,privateLayout,layoutSetPrototypeLinkEnabled,layoutSetPrototypeUuid) {
            return SessionService.invoke('/layoutset/update-layout-set-prototype-link-enabled',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutSetPrototypeLinkEnabled:layoutSetPrototypeLinkEnabled
                ,layoutSetPrototypeUuid:layoutSetPrototypeUuid
            }]);
        };
        updateLogo = function(groupId,privateLayout,logo,bytes) {
            return SessionService.invoke('/layoutset/update-logo',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,logo:logo
                ,bytes:bytes
            }]);
        };
        updateLogo = function(groupId,privateLayout,logo,file) {
            return SessionService.invoke('/layoutset/update-logo',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,logo:logo
                ,file:file
            }]);
        };
        updateLookAndFeel = function(groupId,privateLayout,themeId,colorSchemeId,css,wapTheme) {
            return SessionService.invoke('/layoutset/update-look-and-feel',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,themeId:themeId
                ,colorSchemeId:colorSchemeId
                ,css:css
                ,wapTheme:wapTheme
            }]);
        };
        updateSettings = function(groupId,privateLayout,settings) {
            return SessionService.invoke('/layoutset/update-settings',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,settings:settings
            }]);
        };
        updateVirtualHost = function(groupId,privateLayout,virtualHost) {
            return SessionService.invoke('/layoutset/update-virtual-host',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,virtualHost:virtualHost
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetbranchService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addLayoutSetBranch = function(groupId,privateLayout,name,description,master,copyLayoutSetBranchId,serviceContext) {
            return SessionService.invoke('/layoutsetbranch/add-layout-set-branch',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,name:name
                ,description:description
                ,master:master
                ,copyLayoutSetBranchId:copyLayoutSetBranchId
                ,serviceContext:serviceContext
            }]);
        };
        deleteLayoutSetBranch = function(layoutSetBranchId) {
            return SessionService.invoke('/layoutsetbranch/delete-layout-set-branch',[{
                layoutSetBranchId:layoutSetBranchId
            }]);
        };
        getLayoutSetBranches = function(groupId,privateLayout) {
            return SessionService.invoke('/layoutsetbranch/get-layout-set-branches',[{
                groupId:groupId
                ,privateLayout:privateLayout
            }]);
        };
        mergeLayoutSetBranch = function(layoutSetBranchId,mergeLayoutSetBranchId,serviceContext) {
            return SessionService.invoke('/layoutsetbranch/merge-layout-set-branch',[{
                layoutSetBranchId:layoutSetBranchId
                ,mergeLayoutSetBranchId:mergeLayoutSetBranchId
                ,serviceContext:serviceContext
            }]);
        };
        updateLayoutSetBranch = function(groupId,layoutSetBranchId,name,description,serviceContext) {
            return SessionService.invoke('/layoutsetbranch/update-layout-set-branch',[{
                groupId:groupId
                ,layoutSetBranchId:layoutSetBranchId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetprototypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addLayoutSetPrototype = function(nameMap,description,active,layoutsUpdateable,serviceContext) {
            return SessionService.invoke('/layoutsetprototype/add-layout-set-prototype',[{
                nameMap:nameMap
                ,description:description
                ,active:active
                ,layoutsUpdateable:layoutsUpdateable
                ,serviceContext:serviceContext
            }]);
        };
        deleteLayoutSetPrototype = function(layoutSetPrototypeId) {
            return SessionService.invoke('/layoutsetprototype/delete-layout-set-prototype',[{
                layoutSetPrototypeId:layoutSetPrototypeId
            }]);
        };
        getLayoutSetPrototype = function(layoutSetPrototypeId) {
            return SessionService.invoke('/layoutsetprototype/get-layout-set-prototype',[{
                layoutSetPrototypeId:layoutSetPrototypeId
            }]);
        };
        search = function(companyId,active,obc) {
            return SessionService.invoke('/layoutsetprototype/search',[{
                companyId:companyId
                ,active:active
                ,obc:obc
            }]);
        };
        updateLayoutSetPrototype = function(layoutSetPrototypeId,settings) {
            return SessionService.invoke('/layoutsetprototype/update-layout-set-prototype',[{
                layoutSetPrototypeId:layoutSetPrototypeId
                ,settings:settings
            }]);
        };
        updateLayoutSetPrototype = function(layoutSetPrototypeId,nameMap,description,active,layoutsUpdateable,serviceContext) {
            return SessionService.invoke('/layoutsetprototype/update-layout-set-prototype',[{
                layoutSetPrototypeId:layoutSetPrototypeId
                ,nameMap:nameMap
                ,description:description
                ,active:active
                ,layoutsUpdateable:layoutsUpdateable
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ListtypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getListType = function(listTypeId) {
            return SessionService.invoke('/listtype/get-list-type',[{
                listTypeId:listTypeId
            }]);
        };
        getListTypes = function(type) {
            return SessionService.invoke('/listtype/get-list-types',[{
                type:type
            }]);
        };
        validate = function(listTypeId,type) {
            return SessionService.invoke('/listtype/validate',[{
                listTypeId:listTypeId
                ,type:type
            }]);
        };
        validate = function(listTypeId,classNameId,type) {
            return SessionService.invoke('/listtype/validate',[{
                listTypeId:listTypeId
                ,classNameId:classNameId
                ,type:type
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbbanService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addBan = function(banUserId,serviceContext) {
            return SessionService.invoke('/mbban/add-ban',[{
                banUserId:banUserId
                ,serviceContext:serviceContext
            }]);
        };
        deleteBan = function(banUserId,serviceContext) {
            return SessionService.invoke('/mbban/delete-ban',[{
                banUserId:banUserId
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addCategory = function(parentCategoryId,name,description,displayStyle,emailAddress,inProtocol,inServerName,inServerPort,inUseSSL,inUserName,inPassword,inReadInterval,outEmailAddress,outCustom,outServerName,outServerPort,outUseSSL,outUserName,outPassword,mailingListActive,allowAnonymousEmail,serviceContext) {
            return SessionService.invoke('/mbcategory/add-category',[{
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
        addCategory = function(userId,parentCategoryId,name,description,serviceContext) {
            return SessionService.invoke('/mbcategory/add-category',[{
                userId:userId
                ,parentCategoryId:parentCategoryId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteCategory = function(categoryId,includeTrashedEntries) {
            return SessionService.invoke('/mbcategory/delete-category',[{
                categoryId:categoryId
                ,includeTrashedEntries:includeTrashedEntries
            }]);
        };
        deleteCategory = function(groupId,categoryId) {
            return SessionService.invoke('/mbcategory/delete-category',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        getCategories = function(groupId) {
            return SessionService.invoke('/mbcategory/get-categories',[{
                groupId:groupId
            }]);
        };
        getCategories = function(groupId,status) {
            return SessionService.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,status:status
            }]);
        };
        getCategories = function(groupId,parentCategoryId,start,end) {
            return SessionService.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
                ,start:start
                ,end:end
            }]);
        };
        getCategories = function(groupId,parentCategoryIds,start,end) {
            return SessionService.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryIds:parentCategoryIds
                ,start:start
                ,end:end
            }]);
        };
        getCategories = function(groupId,parentCategoryId,status,start,end) {
            return SessionService.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getCategories = function(groupId,parentCategoryIds,status,start,end) {
            return SessionService.invoke('/mbcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryIds:parentCategoryIds
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getCategoriesCount = function(groupId,parentCategoryId) {
            return SessionService.invoke('/mbcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
            }]);
        };
        getCategoriesCount = function(groupId,parentCategoryIds) {
            return SessionService.invoke('/mbcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryIds:parentCategoryIds
            }]);
        };
        getCategoriesCount = function(groupId,parentCategoryId,status) {
            return SessionService.invoke('/mbcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
                ,status:status
            }]);
        };
        getCategoriesCount = function(groupId,parentCategoryIds,status) {
            return SessionService.invoke('/mbcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryIds:parentCategoryIds
                ,status:status
            }]);
        };
        getCategory = function(categoryId) {
            return SessionService.invoke('/mbcategory/get-category',[{
                categoryId:categoryId
            }]);
        };
        getCategoryIds = function(groupId,categoryId) {
            return SessionService.invoke('/mbcategory/get-category-ids',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        getSubcategoryIds = function(categoryIds,groupId,categoryId) {
            return SessionService.invoke('/mbcategory/get-subcategory-ids',[{
                categoryIds:categoryIds
                ,groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        getSubscribedCategories = function(groupId,userId,start,end) {
            return SessionService.invoke('/mbcategory/get-subscribed-categories',[{
                groupId:groupId
                ,userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getSubscribedCategoriesCount = function(groupId,userId) {
            return SessionService.invoke('/mbcategory/get-subscribed-categories-count',[{
                groupId:groupId
                ,userId:userId
            }]);
        };
        moveCategory = function(categoryId,parentCategoryId,mergeWithParentCategory) {
            return SessionService.invoke('/mbcategory/move-category',[{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,mergeWithParentCategory:mergeWithParentCategory
            }]);
        };
        moveCategoryFromTrash = function(categoryId,newCategoryId) {
            return SessionService.invoke('/mbcategory/move-category-from-trash',[{
                categoryId:categoryId
                ,newCategoryId:newCategoryId
            }]);
        };
        moveCategoryToTrash = function(categoryId) {
            return SessionService.invoke('/mbcategory/move-category-to-trash',[{
                categoryId:categoryId
            }]);
        };
        restoreCategoryFromTrash = function(categoryId) {
            return SessionService.invoke('/mbcategory/restore-category-from-trash',[{
                categoryId:categoryId
            }]);
        };
        subscribeCategory = function(groupId,categoryId) {
            return SessionService.invoke('/mbcategory/subscribe-category',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        unsubscribeCategory = function(groupId,categoryId) {
            return SessionService.invoke('/mbcategory/unsubscribe-category',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        updateCategory = function(categoryId,parentCategoryId,name,description,displayStyle,emailAddress,inProtocol,inServerName,inServerPort,inUseSSL,inUserName,inPassword,inReadInterval,outEmailAddress,outCustom,outServerName,outServerPort,outUseSSL,outUserName,outPassword,mailingListActive,allowAnonymousEmail,mergeWithParentCategory,serviceContext) {
            return SessionService.invoke('/mbcategory/update-category',[{
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
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbmessageService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addDiscussionMessage = function(groupId,className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,threadId,parentMessageId,subject,body,serviceContext) {
            return SessionService.invoke('/mbmessage/add-discussion-message',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,permissionClassName:permissionClassName
                ,permissionClassPK:permissionClassPK
                ,permissionOwnerId:permissionOwnerId
                ,threadId:threadId
                ,parentMessageId:parentMessageId
                ,subject:subject
                ,body:body
                ,serviceContext:serviceContext
            }]);
        };
        addMessage = function(groupId,categoryId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke('/mbmessage/add-message',[{
                groupId:groupId
                ,categoryId:categoryId
                ,subject:subject
                ,body:body
                ,format:format
                ,inputStreamOVPs:inputStreamOVPs
                ,anonymous:anonymous
                ,priority:priority
                ,allowPingbacks:allowPingbacks
                ,serviceContext:serviceContext
            }]);
        };
        addMessage = function(groupId,categoryId,threadId,parentMessageId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke('/mbmessage/add-message',[{
                groupId:groupId
                ,categoryId:categoryId
                ,threadId:threadId
                ,parentMessageId:parentMessageId
                ,subject:subject
                ,body:body
                ,format:format
                ,inputStreamOVPs:inputStreamOVPs
                ,anonymous:anonymous
                ,priority:priority
                ,allowPingbacks:allowPingbacks
                ,serviceContext:serviceContext
            }]);
        };
        addMessage = function(categoryId,subject,body,serviceContext) {
            return SessionService.invoke('/mbmessage/add-message',[{
                categoryId:categoryId
                ,subject:subject
                ,body:body
                ,serviceContext:serviceContext
            }]);
        };
        addMessage = function(parentMessageId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke('/mbmessage/add-message',[{
                parentMessageId:parentMessageId
                ,subject:subject
                ,body:body
                ,format:format
                ,inputStreamOVPs:inputStreamOVPs
                ,anonymous:anonymous
                ,priority:priority
                ,allowPingbacks:allowPingbacks
                ,serviceContext:serviceContext
            }]);
        };
        deleteDiscussionMessage = function(groupId,className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,messageId) {
            return SessionService.invoke('/mbmessage/delete-discussion-message',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,permissionClassName:permissionClassName
                ,permissionClassPK:permissionClassPK
                ,permissionOwnerId:permissionOwnerId
                ,messageId:messageId
            }]);
        };
        deleteMessage = function(messageId) {
            return SessionService.invoke('/mbmessage/delete-message',[{
                messageId:messageId
            }]);
        };
        deleteMessageAttachments = function(messageId) {
            return SessionService.invoke('/mbmessage/delete-message-attachments',[{
                messageId:messageId
            }]);
        };
        getCategoryMessages = function(groupId,categoryId,status,start,end) {
            return SessionService.invoke('/mbmessage/get-category-messages',[{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getCategoryMessagesCount = function(groupId,categoryId,status) {
            return SessionService.invoke('/mbmessage/get-category-messages-count',[{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
            }]);
        };
        getCategoryMessagesRss = function(groupId,categoryId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke('/mbmessage/get-category-messages-rss',[{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
                ,max:max
                ,type:type
                ,version:version
                ,displayStyle:displayStyle
                ,feedURL:feedURL
                ,entryURL:entryURL
                ,themeDisplay:themeDisplay
            }]);
        };
        getCompanyMessagesRss = function(companyId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke('/mbmessage/get-company-messages-rss',[{
                companyId:companyId
                ,status:status
                ,max:max
                ,type:type
                ,version:version
                ,displayStyle:displayStyle
                ,feedURL:feedURL
                ,entryURL:entryURL
                ,themeDisplay:themeDisplay
            }]);
        };
        getGroupMessagesCount = function(groupId,status) {
            return SessionService.invoke('/mbmessage/get-group-messages-count',[{
                groupId:groupId
                ,status:status
            }]);
        };
        getGroupMessagesRss = function(groupId,userId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke('/mbmessage/get-group-messages-rss',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,max:max
                ,type:type
                ,version:version
                ,displayStyle:displayStyle
                ,feedURL:feedURL
                ,entryURL:entryURL
                ,themeDisplay:themeDisplay
            }]);
        };
        getGroupMessagesRss = function(groupId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke('/mbmessage/get-group-messages-rss',[{
                groupId:groupId
                ,status:status
                ,max:max
                ,type:type
                ,version:version
                ,displayStyle:displayStyle
                ,feedURL:feedURL
                ,entryURL:entryURL
                ,themeDisplay:themeDisplay
            }]);
        };
        getMessage = function(messageId) {
            return SessionService.invoke('/mbmessage/get-message',[{
                messageId:messageId
            }]);
        };
        getMessageDisplay = function(messageId,status,threadView,includePrevAndNext) {
            return SessionService.invoke('/mbmessage/get-message-display',[{
                messageId:messageId
                ,status:status
                ,threadView:threadView
                ,includePrevAndNext:includePrevAndNext
            }]);
        };
        getThreadAnswersCount = function(groupId,categoryId,threadId) {
            return SessionService.invoke('/mbmessage/get-thread-answers-count',[{
                groupId:groupId
                ,categoryId:categoryId
                ,threadId:threadId
            }]);
        };
        getThreadMessages = function(groupId,categoryId,threadId,status,start,end) {
            return SessionService.invoke('/mbmessage/get-thread-messages',[{
                groupId:groupId
                ,categoryId:categoryId
                ,threadId:threadId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getThreadMessagesCount = function(groupId,categoryId,threadId,status) {
            return SessionService.invoke('/mbmessage/get-thread-messages-count',[{
                groupId:groupId
                ,categoryId:categoryId
                ,threadId:threadId
                ,status:status
            }]);
        };
        getThreadMessagesRss = function(threadId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke('/mbmessage/get-thread-messages-rss',[{
                threadId:threadId
                ,status:status
                ,max:max
                ,type:type
                ,version:version
                ,displayStyle:displayStyle
                ,feedURL:feedURL
                ,entryURL:entryURL
                ,themeDisplay:themeDisplay
            }]);
        };
        restoreMessageAttachmentFromTrash = function(messageId,fileName) {
            return SessionService.invoke('/mbmessage/restore-message-attachment-from-trash',[{
                messageId:messageId
                ,fileName:fileName
            }]);
        };
        subscribeMessage = function(messageId) {
            return SessionService.invoke('/mbmessage/subscribe-message',[{
                messageId:messageId
            }]);
        };
        unsubscribeMessage = function(messageId) {
            return SessionService.invoke('/mbmessage/unsubscribe-message',[{
                messageId:messageId
            }]);
        };
        updateAnswer = function(messageId,answer,cascade) {
            return SessionService.invoke('/mbmessage/update-answer',[{
                messageId:messageId
                ,answer:answer
                ,cascade:cascade
            }]);
        };
        updateDiscussionMessage = function(className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,messageId,subject,body,serviceContext) {
            return SessionService.invoke('/mbmessage/update-discussion-message',[{
                className:className
                ,classPK:classPK
                ,permissionClassName:permissionClassName
                ,permissionClassPK:permissionClassPK
                ,permissionOwnerId:permissionOwnerId
                ,messageId:messageId
                ,subject:subject
                ,body:body
                ,serviceContext:serviceContext
            }]);
        };
        updateMessage = function(messageId,subject,body,inputStreamOVPs,existingFiles,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke('/mbmessage/update-message',[{
                messageId:messageId
                ,subject:subject
                ,body:body
                ,inputStreamOVPs:inputStreamOVPs
                ,existingFiles:existingFiles
                ,priority:priority
                ,allowPingbacks:allowPingbacks
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbthreadService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        deleteThread = function(threadId) {
            return SessionService.invoke('/mbthread/delete-thread',[{
                threadId:threadId
            }]);
        };
        getGroupThreads = function(groupId,userId,status,start,end) {
            return SessionService.invoke('/mbthread/get-group-threads',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getGroupThreads = function(groupId,userId,modifiedDate,status,start,end) {
            return SessionService.invoke('/mbthread/get-group-threads',[{
                groupId:groupId
                ,userId:userId
                ,modifiedDate:modifiedDate
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getGroupThreads = function(groupId,userId,status,subscribed,start,end) {
            return SessionService.invoke('/mbthread/get-group-threads',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,subscribed:subscribed
                ,start:start
                ,end:end
            }]);
        };
        getGroupThreads = function(groupId,userId,status,subscribed,includeAnonymous,start,end) {
            return SessionService.invoke('/mbthread/get-group-threads',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,subscribed:subscribed
                ,includeAnonymous:includeAnonymous
                ,start:start
                ,end:end
            }]);
        };
        getGroupThreadsCount = function(groupId,userId,status) {
            return SessionService.invoke('/mbthread/get-group-threads-count',[{
                groupId:groupId
                ,userId:userId
                ,status:status
            }]);
        };
        getGroupThreadsCount = function(groupId,userId,modifiedDate,status) {
            return SessionService.invoke('/mbthread/get-group-threads-count',[{
                groupId:groupId
                ,userId:userId
                ,modifiedDate:modifiedDate
                ,status:status
            }]);
        };
        getGroupThreadsCount = function(groupId,userId,status,subscribed) {
            return SessionService.invoke('/mbthread/get-group-threads-count',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,subscribed:subscribed
            }]);
        };
        getGroupThreadsCount = function(groupId,userId,status,subscribed,includeAnonymous) {
            return SessionService.invoke('/mbthread/get-group-threads-count',[{
                groupId:groupId
                ,userId:userId
                ,status:status
                ,subscribed:subscribed
                ,includeAnonymous:includeAnonymous
            }]);
        };
        getThreads = function(groupId,categoryId,status,start,end) {
            return SessionService.invoke('/mbthread/get-threads',[{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getThreadsCount = function(groupId,categoryId,status) {
            return SessionService.invoke('/mbthread/get-threads-count',[{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
            }]);
        };
        lockThread = function(threadId) {
            return SessionService.invoke('/mbthread/lock-thread',[{
                threadId:threadId
            }]);
        };
        moveThread = function(categoryId,threadId) {
            return SessionService.invoke('/mbthread/move-thread',[{
                categoryId:categoryId
                ,threadId:threadId
            }]);
        };
        moveThreadFromTrash = function(categoryId,threadId) {
            return SessionService.invoke('/mbthread/move-thread-from-trash',[{
                categoryId:categoryId
                ,threadId:threadId
            }]);
        };
        moveThreadToTrash = function(threadId) {
            return SessionService.invoke('/mbthread/move-thread-to-trash',[{
                threadId:threadId
            }]);
        };
        restoreThreadFromTrash = function(threadId) {
            return SessionService.invoke('/mbthread/restore-thread-from-trash',[{
                threadId:threadId
            }]);
        };
        search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke('/mbthread/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        search = function(groupId,creatorUserId,startDate,endDate,status,start,end) {
            return SessionService.invoke('/mbthread/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,startDate:startDate
                ,endDate:endDate
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        splitThread = function(messageId,subject,serviceContext) {
            return SessionService.invoke('/mbthread/split-thread',[{
                messageId:messageId
                ,subject:subject
                ,serviceContext:serviceContext
            }]);
        };
        unlockThread = function(threadId) {
            return SessionService.invoke('/mbthread/unlock-thread',[{
                threadId:threadId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdractionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addAction = function(ruleGroupInstanceId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke('/mdraction/add-action',[{
                ruleGroupInstanceId:ruleGroupInstanceId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettings:typeSettings
                ,serviceContext:serviceContext
            }]);
        };
        addAction = function(ruleGroupInstanceId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return SessionService.invoke('/mdraction/add-action',[{
                ruleGroupInstanceId:ruleGroupInstanceId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettingsProperties:typeSettingsProperties
                ,serviceContext:serviceContext
            }]);
        };
        deleteAction = function(actionId) {
            return SessionService.invoke('/mdraction/delete-action',[{
                actionId:actionId
            }]);
        };
        fetchAction = function(actionId) {
            return SessionService.invoke('/mdraction/fetch-action',[{
                actionId:actionId
            }]);
        };
        getAction = function(actionId) {
            return SessionService.invoke('/mdraction/get-action',[{
                actionId:actionId
            }]);
        };
        updateAction = function(actionId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke('/mdraction/update-action',[{
                actionId:actionId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettings:typeSettings
                ,serviceContext:serviceContext
            }]);
        };
        updateAction = function(actionId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return SessionService.invoke('/mdraction/update-action',[{
                actionId:actionId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettingsProperties:typeSettingsProperties
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdrruleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addRule = function(ruleGroupId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke('/mdrrule/add-rule',[{
                ruleGroupId:ruleGroupId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettings:typeSettings
                ,serviceContext:serviceContext
            }]);
        };
        deleteRule = function(ruleId) {
            return SessionService.invoke('/mdrrule/delete-rule',[{
                ruleId:ruleId
            }]);
        };
        fetchRule = function(ruleId) {
            return SessionService.invoke('/mdrrule/fetch-rule',[{
                ruleId:ruleId
            }]);
        };
        getRule = function(ruleId) {
            return SessionService.invoke('/mdrrule/get-rule',[{
                ruleId:ruleId
            }]);
        };
        updateRule = function(ruleId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke('/mdrrule/update-rule',[{
                ruleId:ruleId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettings:typeSettings
                ,serviceContext:serviceContext
            }]);
        };
        updateRule = function(ruleId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return SessionService.invoke('/mdrrule/update-rule',[{
                ruleId:ruleId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,typeSettingsProperties:typeSettingsProperties
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdrrulegroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addRuleGroup = function(groupId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke('/mdrrulegroup/add-rule-group',[{
                groupId:groupId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,serviceContext:serviceContext
            }]);
        };
        copyRuleGroup = function(ruleGroupId,groupId,serviceContext) {
            return SessionService.invoke('/mdrrulegroup/copy-rule-group',[{
                ruleGroupId:ruleGroupId
                ,groupId:groupId
                ,serviceContext:serviceContext
            }]);
        };
        deleteRuleGroup = function(ruleGroupId) {
            return SessionService.invoke('/mdrrulegroup/delete-rule-group',[{
                ruleGroupId:ruleGroupId
            }]);
        };
        fetchRuleGroup = function(ruleGroupId) {
            return SessionService.invoke('/mdrrulegroup/fetch-rule-group',[{
                ruleGroupId:ruleGroupId
            }]);
        };
        getRuleGroup = function(ruleGroupId) {
            return SessionService.invoke('/mdrrulegroup/get-rule-group',[{
                ruleGroupId:ruleGroupId
            }]);
        };
        updateRuleGroup = function(ruleGroupId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke('/mdrrulegroup/update-rule-group',[{
                ruleGroupId:ruleGroupId
                ,nameMap:nameMap
                ,descriptionMap:descriptionMap
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdrrulegroupinstanceService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addRuleGroupInstance = function(groupId,className,classPK,ruleGroupId,serviceContext) {
            return SessionService.invoke('/mdrrulegroupinstance/add-rule-group-instance',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,ruleGroupId:ruleGroupId
                ,serviceContext:serviceContext
            }]);
        };
        addRuleGroupInstance = function(groupId,className,classPK,ruleGroupId,priority,serviceContext) {
            return SessionService.invoke('/mdrrulegroupinstance/add-rule-group-instance',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,ruleGroupId:ruleGroupId
                ,priority:priority
                ,serviceContext:serviceContext
            }]);
        };
        deleteRuleGroupInstance = function(ruleGroupInstanceId) {
            return SessionService.invoke('/mdrrulegroupinstance/delete-rule-group-instance',[{
                ruleGroupInstanceId:ruleGroupInstanceId
            }]);
        };
        getRuleGroupInstances = function(className,classPK,start,end,orderByComparator) {
            return SessionService.invoke('/mdrrulegroupinstance/get-rule-group-instances',[{
                className:className
                ,classPK:classPK
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        getRuleGroupInstancesCount = function(className,classPK) {
            return SessionService.invoke('/mdrrulegroupinstance/get-rule-group-instances-count',[{
                className:className
                ,classPK:classPK
            }]);
        };
        updateRuleGroupInstance = function(ruleGroupInstanceId,priority) {
            return SessionService.invoke('/mdrrulegroupinstance/update-rule-group-instance',[{
                ruleGroupInstanceId:ruleGroupInstanceId
                ,priority:priority
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MembershiprequestService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addMembershipRequest = function(groupId,comments,serviceContext) {
            return SessionService.invoke('/membershiprequest/add-membership-request',[{
                groupId:groupId
                ,comments:comments
                ,serviceContext:serviceContext
            }]);
        };
        deleteMembershipRequests = function(groupId,statusId) {
            return SessionService.invoke('/membershiprequest/delete-membership-requests',[{
                groupId:groupId
                ,statusId:statusId
            }]);
        };
        getMembershipRequest = function(membershipRequestId) {
            return SessionService.invoke('/membershiprequest/get-membership-request',[{
                membershipRequestId:membershipRequestId
            }]);
        };
        updateStatus = function(membershipRequestId,reviewComments,statusId,serviceContext) {
            return SessionService.invoke('/membershiprequest/update-status',[{
                membershipRequestId:membershipRequestId
                ,reviewComments:reviewComments
                ,statusId:statusId
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('OrganizationService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke('/organization/add-group-organizations',[{
                groupId:groupId
                ,organizationIds:organizationIds
            }]);
        };
        addOrganization = function(parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke('/organization/add-organization',[{
                parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,recursable:recursable
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,serviceContext:serviceContext
            }]);
        };
        addOrganization = function(parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke('/organization/add-organization',[{
                parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,orgLabors:orgLabors
                ,phones:phones
                ,websites:websites
                ,serviceContext:serviceContext
            }]);
        };
        addOrganization = function(parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke('/organization/add-organization',[{
                parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,recursable:recursable
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,orgLabors:orgLabors
                ,phones:phones
                ,websites:websites
                ,serviceContext:serviceContext
            }]);
        };
        addOrganization = function(parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke('/organization/add-organization',[{
                parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,serviceContext:serviceContext
            }]);
        };
        addPasswordPolicyOrganizations = function(passwordPolicyId,organizationIds) {
            return SessionService.invoke('/organization/add-password-policy-organizations',[{
                passwordPolicyId:passwordPolicyId
                ,organizationIds:organizationIds
            }]);
        };
        deleteLogo = function(organizationId) {
            return SessionService.invoke('/organization/delete-logo',[{
                organizationId:organizationId
            }]);
        };
        deleteOrganization = function(organizationId) {
            return SessionService.invoke('/organization/delete-organization',[{
                organizationId:organizationId
            }]);
        };
        getManageableOrganizations = function(actionId,max) {
            return SessionService.invoke('/organization/get-manageable-organizations',[{
                actionId:actionId
                ,max:max
            }]);
        };
        getOrganization = function(organizationId) {
            return SessionService.invoke('/organization/get-organization',[{
                organizationId:organizationId
            }]);
        };
        getOrganizationId = function(companyId,name) {
            return SessionService.invoke('/organization/get-organization-id',[{
                companyId:companyId
                ,name:name
            }]);
        };
        getOrganizations = function(companyId,parentOrganizationId) {
            return SessionService.invoke('/organization/get-organizations',[{
                companyId:companyId
                ,parentOrganizationId:parentOrganizationId
            }]);
        };
        getOrganizations = function(companyId,parentOrganizationId,start,end) {
            return SessionService.invoke('/organization/get-organizations',[{
                companyId:companyId
                ,parentOrganizationId:parentOrganizationId
                ,start:start
                ,end:end
            }]);
        };
        getOrganizationsCount = function(companyId,parentOrganizationId) {
            return SessionService.invoke('/organization/get-organizations-count',[{
                companyId:companyId
                ,parentOrganizationId:parentOrganizationId
            }]);
        };
        getUserOrganizations = function(userId) {
            return SessionService.invoke('/organization/get-user-organizations',[{
                userId:userId
            }]);
        };
        setGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke('/organization/set-group-organizations',[{
                groupId:groupId
                ,organizationIds:organizationIds
            }]);
        };
        unsetGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke('/organization/unset-group-organizations',[{
                groupId:groupId
                ,organizationIds:organizationIds
            }]);
        };
        unsetPasswordPolicyOrganizations = function(passwordPolicyId,organizationIds) {
            return SessionService.invoke('/organization/unset-password-policy-organizations',[{
                passwordPolicyId:passwordPolicyId
                ,organizationIds:organizationIds
            }]);
        };
        updateOrganization = function(organizationId,parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke('/organization/update-organization',[{
                organizationId:organizationId
                ,parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,serviceContext:serviceContext
            }]);
        };
        updateOrganization = function(organizationId,parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke('/organization/update-organization',[{
                organizationId:organizationId
                ,parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,recursable:recursable
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,serviceContext:serviceContext
            }]);
        };
        updateOrganization = function(organizationId,parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke('/organization/update-organization',[{
                organizationId:organizationId
                ,parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,orgLabors:orgLabors
                ,phones:phones
                ,websites:websites
                ,serviceContext:serviceContext
            }]);
        };
        updateOrganization = function(organizationId,parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke('/organization/update-organization',[{
                organizationId:organizationId
                ,parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,recursable:recursable
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,orgLabors:orgLabors
                ,phones:phones
                ,websites:websites
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('OrglaborService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addOrgLabor = function(organizationId,typeId,sunOpen,sunClose,monOpen,monClose,tueOpen,tueClose,wedOpen,wedClose,thuOpen,thuClose,friOpen,friClose,satOpen,satClose) {
            return SessionService.invoke('/orglabor/add-org-labor',[{
                organizationId:organizationId
                ,typeId:typeId
                ,sunOpen:sunOpen
                ,sunClose:sunClose
                ,monOpen:monOpen
                ,monClose:monClose
                ,tueOpen:tueOpen
                ,tueClose:tueClose
                ,wedOpen:wedOpen
                ,wedClose:wedClose
                ,thuOpen:thuOpen
                ,thuClose:thuClose
                ,friOpen:friOpen
                ,friClose:friClose
                ,satOpen:satOpen
                ,satClose:satClose
            }]);
        };
        deleteOrgLabor = function(orgLaborId) {
            return SessionService.invoke('/orglabor/delete-org-labor',[{
                orgLaborId:orgLaborId
            }]);
        };
        getOrgLabor = function(orgLaborId) {
            return SessionService.invoke('/orglabor/get-org-labor',[{
                orgLaborId:orgLaborId
            }]);
        };
        getOrgLabors = function(organizationId) {
            return SessionService.invoke('/orglabor/get-org-labors',[{
                organizationId:organizationId
            }]);
        };
        updateOrgLabor = function(orgLaborId,typeId,sunOpen,sunClose,monOpen,monClose,tueOpen,tueClose,wedOpen,wedClose,thuOpen,thuClose,friOpen,friClose,satOpen,satClose) {
            return SessionService.invoke('/orglabor/update-org-labor',[{
                orgLaborId:orgLaborId
                ,typeId:typeId
                ,sunOpen:sunOpen
                ,sunClose:sunClose
                ,monOpen:monOpen
                ,monClose:monClose
                ,tueOpen:tueOpen
                ,tueClose:tueClose
                ,wedOpen:wedOpen
                ,wedClose:wedClose
                ,thuOpen:thuOpen
                ,thuClose:thuClose
                ,friOpen:friOpen
                ,friClose:friClose
                ,satOpen:satOpen
                ,satClose:satClose
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PasswordpolicyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addPasswordPolicy = function(name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge) {
            return SessionService.invoke('/passwordpolicy/add-password-policy',[{
                name:name
                ,description:description
                ,changeable:changeable
                ,changeRequired:changeRequired
                ,minAge:minAge
                ,checkSyntax:checkSyntax
                ,allowDictionaryWords:allowDictionaryWords
                ,minAlphanumeric:minAlphanumeric
                ,minLength:minLength
                ,minLowerCase:minLowerCase
                ,minNumbers:minNumbers
                ,minSymbols:minSymbols
                ,minUpperCase:minUpperCase
                ,history:history
                ,historyCount:historyCount
                ,expireable:expireable
                ,maxAge:maxAge
                ,warningTime:warningTime
                ,graceLimit:graceLimit
                ,lockout:lockout
                ,maxFailure:maxFailure
                ,lockoutDuration:lockoutDuration
                ,resetFailureCount:resetFailureCount
                ,resetTicketMaxAge:resetTicketMaxAge
            }]);
        };
        addPasswordPolicy = function(name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,regex,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge,serviceContext) {
            return SessionService.invoke('/passwordpolicy/add-password-policy',[{
                name:name
                ,description:description
                ,changeable:changeable
                ,changeRequired:changeRequired
                ,minAge:minAge
                ,checkSyntax:checkSyntax
                ,allowDictionaryWords:allowDictionaryWords
                ,minAlphanumeric:minAlphanumeric
                ,minLength:minLength
                ,minLowerCase:minLowerCase
                ,minNumbers:minNumbers
                ,minSymbols:minSymbols
                ,minUpperCase:minUpperCase
                ,regex:regex
                ,history:history
                ,historyCount:historyCount
                ,expireable:expireable
                ,maxAge:maxAge
                ,warningTime:warningTime
                ,graceLimit:graceLimit
                ,lockout:lockout
                ,maxFailure:maxFailure
                ,lockoutDuration:lockoutDuration
                ,resetFailureCount:resetFailureCount
                ,resetTicketMaxAge:resetTicketMaxAge
                ,serviceContext:serviceContext
            }]);
        };
        deletePasswordPolicy = function(passwordPolicyId) {
            return SessionService.invoke('/passwordpolicy/delete-password-policy',[{
                passwordPolicyId:passwordPolicyId
            }]);
        };
        updatePasswordPolicy = function(passwordPolicyId,name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge) {
            return SessionService.invoke('/passwordpolicy/update-password-policy',[{
                passwordPolicyId:passwordPolicyId
                ,name:name
                ,description:description
                ,changeable:changeable
                ,changeRequired:changeRequired
                ,minAge:minAge
                ,checkSyntax:checkSyntax
                ,allowDictionaryWords:allowDictionaryWords
                ,minAlphanumeric:minAlphanumeric
                ,minLength:minLength
                ,minLowerCase:minLowerCase
                ,minNumbers:minNumbers
                ,minSymbols:minSymbols
                ,minUpperCase:minUpperCase
                ,history:history
                ,historyCount:historyCount
                ,expireable:expireable
                ,maxAge:maxAge
                ,warningTime:warningTime
                ,graceLimit:graceLimit
                ,lockout:lockout
                ,maxFailure:maxFailure
                ,lockoutDuration:lockoutDuration
                ,resetFailureCount:resetFailureCount
                ,resetTicketMaxAge:resetTicketMaxAge
            }]);
        };
        updatePasswordPolicy = function(passwordPolicyId,name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,regex,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge,serviceContext) {
            return SessionService.invoke('/passwordpolicy/update-password-policy',[{
                passwordPolicyId:passwordPolicyId
                ,name:name
                ,description:description
                ,changeable:changeable
                ,changeRequired:changeRequired
                ,minAge:minAge
                ,checkSyntax:checkSyntax
                ,allowDictionaryWords:allowDictionaryWords
                ,minAlphanumeric:minAlphanumeric
                ,minLength:minLength
                ,minLowerCase:minLowerCase
                ,minNumbers:minNumbers
                ,minSymbols:minSymbols
                ,minUpperCase:minUpperCase
                ,regex:regex
                ,history:history
                ,historyCount:historyCount
                ,expireable:expireable
                ,maxAge:maxAge
                ,warningTime:warningTime
                ,graceLimit:graceLimit
                ,lockout:lockout
                ,maxFailure:maxFailure
                ,lockoutDuration:lockoutDuration
                ,resetFailureCount:resetFailureCount
                ,resetTicketMaxAge:resetTicketMaxAge
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PermissionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        checkPermission = function(groupId,name,primKey) {
            return SessionService.invoke('/permission/check-permission',[{
                groupId:groupId
                ,name:name
                ,primKey:primKey
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PhoneService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addPhone = function(className,classPK,number,extension,typeId,primary) {
            return SessionService.invoke('/phone/add-phone',[{
                className:className
                ,classPK:classPK
                ,number:number
                ,extension:extension
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        addPhone = function(className,classPK,number,extension,typeId,primary,serviceContext) {
            return SessionService.invoke('/phone/add-phone',[{
                className:className
                ,classPK:classPK
                ,number:number
                ,extension:extension
                ,typeId:typeId
                ,primary:primary
                ,serviceContext:serviceContext
            }]);
        };
        deletePhone = function(phoneId) {
            return SessionService.invoke('/phone/delete-phone',[{
                phoneId:phoneId
            }]);
        };
        getPhone = function(phoneId) {
            return SessionService.invoke('/phone/get-phone',[{
                phoneId:phoneId
            }]);
        };
        getPhones = function(className,classPK) {
            return SessionService.invoke('/phone/get-phones',[{
                className:className
                ,classPK:classPK
            }]);
        };
        updatePhone = function(phoneId,number,extension,typeId,primary) {
            return SessionService.invoke('/phone/update-phone',[{
                phoneId:phoneId
                ,number:number
                ,extension:extension
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PluginsettingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        updatePluginSetting = function(companyId,pluginId,pluginType,roles,active) {
            return SessionService.invoke('/pluginsetting/update-plugin-setting',[{
                companyId:companyId
                ,pluginId:pluginId
                ,pluginType:pluginType
                ,roles:roles
                ,active:active
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PollsquestionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addQuestion = function(titleMap,descriptionMap,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,choices,serviceContext) {
            return SessionService.invoke('/pollsquestion/add-question',[{
                titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,expirationDateMonth:expirationDateMonth
                ,expirationDateDay:expirationDateDay
                ,expirationDateYear:expirationDateYear
                ,expirationDateHour:expirationDateHour
                ,expirationDateMinute:expirationDateMinute
                ,neverExpire:neverExpire
                ,choices:choices
                ,serviceContext:serviceContext
            }]);
        };
        deleteQuestion = function(questionId) {
            return SessionService.invoke('/pollsquestion/delete-question',[{
                questionId:questionId
            }]);
        };
        getQuestion = function(questionId) {
            return SessionService.invoke('/pollsquestion/get-question',[{
                questionId:questionId
            }]);
        };
        updateQuestion = function(questionId,titleMap,descriptionMap,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,choices,serviceContext) {
            return SessionService.invoke('/pollsquestion/update-question',[{
                questionId:questionId
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,expirationDateMonth:expirationDateMonth
                ,expirationDateDay:expirationDateDay
                ,expirationDateYear:expirationDateYear
                ,expirationDateHour:expirationDateHour
                ,expirationDateMinute:expirationDateMinute
                ,neverExpire:neverExpire
                ,choices:choices
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PollsvoteService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addVote = function(questionId,choiceId,serviceContext) {
            return SessionService.invoke('/pollsvote/add-vote',[{
                questionId:questionId
                ,choiceId:choiceId
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PortalService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getAutoDeployDirectory = function() {
            return SessionService.invoke('/portal/get-auto-deploy-directory',[{
                
            }]);
        };
        getBuildNumber = function() {
            return SessionService.invoke('/portal/get-build-number',[{
                
            }]);
        };
        testAddClassNameAndTestTransactionPortletBar_PortalRollback = function(transactionPortletBarText) {
            return SessionService.invoke('/portal/test-add-class-name-and-test-transaction-portlet-bar_-portal-rollback',[{
                transactionPortletBarText:transactionPortletBarText
            }]);
        };
        testAddClassNameAndTestTransactionPortletBar_PortletRollback = function(transactionPortletBarText) {
            return SessionService.invoke('/portal/test-add-class-name-and-test-transaction-portlet-bar_-portlet-rollback',[{
                transactionPortletBarText:transactionPortletBarText
            }]);
        };
        testAddClassNameAndTestTransactionPortletBar_Success = function(transactionPortletBarText) {
            return SessionService.invoke('/portal/test-add-class-name-and-test-transaction-portlet-bar_-success',[{
                transactionPortletBarText:transactionPortletBarText
            }]);
        };
        testAddClassName_Rollback = function(classNameValue) {
            return SessionService.invoke('/portal/test-add-class-name_-rollback',[{
                classNameValue:classNameValue
            }]);
        };
        testAddClassName_Success = function(classNameValue) {
            return SessionService.invoke('/portal/test-add-class-name_-success',[{
                classNameValue:classNameValue
            }]);
        };
        testAutoSyncHibernateSessionStateOnTxCreation = function() {
            return SessionService.invoke('/portal/test-auto-sync-hibernate-session-state-on-tx-creation',[{
                
            }]);
        };
        testDeleteClassName = function() {
            return SessionService.invoke('/portal/test-delete-class-name',[{
                
            }]);
        };
        testGetBuildNumber = function() {
            return SessionService.invoke('/portal/test-get-build-number',[{
                
            }]);
        };
        testGetUserId = function() {
            return SessionService.invoke('/portal/test-get-user-id',[{
                
            }]);
        };
        testHasClassName = function() {
            return SessionService.invoke('/portal/test-has-class-name',[{
                
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PortletService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getWarPortlets = function() {
            return SessionService.invoke('/portlet/get-war-portlets',[{
                
            }]);
        };
        updatePortlet = function(companyId,portletId,roles,active) {
            return SessionService.invoke('/portlet/update-portlet',[{
                companyId:companyId
                ,portletId:portletId
                ,roles:roles
                ,active:active
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PortletpreferencesService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        deleteArchivedPreferences = function(portletItemId) {
            return SessionService.invoke('/portletpreferences/delete-archived-preferences',[{
                portletItemId:portletItemId
            }]);
        };
        restoreArchivedPreferences = function(groupId,layout,portletId,portletItem,preferences) {
            return SessionService.invoke('/portletpreferences/restore-archived-preferences',[{
                groupId:groupId
                ,layout:layout
                ,portletId:portletId
                ,portletItem:portletItem
                ,preferences:preferences
            }]);
        };
        restoreArchivedPreferences = function(groupId,layout,portletId,portletItemId,preferences) {
            return SessionService.invoke('/portletpreferences/restore-archived-preferences',[{
                groupId:groupId
                ,layout:layout
                ,portletId:portletId
                ,portletItemId:portletItemId
                ,preferences:preferences
            }]);
        };
        restoreArchivedPreferences = function(groupId,name,layout,portletId,preferences) {
            return SessionService.invoke('/portletpreferences/restore-archived-preferences',[{
                groupId:groupId
                ,name:name
                ,layout:layout
                ,portletId:portletId
                ,preferences:preferences
            }]);
        };
        updateArchivePreferences = function(userId,groupId,name,portletId,preferences) {
            return SessionService.invoke('/portletpreferences/update-archive-preferences',[{
                userId:userId
                ,groupId:groupId
                ,name:name
                ,portletId:portletId
                ,preferences:preferences
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RatingsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        deleteEntry = function(className,classPK) {
            return SessionService.invoke('/ratingsentry/delete-entry',[{
                className:className
                ,classPK:classPK
            }]);
        };
        updateEntry = function(className,classPK,score) {
            return SessionService.invoke('/ratingsentry/update-entry',[{
                className:className
                ,classPK:classPK
                ,score:score
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RegionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addRegion = function(countryId,regionCode,name,active) {
            return SessionService.invoke('/region/add-region',[{
                countryId:countryId
                ,regionCode:regionCode
                ,name:name
                ,active:active
            }]);
        };
        fetchRegion = function(countryId,regionCode) {
            return SessionService.invoke('/region/fetch-region',[{
                countryId:countryId
                ,regionCode:regionCode
            }]);
        };
        getRegion = function(regionId) {
            return SessionService.invoke('/region/get-region',[{
                regionId:regionId
            }]);
        };
        getRegion = function(countryId,regionCode) {
            return SessionService.invoke('/region/get-region',[{
                countryId:countryId
                ,regionCode:regionCode
            }]);
        };
        getRegions = function() {
            return SessionService.invoke('/region/get-regions',[{
                
            }]);
        };
        getRegions = function(active) {
            return SessionService.invoke('/region/get-regions',[{
                active:active
            }]);
        };
        getRegions = function(countryId) {
            return SessionService.invoke('/region/get-regions',[{
                countryId:countryId
            }]);
        };
        getRegions = function(countryId,active) {
            return SessionService.invoke('/region/get-regions',[{
                countryId:countryId
                ,active:active
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RepositoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addRepository = function(groupId,classNameId,parentFolderId,name,description,portletId,typeSettingsProperties,serviceContext) {
            return SessionService.invoke('/repository/add-repository',[{
                groupId:groupId
                ,classNameId:classNameId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,portletId:portletId
                ,typeSettingsProperties:typeSettingsProperties
                ,serviceContext:serviceContext
            }]);
        };
        checkRepository = function(repositoryId) {
            return SessionService.invoke('/repository/check-repository',[{
                repositoryId:repositoryId
            }]);
        };
        deleteRepository = function(repositoryId) {
            return SessionService.invoke('/repository/delete-repository',[{
                repositoryId:repositoryId
            }]);
        };
        getLocalRepositoryImpl = function(repositoryId) {
            return SessionService.invoke('/repository/get-local-repository-impl',[{
                repositoryId:repositoryId
            }]);
        };
        getLocalRepositoryImpl = function(folderId,fileEntryId,fileVersionId) {
            return SessionService.invoke('/repository/get-local-repository-impl',[{
                folderId:folderId
                ,fileEntryId:fileEntryId
                ,fileVersionId:fileVersionId
            }]);
        };
        getRepository = function(repositoryId) {
            return SessionService.invoke('/repository/get-repository',[{
                repositoryId:repositoryId
            }]);
        };
        getRepositoryImpl = function(repositoryId) {
            return SessionService.invoke('/repository/get-repository-impl',[{
                repositoryId:repositoryId
            }]);
        };
        getRepositoryImpl = function(folderId,fileEntryId,fileVersionId) {
            return SessionService.invoke('/repository/get-repository-impl',[{
                folderId:folderId
                ,fileEntryId:fileEntryId
                ,fileVersionId:fileVersionId
            }]);
        };
        getSupportedConfigurations = function(classNameId) {
            return SessionService.invoke('/repository/get-supported-configurations',[{
                classNameId:classNameId
            }]);
        };
        getSupportedParameters = function(classNameId,configuration) {
            return SessionService.invoke('/repository/get-supported-parameters',[{
                classNameId:classNameId
                ,configuration:configuration
            }]);
        };
        getTypeSettingsProperties = function(repositoryId) {
            return SessionService.invoke('/repository/get-type-settings-properties',[{
                repositoryId:repositoryId
            }]);
        };
        updateRepository = function(repositoryId,name,description) {
            return SessionService.invoke('/repository/update-repository',[{
                repositoryId:repositoryId
                ,name:name
                ,description:description
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ResourceblockService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addCompanyScopePermission = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke('/resourceblock/add-company-scope-permission',[{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        addGroupScopePermission = function(scopeGroupId,companyId,groupId,name,roleId,actionId) {
            return SessionService.invoke('/resourceblock/add-group-scope-permission',[{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,groupId:groupId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        addIndividualScopePermission = function(companyId,groupId,name,primKey,roleId,actionId) {
            return SessionService.invoke('/resourceblock/add-individual-scope-permission',[{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,primKey:primKey
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        removeAllGroupScopePermissions = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke('/resourceblock/remove-all-group-scope-permissions',[{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        removeCompanyScopePermission = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke('/resourceblock/remove-company-scope-permission',[{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        removeGroupScopePermission = function(scopeGroupId,companyId,groupId,name,roleId,actionId) {
            return SessionService.invoke('/resourceblock/remove-group-scope-permission',[{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,groupId:groupId
                ,name:name
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        removeIndividualScopePermission = function(companyId,groupId,name,primKey,roleId,actionId) {
            return SessionService.invoke('/resourceblock/remove-individual-scope-permission',[{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,primKey:primKey
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        setCompanyScopePermissions = function(scopeGroupId,companyId,name,roleId,actionIds) {
            return SessionService.invoke('/resourceblock/set-company-scope-permissions',[{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,name:name
                ,roleId:roleId
                ,actionIds:actionIds
            }]);
        };
        setGroupScopePermissions = function(scopeGroupId,companyId,groupId,name,roleId,actionIds) {
            return SessionService.invoke('/resourceblock/set-group-scope-permissions',[{
                scopeGroupId:scopeGroupId
                ,companyId:companyId
                ,groupId:groupId
                ,name:name
                ,roleId:roleId
                ,actionIds:actionIds
            }]);
        };
        setIndividualScopePermissions = function(companyId,groupId,name,primKey,roleIdsToActionIds) {
            return SessionService.invoke('/resourceblock/set-individual-scope-permissions',[{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,primKey:primKey
                ,roleIdsToActionIds:roleIdsToActionIds
            }]);
        };
        setIndividualScopePermissions = function(companyId,groupId,name,primKey,roleId,actionIds) {
            return SessionService.invoke('/resourceblock/set-individual-scope-permissions',[{
                companyId:companyId
                ,groupId:groupId
                ,name:name
                ,primKey:primKey
                ,roleId:roleId
                ,actionIds:actionIds
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ResourcepermissionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addResourcePermission = function(groupId,companyId,name,scope,primKey,roleId,actionId) {
            return SessionService.invoke('/resourcepermission/add-resource-permission',[{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,scope:scope
                ,primKey:primKey
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        removeResourcePermission = function(groupId,companyId,name,scope,primKey,roleId,actionId) {
            return SessionService.invoke('/resourcepermission/remove-resource-permission',[{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,scope:scope
                ,primKey:primKey
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        removeResourcePermissions = function(groupId,companyId,name,scope,roleId,actionId) {
            return SessionService.invoke('/resourcepermission/remove-resource-permissions',[{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,scope:scope
                ,roleId:roleId
                ,actionId:actionId
            }]);
        };
        setIndividualResourcePermissions = function(groupId,companyId,name,primKey,roleIdsToActionIds) {
            return SessionService.invoke('/resourcepermission/set-individual-resource-permissions',[{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,primKey:primKey
                ,roleIdsToActionIds:roleIdsToActionIds
            }]);
        };
        setIndividualResourcePermissions = function(groupId,companyId,name,primKey,roleId,actionIds) {
            return SessionService.invoke('/resourcepermission/set-individual-resource-permissions',[{
                groupId:groupId
                ,companyId:companyId
                ,name:name
                ,primKey:primKey
                ,roleId:roleId
                ,actionIds:actionIds
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RoleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addRole = function(name,titleMap,descriptionMap,type) {
            return SessionService.invoke('/role/add-role',[{
                name:name
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,type:type
            }]);
        };
        addRole = function(className,classPK,name,titleMap,descriptionMap,type,subtype,serviceContext) {
            return SessionService.invoke('/role/add-role',[{
                className:className
                ,classPK:classPK
                ,name:name
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,type:type
                ,subtype:subtype
                ,serviceContext:serviceContext
            }]);
        };
        addUserRoles = function(userId,roleIds) {
            return SessionService.invoke('/role/add-user-roles',[{
                userId:userId
                ,roleIds:roleIds
            }]);
        };
        deleteRole = function(roleId) {
            return SessionService.invoke('/role/delete-role',[{
                roleId:roleId
            }]);
        };
        getGroupRoles = function(groupId) {
            return SessionService.invoke('/role/get-group-roles',[{
                groupId:groupId
            }]);
        };
        getRole = function(roleId) {
            return SessionService.invoke('/role/get-role',[{
                roleId:roleId
            }]);
        };
        getRole = function(companyId,name) {
            return SessionService.invoke('/role/get-role',[{
                companyId:companyId
                ,name:name
            }]);
        };
        getUserGroupGroupRoles = function(userId,groupId) {
            return SessionService.invoke('/role/get-user-group-group-roles',[{
                userId:userId
                ,groupId:groupId
            }]);
        };
        getUserGroupRoles = function(userId,groupId) {
            return SessionService.invoke('/role/get-user-group-roles',[{
                userId:userId
                ,groupId:groupId
            }]);
        };
        getUserRelatedRoles = function(userId,groups) {
            return SessionService.invoke('/role/get-user-related-roles',[{
                userId:userId
                ,groups:groups
            }]);
        };
        getUserRoles = function(userId) {
            return SessionService.invoke('/role/get-user-roles',[{
                userId:userId
            }]);
        };
        hasUserRole = function(userId,companyId,name,inherited) {
            return SessionService.invoke('/role/has-user-role',[{
                userId:userId
                ,companyId:companyId
                ,name:name
                ,inherited:inherited
            }]);
        };
        hasUserRoles = function(userId,companyId,names,inherited) {
            return SessionService.invoke('/role/has-user-roles',[{
                userId:userId
                ,companyId:companyId
                ,names:names
                ,inherited:inherited
            }]);
        };
        unsetUserRoles = function(userId,roleIds) {
            return SessionService.invoke('/role/unset-user-roles',[{
                userId:userId
                ,roleIds:roleIds
            }]);
        };
        updateRole = function(roleId,name,titleMap,descriptionMap,subtype,serviceContext) {
            return SessionService.invoke('/role/update-role',[{
                roleId:roleId
                ,name:name
                ,titleMap:titleMap
                ,descriptionMap:descriptionMap
                ,subtype:subtype
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ScframeworkversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addFrameworkVersion = function(name,url,active,priority,serviceContext) {
            return SessionService.invoke('/scframeworkversion/add-framework-version',[{
                name:name
                ,url:url
                ,active:active
                ,priority:priority
                ,serviceContext:serviceContext
            }]);
        };
        deleteFrameworkVersion = function(frameworkVersionId) {
            return SessionService.invoke('/scframeworkversion/delete-framework-version',[{
                frameworkVersionId:frameworkVersionId
            }]);
        };
        getFrameworkVersion = function(frameworkVersionId) {
            return SessionService.invoke('/scframeworkversion/get-framework-version',[{
                frameworkVersionId:frameworkVersionId
            }]);
        };
        getFrameworkVersions = function(groupId,active) {
            return SessionService.invoke('/scframeworkversion/get-framework-versions',[{
                groupId:groupId
                ,active:active
            }]);
        };
        getFrameworkVersions = function(groupId,active,start,end) {
            return SessionService.invoke('/scframeworkversion/get-framework-versions',[{
                groupId:groupId
                ,active:active
                ,start:start
                ,end:end
            }]);
        };
        updateFrameworkVersion = function(frameworkVersionId,name,url,active,priority) {
            return SessionService.invoke('/scframeworkversion/update-framework-version',[{
                frameworkVersionId:frameworkVersionId
                ,name:name
                ,url:url
                ,active:active
                ,priority:priority
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SclicenseService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addLicense = function(name,url,openSource,active,recommended) {
            return SessionService.invoke('/sclicense/add-license',[{
                name:name
                ,url:url
                ,openSource:openSource
                ,active:active
                ,recommended:recommended
            }]);
        };
        deleteLicense = function(licenseId) {
            return SessionService.invoke('/sclicense/delete-license',[{
                licenseId:licenseId
            }]);
        };
        getLicense = function(licenseId) {
            return SessionService.invoke('/sclicense/get-license',[{
                licenseId:licenseId
            }]);
        };
        updateLicense = function(licenseId,name,url,openSource,active,recommended) {
            return SessionService.invoke('/sclicense/update-license',[{
                licenseId:licenseId
                ,name:name
                ,url:url
                ,openSource:openSource
                ,active:active
                ,recommended:recommended
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ScproductentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addProductEntry = function(name,type,tags,shortDescription,longDescription,pageURL,author,repoGroupId,repoArtifactId,licenseIds,thumbnails,fullImages,serviceContext) {
            return SessionService.invoke('/scproductentry/add-product-entry',[{
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
        deleteProductEntry = function(productEntryId) {
            return SessionService.invoke('/scproductentry/delete-product-entry',[{
                productEntryId:productEntryId
            }]);
        };
        getProductEntry = function(productEntryId) {
            return SessionService.invoke('/scproductentry/get-product-entry',[{
                productEntryId:productEntryId
            }]);
        };
        updateProductEntry = function(productEntryId,name,type,tags,shortDescription,longDescription,pageURL,author,repoGroupId,repoArtifactId,licenseIds,thumbnails,fullImages) {
            return SessionService.invoke('/scproductentry/update-product-entry',[{
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
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ScproductversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addProductVersion = function(productEntryId,version,changeLog,downloadPageURL,directDownloadURL,testDirectDownloadURL,repoStoreArtifact,frameworkVersionIds,serviceContext) {
            return SessionService.invoke('/scproductversion/add-product-version',[{
                productEntryId:productEntryId
                ,version:version
                ,changeLog:changeLog
                ,downloadPageURL:downloadPageURL
                ,directDownloadURL:directDownloadURL
                ,testDirectDownloadURL:testDirectDownloadURL
                ,repoStoreArtifact:repoStoreArtifact
                ,frameworkVersionIds:frameworkVersionIds
                ,serviceContext:serviceContext
            }]);
        };
        deleteProductVersion = function(productVersionId) {
            return SessionService.invoke('/scproductversion/delete-product-version',[{
                productVersionId:productVersionId
            }]);
        };
        getProductVersion = function(productVersionId) {
            return SessionService.invoke('/scproductversion/get-product-version',[{
                productVersionId:productVersionId
            }]);
        };
        getProductVersions = function(productEntryId,start,end) {
            return SessionService.invoke('/scproductversion/get-product-versions',[{
                productEntryId:productEntryId
                ,start:start
                ,end:end
            }]);
        };
        getProductVersionsCount = function(productEntryId) {
            return SessionService.invoke('/scproductversion/get-product-versions-count',[{
                productEntryId:productEntryId
            }]);
        };
        updateProductVersion = function(productVersionId,version,changeLog,downloadPageURL,directDownloadURL,testDirectDownloadURL,repoStoreArtifact,frameworkVersionIds) {
            return SessionService.invoke('/scproductversion/update-product-version',[{
                productVersionId:productVersionId
                ,version:version
                ,changeLog:changeLog
                ,downloadPageURL:downloadPageURL
                ,directDownloadURL:directDownloadURL
                ,testDirectDownloadURL:testDirectDownloadURL
                ,repoStoreArtifact:repoStoreArtifact
                ,frameworkVersionIds:frameworkVersionIds
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addCategory = function(parentCategoryId,name,description,serviceContext) {
            return SessionService.invoke('/shoppingcategory/add-category',[{
                parentCategoryId:parentCategoryId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteCategory = function(categoryId) {
            return SessionService.invoke('/shoppingcategory/delete-category',[{
                categoryId:categoryId
            }]);
        };
        getCategories = function(groupId) {
            return SessionService.invoke('/shoppingcategory/get-categories',[{
                groupId:groupId
            }]);
        };
        getCategories = function(groupId,parentCategoryId,start,end) {
            return SessionService.invoke('/shoppingcategory/get-categories',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
                ,start:start
                ,end:end
            }]);
        };
        getCategoriesCount = function(groupId,parentCategoryId) {
            return SessionService.invoke('/shoppingcategory/get-categories-count',[{
                groupId:groupId
                ,parentCategoryId:parentCategoryId
            }]);
        };
        getCategory = function(categoryId) {
            return SessionService.invoke('/shoppingcategory/get-category',[{
                categoryId:categoryId
            }]);
        };
        getSubcategoryIds = function(categoryIds,groupId,categoryId) {
            return SessionService.invoke('/shoppingcategory/get-subcategory-ids',[{
                categoryIds:categoryIds
                ,groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        updateCategory = function(categoryId,parentCategoryId,name,description,mergeWithParentCategory,serviceContext) {
            return SessionService.invoke('/shoppingcategory/update-category',[{
                categoryId:categoryId
                ,parentCategoryId:parentCategoryId
                ,name:name
                ,description:description
                ,mergeWithParentCategory:mergeWithParentCategory
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingcouponService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addCoupon = function(code,autoCode,name,description,startDateMonth,startDateDay,startDateYear,startDateHour,startDateMinute,endDateMonth,endDateDay,endDateYear,endDateHour,endDateMinute,neverExpire,active,limitCategories,limitSkus,minOrder,discount,discountType,serviceContext) {
            return SessionService.invoke('/shoppingcoupon/add-coupon',[{
                code:code
                ,autoCode:autoCode
                ,name:name
                ,description:description
                ,startDateMonth:startDateMonth
                ,startDateDay:startDateDay
                ,startDateYear:startDateYear
                ,startDateHour:startDateHour
                ,startDateMinute:startDateMinute
                ,endDateMonth:endDateMonth
                ,endDateDay:endDateDay
                ,endDateYear:endDateYear
                ,endDateHour:endDateHour
                ,endDateMinute:endDateMinute
                ,neverExpire:neverExpire
                ,active:active
                ,limitCategories:limitCategories
                ,limitSkus:limitSkus
                ,minOrder:minOrder
                ,discount:discount
                ,discountType:discountType
                ,serviceContext:serviceContext
            }]);
        };
        deleteCoupon = function(groupId,couponId) {
            return SessionService.invoke('/shoppingcoupon/delete-coupon',[{
                groupId:groupId
                ,couponId:couponId
            }]);
        };
        getCoupon = function(groupId,couponId) {
            return SessionService.invoke('/shoppingcoupon/get-coupon',[{
                groupId:groupId
                ,couponId:couponId
            }]);
        };
        search = function(groupId,companyId,code,active,discountType,andOperator,start,end) {
            return SessionService.invoke('/shoppingcoupon/search',[{
                groupId:groupId
                ,companyId:companyId
                ,code:code
                ,active:active
                ,discountType:discountType
                ,andOperator:andOperator
                ,start:start
                ,end:end
            }]);
        };
        updateCoupon = function(couponId,name,description,startDateMonth,startDateDay,startDateYear,startDateHour,startDateMinute,endDateMonth,endDateDay,endDateYear,endDateHour,endDateMinute,neverExpire,active,limitCategories,limitSkus,minOrder,discount,discountType,serviceContext) {
            return SessionService.invoke('/shoppingcoupon/update-coupon',[{
                couponId:couponId
                ,name:name
                ,description:description
                ,startDateMonth:startDateMonth
                ,startDateDay:startDateDay
                ,startDateYear:startDateYear
                ,startDateHour:startDateHour
                ,startDateMinute:startDateMinute
                ,endDateMonth:endDateMonth
                ,endDateDay:endDateDay
                ,endDateYear:endDateYear
                ,endDateHour:endDateHour
                ,endDateMinute:endDateMinute
                ,neverExpire:neverExpire
                ,active:active
                ,limitCategories:limitCategories
                ,limitSkus:limitSkus
                ,minOrder:minOrder
                ,discount:discount
                ,discountType:discountType
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingitemService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addBookItems = function(groupId,categoryId,isbns) {
            return SessionService.invoke('/shoppingitem/add-book-items',[{
                groupId:groupId
                ,categoryId:categoryId
                ,isbns:isbns
            }]);
        };
        addItem = function(groupId,categoryId,sku,name,description,properties,fieldsQuantities,requiresShipping,stockQuantity,featured,sale,smallImage,smallImageURL,smallFile,mediumImage,mediumImageURL,mediumFile,largeImage,largeImageURL,largeFile,itemFields,itemPrices,serviceContext) {
            return SessionService.invoke('/shoppingitem/add-item',[{
                groupId:groupId
                ,categoryId:categoryId
                ,sku:sku
                ,name:name
                ,description:description
                ,properties:properties
                ,fieldsQuantities:fieldsQuantities
                ,requiresShipping:requiresShipping
                ,stockQuantity:stockQuantity
                ,featured:featured
                ,sale:sale
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,mediumImage:mediumImage
                ,mediumImageURL:mediumImageURL
                ,mediumFile:mediumFile
                ,largeImage:largeImage
                ,largeImageURL:largeImageURL
                ,largeFile:largeFile
                ,itemFields:itemFields
                ,itemPrices:itemPrices
                ,serviceContext:serviceContext
            }]);
        };
        deleteItem = function(itemId) {
            return SessionService.invoke('/shoppingitem/delete-item',[{
                itemId:itemId
            }]);
        };
        getCategoriesItemsCount = function(groupId,categoryIds) {
            return SessionService.invoke('/shoppingitem/get-categories-items-count',[{
                groupId:groupId
                ,categoryIds:categoryIds
            }]);
        };
        getItem = function(itemId) {
            return SessionService.invoke('/shoppingitem/get-item',[{
                itemId:itemId
            }]);
        };
        getItems = function(groupId,categoryId) {
            return SessionService.invoke('/shoppingitem/get-items',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        getItems = function(groupId,categoryId,start,end,obc) {
            return SessionService.invoke('/shoppingitem/get-items',[{
                groupId:groupId
                ,categoryId:categoryId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        getItemsCount = function(groupId,categoryId) {
            return SessionService.invoke('/shoppingitem/get-items-count',[{
                groupId:groupId
                ,categoryId:categoryId
            }]);
        };
        getItemsPrevAndNext = function(itemId,obc) {
            return SessionService.invoke('/shoppingitem/get-items-prev-and-next',[{
                itemId:itemId
                ,obc:obc
            }]);
        };
        updateItem = function(itemId,groupId,categoryId,sku,name,description,properties,fieldsQuantities,requiresShipping,stockQuantity,featured,sale,smallImage,smallImageURL,smallFile,mediumImage,mediumImageURL,mediumFile,largeImage,largeImageURL,largeFile,itemFields,itemPrices,serviceContext) {
            return SessionService.invoke('/shoppingitem/update-item',[{
                itemId:itemId
                ,groupId:groupId
                ,categoryId:categoryId
                ,sku:sku
                ,name:name
                ,description:description
                ,properties:properties
                ,fieldsQuantities:fieldsQuantities
                ,requiresShipping:requiresShipping
                ,stockQuantity:stockQuantity
                ,featured:featured
                ,sale:sale
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,mediumImage:mediumImage
                ,mediumImageURL:mediumImageURL
                ,mediumFile:mediumFile
                ,largeImage:largeImage
                ,largeImageURL:largeImageURL
                ,largeFile:largeFile
                ,itemFields:itemFields
                ,itemPrices:itemPrices
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingorderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        completeOrder = function(groupId,number,ppTxnId,ppPaymentStatus,ppPaymentGross,ppReceiverEmail,ppPayerEmail,serviceContext) {
            return SessionService.invoke('/shoppingorder/complete-order',[{
                groupId:groupId
                ,number:number
                ,ppTxnId:ppTxnId
                ,ppPaymentStatus:ppPaymentStatus
                ,ppPaymentGross:ppPaymentGross
                ,ppReceiverEmail:ppReceiverEmail
                ,ppPayerEmail:ppPayerEmail
                ,serviceContext:serviceContext
            }]);
        };
        deleteOrder = function(groupId,orderId) {
            return SessionService.invoke('/shoppingorder/delete-order',[{
                groupId:groupId
                ,orderId:orderId
            }]);
        };
        getOrder = function(groupId,orderId) {
            return SessionService.invoke('/shoppingorder/get-order',[{
                groupId:groupId
                ,orderId:orderId
            }]);
        };
        sendEmail = function(groupId,orderId,emailType,serviceContext) {
            return SessionService.invoke('/shoppingorder/send-email',[{
                groupId:groupId
                ,orderId:orderId
                ,emailType:emailType
                ,serviceContext:serviceContext
            }]);
        };
        updateOrder = function(groupId,orderId,billingFirstName,billingLastName,billingEmailAddress,billingCompany,billingStreet,billingCity,billingState,billingZip,billingCountry,billingPhone,shipToBilling,shippingFirstName,shippingLastName,shippingEmailAddress,shippingCompany,shippingStreet,shippingCity,shippingState,shippingZip,shippingCountry,shippingPhone,ccName,ccType,ccNumber,ccExpMonth,ccExpYear,ccVerNumber,comments) {
            return SessionService.invoke('/shoppingorder/update-order',[{
                groupId:groupId
                ,orderId:orderId
                ,billingFirstName:billingFirstName
                ,billingLastName:billingLastName
                ,billingEmailAddress:billingEmailAddress
                ,billingCompany:billingCompany
                ,billingStreet:billingStreet
                ,billingCity:billingCity
                ,billingState:billingState
                ,billingZip:billingZip
                ,billingCountry:billingCountry
                ,billingPhone:billingPhone
                ,shipToBilling:shipToBilling
                ,shippingFirstName:shippingFirstName
                ,shippingLastName:shippingLastName
                ,shippingEmailAddress:shippingEmailAddress
                ,shippingCompany:shippingCompany
                ,shippingStreet:shippingStreet
                ,shippingCity:shippingCity
                ,shippingState:shippingState
                ,shippingZip:shippingZip
                ,shippingCountry:shippingCountry
                ,shippingPhone:shippingPhone
                ,ccName:ccName
                ,ccType:ccType
                ,ccNumber:ccNumber
                ,ccExpMonth:ccExpMonth
                ,ccExpYear:ccExpYear
                ,ccVerNumber:ccVerNumber
                ,comments:comments
            }]);
        };
        updateOrder = function(groupId,orderId,ppTxnId,ppPaymentStatus,ppPaymentGross,ppReceiverEmail,ppPayerEmail) {
            return SessionService.invoke('/shoppingorder/update-order',[{
                groupId:groupId
                ,orderId:orderId
                ,ppTxnId:ppTxnId
                ,ppPaymentStatus:ppPaymentStatus
                ,ppPaymentGross:ppPaymentGross
                ,ppReceiverEmail:ppReceiverEmail
                ,ppPayerEmail:ppPayerEmail
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialactivityService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getActivities = function(className,start,end) {
            return SessionService.invoke('/socialactivity/get-activities',[{
                className:className
                ,start:start
                ,end:end
            }]);
        };
        getActivities = function(classNameId,start,end) {
            return SessionService.invoke('/socialactivity/get-activities',[{
                classNameId:classNameId
                ,start:start
                ,end:end
            }]);
        };
        getActivities = function(mirrorActivityId,className,classPK,start,end) {
            return SessionService.invoke('/socialactivity/get-activities',[{
                mirrorActivityId:mirrorActivityId
                ,className:className
                ,classPK:classPK
                ,start:start
                ,end:end
            }]);
        };
        getActivities = function(mirrorActivityId,classNameId,classPK,start,end) {
            return SessionService.invoke('/socialactivity/get-activities',[{
                mirrorActivityId:mirrorActivityId
                ,classNameId:classNameId
                ,classPK:classPK
                ,start:start
                ,end:end
            }]);
        };
        getActivitiesCount = function(className) {
            return SessionService.invoke('/socialactivity/get-activities-count',[{
                className:className
            }]);
        };
        getActivitiesCount = function(classNameId) {
            return SessionService.invoke('/socialactivity/get-activities-count',[{
                classNameId:classNameId
            }]);
        };
        getActivitiesCount = function(mirrorActivityId,className,classPK) {
            return SessionService.invoke('/socialactivity/get-activities-count',[{
                mirrorActivityId:mirrorActivityId
                ,className:className
                ,classPK:classPK
            }]);
        };
        getActivitiesCount = function(mirrorActivityId,classNameId,classPK) {
            return SessionService.invoke('/socialactivity/get-activities-count',[{
                mirrorActivityId:mirrorActivityId
                ,classNameId:classNameId
                ,classPK:classPK
            }]);
        };
        getActivity = function(activityId) {
            return SessionService.invoke('/socialactivity/get-activity',[{
                activityId:activityId
            }]);
        };
        getActivitySetActivities = function(activitySetId,start,end) {
            return SessionService.invoke('/socialactivity/get-activity-set-activities',[{
                activitySetId:activitySetId
                ,start:start
                ,end:end
            }]);
        };
        getGroupActivities = function(groupId,start,end) {
            return SessionService.invoke('/socialactivity/get-group-activities',[{
                groupId:groupId
                ,start:start
                ,end:end
            }]);
        };
        getGroupActivitiesCount = function(groupId) {
            return SessionService.invoke('/socialactivity/get-group-activities-count',[{
                groupId:groupId
            }]);
        };
        getGroupUsersActivities = function(groupId,start,end) {
            return SessionService.invoke('/socialactivity/get-group-users-activities',[{
                groupId:groupId
                ,start:start
                ,end:end
            }]);
        };
        getGroupUsersActivitiesCount = function(groupId) {
            return SessionService.invoke('/socialactivity/get-group-users-activities-count',[{
                groupId:groupId
            }]);
        };
        getMirrorActivity = function(mirrorActivityId) {
            return SessionService.invoke('/socialactivity/get-mirror-activity',[{
                mirrorActivityId:mirrorActivityId
            }]);
        };
        getOrganizationActivities = function(organizationId,start,end) {
            return SessionService.invoke('/socialactivity/get-organization-activities',[{
                organizationId:organizationId
                ,start:start
                ,end:end
            }]);
        };
        getOrganizationActivitiesCount = function(organizationId) {
            return SessionService.invoke('/socialactivity/get-organization-activities-count',[{
                organizationId:organizationId
            }]);
        };
        getOrganizationUsersActivities = function(organizationId,start,end) {
            return SessionService.invoke('/socialactivity/get-organization-users-activities',[{
                organizationId:organizationId
                ,start:start
                ,end:end
            }]);
        };
        getOrganizationUsersActivitiesCount = function(organizationId) {
            return SessionService.invoke('/socialactivity/get-organization-users-activities-count',[{
                organizationId:organizationId
            }]);
        };
        getRelationActivities = function(userId,start,end) {
            return SessionService.invoke('/socialactivity/get-relation-activities',[{
                userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getRelationActivities = function(userId,type,start,end) {
            return SessionService.invoke('/socialactivity/get-relation-activities',[{
                userId:userId
                ,type:type
                ,start:start
                ,end:end
            }]);
        };
        getRelationActivitiesCount = function(userId) {
            return SessionService.invoke('/socialactivity/get-relation-activities-count',[{
                userId:userId
            }]);
        };
        getRelationActivitiesCount = function(userId,type) {
            return SessionService.invoke('/socialactivity/get-relation-activities-count',[{
                userId:userId
                ,type:type
            }]);
        };
        getUserActivities = function(userId,start,end) {
            return SessionService.invoke('/socialactivity/get-user-activities',[{
                userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getUserActivitiesCount = function(userId) {
            return SessionService.invoke('/socialactivity/get-user-activities-count',[{
                userId:userId
            }]);
        };
        getUserGroupsActivities = function(userId,start,end) {
            return SessionService.invoke('/socialactivity/get-user-groups-activities',[{
                userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getUserGroupsActivitiesCount = function(userId) {
            return SessionService.invoke('/socialactivity/get-user-groups-activities-count',[{
                userId:userId
            }]);
        };
        getUserGroupsAndOrganizationsActivities = function(userId,start,end) {
            return SessionService.invoke('/socialactivity/get-user-groups-and-organizations-activities',[{
                userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getUserGroupsAndOrganizationsActivitiesCount = function(userId) {
            return SessionService.invoke('/socialactivity/get-user-groups-and-organizations-activities-count',[{
                userId:userId
            }]);
        };
        getUserOrganizationsActivities = function(userId,start,end) {
            return SessionService.invoke('/socialactivity/get-user-organizations-activities',[{
                userId:userId
                ,start:start
                ,end:end
            }]);
        };
        getUserOrganizationsActivitiesCount = function(userId) {
            return SessionService.invoke('/socialactivity/get-user-organizations-activities-count',[{
                userId:userId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialactivitysettingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getActivityDefinition = function(groupId,className,activityType) {
            return SessionService.invoke('/socialactivitysetting/get-activity-definition',[{
                groupId:groupId
                ,className:className
                ,activityType:activityType
            }]);
        };
        getActivityDefinitions = function(groupId,className) {
            return SessionService.invoke('/socialactivitysetting/get-activity-definitions',[{
                groupId:groupId
                ,className:className
            }]);
        };
        getActivitySettings = function(groupId) {
            return SessionService.invoke('/socialactivitysetting/get-activity-settings',[{
                groupId:groupId
            }]);
        };
        getJsonActivityDefinitions = function(groupId,className) {
            return SessionService.invoke('/socialactivitysetting/get-json-activity-definitions',[{
                groupId:groupId
                ,className:className
            }]);
        };
        updateActivitySetting = function(groupId,className,enabled) {
            return SessionService.invoke('/socialactivitysetting/update-activity-setting',[{
                groupId:groupId
                ,className:className
                ,enabled:enabled
            }]);
        };
        updateActivitySetting = function(groupId,className,activityType,activityCounterDefinition) {
            return SessionService.invoke('/socialactivitysetting/update-activity-setting',[{
                groupId:groupId
                ,className:className
                ,activityType:activityType
                ,activityCounterDefinition:activityCounterDefinition
            }]);
        };
        updateActivitySettings = function(groupId,className,activityType,activityCounterDefinitions) {
            return SessionService.invoke('/socialactivitysetting/update-activity-settings',[{
                groupId:groupId
                ,className:className
                ,activityType:activityType
                ,activityCounterDefinitions:activityCounterDefinitions
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialrequestService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        updateRequest = function(requestId,status,themeDisplay) {
            return SessionService.invoke('/socialrequest/update-request',[{
                requestId:requestId
                ,status:status
                ,themeDisplay:themeDisplay
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('StagingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        cleanUpStagingRequest = function(stagingRequestId) {
            return SessionService.invoke('/staging/clean-up-staging-request',[{
                stagingRequestId:stagingRequestId
            }]);
        };
        createStagingRequest = function(groupId,checksum) {
            return SessionService.invoke('/staging/create-staging-request',[{
                groupId:groupId
                ,checksum:checksum
            }]);
        };
        publishStagingRequest = function(stagingRequestId,privateLayout,parameterMap) {
            return SessionService.invoke('/staging/publish-staging-request',[{
                stagingRequestId:stagingRequestId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
            }]);
        };
        updateStagingRequest = function(stagingRequestId,fileName,bytes) {
            return SessionService.invoke('/staging/update-staging-request',[{
                stagingRequestId:stagingRequestId
                ,fileName:fileName
                ,bytes:bytes
            }]);
        };
        validateStagingRequest = function(stagingRequestId,privateLayout,parameterMap) {
            return SessionService.invoke('/staging/validate-staging-request',[{
                stagingRequestId:stagingRequestId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('TeamService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addTeam = function(groupId,name,description) {
            return SessionService.invoke('/team/add-team',[{
                groupId:groupId
                ,name:name
                ,description:description
            }]);
        };
        deleteTeam = function(teamId) {
            return SessionService.invoke('/team/delete-team',[{
                teamId:teamId
            }]);
        };
        getGroupTeams = function(groupId) {
            return SessionService.invoke('/team/get-group-teams',[{
                groupId:groupId
            }]);
        };
        getTeam = function(teamId) {
            return SessionService.invoke('/team/get-team',[{
                teamId:teamId
            }]);
        };
        getTeam = function(groupId,name) {
            return SessionService.invoke('/team/get-team',[{
                groupId:groupId
                ,name:name
            }]);
        };
        getUserTeams = function(userId) {
            return SessionService.invoke('/team/get-user-teams',[{
                userId:userId
            }]);
        };
        getUserTeams = function(userId,groupId) {
            return SessionService.invoke('/team/get-user-teams',[{
                userId:userId
                ,groupId:groupId
            }]);
        };
        hasUserTeam = function(userId,teamId) {
            return SessionService.invoke('/team/has-user-team',[{
                userId:userId
                ,teamId:teamId
            }]);
        };
        updateTeam = function(teamId,name,description) {
            return SessionService.invoke('/team/update-team',[{
                teamId:teamId
                ,name:name
                ,description:description
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ThemeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        getThemes = function(companyId) {
            return SessionService.invoke('/theme/get-themes',[{
                companyId:companyId
            }]);
        };
        getWarThemes = function() {
            return SessionService.invoke('/theme/get-war-themes',[{
                
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('TrashentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        deleteEntries = function(entryIds) {
            return SessionService.invoke('/trashentry/delete-entries',[{
                entryIds:entryIds
            }]);
        };
        deleteEntries = function(groupId) {
            return SessionService.invoke('/trashentry/delete-entries',[{
                groupId:groupId
            }]);
        };
        deleteEntry = function(entryId) {
            return SessionService.invoke('/trashentry/delete-entry',[{
                entryId:entryId
            }]);
        };
        deleteEntry = function(className,classPK) {
            return SessionService.invoke('/trashentry/delete-entry',[{
                className:className
                ,classPK:classPK
            }]);
        };
        getEntries = function(groupId) {
            return SessionService.invoke('/trashentry/get-entries',[{
                groupId:groupId
            }]);
        };
        getEntries = function(groupId,start,end,obc) {
            return SessionService.invoke('/trashentry/get-entries',[{
                groupId:groupId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        moveEntry = function(className,classPK,destinationContainerModelId,serviceContext) {
            return SessionService.invoke('/trashentry/move-entry',[{
                className:className
                ,classPK:classPK
                ,destinationContainerModelId:destinationContainerModelId
                ,serviceContext:serviceContext
            }]);
        };
        restoreEntry = function(entryId) {
            return SessionService.invoke('/trashentry/restore-entry',[{
                entryId:entryId
            }]);
        };
        restoreEntry = function(entryId,overrideClassPK,name) {
            return SessionService.invoke('/trashentry/restore-entry',[{
                entryId:entryId
                ,overrideClassPK:overrideClassPK
                ,name:name
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UserService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addGroupUsers = function(groupId,userIds,serviceContext) {
            return SessionService.invoke('/user/add-group-users',[{
                groupId:groupId
                ,userIds:userIds
                ,serviceContext:serviceContext
            }]);
        };
        addOrganizationUsers = function(organizationId,userIds) {
            return SessionService.invoke('/user/add-organization-users',[{
                organizationId:organizationId
                ,userIds:userIds
            }]);
        };
        addPasswordPolicyUsers = function(passwordPolicyId,userIds) {
            return SessionService.invoke('/user/add-password-policy-users',[{
                passwordPolicyId:passwordPolicyId
                ,userIds:userIds
            }]);
        };
        addRoleUsers = function(roleId,userIds) {
            return SessionService.invoke('/user/add-role-users',[{
                roleId:roleId
                ,userIds:userIds
            }]);
        };
        addTeamUsers = function(teamId,userIds) {
            return SessionService.invoke('/user/add-team-users',[{
                teamId:teamId
                ,userIds:userIds
            }]);
        };
        addUser = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,sendEmail,serviceContext) {
            return SessionService.invoke('/user/add-user',[{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupIds:userGroupIds
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }]);
        };
        addUser = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,sendEmail,serviceContext) {
            return SessionService.invoke('/user/add-user',[{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupIds:userGroupIds
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,phones:phones
                ,websites:websites
                ,announcementsDelivers:announcementsDelivers
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }]);
        };
        addUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke('/user/add-user-group-users',[{
                userGroupId:userGroupId
                ,userIds:userIds
            }]);
        };
        addUserWithWorkflow = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,sendEmail,serviceContext) {
            return SessionService.invoke('/user/add-user-with-workflow',[{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupIds:userGroupIds
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }]);
        };
        addUserWithWorkflow = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,sendEmail,serviceContext) {
            return SessionService.invoke('/user/add-user-with-workflow',[{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupIds:userGroupIds
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,phones:phones
                ,websites:websites
                ,announcementsDelivers:announcementsDelivers
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }]);
        };
        deletePortrait = function(userId) {
            return SessionService.invoke('/user/delete-portrait',[{
                userId:userId
            }]);
        };
        deleteRoleUser = function(roleId,userId) {
            return SessionService.invoke('/user/delete-role-user',[{
                roleId:roleId
                ,userId:userId
            }]);
        };
        deleteUser = function(userId) {
            return SessionService.invoke('/user/delete-user',[{
                userId:userId
            }]);
        };
        getCompanyUsers = function(companyId,start,end) {
            return SessionService.invoke('/user/get-company-users',[{
                companyId:companyId
                ,start:start
                ,end:end
            }]);
        };
        getCompanyUsersCount = function(companyId) {
            return SessionService.invoke('/user/get-company-users-count',[{
                companyId:companyId
            }]);
        };
        getGroupUserIds = function(groupId) {
            return SessionService.invoke('/user/get-group-user-ids',[{
                groupId:groupId
            }]);
        };
        getGroupUsers = function(groupId) {
            return SessionService.invoke('/user/get-group-users',[{
                groupId:groupId
            }]);
        };
        getOrganizationUserIds = function(organizationId) {
            return SessionService.invoke('/user/get-organization-user-ids',[{
                organizationId:organizationId
            }]);
        };
        getOrganizationUsers = function(organizationId) {
            return SessionService.invoke('/user/get-organization-users',[{
                organizationId:organizationId
            }]);
        };
        getRoleUserIds = function(roleId) {
            return SessionService.invoke('/user/get-role-user-ids',[{
                roleId:roleId
            }]);
        };
        getUserByEmailAddress = function(companyId,emailAddress) {
            return SessionService.invoke('/user/get-user-by-email-address',[{
                companyId:companyId
                ,emailAddress:emailAddress
            }]);
        };
        getUserById = function(userId) {
            return SessionService.invoke('/user/get-user-by-id',[{
                userId:userId
            }]);
        };
        getUserByScreenName = function(companyId,screenName) {
            return SessionService.invoke('/user/get-user-by-screen-name',[{
                companyId:companyId
                ,screenName:screenName
            }]);
        };
        getUserGroupUsers = function(userGroupId) {
            return SessionService.invoke('/user/get-user-group-users',[{
                userGroupId:userGroupId
            }]);
        };
        getUserIdByEmailAddress = function(companyId,emailAddress) {
            return SessionService.invoke('/user/get-user-id-by-email-address',[{
                companyId:companyId
                ,emailAddress:emailAddress
            }]);
        };
        getUserIdByScreenName = function(companyId,screenName) {
            return SessionService.invoke('/user/get-user-id-by-screen-name',[{
                companyId:companyId
                ,screenName:screenName
            }]);
        };
        hasGroupUser = function(groupId,userId) {
            return SessionService.invoke('/user/has-group-user',[{
                groupId:groupId
                ,userId:userId
            }]);
        };
        hasRoleUser = function(roleId,userId) {
            return SessionService.invoke('/user/has-role-user',[{
                roleId:roleId
                ,userId:userId
            }]);
        };
        hasRoleUser = function(companyId,name,userId,inherited) {
            return SessionService.invoke('/user/has-role-user',[{
                companyId:companyId
                ,name:name
                ,userId:userId
                ,inherited:inherited
            }]);
        };
        setRoleUsers = function(roleId,userIds) {
            return SessionService.invoke('/user/set-role-users',[{
                roleId:roleId
                ,userIds:userIds
            }]);
        };
        setUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke('/user/set-user-group-users',[{
                userGroupId:userGroupId
                ,userIds:userIds
            }]);
        };
        unsetGroupTeamsUsers = function(groupId,userIds) {
            return SessionService.invoke('/user/unset-group-teams-users',[{
                groupId:groupId
                ,userIds:userIds
            }]);
        };
        unsetGroupUsers = function(groupId,userIds,serviceContext) {
            return SessionService.invoke('/user/unset-group-users',[{
                groupId:groupId
                ,userIds:userIds
                ,serviceContext:serviceContext
            }]);
        };
        unsetOrganizationUsers = function(organizationId,userIds) {
            return SessionService.invoke('/user/unset-organization-users',[{
                organizationId:organizationId
                ,userIds:userIds
            }]);
        };
        unsetPasswordPolicyUsers = function(passwordPolicyId,userIds) {
            return SessionService.invoke('/user/unset-password-policy-users',[{
                passwordPolicyId:passwordPolicyId
                ,userIds:userIds
            }]);
        };
        unsetRoleUsers = function(roleId,userIds) {
            return SessionService.invoke('/user/unset-role-users',[{
                roleId:roleId
                ,userIds:userIds
            }]);
        };
        unsetTeamUsers = function(teamId,userIds) {
            return SessionService.invoke('/user/unset-team-users',[{
                teamId:teamId
                ,userIds:userIds
            }]);
        };
        unsetUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke('/user/unset-user-group-users',[{
                userGroupId:userGroupId
                ,userIds:userIds
            }]);
        };
        updateAgreedToTermsOfUse = function(userId,agreedToTermsOfUse) {
            return SessionService.invoke('/user/update-agreed-to-terms-of-use',[{
                userId:userId
                ,agreedToTermsOfUse:agreedToTermsOfUse
            }]);
        };
        updateEmailAddress = function(userId,password,emailAddress1,emailAddress2,serviceContext) {
            return SessionService.invoke('/user/update-email-address',[{
                userId:userId
                ,password:password
                ,emailAddress1:emailAddress1
                ,emailAddress2:emailAddress2
                ,serviceContext:serviceContext
            }]);
        };
        updateIncompleteUser = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,updateUserInformation,sendEmail,serviceContext) {
            return SessionService.invoke('/user/update-incomplete-user',[{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,updateUserInformation:updateUserInformation
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }]);
        };
        updateLockoutById = function(userId,lockout) {
            return SessionService.invoke('/user/update-lockout-by-id',[{
                userId:userId
                ,lockout:lockout
            }]);
        };
        updateOpenId = function(userId,openId) {
            return SessionService.invoke('/user/update-open-id',[{
                userId:userId
                ,openId:openId
            }]);
        };
        updateOrganizations = function(userId,organizationIds,serviceContext) {
            return SessionService.invoke('/user/update-organizations',[{
                userId:userId
                ,organizationIds:organizationIds
                ,serviceContext:serviceContext
            }]);
        };
        updatePassword = function(userId,password1,password2,passwordReset) {
            return SessionService.invoke('/user/update-password',[{
                userId:userId
                ,password1:password1
                ,password2:password2
                ,passwordReset:passwordReset
            }]);
        };
        updatePortrait = function(userId,bytes) {
            return SessionService.invoke('/user/update-portrait',[{
                userId:userId
                ,bytes:bytes
            }]);
        };
        updateReminderQuery = function(userId,question,answer) {
            return SessionService.invoke('/user/update-reminder-query',[{
                userId:userId
                ,question:question
                ,answer:answer
            }]);
        };
        updateScreenName = function(userId,screenName) {
            return SessionService.invoke('/user/update-screen-name',[{
                userId:userId
                ,screenName:screenName
            }]);
        };
        updateStatus = function(userId,status) {
            return SessionService.invoke('/user/update-status',[{
                userId:userId
                ,status:status
            }]);
        };
        updateStatus = function(userId,status,serviceContext) {
            return SessionService.invoke('/user/update-status',[{
                userId:userId
                ,status:status
                ,serviceContext:serviceContext
            }]);
        };
        updateUser = function(userId,oldPassword,newPassword1,newPassword2,passwordReset,reminderQueryQuestion,reminderQueryAnswer,screenName,emailAddress,facebookId,openId,languageId,timeZoneId,greeting,comments,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,smsSn,aimSn,facebookSn,icqSn,jabberSn,msnSn,mySpaceSn,skypeSn,twitterSn,ymSn,jobTitle,groupIds,organizationIds,roleIds,userGroupRoles,userGroupIds,serviceContext) {
            return SessionService.invoke('/user/update-user',[{
                userId:userId
                ,oldPassword:oldPassword
                ,newPassword1:newPassword1
                ,newPassword2:newPassword2
                ,passwordReset:passwordReset
                ,reminderQueryQuestion:reminderQueryQuestion
                ,reminderQueryAnswer:reminderQueryAnswer
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,languageId:languageId
                ,timeZoneId:timeZoneId
                ,greeting:greeting
                ,comments:comments
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,smsSn:smsSn
                ,aimSn:aimSn
                ,facebookSn:facebookSn
                ,icqSn:icqSn
                ,jabberSn:jabberSn
                ,msnSn:msnSn
                ,mySpaceSn:mySpaceSn
                ,skypeSn:skypeSn
                ,twitterSn:twitterSn
                ,ymSn:ymSn
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupRoles:userGroupRoles
                ,userGroupIds:userGroupIds
                ,serviceContext:serviceContext
            }]);
        };
        updateUser = function(userId,oldPassword,newPassword1,newPassword2,passwordReset,reminderQueryQuestion,reminderQueryAnswer,screenName,emailAddress,facebookId,openId,languageId,timeZoneId,greeting,comments,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,smsSn,aimSn,facebookSn,icqSn,jabberSn,msnSn,mySpaceSn,skypeSn,twitterSn,ymSn,jobTitle,groupIds,organizationIds,roleIds,userGroupRoles,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,serviceContext) {
            return SessionService.invoke('/user/update-user',[{
                userId:userId
                ,oldPassword:oldPassword
                ,newPassword1:newPassword1
                ,newPassword2:newPassword2
                ,passwordReset:passwordReset
                ,reminderQueryQuestion:reminderQueryQuestion
                ,reminderQueryAnswer:reminderQueryAnswer
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,languageId:languageId
                ,timeZoneId:timeZoneId
                ,greeting:greeting
                ,comments:comments
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,smsSn:smsSn
                ,aimSn:aimSn
                ,facebookSn:facebookSn
                ,icqSn:icqSn
                ,jabberSn:jabberSn
                ,msnSn:msnSn
                ,mySpaceSn:mySpaceSn
                ,skypeSn:skypeSn
                ,twitterSn:twitterSn
                ,ymSn:ymSn
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupRoles:userGroupRoles
                ,userGroupIds:userGroupIds
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,phones:phones
                ,websites:websites
                ,announcementsDelivers:announcementsDelivers
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UsergroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addGroupUserGroups = function(groupId,userGroupIds) {
            return SessionService.invoke('/usergroup/add-group-user-groups',[{
                groupId:groupId
                ,userGroupIds:userGroupIds
            }]);
        };
        addTeamUserGroups = function(teamId,userGroupIds) {
            return SessionService.invoke('/usergroup/add-team-user-groups',[{
                teamId:teamId
                ,userGroupIds:userGroupIds
            }]);
        };
        addUserGroup = function(name,description) {
            return SessionService.invoke('/usergroup/add-user-group',[{
                name:name
                ,description:description
            }]);
        };
        addUserGroup = function(name,description,serviceContext) {
            return SessionService.invoke('/usergroup/add-user-group',[{
                name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteUserGroup = function(userGroupId) {
            return SessionService.invoke('/usergroup/delete-user-group',[{
                userGroupId:userGroupId
            }]);
        };
        getUserGroup = function(name) {
            return SessionService.invoke('/usergroup/get-user-group',[{
                name:name
            }]);
        };
        getUserGroup = function(userGroupId) {
            return SessionService.invoke('/usergroup/get-user-group',[{
                userGroupId:userGroupId
            }]);
        };
        getUserUserGroups = function(userId) {
            return SessionService.invoke('/usergroup/get-user-user-groups',[{
                userId:userId
            }]);
        };
        unsetGroupUserGroups = function(groupId,userGroupIds) {
            return SessionService.invoke('/usergroup/unset-group-user-groups',[{
                groupId:groupId
                ,userGroupIds:userGroupIds
            }]);
        };
        unsetTeamUserGroups = function(teamId,userGroupIds) {
            return SessionService.invoke('/usergroup/unset-team-user-groups',[{
                teamId:teamId
                ,userGroupIds:userGroupIds
            }]);
        };
        updateUserGroup = function(userGroupId,name,description) {
            return SessionService.invoke('/usergroup/update-user-group',[{
                userGroupId:userGroupId
                ,name:name
                ,description:description
            }]);
        };
        updateUserGroup = function(userGroupId,name,description,serviceContext) {
            return SessionService.invoke('/usergroup/update-user-group',[{
                userGroupId:userGroupId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UsergroupgrouproleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addUserGroupGroupRoles = function(userGroupId,groupId,roleIds) {
            return SessionService.invoke('/usergroupgrouprole/add-user-group-group-roles',[{
                userGroupId:userGroupId
                ,groupId:groupId
                ,roleIds:roleIds
            }]);
        };
        addUserGroupGroupRoles = function(userGroupIds,groupId,roleId) {
            return SessionService.invoke('/usergroupgrouprole/add-user-group-group-roles',[{
                userGroupIds:userGroupIds
                ,groupId:groupId
                ,roleId:roleId
            }]);
        };
        deleteUserGroupGroupRoles = function(userGroupId,groupId,roleIds) {
            return SessionService.invoke('/usergroupgrouprole/delete-user-group-group-roles',[{
                userGroupId:userGroupId
                ,groupId:groupId
                ,roleIds:roleIds
            }]);
        };
        deleteUserGroupGroupRoles = function(userGroupIds,groupId,roleId) {
            return SessionService.invoke('/usergroupgrouprole/delete-user-group-group-roles',[{
                userGroupIds:userGroupIds
                ,groupId:groupId
                ,roleId:roleId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UsergrouproleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addUserGroupRoles = function(userId,groupId,roleIds) {
            return SessionService.invoke('/usergrouprole/add-user-group-roles',[{
                userId:userId
                ,groupId:groupId
                ,roleIds:roleIds
            }]);
        };
        addUserGroupRoles = function(userIds,groupId,roleId) {
            return SessionService.invoke('/usergrouprole/add-user-group-roles',[{
                userIds:userIds
                ,groupId:groupId
                ,roleId:roleId
            }]);
        };
        deleteUserGroupRoles = function(userId,groupId,roleIds) {
            return SessionService.invoke('/usergrouprole/delete-user-group-roles',[{
                userId:userId
                ,groupId:groupId
                ,roleIds:roleIds
            }]);
        };
        deleteUserGroupRoles = function(userIds,groupId,roleId) {
            return SessionService.invoke('/usergrouprole/delete-user-group-roles',[{
                userIds:userIds
                ,groupId:groupId
                ,roleId:roleId
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('WebsiteService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addWebsite = function(className,classPK,url,typeId,primary) {
            return SessionService.invoke('/website/add-website',[{
                className:className
                ,classPK:classPK
                ,url:url
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        addWebsite = function(className,classPK,url,typeId,primary,serviceContext) {
            return SessionService.invoke('/website/add-website',[{
                className:className
                ,classPK:classPK
                ,url:url
                ,typeId:typeId
                ,primary:primary
                ,serviceContext:serviceContext
            }]);
        };
        deleteWebsite = function(websiteId) {
            return SessionService.invoke('/website/delete-website',[{
                websiteId:websiteId
            }]);
        };
        getWebsite = function(websiteId) {
            return SessionService.invoke('/website/get-website',[{
                websiteId:websiteId
            }]);
        };
        getWebsites = function(className,classPK) {
            return SessionService.invoke('/website/get-websites',[{
                className:className
                ,classPK:classPK
            }]);
        };
        updateWebsite = function(websiteId,url,typeId,primary) {
            return SessionService.invoke('/website/update-website',[{
                websiteId:websiteId
                ,url:url
                ,typeId:typeId
                ,primary:primary
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('WikinodeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        addNode = function(name,description,serviceContext) {
            return SessionService.invoke('/wikinode/add-node',[{
                name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        deleteNode = function(nodeId) {
            return SessionService.invoke('/wikinode/delete-node',[{
                nodeId:nodeId
            }]);
        };
        getNode = function(nodeId) {
            return SessionService.invoke('/wikinode/get-node',[{
                nodeId:nodeId
            }]);
        };
        getNode = function(groupId,name) {
            return SessionService.invoke('/wikinode/get-node',[{
                groupId:groupId
                ,name:name
            }]);
        };
        getNodes = function(groupId) {
            return SessionService.invoke('/wikinode/get-nodes',[{
                groupId:groupId
            }]);
        };
        getNodes = function(groupId,status) {
            return SessionService.invoke('/wikinode/get-nodes',[{
                groupId:groupId
                ,status:status
            }]);
        };
        getNodes = function(groupId,start,end) {
            return SessionService.invoke('/wikinode/get-nodes',[{
                groupId:groupId
                ,start:start
                ,end:end
            }]);
        };
        getNodes = function(groupId,status,start,end) {
            return SessionService.invoke('/wikinode/get-nodes',[{
                groupId:groupId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        getNodesCount = function(groupId) {
            return SessionService.invoke('/wikinode/get-nodes-count',[{
                groupId:groupId
            }]);
        };
        getNodesCount = function(groupId,status) {
            return SessionService.invoke('/wikinode/get-nodes-count',[{
                groupId:groupId
                ,status:status
            }]);
        };
        moveNodeToTrash = function(nodeId) {
            return SessionService.invoke('/wikinode/move-node-to-trash',[{
                nodeId:nodeId
            }]);
        };
        restoreNodeFromTrash = function(nodeId) {
            return SessionService.invoke('/wikinode/restore-node-from-trash',[{
                nodeId:nodeId
            }]);
        };
        subscribeNode = function(nodeId) {
            return SessionService.invoke('/wikinode/subscribe-node',[{
                nodeId:nodeId
            }]);
        };
        unsubscribeNode = function(nodeId) {
            return SessionService.invoke('/wikinode/unsubscribe-node',[{
                nodeId:nodeId
            }]);
        };
        updateNode = function(nodeId,name,description,serviceContext) {
            return SessionService.invoke('/wikinode/update-node',[{
                nodeId:nodeId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';

    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function(searchString, position) {
            var subjectString = this.toString();
            if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
    }

    angular
        .module('mobile.sdk.v62')
        .factory('SessionService', ['Base64','$cookieStore','$http','$q',function(Base64,$cookieStore,$http,$q) {
            var factory = this;
            var service = {};

            factory.jsonWsUrl = 'api/jsonws/invoke';
            factory.server = 'http://liferaydemo.xtivia.com';
            factory.authenticationTypes = {
                BASIC: 'basic',
                DIGEST: 'digest'
            };


            service.setCredentials = function (username, password) {
                var authdata = Base64.encode(username + ':' + password);
                $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                $cookieStore.put('globals', {
                    currentUser: {
                        username: username,
                        authdata: authdata
                    }
                });
            };

            service.clearCredentials = function () {
                $cookieStore.remove('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';
            };

            service.invoke = function (command) {
                var url = (document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1)?factory.server:'/';
                if(url.endsWith('/')) {
                    url = url + factory.jsonWsUrl;
                } else {
                    url = url + '/' + factory.jsonWsUrl;
                }
                return $q(function(resolve,reject) {
                    $http.post(url,[command]).then(function(resp) {
                        if(resp.data&&Array.isArray(resp.data)) {
                            resolve(resp.data.length>0?resp.data[0]:{});
                        } else {
                            reject(resp.data);
                        }
                    },function(err) {
                        reject(err);
                    });
                });
            };

            service.getImageUrlPrefix = function() {
                return (document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1)?factory.server+'/image':'/image';
            };

            service.setServer = function(server) {
                factory.server = server;
                service.server = factory.server;
            };

            service.authenticationTypes = factory.authenticationTypes;
            service.jsonWsUrl = factory.jsonWsUrl;
            service.server = factory.server;

            return service;
        }])
        .factory('Base64', function () {
            /* jshint ignore:start */

            var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

            return {
                encode: function (input) {
                    var output = "";
                    var chr1, chr2, chr3 = "";
                    var enc1, enc2, enc3, enc4 = "";
                    var i = 0;

                    do {
                        chr1 = input.charCodeAt(i++);
                        chr2 = input.charCodeAt(i++);
                        chr3 = input.charCodeAt(i++);

                        enc1 = chr1 >> 2;
                        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                        enc4 = chr3 & 63;

                        if (isNaN(chr2)) {
                            enc3 = enc4 = 64;
                        } else if (isNaN(chr3)) {
                            enc4 = 64;
                        }

                        output = output +
                            keyStr.charAt(enc1) +
                            keyStr.charAt(enc2) +
                            keyStr.charAt(enc3) +
                            keyStr.charAt(enc4);
                        chr1 = chr2 = chr3 = "";
                        enc1 = enc2 = enc3 = enc4 = "";
                    } while (i < input.length);

                    return output;
                },

                decode: function (input) {
                    var output = "";
                    var chr1, chr2, chr3 = "";
                    var enc1, enc2, enc3, enc4 = "";
                    var i = 0;

                    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                    var base64test = /[^A-Za-z0-9\+\/\=]/g;
                    if (base64test.exec(input)) {
                        window.alert("There were invalid base64 characters in the input text.\n" +
                            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                            "Expect errors in decoding.");
                    }
                    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                    do {
                        enc1 = keyStr.indexOf(input.charAt(i++));
                        enc2 = keyStr.indexOf(input.charAt(i++));
                        enc3 = keyStr.indexOf(input.charAt(i++));
                        enc4 = keyStr.indexOf(input.charAt(i++));

                        chr1 = (enc1 << 2) | (enc2 >> 4);
                        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                        chr3 = ((enc3 & 3) << 6) | enc4;

                        output = output + String.fromCharCode(chr1);

                        if (enc3 != 64) {
                            output = output + String.fromCharCode(chr2);
                        }
                        if (enc4 != 64) {
                            output = output + String.fromCharCode(chr3);
                        }

                        chr1 = chr2 = chr3 = "";
                        enc1 = enc2 = enc3 = enc4 = "";

                    } while (i < input.length);

                    return output;
                }
            };

            /* jshint ignore:end */

        })
        .factory('SigninService', ['SessionService','GroupService','UserService','$q', function (SessionService,GroupService,UserService,$q) {
            var service = {};

            service.signin = function(authentication) {
                if(authentication) {
                    if(authentication.authenticationType === SessionService.authenticationTypes.BASIC) {
                        SessionService.setCredentials(authentication.credentials.username,authentication.credentials.password);
                    }
                    return $q(function(resolve, reject) {
                        GroupService.getUserSites().then(function(resp){
                            var site = resp[0];
                            UserService.getUserByEmailAddress(site.companyId,authentication.credentials.username)
                                .then(function(resp) {
                                    resolve(resp);
                                },function(err) {
                                    reject(err);
                                });
                        },function(err){
                            reject(err);
                        });
                    });
                }
            };

            return service;
        }]);
})();
