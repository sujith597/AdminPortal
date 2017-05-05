securityApp.service('ContractManagementService', function ($http, $q) {
    this.getAllContracts = function () {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in\api\Contract\GetAll')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };
    this.addContract = function (contractInfo) {
        var defer = $q.defer();
        $http.post('http://fmsapi.sujithkumar.in\api\Contract\Create', clientInfo)
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

        $http.get('http://fmsapi.sujithkumar.in\api\Contract\GetBy?contractId=' + contractId)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;

    };

    this.updateContractInfo = function (contractInfo) {
        var defer = $q.defer();
        $http.update('http://fmsapi.sujithkumar.in\api\Contract\Update', contractInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.deleteContract = function (contractId) {

        var defer = $q.defer();
        $http.delete('http://fmsapi.sujithkumar.in\api\Contract\Delete?contractId=', contractId)
            .then(function (data) {
                defer.resolve(data.data);
            });
        return defer.promise;

    };
});
