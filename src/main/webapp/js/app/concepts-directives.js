/*
 * References:
 * http://www.sitepoint.com/practical-guide-angularjs-directives/
 * http://tutorials.jenkov.com/angularjs/custom-directives.html
 * http://stackoverflow.com/questions/20018507/angularjs-what-is-the-need-of-the-directives-link-function-when-we-already-had
 * http://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives/
 */

var conceptsDir = angular.module('concepts.directives', []);

/**
 * <h3>Template expanding directives</h3>
 */
conceptsDir.directive('showDetails', function() {
	return {
		restrict: 'E',
		scope: {
			detailObj: '=detail'
		},
		templateUrl: 'showDetails.html'
	}
});


/**
 * <h3>DOM manipulating directives with compile()</h3>
	<p>
		Compile() function modifies dom element where directive is attached. Ant it is called only once and return link()
		Scope is not available to compile(), because this runs before angular create an object of dom element.
	</p>
 */
conceptsDir.directive('addBorder', function() {
	return {
		restrict: 'A',
		compile: function(element, attrs) {
			element.css("border", "5px solid #cccccc");
		}
	};
});

conceptsDir.directive('showAge', function(){
	return {
		restrict: 'A',
		templateUrl: 'showAge.html'
	}
});


/**
 * <h3>DOM manipulating directives with link()</h3>
	<p>
		Link() function modifies dom element which directive is attached. And it is called each time when data is changed
		Scope is injected into directive
	</p>
	
	<p>Advance directive with custom parser<p>
 */
conceptsDir.directive('capitalize', function($parse) {	
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, modelCtrl) {			
			
			var capitalize = function(inputValue) {				
				if(inputValue) {
					
					var capitalizedValue = inputValue.toUpperCase();
					
					// set value to view.
					modelCtrl.$setViewValue(capitalizedValue);
					modelCtrl.$render();
					
					// return value back to ngModelCtrl.
					return capitalizedValue; 
				}
				
				return null;
	        }
			
			// add new custom parser into ngModelCtrl.
	        modelCtrl.$parsers.push(capitalize);
	        capitalize($parse(attrs.ngModel)(scope));
		}
	};
});


