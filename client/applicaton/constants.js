angular.module('PersonalWebsite.Constants')
  .constant("CONSTANTS", (function() {
    'use strict';

    var
      // Base
      baseUrl = 'http://localhost:3000',
      // Home page
      homeTemplatePath = 'files/home/home-template.html',
      homeControllerName = 'HomeController',
      homeControllerAsViewModel = 'home',
      // Registration / Login (Sign-in) page,
      signInTemplatePath = 'files/sign-in/signIn-template.html',
      signInControllerName = 'SignInController',
      signInControllerAsViewModel = 'signin';

    return {
      BASE_URL: baseUrl,
      HOME_TEMPLATE_PATH: homeTemplatePath,
      HOME_CONTROLLER: homeControllerName,
      HOME_CONTROLLER_AS_VIEW_MODEL: homeControllerAsViewModel,
      SIGN_IN_TEMPLATE_PATH: signInTemplatePath,
      SIGN_IN_CONTROLLER: signInControllerName,
      SIGN_IN_CONTROLLER_AS_VIEW_MODEL: signInControllerAsViewModel
    };
  })())
