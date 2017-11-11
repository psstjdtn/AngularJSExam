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

    $scope.modifyUserInfo = function(businessid, name, context, hpno, snsid, business_state) {
    	var dataPromise = Data.modifyData(
    		'http://172.16.2.3:52273/bizs/' + businessid,
    		'&name=' + name + '&context='+ context + 
    		'&hpno=' + hpno + '&snsid='+ snsid + 
    		'&business_state=' + business_state
    		);
    	dataPromise.then(function(results) {
    		window.alert('정보변경을 완료하였습니다.');
    		$scope.getUserInfo($scope.businessid);
    	},function(reason){},function(update){});
    }


    $scope.businessInfo = ""
    $scope.getUserInfo = function(businessid) {
    	var dataPromise = Data.getData(
    		'http://172.16.2.3:52273/bizs/' + businessid, '');
    	dataPromise.then(function(results) {
    		$scope.businessInfo = results.data;
    	},function(reason){},function(update){});
    }


}]);