export class PostService {
  constructor() {
    this.nbPosts = 2;
  }
  getPostsList() {
    let list = [];
    list = [
      {
        title: 'Post021',
        description: 'details du Post1'
      },
      {
        title: 'Post022',
        description: 'details du Post2'
      }
    ];
    return list;
  }
}
