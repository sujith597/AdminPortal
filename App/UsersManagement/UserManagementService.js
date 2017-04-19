securityApp.service('UserManagementService', function ($http, $q) {

    
    this.getAllUsers = function () {
        var defer = $q.defer();

        $http.get('App/UsersManagement/Users.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };
    this.addUser = function (userInfo) {
        var defer = $q.defer();
        $http.post('App/UsersManagement/userInfo.txt', userInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.getUserInformation = function(userId) {
        var defer = $q.defer();

        $http.get('App/UsersManagement/userInfo.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;

    };

    this.updateUserInfo = function(userInfo) {
        var defer = $q.defer();
        $http.update('App/UsersManagement/userInfo.txt', userInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.deleteUser = function(userId) {
        
        var defer = $q.defer();
        $http.delete('App/UsersManagement/GetUserInformation/', userId)
            .then(function (data) {
                defer.resolve(data.data);
            });
        return defer.promise;
        
    };
});
