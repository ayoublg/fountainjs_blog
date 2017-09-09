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
    .state('detailPost', {
      url: '/details/:postId',
      component: 'postDetail'
    })
    .state('postsByUser', {
      url: '/postsByUser/:userId',
      component: 'postsByUser'
    });
}
