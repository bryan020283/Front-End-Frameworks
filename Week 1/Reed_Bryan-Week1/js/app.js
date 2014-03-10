/**
 * Created by bryanreed on 3/5/14.
 */

function myController($scope){
    $scope.projectName = 'Grocery List';
    $scope.newItem;


    $scope.groceryArray = ['apples', 'pears', 'broccoli', 'bananas', 'cereal'];
    $scope.addGroceryItem = function(){
        $scope.groceryArray.push($scope.newItem);

        $scope.newItem = '';

    }

    $scope.deleteItem = function(deletedItem){
        var theIndex = $scope.groceryArray.indexOf(deletedItem);
        $scope.groceryArray.splice(theIndex,1);

    }
};