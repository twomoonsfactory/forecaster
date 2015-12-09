import angular from 'angular';
import forecaster from './forecaster/';
import homeController from './homepage/homeController';
import viewStates from './constants/viewStates';

var ngModule = angular.module('app', [require('angular-ui-router'), 'forecaster'])
  .controller('homeController', homeController);
// weatherCard(ngModule);
viewStates(ngModule);
// require('./homepage/homeController.js')(ngModule);
// require('./weatherCard/weatherCard.js')(ngModule);
// require('./constants/viewStates.js')(ngModule);

ngModule.config(($stateProvider, $urlRouterProvider, viewStates)=>{
  $urlRouterProvider.otherwise('');
  $stateProvider
    .state(viewStates.home, {
      url: '',
      template: require('./homepage/homeTemplate.html'),
      controller: 'homeController'
    });
})
