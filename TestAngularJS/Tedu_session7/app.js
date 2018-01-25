var app = angular.module('app', []);
//click event
app.controller('controller', function ($scope) {
    var appLike = [
        { name: 'c#', like: 0, dusmun: 0, dislike: 0 },
        { name: '.net', like: 0, dusmun: 0, dislike: 0 },
        { name: 'java', like: 0, dusmun: 0, dislike: 0 },
        { name: 'cobol', like: 0, dusmun: 0, dislike: 0 },
        { name: 'php', like: 0, dusmun: 0, dislike: 0 },
    ];
    $scope.appLike = appLike;
    $scope.changeLike = function (app) {
        app.like++;
        app.dusmun = app.like - app.dislike;
    };
    $scope.changeDislike = function (app) {
        app.dislike++;
        app.dusmun = app.like - app.dislike;

    };
    
});
