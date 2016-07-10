var app=angular.module('myApp',['ui.router']);

//路由 compose  check  addr
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('compose',{
		url:'/compose',
		templateUrl:'pages/compose.html'
	}).state('check',{
		url:'/check',
		templateUrl:'pages/check.html'
	}).state('addr',{
		url:'/addr',
		templateUrl:'pages/addr.html'
	}).state('home',{
		url:'/home',
		templateUrl:'pages/home.html'
		
	})
	$urlRouterProvider.otherwise('/home');
});