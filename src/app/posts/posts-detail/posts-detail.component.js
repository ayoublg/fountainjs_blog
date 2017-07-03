class PostDetailController {
  constructor(PostService, $stateParams) {
    this.$stateParams = $stateParams;
    this.PostService = PostService;
  }
  $onInit() {
    this.getPost(this.$stateParams.postId);
  }
  getPost(postId) {
    this.PostService.getPostById(postId).then(response => {
      this.post = response.data;
    });
  }
  editPost(post) {
    this.PostService.setPost(post).then(response => {
      this.valid = 'poste modifié';
      this.editResponse = response.data;
    });
  }
}
export const PostDetailComponent = {
  bindings: {
  },
  template: require('./posts-detail.template.html'),
  controller: PostDetailController,
  controllerAs: 'pdctrl'
};

