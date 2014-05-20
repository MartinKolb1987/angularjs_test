'use strict';

var sharedConfig = require('./karma-shared.conf');
module.exports = function(config) {
    var conf = sharedConfig();

    conf.files = [
        './test/e2e/**/*.js'
    ];

	conf.frameworks = ['ng-scenario'];
	conf.proxies =  {
	    '/': 'http://localhost:9000' // must be the same address where the webapp runs
	};

	conf.urlRoot = '/e2e/';
    config.set(conf);
};