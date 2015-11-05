(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AnnouncementsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEntry = function(plid,classNameId,classPK,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority,alert) {
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
        service.addEntry = function(plid,classNameId,classPK,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,displayImmediately,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority,alert) {
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
        service.deleteEntry = function(entryId) {
            return SessionService.invoke('/announcementsentry/delete-entry',[{
                entryId:entryId
            }]);
        };
        service.getEntry = function(entryId) {
            return SessionService.invoke('/announcementsentry/get-entry',[{
                entryId:entryId
            }]);
        };
        service.updateEntry = function(entryId,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,displayImmediately,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority) {
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