var app = angular.module('app', []);
app.controller('controller', function ($scope) {
    var employee = {
        name: 'hung',
        age: '14',
        adress:'ha noi'
    }
    $scope.employee = employee;
})