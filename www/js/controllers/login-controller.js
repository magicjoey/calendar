

angular.module('register-controller', [])

  .controller('RegisterCtrl', ['$scope','$ionicPopup', '$timeout', '$state', '$data', function($scope, $ionicPopup, $timeout, $state, $data){
    // $scope.formUser = {};

    $scope.doLogin = function(formUser){
      $data.login('user', formUser).success(function(data){
        if(data !=null ){
          $scope.showSuccessMesPopup("正在注册,请稍后");
          $timeout(function(){
            $scope.showErrorMesPopup("注册成功!");
            $state.go("login");
          }, 2000);
        }else{
          $scope.showErrorMesPopup("用户名已被注册,请更换!");
        }
      })
    };

    $scope.showErrorMesPopup = function(title) {
      var myPopup = $ionicPopup.show({
        title: '<b>'+title+'</b>'
      });
      $timeout(function() {
        myPopup.close(); // 2秒后关闭
      }, 1000);
    };


    //  验证成功后提示框
    $scope.showSuccessMesPopup = function(title) {
      var myPopup = $ionicPopup.show({
        title: '<b>'+title+'</b>',
        template: '<p style="text-align: center"><ion-spinner icon="android"></ion-spinner></p>'
      });
      $timeout(function() {
        myPopup.close(); // 2秒后关闭
      }, 2000);
    };

  }]);
