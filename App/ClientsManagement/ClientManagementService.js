securityApp.service('ClientManagementService', function ($http, $q) {
    this.getAllClients = function () {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Client/GetAll')
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };
    this.addClient = function (clientInfo) {
        var defer = $q.defer();
        $http.post('http://fmsapi.sujithkumar.in/api/Client/Create', clientInfo)
            .then(function (data) {
                defer.resolve(data.data);
            })
            .catch(function (fallback) {
                defer.resolve(null);
            });

        return defer.promise;
    };

    this.getClientInformation = function (clientId) {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Client/GetBy?clientId=' + clientId)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;

    };

    this.updateClientInfo = function (clientInfo) {
        var defer = $q.defer();
        $http.post('http://fmsapi.sujithkumar.in/api/Client/Update', clientInfo)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };

    this.deleteClient = function (clientId) {

        var defer = $q.defer();
        $http.get('http://fmsapi.sujithkumar.in/api/Client/Delete?clientId=' + clientId)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });
        return defer.promise;

    };
});
