securityApp.controller('AddClientController', function ($scope, $state, $stateParams, $location, ClientManagementService, ngNotify, flowFactory) {
    $scope.clientInfo = {};
    $scope.editMode = false;
    if ($state.current.name == "EditClient" && $stateParams.ClientId) {
        $scope.clientId = $stateParams.ClientId;
        $scope.editMode = true;
    }
   

    $scope.addClient = function () {
        if ($scope.editMode) {
            ClientManagementService.updateClientInfo($scope.clientInfo).then(function (result) {
                if (result) {
                    ngNotify.set('Client updated successfully',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'success',
                        button: 'true',
                        sticky: 'false',
                    });
                    $location.path('/ClientsManagement');
                } else {
                    ngNotify.set('Client addition failed',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'error',
                        button: 'true',
                        sticky: 'false',
                    });
                }
            });
        } else {

            ClientManagementService.addClient($scope.clientInfo).then(function (result) {
                if (result) {
                    ngNotify.set('Client added successfully',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'success',
                        button: 'true',
                        sticky: 'false',
                    });
                    $location.path('/ClientsManagement');
                } else {
                    ngNotify.set('Client addition failed',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'error',
                        button: 'true',
                        sticky: 'false',
                    });
                }
            });
        }
    };

    if ($scope.editMode) {
        ClientManagementService.getClientInformation($scope.clientId).then(function (result) {
            if (result) {
                $scope.clientInfo = result;
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