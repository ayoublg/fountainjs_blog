/**
 * Created by Ayoub on 01/07/2017.
 */
const urlBase = 'https://jsonplaceholder.typicode.com/posts/';
export class CommentService {

  constructor($http) {
    this.$http = $http;
  }
  getCommentsByPostId(postId) {
    return this.$http.get(urlBase + postId + '/comments');
  }
}
