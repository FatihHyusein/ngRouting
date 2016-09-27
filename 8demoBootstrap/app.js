var MainApp = angular.module('mainModule', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: './home/home.html',
                    controller: 'HomeController'
                })
                .when('/simple/:simpleParam', {
                    templateUrl: './paramSimple/paramSimple.html',
                    controller: 'ParamSimpleController'
                })
                .when('/slashes/:slashesParam*', {
                    templateUrl: './paramSlashes/paramSlashes.html',
                    controller: 'ParamSlashesController'
                })
                .when('/optional/:optionalParam?', {
                    templateUrl: './paramOptional/paramOptional.html',
                    controller: 'ParamOptionalController'
                })
                // .otherwise('/')

                .otherwise({
                    template: '<h1>Not found</h1><h2>{{message}}</h2>',
                    controller: function ($scope) {
                        $scope.message = 'not found page is shown'
                    }
                })
            ;
        })
        .controller('MainController', function ($scope, $location) {

            $scope.navigateToSimple = function () {
                $location.path('simple/567');
            }
        })
        .controller('CollapseDemoCtrl', function ($scope) {
            $scope.isNavCollapsed = true;
            $scope.isCollapsed = false;
            $scope.isCollapsedHorizontal = false;
        })
    ;