var myApp = angular.module('starter.utils', []);

/* 
-- Name: substr 
-- Decription: sub string
-- @param: {int} provider
-- @returns:  {string} with lenght = @param
-- usage: {{item.example | substr:@param}}
*/
myApp.filter('substr', function () {
    var ellipsis = ' ...';
    return function (text, limit) {
        text = typeof (text) !== 'undefined' ? text : '';
        return text.length > limit ?
            (text.substr(0, limit - ellipsis.length) + ellipsis) :
            text;
    }
});

/* 
-- Name: MapsService 
-- Decription: Dictionary google map, call form other controller
-- @param: start - {string} provider (name or lot-lon), end - {string} provider (name or lot-lon)
-- usage: 
controller
myApp.controller('ExampleCtrl', function ($scope, $controller, $rootScope) {
    var mapServiceCtrl = $rootScope.$new();
    $controller('MapsServiceCtrl', {
        $scope: mapServiceCtrl
    });
    
    $scope.getMap = function (originCity, destinationCity) {
        console.log(originCity);
        console.log(destinationCity);
        mapServiceCtrl.init(originCity, destinationCity);
    }
});

view
<ion-view ng-init="getMap(itinerary.startPoint, itinerary.destination)">
    <ion-header-bar>
    </ion-header-bar>
    <ion-content class="top-60" ng-controller="MapCtrl">
        <div id="map" data-tap-disabled="true"></div>
    </ion-content>
</ion-view>
*/
myApp.controller('MapsServiceCtrl',['$scope', function ($scope) {
    
    $scope.init = function (originCity, destinationCity) {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: {
                lat: 10.82310,
                lng: 106.62966
            },
            mapTypeControl: false,
        });
        directionsDisplay.setMap(map);

        var onChangeHandler = function () {
            calculateAndDisplayRoute(directionsService, directionsDisplay, originCity, destinationCity);
        };

        angular.element(document).ready(onChangeHandler);
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay, originCity, destinationCity) {
        directionsService.route({
            origin: originCity,
            destination: destinationCity,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

}]);