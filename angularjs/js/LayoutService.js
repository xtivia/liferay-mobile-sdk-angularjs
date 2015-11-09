(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayout = function(groupId,privateLayout,parentLayoutId,name,title,description,type,hidden,friendlyURL,serviceContext) {
            return SessionService.invoke({'/layout/add-layout':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,name:name
                ,title:title
                ,description:description
                ,type:type
                ,hidden:hidden
                ,friendlyURL:friendlyURL
                ,serviceContext:serviceContext
            }});
        };
        service.addLayout = function(groupId,privateLayout,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURL,serviceContext) {
            return SessionService.invoke({'/layout/add-layout':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,localeNamesMap:localeNamesMap
                ,localeTitlesMap:localeTitlesMap
                ,descriptionMap:descriptionMap
                ,keywordsMap:keywordsMap
                ,robotsMap:robotsMap
                ,type:type
                ,hidden:hidden
                ,friendlyURL:friendlyURL
                ,serviceContext:serviceContext
            }});
        };
        service.addLayout = function(groupId,privateLayout,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,typeSettings,hidden,friendlyURLMap,serviceContext) {
            return SessionService.invoke({'/layout/add-layout':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,localeNamesMap:localeNamesMap
                ,localeTitlesMap:localeTitlesMap
                ,descriptionMap:descriptionMap
                ,keywordsMap:keywordsMap
                ,robotsMap:robotsMap
                ,type:type
                ,typeSettings:typeSettings
                ,hidden:hidden
                ,friendlyURLMap:friendlyURLMap
                ,serviceContext:serviceContext
            }});
        };
        service.deleteLayout = function(plid,serviceContext) {
            return SessionService.invoke({'/layout/delete-layout':{
                plid:plid
                ,serviceContext:serviceContext
            }});
        };
        service.deleteLayout = function(groupId,privateLayout,layoutId,serviceContext) {
            return SessionService.invoke({'/layout/delete-layout':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,serviceContext:serviceContext
            }});
        };
        service.deleteTempFileEntry = function(groupId,fileName,tempFolderName) {
            return SessionService.invoke({'/layout/delete-temp-file-entry':{
                groupId:groupId
                ,fileName:fileName
                ,tempFolderName:tempFolderName
            }});
        };
        service.exportLayouts = function(groupId,privateLayout,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-layouts':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }});
        };
        service.exportLayouts = function(groupId,privateLayout,layoutIds,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-layouts':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutIds:layoutIds
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }});
        };
        service.exportLayoutsAsFile = function(groupId,privateLayout,layoutIds,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-layouts-as-file':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutIds:layoutIds
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }});
        };
        service.exportLayoutsAsFileInBackground = function(taskName,groupId,privateLayout,layoutIds,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke({'/layout/export-layouts-as-file-in-background':{
                taskName:taskName
                ,groupId:groupId
                ,privateLayout:privateLayout
                ,layoutIds:layoutIds
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
                ,fileName:fileName
            }});
        };
        service.exportPortletInfo = function(companyId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-portlet-info':{
                companyId:companyId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }});
        };
        service.exportPortletInfo = function(plid,groupId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-portlet-info':{
                plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }});
        };
        service.exportPortletInfoAsFile = function(portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-portlet-info-as-file':{
                portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }});
        };
        service.exportPortletInfoAsFile = function(plid,groupId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-portlet-info-as-file':{
                plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
            }});
        };
        service.exportPortletInfoAsFileInBackground = function(taskName,portletId,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke({'/layout/export-portlet-info-as-file-in-background':{
                taskName:taskName
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
                ,fileName:fileName
            }});
        };
        service.exportPortletInfoAsFileInBackground = function(taskName,plid,groupId,portletId,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke({'/layout/export-portlet-info-as-file-in-background':{
                taskName:taskName
                ,plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,startDate:startDate
                ,endDate:endDate
                ,fileName:fileName
            }});
        };
        service.getAncestorLayouts = function(plid) {
            return SessionService.invoke({'/layout/get-ancestor-layouts':{
                plid:plid
            }});
        };
        service.getDefaultPlid = function(groupId,scopeGroupId,portletId) {
            return SessionService.invoke({'/layout/get-default-plid':{
                groupId:groupId
                ,scopeGroupId:scopeGroupId
                ,portletId:portletId
            }});
        };
        service.getDefaultPlid = function(groupId,scopeGroupId,privateLayout,portletId) {
            return SessionService.invoke({'/layout/get-default-plid':{
                groupId:groupId
                ,scopeGroupId:scopeGroupId
                ,privateLayout:privateLayout
                ,portletId:portletId
            }});
        };
        service.getLayoutByUuidAndGroupId = function(uuid,groupId,privateLayout) {
            return SessionService.invoke({'/layout/get-layout-by-uuid-and-group-id':{
                uuid:uuid
                ,groupId:groupId
                ,privateLayout:privateLayout
            }});
        };
        service.getLayoutName = function(groupId,privateLayout,layoutId,languageId) {
            return SessionService.invoke({'/layout/get-layout-name':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,languageId:languageId
            }});
        };
        service.getLayoutReferences = function(companyId,portletId,preferencesKey,preferencesValue) {
            return SessionService.invoke({'/layout/get-layout-references':{
                companyId:companyId
                ,portletId:portletId
                ,preferencesKey:preferencesKey
                ,preferencesValue:preferencesValue
            }});
        };
        service.getLayouts = function(groupId,privateLayout) {
            return SessionService.invoke({'/layout/get-layouts':{
                groupId:groupId
                ,privateLayout:privateLayout
            }});
        };
        service.getLayouts = function(groupId,privateLayout,parentLayoutId) {
            return SessionService.invoke({'/layout/get-layouts':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
            }});
        };
        service.getLayouts = function(groupId,privateLayout,parentLayoutId,incomplete,start,end) {
            return SessionService.invoke({'/layout/get-layouts':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,incomplete:incomplete
                ,start:start
                ,end:end
            }});
        };
        service.getLayoutsCount = function(groupId,privateLayout,parentLayoutId) {
            return SessionService.invoke({'/layout/get-layouts-count':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
            }});
        };
        service.getTempFileEntryNames = function(groupId,tempFolderName) {
            return SessionService.invoke({'/layout/get-temp-file-entry-names':{
                groupId:groupId
                ,tempFolderName:tempFolderName
            }});
        };
        service.importLayouts = function(groupId,privateLayout,parameterMap,bytes) {
            return SessionService.invoke({'/layout/import-layouts':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,bytes:bytes
            }});
        };
        service.importLayouts = function(groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke({'/layout/import-layouts':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,file:file
            }});
        };
        service.importLayoutsInBackground = function(taskName,groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke({'/layout/import-layouts-in-background':{
                taskName:taskName
                ,groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,file:file
            }});
        };
        service.importPortletInfo = function(portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/import-portlet-info':{
                portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }});
        };
        service.importPortletInfo = function(plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/import-portlet-info':{
                plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }});
        };
        service.importPortletInfoInBackground = function(taskName,portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/import-portlet-info-in-background':{
                taskName:taskName
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }});
        };
        service.importPortletInfoInBackground = function(taskName,plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/import-portlet-info-in-background':{
                taskName:taskName
                ,plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }});
        };
        service.schedulePublishToLive = function(sourceGroupId,targetGroupId,privateLayout,layoutIdMap,parameterMap,scope,startDate,endDate,groupName,cronText,schedulerStartDate,schedulerEndDate,description) {
            return SessionService.invoke({'/layout/schedule-publish-to-live':{
                sourceGroupId:sourceGroupId
                ,targetGroupId:targetGroupId
                ,privateLayout:privateLayout
                ,layoutIdMap:layoutIdMap
                ,parameterMap:parameterMap
                ,scope:scope
                ,startDate:startDate
                ,endDate:endDate
                ,groupName:groupName
                ,cronText:cronText
                ,schedulerStartDate:schedulerStartDate
                ,schedulerEndDate:schedulerEndDate
                ,description:description
            }});
        };
        service.schedulePublishToRemote = function(sourceGroupId,privateLayout,layoutIdMap,parameterMap,remoteAddress,remotePort,remotePathContext,secureConnection,remoteGroupId,remotePrivateLayout,startDate,endDate,groupName,cronText,schedulerStartDate,schedulerEndDate,description) {
            return SessionService.invoke({'/layout/schedule-publish-to-remote':{
                sourceGroupId:sourceGroupId
                ,privateLayout:privateLayout
                ,layoutIdMap:layoutIdMap
                ,parameterMap:parameterMap
                ,remoteAddress:remoteAddress
                ,remotePort:remotePort
                ,remotePathContext:remotePathContext
                ,secureConnection:secureConnection
                ,remoteGroupId:remoteGroupId
                ,remotePrivateLayout:remotePrivateLayout
                ,startDate:startDate
                ,endDate:endDate
                ,groupName:groupName
                ,cronText:cronText
                ,schedulerStartDate:schedulerStartDate
                ,schedulerEndDate:schedulerEndDate
                ,description:description
            }});
        };
        service.setLayouts = function(groupId,privateLayout,parentLayoutId,layoutIds,serviceContext) {
            return SessionService.invoke({'/layout/set-layouts':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parentLayoutId:parentLayoutId
                ,layoutIds:layoutIds
                ,serviceContext:serviceContext
            }});
        };
        service.unschedulePublishToLive = function(groupId,jobName,groupName) {
            return SessionService.invoke({'/layout/unschedule-publish-to-live':{
                groupId:groupId
                ,jobName:jobName
                ,groupName:groupName
            }});
        };
        service.unschedulePublishToRemote = function(groupId,jobName,groupName) {
            return SessionService.invoke({'/layout/unschedule-publish-to-remote':{
                groupId:groupId
                ,jobName:jobName
                ,groupName:groupName
            }});
        };
        service.updateLayout = function(groupId,privateLayout,layoutId,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURL,iconImage,iconBytes,serviceContext) {
            return SessionService.invoke({'/layout/update-layout':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,parentLayoutId:parentLayoutId
                ,localeNamesMap:localeNamesMap
                ,localeTitlesMap:localeTitlesMap
                ,descriptionMap:descriptionMap
                ,keywordsMap:keywordsMap
                ,robotsMap:robotsMap
                ,type:type
                ,hidden:hidden
                ,friendlyURL:friendlyURL
                ,iconImage:iconImage
                ,iconBytes:iconBytes
                ,serviceContext:serviceContext
            }});
        };
        service.updateLayout = function(groupId,privateLayout,layoutId,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURLMap,iconImage,iconBytes,serviceContext) {
            return SessionService.invoke({'/layout/update-layout':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,parentLayoutId:parentLayoutId
                ,localeNamesMap:localeNamesMap
                ,localeTitlesMap:localeTitlesMap
                ,descriptionMap:descriptionMap
                ,keywordsMap:keywordsMap
                ,robotsMap:robotsMap
                ,type:type
                ,hidden:hidden
                ,friendlyURLMap:friendlyURLMap
                ,iconImage:iconImage
                ,iconBytes:iconBytes
                ,serviceContext:serviceContext
            }});
        };
        service.updateLayout = function(groupId,privateLayout,layoutId,typeSettings) {
            return SessionService.invoke({'/layout/update-layout':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,typeSettings:typeSettings
            }});
        };
        service.updateLookAndFeel = function(groupId,privateLayout,layoutId,themeId,colorSchemeId,css,wapTheme) {
            return SessionService.invoke({'/layout/update-look-and-feel':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,themeId:themeId
                ,colorSchemeId:colorSchemeId
                ,css:css
                ,wapTheme:wapTheme
            }});
        };
        service.updateName = function(plid,name,languageId) {
            return SessionService.invoke({'/layout/update-name':{
                plid:plid
                ,name:name
                ,languageId:languageId
            }});
        };
        service.updateName = function(groupId,privateLayout,layoutId,name,languageId) {
            return SessionService.invoke({'/layout/update-name':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,name:name
                ,languageId:languageId
            }});
        };
        service.updateParentLayoutId = function(plid,parentPlid) {
            return SessionService.invoke({'/layout/update-parent-layout-id':{
                plid:plid
                ,parentPlid:parentPlid
            }});
        };
        service.updateParentLayoutId = function(groupId,privateLayout,layoutId,parentLayoutId) {
            return SessionService.invoke({'/layout/update-parent-layout-id':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,parentLayoutId:parentLayoutId
            }});
        };
        service.updateParentLayoutIdAndPriority = function(plid,parentPlid,priority) {
            return SessionService.invoke({'/layout/update-parent-layout-id-and-priority':{
                plid:plid
                ,parentPlid:parentPlid
                ,priority:priority
            }});
        };
        service.updatePriority = function(plid,priority) {
            return SessionService.invoke({'/layout/update-priority':{
                plid:plid
                ,priority:priority
            }});
        };
        service.updatePriority = function(groupId,privateLayout,layoutId,priority) {
            return SessionService.invoke({'/layout/update-priority':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,priority:priority
            }});
        };
        service.updatePriority = function(groupId,privateLayout,layoutId,nextLayoutId,previousLayoutId) {
            return SessionService.invoke({'/layout/update-priority':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutId:layoutId
                ,nextLayoutId:nextLayoutId
                ,previousLayoutId:previousLayoutId
            }});
        };
        service.validateImportLayoutsFile = function(groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke({'/layout/validate-import-layouts-file':{
                groupId:groupId
                ,privateLayout:privateLayout
                ,parameterMap:parameterMap
                ,file:file
            }});
        };
        service.validateImportPortletInfo = function(plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/validate-import-portlet-info':{
                plid:plid
                ,groupId:groupId
                ,portletId:portletId
                ,parameterMap:parameterMap
                ,file:file
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();