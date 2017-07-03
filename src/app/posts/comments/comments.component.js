class CommentsController {
  constructor($http, CommentService) {
    this.$http = $http;
    this.comentService = CommentService;
  }
  getCommentsByPostId(postId) {
    this.comentService.getCommentsByPostId(postId).then(response => {
      this.commentList = response.data;
    });
  }
}
export const CommentsComponent = {
  bindings: {
    postId: '@'
  },
  controller: CommentsController,
  templateUrl: './app/posts/comments/comments.template.html',
  controllerAs: 'cc'
};
