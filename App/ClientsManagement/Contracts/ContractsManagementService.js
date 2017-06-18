securityApp.service('ContractManagementService', function ($http, $q) {
    this.getAllContracts = function () {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Contract/GetAll')
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };
    this.addContract = function (contractInfo) {
        var defer = $q.defer();
        $http.post('http://fmsapi.sujithkumar.in/api/Contract/Create', contractInfo)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };

    this.getUsersForDesignation = function (designation) {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Employee/GetEmployeeByDesignation?designation=' + designation)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });;

        return defer.promise;
    };

    this.getContractInformation = function (id) {
        var defer = $q.defer();

        $http.get('http://fmsapi.sujithkumar.in/api/Contract/GetBy?Id=' + id)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });;

        return defer.promise;

    };

    this.updateContractInfo = function (contractInfo) {
        var defer = $q.defer();
        $http.update('http://fmsapi.sujithkumar.in/api/Contract/Update', contractInfo)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;
    };

    this.deletecontract = function (contractId) {

        var defer = $q.defer();
        $http.get('http://fmsapi.sujithkumar.in/api/Contract/Delete?contractId=' + contractId)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });
        return defer.promise;

    };

    this.getUsersForContract = function (id,selectedDate) {
        var defer = $q.defer();
        var testObj = [{
                            "Id": 1,
                            "ContractId": "C4/2",
                            "EmployeeId": 2,
                            "EmployeeName": "Avi",
                            "EmployeeDesignation":"TestDesignation",
                            "AttendanceDate": "2017-02-02",
                            "Attendance": true,
                            "NoOfHours": 8
                        },
                        {
                            "Id": 2,
                            "ContractId": "C4/2",
                            "EmployeeId": 2,
                            "EmployeeName": "Avi",
                            "EmployeeDesignation": "TestDesignation",
                            "AttendanceDate": "2017-02-02",
                            "Attendance": true,
                            "NoOfHours": 8
                        }];
      //  var d = Date.parse(selectedDate);
        var date = new Date(selectedDate);
        var D = date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate();
        $http.get('http://fmsapi.sujithkumar.in/api/Attendance/GetAttendanceDetailsByDate?id=' + id+'&date='+D)
            .then(function (data) {
                defer.resolve(data);
            })
         .catch(function (fallback) {
             defer.resolve(testObj);
         });
        return defer.promise;
    };

    this.saveAttendance = function (usersList) {
        var defer = $q.defer();
        $http.post('http://fmsapi.sujithkumar.in/api/Attendance/SaveAttendance', usersList)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;

    };
    this.submitAttendance = function (usersList) {
        var defer = $q.defer();
        $http.post('http://fmsapi.sujithkumar.in/api/Attendance/SubmitAttendance', usersList)
            .then(function (data) {
                defer.resolve(data.data);
            })
         .catch(function (fallback) {
             defer.resolve(null);
         });

        return defer.promise;

    };
    
});
