var http = require('http-request');
var $q = require('q');
var fs = require('fs');
var mkdirp = require('mkdirp');
var classNames = require('./classnames.json');
var classNameEx = /^\/(\w*)\//;
var actionNameEx = /\/([\w*|-]*)$/;
var actionNameDashEx = /-(\w)/g;

function isUndefinedOrNull(obj) {
    return obj==null||obj==undefined;
}

function jsServiceName(action) {
    var name = null;
    var serviceName = action.path.match(classNameEx);
    if(serviceName) {
        if(serviceName instanceof Array&&serviceName.length>1) {
            serviceName = serviceName[serviceName.length-1];
        }
        name = classNames[name]||serviceName[0].toUpperCase()+serviceName.substring(1);
        name = name+'Service';
    }
    return name;
}

function jsMethodName(action) {
    var name = action.path.match(actionNameEx);
    if(name) {
        if(name instanceof Array&&name.length>1) {
            name = name[name.length-1];
        }
        name = name.replace(actionNameDashEx,function uppercase(s){
            return s[1].toUpperCase();
        });
    }
    return name;
}

module.exports = function(options) {
    options = options||{};
    options.server = options.server||'http://localhost:8080';
    options.root = options.root|| './angularjs';
    options.actionsDir = options.actionsDir||'/json';
    options.jsDir = options.jsDir||'/js';
    options.version = options.version||'62';

    return {
        options: options,
        discover:function() {
            var deferred = $q.defer();
            http.get({url:options.server+'/api/jsonws?discover=/*'},function(err,res) {
                if(err) {
                    return deferred.reject(err);
                }
                deferred.resolve(JSON.parse(isUndefinedOrNull(res.buffer)?{}:res.buffer.toString()));
            });
            return deferred.promise;
        },
        parseAll:function(actions) {
            var actionsDir = options.root+options.actionsDir;
            mkdirp.sync(actionsDir);
            var serviceMethods = {name:'',version:options.version,methods:[]};
            for(var i =0; i<actions.length;i++) {
                var action = actions[i];
                var serviceName = jsServiceName(action);
                if(serviceMethods.name !== serviceName) {
                    if(serviceMethods.methods.length>0) {
                        fs.writeFileSync(actionsDir+'/'+serviceMethods.name+'.json',JSON.stringify(serviceMethods));
                    }
                    serviceMethods = {name:serviceName,version:options.version,methods:[]};
                }
                serviceMethods.methods.push({
                    serviceName:serviceName,
                    method:action.method,
                    path:action.path,
                    parameters:action.parameters,
                    actionName:jsMethodName(action)
                });
            }
        }
    };
};