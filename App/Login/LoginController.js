securityApp.controller('LoginController', function ($scope, $location, AuthenticationService, ngNotify) {
    $scope.disabled = true;

    $scope.validateUser = function () {
        AuthenticationService.login($scope.userName, $scope.passWord).then(function (result) {
            if (result == true) {
                $location.path('/Home');
            } else {
                ngNotify.set('Unable to login, Username and password are incorrect',
                        {
                            theme: 'pure',
                            position: 'top',
                            type: 'error',
                            button: 'true',
                            sticky: 'false',
                        });
            }
        });
    };

});