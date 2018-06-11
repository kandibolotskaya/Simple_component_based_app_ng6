import angular from 'angular';
import Home from './home/home';
import EntitiesList from './entitiesList/entitiesList';
import EntitiesConnect from './entitiesConnect/entitiesConnect';

let componentModule = angular.module('app.components', [
  Home,
  EntitiesList,
  EntitiesConnect
])

.name;

export default componentModule;
