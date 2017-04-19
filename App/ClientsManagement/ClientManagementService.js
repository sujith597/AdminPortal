securityApp.service('ClientManagementService', function ($http, $q) {
    this.getAllClients = function () {
        var defer = $q.defer();

        $http.get('App/ClientsManagement/Users.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };
    this.addClient = function (clientInfo) {
        var defer = $q.defer();
        $http.post('App/ClientsManagement/clientInfo.txt', clientInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.getClientInformation = function (clientId) {
        var defer = $q.defer();

        $http.get('App/ClientsManagement/clientInfo.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;

    };

    this.updateClientInfo = function (clientInfo) {
        var defer = $q.defer();
        $http.update('App/ClientsManagement/clientInfo.txt', clientInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.deleteClient = function (clientId) {

        var defer = $q.defer();
        $http.delete('App/ClientsManagement/DeleteClient', userId)
            .then(function (data) {
                defer.resolve(data.data);
            });
        return defer.promise;

    };
});
