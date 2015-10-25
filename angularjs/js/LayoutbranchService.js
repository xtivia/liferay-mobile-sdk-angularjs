(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutbranchService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutBranch = function(layoutRevisionId,name,description,master,serviceContext) {
            return service.invoke('/layoutbranch/add-layout-branch',[{
                layoutRevisionId:layoutRevisionId
                ,name:name
                ,description:description
                ,master:master
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteLayoutBranch = function(layoutBranchId) {
            return service.invoke('/layoutbranch/delete-layout-branch',[{
                layoutBranchId:layoutBranchId
            }]);
        };
        service.updateLayoutBranch = function(layoutBranchId,name,description,serviceContext) {
            return service.invoke('/layoutbranch/update-layout-branch',[{
                layoutBranchId:layoutBranchId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});