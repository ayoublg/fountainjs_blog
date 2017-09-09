import angular from 'angular';
import 'angular-mocks';
import {postsByUser} from './postsByUser';

describe('postsByUser component', () => {
  beforeEach(() => {
    angular
      .module('postsByUser', ['app/posts/posts-by-user/postsByUser.html'])
      .component('postsByUser', postsByUser);
    angular.mock.module('postsByUser');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<postsByUser></postsByUser>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
