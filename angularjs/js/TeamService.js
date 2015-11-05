(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('TeamService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTeam = function(groupId,name,description) {
            return SessionService.invoke('/team/add-team',[{
                groupId:groupId
                ,name:name
                ,description:description
            }]);
        };
        service.deleteTeam = function(teamId) {
            return SessionService.invoke('/team/delete-team',[{
                teamId:teamId
            }]);
        };
        service.getGroupTeams = function(groupId) {
            return SessionService.invoke('/team/get-group-teams',[{
                groupId:groupId
            }]);
        };
        service.getTeam = function(teamId) {
            return SessionService.invoke('/team/get-team',[{
                teamId:teamId
            }]);
        };
        service.getTeam = function(groupId,name) {
            return SessionService.invoke('/team/get-team',[{
                groupId:groupId
                ,name:name
            }]);
        };
        service.getUserTeams = function(userId) {
            return SessionService.invoke('/team/get-user-teams',[{
                userId:userId
            }]);
        };
        service.getUserTeams = function(userId,groupId) {
            return SessionService.invoke('/team/get-user-teams',[{
                userId:userId
                ,groupId:groupId
            }]);
        };
        service.hasUserTeam = function(userId,teamId) {
            return SessionService.invoke('/team/has-user-team',[{
                userId:userId
                ,teamId:teamId
            }]);
        };
        service.updateTeam = function(teamId,name,description) {
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