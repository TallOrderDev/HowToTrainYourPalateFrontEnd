  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  craftEd.controller('MenuController', ['$scope', '$ionicSideMenuDelegate', '$http', function($scope, $ionicSideMenuDelegate, $http) {

    var config = {
      headers: {
        'content-type': 'application/json'
      }
    };

    $http.get(rootUrl + '/current/1.0', config)
      .then(function(response){
        $scope.currentVersionCheck = response.data
      });

    $scope.$on("$ionicView.enter", function(event, data){
      if(window.sessionStorage.length){
        $scope.showLogin = false;
        $scope.showRegister = false;
        $scope.showLogout = true;
        $scope.showProfile = true;
      }
      else{
        $scope.showLogin = true;
        $scope.showRegister = true;
        $scope.showLogout = false;
        $scope.showProfile = false;
      }
    });

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

}]);
