'use strict';

/**
 * Author: Martin Kolb
 */
angular.module('app')
	.controller('CustomerCtrl', ['$scope', 'CustomersService', function ($scope, CustomersService){

		/**
		 * Get all customers. The $scope.customers get the fetched data from the service provider CustomersService 
		 * and pass it through the $scope.
		 * @method getAll()
		 * @example var customers = CustomersService.getAll();
		 * <hr>
		 */
		var customers = CustomersService.getAll();
		customers.then(function(data) {
			$scope.customers = data;
		});

		/**
		 * Delete a customer. Get the item which should be deleted. 
		 * After that pass it through to the service provider CustomersService.delete() function.
		 * @method deleteItem(index)
		 * @param {Integer} index 
		 * @example $scope.deleteItem = function(index){... CustomersService.delete(index) ...};
		 * <hr>
		 */
		$scope.deleteItem = function(index){
			CustomersService.delete(index);
		};

	}
	]);
