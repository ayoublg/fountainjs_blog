import angular from 'angular';
import {PostService} from './posts.service';
import {postsListComponenent} from './posts-list/posts-list.component';

angular.module('postsMod', [])
	.component('postsList', postsListComponenent)
	.service('PostService', PostService);
