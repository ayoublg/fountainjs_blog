export class PostService {
  constructor() {
    this.nbPosts = 2;
  }
  getPostsList() {
    let list = [];
    list = [
      {
        title: 'Post1',
        description: 'details du Post1'
      },
      {
        title: 'Post2',
        description: 'details du Post2'
      }
    ];
    return list;
  }
}
