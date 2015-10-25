(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PollsquestionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addQuestion = function(titleMap,descriptionMap,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,choices,serviceContext) {
            return service.invoke('/pollsquestion/add-question',[{
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
        service.deleteQuestion = function(questionId) {
            return service.invoke('/pollsquestion/delete-question',[{
                questionId:questionId
            }]);
        };
        service.getQuestion = function(questionId) {
            return service.invoke('/pollsquestion/get-question',[{
                questionId:questionId
            }]);
        };
        service.updateQuestion = function(questionId,titleMap,descriptionMap,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,choices,serviceContext) {
            return service.invoke('/pollsquestion/update-question',[{
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
});