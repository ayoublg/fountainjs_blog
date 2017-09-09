export const PostsListComponenent = {
  bindings: {
  },
  templateUrl: './app/posts/posts-list/posts-list.template.html',
  controllerAs: 'plist',
  controller: class postsListController {
    constructor(PostService, $stateParams) {
      this.PostService = PostService;
      this.$stateParams = $stateParams;
    }
    $onInit() {
      this.response = false;
      this.getPostsList();
    }
    getPostsList() {
      this.PostService.getPostsList().then(response => {
        this.list = response.data;
        this.postId = this.$stateParams.postId;
      });
    }
    addPost(postForm) {
      if (postForm.$valid) {
        this.PostService.add(this.p).then(response => {
          this.response = 'Post added : ' + angular.toJson(response.data);
        });
      }
    }
  }
};

