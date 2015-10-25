(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('WikinodeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addNode = function(name,description,serviceContext) {
            return service.invoke('/wikinode/add-node',[{
                name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteNode = function(nodeId) {
            return service.invoke('/wikinode/delete-node',[{
                nodeId:nodeId
            }]);
        };
        service.getNode = function(nodeId) {
            return service.invoke('/wikinode/get-node',[{
                nodeId:nodeId
            }]);
        };
        service.getNode = function(groupId,name) {
            return service.invoke('/wikinode/get-node',[{
                groupId:groupId
                ,name:name
            }]);
        };
        service.getNodes = function(groupId) {
            return service.invoke('/wikinode/get-nodes',[{
                groupId:groupId
            }]);
        };
        service.getNodes = function(groupId,status) {
            return service.invoke('/wikinode/get-nodes',[{
                groupId:groupId
                ,status:status
            }]);
        };
        service.getNodes = function(groupId,start,end) {
            return service.invoke('/wikinode/get-nodes',[{
                groupId:groupId
                ,start:start
                ,end:end
            }]);
        };
        service.getNodes = function(groupId,status,start,end) {
            return service.invoke('/wikinode/get-nodes',[{
                groupId:groupId
                ,status:status
                ,start:start
                ,end:end
            }]);
        };
        service.getNodesCount = function(groupId) {
            return service.invoke('/wikinode/get-nodes-count',[{
                groupId:groupId
            }]);
        };
        service.getNodesCount = function(groupId,status) {
            return service.invoke('/wikinode/get-nodes-count',[{
                groupId:groupId
                ,status:status
            }]);
        };
        service.moveNodeToTrash = function(nodeId) {
            return service.invoke('/wikinode/move-node-to-trash',[{
                nodeId:nodeId
            }]);
        };
        service.restoreNodeFromTrash = function(nodeId) {
            return service.invoke('/wikinode/restore-node-from-trash',[{
                nodeId:nodeId
            }]);
        };
        service.subscribeNode = function(nodeId) {
            return service.invoke('/wikinode/subscribe-node',[{
                nodeId:nodeId
            }]);
        };
        service.unsubscribeNode = function(nodeId) {
            return service.invoke('/wikinode/unsubscribe-node',[{
                nodeId:nodeId
            }]);
        };
        service.updateNode = function(nodeId,name,description,serviceContext) {
            return service.invoke('/wikinode/update-node',[{
                nodeId:nodeId
                ,name:name
                ,description:description
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});