securityApp.service('ClientManagementService', function ($http, $q) {
    this.getAllClients = function () {
        var defer = $q.defer();

        $http.get('http://localhost:1713/api/Client/GetAll')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };
    this.addClient = function (clientInfo) {
        var defer = $q.defer();
        $http.post('http://localhost:1713/api/Client/Create', clientInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.getClientInformation = function (clientId) {
        var defer = $q.defer();

        $http.get('http://localhost:1713/api/Client/GetBy?clientId='+clientId)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;

    };

    this.updateClientInfo = function (clientInfo) {
        var defer = $q.defer();
        $http.post('http://localhost:1713/api/Client/Update', clientInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.deleteClient = function (clientId) {

        var defer = $q.defer();
        $http.get('http://localhost:1713/api/Client/Delete?clientId='+clientId)
            .then(function (data) {
                defer.resolve(data.data);
            });
        return defer.promise;

    };
});
