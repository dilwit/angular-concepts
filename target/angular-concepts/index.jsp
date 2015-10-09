<html>

<script type="text/javascript" src="./js/public/angular-1.4.min.js"></script>
<script type="text/javascript" src="./js/public/angular-resource-1.4.js"></script>
<script type="text/javascript" src="./js/public/angular-route-1.4.min.js"></script>
<script type="text/javascript" src="./js/public/jquery-2.1.4.min.js"></script>

<script type="text/javascript" src="./js/app/concepts-app.js"></script>
<script type="text/javascript" src="./js/app/concepts-controller-forbackend.js"></script>
<script type="text/javascript" src="./js/app/concepts-controller-fordata.js"></script>
<script type="text/javascript" src="./js/app/concepts-controller-fordirectives.js"></script>
<script type="text/javascript" src="./js/app/concepts-controller-forservices.js"></script>
<script type="text/javascript" src="./js/app/concepts-controller-forshareddata.js"></script>
<script type="text/javascript" src="./js/app/concepts-directives.js"></script>
<script type="text/javascript" src="./js/app/concepts-services.js"></script>
<script type="text/javascript" src="./js/app/concepts-constants.js"></script>

<body ng-app="conceptsApp">
<h2>Angular concepts</h2>

<div ng-controller="conceptsControllerForData">
	
	<h3>Shared data among multiple controllers</h3>
	<span>{{sd.commonPurpose}}</span>
	<br>
	
	<h3>Model</h3>
	
	<h3>Constants</h3>
</div>

<span>=====================</span>	
<br><br><br>

<div ng-controller="conceptsControllerForSharedData">
	
	<h3>Shared data among multiple controllers</h3>
	<span>{{sd.commonPurpose}}</span>

</div>

<span>=====================</span>
<br><br><br>

<div ng-controller="conceptsControllerForDirectives">
	
	<h3>Template expanding directives</h3>
	<p>
		Purpose of 
			@ (directive attr(parent) to isolate - one way binding),		 	
		 	& (isolate to parent) one way binding,
		 	= (two way binding, combination of @ and &)
	<p>
	<label>Value in the model: {{student}}</label><br>
	<br>
	<show-details detail="student"></show-details>
	<br>
	<label>Value in the model: {{teacher}}</label><br>
	<br>
	<show-details detail="teacher"></show-details>
	<br>
	
	
	<h3>DOM manipulating directives with compile()</h3>
	<p>
		Compile() function modifies dom element where directive is attached. Ant it is called only once and return link()
		Scope is NOT available to compile()
	</p>
	<input type="text" ng-model="user.firstName" add-border/><br>
	<label>Value in the model: {{user.firstName}}</label><br>
	<br>
	
	<h3>DOM manipulating directives with link()</h3>
	<p>
		Link() function modifies dom element which directive is attached. And it is called each time when data is changed
		Scope is injected into directive
	</p>
	<br>
	
	<p>Simple directive<p>
	<input type="text" ng-model="user.age" /><br>
	<label>Value in the model: {{user.age}}</label>
	Value in the showAgeDirective: <label show-age></label><br>
	<br>
	
	<p>Advance directive with custom parser<p>
	<input type="text" ng-model="user.lastName" capitalize-by-parser/><br>
	<label>Value in the model: {{user.lastName}}</label><br>
	<br>
	<p>Advance directive with custom formatter<p>
	<input type="button" value="set pet name" ng-click="user.petName = 'donkey kong'"/> - <label>Value in the model: {{user.petName}}</label><br>
	<input type="text" ng-model="user.petName" capitalize-by-formatter/><br>	
	<br>
	
	<h3>Element wrapping directives</h3>
	<p>
		WITH OUT  transclude
	</p>
	<br>
	<p>
		transclude is used to allow directive to access outer scope instead of isolate scope.
		Even if isolated scope is created, it will be omitted
	</p>
	<br>
	<h3>Event listening directives</h3>
	
	<select ng-options="opt.display for opt in mainOptions" ng-model="selectedMainOpt" populate-sub-options></select>
	
	<select ng-options="subOpt.display for subOpt in subOptions" ng-model="selectedSubOpt"></select>
	{{selectedMainOpt}} - {{selectedSubOpt}}
	<h3>Communicating directives</h3>
	<p>
		It makes sense to use controller instead of link within directive, if you need to expose API to other directives.
		And also, when injecting other controller into directive use ^ (if need to look for whole controller instead of controller of current element)
	</p>	

</div>

<span>=====================</span>
<br><br><br>

<div ng-controller="conceptsControllerForBackEnd">

	<h3>Calling back-end ($http)</h3>
	
	<h3>Calling back-end ($ng-Resource)</h3>
</div>


<span>=====================</span>
<br><br><br>

<div ng-controller="conceptsControllerForServices">

Service as publicApi: {{serviceAsPublicAPI}}
<br>
Factory as publicApi: {{factoryAsPublicAPI}}
<br>
Factory as constructor: {{factoryAsConstructor01}} {{factoryAsConstructor02}}
</div>
</body>
</html>
