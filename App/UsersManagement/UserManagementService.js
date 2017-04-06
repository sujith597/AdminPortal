securityApp.service('UserManagementService', function ($http, $q) {
    this.getAllUsers = function () {
        var defer = $q.defer();

        $http.get('App/UsersManagement/Users.json')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

});
