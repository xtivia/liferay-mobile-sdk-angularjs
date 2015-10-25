(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileshortcutService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFileShortcut = function(groupId,folderId,toFileEntryId,serviceContext) {
            return service.invoke('/dlfileshortcut/add-file-shortcut',[{
                groupId:groupId
                ,folderId:folderId
                ,toFileEntryId:toFileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        service.deleteFileShortcut = function(fileShortcutId) {
            return service.invoke('/dlfileshortcut/delete-file-shortcut',[{
                fileShortcutId:fileShortcutId
            }]);
        };
        service.getFileShortcut = function(fileShortcutId) {
            return service.invoke('/dlfileshortcut/get-file-shortcut',[{
                fileShortcutId:fileShortcutId
            }]);
        };
        service.updateFileShortcut = function(fileShortcutId,folderId,toFileEntryId,serviceContext) {
            return service.invoke('/dlfileshortcut/update-file-shortcut',[{
                fileShortcutId:fileShortcutId
                ,folderId:folderId
                ,toFileEntryId:toFileEntryId
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});