var ParadiseIslandApp = angular.module("Paradise-Island-App", []);

ParadiseIslandApp.controller("GoersController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout){

  $http.get('/api/island_goers').then(function(response){
    $scope.island_goers = response.data.island_goers
    console.log("got some island goers");
  })

  $scope.newGuests = [];

  $scope.addGuest = function(){
    $scope.newGuests.push({
      name: $scope.name,
      post: $scope.post,
      country: $scope.country,
      email: $scope.email
    });
    $scope.name = '';
    $scope.post = '';
    $scope.country = '';
    $scope.email = '';
  };


}])


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
