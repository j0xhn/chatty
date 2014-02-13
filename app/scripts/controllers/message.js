'use strict';

angular.module('chattyApp')
.controller('MessageCtrl', function ($scope, $http) {
		console.log('Message Ctrl Running')
  		$http.get('http://localhost:12200/').success(function(messages) {
  		$scope.messages = messages;
  	});

  	$scope.addMessage = function() {
  		console.log("addMessage Function Called");
  		var newMessage = {message: $scope.newMessageText};
  		$http.post('http://localhost:12200/', newMessage).success(function(){
  			$scope.messages.push(newMessage);
  			$scope.newMessageText = '';
  		});

  	}
  	
  	
});
