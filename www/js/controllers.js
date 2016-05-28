var myApp = angular.module('starter.controllers', []);

// Sign in process
myApp.controller('SigninCtrl', function ($scope, SigninService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.signin = function () {
        SigninService.signinUser($scope.data.username, $scope.data.password).success(function (data) {
            $state.go('welcome');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
});

// Get Itinerary list
myApp.controller('ItineraryCtrl', function ($scope, Itineraries) {
    $scope.itineraries = Itineraries.all();
});

// 
myApp.controller('ItineraryDetailCtrl', function ($scope, $stateParams, Itineraries, $state) {
    $scope.itineraries = Itineraries.all();
    $scope.itinerary = Itineraries.get($stateParams.itineraryId);

    $scope.idSelectedVote = null;
    $scope.setSelected = function (idSelectedVote) {
        $scope.idSelectedVote = idSelectedVote;
    };
})