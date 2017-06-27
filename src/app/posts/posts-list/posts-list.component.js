export const PostsListComponenent = {
  bindings: {
  },
  templateUrl: './app/posts/posts-list/posts-list.template.html',
  controllerAs: 'plist',
  controller: class postsListController {
    constructor(PostService, $stateParams) {
      this.PostService = PostService;
      this.$stateParams = $stateParams;
      this.list = 'aa';
      this.getPostsList();
    }
    getPostsList() {
      this.PostService.getPostsList().then(response => {
        this.list = response.data;
        this.postId = this.$stateParams.postId;
      });
    }
  }
};

