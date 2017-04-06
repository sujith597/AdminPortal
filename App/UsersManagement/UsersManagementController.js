securityApp.controller('UserManagementController', function ($scope, UserManagementService) {
    $scope.userSearchText;
    var usersList;
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

    UserManagementService.getAllUsers().then(function (data) {
        usersList = data;
        $scope.usersGrid.data = data;
        $scope.usersGrid.columnDefs = [
            { name: 'name', field: 'name' },
            { name: 'gender', field: 'gender' },
            { name: 'company', field: 'company' },
            {
                name: 'Action',
                cellTemplate:
                    '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-warning" ng-click="grid.appScope.EditUser(row.entity)">Edit User</button>' +
                        '<button type="button" class="btn btn-danger" ng-click="grid.appScope.DeleteUser(row.entity)">Delete User</button> </div>'
    }
        ];
    });

    $scope.EditUser = function(user) {
        alert("HI");
    };

    $scope.DeleteUser = function(user) {
        alert("Deletre");

    };
    $scope.updateUsersGrid = function () {
        if ($scope.userSearchText) {
            $scope.usersGrid.data = _.filter(usersList,
                function (user) {
                    return user.name.toLowerCase().indexOf($scope.userSearchText.toLowerCase()) > -1;
                });
        } else {
            $scope.usersGrid.data = usersList;
        }
    };

});