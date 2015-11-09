(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('PortletpreferencesService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteArchivedPreferences = function(portletItemId) {
            return SessionService.invoke({'/portletpreferences/delete-archived-preferences':{
                portletItemId:portletItemId
            }});
        };
        service.restoreArchivedPreferences = function(groupId,layout,portletId,portletItem,preferences) {
            return SessionService.invoke({'/portletpreferences/restore-archived-preferences':{
                groupId:groupId
                ,layout:layout
                ,portletId:portletId
                ,portletItem:portletItem
                ,preferences:preferences
            }});
        };
        service.restoreArchivedPreferences = function(groupId,layout,portletId,portletItemId,preferences) {
            return SessionService.invoke({'/portletpreferences/restore-archived-preferences':{
                groupId:groupId
                ,layout:layout
                ,portletId:portletId
                ,portletItemId:portletItemId
                ,preferences:preferences
            }});
        };
        service.restoreArchivedPreferences = function(groupId,name,layout,portletId,preferences) {
            return SessionService.invoke({'/portletpreferences/restore-archived-preferences':{
                groupId:groupId
                ,name:name
                ,layout:layout
                ,portletId:portletId
                ,preferences:preferences
            }});
        };
        service.updateArchivePreferences = function(userId,groupId,name,portletId,preferences) {
            return SessionService.invoke({'/portletpreferences/update-archive-preferences':{
                userId:userId
                ,groupId:groupId
                ,name:name
                ,portletId:portletId
                ,preferences:preferences
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();