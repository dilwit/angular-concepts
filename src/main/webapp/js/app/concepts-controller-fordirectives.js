var conceptsForDirectivesCtrl = angular.module('concepts.controller.forDirectives', []);

conceptsForDirectivesCtrl.controller('conceptsControllerForDirectives',['$scope', function($scope) {
	
	$scope.teacher = {	
			name:"John Teacher",
			street:"Oslo West 16",
			phone:"555 1234567"
	};
	
	$scope.student = {
			name:"Tommy Student",
			street:"Berwick West 16",
			phone:"777 1234567"
	};
	
	$scope.user = {
		firstName: "Brian",
		lastName: "Holliday"
	};
	
	$scope.selectedMainOpt = null;
	$scope.mainOptions = [
						{display:'ding', value: '1'},
						{display:'dong', value: '2'}
						];
	
	$scope.subOptionsDing = [
	                  	{display:'ding1', value: '1'},
	                  	{display:'ding2', value: '3'},
	                  	{display:'ding3', value: '5'}
	                  	];	
	
	$scope.subOptionsDong = [
		                  	{display:'dong1', value: '2'},
		                  	{display:'dong2', value: '4'},
		                  	{display:'dong3', value: '6'}
		                  	];
	
	$scope.subOptions = null;
	
	
}]);