angular.module('MyApp', [])




    .controller("DBController",function ($scope, dataService){
        /**
         * Created by bryanreed on 3/5/14.
         */
        $scope.newUser = {};

        $scope.employees = dataService.employees;


        $scope.addEmployee = function(){

            dataService.addName(angular.copy($scope.newUser));

            $scope.newUser = {};


        }

        $scope.deleteEmployee = function(employee){

            dataService.removeName(employee);
        };
    });