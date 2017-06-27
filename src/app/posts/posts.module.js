import angular from 'angular';
import {PostService} from './posts.service';
import {PostsListComponenent} from './posts-list/posts-list.component';
import {PostDetailComponent} from './posts-detail/posts-detail.component';
import {UserPostsNumber} from './user-posts-number.directive';

angular.module('postsMod', [])
	.component('postsList', PostsListComponenent)
  .component('postDetail', PostDetailComponent)
  .directive('userPostsNumber', UserPostsNumber)
	.service('PostService', PostService);
