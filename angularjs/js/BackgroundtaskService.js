(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BackgroundtaskService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getBackgroundTaskStatusJson = function(backgroundTaskId) {
            return service.invoke('/backgroundtask/get-background-task-status-json',[{
                backgroundTaskId:backgroundTaskId
            }]);
        };
        service.getBackgroundTasksCount = function(groupId,taskExecutorClassName,completed) {
            return service.invoke('/backgroundtask/get-background-tasks-count',[{
                groupId:groupId
                ,taskExecutorClassName:taskExecutorClassName
                ,completed:completed
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});