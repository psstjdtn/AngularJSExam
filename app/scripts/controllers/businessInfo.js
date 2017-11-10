'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:BusinessInfoCtrl
 * @description
 * # BusinessInfoCtrl
 * Controller of the angularJsexamApp
 */

angular.module('angularJsexamApp')
  .controller('BusinessInfoCtrl', [
  	"Data", "$scope", "$state", "$location", 
  	function (Data, $scope, $state, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.businessid=0;
    //페이지가 로딩되었을 때 호출
    $scope.$on('$viewContentLoaded', function() {
        $scope.businessid = $location.search().businessid;
        var businessid = $location.search().businessid;
        if(businessid !=undefined) {
            //window.alert(businessid);
           $scope.getUserInfo(businessid);
        }
    });

    $scope.modifyMenuInfo = function(id, name, age) {
    	var dataPromise = Data.modifyData(
    		'http://172.16.2.3:52273/menu/' + id,
    		'&name='+ name + '&age=' + age);
    	dataPromise.then(function(results) {
    		$scope.requestMenuList();
    	},function(reason){},function(update){});
    }

    $scope.businessInfo = ""
    $scope.getUserInfo = function(businessid) {
    	var dataPromise = Data.getData(
    		'http://172.16.2.3:52273/menu/' + businessid, '');
    	dataPromise.then(function(results) {
    		$scope.businessInfo = results.data;
    	},function(reason){},function(update){});
    }

    $scope.businessid = "";
    $scope.name = "";
    $scope.price = "";
    $scope.imgurl = "";

}]);