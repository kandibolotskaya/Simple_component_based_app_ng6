import angular from 'angular';
import uiRouter from 'angular-ui-router';
import entitiesComponent from './entities.component';

let entitiesModule = angular.module('entities', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('entities', {
      url: '/entities',
      component: 'entities'
    });
})

.component('entities', entitiesComponent)

.name;

export default entitiesModule;
