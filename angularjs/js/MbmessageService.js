(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbmessageService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addDiscussionMessage = function(groupId,className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,threadId,parentMessageId,subject,body,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-discussion-message':{
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
            }});
        };
        service.addMessage = function(groupId,categoryId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-message':{
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
            }});
        };
        service.addMessage = function(groupId,categoryId,threadId,parentMessageId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-message':{
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
            }});
        };
        service.addMessage = function(categoryId,subject,body,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-message':{
                categoryId:categoryId
                ,subject:subject
                ,body:body
                ,serviceContext:serviceContext
            }});
        };
        service.addMessage = function(parentMessageId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-message':{
                parentMessageId:parentMessageId
                ,subject:subject
                ,body:body
                ,format:format
                ,inputStreamOVPs:inputStreamOVPs
                ,anonymous:anonymous
                ,priority:priority
                ,allowPingbacks:allowPingbacks
                ,serviceContext:serviceContext
            }});
        };
        service.deleteDiscussionMessage = function(groupId,className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,messageId) {
            return SessionService.invoke({'/mbmessage/delete-discussion-message':{
                groupId:groupId
                ,className:className
                ,classPK:classPK
                ,permissionClassName:permissionClassName
                ,permissionClassPK:permissionClassPK
                ,permissionOwnerId:permissionOwnerId
                ,messageId:messageId
            }});
        };
        service.deleteMessage = function(messageId) {
            return SessionService.invoke({'/mbmessage/delete-message':{
                messageId:messageId
            }});
        };
        service.deleteMessageAttachments = function(messageId) {
            return SessionService.invoke({'/mbmessage/delete-message-attachments':{
                messageId:messageId
            }});
        };
        service.getCategoryMessages = function(groupId,categoryId,status,start,end) {
            return SessionService.invoke({'/mbmessage/get-category-messages':{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.getCategoryMessagesCount = function(groupId,categoryId,status) {
            return SessionService.invoke({'/mbmessage/get-category-messages-count':{
                groupId:groupId
                ,categoryId:categoryId
                ,status:status
            }});
        };
        service.getCategoryMessagesRss = function(groupId,categoryId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-category-messages-rss':{
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
            }});
        };
        service.getCompanyMessagesRss = function(companyId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-company-messages-rss':{
                companyId:companyId
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
        service.getGroupMessagesCount = function(groupId,status) {
            return SessionService.invoke({'/mbmessage/get-group-messages-count':{
                groupId:groupId
                ,status:status
            }});
        };
        service.getGroupMessagesRss = function(groupId,userId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-group-messages-rss':{
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
            }});
        };
        service.getGroupMessagesRss = function(groupId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-group-messages-rss':{
                groupId:groupId
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
        service.getMessage = function(messageId) {
            return SessionService.invoke({'/mbmessage/get-message':{
                messageId:messageId
            }});
        };
        service.getMessageDisplay = function(messageId,status,threadView,includePrevAndNext) {
            return SessionService.invoke({'/mbmessage/get-message-display':{
                messageId:messageId
                ,status:status
                ,threadView:threadView
                ,includePrevAndNext:includePrevAndNext
            }});
        };
        service.getThreadAnswersCount = function(groupId,categoryId,threadId) {
            return SessionService.invoke({'/mbmessage/get-thread-answers-count':{
                groupId:groupId
                ,categoryId:categoryId
                ,threadId:threadId
            }});
        };
        service.getThreadMessages = function(groupId,categoryId,threadId,status,start,end) {
            return SessionService.invoke({'/mbmessage/get-thread-messages':{
                groupId:groupId
                ,categoryId:categoryId
                ,threadId:threadId
                ,status:status
                ,start:start
                ,end:end
            }});
        };
        service.getThreadMessagesCount = function(groupId,categoryId,threadId,status) {
            return SessionService.invoke({'/mbmessage/get-thread-messages-count':{
                groupId:groupId
                ,categoryId:categoryId
                ,threadId:threadId
                ,status:status
            }});
        };
        service.getThreadMessagesRss = function(threadId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-thread-messages-rss':{
                threadId:threadId
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
        service.restoreMessageAttachmentFromTrash = function(messageId,fileName) {
            return SessionService.invoke({'/mbmessage/restore-message-attachment-from-trash':{
                messageId:messageId
                ,fileName:fileName
            }});
        };
        service.subscribeMessage = function(messageId) {
            return SessionService.invoke({'/mbmessage/subscribe-message':{
                messageId:messageId
            }});
        };
        service.unsubscribeMessage = function(messageId) {
            return SessionService.invoke({'/mbmessage/unsubscribe-message':{
                messageId:messageId
            }});
        };
        service.updateAnswer = function(messageId,answer,cascade) {
            return SessionService.invoke({'/mbmessage/update-answer':{
                messageId:messageId
                ,answer:answer
                ,cascade:cascade
            }});
        };
        service.updateDiscussionMessage = function(className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,messageId,subject,body,serviceContext) {
            return SessionService.invoke({'/mbmessage/update-discussion-message':{
                className:className
                ,classPK:classPK
                ,permissionClassName:permissionClassName
                ,permissionClassPK:permissionClassPK
                ,permissionOwnerId:permissionOwnerId
                ,messageId:messageId
                ,subject:subject
                ,body:body
                ,serviceContext:serviceContext
            }});
        };
        service.updateMessage = function(messageId,subject,body,inputStreamOVPs,existingFiles,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke({'/mbmessage/update-message':{
                messageId:messageId
                ,subject:subject
                ,body:body
                ,inputStreamOVPs:inputStreamOVPs
                ,existingFiles:existingFiles
                ,priority:priority
                ,allowPingbacks:allowPingbacks
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();