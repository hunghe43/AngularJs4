var app = angular.module('app', []);

app.controller('controller', function ($scope,$http) {
    $http.get('').then(function (response) {
        $scope.employees = response.data;
    })
})