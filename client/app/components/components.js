import angular from 'angular';
import Home from './home/home';
import EntitiesList from './entitiesList/entitiesList';
import entities from './entities/entities';

let componentModule = angular.module('app.components', [
  Home,
  EntitiesList,
  entities
])

.name;

export default componentModule;
