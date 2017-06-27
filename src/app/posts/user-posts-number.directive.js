export function UserPostsNumber() {
  return {
    restrict: 'E',
    scope: {},
    template: '<h2><button ng-click="vm.getPostNumber()">Calc Number of user posts</button>nombre : {{vm.number}}</h2>',
    controller: UserPNumberController,
    controllerAs: 'vm',
    bindToController: {
      userid: '@'
    }
  };
}
class UserPNumberController {
  constructor(PostService, $log) {
    $log.log(this.userid);
    this.PostService = PostService;
  }
  getPostNumber() {
    this.PostService.getPostsByUser(this.userid).then(response => {
      this.number = response.data.length;
    });
  }
}
