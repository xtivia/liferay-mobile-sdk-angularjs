(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PluginsettingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.updatePluginSetting = function(companyId,pluginId,pluginType,roles,active) {
            return SessionService.invoke('/pluginsetting/update-plugin-setting',[{
                companyId:companyId
                ,pluginId:pluginId
                ,pluginType:pluginType
                ,roles:roles
                ,active:active
            }]);
        };
        
        // End generated service methods
        return service;
    }])
})();