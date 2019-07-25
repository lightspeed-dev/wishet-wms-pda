/**
 * Created by Shao on 2016/12/13.
 */

angular.module('pda.route', [])
  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $urlRouterProvider.otherwise('/tab/home');
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            controller: 'homeCtrl'
          }
        }
      })

      .state('cljh', {
        url: '/cljh',
        templateUrl: 'templates/cljh.html',
        controller: 'cljhCtrl'
      })

      .state('glrq', {
        url: '/glrq',
        templateUrl: 'templates/glrq.html',
        controller: 'glrqCtrl'
      })
      .state('jhqr', {
        url: '/jhqr',
        templateUrl: 'templates/jhqr.html',
        controller: 'jhqrCtrl'
      })






  });
