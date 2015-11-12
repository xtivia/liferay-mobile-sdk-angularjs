(function() {
    'use strict';

    angular
        .module('mobile.sdk.v62', ['ngCookies']);
})();
(function() {
    'use strict';
    angular
        .module('mobile.sdk.v62')
    ;
})();
(function() {
    'use strict';

    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function(searchString, position) {
            var subjectString = this.toString();
            if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
    }

    angular
        .module('mobile.sdk.v62')
        .factory('SessionService', ['Base64','$cookies','$http','$q',function(Base64,$cookies,$http,$q) {
            var factory = this;
            var service = {};

            factory.jsonWsUrl = 'api/jsonws/invoke';
            factory.server = 'http://liferaydemo.xtivia.com';
            factory.authenticationTypes = {
                BASIC: 'basic',
                DIGEST: 'digest'
            };


            service.setCredentials = function (username, password) {
                var authdata = Base64.encode(username + ':' + password);
                $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                $cookies.putObject('globals', {
                    currentUser: {
                        username: username,
                        authtype: factory.authenticationTypes.BASIC,
                        authdata: authdata
                    }
                });
            };

            service.clearCredentials = function () {
                $cookies.remove('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';
            };

            service.getCredentials = function () {
                var globals = $cookies.getObject('globals');
                if(globals) {
                    $http.defaults.headers.common['Authorization'] = 'Basic ' + globals.currentUser.authdata; // jshint ignore:line
                    return globals.currentUser;
                }
                return {};
            };

            service.invoke = function (command) {
                var url = (document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1)?factory.server:'/';
                if(url.endsWith('/')) {
                    url = url + factory.jsonWsUrl;
                } else {
                    url = url + '/' + factory.jsonWsUrl;
                }
                return $q(function(resolve,reject) {
                    $http.post(url,[command]).then(function(resp) {
                        if(resp.data&&Array.isArray(resp.data)) {
                            resolve(resp.data.length>0?resp.data[0]:{});
                        } else {
                            reject(resp.data);
                        }
                    },function(err) {
                        reject(err);
                    });
                });
            };

            service.getImageUrlPrefix = function() {
                return (document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1)?factory.server+'/image':'/image';
            };

            service.setServer = function(server) {
                factory.server = server;
                service.server = factory.server;
            };

            service.authenticationTypes = factory.authenticationTypes;
            service.jsonWsUrl = factory.jsonWsUrl;
            service.server = factory.server;

            return service;
        }])
        .factory('Base64', function () {
            /* jshint ignore:start */

            var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

            return {
                encode: function (input) {
                    var output = "";
                    var chr1, chr2, chr3 = "";
                    var enc1, enc2, enc3, enc4 = "";
                    var i = 0;

                    do {
                        chr1 = input.charCodeAt(i++);
                        chr2 = input.charCodeAt(i++);
                        chr3 = input.charCodeAt(i++);

                        enc1 = chr1 >> 2;
                        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                        enc4 = chr3 & 63;

                        if (isNaN(chr2)) {
                            enc3 = enc4 = 64;
                        } else if (isNaN(chr3)) {
                            enc4 = 64;
                        }

                        output = output +
                            keyStr.charAt(enc1) +
                            keyStr.charAt(enc2) +
                            keyStr.charAt(enc3) +
                            keyStr.charAt(enc4);
                        chr1 = chr2 = chr3 = "";
                        enc1 = enc2 = enc3 = enc4 = "";
                    } while (i < input.length);

                    return output;
                },

                decode: function (input) {
                    var output = "";
                    var chr1, chr2, chr3 = "";
                    var enc1, enc2, enc3, enc4 = "";
                    var i = 0;

                    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                    var base64test = /[^A-Za-z0-9\+\/\=]/g;
                    if (base64test.exec(input)) {
                        window.alert("There were invalid base64 characters in the input text.\n" +
                            "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                            "Expect errors in decoding.");
                    }
                    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                    do {
                        enc1 = keyStr.indexOf(input.charAt(i++));
                        enc2 = keyStr.indexOf(input.charAt(i++));
                        enc3 = keyStr.indexOf(input.charAt(i++));
                        enc4 = keyStr.indexOf(input.charAt(i++));

                        chr1 = (enc1 << 2) | (enc2 >> 4);
                        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                        chr3 = ((enc3 & 3) << 6) | enc4;

                        output = output + String.fromCharCode(chr1);

                        if (enc3 != 64) {
                            output = output + String.fromCharCode(chr2);
                        }
                        if (enc4 != 64) {
                            output = output + String.fromCharCode(chr3);
                        }

                        chr1 = chr2 = chr3 = "";
                        enc1 = enc2 = enc3 = enc4 = "";

                    } while (i < input.length);

                    return output;
                }
            };

            /* jshint ignore:end */

        })
        .factory('SigninService', ['SessionService','GroupService','UserService','$q', function (SessionService,GroupService,UserService,$q) {
            var service = {};

            service.signin = function(authentication) {
                if(authentication) {
                    if(authentication.authenticationType === SessionService.authenticationTypes.BASIC) {
                        SessionService.setCredentials(authentication.credentials.username,authentication.credentials.password);
                    }
                    return $q(function(resolve, reject) {
                        GroupService.getUserSites().then(function(resp){
                            var site = resp[0];
                            UserService.getUserByEmailAddress(site.companyId,authentication.credentials.username)
                                .then(function(resp) {
                                    resolve(resp);
                                },function(err) {
                                    reject(err);
                                });
                        },function(err){
                            reject(err);
                        });
                    });
                }
            };

            service.signinWithCookie = function() {
                var currentUser = SessionService.getCredentials();
                return $q(function(resolve, reject) {
                    GroupService.getUserSites().then(function(resp){
                        var site = resp[0];
                        UserService.getUserByEmailAddress(site.companyId,currentUser.username)
                            .then(function(resp) {
                                resolve(resp);
                            },function(err) {
                                reject(err);
                            });
                    },function(err){
                        reject(err);
                    });
                });
            };

            return service;
        }]);
})();

(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AddressService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addAddress = function(className,classPK,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary) {
            return SessionService.invoke({'/address/add-address':{
                className:className // string
                ,classPK:classPK // long
                ,street1:street1 // string
                ,street2:street2 // string
                ,street3:street3 // string
                ,city:city // string
                ,zip:zip // string
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,typeId:typeId // int
                ,mailing:mailing // boolean
                ,primary:primary // boolean
            }});
        };
        service.addAddress_1 = function(className,classPK,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary,serviceContext) {
            return SessionService.invoke({'/address/add-address':{
                className:className // string
                ,classPK:classPK // long
                ,street1:street1 // string
                ,street2:street2 // string
                ,street3:street3 // string
                ,city:city // string
                ,zip:zip // string
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,typeId:typeId // int
                ,mailing:mailing // boolean
                ,primary:primary // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteAddress = function(addressId) {
            return SessionService.invoke({'/address/delete-address':{
                addressId:addressId // long
            }});
        };
        service.getAddress = function(addressId) {
            return SessionService.invoke({'/address/get-address':{
                addressId:addressId // long
            }});
        };
        service.getAddresses = function(className,classPK) {
            return SessionService.invoke({'/address/get-addresses':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.updateAddress = function(addressId,street1,street2,street3,city,zip,regionId,countryId,typeId,mailing,primary) {
            return SessionService.invoke({'/address/update-address':{
                addressId:addressId // long
                ,street1:street1 // string
                ,street2:street2 // string
                ,street3:street3 // string
                ,city:city // string
                ,zip:zip // string
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,typeId:typeId // int
                ,mailing:mailing // boolean
                ,primary:primary // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AnnouncementsdeliveryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.updateDelivery = function(userId,type,email,sms,website) {
            return SessionService.invoke({'/announcementsdelivery/update-delivery':{
                userId:userId // long
                ,type:type // string
                ,email:email // boolean
                ,sms:sms // boolean
                ,website:website // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AnnouncementsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEntry = function(plid,classNameId,classPK,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority,alert) {
            return SessionService.invoke({'/announcementsentry/add-entry':{
                plid:plid // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,title:title // string
                ,content:content // string
                ,url:url // string
                ,type:type // string
                ,displayDateMonth:displayDateMonth // int
                ,displayDateDay:displayDateDay // int
                ,displayDateYear:displayDateYear // int
                ,displayDateHour:displayDateHour // int
                ,displayDateMinute:displayDateMinute // int
                ,expirationDateMonth:expirationDateMonth // int
                ,expirationDateDay:expirationDateDay // int
                ,expirationDateYear:expirationDateYear // int
                ,expirationDateHour:expirationDateHour // int
                ,expirationDateMinute:expirationDateMinute // int
                ,priority:priority // int
                ,alert:alert // boolean
            }});
        };
        service.addEntry_1 = function(plid,classNameId,classPK,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,displayImmediately,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority,alert) {
            return SessionService.invoke({'/announcementsentry/add-entry':{
                plid:plid // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,title:title // string
                ,content:content // string
                ,url:url // string
                ,type:type // string
                ,displayDateMonth:displayDateMonth // int
                ,displayDateDay:displayDateDay // int
                ,displayDateYear:displayDateYear // int
                ,displayDateHour:displayDateHour // int
                ,displayDateMinute:displayDateMinute // int
                ,displayImmediately:displayImmediately // boolean
                ,expirationDateMonth:expirationDateMonth // int
                ,expirationDateDay:expirationDateDay // int
                ,expirationDateYear:expirationDateYear // int
                ,expirationDateHour:expirationDateHour // int
                ,expirationDateMinute:expirationDateMinute // int
                ,priority:priority // int
                ,alert:alert // boolean
            }});
        };
        service.deleteEntry = function(entryId) {
            return SessionService.invoke({'/announcementsentry/delete-entry':{
                entryId:entryId // long
            }});
        };
        service.getEntry = function(entryId) {
            return SessionService.invoke({'/announcementsentry/get-entry':{
                entryId:entryId // long
            }});
        };
        service.updateEntry = function(entryId,title,content,url,type,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,displayImmediately,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,priority) {
            return SessionService.invoke({'/announcementsentry/update-entry':{
                entryId:entryId // long
                ,title:title // string
                ,content:content // string
                ,url:url // string
                ,type:type // string
                ,displayDateMonth:displayDateMonth // int
                ,displayDateDay:displayDateDay // int
                ,displayDateYear:displayDateYear // int
                ,displayDateHour:displayDateHour // int
                ,displayDateMinute:displayDateMinute // int
                ,displayImmediately:displayImmediately // boolean
                ,expirationDateMonth:expirationDateMonth // int
                ,expirationDateDay:expirationDateDay // int
                ,expirationDateYear:expirationDateYear // int
                ,expirationDateHour:expirationDateHour // int
                ,expirationDateMinute:expirationDateMinute // int
                ,priority:priority // int
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AnnouncementsflagService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFlag = function(entryId,value) {
            return SessionService.invoke({'/announcementsflag/add-flag':{
                entryId:entryId // long
                ,value:value // int
            }});
        };
        service.deleteFlag = function(flagId) {
            return SessionService.invoke({'/announcementsflag/delete-flag':{
                flagId:flagId // long
            }});
        };
        service.getFlag = function(entryId,value) {
            return SessionService.invoke({'/announcementsflag/get-flag':{
                entryId:entryId // long
                ,value:value // int
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCategory = function(title,vocabularyId,serviceContext) {
            return SessionService.invoke({'/assetcategory/add-category':{
                title:title // string
                ,vocabularyId:vocabularyId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addCategory_1 = function(parentCategoryId,titleMap,descriptionMap,vocabularyId,categoryProperties,serviceContext) {
            return SessionService.invoke({'/assetcategory/add-category':{
                parentCategoryId:parentCategoryId // long
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,vocabularyId:vocabularyId // long
                ,categoryProperties:categoryProperties // string[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteCategories = function(categoryIds) {
            return SessionService.invoke({'/assetcategory/delete-categories':{
                categoryIds:categoryIds // long[]
            }});
        };
        service.deleteCategories_1 = function(categoryIds,serviceContext) {
            return SessionService.invoke({'/assetcategory/delete-categories':{
                categoryIds:categoryIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteCategory = function(categoryId) {
            return SessionService.invoke({'/assetcategory/delete-category':{
                categoryId:categoryId // long
            }});
        };
        service.getCategories = function(className,classPK) {
            return SessionService.invoke({'/assetcategory/get-categories':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.getCategory = function(categoryId) {
            return SessionService.invoke({'/assetcategory/get-category':{
                categoryId:categoryId // long
            }});
        };
        service.getChildCategories = function(parentCategoryId) {
            return SessionService.invoke({'/assetcategory/get-child-categories':{
                parentCategoryId:parentCategoryId // long
            }});
        };
        service.getChildCategories_1 = function(parentCategoryId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-child-categories':{
                parentCategoryId:parentCategoryId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getJsonSearch = function(groupId,name,vocabularyIds,start,end) {
            return SessionService.invoke({'/assetcategory/get-json-search':{
                groupId:groupId // long
                ,name:name // string
                ,vocabularyIds:vocabularyIds // long[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getJsonVocabularyCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-json-vocabulary-categories':{
                vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getJsonVocabularyCategories_1 = function(groupId,title,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-json-vocabulary-categories':{
                groupId:groupId // long
                ,title:title // string
                ,vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularyCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories':{
                vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularyCategories_1 = function(parentCategoryId,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories':{
                parentCategoryId:parentCategoryId // long
                ,vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularyCategories_2 = function(groupId,name,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories':{
                groupId:groupId // long
                ,name:name // string
                ,vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularyCategoriesCount = function(groupId,vocabularyId) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories-count':{
                groupId:groupId // long
                ,vocabularyId:vocabularyId // long
            }});
        };
        service.getVocabularyCategoriesCount_1 = function(groupId,name,vocabularyId) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories-count':{
                groupId:groupId // long
                ,name:name // string
                ,vocabularyId:vocabularyId // long
            }});
        };
        service.getVocabularyCategoriesDisplay = function(vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories-display':{
                vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularyCategoriesDisplay_1 = function(groupId,name,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-categories-display':{
                groupId:groupId // long
                ,name:name // string
                ,vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularyRootCategories = function(vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-root-categories':{
                vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularyRootCategories_1 = function(groupId,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-root-categories':{
                groupId:groupId // long
                ,vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularyRootCategoriesCount = function(groupId,vocabularyId) {
            return SessionService.invoke({'/assetcategory/get-vocabulary-root-categories-count':{
                groupId:groupId // long
                ,vocabularyId:vocabularyId // long
            }});
        };
        service.moveCategory = function(categoryId,parentCategoryId,vocabularyId,serviceContext) {
            return SessionService.invoke({'/assetcategory/move-category':{
                categoryId:categoryId // long
                ,parentCategoryId:parentCategoryId // long
                ,vocabularyId:vocabularyId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.search = function(groupId,name,categoryProperties,start,end) {
            return SessionService.invoke({'/assetcategory/search':{
                groupId:groupId // long
                ,name:name // string
                ,categoryProperties:categoryProperties // string[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.search_1 = function(groupIds,title,vocabularyIds,start,end) {
            return SessionService.invoke({'/assetcategory/search':{
                groupIds:groupIds // long[]
                ,title:title // string
                ,vocabularyIds:vocabularyIds // long[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.search_2 = function(groupId,keywords,vocabularyId,start,end,obc) {
            return SessionService.invoke({'/assetcategory/search':{
                groupId:groupId // long
                ,keywords:keywords // string
                ,vocabularyId:vocabularyId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.updateCategory = function(categoryId,parentCategoryId,titleMap,descriptionMap,vocabularyId,categoryProperties,serviceContext) {
            return SessionService.invoke({'/assetcategory/update-category':{
                categoryId:categoryId // long
                ,parentCategoryId:parentCategoryId // long
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,vocabularyId:vocabularyId // long
                ,categoryProperties:categoryProperties // string[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetcategorypropertyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCategoryProperty = function(entryId,key,value) {
            return SessionService.invoke({'/assetcategoryproperty/add-category-property':{
                entryId:entryId // long
                ,key:key // string
                ,value:value // string
            }});
        };
        service.deleteCategoryProperty = function(categoryPropertyId) {
            return SessionService.invoke({'/assetcategoryproperty/delete-category-property':{
                categoryPropertyId:categoryPropertyId // long
            }});
        };
        service.getCategoryProperties = function(entryId) {
            return SessionService.invoke({'/assetcategoryproperty/get-category-properties':{
                entryId:entryId // long
            }});
        };
        service.getCategoryPropertyValues = function(companyId,key) {
            return SessionService.invoke({'/assetcategoryproperty/get-category-property-values':{
                companyId:companyId // long
                ,key:key // string
            }});
        };
        service.updateCategoryProperty = function(categoryPropertyId,key,value) {
            return SessionService.invoke({'/assetcategoryproperty/update-category-property':{
                categoryPropertyId:categoryPropertyId // long
                ,key:key // string
                ,value:value // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getCompanyEntries = function(companyId,start,end) {
            return SessionService.invoke({'/assetentry/get-company-entries':{
                companyId:companyId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getCompanyEntriesCount = function(companyId) {
            return SessionService.invoke({'/assetentry/get-company-entries-count':{
                companyId:companyId // long
            }});
        };
        service.getEntries = function(entryQuery) {
            return SessionService.invoke({'/assetentry/get-entries':{
                entryQuery:entryQuery // object<com.liferay.portlet.asset.service.persistence.AssetEntryQuery>
            }});
        };
        service.getEntriesCount = function(entryQuery) {
            return SessionService.invoke({'/assetentry/get-entries-count':{
                entryQuery:entryQuery // object<com.liferay.portlet.asset.service.persistence.AssetEntryQuery>
            }});
        };
        service.getEntry = function(entryId) {
            return SessionService.invoke({'/assetentry/get-entry':{
                entryId:entryId // long
            }});
        };
        service.incrementViewCounter = function(className,classPK) {
            return SessionService.invoke({'/assetentry/increment-view-counter':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.updateEntry = function(groupId,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke({'/assetentry/update-entry':{
                groupId:groupId // long
                ,className:className // string
                ,classPK:classPK // long
                ,classUuid:classUuid // string
                ,classTypeId:classTypeId // long
                ,categoryIds:categoryIds // long[]
                ,tagNames:tagNames // string[]
                ,visible:visible // boolean
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,expirationDate:expirationDate // long
                ,mimeType:mimeType // string
                ,title:title // string
                ,description:description // string
                ,summary:summary // string
                ,url:url // string
                ,layoutUuid:layoutUuid // string
                ,height:height // int
                ,width:width // int
                ,priority:priority // object<java.lang.Integer>
                ,sync:sync // boolean
            }});
        };
        service.updateEntry_1 = function(groupId,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,publishDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke({'/assetentry/update-entry':{
                groupId:groupId // long
                ,className:className // string
                ,classPK:classPK // long
                ,classUuid:classUuid // string
                ,classTypeId:classTypeId // long
                ,categoryIds:categoryIds // long[]
                ,tagNames:tagNames // string[]
                ,visible:visible // boolean
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,publishDate:publishDate // long
                ,expirationDate:expirationDate // long
                ,mimeType:mimeType // string
                ,title:title // string
                ,description:description // string
                ,summary:summary // string
                ,url:url // string
                ,layoutUuid:layoutUuid // string
                ,height:height // int
                ,width:width // int
                ,priority:priority // object<java.lang.Integer>
                ,sync:sync // boolean
            }});
        };
        service.updateEntry_2 = function(groupId,createDate,modifiedDate,className,classPK,classUuid,classTypeId,categoryIds,tagNames,visible,startDate,endDate,expirationDate,mimeType,title,description,summary,url,layoutUuid,height,width,priority,sync) {
            return SessionService.invoke({'/assetentry/update-entry':{
                groupId:groupId // long
                ,createDate:createDate // long
                ,modifiedDate:modifiedDate // long
                ,className:className // string
                ,classPK:classPK // long
                ,classUuid:classUuid // string
                ,classTypeId:classTypeId // long
                ,categoryIds:categoryIds // long[]
                ,tagNames:tagNames // string[]
                ,visible:visible // boolean
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,expirationDate:expirationDate // long
                ,mimeType:mimeType // string
                ,title:title // string
                ,description:description // string
                ,summary:summary // string
                ,url:url // string
                ,layoutUuid:layoutUuid // string
                ,height:height // int
                ,width:width // int
                ,priority:priority // object<java.lang.Integer>
                ,sync:sync // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssettagService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTag = function(name,tagProperties,serviceContext) {
            return SessionService.invoke({'/assettag/add-tag':{
                name:name // string
                ,tagProperties:tagProperties // string[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteTag = function(tagId) {
            return SessionService.invoke({'/assettag/delete-tag':{
                tagId:tagId // long
            }});
        };
        service.deleteTags = function(tagIds) {
            return SessionService.invoke({'/assettag/delete-tags':{
                tagIds:tagIds // long[]
            }});
        };
        service.getGroupTags = function(groupId) {
            return SessionService.invoke({'/assettag/get-group-tags':{
                groupId:groupId // long
            }});
        };
        service.getGroupTags_1 = function(groupId,start,end,obc) {
            return SessionService.invoke({'/assettag/get-group-tags':{
                groupId:groupId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupTagsCount = function(groupId) {
            return SessionService.invoke({'/assettag/get-group-tags-count':{
                groupId:groupId // long
            }});
        };
        service.getGroupTagsDisplay = function(groupId,name,start,end) {
            return SessionService.invoke({'/assettag/get-group-tags-display':{
                groupId:groupId // long
                ,name:name // string
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupsTags = function(groupIds) {
            return SessionService.invoke({'/assettag/get-groups-tags':{
                groupIds:groupIds // long[]
            }});
        };
        service.getJsonGroupTags = function(groupId,name,start,end) {
            return SessionService.invoke({'/assettag/get-json-group-tags':{
                groupId:groupId // long
                ,name:name // string
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getTag = function(tagId) {
            return SessionService.invoke({'/assettag/get-tag':{
                tagId:tagId // long
            }});
        };
        service.getTags = function(className,classPK) {
            return SessionService.invoke({'/assettag/get-tags':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.getTags_1 = function(groupId,classNameId,name) {
            return SessionService.invoke({'/assettag/get-tags':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,name:name // string
            }});
        };
        service.getTags_2 = function(groupId,name,tagProperties,start,end) {
            return SessionService.invoke({'/assettag/get-tags':{
                groupId:groupId // long
                ,name:name // string
                ,tagProperties:tagProperties // string[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getTags_3 = function(groupIds,name,tagProperties,start,end) {
            return SessionService.invoke({'/assettag/get-tags':{
                groupIds:groupIds // long[]
                ,name:name // string
                ,tagProperties:tagProperties // string[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getTags_4 = function(groupId,classNameId,name,start,end,obc) {
            return SessionService.invoke({'/assettag/get-tags':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,name:name // string
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getTagsCount = function(groupId,name) {
            return SessionService.invoke({'/assettag/get-tags-count':{
                groupId:groupId // long
                ,name:name // string
            }});
        };
        service.getTagsCount_1 = function(groupId,classNameId,name) {
            return SessionService.invoke({'/assettag/get-tags-count':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,name:name // string
            }});
        };
        service.getTagsCount_2 = function(groupId,name,tagProperties) {
            return SessionService.invoke({'/assettag/get-tags-count':{
                groupId:groupId // long
                ,name:name // string
                ,tagProperties:tagProperties // string[]
            }});
        };
        service.mergeTags = function(fromTagId,toTagId,overrideProperties) {
            return SessionService.invoke({'/assettag/merge-tags':{
                fromTagId:fromTagId // long
                ,toTagId:toTagId // long
                ,overrideProperties:overrideProperties // boolean
            }});
        };
        service.mergeTags_1 = function(fromTagIds,toTagId,overrideProperties) {
            return SessionService.invoke({'/assettag/merge-tags':{
                fromTagIds:fromTagIds // long[]
                ,toTagId:toTagId // long
                ,overrideProperties:overrideProperties // boolean
            }});
        };
        service.search = function(groupId,name,tagProperties,start,end) {
            return SessionService.invoke({'/assettag/search':{
                groupId:groupId // long
                ,name:name // string
                ,tagProperties:tagProperties // string[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.search_1 = function(groupIds,name,tagProperties,start,end) {
            return SessionService.invoke({'/assettag/search':{
                groupIds:groupIds // long[]
                ,name:name // string
                ,tagProperties:tagProperties // string[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.updateTag = function(tagId,name,tagProperties,serviceContext) {
            return SessionService.invoke({'/assettag/update-tag':{
                tagId:tagId // long
                ,name:name // string
                ,tagProperties:tagProperties // string[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssettagpropertyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTagProperty = function(tagId,key,value) {
            return SessionService.invoke({'/assettagproperty/add-tag-property':{
                tagId:tagId // long
                ,key:key // string
                ,value:value // string
            }});
        };
        service.deleteTagProperty = function(tagPropertyId) {
            return SessionService.invoke({'/assettagproperty/delete-tag-property':{
                tagPropertyId:tagPropertyId // long
            }});
        };
        service.getTagProperties = function(tagId) {
            return SessionService.invoke({'/assettagproperty/get-tag-properties':{
                tagId:tagId // long
            }});
        };
        service.getTagPropertyValues = function(companyId,key) {
            return SessionService.invoke({'/assettagproperty/get-tag-property-values':{
                companyId:companyId // long
                ,key:key // string
            }});
        };
        service.updateTagProperty = function(tagPropertyId,key,value) {
            return SessionService.invoke({'/assettagproperty/update-tag-property':{
                tagPropertyId:tagPropertyId // long
                ,key:key // string
                ,value:value // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('AssetvocabularyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addVocabulary = function(title,serviceContext) {
            return SessionService.invoke({'/assetvocabulary/add-vocabulary':{
                title:title // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addVocabulary_1 = function(titleMap,descriptionMap,settings,serviceContext) {
            return SessionService.invoke({'/assetvocabulary/add-vocabulary':{
                titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,settings:settings // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addVocabulary_2 = function(title,titleMap,descriptionMap,settings,serviceContext) {
            return SessionService.invoke({'/assetvocabulary/add-vocabulary':{
                title:title // string
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,settings:settings // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteVocabularies = function(vocabularyIds) {
            return SessionService.invoke({'/assetvocabulary/delete-vocabularies':{
                vocabularyIds:vocabularyIds // long[]
            }});
        };
        service.deleteVocabularies_1 = function(vocabularyIds,serviceContext) {
            return SessionService.invoke({'/assetvocabulary/delete-vocabularies':{
                vocabularyIds:vocabularyIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteVocabulary = function(vocabularyId) {
            return SessionService.invoke({'/assetvocabulary/delete-vocabulary':{
                vocabularyId:vocabularyId // long
            }});
        };
        service.getCompanyVocabularies = function(companyId) {
            return SessionService.invoke({'/assetvocabulary/get-company-vocabularies':{
                companyId:companyId // long
            }});
        };
        service.getGroupVocabularies = function(groupId) {
            return SessionService.invoke({'/assetvocabulary/get-group-vocabularies':{
                groupId:groupId // long
            }});
        };
        service.getGroupVocabularies_1 = function(groupId,createDefaultVocabulary) {
            return SessionService.invoke({'/assetvocabulary/get-group-vocabularies':{
                groupId:groupId // long
                ,createDefaultVocabulary:createDefaultVocabulary // boolean
            }});
        };
        service.getGroupVocabularies_2 = function(groupId,start,end,obc) {
            return SessionService.invoke({'/assetvocabulary/get-group-vocabularies':{
                groupId:groupId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupVocabularies_3 = function(groupId,name,start,end,obc) {
            return SessionService.invoke({'/assetvocabulary/get-group-vocabularies':{
                groupId:groupId // long
                ,name:name // string
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupVocabulariesCount = function(groupId) {
            return SessionService.invoke({'/assetvocabulary/get-group-vocabularies-count':{
                groupId:groupId // long
            }});
        };
        service.getGroupVocabulariesCount_1 = function(groupId,name) {
            return SessionService.invoke({'/assetvocabulary/get-group-vocabularies-count':{
                groupId:groupId // long
                ,name:name // string
            }});
        };
        service.getGroupVocabulariesDisplay = function(groupId,name,start,end,obc) {
            return SessionService.invoke({'/assetvocabulary/get-group-vocabularies-display':{
                groupId:groupId // long
                ,name:name // string
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupVocabulariesDisplay_1 = function(groupId,title,start,end,addDefaultVocabulary,obc) {
            return SessionService.invoke({'/assetvocabulary/get-group-vocabularies-display':{
                groupId:groupId // long
                ,title:title // string
                ,start:start // int
                ,end:end // int
                ,addDefaultVocabulary:addDefaultVocabulary // boolean
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupsVocabularies = function(groupIds) {
            return SessionService.invoke({'/assetvocabulary/get-groups-vocabularies':{
                groupIds:groupIds // long[]
            }});
        };
        service.getGroupsVocabularies_1 = function(groupIds,className) {
            return SessionService.invoke({'/assetvocabulary/get-groups-vocabularies':{
                groupIds:groupIds // long[]
                ,className:className // string
            }});
        };
        service.getJsonGroupVocabularies = function(groupId,name,start,end,obc) {
            return SessionService.invoke({'/assetvocabulary/get-json-group-vocabularies':{
                groupId:groupId // long
                ,name:name // string
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getVocabularies = function(vocabularyIds) {
            return SessionService.invoke({'/assetvocabulary/get-vocabularies':{
                vocabularyIds:vocabularyIds // long[]
            }});
        };
        service.getVocabulary = function(vocabularyId) {
            return SessionService.invoke({'/assetvocabulary/get-vocabulary':{
                vocabularyId:vocabularyId // long
            }});
        };
        service.updateVocabulary = function(vocabularyId,titleMap,descriptionMap,settings,serviceContext) {
            return SessionService.invoke({'/assetvocabulary/update-vocabulary':{
                vocabularyId:vocabularyId // long
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,settings:settings // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateVocabulary_1 = function(vocabularyId,title,titleMap,descriptionMap,settings,serviceContext) {
            return SessionService.invoke({'/assetvocabulary/update-vocabulary':{
                vocabularyId:vocabularyId // long
                ,title:title // string
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,settings:settings // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BackgroundtaskService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getBackgroundTaskStatusJson = function(backgroundTaskId) {
            return SessionService.invoke({'/backgroundtask/get-background-task-status-json':{
                backgroundTaskId:backgroundTaskId // long
            }});
        };
        service.getBackgroundTasksCount = function(groupId,taskExecutorClassName,completed) {
            return SessionService.invoke({'/backgroundtask/get-background-tasks-count':{
                groupId:groupId // long
                ,taskExecutorClassName:taskExecutorClassName // string
                ,completed:completed // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BlogsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteEntry = function(entryId) {
            return SessionService.invoke({'/blogsentry/delete-entry':{
                entryId:entryId // long
            }});
        };
        service.getCompanyEntries = function(companyId,displayDate,status,max) {
            return SessionService.invoke({'/blogsentry/get-company-entries':{
                companyId:companyId // long
                ,displayDate:displayDate // long
                ,status:status // int
                ,max:max // int
            }});
        };
        service.getCompanyEntriesRss = function(companyId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/blogsentry/get-company-entries-rss':{
                companyId:companyId // long
                ,displayDate:displayDate // long
                ,status:status // int
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.getEntry = function(entryId) {
            return SessionService.invoke({'/blogsentry/get-entry':{
                entryId:entryId // long
            }});
        };
        service.getEntry_1 = function(groupId,urlTitle) {
            return SessionService.invoke({'/blogsentry/get-entry':{
                groupId:groupId // long
                ,urlTitle:urlTitle // string
            }});
        };
        service.getGroupEntries = function(groupId,status,max) {
            return SessionService.invoke({'/blogsentry/get-group-entries':{
                groupId:groupId // long
                ,status:status // int
                ,max:max // int
            }});
        };
        service.getGroupEntries_1 = function(groupId,displayDate,status,max) {
            return SessionService.invoke({'/blogsentry/get-group-entries':{
                groupId:groupId // long
                ,displayDate:displayDate // long
                ,status:status // int
                ,max:max // int
            }});
        };
        service.getGroupEntries_2 = function(groupId,status,start,end) {
            return SessionService.invoke({'/blogsentry/get-group-entries':{
                groupId:groupId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupEntries_3 = function(groupId,displayDate,status,start,end) {
            return SessionService.invoke({'/blogsentry/get-group-entries':{
                groupId:groupId // long
                ,displayDate:displayDate // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupEntriesCount = function(groupId,status) {
            return SessionService.invoke({'/blogsentry/get-group-entries-count':{
                groupId:groupId // long
                ,status:status // int
            }});
        };
        service.getGroupEntriesCount_1 = function(groupId,displayDate,status) {
            return SessionService.invoke({'/blogsentry/get-group-entries-count':{
                groupId:groupId // long
                ,displayDate:displayDate // long
                ,status:status // int
            }});
        };
        service.getGroupEntriesRss = function(groupId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/blogsentry/get-group-entries-rss':{
                groupId:groupId // long
                ,displayDate:displayDate // long
                ,status:status // int
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.getGroupsEntries = function(companyId,groupId,displayDate,status,max) {
            return SessionService.invoke({'/blogsentry/get-groups-entries':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,displayDate:displayDate // long
                ,status:status // int
                ,max:max // int
            }});
        };
        service.getOrganizationEntries = function(organizationId,displayDate,status,max) {
            return SessionService.invoke({'/blogsentry/get-organization-entries':{
                organizationId:organizationId // long
                ,displayDate:displayDate // long
                ,status:status // int
                ,max:max // int
            }});
        };
        service.getOrganizationEntriesRss = function(organizationId,displayDate,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/blogsentry/get-organization-entries-rss':{
                organizationId:organizationId // long
                ,displayDate:displayDate // long
                ,status:status // int
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.moveEntryToTrash = function(entryId) {
            return SessionService.invoke({'/blogsentry/move-entry-to-trash':{
                entryId:entryId // long
            }});
        };
        service.restoreEntryFromTrash = function(entryId) {
            return SessionService.invoke({'/blogsentry/restore-entry-from-trash':{
                entryId:entryId // long
            }});
        };
        service.subscribe = function(groupId) {
            return SessionService.invoke({'/blogsentry/subscribe':{
                groupId:groupId // long
            }});
        };
        service.unsubscribe = function(groupId) {
            return SessionService.invoke({'/blogsentry/unsubscribe':{
                groupId:groupId // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BookmarksentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEntry = function(groupId,folderId,name,url,description,serviceContext) {
            return SessionService.invoke({'/bookmarksentry/add-entry':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,name:name // string
                ,url:url // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/delete-entry':{
                entryId:entryId // long
            }});
        };
        service.getEntries = function(groupId,folderId,start,end) {
            return SessionService.invoke({'/bookmarksentry/get-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getEntries_1 = function(groupId,folderId,start,end,orderByComparator) {
            return SessionService.invoke({'/bookmarksentry/get-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getEntriesCount = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksentry/get-entries-count':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getEntriesCount_1 = function(groupId,folderId,status) {
            return SessionService.invoke({'/bookmarksentry/get-entries-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
            }});
        };
        service.getEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/get-entry':{
                entryId:entryId // long
            }});
        };
        service.getFoldersEntriesCount = function(groupId,folderIds) {
            return SessionService.invoke({'/bookmarksentry/get-folders-entries-count':{
                groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
            }});
        };
        service.getGroupEntries = function(groupId,start,end) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries':{
                groupId:groupId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupEntries_1 = function(groupId,userId,start,end) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupEntries_2 = function(groupId,userId,rootFolderId,start,end) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupEntriesCount = function(groupId) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries-count':{
                groupId:groupId // long
            }});
        };
        service.getGroupEntriesCount_1 = function(groupId,userId) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries-count':{
                groupId:groupId // long
                ,userId:userId // long
            }});
        };
        service.getGroupEntriesCount_2 = function(groupId,userId,rootFolderId) {
            return SessionService.invoke({'/bookmarksentry/get-group-entries-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
            }});
        };
        service.moveEntry = function(entryId,parentFolderId) {
            return SessionService.invoke({'/bookmarksentry/move-entry':{
                entryId:entryId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.moveEntryFromTrash = function(entryId,parentFolderId) {
            return SessionService.invoke({'/bookmarksentry/move-entry-from-trash':{
                entryId:entryId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.moveEntryToTrash = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/move-entry-to-trash':{
                entryId:entryId // long
            }});
        };
        service.openEntry = function(entry) {
            return SessionService.invoke({'/bookmarksentry/open-entry':{
                entry:entry // object<com.liferay.portlet.bookmarks.model.BookmarksEntry>
            }});
        };
        service.openEntry_1 = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/open-entry':{
                entryId:entryId // long
            }});
        };
        service.restoreEntryFromTrash = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/restore-entry-from-trash':{
                entryId:entryId // long
            }});
        };
        service.search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke({'/bookmarksentry/search':{
                groupId:groupId // long
                ,creatorUserId:creatorUserId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.subscribeEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/subscribe-entry':{
                entryId:entryId // long
            }});
        };
        service.unsubscribeEntry = function(entryId) {
            return SessionService.invoke({'/bookmarksentry/unsubscribe-entry':{
                entryId:entryId // long
            }});
        };
        service.updateEntry = function(entryId,groupId,folderId,name,url,description,serviceContext) {
            return SessionService.invoke({'/bookmarksentry/update-entry':{
                entryId:entryId // long
                ,groupId:groupId // long
                ,folderId:folderId // long
                ,name:name // string
                ,url:url // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('BookmarksfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFolder = function(parentFolderId,name,description,serviceContext) {
            return SessionService.invoke({'/bookmarksfolder/add-folder':{
                parentFolderId:parentFolderId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFolder = function(folderId) {
            return SessionService.invoke({'/bookmarksfolder/delete-folder':{
                folderId:folderId // long
            }});
        };
        service.deleteFolder_1 = function(folderId,includeTrashedEntries) {
            return SessionService.invoke({'/bookmarksfolder/delete-folder':{
                folderId:folderId // long
                ,includeTrashedEntries:includeTrashedEntries // boolean
            }});
        };
        service.getFolder = function(folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folder':{
                folderId:folderId // long
            }});
        };
        service.getFolderIds = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folder-ids':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getFolders = function(groupId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders':{
                groupId:groupId // long
            }});
        };
        service.getFolders_1 = function(groupId,parentFolderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getFolders_2 = function(groupId,parentFolderId,start,end) {
            return SessionService.invoke({'/bookmarksfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFolders_3 = function(groupId,parentFolderId,status,start,end) {
            return SessionService.invoke({'/bookmarksfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFoldersAndEntries = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getFoldersAndEntries_1 = function(groupId,folderId,status) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
            }});
        };
        service.getFoldersAndEntries_2 = function(groupId,folderId,status,start,end) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFoldersAndEntriesCount = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries-count':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getFoldersAndEntriesCount_1 = function(groupId,folderId,status) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-and-entries-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
            }});
        };
        service.getFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-count':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getFoldersCount_1 = function(groupId,parentFolderId,status) {
            return SessionService.invoke({'/bookmarksfolder/get-folders-count':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
            }});
        };
        service.getSubfolderIds = function(folderIds,groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/get-subfolder-ids':{
                folderIds:folderIds // list<object<java.lang.Long>>
                ,groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getSubfolderIds_1 = function(groupId,folderId,recurse) {
            return SessionService.invoke({'/bookmarksfolder/get-subfolder-ids':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,recurse:recurse // boolean
            }});
        };
        service.moveFolder = function(folderId,parentFolderId) {
            return SessionService.invoke({'/bookmarksfolder/move-folder':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.moveFolderFromTrash = function(folderId,parentFolderId) {
            return SessionService.invoke({'/bookmarksfolder/move-folder-from-trash':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.moveFolderToTrash = function(folderId) {
            return SessionService.invoke({'/bookmarksfolder/move-folder-to-trash':{
                folderId:folderId // long
            }});
        };
        service.restoreFolderFromTrash = function(folderId) {
            return SessionService.invoke({'/bookmarksfolder/restore-folder-from-trash':{
                folderId:folderId // long
            }});
        };
        service.subscribeFolder = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/subscribe-folder':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.unsubscribeFolder = function(groupId,folderId) {
            return SessionService.invoke({'/bookmarksfolder/unsubscribe-folder':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.updateFolder = function(folderId,parentFolderId,name,description,mergeWithParentFolder,serviceContext) {
            return SessionService.invoke({'/bookmarksfolder/update-folder':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,description:description // string
                ,mergeWithParentFolder:mergeWithParentFolder // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ClassnameService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.fetchClassName = function(value) {
            return SessionService.invoke({'/classname/fetch-class-name':{
                value:value // string
            }});
        };
        service.fetchClassNameId = function(clazz) {
            return SessionService.invoke({'/classname/fetch-class-name-id':{
                clazz:clazz // java.lang.Class<>
            }});
        };
        service.fetchClassNameId_1 = function(value) {
            return SessionService.invoke({'/classname/fetch-class-name-id':{
                value:value // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('CompanyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteLogo = function(companyId) {
            return SessionService.invoke({'/company/delete-logo':{
                companyId:companyId // long
            }});
        };
        service.getCompanyById = function(companyId) {
            return SessionService.invoke({'/company/get-company-by-id':{
                companyId:companyId // long
            }});
        };
        service.getCompanyByLogoId = function(logoId) {
            return SessionService.invoke({'/company/get-company-by-logo-id':{
                logoId:logoId // long
            }});
        };
        service.getCompanyByMx = function(mx) {
            return SessionService.invoke({'/company/get-company-by-mx':{
                mx:mx // string
            }});
        };
        service.getCompanyByVirtualHost = function(virtualHost) {
            return SessionService.invoke({'/company/get-company-by-virtual-host':{
                virtualHost:virtualHost // string
            }});
        };
        service.getCompanyByWebId = function(webId) {
            return SessionService.invoke({'/company/get-company-by-web-id':{
                webId:webId // string
            }});
        };
        service.updateCompany = function(companyId,virtualHost,mx,homeURL,name,legalName,legalId,legalType,sicCode,tickerSymbol,industry,type,size) {
            return SessionService.invoke({'/company/update-company':{
                companyId:companyId // long
                ,virtualHost:virtualHost // string
                ,mx:mx // string
                ,homeURL:homeURL // string
                ,name:name // string
                ,legalName:legalName // string
                ,legalId:legalId // string
                ,legalType:legalType // string
                ,sicCode:sicCode // string
                ,tickerSymbol:tickerSymbol // string
                ,industry:industry // string
                ,type:type // string
                ,size:size // string
            }});
        };
        service.updateCompany_1 = function(companyId,virtualHost,mx,maxUsers,active) {
            return SessionService.invoke({'/company/update-company':{
                companyId:companyId // long
                ,virtualHost:virtualHost // string
                ,mx:mx // string
                ,maxUsers:maxUsers // int
                ,active:active // boolean
            }});
        };
        service.updateDisplay = function(companyId,languageId,timeZoneId) {
            return SessionService.invoke({'/company/update-display':{
                companyId:companyId // long
                ,languageId:languageId // string
                ,timeZoneId:timeZoneId // string
            }});
        };
        service.updateLogo = function(companyId,bytes) {
            return SessionService.invoke({'/company/update-logo':{
                companyId:companyId // long
                ,bytes:bytes // byte[]
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ContactService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getContact = function(contactId) {
            return SessionService.invoke({'/contact/get-contact':{
                contactId:contactId // long
            }});
        };
        service.getContacts = function(classNameId,classPK,start,end,orderByComparator) {
            return SessionService.invoke({'/contact/get-contacts':{
                classNameId:classNameId // long
                ,classPK:classPK // long
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getContactsCount = function(classNameId,classPK) {
            return SessionService.invoke({'/contact/get-contacts-count':{
                classNameId:classNameId // long
                ,classPK:classPK // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('CountryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCountry = function(name,a2,a3,number,idd,active) {
            return SessionService.invoke({'/country/add-country':{
                name:name // string
                ,a2:a2 // string
                ,a3:a3 // string
                ,number:number // string
                ,idd:idd // string
                ,active:active // boolean
            }});
        };
        service.fetchCountry = function(countryId) {
            return SessionService.invoke({'/country/fetch-country':{
                countryId:countryId // long
            }});
        };
        service.fetchCountryByA2 = function(a2) {
            return SessionService.invoke({'/country/fetch-country-by-a2':{
                a2:a2 // string
            }});
        };
        service.fetchCountryByA3 = function(a3) {
            return SessionService.invoke({'/country/fetch-country-by-a3':{
                a3:a3 // string
            }});
        };
        service.getCountries = function() {
            return SessionService.invoke({'/country/get-countries':{
                
            }});
        };
        service.getCountries_1 = function(active) {
            return SessionService.invoke({'/country/get-countries':{
                active:active // boolean
            }});
        };
        service.getCountry = function(countryId) {
            return SessionService.invoke({'/country/get-country':{
                countryId:countryId // long
            }});
        };
        service.getCountryByA2 = function(a2) {
            return SessionService.invoke({'/country/get-country-by-a2':{
                a2:a2 // string
            }});
        };
        service.getCountryByA3 = function(a3) {
            return SessionService.invoke({'/country/get-country-by-a3':{
                a3:a3 // string
            }});
        };
        service.getCountryByName = function(name) {
            return SessionService.invoke({'/country/get-country-by-name':{
                name:name // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdlrecordService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRecord = function(groupId,recordSetId,displayIndex,fields,serviceContext) {
            return SessionService.invoke({'/ddlrecord/add-record':{
                groupId:groupId // long
                ,recordSetId:recordSetId // long
                ,displayIndex:displayIndex // int
                ,fields:fields // object<com.liferay.portlet.dynamicdatamapping.storage.Fields>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addRecord_1 = function(groupId,recordSetId,displayIndex,fieldsMap,serviceContext) {
            return SessionService.invoke({'/ddlrecord/add-record':{
                groupId:groupId // long
                ,recordSetId:recordSetId // long
                ,displayIndex:displayIndex // int
                ,fieldsMap:fieldsMap // map<string,object>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteRecord = function(recordId) {
            return SessionService.invoke({'/ddlrecord/delete-record':{
                recordId:recordId // long
            }});
        };
        service.deleteRecordLocale = function(recordId,locale,serviceContext) {
            return SessionService.invoke({'/ddlrecord/delete-record-locale':{
                recordId:recordId // long
                ,locale:locale // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.getRecord = function(recordId) {
            return SessionService.invoke({'/ddlrecord/get-record':{
                recordId:recordId // long
            }});
        };
        service.revertRecordVersion = function(recordId,version,serviceContext) {
            return SessionService.invoke({'/ddlrecord/revert-record-version':{
                recordId:recordId // long
                ,version:version // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateRecord = function(recordId,displayIndex,fieldsMap,mergeFields,serviceContext) {
            return SessionService.invoke({'/ddlrecord/update-record':{
                recordId:recordId // long
                ,displayIndex:displayIndex // int
                ,fieldsMap:fieldsMap // map<string,object>
                ,mergeFields:mergeFields // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateRecord_1 = function(recordId,majorVersion,displayIndex,fields,mergeFields,serviceContext) {
            return SessionService.invoke({'/ddlrecord/update-record':{
                recordId:recordId // long
                ,majorVersion:majorVersion // boolean
                ,displayIndex:displayIndex // int
                ,fields:fields // object<com.liferay.portlet.dynamicdatamapping.storage.Fields>
                ,mergeFields:mergeFields // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdlrecordsetService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRecordSet = function(groupId,ddmStructureId,recordSetKey,nameMap,descriptionMap,minDisplayRows,scope,serviceContext) {
            return SessionService.invoke({'/ddlrecordset/add-record-set':{
                groupId:groupId // long
                ,ddmStructureId:ddmStructureId // long
                ,recordSetKey:recordSetKey // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,minDisplayRows:minDisplayRows // int
                ,scope:scope // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteRecordSet = function(recordSetId) {
            return SessionService.invoke({'/ddlrecordset/delete-record-set':{
                recordSetId:recordSetId // long
            }});
        };
        service.getRecordSet = function(recordSetId) {
            return SessionService.invoke({'/ddlrecordset/get-record-set':{
                recordSetId:recordSetId // long
            }});
        };
        service.search = function(companyId,groupId,keywords,scope,start,end,orderByComparator) {
            return SessionService.invoke({'/ddlrecordset/search':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,keywords:keywords // string
                ,scope:scope // int
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_1 = function(companyId,groupId,name,description,scope,andOperator,start,end,orderByComparator) {
            return SessionService.invoke({'/ddlrecordset/search':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,description:description // string
                ,scope:scope // int
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.searchCount = function(companyId,groupId,keywords,scope) {
            return SessionService.invoke({'/ddlrecordset/search-count':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,keywords:keywords // string
                ,scope:scope // int
            }});
        };
        service.searchCount_1 = function(companyId,groupId,name,description,scope,andOperator) {
            return SessionService.invoke({'/ddlrecordset/search-count':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,description:description // string
                ,scope:scope // int
                ,andOperator:andOperator // boolean
            }});
        };
        service.updateMinDisplayRows = function(recordSetId,minDisplayRows,serviceContext) {
            return SessionService.invoke({'/ddlrecordset/update-min-display-rows':{
                recordSetId:recordSetId // long
                ,minDisplayRows:minDisplayRows // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateRecordSet = function(recordSetId,ddmStructureId,nameMap,descriptionMap,minDisplayRows,serviceContext) {
            return SessionService.invoke({'/ddlrecordset/update-record-set':{
                recordSetId:recordSetId // long
                ,ddmStructureId:ddmStructureId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,minDisplayRows:minDisplayRows // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateRecordSet_1 = function(groupId,ddmStructureId,recordSetKey,nameMap,descriptionMap,minDisplayRows,serviceContext) {
            return SessionService.invoke({'/ddlrecordset/update-record-set':{
                groupId:groupId // long
                ,ddmStructureId:ddmStructureId // long
                ,recordSetKey:recordSetKey // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,minDisplayRows:minDisplayRows // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdmstructureService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addStructure = function(groupId,parentStructureId,classNameId,structureKey,nameMap,descriptionMap,xsd,storageType,type,serviceContext) {
            return SessionService.invoke({'/ddmstructure/add-structure':{
                groupId:groupId // long
                ,parentStructureId:parentStructureId // long
                ,classNameId:classNameId // long
                ,structureKey:structureKey // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsd:xsd // string
                ,storageType:storageType // string
                ,type:type // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addStructure_1 = function(userId,groupId,parentStructureKey,classNameId,structureKey,nameMap,descriptionMap,xsd,storageType,type,serviceContext) {
            return SessionService.invoke({'/ddmstructure/add-structure':{
                userId:userId // long
                ,groupId:groupId // long
                ,parentStructureKey:parentStructureKey // string
                ,classNameId:classNameId // long
                ,structureKey:structureKey // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsd:xsd // string
                ,storageType:storageType // string
                ,type:type // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addStructure_2 = function(userId,groupId,classNameId,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke({'/ddmstructure/add-structure':{
                userId:userId // long
                ,groupId:groupId // long
                ,classNameId:classNameId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsd:xsd // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyStructure = function(structureId,serviceContext) {
            return SessionService.invoke({'/ddmstructure/copy-structure':{
                structureId:structureId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyStructure_1 = function(structureId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke({'/ddmstructure/copy-structure':{
                structureId:structureId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteStructure = function(structureId) {
            return SessionService.invoke({'/ddmstructure/delete-structure':{
                structureId:structureId // long
            }});
        };
        service.fetchStructure = function(groupId,classNameId,structureKey) {
            return SessionService.invoke({'/ddmstructure/fetch-structure':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,structureKey:structureKey // string
            }});
        };
        service.getStructure = function(structureId) {
            return SessionService.invoke({'/ddmstructure/get-structure':{
                structureId:structureId // long
            }});
        };
        service.getStructure_1 = function(groupId,classNameId,structureKey) {
            return SessionService.invoke({'/ddmstructure/get-structure':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,structureKey:structureKey // string
            }});
        };
        service.getStructure_2 = function(groupId,classNameId,structureKey,includeGlobalStructures) {
            return SessionService.invoke({'/ddmstructure/get-structure':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,structureKey:structureKey // string
                ,includeGlobalStructures:includeGlobalStructures // boolean
            }});
        };
        service.getStructures = function(groupId) {
            return SessionService.invoke({'/ddmstructure/get-structures':{
                groupId:groupId // long
            }});
        };
        service.getStructures_1 = function(groupIds) {
            return SessionService.invoke({'/ddmstructure/get-structures':{
                groupIds:groupIds // long[]
            }});
        };
        service.getStructures_2 = function(groupIds,classNameId) {
            return SessionService.invoke({'/ddmstructure/get-structures':{
                groupIds:groupIds // long[]
                ,classNameId:classNameId // long
            }});
        };
        service.getStructures_3 = function(groupIds,classNameId,start,end) {
            return SessionService.invoke({'/ddmstructure/get-structures':{
                groupIds:groupIds // long[]
                ,classNameId:classNameId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.search = function(companyId,groupIds,classNameIds,name,description,storageType,type,andOperator,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmstructure/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,classNameIds:classNameIds // long[]
                ,name:name // string
                ,description:description // string
                ,storageType:storageType // string
                ,type:type // int
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_1 = function(companyId,groupIds,classNameIds,keywords,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmstructure/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,classNameIds:classNameIds // long[]
                ,keywords:keywords // string
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.searchCount = function(companyId,groupIds,classNameIds,keywords) {
            return SessionService.invoke({'/ddmstructure/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,classNameIds:classNameIds // long[]
                ,keywords:keywords // string
            }});
        };
        service.searchCount_1 = function(companyId,groupIds,classNameIds,name,description,storageType,type,andOperator) {
            return SessionService.invoke({'/ddmstructure/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,classNameIds:classNameIds // long[]
                ,name:name // string
                ,description:description // string
                ,storageType:storageType // string
                ,type:type // int
                ,andOperator:andOperator // boolean
            }});
        };
        service.updateStructure = function(structureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke({'/ddmstructure/update-structure':{
                structureId:structureId // long
                ,parentStructureId:parentStructureId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsd:xsd // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateStructure_1 = function(groupId,parentStructureId,classNameId,structureKey,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke({'/ddmstructure/update-structure':{
                groupId:groupId // long
                ,parentStructureId:parentStructureId // long
                ,classNameId:classNameId // long
                ,structureKey:structureKey // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsd:xsd // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DdmtemplateService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTemplate = function(groupId,classNameId,classPK,nameMap,descriptionMap,type,mode,language,script,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/add-template':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,mode:mode // string
                ,language:language // string
                ,script:script // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addTemplate_1 = function(groupId,classNameId,classPK,templateKey,nameMap,descriptionMap,type,mode,language,script,cacheable,smallImage,smallImageURL,smallImageFile,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/add-template':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,templateKey:templateKey // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,mode:mode // string
                ,language:language // string
                ,script:script // string
                ,cacheable:cacheable // boolean
                ,smallImage:smallImage // boolean
                ,smallImageURL:smallImageURL // string
                ,smallImageFile:smallImageFile // object<java.io.File>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyTemplate = function(templateId,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/copy-template':{
                templateId:templateId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyTemplate_1 = function(templateId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/copy-template':{
                templateId:templateId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyTemplates = function(classNameId,classPK,newClassPK,type,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/copy-templates':{
                classNameId:classNameId // long
                ,classPK:classPK // long
                ,newClassPK:newClassPK // long
                ,type:type // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteTemplate = function(templateId) {
            return SessionService.invoke({'/ddmtemplate/delete-template':{
                templateId:templateId // long
            }});
        };
        service.fetchTemplate = function(groupId,classNameId,templateKey) {
            return SessionService.invoke({'/ddmtemplate/fetch-template':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,templateKey:templateKey // string
            }});
        };
        service.getTemplate = function(templateId) {
            return SessionService.invoke({'/ddmtemplate/get-template':{
                templateId:templateId // long
            }});
        };
        service.getTemplate_1 = function(groupId,classNameId,templateKey) {
            return SessionService.invoke({'/ddmtemplate/get-template':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,templateKey:templateKey // string
            }});
        };
        service.getTemplate_2 = function(groupId,classNameId,templateKey,includeGlobalTemplates) {
            return SessionService.invoke({'/ddmtemplate/get-template':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,templateKey:templateKey // string
                ,includeGlobalTemplates:includeGlobalTemplates // boolean
            }});
        };
        service.getTemplates = function(groupId,classNameId) {
            return SessionService.invoke({'/ddmtemplate/get-templates':{
                groupId:groupId // long
                ,classNameId:classNameId // long
            }});
        };
        service.getTemplates_1 = function(groupId,classNameId,classPK) {
            return SessionService.invoke({'/ddmtemplate/get-templates':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
            }});
        };
        service.getTemplates_2 = function(groupId,classNameId,classPK,type) {
            return SessionService.invoke({'/ddmtemplate/get-templates':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,type:type // string
            }});
        };
        service.getTemplates_3 = function(groupId,classNameId,classPK,type,mode) {
            return SessionService.invoke({'/ddmtemplate/get-templates':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,type:type // string
                ,mode:mode // string
            }});
        };
        service.getTemplatesByClassPk = function(groupId,classPK) {
            return SessionService.invoke({'/ddmtemplate/get-templates-by-class-pk':{
                groupId:groupId // long
                ,classPK:classPK // long
            }});
        };
        service.getTemplatesByStructureClassNameId = function(groupId,structureClassNameId,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/get-templates-by-structure-class-name-id':{
                groupId:groupId // long
                ,structureClassNameId:structureClassNameId // long
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getTemplatesByStructureClassNameIdCount = function(groupId,structureClassNameId) {
            return SessionService.invoke({'/ddmtemplate/get-templates-by-structure-class-name-id-count':{
                groupId:groupId // long
                ,structureClassNameId:structureClassNameId // long
            }});
        };
        service.search = function(companyId,groupId,classNameId,classPK,keywords,type,mode,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/search':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,keywords:keywords // string
                ,type:type // string
                ,mode:mode // string
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_1 = function(companyId,groupIds,classNameIds,classPKs,keywords,type,mode,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,classNameIds:classNameIds // long[]
                ,classPKs:classPKs // long[]
                ,keywords:keywords // string
                ,type:type // string
                ,mode:mode // string
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_2 = function(companyId,groupId,classNameId,classPK,name,description,type,mode,language,andOperator,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/search':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,name:name // string
                ,description:description // string
                ,type:type // string
                ,mode:mode // string
                ,language:language // string
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_3 = function(companyId,groupIds,classNameIds,classPKs,name,description,type,mode,language,andOperator,start,end,orderByComparator) {
            return SessionService.invoke({'/ddmtemplate/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,classNameIds:classNameIds // long[]
                ,classPKs:classPKs // long[]
                ,name:name // string
                ,description:description // string
                ,type:type // string
                ,mode:mode // string
                ,language:language // string
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.searchCount = function(companyId,groupId,classNameId,classPK,name,description,type,mode,language,andOperator) {
            return SessionService.invoke({'/ddmtemplate/search-count':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,name:name // string
                ,description:description // string
                ,type:type // string
                ,mode:mode // string
                ,language:language // string
                ,andOperator:andOperator // boolean
            }});
        };
        service.searchCount_1 = function(companyId,groupIds,classNameIds,classPKs,name,description,type,mode,language,andOperator) {
            return SessionService.invoke({'/ddmtemplate/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,classNameIds:classNameIds // long[]
                ,classPKs:classPKs // long[]
                ,name:name // string
                ,description:description // string
                ,type:type // string
                ,mode:mode // string
                ,language:language // string
                ,andOperator:andOperator // boolean
            }});
        };
        service.searchCount_2 = function(companyId,groupId,classNameId,classPK,keywords,type,mode) {
            return SessionService.invoke({'/ddmtemplate/search-count':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,keywords:keywords // string
                ,type:type // string
                ,mode:mode // string
            }});
        };
        service.searchCount_3 = function(companyId,groupIds,classNameIds,classPKs,keywords,type,mode) {
            return SessionService.invoke({'/ddmtemplate/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,classNameIds:classNameIds // long[]
                ,classPKs:classPKs // long[]
                ,keywords:keywords // string
                ,type:type // string
                ,mode:mode // string
            }});
        };
        service.updateTemplate = function(templateId,classPK,nameMap,descriptionMap,type,mode,language,script,cacheable,smallImage,smallImageURL,smallImageFile,serviceContext) {
            return SessionService.invoke({'/ddmtemplate/update-template':{
                templateId:templateId // long
                ,classPK:classPK // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,mode:mode // string
                ,language:language // string
                ,script:script // string
                ,cacheable:cacheable // boolean
                ,smallImage:smallImage // boolean
                ,smallImageURL:smallImageURL // string
                ,smallImageFile:smallImageFile // object<java.io.File>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlappService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFileEntry = function(repositoryId,folderId,sourceFileName,mimeType,title,description,changeLog,bytes,serviceContext) {
            return SessionService.invoke({'/dlapp/add-file-entry':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,sourceFileName:sourceFileName // string
                ,mimeType:mimeType // string
                ,title:title // string
                ,description:description // string
                ,changeLog:changeLog // string
                ,bytes:bytes // byte[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addFileEntry_1 = function(repositoryId,folderId,sourceFileName,mimeType,title,description,changeLog,file,serviceContext) {
            return SessionService.invoke({'/dlapp/add-file-entry':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,sourceFileName:sourceFileName // string
                ,mimeType:mimeType // string
                ,title:title // string
                ,description:description // string
                ,changeLog:changeLog // string
                ,file:file // object<java.io.File>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addFileShortcut = function(repositoryId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke({'/dlapp/add-file-shortcut':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,toFileEntryId:toFileEntryId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addFolder = function(repositoryId,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke({'/dlapp/add-folder':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addTempFileEntry = function(groupId,folderId,fileName,tempFolderName,file,mimeType) {
            return SessionService.invoke({'/dlapp/add-temp-file-entry':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,fileName:fileName // string
                ,tempFolderName:tempFolderName // string
                ,file:file // object<java.io.File>
                ,mimeType:mimeType // string
            }});
        };
        service.cancelCheckOut = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/cancel-check-out':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.checkInFileEntry = function(fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlapp/check-in-file-entry':{
                fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
            }});
        };
        service.checkInFileEntry_1 = function(fileEntryId,lockUuid,serviceContext) {
            return SessionService.invoke({'/dlapp/check-in-file-entry':{
                fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.checkInFileEntry_2 = function(fileEntryId,majorVersion,changeLog,serviceContext) {
            return SessionService.invoke({'/dlapp/check-in-file-entry':{
                fileEntryId:fileEntryId // long
                ,majorVersion:majorVersion // boolean
                ,changeLog:changeLog // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.checkOutFileEntry = function(fileEntryId,serviceContext) {
            return SessionService.invoke({'/dlapp/check-out-file-entry':{
                fileEntryId:fileEntryId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.checkOutFileEntry_1 = function(fileEntryId,owner,expirationTime,serviceContext) {
            return SessionService.invoke({'/dlapp/check-out-file-entry':{
                fileEntryId:fileEntryId // long
                ,owner:owner // string
                ,expirationTime:expirationTime // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyFolder = function(repositoryId,sourceFolderId,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke({'/dlapp/copy-folder':{
                repositoryId:repositoryId // long
                ,sourceFolderId:sourceFolderId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/delete-file-entry':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.deleteFileEntryByTitle = function(repositoryId,folderId,title) {
            return SessionService.invoke({'/dlapp/delete-file-entry-by-title':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,title:title // string
            }});
        };
        service.deleteFileShortcut = function(fileShortcutId) {
            return SessionService.invoke({'/dlapp/delete-file-shortcut':{
                fileShortcutId:fileShortcutId // long
            }});
        };
        service.deleteFileVersion = function(fileEntryId,version) {
            return SessionService.invoke({'/dlapp/delete-file-version':{
                fileEntryId:fileEntryId // long
                ,version:version // string
            }});
        };
        service.deleteFolder = function(folderId) {
            return SessionService.invoke({'/dlapp/delete-folder':{
                folderId:folderId // long
            }});
        };
        service.deleteFolder_1 = function(repositoryId,parentFolderId,name) {
            return SessionService.invoke({'/dlapp/delete-folder':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
            }});
        };
        service.deleteTempFileEntry = function(groupId,folderId,fileName,tempFolderName) {
            return SessionService.invoke({'/dlapp/delete-temp-file-entry':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,fileName:fileName // string
                ,tempFolderName:tempFolderName // string
            }});
        };
        service.getFileEntries = function(repositoryId,folderId) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
            }});
        };
        service.getFileEntries_1 = function(repositoryId,folderId,fileEntryTypeId) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,fileEntryTypeId:fileEntryTypeId // long
            }});
        };
        service.getFileEntries_2 = function(repositoryId,folderId,mimeTypes) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,mimeTypes:mimeTypes // string[]
            }});
        };
        service.getFileEntries_3 = function(repositoryId,folderId,start,end) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFileEntries_4 = function(repositoryId,folderId,fileEntryTypeId,start,end) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,fileEntryTypeId:fileEntryTypeId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFileEntries_5 = function(repositoryId,folderId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFileEntries_6 = function(repositoryId,folderId,fileEntryTypeId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-file-entries':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,fileEntryTypeId:fileEntryTypeId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,start,end) {
            return SessionService.invoke({'/dlapp/get-file-entries-and-file-shortcuts':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status) {
            return SessionService.invoke({'/dlapp/get-file-entries-and-file-shortcuts-count':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,status:status // int
            }});
        };
        service.getFileEntriesAndFileShortcutsCount_1 = function(repositoryId,folderId,status,mimeTypes) {
            return SessionService.invoke({'/dlapp/get-file-entries-and-file-shortcuts-count':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,status:status // int
                ,mimeTypes:mimeTypes // string[]
            }});
        };
        service.getFileEntriesCount = function(repositoryId,folderId) {
            return SessionService.invoke({'/dlapp/get-file-entries-count':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
            }});
        };
        service.getFileEntriesCount_1 = function(repositoryId,folderId,fileEntryTypeId) {
            return SessionService.invoke({'/dlapp/get-file-entries-count':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,fileEntryTypeId:fileEntryTypeId // long
            }});
        };
        service.getFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/get-file-entry':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.getFileEntry_1 = function(groupId,folderId,title) {
            return SessionService.invoke({'/dlapp/get-file-entry':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,title:title // string
            }});
        };
        service.getFileEntryByUuidAndGroupId = function(uuid,groupId) {
            return SessionService.invoke({'/dlapp/get-file-entry-by-uuid-and-group-id':{
                uuid:uuid // string
                ,groupId:groupId // long
            }});
        };
        service.getFileShortcut = function(fileShortcutId) {
            return SessionService.invoke({'/dlapp/get-file-shortcut':{
                fileShortcutId:fileShortcutId // long
            }});
        };
        service.getFolder = function(folderId) {
            return SessionService.invoke({'/dlapp/get-folder':{
                folderId:folderId // long
            }});
        };
        service.getFolder_1 = function(repositoryId,parentFolderId,name) {
            return SessionService.invoke({'/dlapp/get-folder':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
            }});
        };
        service.getFolders = function(repositoryId,parentFolderId) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getFolders_1 = function(repositoryId,parentFolderId,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,includeMountFolders:includeMountFolders // boolean
            }});
        };
        service.getFolders_2 = function(repositoryId,parentFolderId,start,end) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFolders_3 = function(repositoryId,parentFolderId,includeMountFolders,start,end) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,includeMountFolders:includeMountFolders // boolean
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFolders_4 = function(repositoryId,parentFolderId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFolders_5 = function(repositoryId,parentFolderId,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,includeMountFolders:includeMountFolders // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFolders_6 = function(repositoryId,parentFolderId,status,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
                ,includeMountFolders:includeMountFolders // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcuts = function(repositoryId,folderId,status,includeMountFolders,start,end) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,status:status // int
                ,includeMountFolders:includeMountFolders // boolean
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcuts_1 = function(repositoryId,folderId,status,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,status:status // int
                ,includeMountFolders:includeMountFolders // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcuts_2 = function(repositoryId,folderId,status,mimeTypes,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,status:status // int
                ,mimeTypes:mimeTypes // string[]
                ,includeMountFolders:includeMountFolders // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcutsCount = function(repositoryId,folderId,status,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts-count':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,status:status // int
                ,includeMountFolders:includeMountFolders // boolean
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcutsCount_1 = function(repositoryId,folderId,status,mimeTypes,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders-and-file-entries-and-file-shortcuts-count':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,status:status // int
                ,mimeTypes:mimeTypes // string[]
                ,includeMountFolders:includeMountFolders // boolean
            }});
        };
        service.getFoldersCount = function(repositoryId,parentFolderId) {
            return SessionService.invoke({'/dlapp/get-folders-count':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getFoldersCount_1 = function(repositoryId,parentFolderId,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders-count':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,includeMountFolders:includeMountFolders // boolean
            }});
        };
        service.getFoldersCount_2 = function(repositoryId,parentFolderId,status,includeMountFolders) {
            return SessionService.invoke({'/dlapp/get-folders-count':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
                ,includeMountFolders:includeMountFolders // boolean
            }});
        };
        service.getFoldersFileEntriesCount = function(repositoryId,folderIds,status) {
            return SessionService.invoke({'/dlapp/get-folders-file-entries-count':{
                repositoryId:repositoryId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,status:status // int
            }});
        };
        service.getGroupFileEntries = function(groupId,userId,start,end) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupFileEntries_1 = function(groupId,userId,rootFolderId,start,end) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupFileEntries_2 = function(groupId,userId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupFileEntries_3 = function(groupId,userId,rootFolderId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupFileEntries_4 = function(groupId,userId,rootFolderId,mimeTypes,status,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-group-file-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,mimeTypes:mimeTypes // string[]
                ,status:status // int
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupFileEntriesCount = function(groupId,userId) {
            return SessionService.invoke({'/dlapp/get-group-file-entries-count':{
                groupId:groupId // long
                ,userId:userId // long
            }});
        };
        service.getGroupFileEntriesCount_1 = function(groupId,userId,rootFolderId) {
            return SessionService.invoke({'/dlapp/get-group-file-entries-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
            }});
        };
        service.getGroupFileEntriesCount_2 = function(groupId,userId,rootFolderId,mimeTypes,status) {
            return SessionService.invoke({'/dlapp/get-group-file-entries-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,mimeTypes:mimeTypes // string[]
                ,status:status // int
            }});
        };
        service.getMountFolders = function(repositoryId,parentFolderId) {
            return SessionService.invoke({'/dlapp/get-mount-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getMountFolders_1 = function(repositoryId,parentFolderId,start,end) {
            return SessionService.invoke({'/dlapp/get-mount-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getMountFolders_2 = function(repositoryId,parentFolderId,start,end,obc) {
            return SessionService.invoke({'/dlapp/get-mount-folders':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getMountFoldersCount = function(repositoryId,parentFolderId) {
            return SessionService.invoke({'/dlapp/get-mount-folders-count':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getSubfolderIds = function(repositoryId,folderId) {
            return SessionService.invoke({'/dlapp/get-subfolder-ids':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
            }});
        };
        service.getSubfolderIds_1 = function(repositoryId,folderId,recurse) {
            return SessionService.invoke({'/dlapp/get-subfolder-ids':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,recurse:recurse // boolean
            }});
        };
        service.getSubfolderIds_2 = function(repositoryId,folderIds,folderId) {
            return SessionService.invoke({'/dlapp/get-subfolder-ids':{
                repositoryId:repositoryId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,folderId:folderId // long
            }});
        };
        service.getTempFileEntryNames = function(groupId,folderId,tempFolderName) {
            return SessionService.invoke({'/dlapp/get-temp-file-entry-names':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,tempFolderName:tempFolderName // string
            }});
        };
        service.lockFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/lock-file-entry':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.lockFileEntry_1 = function(fileEntryId,owner,expirationTime) {
            return SessionService.invoke({'/dlapp/lock-file-entry':{
                fileEntryId:fileEntryId // long
                ,owner:owner // string
                ,expirationTime:expirationTime // long
            }});
        };
        service.lockFolder = function(repositoryId,folderId) {
            return SessionService.invoke({'/dlapp/lock-folder':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
            }});
        };
        service.lockFolder_1 = function(repositoryId,folderId,owner,inheritable,expirationTime) {
            return SessionService.invoke({'/dlapp/lock-folder':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,owner:owner // string
                ,inheritable:inheritable // boolean
                ,expirationTime:expirationTime // long
            }});
        };
        service.moveFileEntry = function(fileEntryId,newFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-file-entry':{
                fileEntryId:fileEntryId // long
                ,newFolderId:newFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveFileEntryFromTrash = function(fileEntryId,newFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-file-entry-from-trash':{
                fileEntryId:fileEntryId // long
                ,newFolderId:newFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveFileEntryToTrash = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/move-file-entry-to-trash':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.moveFileShortcutFromTrash = function(fileShortcutId,newFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-file-shortcut-from-trash':{
                fileShortcutId:fileShortcutId // long
                ,newFolderId:newFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveFileShortcutToTrash = function(fileShortcutId) {
            return SessionService.invoke({'/dlapp/move-file-shortcut-to-trash':{
                fileShortcutId:fileShortcutId // long
            }});
        };
        service.moveFolder = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-folder':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveFolderFromTrash = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke({'/dlapp/move-folder-from-trash':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveFolderToTrash = function(folderId) {
            return SessionService.invoke({'/dlapp/move-folder-to-trash':{
                folderId:folderId // long
            }});
        };
        service.refreshFileEntryLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke({'/dlapp/refresh-file-entry-lock':{
                lockUuid:lockUuid // string
                ,companyId:companyId // long
                ,expirationTime:expirationTime // long
            }});
        };
        service.refreshFolderLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke({'/dlapp/refresh-folder-lock':{
                lockUuid:lockUuid // string
                ,companyId:companyId // long
                ,expirationTime:expirationTime // long
            }});
        };
        service.restoreFileEntryFromTrash = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/restore-file-entry-from-trash':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.restoreFileShortcutFromTrash = function(fileShortcutId) {
            return SessionService.invoke({'/dlapp/restore-file-shortcut-from-trash':{
                fileShortcutId:fileShortcutId // long
            }});
        };
        service.restoreFolderFromTrash = function(folderId) {
            return SessionService.invoke({'/dlapp/restore-folder-from-trash':{
                folderId:folderId // long
            }});
        };
        service.revertFileEntry = function(fileEntryId,version,serviceContext) {
            return SessionService.invoke({'/dlapp/revert-file-entry':{
                fileEntryId:fileEntryId // long
                ,version:version // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.search = function(repositoryId,searchContext) {
            return SessionService.invoke({'/dlapp/search':{
                repositoryId:repositoryId // long
                ,searchContext:searchContext // object<com.liferay.portal.kernel.search.SearchContext>
            }});
        };
        service.search_1 = function(repositoryId,searchContext,query) {
            return SessionService.invoke({'/dlapp/search':{
                repositoryId:repositoryId // long
                ,searchContext:searchContext // object<com.liferay.portal.kernel.search.SearchContext>
                ,query:query // object<com.liferay.portal.kernel.search.Query>
            }});
        };
        service.search_2 = function(repositoryId,creatorUserId,status,start,end) {
            return SessionService.invoke({'/dlapp/search':{
                repositoryId:repositoryId // long
                ,creatorUserId:creatorUserId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.search_3 = function(repositoryId,creatorUserId,folderId,mimeTypes,status,start,end) {
            return SessionService.invoke({'/dlapp/search':{
                repositoryId:repositoryId // long
                ,creatorUserId:creatorUserId // long
                ,folderId:folderId // long
                ,mimeTypes:mimeTypes // string[]
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.subscribeFileEntryType = function(groupId,fileEntryTypeId) {
            return SessionService.invoke({'/dlapp/subscribe-file-entry-type':{
                groupId:groupId // long
                ,fileEntryTypeId:fileEntryTypeId // long
            }});
        };
        service.subscribeFolder = function(groupId,folderId) {
            return SessionService.invoke({'/dlapp/subscribe-folder':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.unlockFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlapp/unlock-file-entry':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.unlockFileEntry_1 = function(fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlapp/unlock-file-entry':{
                fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
            }});
        };
        service.unlockFolder = function(repositoryId,folderId,lockUuid) {
            return SessionService.invoke({'/dlapp/unlock-folder':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,lockUuid:lockUuid // string
            }});
        };
        service.unlockFolder_1 = function(repositoryId,parentFolderId,name,lockUuid) {
            return SessionService.invoke({'/dlapp/unlock-folder':{
                repositoryId:repositoryId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,lockUuid:lockUuid // string
            }});
        };
        service.unsubscribeFileEntryType = function(groupId,fileEntryTypeId) {
            return SessionService.invoke({'/dlapp/unsubscribe-file-entry-type':{
                groupId:groupId // long
                ,fileEntryTypeId:fileEntryTypeId // long
            }});
        };
        service.unsubscribeFolder = function(groupId,folderId) {
            return SessionService.invoke({'/dlapp/unsubscribe-folder':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.updateFileEntry = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,bytes,serviceContext) {
            return SessionService.invoke({'/dlapp/update-file-entry':{
                fileEntryId:fileEntryId // long
                ,sourceFileName:sourceFileName // string
                ,mimeType:mimeType // string
                ,title:title // string
                ,description:description // string
                ,changeLog:changeLog // string
                ,majorVersion:majorVersion // boolean
                ,bytes:bytes // byte[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateFileEntry_1 = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,file,serviceContext) {
            return SessionService.invoke({'/dlapp/update-file-entry':{
                fileEntryId:fileEntryId // long
                ,sourceFileName:sourceFileName // string
                ,mimeType:mimeType // string
                ,title:title // string
                ,description:description // string
                ,changeLog:changeLog // string
                ,majorVersion:majorVersion // boolean
                ,file:file // object<java.io.File>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateFileEntryAndCheckIn = function(fileEntryId,sourceFileName,mimeType,title,description,changeLog,majorVersion,file,serviceContext) {
            return SessionService.invoke({'/dlapp/update-file-entry-and-check-in':{
                fileEntryId:fileEntryId // long
                ,sourceFileName:sourceFileName // string
                ,mimeType:mimeType // string
                ,title:title // string
                ,description:description // string
                ,changeLog:changeLog // string
                ,majorVersion:majorVersion // boolean
                ,file:file // object<java.io.File>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateFileShortcut = function(fileShortcutId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke({'/dlapp/update-file-shortcut':{
                fileShortcutId:fileShortcutId // long
                ,folderId:folderId // long
                ,toFileEntryId:toFileEntryId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateFolder = function(folderId,name,description,serviceContext) {
            return SessionService.invoke({'/dlapp/update-folder':{
                folderId:folderId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.verifyFileEntryCheckOut = function(repositoryId,fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlapp/verify-file-entry-check-out':{
                repositoryId:repositoryId // long
                ,fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
            }});
        };
        service.verifyFileEntryLock = function(repositoryId,fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlapp/verify-file-entry-lock':{
                repositoryId:repositoryId // long
                ,fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
            }});
        };
        service.verifyInheritableLock = function(repositoryId,folderId,lockUuid) {
            return SessionService.invoke({'/dlapp/verify-inheritable-lock':{
                repositoryId:repositoryId // long
                ,folderId:folderId // long
                ,lockUuid:lockUuid // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.cancelCheckOut = function(fileEntryId) {
            return SessionService.invoke({'/dlfileentry/cancel-check-out':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.checkInFileEntry = function(fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlfileentry/check-in-file-entry':{
                fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
            }});
        };
        service.checkInFileEntry_1 = function(fileEntryId,lockUuid,serviceContext) {
            return SessionService.invoke({'/dlfileentry/check-in-file-entry':{
                fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.checkInFileEntry_2 = function(fileEntryId,major,changeLog,serviceContext) {
            return SessionService.invoke({'/dlfileentry/check-in-file-entry':{
                fileEntryId:fileEntryId // long
                ,major:major // boolean
                ,changeLog:changeLog // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.checkOutFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlfileentry/check-out-file-entry':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.checkOutFileEntry_1 = function(fileEntryId,serviceContext) {
            return SessionService.invoke({'/dlfileentry/check-out-file-entry':{
                fileEntryId:fileEntryId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.checkOutFileEntry_2 = function(fileEntryId,owner,expirationTime) {
            return SessionService.invoke({'/dlfileentry/check-out-file-entry':{
                fileEntryId:fileEntryId // long
                ,owner:owner // string
                ,expirationTime:expirationTime // long
            }});
        };
        service.checkOutFileEntry_3 = function(fileEntryId,owner,expirationTime,serviceContext) {
            return SessionService.invoke({'/dlfileentry/check-out-file-entry':{
                fileEntryId:fileEntryId // long
                ,owner:owner // string
                ,expirationTime:expirationTime // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyFileEntry = function(groupId,repositoryId,fileEntryId,destFolderId,serviceContext) {
            return SessionService.invoke({'/dlfileentry/copy-file-entry':{
                groupId:groupId // long
                ,repositoryId:repositoryId // long
                ,fileEntryId:fileEntryId // long
                ,destFolderId:destFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlfileentry/delete-file-entry':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.deleteFileEntry_1 = function(groupId,folderId,title) {
            return SessionService.invoke({'/dlfileentry/delete-file-entry':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,title:title // string
            }});
        };
        service.deleteFileVersion = function(fileEntryId,version) {
            return SessionService.invoke({'/dlfileentry/delete-file-version':{
                fileEntryId:fileEntryId // long
                ,version:version // string
            }});
        };
        service.fetchFileEntryByImageId = function(imageId) {
            return SessionService.invoke({'/dlfileentry/fetch-file-entry-by-image-id':{
                imageId:imageId // long
            }});
        };
        service.getFileEntries = function(groupId,folderId,start,end,obc) {
            return SessionService.invoke({'/dlfileentry/get-file-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFileEntries_1 = function(groupId,folderId,fileEntryTypeId,start,end,obc) {
            return SessionService.invoke({'/dlfileentry/get-file-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,fileEntryTypeId:fileEntryTypeId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFileEntries_2 = function(groupId,folderId,mimeTypes,start,end,obc) {
            return SessionService.invoke({'/dlfileentry/get-file-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,mimeTypes:mimeTypes // string[]
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFileEntries_3 = function(groupId,folderId,status,start,end,obc) {
            return SessionService.invoke({'/dlfileentry/get-file-entries':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFileEntriesCount = function(groupId,folderId) {
            return SessionService.invoke({'/dlfileentry/get-file-entries-count':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getFileEntriesCount_1 = function(groupId,folderId,fileEntryTypeId) {
            return SessionService.invoke({'/dlfileentry/get-file-entries-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,fileEntryTypeId:fileEntryTypeId // long
            }});
        };
        service.getFileEntriesCount_2 = function(groupId,folderId,mimeTypes) {
            return SessionService.invoke({'/dlfileentry/get-file-entries-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,mimeTypes:mimeTypes // string[]
            }});
        };
        service.getFileEntriesCount_3 = function(groupId,folderId,status) {
            return SessionService.invoke({'/dlfileentry/get-file-entries-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
            }});
        };
        service.getFileEntry = function(fileEntryId) {
            return SessionService.invoke({'/dlfileentry/get-file-entry':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.getFileEntry_1 = function(groupId,folderId,title) {
            return SessionService.invoke({'/dlfileentry/get-file-entry':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,title:title // string
            }});
        };
        service.getFileEntryByUuidAndGroupId = function(uuid,groupId) {
            return SessionService.invoke({'/dlfileentry/get-file-entry-by-uuid-and-group-id':{
                uuid:uuid // string
                ,groupId:groupId // long
            }});
        };
        service.getFileEntryLock = function(fileEntryId) {
            return SessionService.invoke({'/dlfileentry/get-file-entry-lock':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.getFoldersFileEntriesCount = function(groupId,folderIds,status) {
            return SessionService.invoke({'/dlfileentry/get-folders-file-entries-count':{
                groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,status:status // int
            }});
        };
        service.getGroupFileEntries = function(groupId,userId,rootFolderId,start,end,obc) {
            return SessionService.invoke({'/dlfileentry/get-group-file-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupFileEntries_1 = function(groupId,userId,rootFolderId,mimeTypes,status,start,end,obc) {
            return SessionService.invoke({'/dlfileentry/get-group-file-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,mimeTypes:mimeTypes // string[]
                ,status:status // int
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupFileEntries_2 = function(groupId,userId,repositoryId,rootFolderId,mimeTypes,status,start,end,obc) {
            return SessionService.invoke({'/dlfileentry/get-group-file-entries':{
                groupId:groupId // long
                ,userId:userId // long
                ,repositoryId:repositoryId // long
                ,rootFolderId:rootFolderId // long
                ,mimeTypes:mimeTypes // string[]
                ,status:status // int
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupFileEntriesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke({'/dlfileentry/get-group-file-entries-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
            }});
        };
        service.getGroupFileEntriesCount_1 = function(groupId,userId,rootFolderId,mimeTypes,status) {
            return SessionService.invoke({'/dlfileentry/get-group-file-entries-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,mimeTypes:mimeTypes // string[]
                ,status:status // int
            }});
        };
        service.getGroupFileEntriesCount_2 = function(groupId,userId,repositoryId,rootFolderId,mimeTypes,status) {
            return SessionService.invoke({'/dlfileentry/get-group-file-entries-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,repositoryId:repositoryId // long
                ,rootFolderId:rootFolderId // long
                ,mimeTypes:mimeTypes // string[]
                ,status:status // int
            }});
        };
        service.hasFileEntryLock = function(fileEntryId) {
            return SessionService.invoke({'/dlfileentry/has-file-entry-lock':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.isFileEntryCheckedOut = function(fileEntryId) {
            return SessionService.invoke({'/dlfileentry/is-file-entry-checked-out':{
                fileEntryId:fileEntryId // long
            }});
        };
        service.moveFileEntry = function(fileEntryId,newFolderId,serviceContext) {
            return SessionService.invoke({'/dlfileentry/move-file-entry':{
                fileEntryId:fileEntryId // long
                ,newFolderId:newFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.refreshFileEntryLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke({'/dlfileentry/refresh-file-entry-lock':{
                lockUuid:lockUuid // string
                ,companyId:companyId // long
                ,expirationTime:expirationTime // long
            }});
        };
        service.revertFileEntry = function(fileEntryId,version,serviceContext) {
            return SessionService.invoke({'/dlfileentry/revert-file-entry':{
                fileEntryId:fileEntryId // long
                ,version:version // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke({'/dlfileentry/search':{
                groupId:groupId // long
                ,creatorUserId:creatorUserId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.search_1 = function(groupId,creatorUserId,folderId,mimeTypes,status,start,end) {
            return SessionService.invoke({'/dlfileentry/search':{
                groupId:groupId // long
                ,creatorUserId:creatorUserId // long
                ,folderId:folderId // long
                ,mimeTypes:mimeTypes // string[]
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.verifyFileEntryCheckOut = function(fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlfileentry/verify-file-entry-check-out':{
                fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
            }});
        };
        service.verifyFileEntryLock = function(fileEntryId,lockUuid) {
            return SessionService.invoke({'/dlfileentry/verify-file-entry-lock':{
                fileEntryId:fileEntryId // long
                ,lockUuid:lockUuid // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileentrytypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFileEntryType = function(groupId,name,description,ddmStructureIds,serviceContext) {
            return SessionService.invoke({'/dlfileentrytype/add-file-entry-type':{
                groupId:groupId // long
                ,name:name // string
                ,description:description // string
                ,ddmStructureIds:ddmStructureIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addFileEntryType_1 = function(groupId,fileEntryTypeKey,nameMap,descriptionMap,ddmStructureIds,serviceContext) {
            return SessionService.invoke({'/dlfileentrytype/add-file-entry-type':{
                groupId:groupId // long
                ,fileEntryTypeKey:fileEntryTypeKey // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,ddmStructureIds:ddmStructureIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFileEntryType = function(fileEntryTypeId) {
            return SessionService.invoke({'/dlfileentrytype/delete-file-entry-type':{
                fileEntryTypeId:fileEntryTypeId // long
            }});
        };
        service.getFileEntryType = function(fileEntryTypeId) {
            return SessionService.invoke({'/dlfileentrytype/get-file-entry-type':{
                fileEntryTypeId:fileEntryTypeId // long
            }});
        };
        service.getFileEntryTypes = function(groupIds) {
            return SessionService.invoke({'/dlfileentrytype/get-file-entry-types':{
                groupIds:groupIds // long[]
            }});
        };
        service.getFileEntryTypes_1 = function(groupIds,start,end) {
            return SessionService.invoke({'/dlfileentrytype/get-file-entry-types':{
                groupIds:groupIds // long[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFileEntryTypesCount = function(groupIds) {
            return SessionService.invoke({'/dlfileentrytype/get-file-entry-types-count':{
                groupIds:groupIds // long[]
            }});
        };
        service.getFolderFileEntryTypes = function(groupIds,folderId,inherited) {
            return SessionService.invoke({'/dlfileentrytype/get-folder-file-entry-types':{
                groupIds:groupIds // long[]
                ,folderId:folderId // long
                ,inherited:inherited // boolean
            }});
        };
        service.search = function(companyId,groupIds,keywords,includeBasicFileEntryType,start,end,orderByComparator) {
            return SessionService.invoke({'/dlfileentrytype/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,keywords:keywords // string
                ,includeBasicFileEntryType:includeBasicFileEntryType // boolean
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.searchCount = function(companyId,groupIds,keywords,includeBasicFileEntryType) {
            return SessionService.invoke({'/dlfileentrytype/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,keywords:keywords // string
                ,includeBasicFileEntryType:includeBasicFileEntryType // boolean
            }});
        };
        service.updateFileEntryType = function(fileEntryTypeId,name,description,ddmStructureIds,serviceContext) {
            return SessionService.invoke({'/dlfileentrytype/update-file-entry-type':{
                fileEntryTypeId:fileEntryTypeId // long
                ,name:name // string
                ,description:description // string
                ,ddmStructureIds:ddmStructureIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateFileEntryType_1 = function(fileEntryTypeId,nameMap,descriptionMap,ddmStructureIds,serviceContext) {
            return SessionService.invoke({'/dlfileentrytype/update-file-entry-type':{
                fileEntryTypeId:fileEntryTypeId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,ddmStructureIds:ddmStructureIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileshortcutService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFileShortcut = function(groupId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke({'/dlfileshortcut/add-file-shortcut':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,toFileEntryId:toFileEntryId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFileShortcut = function(fileShortcutId) {
            return SessionService.invoke({'/dlfileshortcut/delete-file-shortcut':{
                fileShortcutId:fileShortcutId // long
            }});
        };
        service.getFileShortcut = function(fileShortcutId) {
            return SessionService.invoke({'/dlfileshortcut/get-file-shortcut':{
                fileShortcutId:fileShortcutId // long
            }});
        };
        service.updateFileShortcut = function(fileShortcutId,folderId,toFileEntryId,serviceContext) {
            return SessionService.invoke({'/dlfileshortcut/update-file-shortcut':{
                fileShortcutId:fileShortcutId // long
                ,folderId:folderId // long
                ,toFileEntryId:toFileEntryId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfileversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getFileVersion = function(fileVersionId) {
            return SessionService.invoke({'/dlfileversion/get-file-version':{
                fileVersionId:fileVersionId // long
            }});
        };
        service.getFileVersions = function(fileEntryId,status) {
            return SessionService.invoke({'/dlfileversion/get-file-versions':{
                fileEntryId:fileEntryId // long
                ,status:status // int
            }});
        };
        service.getFileVersionsCount = function(fileEntryId,status) {
            return SessionService.invoke({'/dlfileversion/get-file-versions-count':{
                fileEntryId:fileEntryId // long
                ,status:status // int
            }});
        };
        service.getLatestFileVersion = function(fileEntryId) {
            return SessionService.invoke({'/dlfileversion/get-latest-file-version':{
                fileEntryId:fileEntryId // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('DlfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFolder = function(groupId,repositoryId,mountPoint,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke({'/dlfolder/add-folder':{
                groupId:groupId // long
                ,repositoryId:repositoryId // long
                ,mountPoint:mountPoint // boolean
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFolder = function(folderId) {
            return SessionService.invoke({'/dlfolder/delete-folder':{
                folderId:folderId // long
            }});
        };
        service.deleteFolder_1 = function(folderId,includeTrashedEntries) {
            return SessionService.invoke({'/dlfolder/delete-folder':{
                folderId:folderId // long
                ,includeTrashedEntries:includeTrashedEntries // boolean
            }});
        };
        service.deleteFolder_2 = function(groupId,parentFolderId,name) {
            return SessionService.invoke({'/dlfolder/delete-folder':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
            }});
        };
        service.getFileEntriesAndFileShortcuts = function(groupId,folderId,status,start,end) {
            return SessionService.invoke({'/dlfolder/get-file-entries-and-file-shortcuts':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFileEntriesAndFileShortcutsCount = function(groupId,folderId,status) {
            return SessionService.invoke({'/dlfolder/get-file-entries-and-file-shortcuts-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
            }});
        };
        service.getFileEntriesAndFileShortcutsCount_1 = function(groupId,folderId,status,mimeTypes) {
            return SessionService.invoke({'/dlfolder/get-file-entries-and-file-shortcuts-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,mimeTypes:mimeTypes // string[]
            }});
        };
        service.getFolder = function(folderId) {
            return SessionService.invoke({'/dlfolder/get-folder':{
                folderId:folderId // long
            }});
        };
        service.getFolder_1 = function(groupId,parentFolderId,name) {
            return SessionService.invoke({'/dlfolder/get-folder':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
            }});
        };
        service.getFolderIds = function(groupId,folderId) {
            return SessionService.invoke({'/dlfolder/get-folder-ids':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getFolders = function(groupId,parentFolderId,start,end,obc) {
            return SessionService.invoke({'/dlfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFolders_1 = function(groupId,parentFolderId,status,includeMountfolders,start,end,obc) {
            return SessionService.invoke({'/dlfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
                ,includeMountfolders:includeMountfolders // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcuts = function(groupId,folderId,status,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlfolder/get-folders-and-file-entries-and-file-shortcuts':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,includeMountFolders:includeMountFolders // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcuts_1 = function(groupId,folderId,status,mimeTypes,includeMountFolders,start,end,obc) {
            return SessionService.invoke({'/dlfolder/get-folders-and-file-entries-and-file-shortcuts':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,mimeTypes:mimeTypes // string[]
                ,includeMountFolders:includeMountFolders // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcutsCount = function(groupId,folderId,status,includeMountFolders) {
            return SessionService.invoke({'/dlfolder/get-folders-and-file-entries-and-file-shortcuts-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,includeMountFolders:includeMountFolders // boolean
            }});
        };
        service.getFoldersAndFileEntriesAndFileShortcutsCount_1 = function(groupId,folderId,status,mimeTypes,includeMountFolders) {
            return SessionService.invoke({'/dlfolder/get-folders-and-file-entries-and-file-shortcuts-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,mimeTypes:mimeTypes // string[]
                ,includeMountFolders:includeMountFolders // boolean
            }});
        };
        service.getFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke({'/dlfolder/get-folders-count':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getFoldersCount_1 = function(groupId,parentFolderId,status,includeMountfolders) {
            return SessionService.invoke({'/dlfolder/get-folders-count':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
                ,includeMountfolders:includeMountfolders // boolean
            }});
        };
        service.getMountFolders = function(groupId,parentFolderId,start,end,obc) {
            return SessionService.invoke({'/dlfolder/get-mount-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getMountFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke({'/dlfolder/get-mount-folders-count':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getSubfolderIds = function(folderIds,groupId,folderId) {
            return SessionService.invoke({'/dlfolder/get-subfolder-ids':{
                folderIds:folderIds // list<object<java.lang.Long>>
                ,groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getSubfolderIds_1 = function(groupId,folderId,recurse) {
            return SessionService.invoke({'/dlfolder/get-subfolder-ids':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,recurse:recurse // boolean
            }});
        };
        service.hasFolderLock = function(folderId) {
            return SessionService.invoke({'/dlfolder/has-folder-lock':{
                folderId:folderId // long
            }});
        };
        service.hasInheritableLock = function(folderId) {
            return SessionService.invoke({'/dlfolder/has-inheritable-lock':{
                folderId:folderId // long
            }});
        };
        service.isFolderLocked = function(folderId) {
            return SessionService.invoke({'/dlfolder/is-folder-locked':{
                folderId:folderId // long
            }});
        };
        service.lockFolder = function(folderId) {
            return SessionService.invoke({'/dlfolder/lock-folder':{
                folderId:folderId // long
            }});
        };
        service.lockFolder_1 = function(folderId,owner,inheritable,expirationTime) {
            return SessionService.invoke({'/dlfolder/lock-folder':{
                folderId:folderId // long
                ,owner:owner // string
                ,inheritable:inheritable // boolean
                ,expirationTime:expirationTime // long
            }});
        };
        service.moveFolder = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke({'/dlfolder/move-folder':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.refreshFolderLock = function(lockUuid,companyId,expirationTime) {
            return SessionService.invoke({'/dlfolder/refresh-folder-lock':{
                lockUuid:lockUuid // string
                ,companyId:companyId // long
                ,expirationTime:expirationTime // long
            }});
        };
        service.unlockFolder = function(folderId,lockUuid) {
            return SessionService.invoke({'/dlfolder/unlock-folder':{
                folderId:folderId // long
                ,lockUuid:lockUuid // string
            }});
        };
        service.unlockFolder_1 = function(groupId,parentFolderId,name,lockUuid) {
            return SessionService.invoke({'/dlfolder/unlock-folder':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,lockUuid:lockUuid // string
            }});
        };
        service.updateFolder = function(folderId,name,description,defaultFileEntryTypeId,fileEntryTypeIds,overrideFileEntryTypes,serviceContext) {
            return SessionService.invoke({'/dlfolder/update-folder':{
                folderId:folderId // long
                ,name:name // string
                ,description:description // string
                ,defaultFileEntryTypeId:defaultFileEntryTypeId // long
                ,fileEntryTypeIds:fileEntryTypeIds // list<object<java.lang.Long>>
                ,overrideFileEntryTypes:overrideFileEntryTypes // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.verifyInheritableLock = function(folderId,lockUuid) {
            return SessionService.invoke({'/dlfolder/verify-inheritable-lock':{
                folderId:folderId // long
                ,lockUuid:lockUuid // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('EmailaddressService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEmailAddress = function(className,classPK,address,typeId,primary) {
            return SessionService.invoke({'/emailaddress/add-email-address':{
                className:className // string
                ,classPK:classPK // long
                ,address:address // string
                ,typeId:typeId // int
                ,primary:primary // boolean
            }});
        };
        service.addEmailAddress_1 = function(className,classPK,address,typeId,primary,serviceContext) {
            return SessionService.invoke({'/emailaddress/add-email-address':{
                className:className // string
                ,classPK:classPK // long
                ,address:address // string
                ,typeId:typeId // int
                ,primary:primary // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteEmailAddress = function(emailAddressId) {
            return SessionService.invoke({'/emailaddress/delete-email-address':{
                emailAddressId:emailAddressId // long
            }});
        };
        service.getEmailAddress = function(emailAddressId) {
            return SessionService.invoke({'/emailaddress/get-email-address':{
                emailAddressId:emailAddressId // long
            }});
        };
        service.getEmailAddresses = function(className,classPK) {
            return SessionService.invoke({'/emailaddress/get-email-addresses':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.updateEmailAddress = function(emailAddressId,address,typeId,primary) {
            return SessionService.invoke({'/emailaddress/update-email-address':{
                emailAddressId:emailAddressId // long
                ,address:address // string
                ,typeId:typeId // int
                ,primary:primary // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ExpandocolumnService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addColumn = function(tableId,name,type) {
            return SessionService.invoke({'/expandocolumn/add-column':{
                tableId:tableId // long
                ,name:name // string
                ,type:type // int
            }});
        };
        service.addColumn_1 = function(tableId,name,type,defaultData) {
            return SessionService.invoke({'/expandocolumn/add-column':{
                tableId:tableId // long
                ,name:name // string
                ,type:type // int
                ,defaultData:defaultData // object
            }});
        };
        service.deleteColumn = function(columnId) {
            return SessionService.invoke({'/expandocolumn/delete-column':{
                columnId:columnId // long
            }});
        };
        service.updateColumn = function(columnId,name,type) {
            return SessionService.invoke({'/expandocolumn/update-column':{
                columnId:columnId // long
                ,name:name // string
                ,type:type // int
            }});
        };
        service.updateColumn_1 = function(columnId,name,type,defaultData) {
            return SessionService.invoke({'/expandocolumn/update-column':{
                columnId:columnId // long
                ,name:name // string
                ,type:type // int
                ,defaultData:defaultData // object
            }});
        };
        service.updateTypeSettings = function(columnId,typeSettings) {
            return SessionService.invoke({'/expandocolumn/update-type-settings':{
                columnId:columnId // long
                ,typeSettings:typeSettings // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ExpandovalueService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addValue = function(companyId,className,tableName,columnName,classPK,data) {
            return SessionService.invoke({'/expandovalue/add-value':{
                companyId:companyId // long
                ,className:className // string
                ,tableName:tableName // string
                ,columnName:columnName // string
                ,classPK:classPK // long
                ,data:data // string
            }});
        };
        service.addValues = function(companyId,className,tableName,classPK,attributeValues) {
            return SessionService.invoke({'/expandovalue/add-values':{
                companyId:companyId // long
                ,className:className // string
                ,tableName:tableName // string
                ,classPK:classPK // long
                ,attributeValues:attributeValues // map<string,object>
            }});
        };
        service.getData = function(companyId,className,tableName,columnName,classPK) {
            return SessionService.invoke({'/expandovalue/get-data':{
                companyId:companyId // long
                ,className:className // string
                ,tableName:tableName // string
                ,columnName:columnName // string
                ,classPK:classPK // long
            }});
        };
        service.getData_1 = function(companyId,className,tableName,columnNames,classPK) {
            return SessionService.invoke({'/expandovalue/get-data':{
                companyId:companyId // long
                ,className:className // string
                ,tableName:tableName // string
                ,columnNames:columnNames // java.util.Collection<string>
                ,classPK:classPK // long
            }});
        };
        service.getJsonData = function(companyId,className,tableName,columnName,classPK) {
            return SessionService.invoke({'/expandovalue/get-json-data':{
                companyId:companyId // long
                ,className:className // string
                ,tableName:tableName // string
                ,columnName:columnName // string
                ,classPK:classPK // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('FlagsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addEntry = function(className,classPK,reporterEmailAddress,reportedUserId,contentTitle,contentURL,reason,serviceContext) {
            return SessionService.invoke({'/flagsentry/add-entry':{
                className:className // string
                ,classPK:classPK // long
                ,reporterEmailAddress:reporterEmailAddress // string
                ,reportedUserId:reportedUserId // long
                ,contentTitle:contentTitle // string
                ,contentURL:contentURL // string
                ,reason:reason // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('GroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroup = function(parentGroupId,liveGroupId,name,description,type,manualMembership,membershipRestriction,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke({'/group/add-group':{
                parentGroupId:parentGroupId // long
                ,liveGroupId:liveGroupId // long
                ,name:name // string
                ,description:description // string
                ,type:type // int
                ,manualMembership:manualMembership // boolean
                ,membershipRestriction:membershipRestriction // int
                ,friendlyURL:friendlyURL // string
                ,site:site // boolean
                ,active:active // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addGroup_1 = function(name,description,type,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke({'/group/add-group':{
                name:name // string
                ,description:description // string
                ,type:type // int
                ,friendlyURL:friendlyURL // string
                ,site:site // boolean
                ,active:active // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addGroup_2 = function(parentGroupId,name,description,type,friendlyURL,site,active,serviceContext) {
            return SessionService.invoke({'/group/add-group':{
                parentGroupId:parentGroupId // long
                ,name:name // string
                ,description:description // string
                ,type:type // int
                ,friendlyURL:friendlyURL // string
                ,site:site // boolean
                ,active:active // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke({'/group/add-role-groups':{
                roleId:roleId // long
                ,groupIds:groupIds // long[]
            }});
        };
        service.checkRemoteStagingGroup = function(groupId) {
            return SessionService.invoke({'/group/check-remote-staging-group':{
                groupId:groupId // long
            }});
        };
        service.deleteGroup = function(groupId) {
            return SessionService.invoke({'/group/delete-group':{
                groupId:groupId // long
            }});
        };
        service.disableStaging = function(groupId) {
            return SessionService.invoke({'/group/disable-staging':{
                groupId:groupId // long
            }});
        };
        service.enableStaging = function(groupId) {
            return SessionService.invoke({'/group/enable-staging':{
                groupId:groupId // long
            }});
        };
        service.getCompanyGroup = function(companyId) {
            return SessionService.invoke({'/group/get-company-group':{
                companyId:companyId // long
            }});
        };
        service.getGroup = function(groupId) {
            return SessionService.invoke({'/group/get-group':{
                groupId:groupId // long
            }});
        };
        service.getGroup_1 = function(companyId,name) {
            return SessionService.invoke({'/group/get-group':{
                companyId:companyId // long
                ,name:name // string
            }});
        };
        service.getGroups = function(companyId,parentGroupId,site) {
            return SessionService.invoke({'/group/get-groups':{
                companyId:companyId // long
                ,parentGroupId:parentGroupId // long
                ,site:site // boolean
            }});
        };
        service.getManageableSiteGroups = function(portlets,max) {
            return SessionService.invoke({'/group/get-manageable-site-groups':{
                portlets:portlets // java.util.Collection<object<com.liferay.portal.model.Portlet>>
                ,max:max // int
            }});
        };
        service.getManageableSites = function(portlets,max) {
            return SessionService.invoke({'/group/get-manageable-sites':{
                portlets:portlets // java.util.Collection<object<com.liferay.portal.model.Portlet>>
                ,max:max // int
            }});
        };
        service.getOrganizationsGroups = function(organizations) {
            return SessionService.invoke({'/group/get-organizations-groups':{
                organizations:organizations // list<object<com.liferay.portal.model.Organization>>
            }});
        };
        service.getUserGroup = function(companyId,userId) {
            return SessionService.invoke({'/group/get-user-group':{
                companyId:companyId // long
                ,userId:userId // long
            }});
        };
        service.getUserGroupsGroups = function(userGroups) {
            return SessionService.invoke({'/group/get-user-groups-groups':{
                userGroups:userGroups // list<object<com.liferay.portal.model.UserGroup>>
            }});
        };
        service.getUserOrganizationsGroups = function(userId,start,end) {
            return SessionService.invoke({'/group/get-user-organizations-groups':{
                userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getUserPlaces = function(classNames,max) {
            return SessionService.invoke({'/group/get-user-places':{
                classNames:classNames // string[]
                ,max:max // int
            }});
        };
        service.getUserPlaces_1 = function(userId,classNames,max) {
            return SessionService.invoke({'/group/get-user-places':{
                userId:userId // long
                ,classNames:classNames // string[]
                ,max:max // int
            }});
        };
        service.getUserPlaces_2 = function(userId,classNames,includeControlPanel,max) {
            return SessionService.invoke({'/group/get-user-places':{
                userId:userId // long
                ,classNames:classNames // string[]
                ,includeControlPanel:includeControlPanel // boolean
                ,max:max // int
            }});
        };
        service.getUserPlacesCount = function() {
            return SessionService.invoke({'/group/get-user-places-count':{
                
            }});
        };
        service.getUserSites = function() {
            return SessionService.invoke({'/group/get-user-sites':{
                
            }});
        };
        service.getUserSitesGroups = function() {
            return SessionService.invoke({'/group/get-user-sites-groups':{
                
            }});
        };
        service.getUserSitesGroups_1 = function(classNames,max) {
            return SessionService.invoke({'/group/get-user-sites-groups':{
                classNames:classNames // string[]
                ,max:max // int
            }});
        };
        service.getUserSitesGroups_2 = function(userId,classNames,max) {
            return SessionService.invoke({'/group/get-user-sites-groups':{
                userId:userId // long
                ,classNames:classNames // string[]
                ,max:max // int
            }});
        };
        service.getUserSitesGroups_3 = function(userId,classNames,includeControlPanel,max) {
            return SessionService.invoke({'/group/get-user-sites-groups':{
                userId:userId // long
                ,classNames:classNames // string[]
                ,includeControlPanel:includeControlPanel // boolean
                ,max:max // int
            }});
        };
        service.getUserSitesGroupsCount = function() {
            return SessionService.invoke({'/group/get-user-sites-groups-count':{
                
            }});
        };
        service.hasUserGroup = function(userId,groupId) {
            return SessionService.invoke({'/group/has-user-group':{
                userId:userId // long
                ,groupId:groupId // long
            }});
        };
        service.search = function(companyId,name,description,params,start,end) {
            return SessionService.invoke({'/group/search':{
                companyId:companyId // long
                ,name:name // string
                ,description:description // string
                ,params:params // string[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.search_1 = function(companyId,classNameIds,keywords,params,start,end,obc) {
            return SessionService.invoke({'/group/search':{
                companyId:companyId // long
                ,classNameIds:classNameIds // long[]
                ,keywords:keywords // string
                ,params:params // java.util.LinkedHashMap<string,object>
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_2 = function(companyId,classNameIds,name,description,params,andOperator,start,end,obc) {
            return SessionService.invoke({'/group/search':{
                companyId:companyId // long
                ,classNameIds:classNameIds // long[]
                ,name:name // string
                ,description:description // string
                ,params:params // java.util.LinkedHashMap<string,object>
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.searchCount = function(companyId,name,description,params) {
            return SessionService.invoke({'/group/search-count':{
                companyId:companyId // long
                ,name:name // string
                ,description:description // string
                ,params:params // string[]
            }});
        };
        service.setRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke({'/group/set-role-groups':{
                roleId:roleId // long
                ,groupIds:groupIds // long[]
            }});
        };
        service.unsetRoleGroups = function(roleId,groupIds) {
            return SessionService.invoke({'/group/unset-role-groups':{
                roleId:roleId // long
                ,groupIds:groupIds // long[]
            }});
        };
        service.updateFriendlyUrl = function(groupId,friendlyURL) {
            return SessionService.invoke({'/group/update-friendly-url':{
                groupId:groupId // long
                ,friendlyURL:friendlyURL // string
            }});
        };
        service.updateGroup = function(groupId,parentGroupId,name,description,type,manualMembership,membershipRestriction,friendlyURL,active,serviceContext) {
            return SessionService.invoke({'/group/update-group':{
                groupId:groupId // long
                ,parentGroupId:parentGroupId // long
                ,name:name // string
                ,description:description // string
                ,type:type // int
                ,manualMembership:manualMembership // boolean
                ,membershipRestriction:membershipRestriction // int
                ,friendlyURL:friendlyURL // string
                ,active:active // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateGroup_1 = function(groupId,typeSettings) {
            return SessionService.invoke({'/group/update-group':{
                groupId:groupId // long
                ,typeSettings:typeSettings // string
            }});
        };
        service.updateStagedPortlets = function(groupId,stagedPortletIds) {
            return SessionService.invoke({'/group/update-staged-portlets':{
                groupId:groupId // long
                ,stagedPortletIds:stagedPortletIds // map<string,string>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ImageService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getImage = function(imageId) {
            return SessionService.invoke({'/image/get-image':{
                imageId:imageId // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalarticleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addArticle = function(groupId,folderId,classNameId,classPK,articleId,autoArticleId,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,articleURL,serviceContext) {
            return SessionService.invoke({'/journalarticle/add-article':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,articleId:articleId // string
                ,autoArticleId:autoArticleId // boolean
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,content:content // string
                ,type:type // string
                ,ddmStructureKey:ddmStructureKey // string
                ,ddmTemplateKey:ddmTemplateKey // string
                ,layoutUuid:layoutUuid // string
                ,displayDateMonth:displayDateMonth // int
                ,displayDateDay:displayDateDay // int
                ,displayDateYear:displayDateYear // int
                ,displayDateHour:displayDateHour // int
                ,displayDateMinute:displayDateMinute // int
                ,expirationDateMonth:expirationDateMonth // int
                ,expirationDateDay:expirationDateDay // int
                ,expirationDateYear:expirationDateYear // int
                ,expirationDateHour:expirationDateHour // int
                ,expirationDateMinute:expirationDateMinute // int
                ,neverExpire:neverExpire // boolean
                ,reviewDateMonth:reviewDateMonth // int
                ,reviewDateDay:reviewDateDay // int
                ,reviewDateYear:reviewDateYear // int
                ,reviewDateHour:reviewDateHour // int
                ,reviewDateMinute:reviewDateMinute // int
                ,neverReview:neverReview // boolean
                ,indexable:indexable // boolean
                ,articleURL:articleURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addArticle_1 = function(groupId,folderId,classNameId,classPK,articleId,autoArticleId,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,smallImage,smallImageURL,smallFile,images,articleURL,serviceContext) {
            return SessionService.invoke({'/journalarticle/add-article':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,articleId:articleId // string
                ,autoArticleId:autoArticleId // boolean
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,content:content // string
                ,type:type // string
                ,ddmStructureKey:ddmStructureKey // string
                ,ddmTemplateKey:ddmTemplateKey // string
                ,layoutUuid:layoutUuid // string
                ,displayDateMonth:displayDateMonth // int
                ,displayDateDay:displayDateDay // int
                ,displayDateYear:displayDateYear // int
                ,displayDateHour:displayDateHour // int
                ,displayDateMinute:displayDateMinute // int
                ,expirationDateMonth:expirationDateMonth // int
                ,expirationDateDay:expirationDateDay // int
                ,expirationDateYear:expirationDateYear // int
                ,expirationDateHour:expirationDateHour // int
                ,expirationDateMinute:expirationDateMinute // int
                ,neverExpire:neverExpire // boolean
                ,reviewDateMonth:reviewDateMonth // int
                ,reviewDateDay:reviewDateDay // int
                ,reviewDateYear:reviewDateYear // int
                ,reviewDateHour:reviewDateHour // int
                ,reviewDateMinute:reviewDateMinute // int
                ,neverReview:neverReview // boolean
                ,indexable:indexable // boolean
                ,smallImage:smallImage // boolean
                ,smallImageURL:smallImageURL // string
                ,smallFile:smallFile // object<java.io.File>
                ,images:images // map<string>
                ,articleURL:articleURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyArticle = function(groupId,oldArticleId,newArticleId,autoArticleId,version) {
            return SessionService.invoke({'/journalarticle/copy-article':{
                groupId:groupId // long
                ,oldArticleId:oldArticleId // string
                ,newArticleId:newArticleId // string
                ,autoArticleId:autoArticleId // boolean
                ,version:version // double
            }});
        };
        service.deleteArticle = function(groupId,articleId,articleURL,serviceContext) {
            return SessionService.invoke({'/journalarticle/delete-article':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,articleURL:articleURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteArticle_1 = function(groupId,articleId,version,articleURL,serviceContext) {
            return SessionService.invoke({'/journalarticle/delete-article':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
                ,articleURL:articleURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.expireArticle = function(groupId,articleId,articleURL,serviceContext) {
            return SessionService.invoke({'/journalarticle/expire-article':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,articleURL:articleURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.expireArticle_1 = function(groupId,articleId,version,articleURL,serviceContext) {
            return SessionService.invoke({'/journalarticle/expire-article':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
                ,articleURL:articleURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.getArticle = function(id) {
            return SessionService.invoke({'/journalarticle/get-article':{
                id:id // long
            }});
        };
        service.getArticle_1 = function(groupId,articleId) {
            return SessionService.invoke({'/journalarticle/get-article':{
                groupId:groupId // long
                ,articleId:articleId // string
            }});
        };
        service.getArticle_2 = function(groupId,articleId,version) {
            return SessionService.invoke({'/journalarticle/get-article':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
            }});
        };
        service.getArticle_3 = function(groupId,className,classPK) {
            return SessionService.invoke({'/journalarticle/get-article':{
                groupId:groupId // long
                ,className:className // string
                ,classPK:classPK // long
            }});
        };
        service.getArticleByUrlTitle = function(groupId,urlTitle) {
            return SessionService.invoke({'/journalarticle/get-article-by-url-title':{
                groupId:groupId // long
                ,urlTitle:urlTitle // string
            }});
        };
        service.getArticleContent = function(groupId,articleId,languageId,themeDisplay) {
            return SessionService.invoke({'/journalarticle/get-article-content':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,languageId:languageId // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.getArticleContent_1 = function(groupId,articleId,version,languageId,themeDisplay) {
            return SessionService.invoke({'/journalarticle/get-article-content':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
                ,languageId:languageId // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.getArticles = function(groupId,folderId) {
            return SessionService.invoke({'/journalarticle/get-articles':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getArticles_1 = function(groupId,folderId,start,end,obc) {
            return SessionService.invoke({'/journalarticle/get-articles':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getArticlesByArticleId = function(groupId,articleId,start,end,obc) {
            return SessionService.invoke({'/journalarticle/get-articles-by-article-id':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getArticlesByLayoutUuid = function(groupId,layoutUuid) {
            return SessionService.invoke({'/journalarticle/get-articles-by-layout-uuid':{
                groupId:groupId // long
                ,layoutUuid:layoutUuid // string
            }});
        };
        service.getArticlesByStructureId = function(groupId,ddmStructureKey,start,end,obc) {
            return SessionService.invoke({'/journalarticle/get-articles-by-structure-id':{
                groupId:groupId // long
                ,ddmStructureKey:ddmStructureKey // string
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getArticlesByStructureId_1 = function(groupId,classNameId,ddmStructureKey,status,start,end,obc) {
            return SessionService.invoke({'/journalarticle/get-articles-by-structure-id':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,ddmStructureKey:ddmStructureKey // string
                ,status:status // int
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getArticlesCount = function(groupId,folderId) {
            return SessionService.invoke({'/journalarticle/get-articles-count':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getArticlesCount_1 = function(groupId,folderId,status) {
            return SessionService.invoke({'/journalarticle/get-articles-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
            }});
        };
        service.getArticlesCountByArticleId = function(groupId,articleId) {
            return SessionService.invoke({'/journalarticle/get-articles-count-by-article-id':{
                groupId:groupId // long
                ,articleId:articleId // string
            }});
        };
        service.getArticlesCountByStructureId = function(groupId,ddmStructureKey) {
            return SessionService.invoke({'/journalarticle/get-articles-count-by-structure-id':{
                groupId:groupId // long
                ,ddmStructureKey:ddmStructureKey // string
            }});
        };
        service.getArticlesCountByStructureId_1 = function(groupId,classNameId,ddmStructureKey,status) {
            return SessionService.invoke({'/journalarticle/get-articles-count-by-structure-id':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,ddmStructureKey:ddmStructureKey // string
                ,status:status // int
            }});
        };
        service.getDisplayArticleByUrlTitle = function(groupId,urlTitle) {
            return SessionService.invoke({'/journalarticle/get-display-article-by-url-title':{
                groupId:groupId // long
                ,urlTitle:urlTitle // string
            }});
        };
        service.getFoldersAndArticlesCount = function(groupId,folderIds) {
            return SessionService.invoke({'/journalarticle/get-folders-and-articles-count':{
                groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
            }});
        };
        service.getGroupArticles = function(groupId,userId,rootFolderId,start,end,orderByComparator) {
            return SessionService.invoke({'/journalarticle/get-group-articles':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupArticles_1 = function(groupId,userId,rootFolderId,status,start,end,orderByComparator) {
            return SessionService.invoke({'/journalarticle/get-group-articles':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getGroupArticlesCount = function(groupId,userId,rootFolderId) {
            return SessionService.invoke({'/journalarticle/get-group-articles-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
            }});
        };
        service.getGroupArticlesCount_1 = function(groupId,userId,rootFolderId,status) {
            return SessionService.invoke({'/journalarticle/get-group-articles-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,rootFolderId:rootFolderId // long
                ,status:status // int
            }});
        };
        service.getLatestArticle = function(resourcePrimKey) {
            return SessionService.invoke({'/journalarticle/get-latest-article':{
                resourcePrimKey:resourcePrimKey // long
            }});
        };
        service.getLatestArticle_1 = function(groupId,articleId,status) {
            return SessionService.invoke({'/journalarticle/get-latest-article':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,status:status // int
            }});
        };
        service.getLatestArticle_2 = function(groupId,className,classPK) {
            return SessionService.invoke({'/journalarticle/get-latest-article':{
                groupId:groupId // long
                ,className:className // string
                ,classPK:classPK // long
            }});
        };
        service.moveArticle = function(groupId,articleId,newFolderId) {
            return SessionService.invoke({'/journalarticle/move-article':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,newFolderId:newFolderId // long
            }});
        };
        service.moveArticleFromTrash = function(groupId,articleId,newFolderId,serviceContext) {
            return SessionService.invoke({'/journalarticle/move-article-from-trash':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,newFolderId:newFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveArticleFromTrash_1 = function(groupId,resourcePrimKey,newFolderId,serviceContext) {
            return SessionService.invoke({'/journalarticle/move-article-from-trash':{
                groupId:groupId // long
                ,resourcePrimKey:resourcePrimKey // long
                ,newFolderId:newFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveArticleToTrash = function(groupId,articleId) {
            return SessionService.invoke({'/journalarticle/move-article-to-trash':{
                groupId:groupId // long
                ,articleId:articleId // string
            }});
        };
        service.removeArticleLocale = function(companyId,languageId) {
            return SessionService.invoke({'/journalarticle/remove-article-locale':{
                companyId:companyId // long
                ,languageId:languageId // string
            }});
        };
        service.removeArticleLocale_1 = function(groupId,articleId,version,languageId) {
            return SessionService.invoke({'/journalarticle/remove-article-locale':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
                ,languageId:languageId // string
            }});
        };
        service.restoreArticleFromTrash = function(resourcePrimKey) {
            return SessionService.invoke({'/journalarticle/restore-article-from-trash':{
                resourcePrimKey:resourcePrimKey // long
            }});
        };
        service.restoreArticleFromTrash_1 = function(groupId,articleId) {
            return SessionService.invoke({'/journalarticle/restore-article-from-trash':{
                groupId:groupId // long
                ,articleId:articleId // string
            }});
        };
        service.search = function(companyId,groupId,folderIds,classNameId,keywords,version,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,start,end,obc) {
            return SessionService.invoke({'/journalarticle/search':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,classNameId:classNameId // long
                ,keywords:keywords // string
                ,version:version // object<java.lang.Double>
                ,type:type // string
                ,ddmStructureKey:ddmStructureKey // string
                ,ddmTemplateKey:ddmTemplateKey // string
                ,displayDateGT:displayDateGT // long
                ,displayDateLT:displayDateLT // long
                ,status:status // int
                ,reviewDate:reviewDate // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_1 = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,andOperator,start,end,obc) {
            return SessionService.invoke({'/journalarticle/search':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,classNameId:classNameId // long
                ,articleId:articleId // string
                ,version:version // object<java.lang.Double>
                ,title:title // string
                ,description:description // string
                ,content:content // string
                ,type:type // string
                ,ddmStructureKey:ddmStructureKey // string
                ,ddmTemplateKey:ddmTemplateKey // string
                ,displayDateGT:displayDateGT // long
                ,displayDateLT:displayDateLT // long
                ,status:status // int
                ,reviewDate:reviewDate // long
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_2 = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKeys,ddmTemplateKeys,displayDateGT,displayDateLT,status,reviewDate,andOperator,start,end,obc) {
            return SessionService.invoke({'/journalarticle/search':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,classNameId:classNameId // long
                ,articleId:articleId // string
                ,version:version // object<java.lang.Double>
                ,title:title // string
                ,description:description // string
                ,content:content // string
                ,type:type // string
                ,ddmStructureKeys:ddmStructureKeys // string[]
                ,ddmTemplateKeys:ddmTemplateKeys // string[]
                ,displayDateGT:displayDateGT // long
                ,displayDateLT:displayDateLT // long
                ,status:status // int
                ,reviewDate:reviewDate // long
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_3 = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke({'/journalarticle/search':{
                groupId:groupId // long
                ,creatorUserId:creatorUserId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.searchCount = function(companyId,groupId,folderIds,classNameId,keywords,version,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate) {
            return SessionService.invoke({'/journalarticle/search-count':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,classNameId:classNameId // long
                ,keywords:keywords // string
                ,version:version // object<java.lang.Double>
                ,type:type // string
                ,ddmStructureKey:ddmStructureKey // string
                ,ddmTemplateKey:ddmTemplateKey // string
                ,displayDateGT:displayDateGT // long
                ,displayDateLT:displayDateLT // long
                ,status:status // int
                ,reviewDate:reviewDate // long
            }});
        };
        service.searchCount_1 = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKey,ddmTemplateKey,displayDateGT,displayDateLT,status,reviewDate,andOperator) {
            return SessionService.invoke({'/journalarticle/search-count':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,classNameId:classNameId // long
                ,articleId:articleId // string
                ,version:version // object<java.lang.Double>
                ,title:title // string
                ,description:description // string
                ,content:content // string
                ,type:type // string
                ,ddmStructureKey:ddmStructureKey // string
                ,ddmTemplateKey:ddmTemplateKey // string
                ,displayDateGT:displayDateGT // long
                ,displayDateLT:displayDateLT // long
                ,status:status // int
                ,reviewDate:reviewDate // long
                ,andOperator:andOperator // boolean
            }});
        };
        service.searchCount_2 = function(companyId,groupId,folderIds,classNameId,articleId,version,title,description,content,type,ddmStructureKeys,ddmTemplateKeys,displayDateGT,displayDateLT,status,reviewDate,andOperator) {
            return SessionService.invoke({'/journalarticle/search-count':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,classNameId:classNameId // long
                ,articleId:articleId // string
                ,version:version // object<java.lang.Double>
                ,title:title // string
                ,description:description // string
                ,content:content // string
                ,type:type // string
                ,ddmStructureKeys:ddmStructureKeys // string[]
                ,ddmTemplateKeys:ddmTemplateKeys // string[]
                ,displayDateGT:displayDateGT // long
                ,displayDateLT:displayDateLT // long
                ,status:status // int
                ,reviewDate:reviewDate // long
                ,andOperator:andOperator // boolean
            }});
        };
        service.subscribe = function(groupId) {
            return SessionService.invoke({'/journalarticle/subscribe':{
                groupId:groupId // long
            }});
        };
        service.unsubscribe = function(groupId) {
            return SessionService.invoke({'/journalarticle/unsubscribe':{
                groupId:groupId // long
            }});
        };
        service.updateArticle = function(userId,groupId,folderId,articleId,version,titleMap,descriptionMap,content,layoutUuid,serviceContext) {
            return SessionService.invoke({'/journalarticle/update-article':{
                userId:userId // long
                ,groupId:groupId // long
                ,folderId:folderId // long
                ,articleId:articleId // string
                ,version:version // double
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,content:content // string
                ,layoutUuid:layoutUuid // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateArticle_1 = function(groupId,folderId,articleId,version,titleMap,descriptionMap,content,type,ddmStructureKey,ddmTemplateKey,layoutUuid,displayDateMonth,displayDateDay,displayDateYear,displayDateHour,displayDateMinute,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,reviewDateMonth,reviewDateDay,reviewDateYear,reviewDateHour,reviewDateMinute,neverReview,indexable,smallImage,smallImageURL,smallFile,images,articleURL,serviceContext) {
            return SessionService.invoke({'/journalarticle/update-article':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,articleId:articleId // string
                ,version:version // double
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,content:content // string
                ,type:type // string
                ,ddmStructureKey:ddmStructureKey // string
                ,ddmTemplateKey:ddmTemplateKey // string
                ,layoutUuid:layoutUuid // string
                ,displayDateMonth:displayDateMonth // int
                ,displayDateDay:displayDateDay // int
                ,displayDateYear:displayDateYear // int
                ,displayDateHour:displayDateHour // int
                ,displayDateMinute:displayDateMinute // int
                ,expirationDateMonth:expirationDateMonth // int
                ,expirationDateDay:expirationDateDay // int
                ,expirationDateYear:expirationDateYear // int
                ,expirationDateHour:expirationDateHour // int
                ,expirationDateMinute:expirationDateMinute // int
                ,neverExpire:neverExpire // boolean
                ,reviewDateMonth:reviewDateMonth // int
                ,reviewDateDay:reviewDateDay // int
                ,reviewDateYear:reviewDateYear // int
                ,reviewDateHour:reviewDateHour // int
                ,reviewDateMinute:reviewDateMinute // int
                ,neverReview:neverReview // boolean
                ,indexable:indexable // boolean
                ,smallImage:smallImage // boolean
                ,smallImageURL:smallImageURL // string
                ,smallFile:smallFile // object<java.io.File>
                ,images:images // map<string>
                ,articleURL:articleURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateArticle_2 = function(groupId,folderId,articleId,version,content,serviceContext) {
            return SessionService.invoke({'/journalarticle/update-article':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,articleId:articleId // string
                ,version:version // double
                ,content:content // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateArticleTranslation = function(groupId,articleId,version,locale,title,description,content,images) {
            return SessionService.invoke({'/journalarticle/update-article-translation':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
                ,locale:locale // string
                ,title:title // string
                ,description:description // string
                ,content:content // string
                ,images:images // map<string>
            }});
        };
        service.updateArticleTranslation_1 = function(groupId,articleId,version,locale,title,description,content,images,serviceContext) {
            return SessionService.invoke({'/journalarticle/update-article-translation':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
                ,locale:locale // string
                ,title:title // string
                ,description:description // string
                ,content:content // string
                ,images:images // map<string>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateContent = function(groupId,articleId,version,content) {
            return SessionService.invoke({'/journalarticle/update-content':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
                ,content:content // string
            }});
        };
        service.updateStatus = function(groupId,articleId,version,status,articleURL,serviceContext) {
            return SessionService.invoke({'/journalarticle/update-status':{
                groupId:groupId // long
                ,articleId:articleId // string
                ,version:version // double
                ,status:status // int
                ,articleURL:articleURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalfeedService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFeed = function(groupId,feedId,autoFeedId,name,description,type,structureId,templateId,rendererTemplateId,delta,orderByCol,orderByType,targetLayoutFriendlyUrl,targetPortletId,contentField,feedType,feedVersion,serviceContext) {
            return SessionService.invoke({'/journalfeed/add-feed':{
                groupId:groupId // long
                ,feedId:feedId // string
                ,autoFeedId:autoFeedId // boolean
                ,name:name // string
                ,description:description // string
                ,type:type // string
                ,structureId:structureId // string
                ,templateId:templateId // string
                ,rendererTemplateId:rendererTemplateId // string
                ,delta:delta // int
                ,orderByCol:orderByCol // string
                ,orderByType:orderByType // string
                ,targetLayoutFriendlyUrl:targetLayoutFriendlyUrl // string
                ,targetPortletId:targetPortletId // string
                ,contentField:contentField // string
                ,feedType:feedType // string
                ,feedVersion:feedVersion // double
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFeed = function(feedId) {
            return SessionService.invoke({'/journalfeed/delete-feed':{
                feedId:feedId // long
            }});
        };
        service.deleteFeed_1 = function(groupId,feedId) {
            return SessionService.invoke({'/journalfeed/delete-feed':{
                groupId:groupId // long
                ,feedId:feedId // string
            }});
        };
        service.getFeed = function(feedId) {
            return SessionService.invoke({'/journalfeed/get-feed':{
                feedId:feedId // long
            }});
        };
        service.getFeed_1 = function(groupId,feedId) {
            return SessionService.invoke({'/journalfeed/get-feed':{
                groupId:groupId // long
                ,feedId:feedId // string
            }});
        };
        service.updateFeed = function(groupId,feedId,name,description,type,structureId,templateId,rendererTemplateId,delta,orderByCol,orderByType,targetLayoutFriendlyUrl,targetPortletId,contentField,feedType,feedVersion,serviceContext) {
            return SessionService.invoke({'/journalfeed/update-feed':{
                groupId:groupId // long
                ,feedId:feedId // string
                ,name:name // string
                ,description:description // string
                ,type:type // string
                ,structureId:structureId // string
                ,templateId:templateId // string
                ,rendererTemplateId:rendererTemplateId // string
                ,delta:delta // int
                ,orderByCol:orderByCol // string
                ,orderByType:orderByType // string
                ,targetLayoutFriendlyUrl:targetLayoutFriendlyUrl // string
                ,targetPortletId:targetPortletId // string
                ,contentField:contentField // string
                ,feedType:feedType // string
                ,feedVersion:feedVersion // double
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalfolderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFolder = function(groupId,parentFolderId,name,description,serviceContext) {
            return SessionService.invoke({'/journalfolder/add-folder':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFolder = function(folderId) {
            return SessionService.invoke({'/journalfolder/delete-folder':{
                folderId:folderId // long
            }});
        };
        service.deleteFolder_1 = function(folderId,includeTrashedEntries) {
            return SessionService.invoke({'/journalfolder/delete-folder':{
                folderId:folderId // long
                ,includeTrashedEntries:includeTrashedEntries // boolean
            }});
        };
        service.getFolder = function(folderId) {
            return SessionService.invoke({'/journalfolder/get-folder':{
                folderId:folderId // long
            }});
        };
        service.getFolderIds = function(groupId,folderId) {
            return SessionService.invoke({'/journalfolder/get-folder-ids':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getFolders = function(groupId) {
            return SessionService.invoke({'/journalfolder/get-folders':{
                groupId:groupId // long
            }});
        };
        service.getFolders_1 = function(groupId,parentFolderId) {
            return SessionService.invoke({'/journalfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getFolders_2 = function(groupId,parentFolderId,status) {
            return SessionService.invoke({'/journalfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
            }});
        };
        service.getFolders_3 = function(groupId,parentFolderId,start,end) {
            return SessionService.invoke({'/journalfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFolders_4 = function(groupId,parentFolderId,status,start,end) {
            return SessionService.invoke({'/journalfolder/get-folders':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getFoldersAndArticles = function(groupId,folderId,start,end,obc) {
            return SessionService.invoke({'/journalfolder/get-folders-and-articles':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFoldersAndArticles_1 = function(groupId,folderId,status,start,end,obc) {
            return SessionService.invoke({'/journalfolder/get-folders-and-articles':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getFoldersAndArticlesCount = function(groupId,folderId) {
            return SessionService.invoke({'/journalfolder/get-folders-and-articles-count':{
                groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getFoldersAndArticlesCount_1 = function(groupId,folderId,status) {
            return SessionService.invoke({'/journalfolder/get-folders-and-articles-count':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,status:status // int
            }});
        };
        service.getFoldersAndArticlesCount_2 = function(groupId,folderIds,status) {
            return SessionService.invoke({'/journalfolder/get-folders-and-articles-count':{
                groupId:groupId // long
                ,folderIds:folderIds // list<object<java.lang.Long>>
                ,status:status // int
            }});
        };
        service.getFoldersCount = function(groupId,parentFolderId) {
            return SessionService.invoke({'/journalfolder/get-folders-count':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
            }});
        };
        service.getFoldersCount_1 = function(groupId,parentFolderId,status) {
            return SessionService.invoke({'/journalfolder/get-folders-count':{
                groupId:groupId // long
                ,parentFolderId:parentFolderId // long
                ,status:status // int
            }});
        };
        service.getSubfolderIds = function(folderIds,groupId,folderId) {
            return SessionService.invoke({'/journalfolder/get-subfolder-ids':{
                folderIds:folderIds // list<object<java.lang.Long>>
                ,groupId:groupId // long
                ,folderId:folderId // long
            }});
        };
        service.getSubfolderIds_1 = function(groupId,folderId,recurse) {
            return SessionService.invoke({'/journalfolder/get-subfolder-ids':{
                groupId:groupId // long
                ,folderId:folderId // long
                ,recurse:recurse // boolean
            }});
        };
        service.moveFolder = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke({'/journalfolder/move-folder':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveFolderFromTrash = function(folderId,parentFolderId,serviceContext) {
            return SessionService.invoke({'/journalfolder/move-folder-from-trash':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.moveFolderToTrash = function(folderId) {
            return SessionService.invoke({'/journalfolder/move-folder-to-trash':{
                folderId:folderId // long
            }});
        };
        service.restoreFolderFromTrash = function(folderId) {
            return SessionService.invoke({'/journalfolder/restore-folder-from-trash':{
                folderId:folderId // long
            }});
        };
        service.updateFolder = function(folderId,parentFolderId,name,description,mergeWithParentFolder,serviceContext) {
            return SessionService.invoke({'/journalfolder/update-folder':{
                folderId:folderId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,description:description // string
                ,mergeWithParentFolder:mergeWithParentFolder // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournalstructureService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addStructure = function(groupId,structureId,autoStructureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke({'/journalstructure/add-structure':{
                groupId:groupId // long
                ,structureId:structureId // string
                ,autoStructureId:autoStructureId // boolean
                ,parentStructureId:parentStructureId // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsd:xsd // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyStructure = function(groupId,oldStructureId,newStructureId,autoStructureId) {
            return SessionService.invoke({'/journalstructure/copy-structure':{
                groupId:groupId // long
                ,oldStructureId:oldStructureId // string
                ,newStructureId:newStructureId // string
                ,autoStructureId:autoStructureId // boolean
            }});
        };
        service.deleteStructure = function(groupId,structureId) {
            return SessionService.invoke({'/journalstructure/delete-structure':{
                groupId:groupId // long
                ,structureId:structureId // string
            }});
        };
        service.getStructure = function(groupId,structureId) {
            return SessionService.invoke({'/journalstructure/get-structure':{
                groupId:groupId // long
                ,structureId:structureId // string
            }});
        };
        service.getStructure_1 = function(groupId,structureId,includeGlobalStructures) {
            return SessionService.invoke({'/journalstructure/get-structure':{
                groupId:groupId // long
                ,structureId:structureId // string
                ,includeGlobalStructures:includeGlobalStructures // boolean
            }});
        };
        service.getStructures = function(groupId) {
            return SessionService.invoke({'/journalstructure/get-structures':{
                groupId:groupId // long
            }});
        };
        service.getStructures_1 = function(groupIds) {
            return SessionService.invoke({'/journalstructure/get-structures':{
                groupIds:groupIds // long[]
            }});
        };
        service.search = function(companyId,groupIds,keywords,start,end,obc) {
            return SessionService.invoke({'/journalstructure/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,keywords:keywords // string
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_1 = function(companyId,groupIds,structureId,name,description,andOperator,start,end,obc) {
            return SessionService.invoke({'/journalstructure/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,structureId:structureId // string
                ,name:name // string
                ,description:description // string
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.searchCount = function(companyId,groupIds,keywords) {
            return SessionService.invoke({'/journalstructure/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,keywords:keywords // string
            }});
        };
        service.searchCount_1 = function(companyId,groupIds,structureId,name,description,andOperator) {
            return SessionService.invoke({'/journalstructure/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,structureId:structureId // string
                ,name:name // string
                ,description:description // string
                ,andOperator:andOperator // boolean
            }});
        };
        service.updateStructure = function(groupId,structureId,parentStructureId,nameMap,descriptionMap,xsd,serviceContext) {
            return SessionService.invoke({'/journalstructure/update-structure':{
                groupId:groupId // long
                ,structureId:structureId // string
                ,parentStructureId:parentStructureId // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsd:xsd // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('JournaltemplateService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTemplate = function(groupId,templateId,autoTemplateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,serviceContext) {
            return SessionService.invoke({'/journaltemplate/add-template':{
                groupId:groupId // long
                ,templateId:templateId // string
                ,autoTemplateId:autoTemplateId // boolean
                ,structureId:structureId // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsl:xsl // string
                ,formatXsl:formatXsl // boolean
                ,langType:langType // string
                ,cacheable:cacheable // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addTemplate_1 = function(groupId,templateId,autoTemplateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,smallImage,smallImageURL,smallFile,serviceContext) {
            return SessionService.invoke({'/journaltemplate/add-template':{
                groupId:groupId // long
                ,templateId:templateId // string
                ,autoTemplateId:autoTemplateId // boolean
                ,structureId:structureId // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsl:xsl // string
                ,formatXsl:formatXsl // boolean
                ,langType:langType // string
                ,cacheable:cacheable // boolean
                ,smallImage:smallImage // boolean
                ,smallImageURL:smallImageURL // string
                ,smallFile:smallFile // object<java.io.File>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyTemplate = function(groupId,oldTemplateId,newTemplateId,autoTemplateId) {
            return SessionService.invoke({'/journaltemplate/copy-template':{
                groupId:groupId // long
                ,oldTemplateId:oldTemplateId // string
                ,newTemplateId:newTemplateId // string
                ,autoTemplateId:autoTemplateId // boolean
            }});
        };
        service.deleteTemplate = function(groupId,templateId) {
            return SessionService.invoke({'/journaltemplate/delete-template':{
                groupId:groupId // long
                ,templateId:templateId // string
            }});
        };
        service.getStructureTemplates = function(groupId,structureId) {
            return SessionService.invoke({'/journaltemplate/get-structure-templates':{
                groupId:groupId // long
                ,structureId:structureId // string
            }});
        };
        service.getTemplate = function(groupId,templateId) {
            return SessionService.invoke({'/journaltemplate/get-template':{
                groupId:groupId // long
                ,templateId:templateId // string
            }});
        };
        service.getTemplate_1 = function(groupId,templateId,includeGlobalTemplates) {
            return SessionService.invoke({'/journaltemplate/get-template':{
                groupId:groupId // long
                ,templateId:templateId // string
                ,includeGlobalTemplates:includeGlobalTemplates // boolean
            }});
        };
        service.search = function(companyId,groupIds,templateId,structureId,structureIdComparator,name,description,andOperator,start,end,obc) {
            return SessionService.invoke({'/journaltemplate/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,templateId:templateId // string
                ,structureId:structureId // string
                ,structureIdComparator:structureIdComparator // string
                ,name:name // string
                ,description:description // string
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.search_1 = function(companyId,groupIds,keywords,structureId,structureIdComparator,start,end,obc) {
            return SessionService.invoke({'/journaltemplate/search':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,keywords:keywords // string
                ,structureId:structureId // string
                ,structureIdComparator:structureIdComparator // string
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.searchCount = function(companyId,groupIds,keywords,structureId,structureIdComparator) {
            return SessionService.invoke({'/journaltemplate/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,keywords:keywords // string
                ,structureId:structureId // string
                ,structureIdComparator:structureIdComparator // string
            }});
        };
        service.searchCount_1 = function(companyId,groupIds,templateId,structureId,structureIdComparator,name,description,andOperator) {
            return SessionService.invoke({'/journaltemplate/search-count':{
                companyId:companyId // long
                ,groupIds:groupIds // long[]
                ,templateId:templateId // string
                ,structureId:structureId // string
                ,structureIdComparator:structureIdComparator // string
                ,name:name // string
                ,description:description // string
                ,andOperator:andOperator // boolean
            }});
        };
        service.updateTemplate = function(groupId,templateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,serviceContext) {
            return SessionService.invoke({'/journaltemplate/update-template':{
                groupId:groupId // long
                ,templateId:templateId // string
                ,structureId:structureId // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsl:xsl // string
                ,formatXsl:formatXsl // boolean
                ,langType:langType // string
                ,cacheable:cacheable // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateTemplate_1 = function(groupId,templateId,structureId,nameMap,descriptionMap,xsl,formatXsl,langType,cacheable,smallImage,smallImageURL,smallFile,serviceContext) {
            return SessionService.invoke({'/journaltemplate/update-template':{
                groupId:groupId // long
                ,templateId:templateId // string
                ,structureId:structureId // string
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,xsl:xsl // string
                ,formatXsl:formatXsl // boolean
                ,langType:langType // string
                ,cacheable:cacheable // boolean
                ,smallImage:smallImage // boolean
                ,smallImageURL:smallImageURL // string
                ,smallFile:smallFile // object<java.io.File>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayout = function(groupId,privateLayout,parentLayoutId,name,title,description,type,hidden,friendlyURL,serviceContext) {
            return SessionService.invoke({'/layout/add-layout':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parentLayoutId:parentLayoutId // long
                ,name:name // string
                ,title:title // string
                ,description:description // string
                ,type:type // string
                ,hidden:hidden // boolean
                ,friendlyURL:friendlyURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addLayout_1 = function(groupId,privateLayout,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURL,serviceContext) {
            return SessionService.invoke({'/layout/add-layout':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parentLayoutId:parentLayoutId // long
                ,localeNamesMap:localeNamesMap // map<string,string>
                ,localeTitlesMap:localeTitlesMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,keywordsMap:keywordsMap // map<string,string>
                ,robotsMap:robotsMap // map<string,string>
                ,type:type // string
                ,hidden:hidden // boolean
                ,friendlyURL:friendlyURL // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addLayout_2 = function(groupId,privateLayout,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,typeSettings,hidden,friendlyURLMap,serviceContext) {
            return SessionService.invoke({'/layout/add-layout':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parentLayoutId:parentLayoutId // long
                ,localeNamesMap:localeNamesMap // map<string,string>
                ,localeTitlesMap:localeTitlesMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,keywordsMap:keywordsMap // map<string,string>
                ,robotsMap:robotsMap // map<string,string>
                ,type:type // string
                ,typeSettings:typeSettings // string
                ,hidden:hidden // boolean
                ,friendlyURLMap:friendlyURLMap // map<string,string>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteLayout = function(plid,serviceContext) {
            return SessionService.invoke({'/layout/delete-layout':{
                plid:plid // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteLayout_1 = function(groupId,privateLayout,layoutId,serviceContext) {
            return SessionService.invoke({'/layout/delete-layout':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteTempFileEntry = function(groupId,fileName,tempFolderName) {
            return SessionService.invoke({'/layout/delete-temp-file-entry':{
                groupId:groupId // long
                ,fileName:fileName // string
                ,tempFolderName:tempFolderName // string
            }});
        };
        service.exportLayouts = function(groupId,privateLayout,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-layouts':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
            }});
        };
        service.exportLayouts_1 = function(groupId,privateLayout,layoutIds,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-layouts':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutIds:layoutIds // long[]
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
            }});
        };
        service.exportLayoutsAsFile = function(groupId,privateLayout,layoutIds,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-layouts-as-file':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutIds:layoutIds // long[]
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
            }});
        };
        service.exportLayoutsAsFileInBackground = function(taskName,groupId,privateLayout,layoutIds,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke({'/layout/export-layouts-as-file-in-background':{
                taskName:taskName // string
                ,groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutIds:layoutIds // long[]
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,fileName:fileName // string
            }});
        };
        service.exportPortletInfo = function(companyId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-portlet-info':{
                companyId:companyId // long
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
            }});
        };
        service.exportPortletInfo_1 = function(plid,groupId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-portlet-info':{
                plid:plid // long
                ,groupId:groupId // long
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
            }});
        };
        service.exportPortletInfoAsFile = function(portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-portlet-info-as-file':{
                portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
            }});
        };
        service.exportPortletInfoAsFile_1 = function(plid,groupId,portletId,parameterMap,startDate,endDate) {
            return SessionService.invoke({'/layout/export-portlet-info-as-file':{
                plid:plid // long
                ,groupId:groupId // long
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
            }});
        };
        service.exportPortletInfoAsFileInBackground = function(taskName,portletId,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke({'/layout/export-portlet-info-as-file-in-background':{
                taskName:taskName // string
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,fileName:fileName // string
            }});
        };
        service.exportPortletInfoAsFileInBackground_1 = function(taskName,plid,groupId,portletId,parameterMap,startDate,endDate,fileName) {
            return SessionService.invoke({'/layout/export-portlet-info-as-file-in-background':{
                taskName:taskName // string
                ,plid:plid // long
                ,groupId:groupId // long
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,fileName:fileName // string
            }});
        };
        service.getAncestorLayouts = function(plid) {
            return SessionService.invoke({'/layout/get-ancestor-layouts':{
                plid:plid // long
            }});
        };
        service.getDefaultPlid = function(groupId,scopeGroupId,portletId) {
            return SessionService.invoke({'/layout/get-default-plid':{
                groupId:groupId // long
                ,scopeGroupId:scopeGroupId // long
                ,portletId:portletId // string
            }});
        };
        service.getDefaultPlid_1 = function(groupId,scopeGroupId,privateLayout,portletId) {
            return SessionService.invoke({'/layout/get-default-plid':{
                groupId:groupId // long
                ,scopeGroupId:scopeGroupId // long
                ,privateLayout:privateLayout // boolean
                ,portletId:portletId // string
            }});
        };
        service.getLayoutByUuidAndGroupId = function(uuid,groupId,privateLayout) {
            return SessionService.invoke({'/layout/get-layout-by-uuid-and-group-id':{
                uuid:uuid // string
                ,groupId:groupId // long
                ,privateLayout:privateLayout // boolean
            }});
        };
        service.getLayoutName = function(groupId,privateLayout,layoutId,languageId) {
            return SessionService.invoke({'/layout/get-layout-name':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,languageId:languageId // string
            }});
        };
        service.getLayoutReferences = function(companyId,portletId,preferencesKey,preferencesValue) {
            return SessionService.invoke({'/layout/get-layout-references':{
                companyId:companyId // long
                ,portletId:portletId // string
                ,preferencesKey:preferencesKey // string
                ,preferencesValue:preferencesValue // string
            }});
        };
        service.getLayouts = function(groupId,privateLayout) {
            return SessionService.invoke({'/layout/get-layouts':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
            }});
        };
        service.getLayouts_1 = function(groupId,privateLayout,parentLayoutId) {
            return SessionService.invoke({'/layout/get-layouts':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parentLayoutId:parentLayoutId // long
            }});
        };
        service.getLayouts_2 = function(groupId,privateLayout,parentLayoutId,incomplete,start,end) {
            return SessionService.invoke({'/layout/get-layouts':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parentLayoutId:parentLayoutId // long
                ,incomplete:incomplete // boolean
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getLayoutsCount = function(groupId,privateLayout,parentLayoutId) {
            return SessionService.invoke({'/layout/get-layouts-count':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parentLayoutId:parentLayoutId // long
            }});
        };
        service.getTempFileEntryNames = function(groupId,tempFolderName) {
            return SessionService.invoke({'/layout/get-temp-file-entry-names':{
                groupId:groupId // long
                ,tempFolderName:tempFolderName // string
            }});
        };
        service.importLayouts = function(groupId,privateLayout,parameterMap,bytes) {
            return SessionService.invoke({'/layout/import-layouts':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parameterMap:parameterMap // map<string,string[]>
                ,bytes:bytes // byte[]
            }});
        };
        service.importLayouts_1 = function(groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke({'/layout/import-layouts':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parameterMap:parameterMap // map<string,string[]>
                ,file:file // object<java.io.File>
            }});
        };
        service.importLayoutsInBackground = function(taskName,groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke({'/layout/import-layouts-in-background':{
                taskName:taskName // string
                ,groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parameterMap:parameterMap // map<string,string[]>
                ,file:file // object<java.io.File>
            }});
        };
        service.importPortletInfo = function(portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/import-portlet-info':{
                portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,file:file // object<java.io.File>
            }});
        };
        service.importPortletInfo_1 = function(plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/import-portlet-info':{
                plid:plid // long
                ,groupId:groupId // long
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,file:file // object<java.io.File>
            }});
        };
        service.importPortletInfoInBackground = function(taskName,portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/import-portlet-info-in-background':{
                taskName:taskName // string
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,file:file // object<java.io.File>
            }});
        };
        service.importPortletInfoInBackground_1 = function(taskName,plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/import-portlet-info-in-background':{
                taskName:taskName // string
                ,plid:plid // long
                ,groupId:groupId // long
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,file:file // object<java.io.File>
            }});
        };
        service.schedulePublishToLive = function(sourceGroupId,targetGroupId,privateLayout,layoutIdMap,parameterMap,scope,startDate,endDate,groupName,cronText,schedulerStartDate,schedulerEndDate,description) {
            return SessionService.invoke({'/layout/schedule-publish-to-live':{
                sourceGroupId:sourceGroupId // long
                ,targetGroupId:targetGroupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutIdMap:layoutIdMap // map<object<java.lang.Long>,object<java.lang.Boolean>>
                ,parameterMap:parameterMap // map<string,string[]>
                ,scope:scope // string
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,groupName:groupName // string
                ,cronText:cronText // string
                ,schedulerStartDate:schedulerStartDate // long
                ,schedulerEndDate:schedulerEndDate // long
                ,description:description // string
            }});
        };
        service.schedulePublishToRemote = function(sourceGroupId,privateLayout,layoutIdMap,parameterMap,remoteAddress,remotePort,remotePathContext,secureConnection,remoteGroupId,remotePrivateLayout,startDate,endDate,groupName,cronText,schedulerStartDate,schedulerEndDate,description) {
            return SessionService.invoke({'/layout/schedule-publish-to-remote':{
                sourceGroupId:sourceGroupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutIdMap:layoutIdMap // map<object<java.lang.Long>,object<java.lang.Boolean>>
                ,parameterMap:parameterMap // map<string,string[]>
                ,remoteAddress:remoteAddress // string
                ,remotePort:remotePort // int
                ,remotePathContext:remotePathContext // string
                ,secureConnection:secureConnection // boolean
                ,remoteGroupId:remoteGroupId // long
                ,remotePrivateLayout:remotePrivateLayout // boolean
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,groupName:groupName // string
                ,cronText:cronText // string
                ,schedulerStartDate:schedulerStartDate // long
                ,schedulerEndDate:schedulerEndDate // long
                ,description:description // string
            }});
        };
        service.setLayouts = function(groupId,privateLayout,parentLayoutId,layoutIds,serviceContext) {
            return SessionService.invoke({'/layout/set-layouts':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parentLayoutId:parentLayoutId // long
                ,layoutIds:layoutIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.unschedulePublishToLive = function(groupId,jobName,groupName) {
            return SessionService.invoke({'/layout/unschedule-publish-to-live':{
                groupId:groupId // long
                ,jobName:jobName // string
                ,groupName:groupName // string
            }});
        };
        service.unschedulePublishToRemote = function(groupId,jobName,groupName) {
            return SessionService.invoke({'/layout/unschedule-publish-to-remote':{
                groupId:groupId // long
                ,jobName:jobName // string
                ,groupName:groupName // string
            }});
        };
        service.updateLayout = function(groupId,privateLayout,layoutId,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURL,iconImage,iconBytes,serviceContext) {
            return SessionService.invoke({'/layout/update-layout':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,parentLayoutId:parentLayoutId // long
                ,localeNamesMap:localeNamesMap // map<string,string>
                ,localeTitlesMap:localeTitlesMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,keywordsMap:keywordsMap // map<string,string>
                ,robotsMap:robotsMap // map<string,string>
                ,type:type // string
                ,hidden:hidden // boolean
                ,friendlyURL:friendlyURL // string
                ,iconImage:iconImage // object<java.lang.Boolean>
                ,iconBytes:iconBytes // byte[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateLayout_1 = function(groupId,privateLayout,layoutId,parentLayoutId,localeNamesMap,localeTitlesMap,descriptionMap,keywordsMap,robotsMap,type,hidden,friendlyURLMap,iconImage,iconBytes,serviceContext) {
            return SessionService.invoke({'/layout/update-layout':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,parentLayoutId:parentLayoutId // long
                ,localeNamesMap:localeNamesMap // map<string,string>
                ,localeTitlesMap:localeTitlesMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,keywordsMap:keywordsMap // map<string,string>
                ,robotsMap:robotsMap // map<string,string>
                ,type:type // string
                ,hidden:hidden // boolean
                ,friendlyURLMap:friendlyURLMap // map<string,string>
                ,iconImage:iconImage // object<java.lang.Boolean>
                ,iconBytes:iconBytes // byte[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateLayout_2 = function(groupId,privateLayout,layoutId,typeSettings) {
            return SessionService.invoke({'/layout/update-layout':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,typeSettings:typeSettings // string
            }});
        };
        service.updateLookAndFeel = function(groupId,privateLayout,layoutId,themeId,colorSchemeId,css,wapTheme) {
            return SessionService.invoke({'/layout/update-look-and-feel':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,themeId:themeId // string
                ,colorSchemeId:colorSchemeId // string
                ,css:css // string
                ,wapTheme:wapTheme // boolean
            }});
        };
        service.updateName = function(plid,name,languageId) {
            return SessionService.invoke({'/layout/update-name':{
                plid:plid // long
                ,name:name // string
                ,languageId:languageId // string
            }});
        };
        service.updateName_1 = function(groupId,privateLayout,layoutId,name,languageId) {
            return SessionService.invoke({'/layout/update-name':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,name:name // string
                ,languageId:languageId // string
            }});
        };
        service.updateParentLayoutId = function(plid,parentPlid) {
            return SessionService.invoke({'/layout/update-parent-layout-id':{
                plid:plid // long
                ,parentPlid:parentPlid // long
            }});
        };
        service.updateParentLayoutId_1 = function(groupId,privateLayout,layoutId,parentLayoutId) {
            return SessionService.invoke({'/layout/update-parent-layout-id':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,parentLayoutId:parentLayoutId // long
            }});
        };
        service.updateParentLayoutIdAndPriority = function(plid,parentPlid,priority) {
            return SessionService.invoke({'/layout/update-parent-layout-id-and-priority':{
                plid:plid // long
                ,parentPlid:parentPlid // long
                ,priority:priority // int
            }});
        };
        service.updatePriority = function(plid,priority) {
            return SessionService.invoke({'/layout/update-priority':{
                plid:plid // long
                ,priority:priority // int
            }});
        };
        service.updatePriority_1 = function(groupId,privateLayout,layoutId,priority) {
            return SessionService.invoke({'/layout/update-priority':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,priority:priority // int
            }});
        };
        service.updatePriority_2 = function(groupId,privateLayout,layoutId,nextLayoutId,previousLayoutId) {
            return SessionService.invoke({'/layout/update-priority':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutId:layoutId // long
                ,nextLayoutId:nextLayoutId // long
                ,previousLayoutId:previousLayoutId // long
            }});
        };
        service.validateImportLayoutsFile = function(groupId,privateLayout,parameterMap,file) {
            return SessionService.invoke({'/layout/validate-import-layouts-file':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,parameterMap:parameterMap // map<string,string[]>
                ,file:file // object<java.io.File>
            }});
        };
        service.validateImportPortletInfo = function(plid,groupId,portletId,parameterMap,file) {
            return SessionService.invoke({'/layout/validate-import-portlet-info':{
                plid:plid // long
                ,groupId:groupId // long
                ,portletId:portletId // string
                ,parameterMap:parameterMap // map<string,string[]>
                ,file:file // object<java.io.File>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutbranchService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutBranch = function(layoutRevisionId,name,description,master,serviceContext) {
            return SessionService.invoke({'/layoutbranch/add-layout-branch':{
                layoutRevisionId:layoutRevisionId // long
                ,name:name // string
                ,description:description // string
                ,master:master // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteLayoutBranch = function(layoutBranchId) {
            return SessionService.invoke({'/layoutbranch/delete-layout-branch':{
                layoutBranchId:layoutBranchId // long
            }});
        };
        service.updateLayoutBranch = function(layoutBranchId,name,description,serviceContext) {
            return SessionService.invoke({'/layoutbranch/update-layout-branch':{
                layoutBranchId:layoutBranchId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutprototypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutPrototype = function(nameMap,description,active) {
            return SessionService.invoke({'/layoutprototype/add-layout-prototype':{
                nameMap:nameMap // map<string,string>
                ,description:description // string
                ,active:active // boolean
            }});
        };
        service.addLayoutPrototype_1 = function(nameMap,description,active,serviceContext) {
            return SessionService.invoke({'/layoutprototype/add-layout-prototype':{
                nameMap:nameMap // map<string,string>
                ,description:description // string
                ,active:active // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteLayoutPrototype = function(layoutPrototypeId) {
            return SessionService.invoke({'/layoutprototype/delete-layout-prototype':{
                layoutPrototypeId:layoutPrototypeId // long
            }});
        };
        service.getLayoutPrototype = function(layoutPrototypeId) {
            return SessionService.invoke({'/layoutprototype/get-layout-prototype':{
                layoutPrototypeId:layoutPrototypeId // long
            }});
        };
        service.search = function(companyId,active,obc) {
            return SessionService.invoke({'/layoutprototype/search':{
                companyId:companyId // long
                ,active:active // object<java.lang.Boolean>
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.updateLayoutPrototype = function(layoutPrototypeId,nameMap,description,active) {
            return SessionService.invoke({'/layoutprototype/update-layout-prototype':{
                layoutPrototypeId:layoutPrototypeId // long
                ,nameMap:nameMap // map<string,string>
                ,description:description // string
                ,active:active // boolean
            }});
        };
        service.updateLayoutPrototype_1 = function(layoutPrototypeId,nameMap,description,active,serviceContext) {
            return SessionService.invoke({'/layoutprototype/update-layout-prototype':{
                layoutPrototypeId:layoutPrototypeId // long
                ,nameMap:nameMap // map<string,string>
                ,description:description // string
                ,active:active // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutrevisionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutRevision = function(userId,layoutSetBranchId,layoutBranchId,parentLayoutRevisionId,head,plid,portletPreferencesPlid,privateLayout,name,title,description,keywords,robots,typeSettings,iconImage,iconImageId,themeId,colorSchemeId,wapThemeId,wapColorSchemeId,css,serviceContext) {
            return SessionService.invoke({'/layoutrevision/add-layout-revision':{
                userId:userId // long
                ,layoutSetBranchId:layoutSetBranchId // long
                ,layoutBranchId:layoutBranchId // long
                ,parentLayoutRevisionId:parentLayoutRevisionId // long
                ,head:head // boolean
                ,plid:plid // long
                ,portletPreferencesPlid:portletPreferencesPlid // long
                ,privateLayout:privateLayout // boolean
                ,name:name // string
                ,title:title // string
                ,description:description // string
                ,keywords:keywords // string
                ,robots:robots // string
                ,typeSettings:typeSettings // string
                ,iconImage:iconImage // boolean
                ,iconImageId:iconImageId // long
                ,themeId:themeId // string
                ,colorSchemeId:colorSchemeId // string
                ,wapThemeId:wapThemeId // string
                ,wapColorSchemeId:wapColorSchemeId // string
                ,css:css // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.updateLayoutSetPrototypeLinkEnabled = function(groupId,privateLayout,layoutSetPrototypeLinkEnabled,layoutSetPrototypeUuid) {
            return SessionService.invoke({'/layoutset/update-layout-set-prototype-link-enabled':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,layoutSetPrototypeLinkEnabled:layoutSetPrototypeLinkEnabled // boolean
                ,layoutSetPrototypeUuid:layoutSetPrototypeUuid // string
            }});
        };
        service.updateLogo = function(groupId,privateLayout,logo,bytes) {
            return SessionService.invoke({'/layoutset/update-logo':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,logo:logo // boolean
                ,bytes:bytes // byte[]
            }});
        };
        service.updateLogo_1 = function(groupId,privateLayout,logo,file) {
            return SessionService.invoke({'/layoutset/update-logo':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,logo:logo // boolean
                ,file:file // object<java.io.File>
            }});
        };
        service.updateLookAndFeel = function(groupId,privateLayout,themeId,colorSchemeId,css,wapTheme) {
            return SessionService.invoke({'/layoutset/update-look-and-feel':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,themeId:themeId // string
                ,colorSchemeId:colorSchemeId // string
                ,css:css // string
                ,wapTheme:wapTheme // boolean
            }});
        };
        service.updateSettings = function(groupId,privateLayout,settings) {
            return SessionService.invoke({'/layoutset/update-settings':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,settings:settings // string
            }});
        };
        service.updateVirtualHost = function(groupId,privateLayout,virtualHost) {
            return SessionService.invoke({'/layoutset/update-virtual-host':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,virtualHost:virtualHost // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetbranchService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutSetBranch = function(groupId,privateLayout,name,description,master,copyLayoutSetBranchId,serviceContext) {
            return SessionService.invoke({'/layoutsetbranch/add-layout-set-branch':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
                ,name:name // string
                ,description:description // string
                ,master:master // boolean
                ,copyLayoutSetBranchId:copyLayoutSetBranchId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteLayoutSetBranch = function(layoutSetBranchId) {
            return SessionService.invoke({'/layoutsetbranch/delete-layout-set-branch':{
                layoutSetBranchId:layoutSetBranchId // long
            }});
        };
        service.getLayoutSetBranches = function(groupId,privateLayout) {
            return SessionService.invoke({'/layoutsetbranch/get-layout-set-branches':{
                groupId:groupId // long
                ,privateLayout:privateLayout // boolean
            }});
        };
        service.mergeLayoutSetBranch = function(layoutSetBranchId,mergeLayoutSetBranchId,serviceContext) {
            return SessionService.invoke({'/layoutsetbranch/merge-layout-set-branch':{
                layoutSetBranchId:layoutSetBranchId // long
                ,mergeLayoutSetBranchId:mergeLayoutSetBranchId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateLayoutSetBranch = function(groupId,layoutSetBranchId,name,description,serviceContext) {
            return SessionService.invoke({'/layoutsetbranch/update-layout-set-branch':{
                groupId:groupId // long
                ,layoutSetBranchId:layoutSetBranchId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('LayoutsetprototypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLayoutSetPrototype = function(nameMap,description,active,layoutsUpdateable,serviceContext) {
            return SessionService.invoke({'/layoutsetprototype/add-layout-set-prototype':{
                nameMap:nameMap // map<string,string>
                ,description:description // string
                ,active:active // boolean
                ,layoutsUpdateable:layoutsUpdateable // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteLayoutSetPrototype = function(layoutSetPrototypeId) {
            return SessionService.invoke({'/layoutsetprototype/delete-layout-set-prototype':{
                layoutSetPrototypeId:layoutSetPrototypeId // long
            }});
        };
        service.getLayoutSetPrototype = function(layoutSetPrototypeId) {
            return SessionService.invoke({'/layoutsetprototype/get-layout-set-prototype':{
                layoutSetPrototypeId:layoutSetPrototypeId // long
            }});
        };
        service.search = function(companyId,active,obc) {
            return SessionService.invoke({'/layoutsetprototype/search':{
                companyId:companyId // long
                ,active:active // object<java.lang.Boolean>
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.updateLayoutSetPrototype = function(layoutSetPrototypeId,settings) {
            return SessionService.invoke({'/layoutsetprototype/update-layout-set-prototype':{
                layoutSetPrototypeId:layoutSetPrototypeId // long
                ,settings:settings // string
            }});
        };
        service.updateLayoutSetPrototype_1 = function(layoutSetPrototypeId,nameMap,description,active,layoutsUpdateable,serviceContext) {
            return SessionService.invoke({'/layoutsetprototype/update-layout-set-prototype':{
                layoutSetPrototypeId:layoutSetPrototypeId // long
                ,nameMap:nameMap // map<string,string>
                ,description:description // string
                ,active:active // boolean
                ,layoutsUpdateable:layoutsUpdateable // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ListtypeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getListType = function(listTypeId) {
            return SessionService.invoke({'/listtype/get-list-type':{
                listTypeId:listTypeId // int
            }});
        };
        service.getListTypes = function(type) {
            return SessionService.invoke({'/listtype/get-list-types':{
                type:type // string
            }});
        };
        service.validate = function(listTypeId,type) {
            return SessionService.invoke({'/listtype/validate':{
                listTypeId:listTypeId // int
                ,type:type // string
            }});
        };
        service.validate_1 = function(listTypeId,classNameId,type) {
            return SessionService.invoke({'/listtype/validate':{
                listTypeId:listTypeId // int
                ,classNameId:classNameId // long
                ,type:type // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbbanService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addBan = function(banUserId,serviceContext) {
            return SessionService.invoke({'/mbban/add-ban':{
                banUserId:banUserId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteBan = function(banUserId,serviceContext) {
            return SessionService.invoke({'/mbban/delete-ban':{
                banUserId:banUserId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCategory = function(parentCategoryId,name,description,displayStyle,emailAddress,inProtocol,inServerName,inServerPort,inUseSSL,inUserName,inPassword,inReadInterval,outEmailAddress,outCustom,outServerName,outServerPort,outUseSSL,outUserName,outPassword,mailingListActive,allowAnonymousEmail,serviceContext) {
            return SessionService.invoke({'/mbcategory/add-category':{
                parentCategoryId:parentCategoryId // long
                ,name:name // string
                ,description:description // string
                ,displayStyle:displayStyle // string
                ,emailAddress:emailAddress // string
                ,inProtocol:inProtocol // string
                ,inServerName:inServerName // string
                ,inServerPort:inServerPort // int
                ,inUseSSL:inUseSSL // boolean
                ,inUserName:inUserName // string
                ,inPassword:inPassword // string
                ,inReadInterval:inReadInterval // int
                ,outEmailAddress:outEmailAddress // string
                ,outCustom:outCustom // boolean
                ,outServerName:outServerName // string
                ,outServerPort:outServerPort // int
                ,outUseSSL:outUseSSL // boolean
                ,outUserName:outUserName // string
                ,outPassword:outPassword // string
                ,mailingListActive:mailingListActive // boolean
                ,allowAnonymousEmail:allowAnonymousEmail // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addCategory_1 = function(userId,parentCategoryId,name,description,serviceContext) {
            return SessionService.invoke({'/mbcategory/add-category':{
                userId:userId // long
                ,parentCategoryId:parentCategoryId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteCategory = function(categoryId,includeTrashedEntries) {
            return SessionService.invoke({'/mbcategory/delete-category':{
                categoryId:categoryId // long
                ,includeTrashedEntries:includeTrashedEntries // boolean
            }});
        };
        service.deleteCategory_1 = function(groupId,categoryId) {
            return SessionService.invoke({'/mbcategory/delete-category':{
                groupId:groupId // long
                ,categoryId:categoryId // long
            }});
        };
        service.getCategories = function(groupId) {
            return SessionService.invoke({'/mbcategory/get-categories':{
                groupId:groupId // long
            }});
        };
        service.getCategories_1 = function(groupId,status) {
            return SessionService.invoke({'/mbcategory/get-categories':{
                groupId:groupId // long
                ,status:status // int
            }});
        };
        service.getCategories_2 = function(groupId,parentCategoryId,start,end) {
            return SessionService.invoke({'/mbcategory/get-categories':{
                groupId:groupId // long
                ,parentCategoryId:parentCategoryId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getCategories_3 = function(groupId,parentCategoryIds,start,end) {
            return SessionService.invoke({'/mbcategory/get-categories':{
                groupId:groupId // long
                ,parentCategoryIds:parentCategoryIds // long[]
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getCategories_4 = function(groupId,parentCategoryId,status,start,end) {
            return SessionService.invoke({'/mbcategory/get-categories':{
                groupId:groupId // long
                ,parentCategoryId:parentCategoryId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getCategories_5 = function(groupId,parentCategoryIds,status,start,end) {
            return SessionService.invoke({'/mbcategory/get-categories':{
                groupId:groupId // long
                ,parentCategoryIds:parentCategoryIds // long[]
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getCategoriesCount = function(groupId,parentCategoryId) {
            return SessionService.invoke({'/mbcategory/get-categories-count':{
                groupId:groupId // long
                ,parentCategoryId:parentCategoryId // long
            }});
        };
        service.getCategoriesCount_1 = function(groupId,parentCategoryIds) {
            return SessionService.invoke({'/mbcategory/get-categories-count':{
                groupId:groupId // long
                ,parentCategoryIds:parentCategoryIds // long[]
            }});
        };
        service.getCategoriesCount_2 = function(groupId,parentCategoryId,status) {
            return SessionService.invoke({'/mbcategory/get-categories-count':{
                groupId:groupId // long
                ,parentCategoryId:parentCategoryId // long
                ,status:status // int
            }});
        };
        service.getCategoriesCount_3 = function(groupId,parentCategoryIds,status) {
            return SessionService.invoke({'/mbcategory/get-categories-count':{
                groupId:groupId // long
                ,parentCategoryIds:parentCategoryIds // long[]
                ,status:status // int
            }});
        };
        service.getCategory = function(categoryId) {
            return SessionService.invoke({'/mbcategory/get-category':{
                categoryId:categoryId // long
            }});
        };
        service.getCategoryIds = function(groupId,categoryId) {
            return SessionService.invoke({'/mbcategory/get-category-ids':{
                groupId:groupId // long
                ,categoryId:categoryId // long
            }});
        };
        service.getSubcategoryIds = function(categoryIds,groupId,categoryId) {
            return SessionService.invoke({'/mbcategory/get-subcategory-ids':{
                categoryIds:categoryIds // list<object<java.lang.Long>>
                ,groupId:groupId // long
                ,categoryId:categoryId // long
            }});
        };
        service.getSubscribedCategories = function(groupId,userId,start,end) {
            return SessionService.invoke({'/mbcategory/get-subscribed-categories':{
                groupId:groupId // long
                ,userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getSubscribedCategoriesCount = function(groupId,userId) {
            return SessionService.invoke({'/mbcategory/get-subscribed-categories-count':{
                groupId:groupId // long
                ,userId:userId // long
            }});
        };
        service.moveCategory = function(categoryId,parentCategoryId,mergeWithParentCategory) {
            return SessionService.invoke({'/mbcategory/move-category':{
                categoryId:categoryId // long
                ,parentCategoryId:parentCategoryId // long
                ,mergeWithParentCategory:mergeWithParentCategory // boolean
            }});
        };
        service.moveCategoryFromTrash = function(categoryId,newCategoryId) {
            return SessionService.invoke({'/mbcategory/move-category-from-trash':{
                categoryId:categoryId // long
                ,newCategoryId:newCategoryId // long
            }});
        };
        service.moveCategoryToTrash = function(categoryId) {
            return SessionService.invoke({'/mbcategory/move-category-to-trash':{
                categoryId:categoryId // long
            }});
        };
        service.restoreCategoryFromTrash = function(categoryId) {
            return SessionService.invoke({'/mbcategory/restore-category-from-trash':{
                categoryId:categoryId // long
            }});
        };
        service.subscribeCategory = function(groupId,categoryId) {
            return SessionService.invoke({'/mbcategory/subscribe-category':{
                groupId:groupId // long
                ,categoryId:categoryId // long
            }});
        };
        service.unsubscribeCategory = function(groupId,categoryId) {
            return SessionService.invoke({'/mbcategory/unsubscribe-category':{
                groupId:groupId // long
                ,categoryId:categoryId // long
            }});
        };
        service.updateCategory = function(categoryId,parentCategoryId,name,description,displayStyle,emailAddress,inProtocol,inServerName,inServerPort,inUseSSL,inUserName,inPassword,inReadInterval,outEmailAddress,outCustom,outServerName,outServerPort,outUseSSL,outUserName,outPassword,mailingListActive,allowAnonymousEmail,mergeWithParentCategory,serviceContext) {
            return SessionService.invoke({'/mbcategory/update-category':{
                categoryId:categoryId // long
                ,parentCategoryId:parentCategoryId // long
                ,name:name // string
                ,description:description // string
                ,displayStyle:displayStyle // string
                ,emailAddress:emailAddress // string
                ,inProtocol:inProtocol // string
                ,inServerName:inServerName // string
                ,inServerPort:inServerPort // int
                ,inUseSSL:inUseSSL // boolean
                ,inUserName:inUserName // string
                ,inPassword:inPassword // string
                ,inReadInterval:inReadInterval // int
                ,outEmailAddress:outEmailAddress // string
                ,outCustom:outCustom // boolean
                ,outServerName:outServerName // string
                ,outServerPort:outServerPort // int
                ,outUseSSL:outUseSSL // boolean
                ,outUserName:outUserName // string
                ,outPassword:outPassword // string
                ,mailingListActive:mailingListActive // boolean
                ,allowAnonymousEmail:allowAnonymousEmail // boolean
                ,mergeWithParentCategory:mergeWithParentCategory // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbmessageService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addDiscussionMessage = function(groupId,className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,threadId,parentMessageId,subject,body,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-discussion-message':{
                groupId:groupId // long
                ,className:className // string
                ,classPK:classPK // long
                ,permissionClassName:permissionClassName // string
                ,permissionClassPK:permissionClassPK // long
                ,permissionOwnerId:permissionOwnerId // long
                ,threadId:threadId // long
                ,parentMessageId:parentMessageId // long
                ,subject:subject // string
                ,body:body // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addMessage = function(groupId,categoryId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-message':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,subject:subject // string
                ,body:body // string
                ,format:format // string
                ,inputStreamOVPs:inputStreamOVPs // list<object<com.liferay.portal.kernel.util.ObjectValuePair>>
                ,anonymous:anonymous // boolean
                ,priority:priority // double
                ,allowPingbacks:allowPingbacks // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addMessage_1 = function(groupId,categoryId,threadId,parentMessageId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-message':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,threadId:threadId // long
                ,parentMessageId:parentMessageId // long
                ,subject:subject // string
                ,body:body // string
                ,format:format // string
                ,inputStreamOVPs:inputStreamOVPs // list<object<com.liferay.portal.kernel.util.ObjectValuePair>>
                ,anonymous:anonymous // boolean
                ,priority:priority // double
                ,allowPingbacks:allowPingbacks // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addMessage_2 = function(categoryId,subject,body,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-message':{
                categoryId:categoryId // long
                ,subject:subject // string
                ,body:body // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addMessage_3 = function(parentMessageId,subject,body,format,inputStreamOVPs,anonymous,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke({'/mbmessage/add-message':{
                parentMessageId:parentMessageId // long
                ,subject:subject // string
                ,body:body // string
                ,format:format // string
                ,inputStreamOVPs:inputStreamOVPs // list<object<com.liferay.portal.kernel.util.ObjectValuePair>>
                ,anonymous:anonymous // boolean
                ,priority:priority // double
                ,allowPingbacks:allowPingbacks // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteDiscussionMessage = function(groupId,className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,messageId) {
            return SessionService.invoke({'/mbmessage/delete-discussion-message':{
                groupId:groupId // long
                ,className:className // string
                ,classPK:classPK // long
                ,permissionClassName:permissionClassName // string
                ,permissionClassPK:permissionClassPK // long
                ,permissionOwnerId:permissionOwnerId // long
                ,messageId:messageId // long
            }});
        };
        service.deleteMessage = function(messageId) {
            return SessionService.invoke({'/mbmessage/delete-message':{
                messageId:messageId // long
            }});
        };
        service.deleteMessageAttachments = function(messageId) {
            return SessionService.invoke({'/mbmessage/delete-message-attachments':{
                messageId:messageId // long
            }});
        };
        service.getCategoryMessages = function(groupId,categoryId,status,start,end) {
            return SessionService.invoke({'/mbmessage/get-category-messages':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getCategoryMessagesCount = function(groupId,categoryId,status) {
            return SessionService.invoke({'/mbmessage/get-category-messages-count':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,status:status // int
            }});
        };
        service.getCategoryMessagesRss = function(groupId,categoryId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-category-messages-rss':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,status:status // int
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.getCompanyMessagesRss = function(companyId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-company-messages-rss':{
                companyId:companyId // long
                ,status:status // int
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.getGroupMessagesCount = function(groupId,status) {
            return SessionService.invoke({'/mbmessage/get-group-messages-count':{
                groupId:groupId // long
                ,status:status // int
            }});
        };
        service.getGroupMessagesRss = function(groupId,userId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-group-messages-rss':{
                groupId:groupId // long
                ,userId:userId // long
                ,status:status // int
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.getGroupMessagesRss_1 = function(groupId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-group-messages-rss':{
                groupId:groupId // long
                ,status:status // int
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.getMessage = function(messageId) {
            return SessionService.invoke({'/mbmessage/get-message':{
                messageId:messageId // long
            }});
        };
        service.getMessageDisplay = function(messageId,status,threadView,includePrevAndNext) {
            return SessionService.invoke({'/mbmessage/get-message-display':{
                messageId:messageId // long
                ,status:status // int
                ,threadView:threadView // string
                ,includePrevAndNext:includePrevAndNext // boolean
            }});
        };
        service.getThreadAnswersCount = function(groupId,categoryId,threadId) {
            return SessionService.invoke({'/mbmessage/get-thread-answers-count':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,threadId:threadId // long
            }});
        };
        service.getThreadMessages = function(groupId,categoryId,threadId,status,start,end) {
            return SessionService.invoke({'/mbmessage/get-thread-messages':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,threadId:threadId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getThreadMessagesCount = function(groupId,categoryId,threadId,status) {
            return SessionService.invoke({'/mbmessage/get-thread-messages-count':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,threadId:threadId // long
                ,status:status // int
            }});
        };
        service.getThreadMessagesRss = function(threadId,status,max,type,version,displayStyle,feedURL,entryURL,themeDisplay) {
            return SessionService.invoke({'/mbmessage/get-thread-messages-rss':{
                threadId:threadId // long
                ,status:status // int
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        service.restoreMessageAttachmentFromTrash = function(messageId,fileName) {
            return SessionService.invoke({'/mbmessage/restore-message-attachment-from-trash':{
                messageId:messageId // long
                ,fileName:fileName // string
            }});
        };
        service.subscribeMessage = function(messageId) {
            return SessionService.invoke({'/mbmessage/subscribe-message':{
                messageId:messageId // long
            }});
        };
        service.unsubscribeMessage = function(messageId) {
            return SessionService.invoke({'/mbmessage/unsubscribe-message':{
                messageId:messageId // long
            }});
        };
        service.updateAnswer = function(messageId,answer,cascade) {
            return SessionService.invoke({'/mbmessage/update-answer':{
                messageId:messageId // long
                ,answer:answer // boolean
                ,cascade:cascade // boolean
            }});
        };
        service.updateDiscussionMessage = function(className,classPK,permissionClassName,permissionClassPK,permissionOwnerId,messageId,subject,body,serviceContext) {
            return SessionService.invoke({'/mbmessage/update-discussion-message':{
                className:className // string
                ,classPK:classPK // long
                ,permissionClassName:permissionClassName // string
                ,permissionClassPK:permissionClassPK // long
                ,permissionOwnerId:permissionOwnerId // long
                ,messageId:messageId // long
                ,subject:subject // string
                ,body:body // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateMessage = function(messageId,subject,body,inputStreamOVPs,existingFiles,priority,allowPingbacks,serviceContext) {
            return SessionService.invoke({'/mbmessage/update-message':{
                messageId:messageId // long
                ,subject:subject // string
                ,body:body // string
                ,inputStreamOVPs:inputStreamOVPs // list<object<com.liferay.portal.kernel.util.ObjectValuePair>>
                ,existingFiles:existingFiles // list<string>
                ,priority:priority // double
                ,allowPingbacks:allowPingbacks // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MbthreadService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteThread = function(threadId) {
            return SessionService.invoke({'/mbthread/delete-thread':{
                threadId:threadId // long
            }});
        };
        service.getGroupThreads = function(groupId,userId,status,start,end) {
            return SessionService.invoke({'/mbthread/get-group-threads':{
                groupId:groupId // long
                ,userId:userId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupThreads_1 = function(groupId,userId,modifiedDate,status,start,end) {
            return SessionService.invoke({'/mbthread/get-group-threads':{
                groupId:groupId // long
                ,userId:userId // long
                ,modifiedDate:modifiedDate // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupThreads_2 = function(groupId,userId,status,subscribed,start,end) {
            return SessionService.invoke({'/mbthread/get-group-threads':{
                groupId:groupId // long
                ,userId:userId // long
                ,status:status // int
                ,subscribed:subscribed // boolean
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupThreads_3 = function(groupId,userId,status,subscribed,includeAnonymous,start,end) {
            return SessionService.invoke({'/mbthread/get-group-threads':{
                groupId:groupId // long
                ,userId:userId // long
                ,status:status // int
                ,subscribed:subscribed // boolean
                ,includeAnonymous:includeAnonymous // boolean
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupThreadsCount = function(groupId,userId,status) {
            return SessionService.invoke({'/mbthread/get-group-threads-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,status:status // int
            }});
        };
        service.getGroupThreadsCount_1 = function(groupId,userId,modifiedDate,status) {
            return SessionService.invoke({'/mbthread/get-group-threads-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,modifiedDate:modifiedDate // long
                ,status:status // int
            }});
        };
        service.getGroupThreadsCount_2 = function(groupId,userId,status,subscribed) {
            return SessionService.invoke({'/mbthread/get-group-threads-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,status:status // int
                ,subscribed:subscribed // boolean
            }});
        };
        service.getGroupThreadsCount_3 = function(groupId,userId,status,subscribed,includeAnonymous) {
            return SessionService.invoke({'/mbthread/get-group-threads-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,status:status // int
                ,subscribed:subscribed // boolean
                ,includeAnonymous:includeAnonymous // boolean
            }});
        };
        service.getThreads = function(groupId,categoryId,status,start,end) {
            return SessionService.invoke({'/mbthread/get-threads':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getThreadsCount = function(groupId,categoryId,status) {
            return SessionService.invoke({'/mbthread/get-threads-count':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,status:status // int
            }});
        };
        service.lockThread = function(threadId) {
            return SessionService.invoke({'/mbthread/lock-thread':{
                threadId:threadId // long
            }});
        };
        service.moveThread = function(categoryId,threadId) {
            return SessionService.invoke({'/mbthread/move-thread':{
                categoryId:categoryId // long
                ,threadId:threadId // long
            }});
        };
        service.moveThreadFromTrash = function(categoryId,threadId) {
            return SessionService.invoke({'/mbthread/move-thread-from-trash':{
                categoryId:categoryId // long
                ,threadId:threadId // long
            }});
        };
        service.moveThreadToTrash = function(threadId) {
            return SessionService.invoke({'/mbthread/move-thread-to-trash':{
                threadId:threadId // long
            }});
        };
        service.restoreThreadFromTrash = function(threadId) {
            return SessionService.invoke({'/mbthread/restore-thread-from-trash':{
                threadId:threadId // long
            }});
        };
        service.search = function(groupId,creatorUserId,status,start,end) {
            return SessionService.invoke({'/mbthread/search':{
                groupId:groupId // long
                ,creatorUserId:creatorUserId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.search_1 = function(groupId,creatorUserId,startDate,endDate,status,start,end) {
            return SessionService.invoke({'/mbthread/search':{
                groupId:groupId // long
                ,creatorUserId:creatorUserId // long
                ,startDate:startDate // long
                ,endDate:endDate // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.splitThread = function(messageId,subject,serviceContext) {
            return SessionService.invoke({'/mbthread/split-thread':{
                messageId:messageId // long
                ,subject:subject // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.unlockThread = function(threadId) {
            return SessionService.invoke({'/mbthread/unlock-thread':{
                threadId:threadId // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdractionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addAction = function(ruleGroupInstanceId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke({'/mdraction/add-action':{
                ruleGroupInstanceId:ruleGroupInstanceId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,typeSettings:typeSettings // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addAction_1 = function(ruleGroupInstanceId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return SessionService.invoke({'/mdraction/add-action':{
                ruleGroupInstanceId:ruleGroupInstanceId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,typeSettingsProperties:typeSettingsProperties // object<com.liferay.portal.kernel.util.UnicodeProperties>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteAction = function(actionId) {
            return SessionService.invoke({'/mdraction/delete-action':{
                actionId:actionId // long
            }});
        };
        service.fetchAction = function(actionId) {
            return SessionService.invoke({'/mdraction/fetch-action':{
                actionId:actionId // long
            }});
        };
        service.getAction = function(actionId) {
            return SessionService.invoke({'/mdraction/get-action':{
                actionId:actionId // long
            }});
        };
        service.updateAction = function(actionId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke({'/mdraction/update-action':{
                actionId:actionId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,typeSettings:typeSettings // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateAction_1 = function(actionId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return SessionService.invoke({'/mdraction/update-action':{
                actionId:actionId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,typeSettingsProperties:typeSettingsProperties // object<com.liferay.portal.kernel.util.UnicodeProperties>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdrruleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRule = function(ruleGroupId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke({'/mdrrule/add-rule':{
                ruleGroupId:ruleGroupId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,typeSettings:typeSettings // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteRule = function(ruleId) {
            return SessionService.invoke({'/mdrrule/delete-rule':{
                ruleId:ruleId // long
            }});
        };
        service.fetchRule = function(ruleId) {
            return SessionService.invoke({'/mdrrule/fetch-rule':{
                ruleId:ruleId // long
            }});
        };
        service.getRule = function(ruleId) {
            return SessionService.invoke({'/mdrrule/get-rule':{
                ruleId:ruleId // long
            }});
        };
        service.updateRule = function(ruleId,nameMap,descriptionMap,type,typeSettings,serviceContext) {
            return SessionService.invoke({'/mdrrule/update-rule':{
                ruleId:ruleId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,typeSettings:typeSettings // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateRule_1 = function(ruleId,nameMap,descriptionMap,type,typeSettingsProperties,serviceContext) {
            return SessionService.invoke({'/mdrrule/update-rule':{
                ruleId:ruleId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // string
                ,typeSettingsProperties:typeSettingsProperties // object<com.liferay.portal.kernel.util.UnicodeProperties>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdrrulegroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRuleGroup = function(groupId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke({'/mdrrulegroup/add-rule-group':{
                groupId:groupId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyRuleGroup = function(ruleGroupId,groupId,serviceContext) {
            return SessionService.invoke({'/mdrrulegroup/copy-rule-group':{
                ruleGroupId:ruleGroupId // long
                ,groupId:groupId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteRuleGroup = function(ruleGroupId) {
            return SessionService.invoke({'/mdrrulegroup/delete-rule-group':{
                ruleGroupId:ruleGroupId // long
            }});
        };
        service.fetchRuleGroup = function(ruleGroupId) {
            return SessionService.invoke({'/mdrrulegroup/fetch-rule-group':{
                ruleGroupId:ruleGroupId // long
            }});
        };
        service.getRuleGroup = function(ruleGroupId) {
            return SessionService.invoke({'/mdrrulegroup/get-rule-group':{
                ruleGroupId:ruleGroupId // long
            }});
        };
        service.updateRuleGroup = function(ruleGroupId,nameMap,descriptionMap,serviceContext) {
            return SessionService.invoke({'/mdrrulegroup/update-rule-group':{
                ruleGroupId:ruleGroupId // long
                ,nameMap:nameMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MdrrulegroupinstanceService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRuleGroupInstance = function(groupId,className,classPK,ruleGroupId,serviceContext) {
            return SessionService.invoke({'/mdrrulegroupinstance/add-rule-group-instance':{
                groupId:groupId // long
                ,className:className // string
                ,classPK:classPK // long
                ,ruleGroupId:ruleGroupId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addRuleGroupInstance_1 = function(groupId,className,classPK,ruleGroupId,priority,serviceContext) {
            return SessionService.invoke({'/mdrrulegroupinstance/add-rule-group-instance':{
                groupId:groupId // long
                ,className:className // string
                ,classPK:classPK // long
                ,ruleGroupId:ruleGroupId // long
                ,priority:priority // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteRuleGroupInstance = function(ruleGroupInstanceId) {
            return SessionService.invoke({'/mdrrulegroupinstance/delete-rule-group-instance':{
                ruleGroupInstanceId:ruleGroupInstanceId // long
            }});
        };
        service.getRuleGroupInstances = function(className,classPK,start,end,orderByComparator) {
            return SessionService.invoke({'/mdrrulegroupinstance/get-rule-group-instances':{
                className:className // string
                ,classPK:classPK // long
                ,start:start // int
                ,end:end // int
                ,orderByComparator:orderByComparator // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getRuleGroupInstancesCount = function(className,classPK) {
            return SessionService.invoke({'/mdrrulegroupinstance/get-rule-group-instances-count':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.updateRuleGroupInstance = function(ruleGroupInstanceId,priority) {
            return SessionService.invoke({'/mdrrulegroupinstance/update-rule-group-instance':{
                ruleGroupInstanceId:ruleGroupInstanceId // long
                ,priority:priority // int
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('MembershiprequestService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addMembershipRequest = function(groupId,comments,serviceContext) {
            return SessionService.invoke({'/membershiprequest/add-membership-request':{
                groupId:groupId // long
                ,comments:comments // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteMembershipRequests = function(groupId,statusId) {
            return SessionService.invoke({'/membershiprequest/delete-membership-requests':{
                groupId:groupId // long
                ,statusId:statusId // int
            }});
        };
        service.getMembershipRequest = function(membershipRequestId) {
            return SessionService.invoke({'/membershiprequest/get-membership-request':{
                membershipRequestId:membershipRequestId // long
            }});
        };
        service.updateStatus = function(membershipRequestId,reviewComments,statusId,serviceContext) {
            return SessionService.invoke({'/membershiprequest/update-status':{
                membershipRequestId:membershipRequestId // long
                ,reviewComments:reviewComments // string
                ,statusId:statusId // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('OrganizationService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke({'/organization/add-group-organizations':{
                groupId:groupId // long
                ,organizationIds:organizationIds // long[]
            }});
        };
        service.addOrganization = function(parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke({'/organization/add-organization':{
                parentOrganizationId:parentOrganizationId // long
                ,name:name // string
                ,type:type // string
                ,recursable:recursable // boolean
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,statusId:statusId // int
                ,comments:comments // string
                ,site:site // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addOrganization_1 = function(parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke({'/organization/add-organization':{
                parentOrganizationId:parentOrganizationId // long
                ,name:name // string
                ,type:type // string
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,statusId:statusId // int
                ,comments:comments // string
                ,site:site // boolean
                ,addresses:addresses // list<object<com.liferay.portal.model.Address>>
                ,emailAddresses:emailAddresses // list<object<com.liferay.portal.model.EmailAddress>>
                ,orgLabors:orgLabors // list<object<com.liferay.portal.model.OrgLabor>>
                ,phones:phones // list<object<com.liferay.portal.model.Phone>>
                ,websites:websites // list<object<com.liferay.portal.model.Website>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addOrganization_2 = function(parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke({'/organization/add-organization':{
                parentOrganizationId:parentOrganizationId // long
                ,name:name // string
                ,type:type // string
                ,recursable:recursable // boolean
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,statusId:statusId // int
                ,comments:comments // string
                ,site:site // boolean
                ,addresses:addresses // list<object<com.liferay.portal.model.Address>>
                ,emailAddresses:emailAddresses // list<object<com.liferay.portal.model.EmailAddress>>
                ,orgLabors:orgLabors // list<object<com.liferay.portal.model.OrgLabor>>
                ,phones:phones // list<object<com.liferay.portal.model.Phone>>
                ,websites:websites // list<object<com.liferay.portal.model.Website>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addOrganization_3 = function(parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke({'/organization/add-organization':{
                parentOrganizationId:parentOrganizationId // long
                ,name:name // string
                ,type:type // string
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,statusId:statusId // int
                ,comments:comments // string
                ,site:site // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addPasswordPolicyOrganizations = function(passwordPolicyId,organizationIds) {
            return SessionService.invoke({'/organization/add-password-policy-organizations':{
                passwordPolicyId:passwordPolicyId // long
                ,organizationIds:organizationIds // long[]
            }});
        };
        service.deleteLogo = function(organizationId) {
            return SessionService.invoke({'/organization/delete-logo':{
                organizationId:organizationId // long
            }});
        };
        service.deleteOrganization = function(organizationId) {
            return SessionService.invoke({'/organization/delete-organization':{
                organizationId:organizationId // long
            }});
        };
        service.getManageableOrganizations = function(actionId,max) {
            return SessionService.invoke({'/organization/get-manageable-organizations':{
                actionId:actionId // string
                ,max:max // int
            }});
        };
        service.getOrganization = function(organizationId) {
            return SessionService.invoke({'/organization/get-organization':{
                organizationId:organizationId // long
            }});
        };
        service.getOrganizationId = function(companyId,name) {
            return SessionService.invoke({'/organization/get-organization-id':{
                companyId:companyId // long
                ,name:name // string
            }});
        };
        service.getOrganizations = function(companyId,parentOrganizationId) {
            return SessionService.invoke({'/organization/get-organizations':{
                companyId:companyId // long
                ,parentOrganizationId:parentOrganizationId // long
            }});
        };
        service.getOrganizations_1 = function(companyId,parentOrganizationId,start,end) {
            return SessionService.invoke({'/organization/get-organizations':{
                companyId:companyId // long
                ,parentOrganizationId:parentOrganizationId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getOrganizationsCount = function(companyId,parentOrganizationId) {
            return SessionService.invoke({'/organization/get-organizations-count':{
                companyId:companyId // long
                ,parentOrganizationId:parentOrganizationId // long
            }});
        };
        service.getUserOrganizations = function(userId) {
            return SessionService.invoke({'/organization/get-user-organizations':{
                userId:userId // long
            }});
        };
        service.setGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke({'/organization/set-group-organizations':{
                groupId:groupId // long
                ,organizationIds:organizationIds // long[]
            }});
        };
        service.unsetGroupOrganizations = function(groupId,organizationIds) {
            return SessionService.invoke({'/organization/unset-group-organizations':{
                groupId:groupId // long
                ,organizationIds:organizationIds // long[]
            }});
        };
        service.unsetPasswordPolicyOrganizations = function(passwordPolicyId,organizationIds) {
            return SessionService.invoke({'/organization/unset-password-policy-organizations':{
                passwordPolicyId:passwordPolicyId // long
                ,organizationIds:organizationIds // long[]
            }});
        };
        service.updateOrganization = function(organizationId,parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke({'/organization/update-organization':{
                organizationId:organizationId // long
                ,parentOrganizationId:parentOrganizationId // long
                ,name:name // string
                ,type:type // string
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,statusId:statusId // int
                ,comments:comments // string
                ,site:site // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateOrganization_1 = function(organizationId,parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,serviceContext) {
            return SessionService.invoke({'/organization/update-organization':{
                organizationId:organizationId // long
                ,parentOrganizationId:parentOrganizationId // long
                ,name:name // string
                ,type:type // string
                ,recursable:recursable // boolean
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,statusId:statusId // int
                ,comments:comments // string
                ,site:site // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateOrganization_2 = function(organizationId,parentOrganizationId,name,type,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke({'/organization/update-organization':{
                organizationId:organizationId // long
                ,parentOrganizationId:parentOrganizationId // long
                ,name:name // string
                ,type:type // string
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,statusId:statusId // int
                ,comments:comments // string
                ,site:site // boolean
                ,addresses:addresses // list<object<com.liferay.portal.model.Address>>
                ,emailAddresses:emailAddresses // list<object<com.liferay.portal.model.EmailAddress>>
                ,orgLabors:orgLabors // list<object<com.liferay.portal.model.OrgLabor>>
                ,phones:phones // list<object<com.liferay.portal.model.Phone>>
                ,websites:websites // list<object<com.liferay.portal.model.Website>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateOrganization_3 = function(organizationId,parentOrganizationId,name,type,recursable,regionId,countryId,statusId,comments,site,addresses,emailAddresses,orgLabors,phones,websites,serviceContext) {
            return SessionService.invoke({'/organization/update-organization':{
                organizationId:organizationId // long
                ,parentOrganizationId:parentOrganizationId // long
                ,name:name // string
                ,type:type // string
                ,recursable:recursable // boolean
                ,regionId:regionId // long
                ,countryId:countryId // long
                ,statusId:statusId // int
                ,comments:comments // string
                ,site:site // boolean
                ,addresses:addresses // list<object<com.liferay.portal.model.Address>>
                ,emailAddresses:emailAddresses // list<object<com.liferay.portal.model.EmailAddress>>
                ,orgLabors:orgLabors // list<object<com.liferay.portal.model.OrgLabor>>
                ,phones:phones // list<object<com.liferay.portal.model.Phone>>
                ,websites:websites // list<object<com.liferay.portal.model.Website>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('OrglaborService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addOrgLabor = function(organizationId,typeId,sunOpen,sunClose,monOpen,monClose,tueOpen,tueClose,wedOpen,wedClose,thuOpen,thuClose,friOpen,friClose,satOpen,satClose) {
            return SessionService.invoke({'/orglabor/add-org-labor':{
                organizationId:organizationId // long
                ,typeId:typeId // int
                ,sunOpen:sunOpen // int
                ,sunClose:sunClose // int
                ,monOpen:monOpen // int
                ,monClose:monClose // int
                ,tueOpen:tueOpen // int
                ,tueClose:tueClose // int
                ,wedOpen:wedOpen // int
                ,wedClose:wedClose // int
                ,thuOpen:thuOpen // int
                ,thuClose:thuClose // int
                ,friOpen:friOpen // int
                ,friClose:friClose // int
                ,satOpen:satOpen // int
                ,satClose:satClose // int
            }});
        };
        service.deleteOrgLabor = function(orgLaborId) {
            return SessionService.invoke({'/orglabor/delete-org-labor':{
                orgLaborId:orgLaborId // long
            }});
        };
        service.getOrgLabor = function(orgLaborId) {
            return SessionService.invoke({'/orglabor/get-org-labor':{
                orgLaborId:orgLaborId // long
            }});
        };
        service.getOrgLabors = function(organizationId) {
            return SessionService.invoke({'/orglabor/get-org-labors':{
                organizationId:organizationId // long
            }});
        };
        service.updateOrgLabor = function(orgLaborId,typeId,sunOpen,sunClose,monOpen,monClose,tueOpen,tueClose,wedOpen,wedClose,thuOpen,thuClose,friOpen,friClose,satOpen,satClose) {
            return SessionService.invoke({'/orglabor/update-org-labor':{
                orgLaborId:orgLaborId // long
                ,typeId:typeId // int
                ,sunOpen:sunOpen // int
                ,sunClose:sunClose // int
                ,monOpen:monOpen // int
                ,monClose:monClose // int
                ,tueOpen:tueOpen // int
                ,tueClose:tueClose // int
                ,wedOpen:wedOpen // int
                ,wedClose:wedClose // int
                ,thuOpen:thuOpen // int
                ,thuClose:thuClose // int
                ,friOpen:friOpen // int
                ,friClose:friClose // int
                ,satOpen:satOpen // int
                ,satClose:satClose // int
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PasswordpolicyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addPasswordPolicy = function(name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge) {
            return SessionService.invoke({'/passwordpolicy/add-password-policy':{
                name:name // string
                ,description:description // string
                ,changeable:changeable // boolean
                ,changeRequired:changeRequired // boolean
                ,minAge:minAge // long
                ,checkSyntax:checkSyntax // boolean
                ,allowDictionaryWords:allowDictionaryWords // boolean
                ,minAlphanumeric:minAlphanumeric // int
                ,minLength:minLength // int
                ,minLowerCase:minLowerCase // int
                ,minNumbers:minNumbers // int
                ,minSymbols:minSymbols // int
                ,minUpperCase:minUpperCase // int
                ,history:history // boolean
                ,historyCount:historyCount // int
                ,expireable:expireable // boolean
                ,maxAge:maxAge // long
                ,warningTime:warningTime // long
                ,graceLimit:graceLimit // int
                ,lockout:lockout // boolean
                ,maxFailure:maxFailure // int
                ,lockoutDuration:lockoutDuration // long
                ,resetFailureCount:resetFailureCount // long
                ,resetTicketMaxAge:resetTicketMaxAge // long
            }});
        };
        service.addPasswordPolicy_1 = function(name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,regex,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge,serviceContext) {
            return SessionService.invoke({'/passwordpolicy/add-password-policy':{
                name:name // string
                ,description:description // string
                ,changeable:changeable // boolean
                ,changeRequired:changeRequired // boolean
                ,minAge:minAge // long
                ,checkSyntax:checkSyntax // boolean
                ,allowDictionaryWords:allowDictionaryWords // boolean
                ,minAlphanumeric:minAlphanumeric // int
                ,minLength:minLength // int
                ,minLowerCase:minLowerCase // int
                ,minNumbers:minNumbers // int
                ,minSymbols:minSymbols // int
                ,minUpperCase:minUpperCase // int
                ,regex:regex // string
                ,history:history // boolean
                ,historyCount:historyCount // int
                ,expireable:expireable // boolean
                ,maxAge:maxAge // long
                ,warningTime:warningTime // long
                ,graceLimit:graceLimit // int
                ,lockout:lockout // boolean
                ,maxFailure:maxFailure // int
                ,lockoutDuration:lockoutDuration // long
                ,resetFailureCount:resetFailureCount // long
                ,resetTicketMaxAge:resetTicketMaxAge // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deletePasswordPolicy = function(passwordPolicyId) {
            return SessionService.invoke({'/passwordpolicy/delete-password-policy':{
                passwordPolicyId:passwordPolicyId // long
            }});
        };
        service.updatePasswordPolicy = function(passwordPolicyId,name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge) {
            return SessionService.invoke({'/passwordpolicy/update-password-policy':{
                passwordPolicyId:passwordPolicyId // long
                ,name:name // string
                ,description:description // string
                ,changeable:changeable // boolean
                ,changeRequired:changeRequired // boolean
                ,minAge:minAge // long
                ,checkSyntax:checkSyntax // boolean
                ,allowDictionaryWords:allowDictionaryWords // boolean
                ,minAlphanumeric:minAlphanumeric // int
                ,minLength:minLength // int
                ,minLowerCase:minLowerCase // int
                ,minNumbers:minNumbers // int
                ,minSymbols:minSymbols // int
                ,minUpperCase:minUpperCase // int
                ,history:history // boolean
                ,historyCount:historyCount // int
                ,expireable:expireable // boolean
                ,maxAge:maxAge // long
                ,warningTime:warningTime // long
                ,graceLimit:graceLimit // int
                ,lockout:lockout // boolean
                ,maxFailure:maxFailure // int
                ,lockoutDuration:lockoutDuration // long
                ,resetFailureCount:resetFailureCount // long
                ,resetTicketMaxAge:resetTicketMaxAge // long
            }});
        };
        service.updatePasswordPolicy_1 = function(passwordPolicyId,name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,regex,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge,serviceContext) {
            return SessionService.invoke({'/passwordpolicy/update-password-policy':{
                passwordPolicyId:passwordPolicyId // long
                ,name:name // string
                ,description:description // string
                ,changeable:changeable // boolean
                ,changeRequired:changeRequired // boolean
                ,minAge:minAge // long
                ,checkSyntax:checkSyntax // boolean
                ,allowDictionaryWords:allowDictionaryWords // boolean
                ,minAlphanumeric:minAlphanumeric // int
                ,minLength:minLength // int
                ,minLowerCase:minLowerCase // int
                ,minNumbers:minNumbers // int
                ,minSymbols:minSymbols // int
                ,minUpperCase:minUpperCase // int
                ,regex:regex // string
                ,history:history // boolean
                ,historyCount:historyCount // int
                ,expireable:expireable // boolean
                ,maxAge:maxAge // long
                ,warningTime:warningTime // long
                ,graceLimit:graceLimit // int
                ,lockout:lockout // boolean
                ,maxFailure:maxFailure // int
                ,lockoutDuration:lockoutDuration // long
                ,resetFailureCount:resetFailureCount // long
                ,resetTicketMaxAge:resetTicketMaxAge // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PermissionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.checkPermission = function(groupId,name,primKey) {
            return SessionService.invoke({'/permission/check-permission':{
                groupId:groupId // long
                ,name:name // string
                ,primKey:primKey // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PhoneService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addPhone = function(className,classPK,number,extension,typeId,primary) {
            return SessionService.invoke({'/phone/add-phone':{
                className:className // string
                ,classPK:classPK // long
                ,number:number // string
                ,extension:extension // string
                ,typeId:typeId // int
                ,primary:primary // boolean
            }});
        };
        service.addPhone_1 = function(className,classPK,number,extension,typeId,primary,serviceContext) {
            return SessionService.invoke({'/phone/add-phone':{
                className:className // string
                ,classPK:classPK // long
                ,number:number // string
                ,extension:extension // string
                ,typeId:typeId // int
                ,primary:primary // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deletePhone = function(phoneId) {
            return SessionService.invoke({'/phone/delete-phone':{
                phoneId:phoneId // long
            }});
        };
        service.getPhone = function(phoneId) {
            return SessionService.invoke({'/phone/get-phone':{
                phoneId:phoneId // long
            }});
        };
        service.getPhones = function(className,classPK) {
            return SessionService.invoke({'/phone/get-phones':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.updatePhone = function(phoneId,number,extension,typeId,primary) {
            return SessionService.invoke({'/phone/update-phone':{
                phoneId:phoneId // long
                ,number:number // string
                ,extension:extension // string
                ,typeId:typeId // int
                ,primary:primary // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PluginsettingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.updatePluginSetting = function(companyId,pluginId,pluginType,roles,active) {
            return SessionService.invoke({'/pluginsetting/update-plugin-setting':{
                companyId:companyId // long
                ,pluginId:pluginId // string
                ,pluginType:pluginType // string
                ,roles:roles // string
                ,active:active // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PollsquestionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addQuestion = function(titleMap,descriptionMap,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,choices,serviceContext) {
            return SessionService.invoke({'/pollsquestion/add-question':{
                titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,expirationDateMonth:expirationDateMonth // int
                ,expirationDateDay:expirationDateDay // int
                ,expirationDateYear:expirationDateYear // int
                ,expirationDateHour:expirationDateHour // int
                ,expirationDateMinute:expirationDateMinute // int
                ,neverExpire:neverExpire // boolean
                ,choices:choices // list<object<com.liferay.portlet.polls.model.PollsChoice>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteQuestion = function(questionId) {
            return SessionService.invoke({'/pollsquestion/delete-question':{
                questionId:questionId // long
            }});
        };
        service.getQuestion = function(questionId) {
            return SessionService.invoke({'/pollsquestion/get-question':{
                questionId:questionId // long
            }});
        };
        service.updateQuestion = function(questionId,titleMap,descriptionMap,expirationDateMonth,expirationDateDay,expirationDateYear,expirationDateHour,expirationDateMinute,neverExpire,choices,serviceContext) {
            return SessionService.invoke({'/pollsquestion/update-question':{
                questionId:questionId // long
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,expirationDateMonth:expirationDateMonth // int
                ,expirationDateDay:expirationDateDay // int
                ,expirationDateYear:expirationDateYear // int
                ,expirationDateHour:expirationDateHour // int
                ,expirationDateMinute:expirationDateMinute // int
                ,neverExpire:neverExpire // boolean
                ,choices:choices // list<object<com.liferay.portlet.polls.model.PollsChoice>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PollsvoteService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addVote = function(questionId,choiceId,serviceContext) {
            return SessionService.invoke({'/pollsvote/add-vote':{
                questionId:questionId // long
                ,choiceId:choiceId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PortalService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getAutoDeployDirectory = function() {
            return SessionService.invoke({'/portal/get-auto-deploy-directory':{
                
            }});
        };
        service.getBuildNumber = function() {
            return SessionService.invoke({'/portal/get-build-number':{
                
            }});
        };
        service.testAddClassNameAndTestTransactionPortletBar_PortalRollback = function(transactionPortletBarText) {
            return SessionService.invoke({'/portal/test-add-class-name-and-test-transaction-portlet-bar_-portal-rollback':{
                transactionPortletBarText:transactionPortletBarText // string
            }});
        };
        service.testAddClassNameAndTestTransactionPortletBar_PortletRollback = function(transactionPortletBarText) {
            return SessionService.invoke({'/portal/test-add-class-name-and-test-transaction-portlet-bar_-portlet-rollback':{
                transactionPortletBarText:transactionPortletBarText // string
            }});
        };
        service.testAddClassNameAndTestTransactionPortletBar_Success = function(transactionPortletBarText) {
            return SessionService.invoke({'/portal/test-add-class-name-and-test-transaction-portlet-bar_-success':{
                transactionPortletBarText:transactionPortletBarText // string
            }});
        };
        service.testAddClassName_Rollback = function(classNameValue) {
            return SessionService.invoke({'/portal/test-add-class-name_-rollback':{
                classNameValue:classNameValue // string
            }});
        };
        service.testAddClassName_Success = function(classNameValue) {
            return SessionService.invoke({'/portal/test-add-class-name_-success':{
                classNameValue:classNameValue // string
            }});
        };
        service.testAutoSyncHibernateSessionStateOnTxCreation = function() {
            return SessionService.invoke({'/portal/test-auto-sync-hibernate-session-state-on-tx-creation':{
                
            }});
        };
        service.testDeleteClassName = function() {
            return SessionService.invoke({'/portal/test-delete-class-name':{
                
            }});
        };
        service.testGetBuildNumber = function() {
            return SessionService.invoke({'/portal/test-get-build-number':{
                
            }});
        };
        service.testGetUserId = function() {
            return SessionService.invoke({'/portal/test-get-user-id':{
                
            }});
        };
        service.testHasClassName = function() {
            return SessionService.invoke({'/portal/test-has-class-name':{
                
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PortletService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getWarPortlets = function() {
            return SessionService.invoke({'/portlet/get-war-portlets':{
                
            }});
        };
        service.updatePortlet = function(companyId,portletId,roles,active) {
            return SessionService.invoke({'/portlet/update-portlet':{
                companyId:companyId // long
                ,portletId:portletId // string
                ,roles:roles // string
                ,active:active // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PortletpreferencesService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteArchivedPreferences = function(portletItemId) {
            return SessionService.invoke({'/portletpreferences/delete-archived-preferences':{
                portletItemId:portletItemId // long
            }});
        };
        service.restoreArchivedPreferences = function(groupId,layout,portletId,portletItem,preferences) {
            return SessionService.invoke({'/portletpreferences/restore-archived-preferences':{
                groupId:groupId // long
                ,layout:layout // object<com.liferay.portal.model.Layout>
                ,portletId:portletId // string
                ,portletItem:portletItem // object<com.liferay.portal.model.PortletItem>
                ,preferences:preferences // object<javax.portlet.PortletPreferences>
            }});
        };
        service.restoreArchivedPreferences_1 = function(groupId,layout,portletId,portletItemId,preferences) {
            return SessionService.invoke({'/portletpreferences/restore-archived-preferences':{
                groupId:groupId // long
                ,layout:layout // object<com.liferay.portal.model.Layout>
                ,portletId:portletId // string
                ,portletItemId:portletItemId // long
                ,preferences:preferences // object<javax.portlet.PortletPreferences>
            }});
        };
        service.restoreArchivedPreferences_2 = function(groupId,name,layout,portletId,preferences) {
            return SessionService.invoke({'/portletpreferences/restore-archived-preferences':{
                groupId:groupId // long
                ,name:name // string
                ,layout:layout // object<com.liferay.portal.model.Layout>
                ,portletId:portletId // string
                ,preferences:preferences // object<javax.portlet.PortletPreferences>
            }});
        };
        service.updateArchivePreferences = function(userId,groupId,name,portletId,preferences) {
            return SessionService.invoke({'/portletpreferences/update-archive-preferences':{
                userId:userId // long
                ,groupId:groupId // long
                ,name:name // string
                ,portletId:portletId // string
                ,preferences:preferences // object<javax.portlet.PortletPreferences>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RatingsentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteEntry = function(className,classPK) {
            return SessionService.invoke({'/ratingsentry/delete-entry':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.updateEntry = function(className,classPK,score) {
            return SessionService.invoke({'/ratingsentry/update-entry':{
                className:className // string
                ,classPK:classPK // long
                ,score:score // double
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RegionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRegion = function(countryId,regionCode,name,active) {
            return SessionService.invoke({'/region/add-region':{
                countryId:countryId // long
                ,regionCode:regionCode // string
                ,name:name // string
                ,active:active // boolean
            }});
        };
        service.fetchRegion = function(countryId,regionCode) {
            return SessionService.invoke({'/region/fetch-region':{
                countryId:countryId // long
                ,regionCode:regionCode // string
            }});
        };
        service.getRegion = function(regionId) {
            return SessionService.invoke({'/region/get-region':{
                regionId:regionId // long
            }});
        };
        service.getRegion_1 = function(countryId,regionCode) {
            return SessionService.invoke({'/region/get-region':{
                countryId:countryId // long
                ,regionCode:regionCode // string
            }});
        };
        service.getRegions = function() {
            return SessionService.invoke({'/region/get-regions':{
                
            }});
        };
        service.getRegions_1 = function(active) {
            return SessionService.invoke({'/region/get-regions':{
                active:active // boolean
            }});
        };
        service.getRegions_2 = function(countryId) {
            return SessionService.invoke({'/region/get-regions':{
                countryId:countryId // long
            }});
        };
        service.getRegions_3 = function(countryId,active) {
            return SessionService.invoke({'/region/get-regions':{
                countryId:countryId // long
                ,active:active // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RepositoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRepository = function(groupId,classNameId,parentFolderId,name,description,portletId,typeSettingsProperties,serviceContext) {
            return SessionService.invoke({'/repository/add-repository':{
                groupId:groupId // long
                ,classNameId:classNameId // long
                ,parentFolderId:parentFolderId // long
                ,name:name // string
                ,description:description // string
                ,portletId:portletId // string
                ,typeSettingsProperties:typeSettingsProperties // object<com.liferay.portal.kernel.util.UnicodeProperties>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.checkRepository = function(repositoryId) {
            return SessionService.invoke({'/repository/check-repository':{
                repositoryId:repositoryId // long
            }});
        };
        service.deleteRepository = function(repositoryId) {
            return SessionService.invoke({'/repository/delete-repository':{
                repositoryId:repositoryId // long
            }});
        };
        service.getLocalRepositoryImpl = function(repositoryId) {
            return SessionService.invoke({'/repository/get-local-repository-impl':{
                repositoryId:repositoryId // long
            }});
        };
        service.getLocalRepositoryImpl_1 = function(folderId,fileEntryId,fileVersionId) {
            return SessionService.invoke({'/repository/get-local-repository-impl':{
                folderId:folderId // long
                ,fileEntryId:fileEntryId // long
                ,fileVersionId:fileVersionId // long
            }});
        };
        service.getRepository = function(repositoryId) {
            return SessionService.invoke({'/repository/get-repository':{
                repositoryId:repositoryId // long
            }});
        };
        service.getRepositoryImpl = function(repositoryId) {
            return SessionService.invoke({'/repository/get-repository-impl':{
                repositoryId:repositoryId // long
            }});
        };
        service.getRepositoryImpl_1 = function(folderId,fileEntryId,fileVersionId) {
            return SessionService.invoke({'/repository/get-repository-impl':{
                folderId:folderId // long
                ,fileEntryId:fileEntryId // long
                ,fileVersionId:fileVersionId // long
            }});
        };
        service.getSupportedConfigurations = function(classNameId) {
            return SessionService.invoke({'/repository/get-supported-configurations':{
                classNameId:classNameId // long
            }});
        };
        service.getSupportedParameters = function(classNameId,configuration) {
            return SessionService.invoke({'/repository/get-supported-parameters':{
                classNameId:classNameId // long
                ,configuration:configuration // string
            }});
        };
        service.getTypeSettingsProperties = function(repositoryId) {
            return SessionService.invoke({'/repository/get-type-settings-properties':{
                repositoryId:repositoryId // long
            }});
        };
        service.updateRepository = function(repositoryId,name,description) {
            return SessionService.invoke({'/repository/update-repository':{
                repositoryId:repositoryId // long
                ,name:name // string
                ,description:description // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ResourceblockService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCompanyScopePermission = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/add-company-scope-permission':{
                scopeGroupId:scopeGroupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.addGroupScopePermission = function(scopeGroupId,companyId,groupId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/add-group-scope-permission':{
                scopeGroupId:scopeGroupId // long
                ,companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.addIndividualScopePermission = function(companyId,groupId,name,primKey,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/add-individual-scope-permission':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,primKey:primKey // long
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.removeAllGroupScopePermissions = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/remove-all-group-scope-permissions':{
                scopeGroupId:scopeGroupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.removeCompanyScopePermission = function(scopeGroupId,companyId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/remove-company-scope-permission':{
                scopeGroupId:scopeGroupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.removeGroupScopePermission = function(scopeGroupId,companyId,groupId,name,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/remove-group-scope-permission':{
                scopeGroupId:scopeGroupId // long
                ,companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.removeIndividualScopePermission = function(companyId,groupId,name,primKey,roleId,actionId) {
            return SessionService.invoke({'/resourceblock/remove-individual-scope-permission':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,primKey:primKey // long
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.setCompanyScopePermissions = function(scopeGroupId,companyId,name,roleId,actionIds) {
            return SessionService.invoke({'/resourceblock/set-company-scope-permissions':{
                scopeGroupId:scopeGroupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,roleId:roleId // long
                ,actionIds:actionIds // list<string>
            }});
        };
        service.setGroupScopePermissions = function(scopeGroupId,companyId,groupId,name,roleId,actionIds) {
            return SessionService.invoke({'/resourceblock/set-group-scope-permissions':{
                scopeGroupId:scopeGroupId // long
                ,companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,roleId:roleId // long
                ,actionIds:actionIds // list<string>
            }});
        };
        service.setIndividualScopePermissions = function(companyId,groupId,name,primKey,roleIdsToActionIds) {
            return SessionService.invoke({'/resourceblock/set-individual-scope-permissions':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,primKey:primKey // long
                ,roleIdsToActionIds:roleIdsToActionIds // map<object<java.lang.Long>,string[]>
            }});
        };
        service.setIndividualScopePermissions_1 = function(companyId,groupId,name,primKey,roleId,actionIds) {
            return SessionService.invoke({'/resourceblock/set-individual-scope-permissions':{
                companyId:companyId // long
                ,groupId:groupId // long
                ,name:name // string
                ,primKey:primKey // long
                ,roleId:roleId // long
                ,actionIds:actionIds // list<string>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ResourcepermissionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addResourcePermission = function(groupId,companyId,name,scope,primKey,roleId,actionId) {
            return SessionService.invoke({'/resourcepermission/add-resource-permission':{
                groupId:groupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,scope:scope // int
                ,primKey:primKey // string
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.removeResourcePermission = function(groupId,companyId,name,scope,primKey,roleId,actionId) {
            return SessionService.invoke({'/resourcepermission/remove-resource-permission':{
                groupId:groupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,scope:scope // int
                ,primKey:primKey // string
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.removeResourcePermissions = function(groupId,companyId,name,scope,roleId,actionId) {
            return SessionService.invoke({'/resourcepermission/remove-resource-permissions':{
                groupId:groupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,scope:scope // int
                ,roleId:roleId // long
                ,actionId:actionId // string
            }});
        };
        service.setIndividualResourcePermissions = function(groupId,companyId,name,primKey,roleIdsToActionIds) {
            return SessionService.invoke({'/resourcepermission/set-individual-resource-permissions':{
                groupId:groupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,primKey:primKey // string
                ,roleIdsToActionIds:roleIdsToActionIds // map<object<java.lang.Long>,string[]>
            }});
        };
        service.setIndividualResourcePermissions_1 = function(groupId,companyId,name,primKey,roleId,actionIds) {
            return SessionService.invoke({'/resourcepermission/set-individual-resource-permissions':{
                groupId:groupId // long
                ,companyId:companyId // long
                ,name:name // string
                ,primKey:primKey // string
                ,roleId:roleId // long
                ,actionIds:actionIds // string[]
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('RoleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addRole = function(name,titleMap,descriptionMap,type) {
            return SessionService.invoke({'/role/add-role':{
                name:name // string
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // int
            }});
        };
        service.addRole_1 = function(className,classPK,name,titleMap,descriptionMap,type,subtype,serviceContext) {
            return SessionService.invoke({'/role/add-role':{
                className:className // string
                ,classPK:classPK // long
                ,name:name // string
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,type:type // int
                ,subtype:subtype // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addUserRoles = function(userId,roleIds) {
            return SessionService.invoke({'/role/add-user-roles':{
                userId:userId // long
                ,roleIds:roleIds // long[]
            }});
        };
        service.deleteRole = function(roleId) {
            return SessionService.invoke({'/role/delete-role':{
                roleId:roleId // long
            }});
        };
        service.getGroupRoles = function(groupId) {
            return SessionService.invoke({'/role/get-group-roles':{
                groupId:groupId // long
            }});
        };
        service.getRole = function(roleId) {
            return SessionService.invoke({'/role/get-role':{
                roleId:roleId // long
            }});
        };
        service.getRole_1 = function(companyId,name) {
            return SessionService.invoke({'/role/get-role':{
                companyId:companyId // long
                ,name:name // string
            }});
        };
        service.getUserGroupGroupRoles = function(userId,groupId) {
            return SessionService.invoke({'/role/get-user-group-group-roles':{
                userId:userId // long
                ,groupId:groupId // long
            }});
        };
        service.getUserGroupRoles = function(userId,groupId) {
            return SessionService.invoke({'/role/get-user-group-roles':{
                userId:userId // long
                ,groupId:groupId // long
            }});
        };
        service.getUserRelatedRoles = function(userId,groups) {
            return SessionService.invoke({'/role/get-user-related-roles':{
                userId:userId // long
                ,groups:groups // list<object<com.liferay.portal.model.Group>>
            }});
        };
        service.getUserRoles = function(userId) {
            return SessionService.invoke({'/role/get-user-roles':{
                userId:userId // long
            }});
        };
        service.hasUserRole = function(userId,companyId,name,inherited) {
            return SessionService.invoke({'/role/has-user-role':{
                userId:userId // long
                ,companyId:companyId // long
                ,name:name // string
                ,inherited:inherited // boolean
            }});
        };
        service.hasUserRoles = function(userId,companyId,names,inherited) {
            return SessionService.invoke({'/role/has-user-roles':{
                userId:userId // long
                ,companyId:companyId // long
                ,names:names // string[]
                ,inherited:inherited // boolean
            }});
        };
        service.unsetUserRoles = function(userId,roleIds) {
            return SessionService.invoke({'/role/unset-user-roles':{
                userId:userId // long
                ,roleIds:roleIds // long[]
            }});
        };
        service.updateRole = function(roleId,name,titleMap,descriptionMap,subtype,serviceContext) {
            return SessionService.invoke({'/role/update-role':{
                roleId:roleId // long
                ,name:name // string
                ,titleMap:titleMap // map<string,string>
                ,descriptionMap:descriptionMap // map<string,string>
                ,subtype:subtype // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ScframeworkversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addFrameworkVersion = function(name,url,active,priority,serviceContext) {
            return SessionService.invoke({'/scframeworkversion/add-framework-version':{
                name:name // string
                ,url:url // string
                ,active:active // boolean
                ,priority:priority // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteFrameworkVersion = function(frameworkVersionId) {
            return SessionService.invoke({'/scframeworkversion/delete-framework-version':{
                frameworkVersionId:frameworkVersionId // long
            }});
        };
        service.getFrameworkVersion = function(frameworkVersionId) {
            return SessionService.invoke({'/scframeworkversion/get-framework-version':{
                frameworkVersionId:frameworkVersionId // long
            }});
        };
        service.getFrameworkVersions = function(groupId,active) {
            return SessionService.invoke({'/scframeworkversion/get-framework-versions':{
                groupId:groupId // long
                ,active:active // boolean
            }});
        };
        service.getFrameworkVersions_1 = function(groupId,active,start,end) {
            return SessionService.invoke({'/scframeworkversion/get-framework-versions':{
                groupId:groupId // long
                ,active:active // boolean
                ,start:start // int
                ,end:end // int
            }});
        };
        service.updateFrameworkVersion = function(frameworkVersionId,name,url,active,priority) {
            return SessionService.invoke({'/scframeworkversion/update-framework-version':{
                frameworkVersionId:frameworkVersionId // long
                ,name:name // string
                ,url:url // string
                ,active:active // boolean
                ,priority:priority // int
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SclicenseService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addLicense = function(name,url,openSource,active,recommended) {
            return SessionService.invoke({'/sclicense/add-license':{
                name:name // string
                ,url:url // string
                ,openSource:openSource // boolean
                ,active:active // boolean
                ,recommended:recommended // boolean
            }});
        };
        service.deleteLicense = function(licenseId) {
            return SessionService.invoke({'/sclicense/delete-license':{
                licenseId:licenseId // long
            }});
        };
        service.getLicense = function(licenseId) {
            return SessionService.invoke({'/sclicense/get-license':{
                licenseId:licenseId // long
            }});
        };
        service.updateLicense = function(licenseId,name,url,openSource,active,recommended) {
            return SessionService.invoke({'/sclicense/update-license':{
                licenseId:licenseId // long
                ,name:name // string
                ,url:url // string
                ,openSource:openSource // boolean
                ,active:active // boolean
                ,recommended:recommended // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ScproductentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addProductEntry = function(name,type,tags,shortDescription,longDescription,pageURL,author,repoGroupId,repoArtifactId,licenseIds,thumbnails,fullImages,serviceContext) {
            return SessionService.invoke({'/scproductentry/add-product-entry':{
                name:name // string
                ,type:type // string
                ,tags:tags // string
                ,shortDescription:shortDescription // string
                ,longDescription:longDescription // string
                ,pageURL:pageURL // string
                ,author:author // string
                ,repoGroupId:repoGroupId // string
                ,repoArtifactId:repoArtifactId // string
                ,licenseIds:licenseIds // long[]
                ,thumbnails:thumbnails // list<>
                ,fullImages:fullImages // list<>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteProductEntry = function(productEntryId) {
            return SessionService.invoke({'/scproductentry/delete-product-entry':{
                productEntryId:productEntryId // long
            }});
        };
        service.getProductEntry = function(productEntryId) {
            return SessionService.invoke({'/scproductentry/get-product-entry':{
                productEntryId:productEntryId // long
            }});
        };
        service.updateProductEntry = function(productEntryId,name,type,tags,shortDescription,longDescription,pageURL,author,repoGroupId,repoArtifactId,licenseIds,thumbnails,fullImages) {
            return SessionService.invoke({'/scproductentry/update-product-entry':{
                productEntryId:productEntryId // long
                ,name:name // string
                ,type:type // string
                ,tags:tags // string
                ,shortDescription:shortDescription // string
                ,longDescription:longDescription // string
                ,pageURL:pageURL // string
                ,author:author // string
                ,repoGroupId:repoGroupId // string
                ,repoArtifactId:repoArtifactId // string
                ,licenseIds:licenseIds // long[]
                ,thumbnails:thumbnails // list<>
                ,fullImages:fullImages // list<>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ScproductversionService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addProductVersion = function(productEntryId,version,changeLog,downloadPageURL,directDownloadURL,testDirectDownloadURL,repoStoreArtifact,frameworkVersionIds,serviceContext) {
            return SessionService.invoke({'/scproductversion/add-product-version':{
                productEntryId:productEntryId // long
                ,version:version // string
                ,changeLog:changeLog // string
                ,downloadPageURL:downloadPageURL // string
                ,directDownloadURL:directDownloadURL // string
                ,testDirectDownloadURL:testDirectDownloadURL // boolean
                ,repoStoreArtifact:repoStoreArtifact // boolean
                ,frameworkVersionIds:frameworkVersionIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteProductVersion = function(productVersionId) {
            return SessionService.invoke({'/scproductversion/delete-product-version':{
                productVersionId:productVersionId // long
            }});
        };
        service.getProductVersion = function(productVersionId) {
            return SessionService.invoke({'/scproductversion/get-product-version':{
                productVersionId:productVersionId // long
            }});
        };
        service.getProductVersions = function(productEntryId,start,end) {
            return SessionService.invoke({'/scproductversion/get-product-versions':{
                productEntryId:productEntryId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getProductVersionsCount = function(productEntryId) {
            return SessionService.invoke({'/scproductversion/get-product-versions-count':{
                productEntryId:productEntryId // long
            }});
        };
        service.updateProductVersion = function(productVersionId,version,changeLog,downloadPageURL,directDownloadURL,testDirectDownloadURL,repoStoreArtifact,frameworkVersionIds) {
            return SessionService.invoke({'/scproductversion/update-product-version':{
                productVersionId:productVersionId // long
                ,version:version // string
                ,changeLog:changeLog // string
                ,downloadPageURL:downloadPageURL // string
                ,directDownloadURL:directDownloadURL // string
                ,testDirectDownloadURL:testDirectDownloadURL // boolean
                ,repoStoreArtifact:repoStoreArtifact // boolean
                ,frameworkVersionIds:frameworkVersionIds // long[]
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingcategoryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCategory = function(parentCategoryId,name,description,serviceContext) {
            return SessionService.invoke({'/shoppingcategory/add-category':{
                parentCategoryId:parentCategoryId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteCategory = function(categoryId) {
            return SessionService.invoke({'/shoppingcategory/delete-category':{
                categoryId:categoryId // long
            }});
        };
        service.getCategories = function(groupId) {
            return SessionService.invoke({'/shoppingcategory/get-categories':{
                groupId:groupId // long
            }});
        };
        service.getCategories_1 = function(groupId,parentCategoryId,start,end) {
            return SessionService.invoke({'/shoppingcategory/get-categories':{
                groupId:groupId // long
                ,parentCategoryId:parentCategoryId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getCategoriesCount = function(groupId,parentCategoryId) {
            return SessionService.invoke({'/shoppingcategory/get-categories-count':{
                groupId:groupId // long
                ,parentCategoryId:parentCategoryId // long
            }});
        };
        service.getCategory = function(categoryId) {
            return SessionService.invoke({'/shoppingcategory/get-category':{
                categoryId:categoryId // long
            }});
        };
        service.getSubcategoryIds = function(categoryIds,groupId,categoryId) {
            return SessionService.invoke({'/shoppingcategory/get-subcategory-ids':{
                categoryIds:categoryIds // list<object<java.lang.Long>>
                ,groupId:groupId // long
                ,categoryId:categoryId // long
            }});
        };
        service.updateCategory = function(categoryId,parentCategoryId,name,description,mergeWithParentCategory,serviceContext) {
            return SessionService.invoke({'/shoppingcategory/update-category':{
                categoryId:categoryId // long
                ,parentCategoryId:parentCategoryId // long
                ,name:name // string
                ,description:description // string
                ,mergeWithParentCategory:mergeWithParentCategory // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingcouponService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addCoupon = function(code,autoCode,name,description,startDateMonth,startDateDay,startDateYear,startDateHour,startDateMinute,endDateMonth,endDateDay,endDateYear,endDateHour,endDateMinute,neverExpire,active,limitCategories,limitSkus,minOrder,discount,discountType,serviceContext) {
            return SessionService.invoke({'/shoppingcoupon/add-coupon':{
                code:code // string
                ,autoCode:autoCode // boolean
                ,name:name // string
                ,description:description // string
                ,startDateMonth:startDateMonth // int
                ,startDateDay:startDateDay // int
                ,startDateYear:startDateYear // int
                ,startDateHour:startDateHour // int
                ,startDateMinute:startDateMinute // int
                ,endDateMonth:endDateMonth // int
                ,endDateDay:endDateDay // int
                ,endDateYear:endDateYear // int
                ,endDateHour:endDateHour // int
                ,endDateMinute:endDateMinute // int
                ,neverExpire:neverExpire // boolean
                ,active:active // boolean
                ,limitCategories:limitCategories // string
                ,limitSkus:limitSkus // string
                ,minOrder:minOrder // double
                ,discount:discount // double
                ,discountType:discountType // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteCoupon = function(groupId,couponId) {
            return SessionService.invoke({'/shoppingcoupon/delete-coupon':{
                groupId:groupId // long
                ,couponId:couponId // long
            }});
        };
        service.getCoupon = function(groupId,couponId) {
            return SessionService.invoke({'/shoppingcoupon/get-coupon':{
                groupId:groupId // long
                ,couponId:couponId // long
            }});
        };
        service.search = function(groupId,companyId,code,active,discountType,andOperator,start,end) {
            return SessionService.invoke({'/shoppingcoupon/search':{
                groupId:groupId // long
                ,companyId:companyId // long
                ,code:code // string
                ,active:active // boolean
                ,discountType:discountType // string
                ,andOperator:andOperator // boolean
                ,start:start // int
                ,end:end // int
            }});
        };
        service.updateCoupon = function(couponId,name,description,startDateMonth,startDateDay,startDateYear,startDateHour,startDateMinute,endDateMonth,endDateDay,endDateYear,endDateHour,endDateMinute,neverExpire,active,limitCategories,limitSkus,minOrder,discount,discountType,serviceContext) {
            return SessionService.invoke({'/shoppingcoupon/update-coupon':{
                couponId:couponId // long
                ,name:name // string
                ,description:description // string
                ,startDateMonth:startDateMonth // int
                ,startDateDay:startDateDay // int
                ,startDateYear:startDateYear // int
                ,startDateHour:startDateHour // int
                ,startDateMinute:startDateMinute // int
                ,endDateMonth:endDateMonth // int
                ,endDateDay:endDateDay // int
                ,endDateYear:endDateYear // int
                ,endDateHour:endDateHour // int
                ,endDateMinute:endDateMinute // int
                ,neverExpire:neverExpire // boolean
                ,active:active // boolean
                ,limitCategories:limitCategories // string
                ,limitSkus:limitSkus // string
                ,minOrder:minOrder // double
                ,discount:discount // double
                ,discountType:discountType // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingitemService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addBookItems = function(groupId,categoryId,isbns) {
            return SessionService.invoke({'/shoppingitem/add-book-items':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,isbns:isbns // string[]
            }});
        };
        service.addItem = function(groupId,categoryId,sku,name,description,properties,fieldsQuantities,requiresShipping,stockQuantity,featured,sale,smallImage,smallImageURL,smallFile,mediumImage,mediumImageURL,mediumFile,largeImage,largeImageURL,largeFile,itemFields,itemPrices,serviceContext) {
            return SessionService.invoke({'/shoppingitem/add-item':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,sku:sku // string
                ,name:name // string
                ,description:description // string
                ,properties:properties // string
                ,fieldsQuantities:fieldsQuantities // string
                ,requiresShipping:requiresShipping // boolean
                ,stockQuantity:stockQuantity // int
                ,featured:featured // boolean
                ,sale:sale // object<java.lang.Boolean>
                ,smallImage:smallImage // boolean
                ,smallImageURL:smallImageURL // string
                ,smallFile:smallFile // object<java.io.File>
                ,mediumImage:mediumImage // boolean
                ,mediumImageURL:mediumImageURL // string
                ,mediumFile:mediumFile // object<java.io.File>
                ,largeImage:largeImage // boolean
                ,largeImageURL:largeImageURL // string
                ,largeFile:largeFile // object<java.io.File>
                ,itemFields:itemFields // list<object<com.liferay.portlet.shopping.model.ShoppingItemField>>
                ,itemPrices:itemPrices // list<object<com.liferay.portlet.shopping.model.ShoppingItemPrice>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteItem = function(itemId) {
            return SessionService.invoke({'/shoppingitem/delete-item':{
                itemId:itemId // long
            }});
        };
        service.getCategoriesItemsCount = function(groupId,categoryIds) {
            return SessionService.invoke({'/shoppingitem/get-categories-items-count':{
                groupId:groupId // long
                ,categoryIds:categoryIds // list<object<java.lang.Long>>
            }});
        };
        service.getItem = function(itemId) {
            return SessionService.invoke({'/shoppingitem/get-item':{
                itemId:itemId // long
            }});
        };
        service.getItems = function(groupId,categoryId) {
            return SessionService.invoke({'/shoppingitem/get-items':{
                groupId:groupId // long
                ,categoryId:categoryId // long
            }});
        };
        service.getItems_1 = function(groupId,categoryId,start,end,obc) {
            return SessionService.invoke({'/shoppingitem/get-items':{
                groupId:groupId // long
                ,categoryId:categoryId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getItemsCount = function(groupId,categoryId) {
            return SessionService.invoke({'/shoppingitem/get-items-count':{
                groupId:groupId // long
                ,categoryId:categoryId // long
            }});
        };
        service.getItemsPrevAndNext = function(itemId,obc) {
            return SessionService.invoke({'/shoppingitem/get-items-prev-and-next':{
                itemId:itemId // long
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.updateItem = function(itemId,groupId,categoryId,sku,name,description,properties,fieldsQuantities,requiresShipping,stockQuantity,featured,sale,smallImage,smallImageURL,smallFile,mediumImage,mediumImageURL,mediumFile,largeImage,largeImageURL,largeFile,itemFields,itemPrices,serviceContext) {
            return SessionService.invoke({'/shoppingitem/update-item':{
                itemId:itemId // long
                ,groupId:groupId // long
                ,categoryId:categoryId // long
                ,sku:sku // string
                ,name:name // string
                ,description:description // string
                ,properties:properties // string
                ,fieldsQuantities:fieldsQuantities // string
                ,requiresShipping:requiresShipping // boolean
                ,stockQuantity:stockQuantity // int
                ,featured:featured // boolean
                ,sale:sale // object<java.lang.Boolean>
                ,smallImage:smallImage // boolean
                ,smallImageURL:smallImageURL // string
                ,smallFile:smallFile // object<java.io.File>
                ,mediumImage:mediumImage // boolean
                ,mediumImageURL:mediumImageURL // string
                ,mediumFile:mediumFile // object<java.io.File>
                ,largeImage:largeImage // boolean
                ,largeImageURL:largeImageURL // string
                ,largeFile:largeFile // object<java.io.File>
                ,itemFields:itemFields // list<object<com.liferay.portlet.shopping.model.ShoppingItemField>>
                ,itemPrices:itemPrices // list<object<com.liferay.portlet.shopping.model.ShoppingItemPrice>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ShoppingorderService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.completeOrder = function(groupId,number,ppTxnId,ppPaymentStatus,ppPaymentGross,ppReceiverEmail,ppPayerEmail,serviceContext) {
            return SessionService.invoke({'/shoppingorder/complete-order':{
                groupId:groupId // long
                ,number:number // string
                ,ppTxnId:ppTxnId // string
                ,ppPaymentStatus:ppPaymentStatus // string
                ,ppPaymentGross:ppPaymentGross // double
                ,ppReceiverEmail:ppReceiverEmail // string
                ,ppPayerEmail:ppPayerEmail // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteOrder = function(groupId,orderId) {
            return SessionService.invoke({'/shoppingorder/delete-order':{
                groupId:groupId // long
                ,orderId:orderId // long
            }});
        };
        service.getOrder = function(groupId,orderId) {
            return SessionService.invoke({'/shoppingorder/get-order':{
                groupId:groupId // long
                ,orderId:orderId // long
            }});
        };
        service.sendEmail = function(groupId,orderId,emailType,serviceContext) {
            return SessionService.invoke({'/shoppingorder/send-email':{
                groupId:groupId // long
                ,orderId:orderId // long
                ,emailType:emailType // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateOrder = function(groupId,orderId,billingFirstName,billingLastName,billingEmailAddress,billingCompany,billingStreet,billingCity,billingState,billingZip,billingCountry,billingPhone,shipToBilling,shippingFirstName,shippingLastName,shippingEmailAddress,shippingCompany,shippingStreet,shippingCity,shippingState,shippingZip,shippingCountry,shippingPhone,ccName,ccType,ccNumber,ccExpMonth,ccExpYear,ccVerNumber,comments) {
            return SessionService.invoke({'/shoppingorder/update-order':{
                groupId:groupId // long
                ,orderId:orderId // long
                ,billingFirstName:billingFirstName // string
                ,billingLastName:billingLastName // string
                ,billingEmailAddress:billingEmailAddress // string
                ,billingCompany:billingCompany // string
                ,billingStreet:billingStreet // string
                ,billingCity:billingCity // string
                ,billingState:billingState // string
                ,billingZip:billingZip // string
                ,billingCountry:billingCountry // string
                ,billingPhone:billingPhone // string
                ,shipToBilling:shipToBilling // boolean
                ,shippingFirstName:shippingFirstName // string
                ,shippingLastName:shippingLastName // string
                ,shippingEmailAddress:shippingEmailAddress // string
                ,shippingCompany:shippingCompany // string
                ,shippingStreet:shippingStreet // string
                ,shippingCity:shippingCity // string
                ,shippingState:shippingState // string
                ,shippingZip:shippingZip // string
                ,shippingCountry:shippingCountry // string
                ,shippingPhone:shippingPhone // string
                ,ccName:ccName // string
                ,ccType:ccType // string
                ,ccNumber:ccNumber // string
                ,ccExpMonth:ccExpMonth // int
                ,ccExpYear:ccExpYear // int
                ,ccVerNumber:ccVerNumber // string
                ,comments:comments // string
            }});
        };
        service.updateOrder_1 = function(groupId,orderId,ppTxnId,ppPaymentStatus,ppPaymentGross,ppReceiverEmail,ppPayerEmail) {
            return SessionService.invoke({'/shoppingorder/update-order':{
                groupId:groupId // long
                ,orderId:orderId // long
                ,ppTxnId:ppTxnId // string
                ,ppPaymentStatus:ppPaymentStatus // string
                ,ppPaymentGross:ppPaymentGross // double
                ,ppReceiverEmail:ppReceiverEmail // string
                ,ppPayerEmail:ppPayerEmail // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialactivityService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getActivities = function(className,start,end) {
            return SessionService.invoke({'/socialactivity/get-activities':{
                className:className // string
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getActivities_1 = function(classNameId,start,end) {
            return SessionService.invoke({'/socialactivity/get-activities':{
                classNameId:classNameId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getActivities_2 = function(mirrorActivityId,className,classPK,start,end) {
            return SessionService.invoke({'/socialactivity/get-activities':{
                mirrorActivityId:mirrorActivityId // long
                ,className:className // string
                ,classPK:classPK // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getActivities_3 = function(mirrorActivityId,classNameId,classPK,start,end) {
            return SessionService.invoke({'/socialactivity/get-activities':{
                mirrorActivityId:mirrorActivityId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getActivitiesCount = function(className) {
            return SessionService.invoke({'/socialactivity/get-activities-count':{
                className:className // string
            }});
        };
        service.getActivitiesCount_1 = function(classNameId) {
            return SessionService.invoke({'/socialactivity/get-activities-count':{
                classNameId:classNameId // long
            }});
        };
        service.getActivitiesCount_2 = function(mirrorActivityId,className,classPK) {
            return SessionService.invoke({'/socialactivity/get-activities-count':{
                mirrorActivityId:mirrorActivityId // long
                ,className:className // string
                ,classPK:classPK // long
            }});
        };
        service.getActivitiesCount_3 = function(mirrorActivityId,classNameId,classPK) {
            return SessionService.invoke({'/socialactivity/get-activities-count':{
                mirrorActivityId:mirrorActivityId // long
                ,classNameId:classNameId // long
                ,classPK:classPK // long
            }});
        };
        service.getActivity = function(activityId) {
            return SessionService.invoke({'/socialactivity/get-activity':{
                activityId:activityId // long
            }});
        };
        service.getActivitySetActivities = function(activitySetId,start,end) {
            return SessionService.invoke({'/socialactivity/get-activity-set-activities':{
                activitySetId:activitySetId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupActivities = function(groupId,start,end) {
            return SessionService.invoke({'/socialactivity/get-group-activities':{
                groupId:groupId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupActivitiesCount = function(groupId) {
            return SessionService.invoke({'/socialactivity/get-group-activities-count':{
                groupId:groupId // long
            }});
        };
        service.getGroupUsersActivities = function(groupId,start,end) {
            return SessionService.invoke({'/socialactivity/get-group-users-activities':{
                groupId:groupId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getGroupUsersActivitiesCount = function(groupId) {
            return SessionService.invoke({'/socialactivity/get-group-users-activities-count':{
                groupId:groupId // long
            }});
        };
        service.getMirrorActivity = function(mirrorActivityId) {
            return SessionService.invoke({'/socialactivity/get-mirror-activity':{
                mirrorActivityId:mirrorActivityId // long
            }});
        };
        service.getOrganizationActivities = function(organizationId,start,end) {
            return SessionService.invoke({'/socialactivity/get-organization-activities':{
                organizationId:organizationId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getOrganizationActivitiesCount = function(organizationId) {
            return SessionService.invoke({'/socialactivity/get-organization-activities-count':{
                organizationId:organizationId // long
            }});
        };
        service.getOrganizationUsersActivities = function(organizationId,start,end) {
            return SessionService.invoke({'/socialactivity/get-organization-users-activities':{
                organizationId:organizationId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getOrganizationUsersActivitiesCount = function(organizationId) {
            return SessionService.invoke({'/socialactivity/get-organization-users-activities-count':{
                organizationId:organizationId // long
            }});
        };
        service.getRelationActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-relation-activities':{
                userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getRelationActivities_1 = function(userId,type,start,end) {
            return SessionService.invoke({'/socialactivity/get-relation-activities':{
                userId:userId // long
                ,type:type // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getRelationActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-relation-activities-count':{
                userId:userId // long
            }});
        };
        service.getRelationActivitiesCount_1 = function(userId,type) {
            return SessionService.invoke({'/socialactivity/get-relation-activities-count':{
                userId:userId // long
                ,type:type // int
            }});
        };
        service.getUserActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-user-activities':{
                userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getUserActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-user-activities-count':{
                userId:userId // long
            }});
        };
        service.getUserGroupsActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-user-groups-activities':{
                userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getUserGroupsActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-user-groups-activities-count':{
                userId:userId // long
            }});
        };
        service.getUserGroupsAndOrganizationsActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-user-groups-and-organizations-activities':{
                userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getUserGroupsAndOrganizationsActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-user-groups-and-organizations-activities-count':{
                userId:userId // long
            }});
        };
        service.getUserOrganizationsActivities = function(userId,start,end) {
            return SessionService.invoke({'/socialactivity/get-user-organizations-activities':{
                userId:userId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getUserOrganizationsActivitiesCount = function(userId) {
            return SessionService.invoke({'/socialactivity/get-user-organizations-activities-count':{
                userId:userId // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialactivitysettingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getActivityDefinition = function(groupId,className,activityType) {
            return SessionService.invoke({'/socialactivitysetting/get-activity-definition':{
                groupId:groupId // long
                ,className:className // string
                ,activityType:activityType // int
            }});
        };
        service.getActivityDefinitions = function(groupId,className) {
            return SessionService.invoke({'/socialactivitysetting/get-activity-definitions':{
                groupId:groupId // long
                ,className:className // string
            }});
        };
        service.getActivitySettings = function(groupId) {
            return SessionService.invoke({'/socialactivitysetting/get-activity-settings':{
                groupId:groupId // long
            }});
        };
        service.getJsonActivityDefinitions = function(groupId,className) {
            return SessionService.invoke({'/socialactivitysetting/get-json-activity-definitions':{
                groupId:groupId // long
                ,className:className // string
            }});
        };
        service.updateActivitySetting = function(groupId,className,enabled) {
            return SessionService.invoke({'/socialactivitysetting/update-activity-setting':{
                groupId:groupId // long
                ,className:className // string
                ,enabled:enabled // boolean
            }});
        };
        service.updateActivitySetting_1 = function(groupId,className,activityType,activityCounterDefinition) {
            return SessionService.invoke({'/socialactivitysetting/update-activity-setting':{
                groupId:groupId // long
                ,className:className // string
                ,activityType:activityType // int
                ,activityCounterDefinition:activityCounterDefinition // object<com.liferay.portlet.social.model.SocialActivityCounterDefinition>
            }});
        };
        service.updateActivitySettings = function(groupId,className,activityType,activityCounterDefinitions) {
            return SessionService.invoke({'/socialactivitysetting/update-activity-settings':{
                groupId:groupId // long
                ,className:className // string
                ,activityType:activityType // int
                ,activityCounterDefinitions:activityCounterDefinitions // list<object<com.liferay.portlet.social.model.SocialActivityCounterDefinition>>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('SocialrequestService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.updateRequest = function(requestId,status,themeDisplay) {
            return SessionService.invoke({'/socialrequest/update-request':{
                requestId:requestId // long
                ,status:status // int
                ,themeDisplay:themeDisplay // object<com.liferay.portal.theme.ThemeDisplay>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('StagingService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.cleanUpStagingRequest = function(stagingRequestId) {
            return SessionService.invoke({'/staging/clean-up-staging-request':{
                stagingRequestId:stagingRequestId // long
            }});
        };
        service.createStagingRequest = function(groupId,checksum) {
            return SessionService.invoke({'/staging/create-staging-request':{
                groupId:groupId // long
                ,checksum:checksum // string
            }});
        };
        service.publishStagingRequest = function(stagingRequestId,privateLayout,parameterMap) {
            return SessionService.invoke({'/staging/publish-staging-request':{
                stagingRequestId:stagingRequestId // long
                ,privateLayout:privateLayout // boolean
                ,parameterMap:parameterMap // map<string,string[]>
            }});
        };
        service.updateStagingRequest = function(stagingRequestId,fileName,bytes) {
            return SessionService.invoke({'/staging/update-staging-request':{
                stagingRequestId:stagingRequestId // long
                ,fileName:fileName // string
                ,bytes:bytes // byte[]
            }});
        };
        service.validateStagingRequest = function(stagingRequestId,privateLayout,parameterMap) {
            return SessionService.invoke({'/staging/validate-staging-request':{
                stagingRequestId:stagingRequestId // long
                ,privateLayout:privateLayout // boolean
                ,parameterMap:parameterMap // map<string,string[]>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('TeamService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addTeam = function(groupId,name,description) {
            return SessionService.invoke({'/team/add-team':{
                groupId:groupId // long
                ,name:name // string
                ,description:description // string
            }});
        };
        service.deleteTeam = function(teamId) {
            return SessionService.invoke({'/team/delete-team':{
                teamId:teamId // long
            }});
        };
        service.getGroupTeams = function(groupId) {
            return SessionService.invoke({'/team/get-group-teams':{
                groupId:groupId // long
            }});
        };
        service.getTeam = function(teamId) {
            return SessionService.invoke({'/team/get-team':{
                teamId:teamId // long
            }});
        };
        service.getTeam_1 = function(groupId,name) {
            return SessionService.invoke({'/team/get-team':{
                groupId:groupId // long
                ,name:name // string
            }});
        };
        service.getUserTeams = function(userId) {
            return SessionService.invoke({'/team/get-user-teams':{
                userId:userId // long
            }});
        };
        service.getUserTeams_1 = function(userId,groupId) {
            return SessionService.invoke({'/team/get-user-teams':{
                userId:userId // long
                ,groupId:groupId // long
            }});
        };
        service.hasUserTeam = function(userId,teamId) {
            return SessionService.invoke({'/team/has-user-team':{
                userId:userId // long
                ,teamId:teamId // long
            }});
        };
        service.updateTeam = function(teamId,name,description) {
            return SessionService.invoke({'/team/update-team':{
                teamId:teamId // long
                ,name:name // string
                ,description:description // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('ThemeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.getThemes = function(companyId) {
            return SessionService.invoke({'/theme/get-themes':{
                companyId:companyId // long
            }});
        };
        service.getWarThemes = function() {
            return SessionService.invoke({'/theme/get-war-themes':{
                
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('TrashentryService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteEntries = function(entryIds) {
            return SessionService.invoke({'/trashentry/delete-entries':{
                entryIds:entryIds // long[]
            }});
        };
        service.deleteEntries_1 = function(groupId) {
            return SessionService.invoke({'/trashentry/delete-entries':{
                groupId:groupId // long
            }});
        };
        service.deleteEntry = function(entryId) {
            return SessionService.invoke({'/trashentry/delete-entry':{
                entryId:entryId // long
            }});
        };
        service.deleteEntry_1 = function(className,classPK) {
            return SessionService.invoke({'/trashentry/delete-entry':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.getEntries = function(groupId) {
            return SessionService.invoke({'/trashentry/get-entries':{
                groupId:groupId // long
            }});
        };
        service.getEntries_1 = function(groupId,start,end,obc) {
            return SessionService.invoke({'/trashentry/get-entries':{
                groupId:groupId // long
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.moveEntry = function(className,classPK,destinationContainerModelId,serviceContext) {
            return SessionService.invoke({'/trashentry/move-entry':{
                className:className // string
                ,classPK:classPK // long
                ,destinationContainerModelId:destinationContainerModelId // long
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.restoreEntry = function(entryId) {
            return SessionService.invoke({'/trashentry/restore-entry':{
                entryId:entryId // long
            }});
        };
        service.restoreEntry_1 = function(entryId,overrideClassPK,name) {
            return SessionService.invoke({'/trashentry/restore-entry':{
                entryId:entryId // long
                ,overrideClassPK:overrideClassPK // long
                ,name:name // string
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UserService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroupUsers = function(groupId,userIds,serviceContext) {
            return SessionService.invoke({'/user/add-group-users':{
                groupId:groupId // long
                ,userIds:userIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addOrganizationUsers = function(organizationId,userIds) {
            return SessionService.invoke({'/user/add-organization-users':{
                organizationId:organizationId // long
                ,userIds:userIds // long[]
            }});
        };
        service.addPasswordPolicyUsers = function(passwordPolicyId,userIds) {
            return SessionService.invoke({'/user/add-password-policy-users':{
                passwordPolicyId:passwordPolicyId // long
                ,userIds:userIds // long[]
            }});
        };
        service.addRoleUsers = function(roleId,userIds) {
            return SessionService.invoke({'/user/add-role-users':{
                roleId:roleId // long
                ,userIds:userIds // long[]
            }});
        };
        service.addTeamUsers = function(teamId,userIds) {
            return SessionService.invoke({'/user/add-team-users':{
                teamId:teamId // long
                ,userIds:userIds // long[]
            }});
        };
        service.addUser = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/add-user':{
                companyId:companyId // long
                ,autoPassword:autoPassword // boolean
                ,password1:password1 // string
                ,password2:password2 // string
                ,autoScreenName:autoScreenName // boolean
                ,screenName:screenName // string
                ,emailAddress:emailAddress // string
                ,facebookId:facebookId // long
                ,openId:openId // string
                ,locale:locale // string
                ,firstName:firstName // string
                ,middleName:middleName // string
                ,lastName:lastName // string
                ,prefixId:prefixId // int
                ,suffixId:suffixId // int
                ,male:male // boolean
                ,birthdayMonth:birthdayMonth // int
                ,birthdayDay:birthdayDay // int
                ,birthdayYear:birthdayYear // int
                ,jobTitle:jobTitle // string
                ,groupIds:groupIds // long[]
                ,organizationIds:organizationIds // long[]
                ,roleIds:roleIds // long[]
                ,userGroupIds:userGroupIds // long[]
                ,sendEmail:sendEmail // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addUser_1 = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/add-user':{
                companyId:companyId // long
                ,autoPassword:autoPassword // boolean
                ,password1:password1 // string
                ,password2:password2 // string
                ,autoScreenName:autoScreenName // boolean
                ,screenName:screenName // string
                ,emailAddress:emailAddress // string
                ,facebookId:facebookId // long
                ,openId:openId // string
                ,locale:locale // string
                ,firstName:firstName // string
                ,middleName:middleName // string
                ,lastName:lastName // string
                ,prefixId:prefixId // int
                ,suffixId:suffixId // int
                ,male:male // boolean
                ,birthdayMonth:birthdayMonth // int
                ,birthdayDay:birthdayDay // int
                ,birthdayYear:birthdayYear // int
                ,jobTitle:jobTitle // string
                ,groupIds:groupIds // long[]
                ,organizationIds:organizationIds // long[]
                ,roleIds:roleIds // long[]
                ,userGroupIds:userGroupIds // long[]
                ,addresses:addresses // list<object<com.liferay.portal.model.Address>>
                ,emailAddresses:emailAddresses // list<object<com.liferay.portal.model.EmailAddress>>
                ,phones:phones // list<object<com.liferay.portal.model.Phone>>
                ,websites:websites // list<object<com.liferay.portal.model.Website>>
                ,announcementsDelivers:announcementsDelivers // list<object<com.liferay.portlet.announcements.model.AnnouncementsDelivery>>
                ,sendEmail:sendEmail // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke({'/user/add-user-group-users':{
                userGroupId:userGroupId // long
                ,userIds:userIds // long[]
            }});
        };
        service.addUserWithWorkflow = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/add-user-with-workflow':{
                companyId:companyId // long
                ,autoPassword:autoPassword // boolean
                ,password1:password1 // string
                ,password2:password2 // string
                ,autoScreenName:autoScreenName // boolean
                ,screenName:screenName // string
                ,emailAddress:emailAddress // string
                ,facebookId:facebookId // long
                ,openId:openId // string
                ,locale:locale // string
                ,firstName:firstName // string
                ,middleName:middleName // string
                ,lastName:lastName // string
                ,prefixId:prefixId // int
                ,suffixId:suffixId // int
                ,male:male // boolean
                ,birthdayMonth:birthdayMonth // int
                ,birthdayDay:birthdayDay // int
                ,birthdayYear:birthdayYear // int
                ,jobTitle:jobTitle // string
                ,groupIds:groupIds // long[]
                ,organizationIds:organizationIds // long[]
                ,roleIds:roleIds // long[]
                ,userGroupIds:userGroupIds // long[]
                ,sendEmail:sendEmail // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addUserWithWorkflow_1 = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,groupIds,organizationIds,roleIds,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/add-user-with-workflow':{
                companyId:companyId // long
                ,autoPassword:autoPassword // boolean
                ,password1:password1 // string
                ,password2:password2 // string
                ,autoScreenName:autoScreenName // boolean
                ,screenName:screenName // string
                ,emailAddress:emailAddress // string
                ,facebookId:facebookId // long
                ,openId:openId // string
                ,locale:locale // string
                ,firstName:firstName // string
                ,middleName:middleName // string
                ,lastName:lastName // string
                ,prefixId:prefixId // int
                ,suffixId:suffixId // int
                ,male:male // boolean
                ,birthdayMonth:birthdayMonth // int
                ,birthdayDay:birthdayDay // int
                ,birthdayYear:birthdayYear // int
                ,jobTitle:jobTitle // string
                ,groupIds:groupIds // long[]
                ,organizationIds:organizationIds // long[]
                ,roleIds:roleIds // long[]
                ,userGroupIds:userGroupIds // long[]
                ,addresses:addresses // list<object<com.liferay.portal.model.Address>>
                ,emailAddresses:emailAddresses // list<object<com.liferay.portal.model.EmailAddress>>
                ,phones:phones // list<object<com.liferay.portal.model.Phone>>
                ,websites:websites // list<object<com.liferay.portal.model.Website>>
                ,announcementsDelivers:announcementsDelivers // list<object<com.liferay.portlet.announcements.model.AnnouncementsDelivery>>
                ,sendEmail:sendEmail // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deletePortrait = function(userId) {
            return SessionService.invoke({'/user/delete-portrait':{
                userId:userId // long
            }});
        };
        service.deleteRoleUser = function(roleId,userId) {
            return SessionService.invoke({'/user/delete-role-user':{
                roleId:roleId // long
                ,userId:userId // long
            }});
        };
        service.deleteUser = function(userId) {
            return SessionService.invoke({'/user/delete-user':{
                userId:userId // long
            }});
        };
        service.getCompanyUsers = function(companyId,start,end) {
            return SessionService.invoke({'/user/get-company-users':{
                companyId:companyId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getCompanyUsersCount = function(companyId) {
            return SessionService.invoke({'/user/get-company-users-count':{
                companyId:companyId // long
            }});
        };
        service.getGroupUserIds = function(groupId) {
            return SessionService.invoke({'/user/get-group-user-ids':{
                groupId:groupId // long
            }});
        };
        service.getGroupUsers = function(groupId) {
            return SessionService.invoke({'/user/get-group-users':{
                groupId:groupId // long
            }});
        };
        service.getOrganizationUserIds = function(organizationId) {
            return SessionService.invoke({'/user/get-organization-user-ids':{
                organizationId:organizationId // long
            }});
        };
        service.getOrganizationUsers = function(organizationId) {
            return SessionService.invoke({'/user/get-organization-users':{
                organizationId:organizationId // long
            }});
        };
        service.getRoleUserIds = function(roleId) {
            return SessionService.invoke({'/user/get-role-user-ids':{
                roleId:roleId // long
            }});
        };
        service.getUserByEmailAddress = function(companyId,emailAddress) {
            return SessionService.invoke({'/user/get-user-by-email-address':{
                companyId:companyId // long
                ,emailAddress:emailAddress // string
            }});
        };
        service.getUserById = function(userId) {
            return SessionService.invoke({'/user/get-user-by-id':{
                userId:userId // long
            }});
        };
        service.getUserByScreenName = function(companyId,screenName) {
            return SessionService.invoke({'/user/get-user-by-screen-name':{
                companyId:companyId // long
                ,screenName:screenName // string
            }});
        };
        service.getUserGroupUsers = function(userGroupId) {
            return SessionService.invoke({'/user/get-user-group-users':{
                userGroupId:userGroupId // long
            }});
        };
        service.getUserIdByEmailAddress = function(companyId,emailAddress) {
            return SessionService.invoke({'/user/get-user-id-by-email-address':{
                companyId:companyId // long
                ,emailAddress:emailAddress // string
            }});
        };
        service.getUserIdByScreenName = function(companyId,screenName) {
            return SessionService.invoke({'/user/get-user-id-by-screen-name':{
                companyId:companyId // long
                ,screenName:screenName // string
            }});
        };
        service.hasGroupUser = function(groupId,userId) {
            return SessionService.invoke({'/user/has-group-user':{
                groupId:groupId // long
                ,userId:userId // long
            }});
        };
        service.hasRoleUser = function(roleId,userId) {
            return SessionService.invoke({'/user/has-role-user':{
                roleId:roleId // long
                ,userId:userId // long
            }});
        };
        service.hasRoleUser_1 = function(companyId,name,userId,inherited) {
            return SessionService.invoke({'/user/has-role-user':{
                companyId:companyId // long
                ,name:name // string
                ,userId:userId // long
                ,inherited:inherited // boolean
            }});
        };
        service.setRoleUsers = function(roleId,userIds) {
            return SessionService.invoke({'/user/set-role-users':{
                roleId:roleId // long
                ,userIds:userIds // long[]
            }});
        };
        service.setUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke({'/user/set-user-group-users':{
                userGroupId:userGroupId // long
                ,userIds:userIds // long[]
            }});
        };
        service.unsetGroupTeamsUsers = function(groupId,userIds) {
            return SessionService.invoke({'/user/unset-group-teams-users':{
                groupId:groupId // long
                ,userIds:userIds // long[]
            }});
        };
        service.unsetGroupUsers = function(groupId,userIds,serviceContext) {
            return SessionService.invoke({'/user/unset-group-users':{
                groupId:groupId // long
                ,userIds:userIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.unsetOrganizationUsers = function(organizationId,userIds) {
            return SessionService.invoke({'/user/unset-organization-users':{
                organizationId:organizationId // long
                ,userIds:userIds // long[]
            }});
        };
        service.unsetPasswordPolicyUsers = function(passwordPolicyId,userIds) {
            return SessionService.invoke({'/user/unset-password-policy-users':{
                passwordPolicyId:passwordPolicyId // long
                ,userIds:userIds // long[]
            }});
        };
        service.unsetRoleUsers = function(roleId,userIds) {
            return SessionService.invoke({'/user/unset-role-users':{
                roleId:roleId // long
                ,userIds:userIds // long[]
            }});
        };
        service.unsetTeamUsers = function(teamId,userIds) {
            return SessionService.invoke({'/user/unset-team-users':{
                teamId:teamId // long
                ,userIds:userIds // long[]
            }});
        };
        service.unsetUserGroupUsers = function(userGroupId,userIds) {
            return SessionService.invoke({'/user/unset-user-group-users':{
                userGroupId:userGroupId // long
                ,userIds:userIds // long[]
            }});
        };
        service.updateAgreedToTermsOfUse = function(userId,agreedToTermsOfUse) {
            return SessionService.invoke({'/user/update-agreed-to-terms-of-use':{
                userId:userId // long
                ,agreedToTermsOfUse:agreedToTermsOfUse // boolean
            }});
        };
        service.updateEmailAddress = function(userId,password,emailAddress1,emailAddress2,serviceContext) {
            return SessionService.invoke({'/user/update-email-address':{
                userId:userId // long
                ,password:password // string
                ,emailAddress1:emailAddress1 // string
                ,emailAddress2:emailAddress2 // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateIncompleteUser = function(companyId,autoPassword,password1,password2,autoScreenName,screenName,emailAddress,facebookId,openId,locale,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,jobTitle,updateUserInformation,sendEmail,serviceContext) {
            return SessionService.invoke({'/user/update-incomplete-user':{
                companyId:companyId // long
                ,autoPassword:autoPassword // boolean
                ,password1:password1 // string
                ,password2:password2 // string
                ,autoScreenName:autoScreenName // boolean
                ,screenName:screenName // string
                ,emailAddress:emailAddress // string
                ,facebookId:facebookId // long
                ,openId:openId // string
                ,locale:locale // string
                ,firstName:firstName // string
                ,middleName:middleName // string
                ,lastName:lastName // string
                ,prefixId:prefixId // int
                ,suffixId:suffixId // int
                ,male:male // boolean
                ,birthdayMonth:birthdayMonth // int
                ,birthdayDay:birthdayDay // int
                ,birthdayYear:birthdayYear // int
                ,jobTitle:jobTitle // string
                ,updateUserInformation:updateUserInformation // boolean
                ,sendEmail:sendEmail // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateLockoutById = function(userId,lockout) {
            return SessionService.invoke({'/user/update-lockout-by-id':{
                userId:userId // long
                ,lockout:lockout // boolean
            }});
        };
        service.updateOpenId = function(userId,openId) {
            return SessionService.invoke({'/user/update-open-id':{
                userId:userId // long
                ,openId:openId // string
            }});
        };
        service.updateOrganizations = function(userId,organizationIds,serviceContext) {
            return SessionService.invoke({'/user/update-organizations':{
                userId:userId // long
                ,organizationIds:organizationIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updatePassword = function(userId,password1,password2,passwordReset) {
            return SessionService.invoke({'/user/update-password':{
                userId:userId // long
                ,password1:password1 // string
                ,password2:password2 // string
                ,passwordReset:passwordReset // boolean
            }});
        };
        service.updatePortrait = function(userId,bytes) {
            return SessionService.invoke({'/user/update-portrait':{
                userId:userId // long
                ,bytes:bytes // byte[]
            }});
        };
        service.updateReminderQuery = function(userId,question,answer) {
            return SessionService.invoke({'/user/update-reminder-query':{
                userId:userId // long
                ,question:question // string
                ,answer:answer // string
            }});
        };
        service.updateScreenName = function(userId,screenName) {
            return SessionService.invoke({'/user/update-screen-name':{
                userId:userId // long
                ,screenName:screenName // string
            }});
        };
        service.updateStatus = function(userId,status) {
            return SessionService.invoke({'/user/update-status':{
                userId:userId // long
                ,status:status // int
            }});
        };
        service.updateStatus_1 = function(userId,status,serviceContext) {
            return SessionService.invoke({'/user/update-status':{
                userId:userId // long
                ,status:status // int
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateUser = function(userId,oldPassword,newPassword1,newPassword2,passwordReset,reminderQueryQuestion,reminderQueryAnswer,screenName,emailAddress,facebookId,openId,languageId,timeZoneId,greeting,comments,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,smsSn,aimSn,facebookSn,icqSn,jabberSn,msnSn,mySpaceSn,skypeSn,twitterSn,ymSn,jobTitle,groupIds,organizationIds,roleIds,userGroupRoles,userGroupIds,serviceContext) {
            return SessionService.invoke({'/user/update-user':{
                userId:userId // long
                ,oldPassword:oldPassword // string
                ,newPassword1:newPassword1 // string
                ,newPassword2:newPassword2 // string
                ,passwordReset:passwordReset // boolean
                ,reminderQueryQuestion:reminderQueryQuestion // string
                ,reminderQueryAnswer:reminderQueryAnswer // string
                ,screenName:screenName // string
                ,emailAddress:emailAddress // string
                ,facebookId:facebookId // long
                ,openId:openId // string
                ,languageId:languageId // string
                ,timeZoneId:timeZoneId // string
                ,greeting:greeting // string
                ,comments:comments // string
                ,firstName:firstName // string
                ,middleName:middleName // string
                ,lastName:lastName // string
                ,prefixId:prefixId // int
                ,suffixId:suffixId // int
                ,male:male // boolean
                ,birthdayMonth:birthdayMonth // int
                ,birthdayDay:birthdayDay // int
                ,birthdayYear:birthdayYear // int
                ,smsSn:smsSn // string
                ,aimSn:aimSn // string
                ,facebookSn:facebookSn // string
                ,icqSn:icqSn // string
                ,jabberSn:jabberSn // string
                ,msnSn:msnSn // string
                ,mySpaceSn:mySpaceSn // string
                ,skypeSn:skypeSn // string
                ,twitterSn:twitterSn // string
                ,ymSn:ymSn // string
                ,jobTitle:jobTitle // string
                ,groupIds:groupIds // long[]
                ,organizationIds:organizationIds // long[]
                ,roleIds:roleIds // long[]
                ,userGroupRoles:userGroupRoles // list<object<com.liferay.portal.model.UserGroupRole>>
                ,userGroupIds:userGroupIds // long[]
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.updateUser_1 = function(userId,oldPassword,newPassword1,newPassword2,passwordReset,reminderQueryQuestion,reminderQueryAnswer,screenName,emailAddress,facebookId,openId,languageId,timeZoneId,greeting,comments,firstName,middleName,lastName,prefixId,suffixId,male,birthdayMonth,birthdayDay,birthdayYear,smsSn,aimSn,facebookSn,icqSn,jabberSn,msnSn,mySpaceSn,skypeSn,twitterSn,ymSn,jobTitle,groupIds,organizationIds,roleIds,userGroupRoles,userGroupIds,addresses,emailAddresses,phones,websites,announcementsDelivers,serviceContext) {
            return SessionService.invoke({'/user/update-user':{
                userId:userId // long
                ,oldPassword:oldPassword // string
                ,newPassword1:newPassword1 // string
                ,newPassword2:newPassword2 // string
                ,passwordReset:passwordReset // boolean
                ,reminderQueryQuestion:reminderQueryQuestion // string
                ,reminderQueryAnswer:reminderQueryAnswer // string
                ,screenName:screenName // string
                ,emailAddress:emailAddress // string
                ,facebookId:facebookId // long
                ,openId:openId // string
                ,languageId:languageId // string
                ,timeZoneId:timeZoneId // string
                ,greeting:greeting // string
                ,comments:comments // string
                ,firstName:firstName // string
                ,middleName:middleName // string
                ,lastName:lastName // string
                ,prefixId:prefixId // int
                ,suffixId:suffixId // int
                ,male:male // boolean
                ,birthdayMonth:birthdayMonth // int
                ,birthdayDay:birthdayDay // int
                ,birthdayYear:birthdayYear // int
                ,smsSn:smsSn // string
                ,aimSn:aimSn // string
                ,facebookSn:facebookSn // string
                ,icqSn:icqSn // string
                ,jabberSn:jabberSn // string
                ,msnSn:msnSn // string
                ,mySpaceSn:mySpaceSn // string
                ,skypeSn:skypeSn // string
                ,twitterSn:twitterSn // string
                ,ymSn:ymSn // string
                ,jobTitle:jobTitle // string
                ,groupIds:groupIds // long[]
                ,organizationIds:organizationIds // long[]
                ,roleIds:roleIds // long[]
                ,userGroupRoles:userGroupRoles // list<object<com.liferay.portal.model.UserGroupRole>>
                ,userGroupIds:userGroupIds // long[]
                ,addresses:addresses // list<object<com.liferay.portal.model.Address>>
                ,emailAddresses:emailAddresses // list<object<com.liferay.portal.model.EmailAddress>>
                ,phones:phones // list<object<com.liferay.portal.model.Phone>>
                ,websites:websites // list<object<com.liferay.portal.model.Website>>
                ,announcementsDelivers:announcementsDelivers // list<object<com.liferay.portlet.announcements.model.AnnouncementsDelivery>>
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UsergroupService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addGroupUserGroups = function(groupId,userGroupIds) {
            return SessionService.invoke({'/usergroup/add-group-user-groups':{
                groupId:groupId // long
                ,userGroupIds:userGroupIds // long[]
            }});
        };
        service.addTeamUserGroups = function(teamId,userGroupIds) {
            return SessionService.invoke({'/usergroup/add-team-user-groups':{
                teamId:teamId // long
                ,userGroupIds:userGroupIds // long[]
            }});
        };
        service.addUserGroup = function(name,description) {
            return SessionService.invoke({'/usergroup/add-user-group':{
                name:name // string
                ,description:description // string
            }});
        };
        service.addUserGroup_1 = function(name,description,serviceContext) {
            return SessionService.invoke({'/usergroup/add-user-group':{
                name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteUserGroup = function(userGroupId) {
            return SessionService.invoke({'/usergroup/delete-user-group':{
                userGroupId:userGroupId // long
            }});
        };
        service.getUserGroup = function(name) {
            return SessionService.invoke({'/usergroup/get-user-group':{
                name:name // string
            }});
        };
        service.getUserGroup_1 = function(userGroupId) {
            return SessionService.invoke({'/usergroup/get-user-group':{
                userGroupId:userGroupId // long
            }});
        };
        service.getUserUserGroups = function(userId) {
            return SessionService.invoke({'/usergroup/get-user-user-groups':{
                userId:userId // long
            }});
        };
        service.unsetGroupUserGroups = function(groupId,userGroupIds) {
            return SessionService.invoke({'/usergroup/unset-group-user-groups':{
                groupId:groupId // long
                ,userGroupIds:userGroupIds // long[]
            }});
        };
        service.unsetTeamUserGroups = function(teamId,userGroupIds) {
            return SessionService.invoke({'/usergroup/unset-team-user-groups':{
                teamId:teamId // long
                ,userGroupIds:userGroupIds // long[]
            }});
        };
        service.updateUserGroup = function(userGroupId,name,description) {
            return SessionService.invoke({'/usergroup/update-user-group':{
                userGroupId:userGroupId // long
                ,name:name // string
                ,description:description // string
            }});
        };
        service.updateUserGroup_1 = function(userGroupId,name,description,serviceContext) {
            return SessionService.invoke({'/usergroup/update-user-group':{
                userGroupId:userGroupId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UsergroupgrouproleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addUserGroupGroupRoles = function(userGroupId,groupId,roleIds) {
            return SessionService.invoke({'/usergroupgrouprole/add-user-group-group-roles':{
                userGroupId:userGroupId // long
                ,groupId:groupId // long
                ,roleIds:roleIds // long[]
            }});
        };
        service.addUserGroupGroupRoles_1 = function(userGroupIds,groupId,roleId) {
            return SessionService.invoke({'/usergroupgrouprole/add-user-group-group-roles':{
                userGroupIds:userGroupIds // long[]
                ,groupId:groupId // long
                ,roleId:roleId // long
            }});
        };
        service.deleteUserGroupGroupRoles = function(userGroupId,groupId,roleIds) {
            return SessionService.invoke({'/usergroupgrouprole/delete-user-group-group-roles':{
                userGroupId:userGroupId // long
                ,groupId:groupId // long
                ,roleIds:roleIds // long[]
            }});
        };
        service.deleteUserGroupGroupRoles_1 = function(userGroupIds,groupId,roleId) {
            return SessionService.invoke({'/usergroupgrouprole/delete-user-group-group-roles':{
                userGroupIds:userGroupIds // long[]
                ,groupId:groupId // long
                ,roleId:roleId // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('UsergrouproleService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addUserGroupRoles = function(userId,groupId,roleIds) {
            return SessionService.invoke({'/usergrouprole/add-user-group-roles':{
                userId:userId // long
                ,groupId:groupId // long
                ,roleIds:roleIds // long[]
            }});
        };
        service.addUserGroupRoles_1 = function(userIds,groupId,roleId) {
            return SessionService.invoke({'/usergrouprole/add-user-group-roles':{
                userIds:userIds // long[]
                ,groupId:groupId // long
                ,roleId:roleId // long
            }});
        };
        service.deleteUserGroupRoles = function(userId,groupId,roleIds) {
            return SessionService.invoke({'/usergrouprole/delete-user-group-roles':{
                userId:userId // long
                ,groupId:groupId // long
                ,roleIds:roleIds // long[]
            }});
        };
        service.deleteUserGroupRoles_1 = function(userIds,groupId,roleId) {
            return SessionService.invoke({'/usergrouprole/delete-user-group-roles':{
                userIds:userIds // long[]
                ,groupId:groupId // long
                ,roleId:roleId // long
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('WebsiteService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addWebsite = function(className,classPK,url,typeId,primary) {
            return SessionService.invoke({'/website/add-website':{
                className:className // string
                ,classPK:classPK // long
                ,url:url // string
                ,typeId:typeId // int
                ,primary:primary // boolean
            }});
        };
        service.addWebsite_1 = function(className,classPK,url,typeId,primary,serviceContext) {
            return SessionService.invoke({'/website/add-website':{
                className:className // string
                ,classPK:classPK // long
                ,url:url // string
                ,typeId:typeId // int
                ,primary:primary // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteWebsite = function(websiteId) {
            return SessionService.invoke({'/website/delete-website':{
                websiteId:websiteId // long
            }});
        };
        service.getWebsite = function(websiteId) {
            return SessionService.invoke({'/website/get-website':{
                websiteId:websiteId // long
            }});
        };
        service.getWebsites = function(className,classPK) {
            return SessionService.invoke({'/website/get-websites':{
                className:className // string
                ,classPK:classPK // long
            }});
        };
        service.updateWebsite = function(websiteId,url,typeId,primary) {
            return SessionService.invoke({'/website/update-website':{
                websiteId:websiteId // long
                ,url:url // string
                ,typeId:typeId // int
                ,primary:primary // boolean
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('WikinodeService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addNode = function(name,description,serviceContext) {
            return SessionService.invoke({'/wikinode/add-node':{
                name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.deleteNode = function(nodeId) {
            return SessionService.invoke({'/wikinode/delete-node':{
                nodeId:nodeId // long
            }});
        };
        service.getNode = function(nodeId) {
            return SessionService.invoke({'/wikinode/get-node':{
                nodeId:nodeId // long
            }});
        };
        service.getNode_1 = function(groupId,name) {
            return SessionService.invoke({'/wikinode/get-node':{
                groupId:groupId // long
                ,name:name // string
            }});
        };
        service.getNodes = function(groupId) {
            return SessionService.invoke({'/wikinode/get-nodes':{
                groupId:groupId // long
            }});
        };
        service.getNodes_1 = function(groupId,status) {
            return SessionService.invoke({'/wikinode/get-nodes':{
                groupId:groupId // long
                ,status:status // int
            }});
        };
        service.getNodes_2 = function(groupId,start,end) {
            return SessionService.invoke({'/wikinode/get-nodes':{
                groupId:groupId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getNodes_3 = function(groupId,status,start,end) {
            return SessionService.invoke({'/wikinode/get-nodes':{
                groupId:groupId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getNodesCount = function(groupId) {
            return SessionService.invoke({'/wikinode/get-nodes-count':{
                groupId:groupId // long
            }});
        };
        service.getNodesCount_1 = function(groupId,status) {
            return SessionService.invoke({'/wikinode/get-nodes-count':{
                groupId:groupId // long
                ,status:status // int
            }});
        };
        service.moveNodeToTrash = function(nodeId) {
            return SessionService.invoke({'/wikinode/move-node-to-trash':{
                nodeId:nodeId // long
            }});
        };
        service.restoreNodeFromTrash = function(nodeId) {
            return SessionService.invoke({'/wikinode/restore-node-from-trash':{
                nodeId:nodeId // long
            }});
        };
        service.subscribeNode = function(nodeId) {
            return SessionService.invoke({'/wikinode/subscribe-node':{
                nodeId:nodeId // long
            }});
        };
        service.unsubscribeNode = function(nodeId) {
            return SessionService.invoke({'/wikinode/unsubscribe-node':{
                nodeId:nodeId // long
            }});
        };
        service.updateNode = function(nodeId,name,description,serviceContext) {
            return SessionService.invoke({'/wikinode/update-node':{
                nodeId:nodeId // long
                ,name:name // string
                ,description:description // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();
(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('WikipageService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addPage = function(nodeId,title,content,summary,minorEdit,serviceContext) {
            return SessionService.invoke({'/wikipage/add-page':{
                nodeId:nodeId // long
                ,title:title // string
                ,content:content // string
                ,summary:summary // string
                ,minorEdit:minorEdit // boolean
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addPage_1 = function(nodeId,title,content,summary,minorEdit,format,parentTitle,redirectTitle,serviceContext) {
            return SessionService.invoke({'/wikipage/add-page':{
                nodeId:nodeId // long
                ,title:title // string
                ,content:content // string
                ,summary:summary // string
                ,minorEdit:minorEdit // boolean
                ,format:format // string
                ,parentTitle:parentTitle // string
                ,redirectTitle:redirectTitle // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.addPageAttachment = function(nodeId,title,fileName,file,mimeType) {
            return SessionService.invoke({'/wikipage/add-page-attachment':{
                nodeId:nodeId // long
                ,title:title // string
                ,fileName:fileName // string
                ,file:file // object<java.io.File>
                ,mimeType:mimeType // string
            }});
        };
        service.addPageAttachments = function(nodeId,title,inputStreamOVPs) {
            return SessionService.invoke({'/wikipage/add-page-attachments':{
                nodeId:nodeId // long
                ,title:title // string
                ,inputStreamOVPs:inputStreamOVPs // list<object<com.liferay.portal.kernel.util.ObjectValuePair>>
            }});
        };
        service.changeParent = function(nodeId,title,newParentTitle,serviceContext) {
            return SessionService.invoke({'/wikipage/change-parent':{
                nodeId:nodeId // long
                ,title:title // string
                ,newParentTitle:newParentTitle // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.copyPageAttachments = function(templateNodeId,templateTitle,nodeId,title) {
            return SessionService.invoke({'/wikipage/copy-page-attachments':{
                templateNodeId:templateNodeId // long
                ,templateTitle:templateTitle // string
                ,nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.deletePage = function(nodeId,title) {
            return SessionService.invoke({'/wikipage/delete-page':{
                nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.deletePage_1 = function(nodeId,title,version) {
            return SessionService.invoke({'/wikipage/delete-page':{
                nodeId:nodeId // long
                ,title:title // string
                ,version:version // double
            }});
        };
        service.deletePageAttachment = function(nodeId,title,fileName) {
            return SessionService.invoke({'/wikipage/delete-page-attachment':{
                nodeId:nodeId // long
                ,title:title // string
                ,fileName:fileName // string
            }});
        };
        service.deletePageAttachments = function(nodeId,title) {
            return SessionService.invoke({'/wikipage/delete-page-attachments':{
                nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.deleteTempPageAttachment = function(nodeId,fileName,tempFolderName) {
            return SessionService.invoke({'/wikipage/delete-temp-page-attachment':{
                nodeId:nodeId // long
                ,fileName:fileName // string
                ,tempFolderName:tempFolderName // string
            }});
        };
        service.deleteTrashPageAttachments = function(nodeId,title) {
            return SessionService.invoke({'/wikipage/delete-trash-page-attachments':{
                nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.discardDraft = function(nodeId,title,version) {
            return SessionService.invoke({'/wikipage/discard-draft':{
                nodeId:nodeId // long
                ,title:title // string
                ,version:version // double
            }});
        };
        service.getChildren = function(groupId,nodeId,head,parentTitle) {
            return SessionService.invoke({'/wikipage/get-children':{
                groupId:groupId // long
                ,nodeId:nodeId // long
                ,head:head // boolean
                ,parentTitle:parentTitle // string
            }});
        };
        service.getDraftPage = function(nodeId,title) {
            return SessionService.invoke({'/wikipage/get-draft-page':{
                nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.getNodePages = function(nodeId,max) {
            return SessionService.invoke({'/wikipage/get-node-pages':{
                nodeId:nodeId // long
                ,max:max // int
            }});
        };
        service.getNodePagesRss = function(nodeId,max,type,version,displayStyle,feedURL,entryURL) {
            return SessionService.invoke({'/wikipage/get-node-pages-rss':{
                nodeId:nodeId // long
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
            }});
        };
        service.getNodePagesRss_1 = function(nodeId,max,type,version,displayStyle,feedURL,entryURL,attachmentURLPrefix) {
            return SessionService.invoke({'/wikipage/get-node-pages-rss':{
                nodeId:nodeId // long
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,attachmentURLPrefix:attachmentURLPrefix // string
            }});
        };
        service.getOrphans = function(groupId,nodeId) {
            return SessionService.invoke({'/wikipage/get-orphans':{
                groupId:groupId // long
                ,nodeId:nodeId // long
            }});
        };
        service.getPage = function(nodeId,title) {
            return SessionService.invoke({'/wikipage/get-page':{
                nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.getPage_1 = function(groupId,nodeId,title) {
            return SessionService.invoke({'/wikipage/get-page':{
                groupId:groupId // long
                ,nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.getPage_2 = function(nodeId,title,head) {
            return SessionService.invoke({'/wikipage/get-page':{
                nodeId:nodeId // long
                ,title:title // string
                ,head:head // object<java.lang.Boolean>
            }});
        };
        service.getPage_3 = function(nodeId,title,version) {
            return SessionService.invoke({'/wikipage/get-page':{
                nodeId:nodeId // long
                ,title:title // string
                ,version:version // double
            }});
        };
        service.getPages = function(groupId,userId,nodeId,status,start,end) {
            return SessionService.invoke({'/wikipage/get-pages':{
                groupId:groupId // long
                ,userId:userId // long
                ,nodeId:nodeId // long
                ,status:status // int
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getPages_1 = function(groupId,nodeId,head,status,start,end,obc) {
            return SessionService.invoke({'/wikipage/get-pages':{
                groupId:groupId // long
                ,nodeId:nodeId // long
                ,head:head // boolean
                ,status:status // int
                ,start:start // int
                ,end:end // int
                ,obc:obc // object<com.liferay.portal.kernel.util.OrderByComparator>
            }});
        };
        service.getPagesCount = function(groupId,nodeId,head) {
            return SessionService.invoke({'/wikipage/get-pages-count':{
                groupId:groupId // long
                ,nodeId:nodeId // long
                ,head:head // boolean
            }});
        };
        service.getPagesCount_1 = function(groupId,userId,nodeId,status) {
            return SessionService.invoke({'/wikipage/get-pages-count':{
                groupId:groupId // long
                ,userId:userId // long
                ,nodeId:nodeId // long
                ,status:status // int
            }});
        };
        service.getPagesRss = function(companyId,nodeId,title,max,type,version,displayStyle,feedURL,entryURL,locale) {
            return SessionService.invoke({'/wikipage/get-pages-rss':{
                companyId:companyId // long
                ,nodeId:nodeId // long
                ,title:title // string
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,locale:locale // string
            }});
        };
        service.getPagesRss_1 = function(companyId,nodeId,title,max,type,version,displayStyle,feedURL,entryURL,attachmentURLPrefix,locale) {
            return SessionService.invoke({'/wikipage/get-pages-rss':{
                companyId:companyId // long
                ,nodeId:nodeId // long
                ,title:title // string
                ,max:max // int
                ,type:type // string
                ,version:version // double
                ,displayStyle:displayStyle // string
                ,feedURL:feedURL // string
                ,entryURL:entryURL // string
                ,attachmentURLPrefix:attachmentURLPrefix // string
                ,locale:locale // string
            }});
        };
        service.getRecentChanges = function(groupId,nodeId,start,end) {
            return SessionService.invoke({'/wikipage/get-recent-changes':{
                groupId:groupId // long
                ,nodeId:nodeId // long
                ,start:start // int
                ,end:end // int
            }});
        };
        service.getRecentChangesCount = function(groupId,nodeId) {
            return SessionService.invoke({'/wikipage/get-recent-changes-count':{
                groupId:groupId // long
                ,nodeId:nodeId // long
            }});
        };
        service.getTempPageAttachmentNames = function(nodeId,tempFolderName) {
            return SessionService.invoke({'/wikipage/get-temp-page-attachment-names':{
                nodeId:nodeId // long
                ,tempFolderName:tempFolderName // string
            }});
        };
        service.movePage = function(nodeId,title,newTitle,serviceContext) {
            return SessionService.invoke({'/wikipage/move-page':{
                nodeId:nodeId // long
                ,title:title // string
                ,newTitle:newTitle // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.movePageAttachmentToTrash = function(nodeId,title,fileName) {
            return SessionService.invoke({'/wikipage/move-page-attachment-to-trash':{
                nodeId:nodeId // long
                ,title:title // string
                ,fileName:fileName // string
            }});
        };
        service.movePageToTrash = function(nodeId,title) {
            return SessionService.invoke({'/wikipage/move-page-to-trash':{
                nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.movePageToTrash_1 = function(nodeId,title,version) {
            return SessionService.invoke({'/wikipage/move-page-to-trash':{
                nodeId:nodeId // long
                ,title:title // string
                ,version:version // double
            }});
        };
        service.restorePageAttachmentFromTrash = function(nodeId,title,fileName) {
            return SessionService.invoke({'/wikipage/restore-page-attachment-from-trash':{
                nodeId:nodeId // long
                ,title:title // string
                ,fileName:fileName // string
            }});
        };
        service.restorePageFromTrash = function(resourcePrimKey) {
            return SessionService.invoke({'/wikipage/restore-page-from-trash':{
                resourcePrimKey:resourcePrimKey // long
            }});
        };
        service.revertPage = function(nodeId,title,version,serviceContext) {
            return SessionService.invoke({'/wikipage/revert-page':{
                nodeId:nodeId // long
                ,title:title // string
                ,version:version // double
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        service.subscribePage = function(nodeId,title) {
            return SessionService.invoke({'/wikipage/subscribe-page':{
                nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.unsubscribePage = function(nodeId,title) {
            return SessionService.invoke({'/wikipage/unsubscribe-page':{
                nodeId:nodeId // long
                ,title:title // string
            }});
        };
        service.updatePage = function(nodeId,title,version,content,summary,minorEdit,format,parentTitle,redirectTitle,serviceContext) {
            return SessionService.invoke({'/wikipage/update-page':{
                nodeId:nodeId // long
                ,title:title // string
                ,version:version // double
                ,content:content // string
                ,summary:summary // string
                ,minorEdit:minorEdit // boolean
                ,format:format // string
                ,parentTitle:parentTitle // string
                ,redirectTitle:redirectTitle // string
                ,serviceContext:serviceContext // object<com.liferay.portal.service.ServiceContext>
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();