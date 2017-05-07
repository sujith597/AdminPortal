securityApp.service('ContractManagementService', function ($http, $q) {
    this.getAllContracts = function () {
        var defer = $q.defer();

        $http.get('http://localhost:1713/api/Contract/GetAll')
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };
    this.addContract = function (contractInfo) {
        var defer = $q.defer();
        $http.post('http://localhost:1713/api/Contract/Create', contractInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.getUsersForDesignation = function (designation) {
        var defer = $q.defer();

        $http.get('http://localhost:1713/api/Employee/GetEmployeeByDesignation?designation=' + designation)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.getContractInformation = function (contractId) {
        var defer = $q.defer();

        $http.get('http://localhost:1713/api/Contract/GetBy?contractId=' + contractId)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;

    };

    this.updateContractInfo = function (contractInfo) {
        var defer = $q.defer();
        $http.update('http://localhost:1713/api/Contract/Update', contractInfo)
            .then(function (data) {
                defer.resolve(data.data);
            });

        return defer.promise;
    };

    this.deletecontract = function (contractId) {

        var defer = $q.defer();
        $http.get('http://localhost:1713/api/Contract/Delete?contractId='+contractId)
            .then(function (data) {
                defer.resolve(data.data);
            });
        return defer.promise;

    };
});
