MainApp.controller('ParamSlashesController', function ($scope, $route, $routeParams,$location) {
    $scope.helloParam = 'HI!!!';

console.log($location.path());
});