var conceptsSrvc = angular.module('concepts.services', []);

conceptsSrvc.service('sharedData', function() {
	return this;
});

conceptsSrvc.service('serviceAsPublicAPI', function() {
	
	this.exposePublicApi = function() {
		return 'value of serviceAsPublicAPI';
	};
	
	return this;
	
});

conceptsSrvc.factory('factoryAsPublicAPI', function() {
	
	function exposeDetails01() {
		return 'value of factoryAsPublicAPI01';
	}
	
	function exposeDetails02() {
		return  'value of factoryAsPublicAPI02';
	}
	
	return {
		exposePublicApi01 : exposeDetails01,
		exposePublicApi02 : exposeDetails02
	}
	
});


conceptsSrvc.factory('factoryAsConstructor', function() {
	
	var constr = function(arg1) {
		
		function getDetails() {
			return 'value of factoryAsConstructor' + arg1;
		}
		
		constr.prototype.exposeDetails01 = function() {
			return getDetails();
		}
		
		this.exposeDetails02 = function() {
			return getDetails();
		}
	}
	
	return constr;
});

