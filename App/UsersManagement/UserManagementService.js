securityApp.service('UserManagementService', function ($http, $q) {

    
    this.getAllUsers = function () {
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: 'http://fmsapi.sujithkumar.in/api/Employee/GetAll'
            })
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };
    this.addUser = function (userInfo) {
        var defer = $q.defer();

        $http.post('http://fmsapi.sujithkumar.in/api/Employee/Create', userInfo)
            .then(function (data) {
                defer.resolve(data.data);
            })
            .catch(function (fallback) {
                defer.resolve(null);
           });

        return defer.promise;
    };

    this.getUserInformation = function(userId) {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Employee/GetBy?EmpId=' + userId)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;

    };

    this.updateUserInfo = function(userInfo) {
        var defer = $q.defer();
        $http.post('http://fmsapi.sujithkumar.in/api/Employee/Update', userInfo)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };

    this.deleteUser = function(userId) {
        
        var defer = $q.defer();
        $http.get('http://fmsapi.sujithkumar.in/api/Employee/Delete?EmpId=' + userId)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });
        return defer.promise;
        
    };
});
