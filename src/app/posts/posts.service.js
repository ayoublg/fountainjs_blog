export class PostService {
  constructor($http) {
    this.$http = $http;
    this.nbPosts = 2;
  }

  getPostsList() {
    return this.$http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id) {
    return this.$http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  setPost(editedPost) {
    return this.$http.put(`https://jsonplaceholder.typicode.com/posts/${editedPost.id}`, {title: editedPost.title, body: editedPost.body});
  }
  getPostsByUser(userId) {
    return this.$http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
