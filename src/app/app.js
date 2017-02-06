import 'milligram';

import angular from 'angular';

import controller from './controller/controller';
import view from './views/view';

import reducers from './reducers/reducers';
import actions from './actions/actions';
import Stores from './stores/stores';

import data from './data/data';

import './app.css';

const store = new Stores(reducers, data);

angular
  .module('app', [])
  .value('store', store)
  .controller('controller', controller)
  .directive('view', view)
  .service('actions', actions);
