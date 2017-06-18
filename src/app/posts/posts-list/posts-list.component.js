export const postsListComponenent = {
  bindings: {
  },
  templateUrl: './app/posts/posts-list/posts-list.template.html',
  controllerAs: 'plist',
  controller: class postsListController {
    constructor(PostService) {
      this.PostService = PostService;
      this.init();
    }
    init() {
      this.list = this.PostService.getPostsList();
    }
  }
};

