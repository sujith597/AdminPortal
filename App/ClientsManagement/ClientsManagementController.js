securityApp.controller('ClientManagementController', function ($scope, $window, $location, ClientManagementService) {
    $scope.clientSearchText;
    var clientsList;
    $scope.clientsGrid = {
        enableSorting: true,
        paginationPageSizes: [25, 50, 100],
        paginationPageSize: 25,
        data: null,
        enableGridMenu: true,
        enableSelectAll: true,
        exporterCsvFilename: 'Clients.csv',
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

    ClientManagementService.getAllClients().then(function (data) {
        clientsList = data;
        $scope.clientsGrid.data = data;
        $scope.clientsGrid.columnDefs = [
            { name: 'name', field: 'name' },
            { name: 'gender', field: 'gender' },
            { name: 'company', field: 'company' },
            {
                name: 'Actions',
                cellTemplate:
                        '<center><div class="ui-grid-cell"><div class="ui-grid-cell-contents" style="text-align:center">' +
                            '<button href="#" class="btn btn-primary btn-xs" ng-click="grid.appScope.ViewClient(row.entity)"><i class="fa fa-folder"></i> View </button>' +
                        ' <button href="#" class="btn btn-info btn-xs" ng-click="grid.appScope.EditClient(row.entity)"><i class="fa fa-pencil"></i> Edit </button>' +
                        '<button href="#" class="btn btn-danger btn-xs" data-title="Delete"  data-toggle="modal" data-target="#delete"><i class="fa fa-trash-o"></i> Delete </button>' +
                            '</div></div></center>'
            }
        ];
    });

    $scope.EditClient = function (user) {
        $location.path('/EditClient/' + user.name);
    };
    $scope.ViewClient = function (user) {
        $location.path('/ViewClient/' + user.name);
    };
    $scope.DeleteClient = function () {
        ClientManagementService.deleteClient($scope.selectedUser.name).then(function () {
            ngNotify.set('Client deleted successfully',
                    {
                        theme: 'pure',
                        position: 'top',
                        type: 'success',
                        button: 'true',
                        sticky: 'false',
                    });
        });

    };
    $scope.updateClientsGrid = function () {
        if ($scope.clientSearchText) {
            $scope.clientsGrid.data = _.filter(clientsList,
                function (client) {
                    return client.name.toLowerCase().indexOf($scope.clientSearchText.toLowerCase()) > -1;
                });
        } else {
            $scope.ClientsGrid.data = clientsList;
        }
    };

    $scope.goToAddClient = function () {
        $location.path('/AddClient');
    };

});