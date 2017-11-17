angular.module('lbxApp')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.otherwise('/');
	
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('app', {
			url: '',
			abstract: true,
			views: {
				'': {
					templateUrl: '/src/views/main.html'
				},
				'menu@app': {
					templateUrl: '/src/views/menu/menu.html',
					controller: 'menuController'
				}
			}
		})
		.state('app.home', {
			url: '/',
			views: {
				'main@app': {
					templateUrl: '/src/views/home/home.html',
					controller: 'homeController'
				}
			}
		});
}]);