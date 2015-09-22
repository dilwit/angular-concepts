var conceptsForDataCtrl = angular.module('concepts.controller.forData', []);

conceptsForDataCtrl.controller('conceptsControllerForData',['$scope', 'sharedData', function($scope, sharedData){
	
	$scope.sd = sharedData;
	
}]);