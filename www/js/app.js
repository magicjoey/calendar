// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, $ionicHistory, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  var needLoginView = ["fsadfsd","mycomment","myfavorite","myquestion","orderlist"];//需要登录的页面state
  $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams, options){
    console.log("dd"+toState.name);
    if(needLoginView.indexOf(toState.name)>=0&&!$rootScope.isLogin){//判断当前是否登录
      $state.go("tab.login");//跳转到登录页
      event.preventDefault(); //阻止默认事件，即原本页面的加载
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's control`ler can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })


    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })


    .state('tab.me', {
      url: '/me',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-me.html',
          controller: 'MeCtrl'
        }
      }
    })


    .state('tab.calendar', {
      url: '/calendar',
      views: {
        'tab-calendar': {
          templateUrl: 'templates/tab-calendar.html',
          controller: 'CalendarCtrl'
        }
      }
    })

    .state('tab.me-login', {
      url: '/me/login',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-login.html',
          controller: 'LoginCtrl'
        }
      }    })

    .state('tab.me-register', {
      url: '/me/register',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-register.html',
          controller: 'RegisterCtrl'
        }
      }
    })

    .state('tab.me-profile', {
      url: '/me/profile',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('tab.me-calendar', {
      url: '/me/calendar',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-mycalendar.html',
          controller: 'MyCalendarCtrl'
        }
      }
    })

    .state('tab.me-invest', {
      url: '/me/invest',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-invest.html',
          controller: 'InvestCtrl'
        }
      }
    })

    .state('tab.salary', {
      url: '/salary',
      views: {
        'tab-salary': {
          templateUrl: 'templates/tab-salary.html',
          controller: 'SalaryCtrl'
        }
      }
    })

    .state('tab.me-buylist', {
      url: '/me/buylist',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-buylist.html',
          controller: 'BuyListCtrl'
        }
      }
    })

    .state('tab.me-aboutus',{
      url: '/me/aboutus',
      views:{
        'tab-me':{
          templateUrl: 'templates/tab-aboutus.html',
          controller:'AboutUsCtrl'
        }
      }
    })

    .state('aboutUs',{
      templateUrl:'templates/aboutUs.html'
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
