/**
 * Created by bryanreed on 3/13/14.
 */

angular.module("MyApp").service("dataService", function(){
//    localStorage.clear();
    var _employees = JSON.parse(localStorage.getItem("NameLS")) || []

    this.employees = _employees;

    this.addName = function(newEmployee){

        newEmployee.id = _employees.length + 1;

        _employees.push(newEmployee)


        var str = JSON.stringify(_employees);
        localStorage.setItem("NameLS", str);
    }

    this.removeName = function(employee){
        _employees.splice(_employees.indexOf(employee),1);
        var str = JSON.stringify(_employees);
        localStorage.setItem("NameLS", str);
    }

});
