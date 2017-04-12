securityApp.controller('AddUserController', function($scope, UserManagementService,ngNotify) {
    $scope.test = "Testing";
    $scope.currentStep = 1;
    // Initial Value
    $scope.form = {

        next: function (form) {

            

            if (form.$valid) {
                form.$setPristine();
                nextStep();
            } else {
                var field = null, firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }

                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }

                angular.element('.ng-invalid[name=' + firstError + ']').focus();
                errorMessage();
            }
        },
        prev: function (form) {
           
            prevStep();
        },
        goTo: function (form, i) {
            if (parseInt($scope.currentStep) > parseInt(i)) {
              
                goToStep(i);

            } else {
                if (form.$valid) {
                   
                    goToStep(i);

                } else
                    errorMessage();
            }
        },
        submit: function () {

        },
        reset: function () {

        }
    };


    var nextStep = function () {
        $scope.currentStep++;
    };
    var prevStep = function () {
        $scope.currentStep--;
    };
    var goToStep = function (i) {
        $scope.currentStep = i;
    };
    var errorMessage = function (i) {

        ngNotify.set('please complete the form in this step before proceeding', {
            theme: 'pure',
            position: 'top',
            type: 'error',
            button: 'true',
            sticky: 'false',
        });
    };
});