securityApp.service('ClientManagementService', function ($http, $q) {
    this.getAllClients = function () {
        var defer = $q.defer();

        $http.get('App/ClientsManagement/Users.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

});
