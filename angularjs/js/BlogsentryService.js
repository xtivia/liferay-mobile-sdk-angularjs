(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('BlogsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteEntry = function(entryId) {
            return SessionService.invoke({'/blogsentry/delete-entry':{
                entryId:entryId
            }});
        };
        service.getCompanyEntries = function(companyId,displayDate,status,max) {
            return SessionService.invoke({'/blogsentry/get-company-entries':{
                companyId:companyId
                ,displayDate:displayDate
                ,status:status
                ,max:max
            }});
        };
        service.getCompanyEntriesRss = function(companyId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/blogsentry/get-company-entries-rss':{
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
            }});
        };
        service.getEntry = function(entryId) {
            return SessionService.invoke({'/blogsentry/get-entry':{
                entryId:entryId
            }});
        };
        service.getEntry = function(groupId,urlTitle) {
            return SessionService.invoke({'/blogsentry/get-entry':{
                groupId:groupId
                ,urlTitle:urlTitle
            }});
        };
        service.getGroupEntries = function(groupId,status,max) {
            return SessionService.invoke({'/blogsentry/get-group-entries':{
                groupId:groupId
                ,status:status
                ,max:max
            }});
        };
        service.getGroupEntries = function(groupId,displayDate,status,max) {
            return SessionService.invoke({'/blogsentry/get-group-entries':{
                groupId:groupId
                ,displayDate:displayDate
                ,status:status
                ,max:max
            }});
        };
        service.getGroupEntries = function(groupId,status,start,end) {
            return SessionService.invoke({'/blogsentry/get-group-entries':{
                groupId:groupId
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.getGroupEntries = function(groupId,displayDate,status,start,end) {
            return SessionService.invoke({'/blogsentry/get-group-entries':{
                groupId:groupId
                ,displayDate:displayDate
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.getGroupEntriesCount = function(groupId,status) {
            return SessionService.invoke({'/blogsentry/get-group-entries-count':{
                groupId:groupId
                ,status:status
            }});
        };
        service.getGroupEntriesCount = function(groupId,displayDate,status) {
            return SessionService.invoke({'/blogsentry/get-group-entries-count':{
                groupId:groupId
                ,displayDate:displayDate
                ,status:status
            }});
        };
        service.getGroupEntriesRss = function(groupId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/blogsentry/get-group-entries-rss':{
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
            }});
        };
        service.getGroupsEntries = function(companyId,groupId,displayDate,status,max) {
            return SessionService.invoke({'/blogsentry/get-groups-entries':{
                companyId:companyId
                ,groupId:groupId
                ,displayDate:displayDate
                ,status:status
                ,max:max
            }});
        };
        service.getOrganizationEntries = function(organizationId,displayDate,status,max) {
            return SessionService.invoke({'/blogsentry/get-organization-entries':{
                organizationId:organizationId
                ,displayDate:displayDate
                ,status:status
                ,max:max
            }});
        };
        service.getOrganizationEntriesRss = function(organizationId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/blogsentry/get-organization-entries-rss':{
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
            }});
        };
        service.moveEntryToTrash = function(entryId) {
            return SessionService.invoke({'/blogsentry/move-entry-to-trash':{
                entryId:entryId
            }});
        };
        service.restoreEntryFromTrash = function(entryId) {
            return SessionService.invoke({'/blogsentry/restore-entry-from-trash':{
                entryId:entryId
            }});
        };
        service.subscribe = function(groupId) {
            return SessionService.invoke({'/blogsentry/subscribe':{
                groupId:groupId
            }});
        };
        service.unsubscribe = function(groupId) {
            return SessionService.invoke({'/blogsentry/unsubscribe':{
                groupId:groupId
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();