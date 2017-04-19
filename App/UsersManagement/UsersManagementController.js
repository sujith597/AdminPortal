securityApp.controller('UserManagementController', function ($scope, $window, $location, UserManagementService) {
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
        var EmpId = 0;
        $scope.usersGrid.data = data;
        var newColumn = {
            name: 'Actions',
            cellTemplate:
                '<center><div class="ui-grid-cell"><div class="ui-grid-cell-contents" style="text-align:center">' +
                    '<button href="#" class="btn btn-primary btn-xs" ng-click="grid.appScope.ViewUser(row.entity)"><i class="fa fa-folder"></i> View </button>' +
                    ' <button href="#" class="btn btn-info btn-xs" ng-click="grid.appScope.EditUser(row.entity)"><i class="fa fa-pencil"></i> Edit </button>' +
                    '<button href="#" class="btn btn-danger btn-xs" data-title="Delete"  data-toggle="modal" data-target="#delete"><i class="fa fa-trash-o"></i> Delete </button>' +
                    '</div></div></center>'
        };
       
        $scope.usersGrid.columnDefs = [
          { name: 'name', field: 'name' },
            { name: 'gender', field: 'gender' },
            { name: 'company', field: 'company' }
            
        ];
        $scope.usersGrid.columnDefs.push(newColumn);
    });

    $scope.ViewUser = function (user){
        $location.path('/ViewUser/'+user.name);
    };
    $scope.EditUser = function (user) {
        alert("HI");
    };

    $scope.DeleteUser = function () {
        alert("Delete");

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

    $scope.goToAddUser = function () {
        $location.path('/AddUser');
    };

});