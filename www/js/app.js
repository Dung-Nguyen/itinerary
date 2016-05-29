// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.utils'])

.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('sign-in', {
                url: '/sign-in',
                templateUrl: 'templates/sign-in.html',
                controller: 'SigninCtrl'
            })
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'templates/welcome.html',
            })
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'ItineraryCtrl'
            })
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            .state('tab.itine', {
                url: '/itine',
                views: {
                    'tab-itine': {
                        templateUrl: 'templates/tab-Itinerary.html',
                        controller: 'ItineraryCtrl'
                    }
                }
            })
            .state('tab.itine-detail', {
                url: '/itine/:itineraryId',
                views: {
                    'tab-itine': {
                        templateUrl: 'templates/itinerary-detail.html',
                        controller: 'ItineraryDetailCtrl'
                    }
                }
            })
            .state('tab.itine-detail.surveies', {
                url: '/surveies',
                views: {
                    'tab-itine@tab': {
                        templateUrl: 'templates/survey.html',
                        controller: 'SurveyCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        //$urlRouterProvider.otherwise('/sign-in');
        $urlRouterProvider.otherwise('/welcome');

    })
    .config(function ($ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(5);

        // note that you can also chain configs
        //        $ionicConfigProvider.backButton.text('');

        $ionicConfigProvider.tabs.position('bottom');
    })