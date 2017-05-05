securityApp.controller('ViewClientController', function ($scope, $stateParams, ClientManagementService, ngNotify) {
    $scope.clientId = $stateParams.UserId;
    $scope.clientInfo = {};
   
   
    ClientManagementService.getClientInformation($scope.clientId).then(function (result) {
        if (result) {
            console.log(result);

            $scope.clientInfo = result;
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