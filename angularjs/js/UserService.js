(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UserService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroupUsers = function(groupId,userIds,serviceContext) {
            return SessionService.invoke({'/user/add-group-users':{
                groupId:groupId
                ,userIds:userIds
                ,serviceContext:serviceContext
            }});
        };
        service.addOrganizationUsers = function(organizationId,userIds) {
            return SessionService.invoke({'/user/add-organization-users':{
                organizationId:organizationId
                ,userIds:userIds
            }});
        };
        service.addPasswordPolicyUsers = function(passwordPolicyId,userIds) {
            return SessionService.invoke({'/user/add-password-policy-users':{
                passwordPolicyId:passwordPolicyId
                ,userIds:userIds
            }});
        };
        service.addRoleUsers = function(roleId,userIds) {
            return SessionService.invoke({'/user/add-role-users':{
                roleId:roleId
                ,userIds:userIds
            }});
        };
        service.addTeamUsers = function(teamId,userIds) {
            return SessionService.invoke({'/user/add-team-users':{
                teamId:teamId
                ,userIds:userIds
            }});
        };
        service.addUser = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/add-user':{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupIds:userGroupIds
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }});
        };
        service.addUser = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/add-user':{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupIds:userGroupIds
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,phones:phones
                ,websites:websites
                ,announcementsDelivers:announcementsDelivers
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }});
        };
        service.addUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke({'/user/add-user-group-users':{
                userGroupId:userGroupId
                ,userIds:userIds
            }});
        };
        service.addUserWithWorkflow = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/add-user-with-workflow':{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupIds:userGroupIds
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }});
        };
        service.addUserWithWorkflow = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/add-user-with-workflow':{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupIds:userGroupIds
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,phones:phones
                ,websites:websites
                ,announcementsDelivers:announcementsDelivers
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }});
        };
        service.deletePortrait = function(userId) {
            return SessionService.invoke({'/user/delete-portrait':{
                userId:userId
            }});
        };
        service.deleteRoleUser = function(roleId,userId) {
            return SessionService.invoke({'/user/delete-role-user':{
                roleId:roleId
                ,userId:userId
            }});
        };
        service.deleteUser = function(userId) {
            return SessionService.invoke({'/user/delete-user':{
                userId:userId
            }});
        };
        service.getCompanyUsers = function(companyId,start,end) {
            return SessionService.invoke({'/user/get-company-users':{
                companyId:companyId
                ,start:start
                ,end:end
            }});
        };
        service.getCompanyUsersCount = function(companyId) {
            return SessionService.invoke({'/user/get-company-users-count':{
                companyId:companyId
            }});
        };
        service.getGroupUserIds = function(groupId) {
            return SessionService.invoke({'/user/get-group-user-ids':{
                groupId:groupId
            }});
        };
        service.getGroupUsers = function(groupId) {
            return SessionService.invoke({'/user/get-group-users':{
                groupId:groupId
            }});
        };
        service.getOrganizationUserIds = function(organizationId) {
            return SessionService.invoke({'/user/get-organization-user-ids':{
                organizationId:organizationId
            }});
        };
        service.getOrganizationUsers = function(organizationId) {
            return SessionService.invoke({'/user/get-organization-users':{
                organizationId:organizationId
            }});
        };
        service.getRoleUserIds = function(roleId) {
            return SessionService.invoke({'/user/get-role-user-ids':{
                roleId:roleId
            }});
        };
        service.getUserByEmailAddress = function(companyId,emailAddress) {
            return SessionService.invoke({'/user/get-user-by-email-address':{
                companyId:companyId
                ,emailAddress:emailAddress
            }});
        };
        service.getUserById = function(userId) {
            return SessionService.invoke({'/user/get-user-by-id':{
                userId:userId
            }});
        };
        service.getUserByScreenName = function(companyId,screenName) {
            return SessionService.invoke({'/user/get-user-by-screen-name':{
                companyId:companyId
                ,screenName:screenName
            }});
        };
        service.getUserGroupUsers = function(userGroupId) {
            return SessionService.invoke({'/user/get-user-group-users':{
                userGroupId:userGroupId
            }});
        };
        service.getUserIdByEmailAddress = function(companyId,emailAddress) {
            return SessionService.invoke({'/user/get-user-id-by-email-address':{
                companyId:companyId
                ,emailAddress:emailAddress
            }});
        };
        service.getUserIdByScreenName = function(companyId,screenName) {
            return SessionService.invoke({'/user/get-user-id-by-screen-name':{
                companyId:companyId
                ,screenName:screenName
            }});
        };
        service.hasGroupUser = function(groupId,userId) {
            return SessionService.invoke({'/user/has-group-user':{
                groupId:groupId
                ,userId:userId
            }});
        };
        service.hasRoleUser = function(roleId,userId) {
            return SessionService.invoke({'/user/has-role-user':{
                roleId:roleId
                ,userId:userId
            }});
        };
        service.hasRoleUser = function(companyId,name,userId,inherited) {
            return SessionService.invoke({'/user/has-role-user':{
                companyId:companyId
                ,name:name
                ,userId:userId
                ,inherited:inherited
            }});
        };
        service.setRoleUsers = function(roleId,userIds) {
            return SessionService.invoke({'/user/set-role-users':{
                roleId:roleId
                ,userIds:userIds
            }});
        };
        service.setUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke({'/user/set-user-group-users':{
                userGroupId:userGroupId
                ,userIds:userIds
            }});
        };
        service.unsetGroupTeamsUsers = function(groupId,userIds) {
            return SessionService.invoke({'/user/unset-group-teams-users':{
                groupId:groupId
                ,userIds:userIds
            }});
        };
        service.unsetGroupUsers = function(groupId,userIds,serviceContext) {
            return SessionService.invoke({'/user/unset-group-users':{
                groupId:groupId
                ,userIds:userIds
                ,serviceContext:serviceContext
            }});
        };
        service.unsetOrganizationUsers = function(organizationId,userIds) {
            return SessionService.invoke({'/user/unset-organization-users':{
                organizationId:organizationId
                ,userIds:userIds
            }});
        };
        service.unsetPasswordPolicyUsers = function(passwordPolicyId,userIds) {
            return SessionService.invoke({'/user/unset-password-policy-users':{
                passwordPolicyId:passwordPolicyId
                ,userIds:userIds
            }});
        };
        service.unsetRoleUsers = function(roleId,userIds) {
            return SessionService.invoke({'/user/unset-role-users':{
                roleId:roleId
                ,userIds:userIds
            }});
        };
        service.unsetTeamUsers = function(teamId,userIds) {
            return SessionService.invoke({'/user/unset-team-users':{
                teamId:teamId
                ,userIds:userIds
            }});
        };
        service.unsetUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke({'/user/unset-user-group-users':{
                userGroupId:userGroupId
                ,userIds:userIds
            }});
        };
        service.updateAgreedToTermsOfUse = function(userId,agreedToTermsOfUse) {
            return SessionService.invoke({'/user/update-agreed-to-terms-of-use':{
                userId:userId
                ,agreedToTermsOfUse:agreedToTermsOfUse
            }});
        };
        service.updateEmailAddress = function(userId,password,emailAddress1,emailAddress2,serviceContext) {
            return SessionService.invoke({'/user/update-email-address':{
                userId:userId
                ,password:password
                ,emailAddress1:emailAddress1
                ,emailAddress2:emailAddress2
                ,serviceContext:serviceContext
            }});
        };
        service.updateIncompleteUser = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,updateUserInformation,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/update-incomplete-user':{
                companyId:companyId
                ,autoPassword:autoPassword
                ,password1:password1
                ,password2:password2
                ,autoScreenName:autoScreenName
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,locale:locale
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,jobTitle:jobTitle
                ,updateUserInformation:updateUserInformation
                ,sendEmail:sendEmail
                ,serviceContext:serviceContext
            }});
        };
        service.updateLockoutById = function(userId,lockout) {
            return SessionService.invoke({'/user/update-lockout-by-id':{
                userId:userId
                ,lockout:lockout
            }});
        };
        service.updateOpenId = function(userId,openId) {
            return SessionService.invoke({'/user/update-open-id':{
                userId:userId
                ,openId:openId
            }});
        };
        service.updateOrganizations = function(userId,organizationIds,serviceContext) {
            return SessionService.invoke({'/user/update-organizations':{
                userId:userId
                ,organizationIds:organizationIds
                ,serviceContext:serviceContext
            }});
        };
        service.updatePassword = function(userId,password1,password2,passwordReset) {
            return SessionService.invoke({'/user/update-password':{
                userId:userId
                ,password1:password1
                ,password2:password2
                ,passwordReset:passwordReset
            }});
        };
        service.updatePortrait = function(userId,bytes) {
            return SessionService.invoke({'/user/update-portrait':{
                userId:userId
                ,bytes:bytes
            }});
        };
        service.updateReminderQuery = function(userId,question,answer) {
            return SessionService.invoke({'/user/update-reminder-query':{
                userId:userId
                ,question:question
                ,answer:answer
            }});
        };
        service.updateScreenName = function(userId,screenName) {
            return SessionService.invoke({'/user/update-screen-name':{
                userId:userId
                ,screenName:screenName
            }});
        };
        service.updateStatus = function(userId,status) {
            return SessionService.invoke({'/user/update-status':{
                userId:userId
                ,status:status
            }});
        };
        service.updateStatus = function(userId,status,serviceContext) {
            return SessionService.invoke({'/user/update-status':{
                userId:userId
                ,status:status
                ,serviceContext:serviceContext
            }});
        };
        service.updateUser = function(userId,oldPassword,newPassword1,newPassword2,passwordReset,reminderQueryQuestion,reminderQueryAnswer,screenName,emailAddress,facebookId,openId,languageId,timeZoneId,greeting,comments,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,smsSn,aimSn,facebookSn,icqSn,jabberSn,msnSn,mySpaceSn,skypeSn,twitterSn,ymSn,jobTitle,groupIds,organizationIds,roleIds,userGroupRoles,userGroupIds,serviceContext) {
            return SessionService.invoke({'/user/update-user':{
                userId:userId
                ,oldPassword:oldPassword
                ,newPassword1:newPassword1
                ,newPassword2:newPassword2
                ,passwordReset:passwordReset
                ,reminderQueryQuestion:reminderQueryQuestion
                ,reminderQueryAnswer:reminderQueryAnswer
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,languageId:languageId
                ,timeZoneId:timeZoneId
                ,greeting:greeting
                ,comments:comments
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,smsSn:smsSn
                ,aimSn:aimSn
                ,facebookSn:facebookSn
                ,icqSn:icqSn
                ,jabberSn:jabberSn
                ,msnSn:msnSn
                ,mySpaceSn:mySpaceSn
                ,skypeSn:skypeSn
                ,twitterSn:twitterSn
                ,ymSn:ymSn
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupRoles:userGroupRoles
                ,userGroupIds:userGroupIds
                ,serviceContext:serviceContext
            }});
        };
        service.updateUser = function(userId,oldPassword,newPassword1,newPassword2,passwordReset,reminderQueryQuestion,reminderQueryAnswer,screenName,emailAddress,facebookId,openId,languageId,timeZoneId,greeting,comments,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,smsSn,aimSn,facebookSn,icqSn,jabberSn,msnSn,mySpaceSn,skypeSn,twitterSn,ymSn,jobTitle,groupIds,organizationIds,roleIds,userGroupRoles,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,serviceContext) {
            return SessionService.invoke({'/user/update-user':{
                userId:userId
                ,oldPassword:oldPassword
                ,newPassword1:newPassword1
                ,newPassword2:newPassword2
                ,passwordReset:passwordReset
                ,reminderQueryQuestion:reminderQueryQuestion
                ,reminderQueryAnswer:reminderQueryAnswer
                ,screenName:screenName
                ,emailAddress:emailAddress
                ,facebookId:facebookId
                ,openId:openId
                ,languageId:languageId
                ,timeZoneId:timeZoneId
                ,greeting:greeting
                ,comments:comments
                ,firstName:firstName
                ,middleName:middleName
                ,lastName:lastName
                ,prefixId:prefixId
                ,suffixId:suffixId
                ,male:male
                ,birthdayMonth:birthdayMonth
                ,birthdayDay:birthdayDay
                ,birthdayYear:birthdayYear
                ,smsSn:smsSn
                ,aimSn:aimSn
                ,facebookSn:facebookSn
                ,icqSn:icqSn
                ,jabberSn:jabberSn
                ,msnSn:msnSn
                ,mySpaceSn:mySpaceSn
                ,skypeSn:skypeSn
                ,twitterSn:twitterSn
                ,ymSn:ymSn
                ,jobTitle:jobTitle
                ,groupIds:groupIds
                ,organizationIds:organizationIds
                ,roleIds:roleIds
                ,userGroupRoles:userGroupRoles
                ,userGroupIds:userGroupIds
                ,addresses:addresses
                ,emailAddresses:emailAddresses
                ,phones:phones
                ,websites:websites
                ,announcementsDelivers:announcementsDelivers
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();