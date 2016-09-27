var MainApp = angular.module('mainModule', ['ngRoute'])
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

            ;
        })
        .run(function ($rootScope) {
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                console.log('Started Rounting from: \n' + current + ' \nto: \n' + next);
                console.log(next)
            });

            $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                console.info('Routing finished successfully from: \n' + current + ' \nto: \n' + next);
            });

            $rootScope.$on('$routeChangeError', function (event, next, current) {
                console.error('Routing failed from: \n' + current + ' \nto: \n' + next);
            });
        })
        .controller('MainController', function ($scope, $location) {

            $scope.navigateToSimple = function () {
                $location.path('simple/567');
            }
        })
    ;