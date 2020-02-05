var app = angular.module('sqrdApp', []);
            app.controller('sqrdCtrl', ['$scope', function($scope) {

                $scope.removeSupe = function(supe) {
                    // console.log(supe)
                    var removedSupe = $scope.supes.indexOf(supe);
                    // console.log(removedSupe);
                    $scope.supes.splice(removedSupe, 1);
                }

                $scope.addSupe = function() {
                    $scope.supes.push({
                        name: $scope.newsupe.name,
                        belt: $scope.newsupe.belt,
                        rate: parseInt ($scope.newsupe.rate),
                        available: true,
                        thumb: "http://placehold.it/50x50/666666/ffffff"
                    })

                    $scope.newsupe.name =  $scope.newsupe.belt = $scope.newsupe.rate = ""
                }



                $scope.fname ='Edith';
                // $scope.fnum =  ;
                $scope.squareNum = $scope.fnum * $scope.fnum;
                $scope.supes = [
                    {name: 'batman',
                    belt: 'green',
                    rate: 90,
                    available: true,
                    thumb: "http://placehold.it/50x50/666666/ffffff"}, 
                    {name: 'ironman',
                    belt: 'red',
                    rate: 90,
                    available: true,
                    thumb: "http://placehold.it/50x50/666666/ffffff"}, 
                    {name: 'spiderman',
                    belt: 'blue',
                    rate: 850,
                    available: true,
                    thumb: "http://placehold.it/50x50/666666/ffffff"}, 
                    {name: 'wonderwoman',
                    belt: 'black',
                    rate: 60,
                    available: false,
                    thumb: "http://placehold.it/50x50/666666/ffffff"}];

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