'use strict';
/**
 * @ngdoc function
 * @name generatorYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generatorYeomanApp
 */
app.controller('MainCtrl', function($scope) {});
app.controller('SignupCtrl', function($scope, $http, $log, publicService) {
    //add data
    publicService.loadBee().then(function(data) {
        $scope.data = data;
    }, function(data) {
        console.log(data);
    });
    //older
    $scope.signup = function() {
        var payload = {
            email: $scope.email,
            password: $scope.password
        };
        $http.post('app/signup', payload).success(function(data) {
            $log.debug(data);
            alert(data.email + " - " + data.password);
        }).error(function(data) {
            deferred.reject(data);
        });
    };
});

app.controller('DemoCtrl', function($scope, $http, publicService, $log) {
    publicService.loadBee().then(function(data) {
        $scope.data = data;
    }, function(data) {
        console.log(data);
    });
   publicService.loadJob().then(function(data) {
        $scope.job = data;
    }, function(data) {
        console.log(data);
    }); 
   publicService.loadRecommend().then(function(data) {
        $scope.recommend = data;
    }, function(data) {
        console.log(data);
    }); 
    $scope.addbee = function() {
        alert($scope.data.length);
        for (var i = 0; i < $scope.data.length; i++) {
            $http.post('app/addbee', $scope.data[i]).success(function(data) {
                $log.debug(data);
            }).error(function(data) {
                deferred.reject(data);
            });
        }
        alert("ok");
    };
    $scope.addjob = function() {
        for (var i = 0; i < $scope.job.length; i++) {
            $http.post('app/addjob', $scope.job[i]).success(function(data) {
                $log.debug(data);
            }).error(function(data) {
                deferred.reject(data);
            });
        }
        alert("ok");
    };
    $scope.addRecommend = function() {
        for (var i = 0; i < $scope.recommend.length; i++) {
            $http.post('app/addRecommend', $scope.recommend[i]).success(function(data) {
                $log.debug(data);
            }).error(function(data) {
                deferred.reject(data);
            });
        }
        alert("ok");
    }
});
//chart

