var app = angular.module('sqrdApp', []);
            app.controller('sqrdCtrl', ['$scope', function($scope) {
                $scope.fname ='Edith';
                // $scope.fnum =  ;
                $scope.squareNum = $scope.fnum * $scope.fnum;
                $scope.supes = [
                    {name: 'batman',
                    belt: 'green',
                    rate: 90,
                    available: true}, 
                    {name: 'ironman',
                    belt: 'red',
                    rate: 90,
                    available: true}, 
                    {name: 'spiderman',
                    belt: 'blue',
                    rate: 850,
                    available: true}, 
                    {name: 'wonderwoman',
                    belt: 'black',
                    rate: 60,
                    available: false}];

                // console.log($scope.squareNum);
                console.log($scope.fnum);
                console.log($scope.fname);

                $scope.sqrFun = function () {
                    $scope.squareNum = $scope.fnum * $scope.fnum;
                };
                // let nums = [1,2,3,4,5];
            }]);

            // app.directive("w3TestDirective", function() {
            //     return {
            //       num : "<h1>Made by a directive!</h1>"
            //     };
            // });