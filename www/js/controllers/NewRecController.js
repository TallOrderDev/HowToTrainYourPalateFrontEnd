craftEd.controller('NewRecController', ['$scope', '$http', '$location', function($scope, $http, $location){

  var config = {
    headers: {
      'content-type': 'application/json'
    }
  };

  var tokens = {
    headers: {
      "access-token": window.sessionStorage.token,
      "token-type": "Bearer",
      "client": window.sessionStorage.client,
      "expiry": window.sessionStorage.expiry,
      "uid": window.sessionStorage.uid
    }
  };

  var tokensConfig = {
    headers: {
      'content-type': 'application/json',
      "access-token": window.sessionStorage.token,
      "token-type": "Bearer",
      "client": window.sessionStorage.client,
      "expiry": window.sessionStorage.expiry,
      "uid": window.sessionStorage.uid
    }
  };

  $http.get(rootUrl + '/users/:user_id/beer_types/rec_new', tokens)
    .then(function(response){
      console.log(response.data)
      $scope.allRecs= response.data
      $scope.rootUrl= rootUrl
      $scope.title = "Beers I've never tried"
      $scope.myController = "NewRecController"
    });

  $scope.selectBeer = function(newRecId){
    $http.get(rootUrl + '/users/:user_id/beer_types/' + newRecId + '/tried_beer_ratings/new', tokens)
    $location.path('/rating');
  }
}]);
