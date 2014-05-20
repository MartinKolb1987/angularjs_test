'use strict';

module.exports = function() {
	return {
		basePath: '../',
		frameworks: ['jasmine'],
		reporters: ['progress'],
		browsers: ['Chrome'],
		// browsers: ['Chrome', 'Safari', 'PhantomJS'],
		autoWatch: true,

		// these are default values anyway
		singleRun: false,
		colors: true,

		// list of files / patterns to load in the browser
		files: [
		    'app/bower_components/angular/angular.js',
		    'app/bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js',
		    'app/bower_components/angular-resource/angular-resource.js',
		    'app/bower_components/angular-cookies/angular-cookies.js',
		    'app/bower_components/angular-sanitize/angular-sanitize.js',
		    'app/bower_components/angular-route/angular-route.js',
		    'app/bower_components/angular-mocks/angular-mocks.js',
		    'app/scripts/app.js',
		    'app/scripts/controllers/customer.js',
		    'app/scripts/controllers/customer_add.js',
		    'app/scripts/services/customers.js',
		    'app/api/customers.json',
		    'app/index.html',
		    'app/views/customer.html',
		    'app/views/customer_add.html',
		    'app/views/main.html'
		]

	};
};
