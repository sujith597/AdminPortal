securityApp.controller('ViewContractController', function ($scope, $state, $stateParams, $location, ContractManagementService, ngNotify, flowFactory) {

    $scope.ContractId = $stateParams.ContractId;
    $scope.contractInfo = {};


    ContractManagementService.getContractInformation($scope.ContractId).then(function (result) {
        if (result) {
            console.log(result);

            $scope.contractInfo = result;
        } else {
            ngNotify.set('Unable to get client details',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'error',
                        button: 'true',
                        sticky: 'false',
                    });
        }
    });
});