import angular from 'angular';
import {PostService} from './posts.service';
import {PostsListComponenent} from './posts-list/posts-list.component';
import {PostDetailComponent} from './posts-detail/posts-detail.component';
import {UserPostsNumber} from './user-posts-number.directive';
import {CommentsComponent} from './comments/comments.component';
import {CommentService} from './comments/comment.service';

angular.module('postsMod', [])
	.component('postsList', PostsListComponenent)
  .component('postDetail', PostDetailComponent)
  .component('postComments', CommentsComponent)
  .directive('userPostsNumber', UserPostsNumber)
	.service('PostService', PostService)
  .service('CommentService', CommentService);
