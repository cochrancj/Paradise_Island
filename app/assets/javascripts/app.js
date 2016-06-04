var ParadiseIslandApp = angular.module("Paradise-Island-App", []);

ParadiseIslandApp.controller("GoersController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout){

  $scope.newGuests = {
    name: "",
    postcode: "",
    country: "",
    email: ""
  };

  $http.get('/api/island_goers').then(function(response){
    $scope.island_goers = response.data.island_goers
    // console.log("...heeeeeere on Gilligan's Island!");
  })

  $scope.newGuests = [];

  $scope.addGuest = function(){
    // console.log("FORM SUBMITTED");

    var db_guest = {
      island_goer: {
        name: $scope.name,
        postcode: $scope.post,
        country: $scope.country,
        email: $scope.email
      }
    }

    $http.post('/api/island_goers', db_guest).then(function(response){
        // console.log(response.data.island_goer);
        $scope.island_goers.push(response.data.island_goer);
        $scope.name = $scope.post = $scope.country = $scope.email = "";
    });
  }

  $scope.deleteGuest = function(id) {
    // console.log("BYE, SUCKAH!");

    $http.delete('/api/island_goers/' + id).then(function(response){
        $scope.island_goers = response.data.island_goers
      })
  };

}]); //ends big main function.


// FLAMINGO
$(document).ready(function(){
  flyingFlamingos();
})

function flyingFlamingos(){
  var $flamingo = $('#flamingo');
  var distance = 1200;
  setInterval(function(){
    $flamingo.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
    } else {
      distance -= 5;
    }
  }, 100);
};
