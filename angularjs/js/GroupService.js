(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('GroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroup = function(parentGroupId,liveGroupId,name,description,type,manualMembership,membershipRestriction,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke({'/group/add-group':{
                parentGroupId:parentGroupId
                ,liveGroupId:liveGroupId
                ,name:name
                ,description:description
                ,type:type
                ,manualMembership:manualMembership
                ,membershipRestriction:membershipRestriction
                ,friendlyURL:friendlyURL
                ,site:site
                ,active:active
                ,serviceContext:serviceContext
            }});
        };
        service.addGroup = function(name,description,type,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke({'/group/add-group':{
                name:name
                ,description:description
                ,type:type
                ,friendlyURL:friendlyURL
                ,site:site
                ,active:active
                ,serviceContext:serviceContext
            }});
        };
        service.addGroup = function(parentGroupId,name,description,type,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke({'/group/add-group':{
                parentGroupId:parentGroupId
                ,name:name
                ,description:description
                ,type:type
                ,friendlyURL:friendlyURL
                ,site:site
                ,active:active
                ,serviceContext:serviceContext
            }});
        };
        service.addRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke({'/group/add-role-groups':{
                roleId:roleId
                ,groupIds:groupIds
            }});
        };
        service.checkRemoteStagingGroup = function(groupId) {
            return SessionService.invoke({'/group/check-remote-staging-group':{
                groupId:groupId
            }});
        };
        service.deleteGroup = function(groupId) {
            return SessionService.invoke({'/group/delete-group':{
                groupId:groupId
            }});
        };
        service.disableStaging = function(groupId) {
            return SessionService.invoke({'/group/disable-staging':{
                groupId:groupId
            }});
        };
        service.enableStaging = function(groupId) {
            return SessionService.invoke({'/group/enable-staging':{
                groupId:groupId
            }});
        };
        service.getCompanyGroup = function(companyId) {
            return SessionService.invoke({'/group/get-company-group':{
                companyId:companyId
            }});
        };
        service.getGroup = function(groupId) {
            return SessionService.invoke({'/group/get-group':{
                groupId:groupId
            }});
        };
        service.getGroup = function(companyId,name) {
            return SessionService.invoke({'/group/get-group':{
                companyId:companyId
                ,name:name
            }});
        };
        service.getGroups = function(companyId,parentGroupId,site) {
            return SessionService.invoke({'/group/get-groups':{
                companyId:companyId
                ,parentGroupId:parentGroupId
                ,site:site
            }});
        };
        service.getManageableSiteGroups = function(portlets,max) {
            return SessionService.invoke({'/group/get-manageable-site-groups':{
                portlets:portlets
                ,max:max
            }});
        };
        service.getManageableSites = function(portlets,max) {
            return SessionService.invoke({'/group/get-manageable-sites':{
                portlets:portlets
                ,max:max
            }});
        };
        service.getOrganizationsGroups = function(organizations) {
            return SessionService.invoke({'/group/get-organizations-groups':{
                organizations:organizations
            }});
        };
        service.getUserGroup = function(companyId,userId) {
            return SessionService.invoke({'/group/get-user-group':{
                companyId:companyId
                ,userId:userId
            }});
        };
        service.getUserGroupsGroups = function(userGroups) {
            return SessionService.invoke({'/group/get-user-groups-groups':{
                userGroups:userGroups
            }});
        };
        service.getUserOrganizationsGroups = function(userId,start,end) {
            return SessionService.invoke({'/group/get-user-organizations-groups':{
                userId:userId
                ,start:start
                ,end:end
            }});
        };
        service.getUserPlaces = function(classNames,max) {
            return SessionService.invoke({'/group/get-user-places':{
                classNames:classNames
                ,max:max
            }});
        };
        service.getUserPlaces = function(userId,classNames,max) {
            return SessionService.invoke({'/group/get-user-places':{
                userId:userId
                ,classNames:classNames
                ,max:max
            }});
        };
        service.getUserPlaces = function(userId,classNames,includeControlPanel,max) {
            return SessionService.invoke({'/group/get-user-places':{
                userId:userId
                ,classNames:classNames
                ,includeControlPanel:includeControlPanel
                ,max:max
            }});
        };
        service.getUserPlacesCount = function() {
            return SessionService.invoke({'/group/get-user-places-count':{
                
            }});
        };
        service.getUserSites = function() {
            return SessionService.invoke({'/group/get-user-sites':{
                
            }});
        };
        service.getUserSitesGroups = function() {
            return SessionService.invoke({'/group/get-user-sites-groups':{
                
            }});
        };
        service.getUserSitesGroups = function(classNames,max) {
            return SessionService.invoke({'/group/get-user-sites-groups':{
                classNames:classNames
                ,max:max
            }});
        };
        service.getUserSitesGroups = function(userId,classNames,max) {
            return SessionService.invoke({'/group/get-user-sites-groups':{
                userId:userId
                ,classNames:classNames
                ,max:max
            }});
        };
        service.getUserSitesGroups = function(userId,classNames,includeControlPanel,max) {
            return SessionService.invoke({'/group/get-user-sites-groups':{
                userId:userId
                ,classNames:classNames
                ,includeControlPanel:includeControlPanel
                ,max:max
            }});
        };
        service.getUserSitesGroupsCount = function() {
            return SessionService.invoke({'/group/get-user-sites-groups-count':{
                
            }});
        };
        service.hasUserGroup = function(userId,groupId) {
            return SessionService.invoke({'/group/has-user-group':{
                userId:userId
                ,groupId:groupId
            }});
        };
        service.search = function(companyId,name,description,params,start,end) {
            return SessionService.invoke({'/group/search':{
                companyId:companyId
                ,name:name
                ,description:description
                ,params:params
                ,start:start
                ,end:end
            }});
        };
        service.search = function(companyId,classNameIds,keywords,params,start,end,obc) {
            return SessionService.invoke({'/group/search':{
                companyId:companyId
                ,classNameIds:classNameIds
                ,keywords:keywords
                ,params:params
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.search = function(companyId,classNameIds,name,description,params,andOperator,start,end,obc) {
            return SessionService.invoke({'/group/search':{
                companyId:companyId
                ,classNameIds:classNameIds
                ,name:name
                ,description:description
                ,params:params
                ,andOperator:andOperator
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.searchCount = function(companyId,name,description,params) {
            return SessionService.invoke({'/group/search-count':{
                companyId:companyId
                ,name:name
                ,description:description
                ,params:params
            }});
        };
        service.setRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke({'/group/set-role-groups':{
                roleId:roleId
                ,groupIds:groupIds
            }});
        };
        service.unsetRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke({'/group/unset-role-groups':{
                roleId:roleId
                ,groupIds:groupIds
            }});
        };
        service.updateFriendlyUrl = function(groupId,friendlyURL) {
            return SessionService.invoke({'/group/update-friendly-url':{
                groupId:groupId
                ,friendlyURL:friendlyURL
            }});
        };
        service.updateGroup = function(groupId,parentGroupId,name,description,type,manualMembership,membershipRestriction,friendlyURL,active,serviceContext) {
            return SessionService.invoke({'/group/update-group':{
                groupId:groupId
                ,parentGroupId:parentGroupId
                ,name:name
                ,description:description
                ,type:type
                ,manualMembership:manualMembership
                ,membershipRestriction:membershipRestriction
                ,friendlyURL:friendlyURL
                ,active:active
                ,serviceContext:serviceContext
            }});
        };
        service.updateGroup = function(groupId,typeSettings) {
            return SessionService.invoke({'/group/update-group':{
                groupId:groupId
                ,typeSettings:typeSettings
            }});
        };
        service.updateStagedPortlets = function(groupId,stagedPortletIds) {
            return SessionService.invoke({'/group/update-staged-portlets':{
                groupId:groupId
                ,stagedPortletIds:stagedPortletIds
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();