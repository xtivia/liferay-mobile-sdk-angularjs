(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('TeamService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTeam = function(groupId,name,description) {
            return service.invoke('/team/add-team',[{
                groupId:groupId
                ,name:name
                ,description:description
            }]);
        };
        service.deleteTeam = function(teamId) {
            return service.invoke('/team/delete-team',[{
                teamId:teamId
            }]);
        };
        service.getGroupTeams = function(groupId) {
            return service.invoke('/team/get-group-teams',[{
                groupId:groupId
            }]);
        };
        service.getTeam = function(teamId) {
            return service.invoke('/team/get-team',[{
                teamId:teamId
            }]);
        };
        service.getTeam = function(groupId,name) {
            return service.invoke('/team/get-team',[{
                groupId:groupId
                ,name:name
            }]);
        };
        service.getUserTeams = function(userId) {
            return service.invoke('/team/get-user-teams',[{
                userId:userId
            }]);
        };
        service.getUserTeams = function(userId,groupId) {
            return service.invoke('/team/get-user-teams',[{
                userId:userId
                ,groupId:groupId
            }]);
        };
        service.hasUserTeam = function(userId,teamId) {
            return service.invoke('/team/has-user-team',[{
                userId:userId
                ,teamId:teamId
            }]);
        };
        service.updateTeam = function(teamId,name,description) {
            return service.invoke('/team/update-team',[{
                teamId:teamId
                ,name:name
                ,description:description
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});