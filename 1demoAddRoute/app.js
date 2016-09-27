var MainApp = angular.module('mainModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './home/home.html',
                controller: 'HomeController'
            });
    })
    .controller('MainController', function () {

    })
;