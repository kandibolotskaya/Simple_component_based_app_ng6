import angular from 'angular';
import uiRouter from 'angular-ui-router';
import entitiesListComponent from './entitiesList.component';

let entitiesListModule = angular.module('entitiesList', [
  uiRouter
])

.component('entitiesList', entitiesListComponent)

.name;

export default entitiesListModule;
