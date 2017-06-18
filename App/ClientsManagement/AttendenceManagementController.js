securityApp.controller('AttendenceManagementController', function ($scope, $window, $location, ngNotify, ContractManagementService) {
    $scope.listOfContracts = [];
    $scope.listOfUsers = [];
    $scope.selectedContract = null;
    $scope.contractInfo = null;
    $scope.ContractId = null;

    $scope.selectedDate = Date();
    $('#paginator').datepaginator();
    $('#paginator').on('selectedDateChanged', function (event, date) {
        $scope.selectedDate = date;
        $scope.getUsersList();
    });
    $scope.getUsersList = function () {
        $scope.listOfUsers = [];
        console.log($scope.selectedDate);
        ContractManagementService.getUsersForContract($scope.selectedContract, $scope.selectedDate).then(function (result) {
            
            if (result != null) {
                console.log(result.data);
                $scope.listOfUsers = result.data;
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
    };
   

    $scope.saveAttendence = function () {
        ContractManagementService.saveAttendance($scope.listOfUsers).then(function (result) {
            if (result != null) {
                ngNotify.set('Attendance Details Saved Successfully',
                        {
                            theme: 'pure',
                            position: 'top',
                            type: 'success',
                            button: 'true',
                            sticky: 'false',
                        });
                $scope.getUsersList();
            } else {
                ngNotify.set('Saving Attendance Details Failed',
                        {
                            theme: 'pure',
                            position: 'top',
                            type: 'error',
                            button: 'true',
                            sticky: 'false',
                        });
                $scope.getUsersList();
            }
        });


    };

    $scope.submitAttendance = function () {
        ContractManagementService.submitAttendance($scope.listOfUsers).then(function (result) {
            if (result != null) {
                ngNotify.set('Attendance Details Submitted Successfully',
                        {
                            theme: 'pure',
                            position: 'top',
                            type: 'success',
                            button: 'true',
                            sticky: 'false',
                        });
                $scope.getUsersList();
            } else {
                ngNotify.set('Attendance Submittin Failed',
                        {
                            theme: 'pure',
                            position: 'top',
                            type: 'error',
                            button: 'true',
                            sticky: 'false',
                        });
                $scope.getUsersList();
            }
        });

    };
    var inIt = function () {
        ContractManagementService.getAllContracts().then(function (data) {
            if (data != null) {
                $scope.listOfContracts = data;               
            }
            else {
                ngNotify.set('Contracts loading failed',
                   {
                       theme: 'pure',
                       position: 'top',
                       type: 'success',
                       button: 'true',
                       sticky: 'false',
                   });
            }
        });

    };
    inIt();

});