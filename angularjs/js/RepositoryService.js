(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RepositoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRepository = function(groupId,classNameId,parentFolderId,name,description,portletId,typeSettingsProperties,serviceContext) {
            return SessionService.invoke({'/repository/add-repository':{
                groupId:groupId
                ,classNameId:classNameId
                ,parentFolderId:parentFolderId
                ,name:name
                ,description:description
                ,portletId:portletId
                ,typeSettingsProperties:typeSettingsProperties
                ,serviceContext:serviceContext
            }});
        };
        service.checkRepository = function(repositoryId) {
            return SessionService.invoke({'/repository/check-repository':{
                repositoryId:repositoryId
            }});
        };
        service.deleteRepository = function(repositoryId) {
            return SessionService.invoke({'/repository/delete-repository':{
                repositoryId:repositoryId
            }});
        };
        service.getLocalRepositoryImpl = function(repositoryId) {
            return SessionService.invoke({'/repository/get-local-repository-impl':{
                repositoryId:repositoryId
            }});
        };
        service.getLocalRepositoryImpl = function(folderId,fileEntryId,fileVersionId) {
            return SessionService.invoke({'/repository/get-local-repository-impl':{
                folderId:folderId
                ,fileEntryId:fileEntryId
                ,fileVersionId:fileVersionId
            }});
        };
        service.getRepository = function(repositoryId) {
            return SessionService.invoke({'/repository/get-repository':{
                repositoryId:repositoryId
            }});
        };
        service.getRepositoryImpl = function(repositoryId) {
            return SessionService.invoke({'/repository/get-repository-impl':{
                repositoryId:repositoryId
            }});
        };
        service.getRepositoryImpl = function(folderId,fileEntryId,fileVersionId) {
            return SessionService.invoke({'/repository/get-repository-impl':{
                folderId:folderId
                ,fileEntryId:fileEntryId
                ,fileVersionId:fileVersionId
            }});
        };
        service.getSupportedConfigurations = function(classNameId) {
            return SessionService.invoke({'/repository/get-supported-configurations':{
                classNameId:classNameId
            }});
        };
        service.getSupportedParameters = function(classNameId,configuration) {
            return SessionService.invoke({'/repository/get-supported-parameters':{
                classNameId:classNameId
                ,configuration:configuration
            }});
        };
        service.getTypeSettingsProperties = function(repositoryId) {
            return SessionService.invoke({'/repository/get-type-settings-properties':{
                repositoryId:repositoryId
            }});
        };
        service.updateRepository = function(repositoryId,name,description) {
            return SessionService.invoke({'/repository/update-repository':{
                repositoryId:repositoryId
                ,name:name
                ,description:description
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();