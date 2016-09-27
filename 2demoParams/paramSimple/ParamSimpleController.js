MainApp.controller('ParamSimpleController', function ($scope, $route, $routeParams,$location) {
    $scope.helloParam = 'HI!!!';

console.log($location.path());
});