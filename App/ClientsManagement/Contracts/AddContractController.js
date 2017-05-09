securityApp.controller('AddContractController', function ($scope, $state, $stateParams, $location, ContractManagementService, ngNotify, flowFactory) {
    $scope.contractInfo = {};
    $scope.editMode = false;
    $scope.usersList = null;
    $scope.resourceInfo = {};
    $scope.contractInfo = {};
    $scope.resourceInfo.users = [{ "id": 1, "name": "One" }];
    $scope.contractInfo.ContractHumanResourceNeeds = [];

    if ($state.current.name == "EditContract" && $stateParams.ContractId) {
        $scope.contractId = $stateParams.ContractId;
        $scope.editMode = true;
    }


    $scope.addContract = function () {
        if ($scope.editMode) {
            ContractManagementService.updateContractInfo($scope.contractInfo).then(function (result) {
                if (result != null) {
                    ngNotify.set('Contract updated successfully',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'success',
                        button: 'true',
                        sticky: 'false',
                    });
                    $location.path('/ContractsManagement');
                } else {
                    ngNotify.set('Contract addition failed',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'error',
                        button: 'true',
                        sticky: 'false',
                    });
                }
                $location.path('/ContractsManagement');
            });
        } else {

            ContractManagementService.addContract($scope.contractInfo).then(function (result) {
                if (result != null) {
                    ngNotify.set('Contract added successfully',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'success',
                        button: 'true',
                        sticky: 'false',
                    });
                    $location.path('/ContractsManagement');
                } else {
                    ngNotify.set('Contract addition failed',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'error',
                        button: 'true',
                        sticky: 'false',
                    });
                }
                $location.path('/ContractsManagement');
            });
        }
    };

    $scope.getUsersForDesignation = function () {
        $scope.usersList = null;
        if ($scope.resourceInfo.Designation) {
            ContractManagementService.getUsersForDesignation($scope.resourceInfo.Designation).then(function (result) {
                if (result != null) {
                    $scope.usersList = result;
                }
                else {
                    ngNotify.set('Unable to get user details for selected designation', {
                        theme: 'pure',
                        position: 'top',
                        type: 'error',
                        button: 'true',
                        sticky: 'false',
                    });
                };
            });
        }
    };

    $scope.addResource = function () {
        if ($scope.resourceInfo.Qty > 0) {
            $scope.resourceInfo.no = $scope.contractInfo.ContractHumanResourceNeeds.length + 1;
            $scope.contractInfo.ContractHumanResourceNeeds.push($scope.resourceInfo);
        }
        else {
            ngNotify.set('Add Minimum  count', {
                theme: 'pure',
                position: 'top',
                type: 'error',
                button: 'true',
                sticky: 'false',
            });
        }
        $scope.resourceInfo = {};
        $scope.resourceInfo.users = [];
       
    };

    $scope.viewResources = function (selectedContractItem) {
        $scope.selectedResourceUsers = [];
        $scope.selectedResourceUsers = selectedContractItem.users;
    };

    if ($scope.editMode) {
        ContractManagementService.getContractInformation($scope.contractId).then(function (result) {
            if (result != null) {
                $scope.contractInfo = result;
            } else {
                ngNotify.set('Unable to get user details', {
                    theme: 'pure',
                    position: 'top',
                    type: 'error',
                    button: 'true',
                    sticky: 'false',
                });
            }
        });
    }
});