var app = angular.module('app', []);
app.controller('controller', function ($scope) {
    $scope.name = "Hello Hùng!";
    $scope.sayHello=function(){
        $scope.name = 'Hệ thống ' + $scope.name;
    }
})
//demo rootScope
app.controller('controller_RootScope', function ($scope,$rootScope) {
    $rootScope.name="đây là rootScope!"
})