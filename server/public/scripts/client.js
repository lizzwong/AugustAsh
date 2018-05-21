const app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: '/views/home.html',
        controller: 'ProofController as vm'
    })
    .when('/topten', {
        templateUrl: '/views/topten.html',
        controller: 'ProofController as vm'
    })
    .when('/add', {
        templateUrl: '/views/addvideo.html',
        controller: 'ProofController as vm'
    }).otherwise({ redirectTo: '/home' });
});