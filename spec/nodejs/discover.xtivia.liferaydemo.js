'use strict';

/*global describe: true, it: true, before: true, after: true*/

var builder = require('../../src/index')({server:'http://liferaydemo.xtivia.com'});
var config  = require('../../package.json');

describe('Test build of services using Xtivia\'s Liferay Demo server',function() {
    describe('Discover liferay and custom services',function() {
       it('should pass if server is available',function(done) {
          builder.discover().then(function(res) {
              expect(res).toEqual(jasmine.any(Object));
              expect(res.actions).toEqual(jasmine.any(Array));
              builder.parseAll(res.actions);
              done();
          }).catch(function(err){
              done.fail(err);
          });
       });

    });
});