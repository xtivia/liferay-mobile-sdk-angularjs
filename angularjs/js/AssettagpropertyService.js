(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssettagpropertyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTagProperty = function(tagId,key,value) {
            return service.invoke('/assettagproperty/add-tag-property',[{
                tagId:tagId
                ,key:key
                ,value:value
            }]);
        };
        service.deleteTagProperty = function(tagPropertyId) {
            return service.invoke('/assettagproperty/delete-tag-property',[{
                tagPropertyId:tagPropertyId
            }]);
        };
        service.getTagProperties = function(tagId) {
            return service.invoke('/assettagproperty/get-tag-properties',[{
                tagId:tagId
            }]);
        };
        service.getTagPropertyValues = function(companyId,key) {
            return service.invoke('/assettagproperty/get-tag-property-values',[{
                companyId:companyId
                ,key:key
            }]);
        };
        service.updateTagProperty = function(tagPropertyId,key,value) {
            return service.invoke('/assettagproperty/update-tag-property',[{
                tagPropertyId:tagPropertyId
                ,key:key
                ,value:value
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});