import angular from 'angular';
import uiRouter from 'angular-ui-router';
import entitiesConnectComponent from './entitiesConnect.component';

let entitiesConnectModule = angular.module('entities', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('connect', {
      url: '/connect',
      component: 'entitiesConnect'
    });
})

.component('entitiesConnect', entitiesConnectComponent)

.name;

export default entitiesConnectModule;
