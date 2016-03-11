'use strict';

/**
 * @ngdoc function
 * @name mfhUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mfhUiApp
 */
angular.module('mfhUiApp')
	.controller('MainCtrl', function ($scope) {
		$scope.todos = ['item1','item2','item3','item4','item5'];

		$scope.addTodo = function () {
			$scope.todos.push($scope.todo);
			$scope.todo = '';
		};

		$scope.removeTodo = function (index){
			$scope.todos.splice(index, 1);
		}


  });
