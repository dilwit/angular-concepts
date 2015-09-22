var conceptsForServicesCtrl = angular.module('concepts.controller.forServices', []);

conceptsForServicesCtrl.controller('conceptsControllerForServices', ['$scope', 'serviceAsPublicAPI', 'factoryAsPublicAPI', 'factoryAsConstructor' , function($scope, serviceAsPublicAPI, factoryAsPublicAPI, factoryAsConstructor) {
	
	$scope.serviceAsPublicAPI = serviceAsPublicAPI.exposePublicApi();
	$scope.factoryAsPublicAPI = factoryAsPublicAPI.exposePublicApi01();
	
	var factoryAsConstructor = new factoryAsConstructor('xxx');
	$scope.factoryAsConstructor01 = factoryAsConstructor.exposeDetails01();
	$scope.factoryAsConstructor02 = factoryAsConstructor.exposeDetails02();
	
}]);