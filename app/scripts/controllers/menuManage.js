'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:MenuManageCtrl
 * @description
 * # MenuManageCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('MenuManageCtrl', [
  	"Data", "$scope", "$state", 
  	function (Data, $scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //페이지가 로딩되었을 때 호출
    $scope.$on('$viewContentLoaded', function() {
    	$scope.requestMenuList();
    });
    $scope.menuList = [];
    $scope.requestMenuList = function() {
    	var dataPromise = Data.getData(
    		'http://172.16.2.3:52273/menu');
    	dataPromise.then(function(results) {
    		$scope.menuList = results.data;
    	},function(reason){},function(update){});
    }

    $scope.deleteMenuInfo = function(id) {
    	var dataPromise = Data.deleteData(
    		'http://172.16.2.3:52273/menu/' +id, '');
    	dataPromise.then(function(results) {
    		$scope.requestMenuList();
    	},function(reason){},function(update){});
    }

    $scope.modifyMenuInfo = function(id, name, age) {
    	var dataPromise = Data.modifyData(
    		'http://172.16.2.3:52273/menu/' + id,
    		'&name='+ name + '&age=' + age);
    	dataPromise.then(function(results) {
    		$scope.requestMenuList();
    	},function(reason){},function(update){});
    }

    

    $scope.menuInfo = ""
    $scope.getUserInfo = function(id) {
    	var dataPromise = Data.getData(
    		'http://172.16.2.3:52273/menu/' +id, '');
    	dataPromise.then(function(results) {
    		$scope.menuInfo = results.data;
    	},function(reason){},function(update){});
    }

    $scope.businessid = "";
    $scope.name = "";
    $scope.price = "";
    $scope.imgurl = "";
    
    $scope.saveMenuInfo= function() {
        var dataPromise = Data.setData(
        'http://172.16.2.3:52273/menu',
        '&businessid='+ $scope.businessid + '&name=' + $scope.name +
            '&price='+ $scope.price + '&imgurl=' + $scope.imgurl);
        dataPromise.then(function(results){
        $scope.businessid = "";
        $scope.name = "";
        $scope.price = "";
        $scope.imgurl = "";
        },function(reason){}, function(update){});        
    }
    
  }]);