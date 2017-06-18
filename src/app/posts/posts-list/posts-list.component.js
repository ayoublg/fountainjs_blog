import {PostService} from '../posts.service';
export const postsListComponenent = {
  bindings: {
  },
  templateUrl: './app/posts/posts-list/posts-list.template.html',
  controllerAs: 'plist',
  controller: class postsListController {
    /* @ngInject */
    constructor(PostService) {
      this.PostService = PostService;
    }
    init() {
      this.list = this.PostService.getPostsList();
    }
  }
};

