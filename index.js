var securityApp = angular.module('SecurityApp', ['ngAnimate', 'ui.bootstrap', 'ui.router', 'ui.grid', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.pagination', 'ngNotify', 'flow.provider']);

securityApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');

    $stateProvider
        .state('Home',
        {
            url: '/Home',
            templateUrl: 'App/Dashboard/Dashboard.html',
            controller: 'DashboardController'
        })
        .state('UsersManagement',
        {
            url: '/UsersManagement',
            templateUrl: 'App/UsersManagement/UsersManagement.html',
            controller: 'UserManagementController'
        })
        .state('AddUser',
        {
            url: '/AddUser',
            templateUrl: 'App/UsersManagement/AddUser.html',
            controller: 'AddUserController'
        })
        .state('EditUser',
        {
            url: '/EditUser',
            templateUrl: 'App/UsersManagement/AddUser.html',
            controller: 'AddUserController'
        })
        .state('ViewUser',
        {
            url: '/ViewUser/:UserId',
            templateUrl: 'App/UsersManagement/ViewUser.html',
            controller: 'ViewUserController'
        })
        .state('ClientsManagement',
        {
            url: '/ClientsManagement',
            templateUrl: 'App/ClientsManagement/ClientsManagement.html',
            controller: 'ClientManagementController'
        })
        .state('AddClient',
        {
            url: '/AddClient',
            templateUrl: 'App/ClientsManagement/AddClient.html',
            controller : ''
        })
        .state('AddUserToClient',
        {
            url: '/AddUserToClient',
            templateUrl: 'App/ClientsManagement/AddUserToClient.html'
        });
});