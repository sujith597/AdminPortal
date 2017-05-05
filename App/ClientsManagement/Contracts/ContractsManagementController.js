securityApp.controller('ContractsManagementController',
    function ($scope, $window, $location, ngNotify, ContractManagementService) {
        $scope.contractSearchText;
        var contractsList;
        $scope.selectedContract = null;
        $scope.contractsGrid = {
            enableSorting: true,
            paginationPageSizes: [25, 50, 100],
            paginationPageSize: 25,
            data: null,
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'contracts.csv',
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
        var loadContracts = function () {
            ContractManagementService.getAllContracts().then(function (data) {
                contractsList = data;
                $scope.contractsGrid.data = data;
                $scope.contractsGrid.columnDefs = [
                    { name: 'Name', field: 'Name' },
                    { name: 'ClientId', field: 'ClientId' },
                    { name: 'ContractId', field: 'ContractId' },
                    { name: 'ContractStartDate', field: 'ContractStartDate' },
                    { name: 'ContractEndDate', field: 'ContractEndDate' },
                    {
                        name: 'Actions',
                        cellTemplate:
                                '<center><div class="ui-grid-cell"><div class="ui-grid-cell-contents" style="text-align:center">' +
                                    '<button href="#" class="btn btn-primary btn-xs" ng-click="grid.appScope.viewcontract(row.entity)"><i class="fa fa-folder"></i> View </button>' +
                                ' <button href="#" class="btn btn-info btn-xs" ng-click="grid.appScope.editcontract(row.entity)"><i class="fa fa-pencil"></i> Edit </button>' +
                                '<button href="#" class="btn btn-danger btn-xs" data-title="Delete" ng-click ="grid.appScope.delete(row.entity)"  data-toggle="modal" data-target="#delete"><i class="fa fa-trash-o"></i> Delete </button>' +
                                    '</div></div></center>'
                    }
                ];
            });
        };

        loadContracts();

        $scope.editcontract = function (contract) {
            $location.path('/Editcontract/' + contract.name);
        };
        $scope.viewcontract = function (contract) {
            $location.path('/Viewcontract/' + contract.name);
        };
        $scope.delete = function (contract) {

            $scope.selectedContract = contract;
        };
        $scope.deletecontract = function () {
            ContractManagementService.deletecontract($scope.selectedContract.ContractId).then(function () {
                ngNotify.set('contract deleted successfully',
                        {
                            theme: 'pure',
                            position: 'top',
                            type: 'success',
                            button: 'true',
                            sticky: 'false',
                        });
                loadContracts();
            });

        };
        $scope.updatecontractsGrid = function () {
            if ($scope.contractSearchText) {
                $scope.contractsGrid.data = _.filter(contractsList,
                    function (contract) {
                        return contract.name.toLowerCase().indexOf($scope.contractSearchText.toLowerCase()) > -1;
                    });
            } else {
                $scope.contractsGrid.data = contractsList;
            }
        };

        $scope.goToAddcontract = function () {
            $location.path('/AddContract');
        };

    });