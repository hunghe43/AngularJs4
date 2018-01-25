var app = angular.module('app', []);
//repeat
app.controller('controller', function ($scope) {
    var employees = [
        { name: 'hung', birthday: new Date("01/29/1994"), salary: 1500000, gender: 'Male', status: true },
        { name: 'hung', birthday: new Date("01/29/1994"), salary: 1500000, gender: 'Male', status: true },
        { name: 'hung', birthday: new Date("01/29/1994"), salary: 1500000, gender: 'Male', status: false },
        { name: 'hung', birthday: new Date("01/29/1994"), salary: 1500000, gender: 'Male', status: true },
        { name: 'hung', birthday: new Date("01/29/1994"), salary: 1500000, gender: 'Male', status: false },
        { name: 'hung', birthday: new Date("01/29/1994"), salary: 1500000, gender: 'Male', status: true },
        { name: 'hung', birthday: new Date("01/29/1994"), salary: 1500000, gender: 'Male', status: false },
        { name: 'hung', birthday: new Date("01/29/1994"), salary: 1500000, gender: 'Male', status: true },
    ];
    $scope.employees = employees;
    
});
app.filter('status', function () {
    return function (input) {
        if (input == true)
            return 'kích hoạt';
        else
            return 'khóa';
    }
});
