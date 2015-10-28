'use strict';

/*global describe: true, it: true, before: true, after: true*/

describe('Test build of services using Xtivia\'s Liferay Demo server',function() {
    describe('Discover and generate liferay and custom services',function() {
       it('should pass if server is available',function(done) {
           var builder = require('../../src/index')({server:'http://liferaydemo.xtivia.com',root:'./angularjs'});
           builder.generate().then(function(){ done();},function(err){done.fail(err)});
       });

    });
});