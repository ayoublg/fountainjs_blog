/**
 * Created by Ayoub on 27/06/2017.
 */
import angular from 'angular';
import 'angular-mocks';
import {PostsListComponenent} from './posts-list.component';
// import '../posts.module';

describe('Posts List component', () => {
  // let component;
  beforeEach(() => {
    angular
      .module('PLC', ['app/posts/posts-list/posts-list.template.html'])
      .component('PLC', PostsListComponenent);
    angular.mock.module('PLC');
  });
  /* beforeEach(angular.mock.inject($componentController => {
    component = $componentController('PLC', {}, {});
  })); */
  it('should fill a list of posts', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    const element = $compile('<todo-item></todo-item>')($scope);
    $scope.$digest();
    const li = element.find('li');
    expect(li).not.toBeNull();
    // component = $componentController('PLC', {}, {});
    // expect(component.list).toEqual(44);
  }));
});
