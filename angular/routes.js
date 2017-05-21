//var myApp = angular.module('eplApp', ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // location of the template
      templateUrl: 'views/listAll-view.html',
      // Which controller it should use
      controller: 'listAllCtrl',
      // what is the alias of that controller.
      controllerAs: 'listAll'
    })
    .when('/view-book/:bookid', {
      templateUrl: 'views/book-view.html',
      controller: 'bookCtrl',
      controllerAs: 'currentBook'
    })
    .when('/view-house/:houseid', {
      templateUrl: 'views/house-view.html',
      controller: 'houseCtrl',
      controllerAs: 'currentHouse'
    })
    .when('/view-character/:characterid', {
      templateUrl: 'views/character-view.html',
      controller: 'characterCtrl',
      controllerAs: 'currentCharacter'
    })
}]);