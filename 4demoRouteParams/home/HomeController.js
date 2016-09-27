MainApp.controller('HomeController', function ($scope, $route) {
    $scope.helloParam = 'HI!!!';

    console.log('instantiated HomeController');

    $scope.reloadState = function () {
        $route.reload();
    }
});