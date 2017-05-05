securityApp.service('ContractManagementService', function ($http, $q) {
    this.getAllContracts = function () {
        var defer = $q.defer();

        $http.get('App/ClientsManagement/Users.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };
    this.addContract = function (contractInfo) {
        var defer = $q.defer();
        $http.post('App/ClientsManagement/contractsInfo.txt', clientInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.getUsersForDesignation = function (designation) {
        var defer = $q.defer();

        $http.get('App/ClientsManagement/Users.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.getContractInformation = function (contractId) {
        var defer = $q.defer();

        $http.get('App/ClientsManagement/clientInfo.txt')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;

    };

    this.updateContractInfo = function (contractInfo) {
        var defer = $q.defer();
        $http.update('App/ClientsManagement/clientInfo.txt', clientInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.deleteContract = function (contractId) {

        var defer = $q.defer();
        $http.delete('App/ClientsManagement/DeleteClient', userId)
            .then(function (data) {
                defer.resolve(data.data);
            });
        return defer.promise;

    };
});
