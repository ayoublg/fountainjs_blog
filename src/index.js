import './app/posts/posts.module';

import angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

// import {PostsListComponenent} from './app/posts/posts-list/posts-list.component';

import './index.css';

angular
  .module('app', [techsModule, 'ui.router', 'postsMod'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
