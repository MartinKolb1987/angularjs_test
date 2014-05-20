'use strict';

/**
 * Author: Martin Kolb
 */
angular.module('app')
	.controller('CustomerAddCtrl', ['$scope', 'CustomersService', function ($scope, CustomersService){
		/**
		 * Add a customer. The $scope data is collected and pass through to the service provider CustomersService.
		 * @method addItem()
		 * @example $scope.addItem = function(){... CustomersService.add(data) ...};
		 * <hr>
		 */
		$scope.addItem = function(){
			var data = {
				'companyName': $scope.companyName,
				'postcode': $scope.postcode,
				'place': $scope.place
			};

			// add new item <hr>
			CustomersService.add(data);

			// clear input fields <hr>
			$scope.companyName = '';
			$scope.postcode = '';
			$scope.place = '';

			// show success message <hr>
			$scope.message = 'Kunde wurde erfolgreich angelegt';

		};
	}
	]);
