﻿var app = angular.module('app', []);
//order
app.controller('controller', function ($scope) {
    var employees = [
        { name: 'hunga', birthday: new Date("01/29/1994"), salary: 1400000, gender: 'Male', status: true },
        { name: 'hunge', birthday: new Date("01/19/1994"), salary: 1500000, gender: 'Male', status: true },
        { name: 'hungr', birthday: new Date("01/9/1994"), salary: 120000, gender: 'Male', status: false },
        { name: 'hungq', birthday: new Date("01/5/1994"), salary: 1500000, gender: 'Male', status: true },
        { name: 'hungb', birthday: new Date("01/3/1994"), salary: 1700000, gender: 'Male', status: false },
        { name: 'hungg', birthday: new Date("01/23/1994"), salary: 8500000, gender: 'Male', status: true },
        { name: 'hungd', birthday: new Date("01/16/1994"), salary: 1000000, gender: 'Male', status: false },
        { name: 'hungf', birthday: new Date("01/22/1994"), salary: 1100000, gender: 'Male', status: true },
    ];
    $scope.employees = employees;
    $scope.sort = 'name';
    $scope.limitRow = 5;
});
app.filter('status', function () {
    return function (input) {
        if (input == true)
            return 'kích hoạt';
        else
            return 'khóa';
    }
});
//order when click header table

