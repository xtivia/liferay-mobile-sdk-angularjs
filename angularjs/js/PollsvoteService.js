(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PollsvoteService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addVote = function(questionId,choiceId,serviceContext) {
            return SessionService.invoke({'/pollsvote/add-vote':{
                questionId:questionId
                ,choiceId:choiceId
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();