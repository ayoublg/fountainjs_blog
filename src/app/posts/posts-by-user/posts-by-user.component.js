class PostsByUserController {
  constructor(PostService, $stateParams) {
    this.PostService = PostService;
    this.$stateParams = $stateParams;
    this.text = 'My brand new component!';
    this.posts = [];
  }

  $onInit() {
    this.userId = this.$stateParams.userId;
    this.getPostsByUser(this.userId);
  }

  getPostsByUser(UserId) {
    this.PostService.getPostsByUser(UserId).then(response => {
      this.posts = response.data;
    });
  }
}

export const PostsByUserComponent = {
  template: require('./posts-by-user.template.html'),
  controller: PostsByUserController
};
