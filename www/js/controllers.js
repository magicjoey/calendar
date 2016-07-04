angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
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


;


