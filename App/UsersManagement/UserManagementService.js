﻿securityApp.service('UserManagementService', function ($http, $q) {

    
    this.getAllUsers = function () {
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: 'http://localhost:1713/api/Employee/GetAll'
            })
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };
    this.addUser = function (userInfo) {
        var defer = $q.defer();

        $http.post('http://localhost:1713/api/Employee/Create', userInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.getUserInformation = function(userId) {
        var defer = $q.defer();

        $http.get('http://localhost:1713/api/Employee/GetBy?EmpId='+userId)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;

    };

    this.updateUserInfo = function(userInfo) {
        var defer = $q.defer();
        $http.post('http://localhost:1713/api/Employee/Update', userInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.deleteUser = function(userId) {
        
        var defer = $q.defer();
        $http.get('http://localhost:1713/api/Employee/Delete?EmpId='+ userId)
            .then(function (data) {
                defer.resolve(data.data);
            });
        return defer.promise;
        
    };
});
