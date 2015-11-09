(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('ShoppingcouponService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCoupon = function(code,autoCode,name,description,startDateMonth,startDateDay,startDateYear,startDateHour,startDateMinute,endDateMonth,endDateDay,endDateYear,endDateHour,endDateMinute,neverExpire,active,limitCategories,limitSkus,minOrder,discount,discountType,serviceContext) {
            return SessionService.invoke({'/shoppingcoupon/add-coupon':{
                code:code
                ,autoCode:autoCode
                ,name:name
                ,description:description
                ,startDateMonth:startDateMonth
                ,startDateDay:startDateDay
                ,startDateYear:startDateYear
                ,startDateHour:startDateHour
                ,startDateMinute:startDateMinute
                ,endDateMonth:endDateMonth
                ,endDateDay:endDateDay
                ,endDateYear:endDateYear
                ,endDateHour:endDateHour
                ,endDateMinute:endDateMinute
                ,neverExpire:neverExpire
                ,active:active
                ,limitCategories:limitCategories
                ,limitSkus:limitSkus
                ,minOrder:minOrder
                ,discount:discount
                ,discountType:discountType
                ,serviceContext:serviceContext
            }});
        };
        service.deleteCoupon = function(groupId,couponId) {
            return SessionService.invoke({'/shoppingcoupon/delete-coupon':{
                groupId:groupId
                ,couponId:couponId
            }});
        };
        service.getCoupon = function(groupId,couponId) {
            return SessionService.invoke({'/shoppingcoupon/get-coupon':{
                groupId:groupId
                ,couponId:couponId
            }});
        };
        service.search = function(groupId,companyId,code,active,discountType,andOperator,start,end) {
            return SessionService.invoke({'/shoppingcoupon/search':{
                groupId:groupId
                ,companyId:companyId
                ,code:code
                ,active:active
                ,discountType:discountType
                ,andOperator:andOperator
                ,start:start
                ,end:end
            }});
        };
        service.updateCoupon = function(couponId,name,description,startDateMonth,startDateDay,startDateYear,startDateHour,startDateMinute,endDateMonth,endDateDay,endDateYear,endDateHour,endDateMinute,neverExpire,active,limitCategories,limitSkus,minOrder,discount,discountType,serviceContext) {
            return SessionService.invoke({'/shoppingcoupon/update-coupon':{
                couponId:couponId
                ,name:name
                ,description:description
                ,startDateMonth:startDateMonth
                ,startDateDay:startDateDay
                ,startDateYear:startDateYear
                ,startDateHour:startDateHour
                ,startDateMinute:startDateMinute
                ,endDateMonth:endDateMonth
                ,endDateDay:endDateDay
                ,endDateYear:endDateYear
                ,endDateHour:endDateHour
                ,endDateMinute:endDateMinute
                ,neverExpire:neverExpire
                ,active:active
                ,limitCategories:limitCategories
                ,limitSkus:limitSkus
                ,minOrder:minOrder
                ,discount:discount
                ,discountType:discountType
                ,serviceContext:serviceContext
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();