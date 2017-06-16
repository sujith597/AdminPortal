securityApp.controller('UserManagementController', function ($scope, $window, $location,ngNotify, UserManagementService) {
    $scope.userSearchText;
    var usersList;
    $scope.selectedUser = {};
    $scope.usersGrid = {
        enableSorting: true,
        paginationPageSizes: [25, 50, 100],
        paginationPageSize: 25,
        data: null,
        enableGridMenu: true,
        enableSelectAll: true,
        exporterCsvFilename: 'Users.csv',
        exporterPdfDefaultStyle: { fontSize: 9 },
        exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
        exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
        exporterPdfFooter: function (currentPage, pageCount) {
            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function (docDefinition) {
            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
            return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };

var loadUserGrid = function(){
    UserManagementService.getAllUsers().then(function (data) {
        if (data != null) {
            usersList = data;
            var EmpId = 0;
            $scope.usersGrid.data = data;
            var newColumn = {
                name: 'Actions',
                cellTemplate:
                    '<center><div class="ui-grid-cell"><div class="ui-grid-cell-contents" style="text-align:center">' +
                        '<button href="#" class="btn btn-primary btn-xs" ng-click="grid.appScope.ViewUser(row.entity)"><i class="fa fa-folder"></i> View </button>' +
                        ' <button href="#" class="btn btn-info btn-xs" ng-click="grid.appScope.EditUser(row.entity)"><i class="fa fa-pencil"></i> Edit </button>' +
                        '<button href="#" class="btn btn-danger btn-xs" ng-click="grid.appScope.Delete(row.entity)" data-title="Delete"  data-toggle="modal" data-target="#delete"><i class="fa fa-trash-o"></i> Delete </button>' +
                        '</div></div></center>'
            };

            $scope.usersGrid.columnDefs = [
              { name: 'Employee Id', field: 'Id' },
                { name: 'Employee Name', field: 'EmployeeName' },
                { name: 'SitePosted To', field: 'SitePostedTo' },
            { name: 'Status', feild: 'Status' },
                { name: 'Designation', feild: 'Designation' },
                { name: 'Date Of Joining', feild: 'DateOfJoining' }
            ];
            $scope.usersGrid.columnDefs.push(newColumn);
        }
        else {
            ngNotify.set('Employees loading failed',
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
loadUserGrid();
    $scope.ViewUser = function (user){
        $location.path('/ViewUser/'+user.Id);
    };
    $scope.EditUser = function (user) {
        $location.path('/EditUser/' + user.Id);
    };
    $scope.Delete = function(user){
        $scope.selectedUser = user;
    };

    $scope.DeleteUser = function () {
        UserManagementService.deleteUser($scope.selectedUser.EmpId).then(function (result) {
            if (result != null) {
                ngNotify.set('User deleted successfully',
                        {
                            theme: 'pure',
                            position: 'top',
                            type: 'success',
                            button: 'true',
                            sticky: 'false',
                        });
            }
            else {
                ngNotify.set('User deletion failed',
                      {
                          theme: 'pure',
                          position: 'top',
                          type: 'success',
                          button: 'true',
                          sticky: 'false',
                      });
            }
loadUserGrid();
                    
        });
    };
    $scope.updateUsersGrid = function () {
        if ($scope.userSearchText) {
            $scope.usersGrid.data = _.filter(usersList,
                function (user) {
                    return user.EmployeeName.toLowerCase().indexOf($scope.userSearchText.toLowerCase()) > -1;
                });
        } else {
            $scope.usersGrid.data = usersList;
        }
    };

    $scope.goToAddUser = function () {
        $location.path('/AddUser');
    };

});