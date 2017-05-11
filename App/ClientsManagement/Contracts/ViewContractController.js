securityApp.controller('ViewContractController', function ($scope, $state, $stateParams, $location, ContractManagementService, ngNotify, flowFactory) {

    $scope.ContractId = $stateParams.ContractId;
    $scope.contractInfo = {};
    $scope.selectedResourceUsers = [];

    ContractManagementService.getContractInformation($scope.ContractId).then(function (result) {
        if (result != null) {
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

    $scope.viewResources = function (selectedContractItem) {
        $scope.selectedResourceUsers = [];
        $scope.selectedResourceUsers = selectedContractItem.users;
    };
});