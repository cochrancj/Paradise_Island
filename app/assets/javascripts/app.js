var ParadiseIslandApp = angular.module("Paradise-Island-App", []);

ParadiseIslandApp.controller("GoersController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout){

  $http.get('/api/island_goers').then(function(response){
    $scope.island_goers = response.data.island_goers
    console.log("got some island goers");
  })

  $scope.heartMe = function(id){
    $scope.heartToggle = true;

    $timeout( function(){
        $scope.island_goers[id].liked = true;
        $scope.heartToggle = false;
    }, 1000);
  }
}])
