var app = angular.module('sqrdApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: "views/home.html",
        controller: 'sqrdCtrl'
    }).when('/directory', {
        templateUrl: "views/directory.html",
        controller: 'sqrdCtrl'
    }).otherwise({
        redirectTo: '/home'
    })
}]);


app.directive('randomSupe', [function() {


    return {
        restrict: 'E',
        scope: {
            supes: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        // transclude: 'true'
        // controller: function() {}
    };
}]);



app.controller('sqrdCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.removeSupe = function(supe) {
        // console.log(supe)
        var removedSupe = $scope.supes.indexOf(supe);
        // console.log(removedSupe);
        $scope.supes.splice(removedSupe, 1);
    }

    $scope.addSupe = function() {
        $scope.supes.push({
            name: $scope.sqrdCtrl.newsupe.name,
            belt: $scope.sqrdCtrl.newsupe.belt,
            rate: parseInt($scope.sqrdCtrl.newsupe.rate),
            available: true,
            thumb: "https://avatar.oxro.io/avatar?name=" + ($scope.sqrdCtrl.newsupe.name).toUpperCase()
        })

        $scope.sqrdCtrl.newsupe.name = $scope.sqrdCtrl.newsupe.belt = $scope.sqrdCtrl.newsupe.rate = ""
    };

    $http.get('data/heroes.json').then(
        function(response) {
            // console.log(data);
            $scope.supes = response.data;
            window.mydata = response.data;
            $scope.randNum = Math.floor((Math.random() * $scope.supes.length));
            // console.log("JSON")
            // console.log(data.data)
        },
        function(err) {
            console.log(err)
        });

    $scope.removeAll = function() {
        $scope.supes = [];
    }


    $scope.fname = 'Edith';
    // $scope.fnum =  ;
    $scope.squareNum = $scope.fnum * $scope.fnum;
    // $scope.supes = [
    //     {name: 'batman',
    //     belt: 'green',
    //     rate: 90,
    //     available: true,
    //     thumb: "https://avatar.oxro.io/avatar?name=" + 'bat man'}, 
    //     {name: 'ironman',
    //     belt: 'red',
    //     rate: 90,
    //     available: true,
    //     thumb: "https://avatar.oxro.io/avatar?name=" + 'Iron man'}, 
    //     {name: 'spiderman',
    //     belt: 'blue',
    //     rate: 850,
    //     available: true,
    //     thumb: "https://avatar.oxro.io/avatar?name=" + 'Spider Man'}, 
    //     {name: 'wonderwoman',
    //     belt: 'black',
    //     rate: 60,
    //     available: false,
    //     thumb: "https://avatar.oxro.io/avatar?name=" + 'Wonder Woman'}];

    // console.log($scope.squareNum);
    // console.log($scope.fnum);
    // console.log('ARR');
    // console.log($scope.supes);
    // console.log(angular.toJson($scope.supes));
    // console.log($scope.fname);

    $scope.sqrFun = function() {
        $scope.squareNum = $scope.fnum * $scope.fnum;
    };
    // let nums = [1,2,3,4,5];
}]);

window.rem = function(ctrlName) {
    // <html ng-app = "sqrdApp" >
    var sel = this.document.getElementById('htmlelem');
    console.log(sel)
    console.log(angular.element(sel).scope())
    return angular.element(sel).scope();
}
window.s = window.rem('');
console.log("Hi!")

// app.directive("w3TestDirective", function() {
//     return {
//       num : "<h1>Made by a directive!</h1>"
//     };
// });