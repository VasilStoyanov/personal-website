angular.module('PersonalWebsite.Constants', []);
angular.module('PersonalWebsite.Services', []);
angular.module('PersonalWebsite.Controllers', ['PersonalWebsite.Services']);

angular.module('PersonalWebsite', [
    'PersonalWebsite.Constants',
    'PersonalWebsite.Services',
    'PersonalWebsite.Controllers',
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'lbServices'
  ]);
