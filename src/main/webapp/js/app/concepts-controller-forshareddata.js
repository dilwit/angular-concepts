var conceptsForSharedDataCtrl = angular.module('concepts.controller.forSharedData', []);

conceptsForSharedDataCtrl.controller('conceptsControllerForSharedData',['$scope', 'sharedData', function($scope, sharedData){
	
	$scope.sd = sharedData;
	$scope.sd.commonPurpose = 'shared data object';
	
}]);