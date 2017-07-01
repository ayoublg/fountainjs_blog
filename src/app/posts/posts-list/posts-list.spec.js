/**
 * Created by Ayoub on 27/06/2017.
 */
import angular from 'angular';
import 'angular-mocks';
import '../posts.module';

describe('Posts List component', () => {
  let http;
  let component;
  beforeEach(() => {
    angular.mock.module('postsMod');
  });
  beforeEach(angular.mock.inject($httpBackend => {
    http = $httpBackend;
  }));

  it('should fill a list of posts', angular.mock.inject($componentController => {
    http
      .when('GET', 'https://jsonplaceholder.typicode.com/posts')
      .respond(200, {data: 'value'});
    component = $componentController('postsList', {$stateParams: {id: '...'}}, {});
    component.$onInit();
    http.flush();
    expect(component.list).toEqual({data: 'value'});
  }));

  it('getPostsList should been called', () => {
    spyOn(component, 'getPostsList');
    component.getPostsList();
    expect(component.getPostsList).toHaveBeenCalled();
  });
});
