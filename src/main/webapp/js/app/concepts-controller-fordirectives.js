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
	
}]);