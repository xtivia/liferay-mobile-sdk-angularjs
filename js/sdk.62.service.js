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
        .factory('SessionService', ['Base64','$cookieStore','$http','$q',function(Base64,$cookieStore,$http,$q) {
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
                $cookieStore.put('globals', {
                    currentUser: {
                        username: username,
                        authdata: authdata
                    }
                });
            };

            service.clearCredentials = function () {
                $cookieStore.remove('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';
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

            return service;
        }]);
})();
