'use strict';
/**
 * Main AngularJS Web Application
 */
var app = angular.module('bayoApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/main.html", controller: "repeatCtrl"})	
    .when("/privacy", {templateUrl: "partials/privacy.html", controller: "repeatCtrl"})
    .when("/terms", {templateUrl: "partials/terms.html", controller: "repeatCtrl"})
    // section1
    .when("/section1", {templateUrl: "partials/section1/section1_1.html", controller: "repeatCtrl"})
	.when("/section1/2", {templateUrl: "partials/section1/section1_2.html", controller: "repeatCtrl"})
	.when("/section1/3", {templateUrl: "partials/section1/section1_3.html", controller: "repeatCtrl"})
	// section2
    .when("/section2/", {templateUrl: "partials/section2/section2_1.html", controller: "repeatCtrl"})
	.when("/section2/2", {templateUrl: "partials/section2/section2_2.html", controller: "repeatCtrl"})
	.when("/section2/3", {templateUrl: "partials/section2/section2_3.html", controller: "repeatCtrl"})
	// section3
    .when("/section3", {templateUrl: "partials/section3/section3_1.html", controller: "repeatCtrl"})
	.when("/section3/2", {templateUrl: "partials/section3/section3_2.html", controller: "repeatCtrl"})
	.when("/section3/3", {templateUrl: "partials/section3/section3_3.html", controller: "repeatCtrl"})	
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);
/**
 * Controls the Sidebar
 */
app.controller('repeatCtrl', function($scope) {
	$scope.box1 = true;
	console.log("Repeat Controller reporting for duty.");
  
  $scope.section1 = [
    {name:'Section1 menu item 1', url:'#/section1/'},
    {name:'Section1 menu item 2', url:'#/section1/2'},
    {name:'Section1 menu item 3', url:'#/section1/3'}
  ];
  $scope.section2 = [
    {name:'Section2 menu item', url:'#/section2/',
		categories: [
			{name:'Section2 submenu item 1', url:'#/section2/2'},
			{name:'Section2 submenu item 2', url:'#/section2/3'}
		]
	}
  ];
  $scope.section3 = [
    {name:'Section3 menu item', url:'#/section3/',
		sections: [
			{name:'Section3 submenu item', url:'#/section3/2',
				categories: [
					{name:'Section3 sub-submenu item', url:'#/section3/3'}			
				]
			}
		]
	}
  ];
});
/**
 * Slidetoggle directive
 */
app.directive('slideToggle', function() {  
  return {
    restrict: 'A',      
    scope:{
      isOpen: "=slideToggle" // 'data-slide-toggle' in our html
    },  
    link: function(scope, element, attr) {
      var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;      
      
      // Watch for when the value bound to isOpen changes
      // When it changes trigger a slideToggle
      scope.$watch('isOpen', function(newIsOpenVal, oldIsOpenVal){
        if(newIsOpenVal !== oldIsOpenVal){ 
          element.stop().slideToggle(slideDuration);
        }
      });
      
    }
  };  
});

/**
 * Scrolls page to top on route change
 */
$rootScope.$on("$routeChangeSuccess", function(){
     window.scrollTo(0,0);
})