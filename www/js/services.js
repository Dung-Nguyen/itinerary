var myApp = angular.module('starter.services', [])
    // Sign in process
myApp.service('SigninService', function ($q) {
    return {
        signinUser: function (name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == '123') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});

// Load data Itinerary
myApp.factory('Itineraries', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var itineraries = [{
            id: 1,
            day: '01',
            content: 'Pick-up from Lao cai train station. Get on the bus to continue to #SaPa. After breakfast, take a short walk from Sapa to the Black H’mong village of Y Linh Ho and #Lao Chai where you can see panoramas of the larger valley, paddy terraced fields and the H’mong village.',
            linkImg: 'img/upload/Photo.day2.png',
            date: '02 MAY 2016',
            location: 'Arrive Ha Noi - Ho Hoan Kiem - Ho Chi Minh Mausoleum - The Opera House',
            startPoint:'21.027764,105.834160',
            destination: '22.766206,104.938885',
            active: '1'
            },
        {
            id: 2,
            day: '02',
            content: 'Pick-up from Lao cai train station. Get on the bus to continue to #SaPa. After breakfast, take a short walk from Sapa to the Black H’mong village of Y Linh Ho and #Lao Chai where you can see panoramas of the larger valley, paddy terraced fields and the H’mong village.',
            linkImg: 'img/upload/Photo.day2.png',
            date: '03 MAY 2016',
            location: 'Ha Noi - Lao Cai - Ham Rong Mountain',
            startPoint:'21.027764,105.834160',
            destination: '22.766206,104.938885',
            active: '0'
        },
        {
            id: 3,
            day: '03',
            content: 'Pick-up from Lao cai train station. Get on the bus to continue to #SaPa. After breakfast, take a short walk from Sapa to the Black H’mong village of Y Linh Ho and #Lao Chai where you can see panoramas of the larger valley, paddy terraced fields and the H’mong village.',
            linkImg: 'img/upload/Photo.day2.png',
            date: '04 MAY 2016',
            location: 'Lao Cai - Sapa - Lao Chai - Ta Van',
            startPoint:'21.027764,105.834160',
            destination: '22.766206,104.938885',
            active: '0'
                          },
        {
            id: 4,
            day: '04',
            content: 'Pick-up from Lao cai train station. Get on the bus to continue to #SaPa. After breakfast, take a short walk from Sapa to the Black H’mong village of Y Linh Ho and #Lao Chai where you can see panoramas of the larger valley, paddy terraced fields and the H’mong village.',
            linkImg: 'img/upload/Photo.day2.png',
            date: '05 MAY 2016',
            location: 'Ha Giang - Tay Bac',
            startPoint:'21.027764,105.834160',
            destination: '22.766206,104.938885',
            active: '0'
                          },
        {
            id: 5,
            day: '05',
            content: 'Pick-up from Lao cai train station. Get on the bus to continue to #SaPa. After breakfast, take a short walk from Sapa to the Black H’mong village of Y Linh Ho and #Lao Chai where you can see panoramas of the larger valley, paddy terraced fields and the H’mong village.',
            linkImg: 'img/upload/Photo.day2.png',
            date: '06 MAY 2016',
            location: 'Lao Cai - Sapa - Lao Chai - Ta Van',
            startPoint:'21.027764,105.834160',
            destination: '22.766206,104.938885',
            active: '0'
                          }];

    return {
        all: function () {
            return itineraries;
        },
        remove: function (itinerary) {
            itineraries.splice(itineraries.indexOf(itinerary), 1);
        },
        get: function (itineraryId) {
            for (var i = 0; i < itineraries.length; i++) {
                if (itineraries[i].id === parseInt(itineraryId)) {
                    return itineraries[i];
                }
            }
            return null;
        }
    };
});