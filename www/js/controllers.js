angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableReminder: true
    };
  })

  .controller('HomeCtrl', function ($scope) {

  })

  .controller('MeCtrl', function ($scope) {
    console.log($scope);
  })

  .controller('LoginCtrl', function ($scope, $ionicPopup, $timeout, $state, $data) {
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
  })

  .controller('RegisterCtrl', function ($scope) {
    console.log($scope);
  })


  .controller('CalendarCtrl', function ($scope) {

  })

  .controller('InvestCtrl', function ($scope) {

  })

  .controller('MyCalendarCtrl', function ($scope) {

  })

  .controller('SalaryCtrl', function ($scope) {

  })

  .controller('BuyListCtrl', function ($scope) {

  })

  .controller('ProfileCtrl',function($scope){
      $scope.user={
        "userName":"out_lier@126.com",
        "nickName":"乔伊"
      };
  })


;


