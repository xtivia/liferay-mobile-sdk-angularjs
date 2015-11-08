(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingitemService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addBookItems = function(groupId,categoryId,isbns) {
            return SessionService.invoke({'/shoppingitem/add-book-items':{
                groupId:groupId
                ,categoryId:categoryId
                ,isbns:isbns
            }});
        };
        service.addItem = function(groupId,categoryId,sku,name,description,properties,fieldsQuantities,requiresShipping,stockQuantity,featured,sale,smallImage,smallImageURL,smallFile,mediumImage,mediumImageURL,mediumFile,largeImage,largeImageURL,largeFile,itemFields,itemPrices,serviceContext) {
            return SessionService.invoke({'/shoppingitem/add-item':{
                groupId:groupId
                ,categoryId:categoryId
                ,sku:sku
                ,name:name
                ,description:description
                ,properties:properties
                ,fieldsQuantities:fieldsQuantities
                ,requiresShipping:requiresShipping
                ,stockQuantity:stockQuantity
                ,featured:featured
                ,sale:sale
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,mediumImage:mediumImage
                ,mediumImageURL:mediumImageURL
                ,mediumFile:mediumFile
                ,largeImage:largeImage
                ,largeImageURL:largeImageURL
                ,largeFile:largeFile
                ,itemFields:itemFields
                ,itemPrices:itemPrices
                ,serviceContext:serviceContext
            }});
        };
        service.deleteItem = function(itemId) {
            return SessionService.invoke({'/shoppingitem/delete-item':{
                itemId:itemId
            }});
        };
        service.getCategoriesItemsCount = function(groupId,categoryIds) {
            return SessionService.invoke({'/shoppingitem/get-categories-items-count':{
                groupId:groupId
                ,categoryIds:categoryIds
            }});
        };
        service.getItem = function(itemId) {
            return SessionService.invoke({'/shoppingitem/get-item':{
                itemId:itemId
            }});
        };
        service.getItems = function(groupId,categoryId) {
            return SessionService.invoke({'/shoppingitem/get-items':{
                groupId:groupId
                ,categoryId:categoryId
            }});
        };
        service.getItems = function(groupId,categoryId,start,end,obc) {
            return SessionService.invoke({'/shoppingitem/get-items':{
                groupId:groupId
                ,categoryId:categoryId
                ,start:start
                ,end:end
                ,obc:obc
            }});
        };
        service.getItemsCount = function(groupId,categoryId) {
            return SessionService.invoke({'/shoppingitem/get-items-count':{
                groupId:groupId
                ,categoryId:categoryId
            }});
        };
        service.getItemsPrevAndNext = function(itemId,obc) {
            return SessionService.invoke({'/shoppingitem/get-items-prev-and-next':{
                itemId:itemId
                ,obc:obc
            }});
        };
        service.updateItem = function(itemId,groupId,categoryId,sku,name,description,properties,fieldsQuantities,requiresShipping,stockQuantity,featured,sale,smallImage,smallImageURL,smallFile,mediumImage,mediumImageURL,mediumFile,largeImage,largeImageURL,largeFile,itemFields,itemPrices,serviceContext) {
            return SessionService.invoke({'/shoppingitem/update-item':{
                itemId:itemId
                ,groupId:groupId
                ,categoryId:categoryId
                ,sku:sku
                ,name:name
                ,description:description
                ,properties:properties
                ,fieldsQuantities:fieldsQuantities
                ,requiresShipping:requiresShipping
                ,stockQuantity:stockQuantity
                ,featured:featured
                ,sale:sale
                ,smallImage:smallImage
                ,smallImageURL:smallImageURL
                ,smallFile:smallFile
                ,mediumImage:mediumImage
                ,mediumImageURL:mediumImageURL
                ,mediumFile:mediumFile
                ,largeImage:largeImage
                ,largeImageURL:largeImageURL
                ,largeFile:largeFile
                ,itemFields:itemFields
                ,itemPrices:itemPrices
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();