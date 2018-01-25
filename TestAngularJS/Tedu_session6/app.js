var app = angular.module('app', []);
//repeat
app.controller('controller', function ($scope) {
    var employees = [
        { name: 'hung', age: '13', adress: 'ha noi' },
        { name: 'hung', age: '13', adress: 'ha noi' },
        { name: 'hung', age: '16', adress: 'ha noi' },
        { name: 'hung', age: '13', adress: 'ha noi' }
    ];
    $scope.employees = employees;
});
//nested-repeat
app.controller('controller-nested', function ($scope) {
    var countries = [
        {
            name: 'VietNam',
            cities: [
                { name: 'ha noi' },
                { name: 'tp.hcm' },
                { name: 'da nang' },
            ]
        }, {
            name: 'VietNam',
            cities: [
                { name: 'ha noi' },
                { name: 'tp.hcm' },
                { name: 'da nang' },
            ]
        }, {
            name: 'VietNam',
            cities: [
                { name: 'ha noi' },
                { name: 'tp.hcm' },
                { name: 'da nang' },
            ]
        }, {
            name: 'VietNam',
            cities: [
                { name: 'ha noi' },
                { name: 'tp.hcm' },
                { name: 'da nang' },
            ]
        }, {
            name: 'VietNam',
            cities: [
                { name: 'ha noi' },
                { name: 'tp.hcm' },
                { name: 'da nang' },
            ]
        }
    ];
    $scope.countries = countries;
})