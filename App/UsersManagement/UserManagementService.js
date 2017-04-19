securityApp.service('UserManagementService', function ($http, $q) {
    this.getAllUsers = function () {
        var defer = $q.defer();

        $http.get('App/UsersManagement/Users.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };
    this.addUser = function(userInfo) {
        var defer = $q.defer();
        $http.post('App/UsersManagement/someUrl', userInfo).then(function () {
            defer.resolve(true);
        });
        return defer.promise;
    };

    this.getUserInformation = function(userId) {
        var defer = $q.defer();
        $http.get('App/UsersManagement/GetUserInformation/'+ userId)
           .then(function (data) {
               defer.resolve(data.data);
           });
        return defer.promise;

    }
});
