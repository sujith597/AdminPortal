securityApp.controller('ViewUserController', function ($scope,$stateParams, UserManagementService, ngNotify) {
    $scope.userId = $stateParams.UserId;
    $scope.userInfo = {};
    $scope.showAdditionalDetails = true;
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
    UserManagementService.getUserInformation($scope.userId).then(function (result) {
        if (result != null) {
            $scope.userInfo = result;
        } else {
            ngNotify.set('Unable to get user details',
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