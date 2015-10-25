(function() {
    'use strict';
    angular
    .module('mobile.sdk.v62')
    .factory('PasswordpolicyService', ['SessionService', function (SessionService) {
        var service = {};
        // Begin generated service methods
        service.addPasswordPolicy = function(name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge) {
            return service.invoke('/passwordpolicy/add-password-policy',[{
                name:name
                ,description:description
                ,changeable:changeable
                ,changeRequired:changeRequired
                ,minAge:minAge
                ,checkSyntax:checkSyntax
                ,allowDictionaryWords:allowDictionaryWords
                ,minAlphanumeric:minAlphanumeric
                ,minLength:minLength
                ,minLowerCase:minLowerCase
                ,minNumbers:minNumbers
                ,minSymbols:minSymbols
                ,minUpperCase:minUpperCase
                ,history:history
                ,historyCount:historyCount
                ,expireable:expireable
                ,maxAge:maxAge
                ,warningTime:warningTime
                ,graceLimit:graceLimit
                ,lockout:lockout
                ,maxFailure:maxFailure
                ,lockoutDuration:lockoutDuration
                ,resetFailureCount:resetFailureCount
                ,resetTicketMaxAge:resetTicketMaxAge
            }]);
        };
        service.addPasswordPolicy = function(name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,regex,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge,serviceContext) {
            return service.invoke('/passwordpolicy/add-password-policy',[{
                name:name
                ,description:description
                ,changeable:changeable
                ,changeRequired:changeRequired
                ,minAge:minAge
                ,checkSyntax:checkSyntax
                ,allowDictionaryWords:allowDictionaryWords
                ,minAlphanumeric:minAlphanumeric
                ,minLength:minLength
                ,minLowerCase:minLowerCase
                ,minNumbers:minNumbers
                ,minSymbols:minSymbols
                ,minUpperCase:minUpperCase
                ,regex:regex
                ,history:history
                ,historyCount:historyCount
                ,expireable:expireable
                ,maxAge:maxAge
                ,warningTime:warningTime
                ,graceLimit:graceLimit
                ,lockout:lockout
                ,maxFailure:maxFailure
                ,lockoutDuration:lockoutDuration
                ,resetFailureCount:resetFailureCount
                ,resetTicketMaxAge:resetTicketMaxAge
                ,serviceContext:serviceContext
            }]);
        };
        service.deletePasswordPolicy = function(passwordPolicyId) {
            return service.invoke('/passwordpolicy/delete-password-policy',[{
                passwordPolicyId:passwordPolicyId
            }]);
        };
        service.updatePasswordPolicy = function(passwordPolicyId,name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge) {
            return service.invoke('/passwordpolicy/update-password-policy',[{
                passwordPolicyId:passwordPolicyId
                ,name:name
                ,description:description
                ,changeable:changeable
                ,changeRequired:changeRequired
                ,minAge:minAge
                ,checkSyntax:checkSyntax
                ,allowDictionaryWords:allowDictionaryWords
                ,minAlphanumeric:minAlphanumeric
                ,minLength:minLength
                ,minLowerCase:minLowerCase
                ,minNumbers:minNumbers
                ,minSymbols:minSymbols
                ,minUpperCase:minUpperCase
                ,history:history
                ,historyCount:historyCount
                ,expireable:expireable
                ,maxAge:maxAge
                ,warningTime:warningTime
                ,graceLimit:graceLimit
                ,lockout:lockout
                ,maxFailure:maxFailure
                ,lockoutDuration:lockoutDuration
                ,resetFailureCount:resetFailureCount
                ,resetTicketMaxAge:resetTicketMaxAge
            }]);
        };
        service.updatePasswordPolicy = function(passwordPolicyId,name,description,changeable,changeRequired,minAge,checkSyntax,allowDictionaryWords,minAlphanumeric,minLength,minLowerCase,minNumbers,minSymbols,minUpperCase,regex,history,historyCount,expireable,maxAge,warningTime,graceLimit,lockout,maxFailure,lockoutDuration,resetFailureCount,resetTicketMaxAge,serviceContext) {
            return service.invoke('/passwordpolicy/update-password-policy',[{
                passwordPolicyId:passwordPolicyId
                ,name:name
                ,description:description
                ,changeable:changeable
                ,changeRequired:changeRequired
                ,minAge:minAge
                ,checkSyntax:checkSyntax
                ,allowDictionaryWords:allowDictionaryWords
                ,minAlphanumeric:minAlphanumeric
                ,minLength:minLength
                ,minLowerCase:minLowerCase
                ,minNumbers:minNumbers
                ,minSymbols:minSymbols
                ,minUpperCase:minUpperCase
                ,regex:regex
                ,history:history
                ,historyCount:historyCount
                ,expireable:expireable
                ,maxAge:maxAge
                ,warningTime:warningTime
                ,graceLimit:graceLimit
                ,lockout:lockout
                ,maxFailure:maxFailure
                ,lockoutDuration:lockoutDuration
                ,resetFailureCount:resetFailureCount
                ,resetTicketMaxAge:resetTicketMaxAge
                ,serviceContext:serviceContext
            }]);
        };
        
        // End generated service methods
        return service;
    }])
});