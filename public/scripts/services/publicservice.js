'use strict';
app.factory('publicService', ['$http', '$q', function($http, $q){
	var factory = {};
	factory.loadDataHome = function() {
		var deferred = $q.defer();
		$http.get('/api/data.json')
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(data) {
				deferred.reject(data);
			});
		return deferred.promise;
	};

	factory.loadDataBee = function() {
		var deferred = $q.defer();
		$http.get('/api/beedata.json')
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(data) {
				deferred.reject(data);
			});
		return deferred.promise;
	};


	factory.loadBee = function() {
		var deferred = $q.defer();
		$http.get('/api/bees.json')
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(data) {
				deferred.reject(data);
			});
		return deferred.promise;
	};



	factory.loadJob = function() {
		var deferred = $q.defer();
		$http.get('/api/jobs.json')
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(data) {
				deferred.reject(data);
			});
		return deferred.promise;
	};
	factory.loadRecommend = function() {
		var deferred = $q.defer();
		$http.get('/api/recommend.json')
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(data) {
				deferred.reject(data);
			});
		return deferred.promise;
	};

	return factory;
}]);