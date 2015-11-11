import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AddController from './controllers/add.controller';
import ListController from './controllers/list.controller';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'A2dB77muaBCYbvNbEfVdXcj1iQ8H1MnuKpP1TnNU',
        'X-Parse-REST-API-Key': 'efQJatKCNx4RWJGojSQNz5wm4Vwos00ujZQQ0RG2'
      }
    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
;