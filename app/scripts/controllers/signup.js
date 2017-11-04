'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('SignupCtrl', [ 
  	"Data", "$scope", "$state", 
  	function (Data, $scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.name = "";
    $scope.age = "";
    $scope.user_id = "";
    $scope.password = "";

    $scope.saveUserInfo = function() {
    	var dataPromise = Data.setData(
    		'http://172.16.2.3:52273/user',
        '&user_id='+ $scope.user_id + '&password=' + $scope.password +
    		'&name='+ $scope.name + '&age=' + $scope.age);
    	dataPromise.then(function(results){
    		$scope.name = "";
        $scope.age = "";
        $scope.user_id = "";
        $scope.password = "";
    	},function(reason){}, function(update){});

    };

  }]);
