#Liferay Mobile SDK for AngularJS
![Liferay Mobile SDK logo](logo.png)

This is an implemenation of the [Liferay Mobile SDK](https://github.com/liferay/liferay-mobile-sdk) for any AngularJS based application.
It has been tested in Chrome, Firefox, Safari. It has also been tested in Cordova for Android, iOS and Mac OSX.

##Usage
To use this package as part of a front-end application simply add a bower dependency for liferay-mobile-sdk-angularjs.

    ```
        bower install --save-dev liferay-mobile-sdk-angularjs
    ```
    
If you require the generation of AngularJS services for custom services developed with the Liferay SDK, a nodejs module
has been developed to support creation of the AngularJS services.

    ```
        npm install --save-dev liferay-mobile-sdk-angularjs
    ```

### Signin to remote host
Currently this package supports basic authentication. The following is an example of how to do this in an Angular login controller.

    ```js          
        vm.login = function() {
           vm.authMsg = '';
        
           if(vm.loginForm.$valid) {
               SigninService
                   .signin({ authenticationType: SessionService.authenticationTypes.BASIC, credentials: {username: vm.account.email, password: vm.account.password}})
                   .then(function(response) {
                       $rootScope.user = response;
                       PortraitService.getPortraitUrlById(response.userId,response.portraitId,true).then(function(url) {
                          $rootScope.user.picture = url;
                          $state.go('app.dashboard');
                       });
                   }, function(err) {
                       vm.authMsg = 'Server Request Error';
                       console.log(err);
                   });
           }
           else {
             // set as dirty if the user click directly to login so we show the validation messages
             /*jshint -W106*/
             vm.loginForm.account_email.$dirty = true;
             vm.loginForm.account_password.$dirty = true;
           }
         };
    ```
    
In example above the SigninService is the included API for authentication from a single page application to a remote server.
It is not required to call this service if the current session on the remote server is already authenticated via another mechanism.

Another portion of the above example calls a service called PortraitSercvice. This is an angular service that uses 
existing functionality provided by the mobile sdk in conjunction with a custom service created for the applicaiton.

    ```js
        (function() {
            'use strict';
        
            angular
                .module('app.mobile.demo.v62')
                .factory('PortraitService', ['SessionService','$q','SecuremobileviewService', function (SessionService,$q,SecuremobileviewService) {
                    var service = {};
        
                    service.getPortraitUrlById = function(userId,id,male) {
                        return $q(function(resolve, reject) {
                            if(id===0) {
                                resolve(SessionService.getImageUrlPrefix()+'/user_'+(male?'male':'female')+'_portrait?img_id='+id);
                            } else {
                                SecuremobileviewService.getUserProfileImageUrlWithUserId(userId).then(function(resp) {
                                    resolve(SessionService.getImageUrlPrefix()+resp);
                                },function(err) {
                                    reject(err);
                                });
                            }
                        });
                    };
        
                    return service;
                }]);
        })();
    ```
The SecuremobileviewService is generated in the same manner as the provided Liferay services.
The gulpfile for the example application generates the AngularJS services using the following tasks.

     ```js
     var builder = require('liferay-mobile-sdk-angularjs')({
         server:'http://liferaydemo.xtivia.com',
         context:'mobile-demo-integration-portlet',
         moduleName: 'app.mobile.demo',
         root: paths.scripts + 'liferay'
     });
     
     gulp.task('clean-liferay',function() {
         return del(['./js/liferay/js/*.js','./js/liferay/json/*.json']);
     });
     
     gulp.task('builder-liferay',['clean-liferay'], function() {
         return builder.generate();
     });
     ```