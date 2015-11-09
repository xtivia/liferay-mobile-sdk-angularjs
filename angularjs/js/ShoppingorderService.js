(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ShoppingorderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.completeOrder = function(groupId,number,ppTxnId,ppPaymentStatus,ppPaymentGross,ppReceiverEmail,ppPayerEmail,serviceContext) {
            return SessionService.invoke({'/shoppingorder/complete-order':{
                groupId:groupId
                ,number:number
                ,ppTxnId:ppTxnId
                ,ppPaymentStatus:ppPaymentStatus
                ,ppPaymentGross:ppPaymentGross
                ,ppReceiverEmail:ppReceiverEmail
                ,ppPayerEmail:ppPayerEmail
                ,serviceContext:serviceContext
            }});
        };
        service.deleteOrder = function(groupId,orderId) {
            return SessionService.invoke({'/shoppingorder/delete-order':{
                groupId:groupId
                ,orderId:orderId
            }});
        };
        service.getOrder = function(groupId,orderId) {
            return SessionService.invoke({'/shoppingorder/get-order':{
                groupId:groupId
                ,orderId:orderId
            }});
        };
        service.sendEmail = function(groupId,orderId,emailType,serviceContext) {
            return SessionService.invoke({'/shoppingorder/send-email':{
                groupId:groupId
                ,orderId:orderId
                ,emailType:emailType
                ,serviceContext:serviceContext
            }});
        };
        service.updateOrder = function(groupId,orderId,billingFirstName,billingLastName,billingEmailAddress,billingCompany,billingStreet,billingCity,billingState,billingZip,billingCountry,billingPhone,shipToBilling,shippingFirstName,shippingLastName,shippingEmailAddress,shippingCompany,shippingStreet,shippingCity,shippingState,shippingZip,shippingCountry,shippingPhone,ccName,ccType,ccNumber,ccExpMonth,ccExpYear,ccVerNumber,comments) {
            return SessionService.invoke({'/shoppingorder/update-order':{
                groupId:groupId
                ,orderId:orderId
                ,billingFirstName:billingFirstName
                ,billingLastName:billingLastName
                ,billingEmailAddress:billingEmailAddress
                ,billingCompany:billingCompany
                ,billingStreet:billingStreet
                ,billingCity:billingCity
                ,billingState:billingState
                ,billingZip:billingZip
                ,billingCountry:billingCountry
                ,billingPhone:billingPhone
                ,shipToBilling:shipToBilling
                ,shippingFirstName:shippingFirstName
                ,shippingLastName:shippingLastName
                ,shippingEmailAddress:shippingEmailAddress
                ,shippingCompany:shippingCompany
                ,shippingStreet:shippingStreet
                ,shippingCity:shippingCity
                ,shippingState:shippingState
                ,shippingZip:shippingZip
                ,shippingCountry:shippingCountry
                ,shippingPhone:shippingPhone
                ,ccName:ccName
                ,ccType:ccType
                ,ccNumber:ccNumber
                ,ccExpMonth:ccExpMonth
                ,ccExpYear:ccExpYear
                ,ccVerNumber:ccVerNumber
                ,comments:comments
            }});
        };
        service.updateOrder = function(groupId,orderId,ppTxnId,ppPaymentStatus,ppPaymentGross,ppReceiverEmail,ppPayerEmail) {
            return SessionService.invoke({'/shoppingorder/update-order':{
                groupId:groupId
                ,orderId:orderId
                ,ppTxnId:ppTxnId
                ,ppPaymentStatus:ppPaymentStatus
                ,ppPaymentGross:ppPaymentGross
                ,ppReceiverEmail:ppReceiverEmail
                ,ppPayerEmail:ppPayerEmail
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();