MainApp.controller('HomeController', function ($scope, $route) {
    $scope.helloParam = 'HI!!!';
    $scope.hello2Param = $route.current.locals.message;
});