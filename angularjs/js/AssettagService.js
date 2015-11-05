(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssettagService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTag = function(name,tagProperties,serviceContext) {
            return SessionService.invoke('/assettag/add-tag',[{
                name:name
                ,tagProperties:tagProperties
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteTag = function(tagId) {
            return SessionService.invoke('/assettag/delete-tag',[{
                tagId:tagId
            }]);
        };
        service.deleteTags = function(tagIds) {
            return SessionService.invoke('/assettag/delete-tags',[{
                tagIds:tagIds
            }]);
        };
        service.getGroupTags = function(groupId) {
            return SessionService.invoke('/assettag/get-group-tags',[{
                groupId:groupId
            }]);
        };
        service.getGroupTags = function(groupId,start,end,obc) {
            return SessionService.invoke('/assettag/get-group-tags',[{
                groupId:groupId
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getGroupTagsCount = function(groupId) {
            return SessionService.invoke('/assettag/get-group-tags-count',[{
                groupId:groupId
            }]);
        };
        service.getGroupTagsDisplay = function(groupId,name,start,end) {
            return SessionService.invoke('/assettag/get-group-tags-display',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
            }]);
        };
        service.getGroupsTags = function(groupIds) {
            return SessionService.invoke('/assettag/get-groups-tags',[{
                groupIds:groupIds
            }]);
        };
        service.getJsonGroupTags = function(groupId,name,start,end) {
            return SessionService.invoke('/assettag/get-json-group-tags',[{
                groupId:groupId
                ,name:name
                ,start:start
                ,end:end
            }]);
        };
        service.getTag = function(tagId) {
            return SessionService.invoke('/assettag/get-tag',[{
                tagId:tagId
            }]);
        };
        service.getTags = function(className,classPK) {
            return SessionService.invoke('/assettag/get-tags',[{
                className:className
                ,classPK:classPK
            }]);
        };
        service.getTags = function(groupId,classNameId,name) {
            return SessionService.invoke('/assettag/get-tags',[{
                groupId:groupId
                ,classNameId:classNameId
                ,name:name
            }]);
        };
        service.getTags = function(groupId,name,tagProperties,start,end) {
            return SessionService.invoke('/assettag/get-tags',[{
                groupId:groupId
                ,name:name
                ,tagProperties:tagProperties
                ,start:start
                ,end:end
            }]);
        };
        service.getTags = function(groupIds,name,tagProperties,start,end) {
            return SessionService.invoke('/assettag/get-tags',[{
                groupIds:groupIds
                ,name:name
                ,tagProperties:tagProperties
                ,start:start
                ,end:end
            }]);
        };
        service.getTags = function(groupId,classNameId,name,start,end,obc) {
            return SessionService.invoke('/assettag/get-tags',[{
                groupId:groupId
                ,classNameId:classNameId
                ,name:name
                ,start:start
                ,end:end
                ,obc:obc
            }]);
        };
        service.getTagsCount = function(groupId,name) {
            return SessionService.invoke('/assettag/get-tags-count',[{
                groupId:groupId
                ,name:name
            }]);
        };
        service.getTagsCount = function(groupId,classNameId,name) {
            return SessionService.invoke('/assettag/get-tags-count',[{
                groupId:groupId
                ,classNameId:classNameId
                ,name:name
            }]);
        };
        service.getTagsCount = function(groupId,name,tagProperties) {
            return SessionService.invoke('/assettag/get-tags-count',[{
                groupId:groupId
                ,name:name
                ,tagProperties:tagProperties
            }]);
        };
        service.mergeTags = function(fromTagId,toTagId,overrideProperties) {
            return SessionService.invoke('/assettag/merge-tags',[{
                fromTagId:fromTagId
                ,toTagId:toTagId
                ,overrideProperties:overrideProperties
            }]);
        };
        service.mergeTags = function(fromTagIds,toTagId,overrideProperties) {
            return SessionService.invoke('/assettag/merge-tags',[{
                fromTagIds:fromTagIds
                ,toTagId:toTagId
                ,overrideProperties:overrideProperties
            }]);
        };
        service.search = function(groupId,name,tagProperties,start,end) {
            return SessionService.invoke('/assettag/search',[{
                groupId:groupId
                ,name:name
                ,tagProperties:tagProperties
                ,start:start
                ,end:end
            }]);
        };
        service.search = function(groupIds,name,tagProperties,start,end) {
            return SessionService.invoke('/assettag/search',[{
                groupIds:groupIds
                ,name:name
                ,tagProperties:tagProperties
                ,start:start
                ,end:end
            }]);
        };
        service.updateTag = function(tagId,name,tagProperties,serviceContext) {
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