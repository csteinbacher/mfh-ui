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
		};

	}).controller('SidebarController',function($scope){
		$scope.state=false;

		$scope.toggleState = function() {
	        $scope.state = !$scope.state;
	        console.log('foo');
	    };
});

angular.module('mfhUiApp').directive('sidebarDirective',function(){
	return {
        link : function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                  if(newVal)
                  {
                    element.addClass('show'); 
                    return;
                  }
                  element.removeClass('show');
            });
        }
    };

});


//var app = angular.module('mfhUiApp', []);

// mfhUiApp.controller('SidebarController', function($scope){
// 	$scope.state = false;
    
//     $scope.toggleState = function() {
//         $scope.state = !$scope.state;
//     };
// });

// mfhUiApp.directive('sidebarDirective', function() {
//     return {
//         link : function(scope, element, attr) {
//             scope.$watch(attr.sidebarDirective, function(newVal) {
//                   if(newVal)
//                   {
//                     element.addClass('show'); 
//                     return;
//                   }
//                   element.removeClass('show');
//             });
//         }
//     };
// });
