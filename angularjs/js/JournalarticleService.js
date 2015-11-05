(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalarticleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addArticle = function(groupId,folderId,classNameId,classPK,articleId,autoArticleId,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,articleURL,serviceContext) {
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
        service.addArticle = function(groupId,folderId,classNameId,classPK,articleId,autoArticleId,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,smallImage,smallImageURL,smallFile,images,articleURL,serviceContext) {
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
        service.copyArticle = function(groupId,oldArticleId,newArticleId,autoArticleId,version) {
            return SessionService.invoke('/journalarticle/copy-article',[{
                groupId:groupId
                ,oldArticleId:oldArticleId
                ,newArticleId:newArticleId
                ,autoArticleId:autoArticleId
                ,version:version
            }]);
        };
        service.deleteArticle = function(groupId,articleId,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/delete-article',[{
                groupId:groupId
                ,articleId:articleId
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteArticle = function(groupId,articleId,version,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/delete-article',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        service.expireArticle = function(groupId,articleId,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/expire-article',[{
                groupId:groupId
                ,articleId:articleId
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        service.expireArticle = function(groupId,articleId,version,articleURL,serviceContext) {
            return SessionService.invoke('/journalarticle/expire-article',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,articleURL:articleURL
                ,serviceContext:serviceContext
            }]);
        };
        service.getArticle = function(id) {
            return SessionService.invoke('/journalarticle/get-article',[{
                id:id
            }]);
        };
        service.getArticle = function(groupId,articleId) {
            return SessionService.invoke('/journalarticle/get-article',[{
                groupId:groupId
                ,articleId:articleId
            }]);
        };
        service.getArticle = function(groupId,articleId,version) {
            return SessionService.invoke('/journalarticle/get-article',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
            }]);
        };
        service.getArticle = function(groupId,className,classPK) {
            return SessionService.invoke('/journalarticle/get-article',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
            }]);
        };
        service.getArticleByUrlTitle = function(groupId,urlTitle) {
            return SessionService.invoke('/journalarticle/get-article-by-url-title',[{
                groupId:groupId
                ,urlTitle:urlTitle
            }]);
        };
        service.getArticleContent = function(groupId,articleId,languageId,themeDisplay) {
            return SessionService.invoke('/journalarticle/get-article-content',[{
                groupId:groupId
                ,articleId:articleId
                ,languageId:languageId
                ,themeDisplay:themeDisplay
            }]);
        };
        service.getArticleContent = function(groupId,articleId,version,languageId,themeDisplay) {
            return SessionService.invoke('/journalarticle/get-article-content',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,languageId:languageId
                ,themeDisplay:themeDisplay
            }]);
        };
        service.getArticles = function(groupId,folderId) {
            return SessionService.invoke('/journalarticle/get-articles',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getArticles = function(groupId,folderId,start,end,obc) {
            return SessionService.invoke('/journalarticle/get-articles',[{
                groupId:groupId
                ,folderId:folderId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getArticlesByArticleId = function(groupId,articleId,start,end,obc) {
            return SessionService.invoke('/journalarticle/get-articles-by-article-id',[{
                groupId:groupId
                ,articleId:articleId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getArticlesByLayoutUuid = function(groupId,layoutUuid) {
            return SessionService.invoke('/journalarticle/get-articles-by-layout-uuid',[{
                groupId:groupId
                ,layoutUuid:layoutUuid
            }]);
        };
        service.getArticlesByStructureId = function(groupId,ddmStructureKey,start,end,obc) {
            return SessionService.invoke('/journalarticle/get-articles-by-structure-id',[{
                groupId:groupId
                ,ddmStructureKey:ddmStructureKey
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getArticlesByStructureId = function(groupId,classNameId,ddmStructureKey,status,start,end,obc) {
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
        service.getArticlesCount = function(groupId,folderId) {
            return SessionService.invoke('/journalarticle/get-articles-count',[{
                groupId:groupId
                ,folderId:folderId
            }]);
        };
        service.getArticlesCount = function(groupId,folderId,status) {
            return SessionService.invoke('/journalarticle/get-articles-count',[{
                groupId:groupId
                ,folderId:folderId
                ,status:status
            }]);
        };
        service.getArticlesCountByArticleId = function(groupId,articleId) {
            return SessionService.invoke('/journalarticle/get-articles-count-by-article-id',[{
                groupId:groupId
                ,articleId:articleId
            }]);
        };
        service.getArticlesCountByStructureId = function(groupId,ddmStructureKey) {
            return SessionService.invoke('/journalarticle/get-articles-count-by-structure-id',[{
                groupId:groupId
                ,ddmStructureKey:ddmStructureKey
            }]);
        };
        service.getArticlesCountByStructureId = function(groupId,classNameId,ddmStructureKey,status) {
            return SessionService.invoke('/journalarticle/get-articles-count-by-structure-id',[{
                groupId:groupId
                ,classNameId:classNameId
                ,ddmStructureKey:ddmStructureKey
                ,status:status
            }]);
        };
        service.getDisplayArticleByUrlTitle = function(groupId,urlTitle) {
            return SessionService.invoke('/journalarticle/get-display-article-by-url-title',[{
                groupId:groupId
                ,urlTitle:urlTitle
            }]);
        };
        service.getFoldersAndArticlesCount = function(groupId,folderIds) {
            return SessionService.invoke('/journalarticle/get-folders-and-articles-count',[{
                groupId:groupId
                ,folderIds:folderIds
            }]);
        };
        service.getGroupArticles = function(groupId,userId,rootFolderId,start,end,orderByComparator) {
            return SessionService.invoke('/journalarticle/get-group-articles',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,start:start
                ,end:end
                ,orderByComparator:orderByComparator
            }]);
        };
        service.getGroupArticles = function(groupId,userId,rootFolderId,status,start,end,orderByComparator) {
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
        service.getGroupArticlesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke('/journalarticle/get-group-articles-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
            }]);
        };
        service.getGroupArticlesCount = function(groupId,userId,rootFolderId,status) {
            return SessionService.invoke('/journalarticle/get-group-articles-count',[{
                groupId:groupId
                ,userId:userId
                ,rootFolderId:rootFolderId
                ,status:status
            }]);
        };
        service.getLatestArticle = function(resourcePrimKey) {
            return SessionService.invoke('/journalarticle/get-latest-article',[{
                resourcePrimKey:resourcePrimKey
            }]);
        };
        service.getLatestArticle = function(groupId,articleId,status) {
            return SessionService.invoke('/journalarticle/get-latest-article',[{
                groupId:groupId
                ,articleId:articleId
                ,status:status
            }]);
        };
        service.getLatestArticle = function(groupId,className,classPK) {
            return SessionService.invoke('/journalarticle/get-latest-article',[{
                groupId:groupId
                ,className:className
                ,classPK:classPK
            }]);
        };
        service.moveArticle = function(groupId,articleId,newFolderId) {
            return SessionService.invoke('/journalarticle/move-article',[{
                groupId:groupId
                ,articleId:articleId
                ,newFolderId:newFolderId
            }]);
        };
        service.moveArticleFromTrash = function(groupId,articleId,newFolderId,serviceContext) {
            return SessionService.invoke('/journalarticle/move-article-from-trash',[{
                groupId:groupId
                ,articleId:articleId
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        service.moveArticleFromTrash = function(groupId,resourcePrimKey,newFolderId,serviceContext) {
            return SessionService.invoke('/journalarticle/move-article-from-trash',[{
                groupId:groupId
                ,resourcePrimKey:resourcePrimKey
                ,newFolderId:newFolderId
                ,serviceContext:serviceContext
            }]);
        };
        service.moveArticleToTrash = function(groupId,articleId) {
            return SessionService.invoke('/journalarticle/move-article-to-trash',[{
                groupId:groupId
                ,articleId:articleId
            }]);
        };
        service.removeArticleLocale = function(companyId,languageId) {
            return SessionService.invoke('/journalarticle/remove-article-locale',[{
                companyId:companyId
                ,languageId:languageId
            }]);
        };
        service.removeArticleLocale = function(groupId,articleId,version,languageId) {
            return SessionService.invoke('/journalarticle/remove-article-locale',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,languageId:languageId
            }]);
        };
        service.restoreArticleFromTrash = function(resourcePrimKey) {
            return SessionService.invoke('/journalarticle/restore-article-from-trash',[{
                resourcePrimKey:resourcePrimKey
            }]);
        };
        service.restoreArticleFromTrash = function(groupId,articleId) {
            return SessionService.invoke('/journalarticle/restore-article-from-trash',[{
                groupId:groupId
                ,articleId:articleId
            }]);
        };
        service.search = function(companyId,groupId,folderIds,classNameId,keywords,version,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,start,end,obc) {
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
        service.search = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,andOperator,start,end,obc) {
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
        service.search = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKeys,ddmTemplateKeys,displayDateGT,displayDateLT,status,reviewDate,andOperator,start,end,obc) {
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
        service.search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke('/journalarticle/search',[{
                groupId:groupId
                ,creatorUserId:creatorUserId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.searchCount = function(companyId,groupId,folderIds,classNameId,keywords,version,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate) {
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
        service.searchCount = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,andOperator) {
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
        service.searchCount = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKeys,ddmTemplateKeys,displayDateGT,displayDateLT,status,reviewDate,andOperator) {
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
        service.subscribe = function(groupId) {
            return SessionService.invoke('/journalarticle/subscribe',[{
                groupId:groupId
            }]);
        };
        service.unsubscribe = function(groupId) {
            return SessionService.invoke('/journalarticle/unsubscribe',[{
                groupId:groupId
            }]);
        };
        service.updateArticle = function(userId,groupId,folderId,articleId,version,titleMap,descriptionMap,content,layoutUuid,serviceContext) {
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
        service.updateArticle = function(groupId,folderId,articleId,version,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,smallImage,smallImageURL,smallFile,images,articleURL,serviceContext) {
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
        service.updateArticle = function(groupId,folderId,articleId,version,content,serviceContext) {
            return SessionService.invoke('/journalarticle/update-article',[{
                groupId:groupId
                ,folderId:folderId
                ,articleId:articleId
                ,version:version
                ,content:content
                ,serviceContext:serviceContext
            }]);
        };
        service.updateArticleTranslation = function(groupId,articleId,version,locale,title,description,content,images) {
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
        service.updateArticleTranslation = function(groupId,articleId,version,locale,title,description,content,images,serviceContext) {
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
        service.updateContent = function(groupId,articleId,version,content) {
            return SessionService.invoke('/journalarticle/update-content',[{
                groupId:groupId
                ,articleId:articleId
                ,version:version
                ,content:content
            }]);
        };
        service.updateStatus = function(groupId,articleId,version,status,articleURL,serviceContext) {
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