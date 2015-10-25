(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetbranchService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutSetBranch = function(groupId,privateLayout,name,description,master,copyLayoutSetBranchId,serviceContext) {
            return service.invoke('/layoutsetbranch/add-layout-set-branch',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,name:name
                ,description:description
                ,master:master
                ,copyLayoutSetBranchId:copyLayoutSetBranchId
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteLayoutSetBranch = function(layoutSetBranchId) {
            return service.invoke('/layoutsetbranch/delete-layout-set-branch',[{
                layoutSetBranchId:layoutSetBranchId
            }]);
        };
        service.getLayoutSetBranches = function(groupId,privateLayout) {
            return service.invoke('/layoutsetbranch/get-layout-set-branches',[{
                groupId:groupId
                ,privateLayout:privateLayout
            }]);
        };
        service.mergeLayoutSetBranch = function(layoutSetBranchId,mergeLayoutSetBranchId,serviceContext) {
            return service.invoke('/layoutsetbranch/merge-layout-set-branch',[{
                layoutSetBranchId:layoutSetBranchId
                ,mergeLayoutSetBranchId:mergeLayoutSetBranchId
                ,serviceContext:serviceContext
            }]);
        };
        service.updateLayoutSetBranch = function(groupId,layoutSetBranchId,name,description,serviceContext) {
            return service.invoke('/layoutsetbranch/update-layout-set-branch',[{
                groupId:groupId
                ,layoutSetBranchId:layoutSetBranchId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});