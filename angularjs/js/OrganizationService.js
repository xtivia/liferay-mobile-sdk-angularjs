(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('OrganizationService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke({'/organization/add-group-organizations':{
                groupId:groupId
                ,organizationIds:organizationIds
            }});
        };
        service.addOrganization = function(parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke({'/organization/add-organization':{
                parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,recursable:recursable
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,serviceContext:serviceContext
            }});
        };
        service.addOrganization = function(parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke({'/organization/add-organization':{
                parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,orgLabors:orgLabors
                ,phones:phones
                ,websites:websites
                ,serviceContext:serviceContext
            }});
        };
        service.addOrganization = function(parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke({'/organization/add-organization':{
                parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,recursable:recursable
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,orgLabors:orgLabors
                ,phones:phones
                ,websites:websites
                ,serviceContext:serviceContext
            }});
        };
        service.addOrganization = function(parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke({'/organization/add-organization':{
                parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,serviceContext:serviceContext
            }});
        };
        service.addPasswordPolicyOrganizations = function(passwordPolicyId,organizationIds) {
            return SessionService.invoke({'/organization/add-password-policy-organizations':{
                passwordPolicyId:passwordPolicyId
                ,organizationIds:organizationIds
            }});
        };
        service.deleteLogo = function(organizationId) {
            return SessionService.invoke({'/organization/delete-logo':{
                organizationId:organizationId
            }});
        };
        service.deleteOrganization = function(organizationId) {
            return SessionService.invoke({'/organization/delete-organization':{
                organizationId:organizationId
            }});
        };
        service.getManageableOrganizations = function(actionId,max) {
            return SessionService.invoke({'/organization/get-manageable-organizations':{
                actionId:actionId
                ,max:max
            }});
        };
        service.getOrganization = function(organizationId) {
            return SessionService.invoke({'/organization/get-organization':{
                organizationId:organizationId
            }});
        };
        service.getOrganizationId = function(companyId,name) {
            return SessionService.invoke({'/organization/get-organization-id':{
                companyId:companyId
                ,name:name
            }});
        };
        service.getOrganizations = function(companyId,parentOrganizationId) {
            return SessionService.invoke({'/organization/get-organizations':{
                companyId:companyId
                ,parentOrganizationId:parentOrganizationId
            }});
        };
        service.getOrganizations = function(companyId,parentOrganizationId,start,end) {
            return SessionService.invoke({'/organization/get-organizations':{
                companyId:companyId
                ,parentOrganizationId:parentOrganizationId
                ,start:start
                ,end:end
            }});
        };
        service.getOrganizationsCount = function(companyId,parentOrganizationId) {
            return SessionService.invoke({'/organization/get-organizations-count':{
                companyId:companyId
                ,parentOrganizationId:parentOrganizationId
            }});
        };
        service.getUserOrganizations = function(userId) {
            return SessionService.invoke({'/organization/get-user-organizations':{
                userId:userId
            }});
        };
        service.setGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke({'/organization/set-group-organizations':{
                groupId:groupId
                ,organizationIds:organizationIds
            }});
        };
        service.unsetGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke({'/organization/unset-group-organizations':{
                groupId:groupId
                ,organizationIds:organizationIds
            }});
        };
        service.unsetPasswordPolicyOrganizations = function(passwordPolicyId,organizationIds) {
            return SessionService.invoke({'/organization/unset-password-policy-organizations':{
                passwordPolicyId:passwordPolicyId
                ,organizationIds:organizationIds
            }});
        };
        service.updateOrganization = function(organizationId,parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke({'/organization/update-organization':{
                organizationId:organizationId
                ,parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,serviceContext:serviceContext
            }});
        };
        service.updateOrganization = function(organizationId,parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke({'/organization/update-organization':{
                organizationId:organizationId
                ,parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,recursable:recursable
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,serviceContext:serviceContext
            }});
        };
        service.updateOrganization = function(organizationId,parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke({'/organization/update-organization':{
                organizationId:organizationId
                ,parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,orgLabors:orgLabors
                ,phones:phones
                ,websites:websites
                ,serviceContext:serviceContext
            }});
        };
        service.updateOrganization = function(organizationId,parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke({'/organization/update-organization':{
                organizationId:organizationId
                ,parentOrganizationId:parentOrganizationId
                ,name:name
                ,type:type
                ,recursable:recursable
                ,regionId:regionId
                ,countryId:countryId
                ,statusId:statusId
                ,comments:comments
                ,site:site
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,orgLabors:orgLabors
                ,phones:phones
                ,websites:websites
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();