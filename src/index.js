var http = require('http-request');
var $q = require('q');
var fs = require('fs');
var mkdirp = require('mkdirp');
var classNames = require('./classnames.json');
var classNameEx = /^\/(\w*)\//;
var actionNameEx = /\/([\w*|-]*)$/;
var actionNameDashEx = /-(\w)/g;
var gulp = require('gulp');
var wrap = require('gulp-wrap');
var rename = require("gulp-rename");


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

function Builder(options) {
    this.options = options||{};
    this.options.server = this.options.server||'http://localhost:8080';
    this.options.root = this.options.root|| './angularjs';
    this.options.actionsDir = this.options.actionsDir||'/json';
    this.options.jsDir = this.options.jsDir||'/js';
    this.options.version = this.options.version||'62';
    this.options.templatesDir = this.options.templatesDir||'./templates';

}

Builder.prototype.discover = function() {
    var deferred = $q.defer();
    http.get({url:this.options.server+'/api/jsonws?discover=/*'},function(err,res) {
        if(err) {
            return deferred.reject(err);
        }
        deferred.resolve(JSON.parse(isUndefinedOrNull(res.buffer)?{}:res.buffer.toString()));
    });
    return deferred.promise;
};

Builder.prototype.parseAll = function(actions) {
    var self = this;
    var actionsDir = self.options.root+self.options.actionsDir;
    mkdirp.sync(actionsDir);
    var serviceMethods = {name:'',version:self.options.version,methods:[]};
    for(var i =0; i<actions.length;i++) {
        var action = actions[i];
        var serviceName = jsServiceName(action);
        if(serviceMethods.name !== serviceName) {
            if(serviceMethods.methods.length>0) {
                fs.writeFileSync(actionsDir+'/'+serviceMethods.name+'.json',JSON.stringify(serviceMethods));
            }
            serviceMethods = {name:serviceName,version:self.options.version,methods:[]};
        }
        serviceMethods.methods.push({
            serviceName:serviceName,
            method:action.method,
            path:action.path,
            parameters:action.parameters,
            actionName:jsMethodName(action)
        });
    }
};

Builder.prototype.generate = function() {
    var self = this;
    var deferred = $q.defer();
    self.discover().then(function(res){
        self.parseAll(res.actions);
        gulp.src(self.options.root+self.options.actionsDir+'/*.json')
            .pipe(wrap({src:self.options.templatesDir+'/service.txt'},null,{options:{engine:'handlebars'}}))
            .pipe(rename(function(path) {
                path.extname = '.js';
            }))
            .pipe(gulp.dest(self.options.root+self.options.jsDir));
        deferred.resolve();
    },function(err) {
        deferred.reject(err);
    });
    return deferred.promise;
};

module.exports = function(options) {
    return new Builder(options);
};