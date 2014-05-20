'use strict';

/**
 * Author: Martin Kolb
 */
angular
    .module('app', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                /**
                 * Define a single route.
                 * @method .when(route) 
                 * @param {String} route just add the correct route, don´t miss the slash at the beginning
                 * @example .when('/customers', {})
                 * <hr>
                 */
                .when('/customers', {
                    templateUrl: 'views/customer.html',
                    controller: 'CustomerCtrl',
                })
                .when('/customers/add', {
                    templateUrl: 'views/customer_add.html',
                    controller: 'CustomerAddCtrl',
                })
                .otherwise({
                    redirectTo: '/customers'
                });
        }

  ]).run(['CustomersService', function(CustomersService){
        /**
         * Initialize the CustomerService api request.
         * @method .initRequest() 
         * @example CustomersService.initRequest();
         * <hr>
         */
        CustomersService.initRequest();
    }]);
