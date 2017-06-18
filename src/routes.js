export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('postsList', {
      url: '/posts',
      component: 'postsList'
    })
    .state('postdetail', {
      url: '/details',
      template: '<movies-list></movies-list>'
    });
}
