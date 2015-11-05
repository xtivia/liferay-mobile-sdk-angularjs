(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MembershiprequestService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addMembershipRequest = function(groupId,comments,serviceContext) {
            return SessionService.invoke('/membershiprequest/add-membership-request',[{
                groupId:groupId
                ,comments:comments
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteMembershipRequests = function(groupId,statusId) {
            return SessionService.invoke('/membershiprequest/delete-membership-requests',[{
                groupId:groupId
                ,statusId:statusId
            }]);
        };
        service.getMembershipRequest = function(membershipRequestId) {
            return SessionService.invoke('/membershiprequest/get-membership-request',[{
                membershipRequestId:membershipRequestId
            }]);
        };
        service.updateStatus = function(membershipRequestId,reviewComments,statusId,serviceContext) {
            return SessionService.invoke('/membershiprequest/update-status',[{
                membershipRequestId:membershipRequestId
                ,reviewComments:reviewComments
                ,statusId:statusId
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();