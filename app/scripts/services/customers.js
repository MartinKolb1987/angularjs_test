'use strict';

/**
 * Author: Martin Kolb
 */
angular
	.module('app')
	.service('CustomersService', ['$q', '$http', function($q, $http){

			var deferred = $q.defer();

			return {
				customers: [],

				/**
				 * It´s the initial api request. If the request succeeded a deferred.resolve event is triggert.
				 * @method initRequest() 
				 * @example CustomerService.initRequest();
				 * <hr>
				 */
				initRequest: function(){
					var that = this;
					$http.get('api/customers.json')
						.success(function(response){
							that.customers = response;
							deferred.resolve(response);
						});
				},
				/**
				 * Get all customers.
				 * @method getAll() 
				 * @return {Array}
				 * @example CustomersService.getAll();
				 * <hr>
				 */
				getAll: function(){
					return deferred.promise;
				},

				/**
				 * Add a customer.
				 * @method add(item)
				 * @param {JSON} item JSON string: {'companyName': 'Mustermann'}
				 * @example CustomersService.add(Object);
				 * <hr>
				 */
				add: function(item){
					this.customers.push(item);
				},

				/**
				 * Delete a customer.
				 * @method delete()
				 * @param {Integer} index 
				 * @example CustomersService.delete(index);
				 * <hr>
				 */
				delete: function(index){
					this.customers.splice(index,1);
				}

			};

		}
	]);