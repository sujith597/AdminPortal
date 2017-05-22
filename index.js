var securityApp = angular.module('SecurityApp', ['ngAnimate', 'ngLoadScript', 'ui.bootstrap', 'ui.router',
                                                'ui.grid', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.pagination',
                                                'ngNotify', 'flow.provider', 'ngStorage', 'frapontillo.bootstrap-duallistbox',
                                                'uiSwitch']);

securityApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Login');

    $stateProvider
        .state('Login',
        {
            url: '/Login',
            templateUrl: 'App/Login/Login.html',
            controller: 'LoginController'
        })
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
            url: '/EditUser/:UserId',
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
            controller: 'AddClientController'
        })
        .state('EditClient',
        {
            url: '/EditClient/:ClientId',
            templateUrl: 'App/ClientsManagement/AddClient.html',
            controller: 'AddClientController'
        })
        .state('ViewClient',
        {
            url: '/ViewClient/:ClientId',
            templateUrl: 'App/ClientsManagement/ViewClient.html',
            controller: 'ViewClientController'
        })
        .state('AttendenceManagement',
        {
            url: '/AttendenceManagement',
            templateUrl: 'App/ClientsManagement/AttendenceManagement.html',
            controller: 'AttendenceManagementController'
        })
        .state('ContractsManagement',
        {
            url: '/ContractsManagement',
            templateUrl: 'App/ClientsManagement/Contracts/ContractsManagement.html',
            controller: 'ContractsManagementController'
        })
        .state('AddContract',
        {
            url: '/AddContract',
            templateUrl: 'App/ClientsManagement/Contracts/AddContract.html',
            controller: 'AddContractController'
        })
        .state('EditContract',
        {
            url: '/EditContract/:ContractId',
            templateUrl: 'App/ClientsManagement/Contracts/AddContract.html',
            controller: 'AddContractController'
        })
        .state('ViewContract',
        {
            url: '/ViewContract/:ContractId',
            templateUrl: 'App/ClientsManagement/Contracts/ViewContract.html',
            controller: 'ViewContractController'
        });
});