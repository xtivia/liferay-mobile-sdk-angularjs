(function() {
    'use strict';
    angular
    .module('.v62')
    .factory('CompanyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.deleteLogo = function(companyId) {
            return SessionService.invoke({'/company/delete-logo':{
                companyId:companyId
            }});
        };
        service.getCompanyById = function(companyId) {
            return SessionService.invoke({'/company/get-company-by-id':{
                companyId:companyId
            }});
        };
        service.getCompanyByLogoId = function(logoId) {
            return SessionService.invoke({'/company/get-company-by-logo-id':{
                logoId:logoId
            }});
        };
        service.getCompanyByMx = function(mx) {
            return SessionService.invoke({'/company/get-company-by-mx':{
                mx:mx
            }});
        };
        service.getCompanyByVirtualHost = function(virtualHost) {
            return SessionService.invoke({'/company/get-company-by-virtual-host':{
                virtualHost:virtualHost
            }});
        };
        service.getCompanyByWebId = function(webId) {
            return SessionService.invoke({'/company/get-company-by-web-id':{
                webId:webId
            }});
        };
        service.updateCompany = function(companyId,virtualHost,mx,homeURL,name,legalName,legalId,legalType,sicCode,tickerSymbol,industry,type,size) {
            return SessionService.invoke({'/company/update-company':{
                companyId:companyId
                ,virtualHost:virtualHost
                ,mx:mx
                ,homeURL:homeURL
                ,name:name
                ,legalName:legalName
                ,legalId:legalId
                ,legalType:legalType
                ,sicCode:sicCode
                ,tickerSymbol:tickerSymbol
                ,industry:industry
                ,type:type
                ,size:size
            }});
        };
        service.updateCompany = function(companyId,virtualHost,mx,maxUsers,active) {
            return SessionService.invoke({'/company/update-company':{
                companyId:companyId
                ,virtualHost:virtualHost
                ,mx:mx
                ,maxUsers:maxUsers
                ,active:active
            }});
        };
        service.updateDisplay = function(companyId,languageId,timeZoneId) {
            return SessionService.invoke({'/company/update-display':{
                companyId:companyId
                ,languageId:languageId
                ,timeZoneId:timeZoneId
            }});
        };
        service.updateLogo = function(companyId,bytes) {
            return SessionService.invoke({'/company/update-logo':{
                companyId:companyId
                ,bytes:bytes
            }});
        };
        
        // End generated service methods
        return service;
    }])
})();