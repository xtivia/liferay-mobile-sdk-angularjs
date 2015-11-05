(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.updateLayoutSetPrototypeLinkEnabled = function(groupId,privateLayout,layoutSetPrototypeLinkEnabled,layoutSetPrototypeUuid) {
            return SessionService.invoke('/layoutset/update-layout-set-prototype-link-enabled',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,layoutSetPrototypeLinkEnabled:layoutSetPrototypeLinkEnabled
                ,layoutSetPrototypeUuid:layoutSetPrototypeUuid
            }]);
        };
        service.updateLogo = function(groupId,privateLayout,logo,bytes) {
            return SessionService.invoke('/layoutset/update-logo',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,logo:logo
                ,bytes:bytes
            }]);
        };
        service.updateLogo = function(groupId,privateLayout,logo,file) {
            return SessionService.invoke('/layoutset/update-logo',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,logo:logo
                ,file:file
            }]);
        };
        service.updateLookAndFeel = function(groupId,privateLayout,themeId,colorSchemeId,css,wapTheme) {
            return SessionService.invoke('/layoutset/update-look-and-feel',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,themeId:themeId
                ,colorSchemeId:colorSchemeId
                ,css:css
                ,wapTheme:wapTheme
            }]);
        };
        service.updateSettings = function(groupId,privateLayout,settings) {
            return SessionService.invoke('/layoutset/update-settings',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,settings:settings
            }]);
        };
        service.updateVirtualHost = function(groupId,privateLayout,virtualHost) {
            return SessionService.invoke('/layoutset/update-virtual-host',[{
                groupId:groupId
                ,privateLayout:privateLayout
                ,virtualHost:virtualHost
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();