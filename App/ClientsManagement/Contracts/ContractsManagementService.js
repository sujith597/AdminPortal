securityApp.service('ContractManagementService', function ($http, $q) {
    this.getAllContracts = function () {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Contract/GetAll')
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };
    this.addContract = function (contractInfo) {
        var defer = $q.defer();
        $http.post('http://fmsapi.sujithkumar.in/api/Contract/Create', contractInfo)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };

    this.getUsersForDesignation = function (designation) {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Employee/GetEmployeeByDesignation?designation=' + designation)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });;

        return defer.promise;
    };

    this.getContractInformation = function (id) {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Contract/GetBy?Id=' + id)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });;

        return defer.promise;

    };

    this.updateContractInfo = function (contractInfo) {
        var defer = $q.defer();
        $http.update('http://fmsapi.sujithkumar.in/api/Contract/Update', contractInfo)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };

    this.deletecontract = function (contractId) {

        var defer = $q.defer();
        $http.get('http://fmsapi.sujithkumar.in/api/Contract/Delete?contractId=' + contractId)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });
        return defer.promise;

    };
});
