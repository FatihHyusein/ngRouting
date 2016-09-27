MainApp.controller('ParamOptionalController', function ($scope, $route, $routeParams, $location) {
    $scope.optionalParam = $routeParams.optionalParam;

    $scope.helloFromJSON = $route.current.locals.helloFromJSON;
});