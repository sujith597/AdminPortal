securityApp.controller('AddUserController', function ($scope, UserManagementService, ngNotify, flowFactory) {
    $scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();
   
    $scope.userInfo = {};
    $scope.personalInformation = {};
    
    $scope.userInfo.familyDetails = [];
    $scope.userInfo.educationDetails = [];
    $scope.userInfo.previousExperiences = [];
    $scope.userInfoLists = {};
    $scope.userInfoLists.Proofs = {};
    $scope.userInfoLists.Proofs.familyMember = {};
    $scope.userInfoLists.Proofs.qualification = {};
    $scope.userInfoLists.Proofs.previousExperience = {};

    $scope.userInfoLists.Proofs.familyMember.residingWithEmployee = true;
    $scope.change = function(value) {
        if (value) {
            $scope.userInfo.addressDetails.peraddressLine1 = $scope.userInfo.addressDetails.tmpaddressLine1;
            $scope.userInfo.addressDetails.peraddressLine2 = $scope.userInfo.addressDetails.tmpaddressLine2;
            $scope.userInfo.addressDetails.perlandMark = $scope.userInfo.addressDetails.tmplandMark;
            $scope.userInfo.addressDetails.perpostOffice = $scope.userInfo.addressDetails.tmppostOffice;
            $scope.userInfo.addressDetails.perpoliceStation = scope.userInfo.addressDetails.tmppoliceStation;
            $scope.userInfo.addressDetails.perstate = $scope.userInfo.addressDetails.tmpstate;
            $scope.userInfo.addressDetails.perdistrict = $scope.userInfo.addressDetails.tmpdistrict;
            $scope.userInfo.addressDetails.perpinCode = $scope.userInfo.addressDetails.tmppinCode;
        } else {
            $scope.userInfo.addressDetails.peraddressLine1 = "";
            $scope.userInfo.addressDetails.peraddressLine2 = "";
            $scope.userInfo.addressDetails.perlandMark = "";
            $scope.userInfo.addressDetails.perpostOffice = "";
            $scope.userInfo.addressDetails.perpoliceStation = "";
            $scope.userInfo.addressDetails.perstate = "";
            $scope.userInfo.addressDetails.perdistrict = "";
            $scope.userInfo.addressDetails.perpinCode = "";
        }

    };

    $scope.addFamilyMember = function () {
        if ($scope.userInfoLists.Proofs.familyMember.name) {
            $scope.userInfoLists.Proofs.familyMember.no = $scope.userInfo.familyDetails.length + 1;
            $scope.userInfo.familyDetails.push($scope.userInfoLists.Proofs.familyMember);
            $scope.userInfoLists.Proofs.familyMember = {};
        } else {
            ngNotify.set('please enter Family Member which is mandatory feild', {
                theme: 'pure',
                position: 'top',
                type: 'error',
                button: 'true',
                sticky: 'false',
            });
        }
    };
    $scope.addQualification = function () {
        if ($scope.userInfoLists.Proofs.qualification.name) {
            $scope.userInfoLists.Proofs.qualification.no = $scope.userInfo.educationDetails.length + 1;
            $scope.userInfo.educationDetails.push($scope.userInfoLists.Proofs.qualification);
            $scope.userInfoLists.Proofs.qualification = {};
        } else {
            ngNotify.set('please enter Qualificaiton Name which is mandatory feild', {
                theme: 'pure',
                position: 'top',
                type: 'error',
                button: 'true',
                sticky: 'false',
            });
        }
    };
    $scope.addPreviousExperience = function () {
        if ($scope.userInfoLists.Proofs.previousExperience.companyName) {
            $scope.userInfoLists.Proofs.previousExperience.no = $scope.userInfo.previousExperiences.length + 1;
            $scope.userInfo.previousExperiences.push($scope.userInfoLists.Proofs.previousExperience);
            $scope.userInfoLists.Proofs.previousExperience = {};
        } else {
            ngNotify.set('please enter Company Name and Address which is mandatory feild', {
                theme: 'pure',
                position: 'top',
                type: 'error',
                button: 'true',
                sticky: 'false',
            });
        }
    };

    $scope.removeFamilyMember = function(familymem) {
        $scope.userInfo.familyDetails = _.reject($scope.userInfo.familyDetails, function (family) {
            return familymem.no == family.no;
        });
    };
    $scope.removeQualification = function (qua) {
        $scope.userInfo.educationDetails = _.reject($scope.userInfo.educationDetails, function (qualificaiton) {
            return qua.no == qualificaiton.no;
        });
    };
    $scope.removePreviousExp = function (exp) {
        $scope.userInfo.previousExperiences = _.reject($scope.userInfo.previousExperiences, function (experioence) {
            return exp.no == experioence.no;
        });
    };
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();
    $scope.start = $scope.minDate;
    $scope.end = $scope.maxDate;

    $scope.clear = function () {
        $scope.dt = null;
    };
    $scope.datepickerOptions = {
        showWeeks: false,
        startingDay: 1
    };
    $scope.dateDisabledOptions = {
        dateDisabled: disabled,
        showWeeks: false,
        startingDay: 1
    };
    $scope.startOptions = {
        showWeeks: false,
        startingDay: 1,
        minDate: $scope.minDate,
        maxDate: $scope.maxDate
    };
    $scope.endOptions = {
        showWeeks: false,
        startingDay: 1,
        minDate: $scope.minDate,
        maxDate: $scope.maxDate
    };
    // Disable weekend selection
    function disabled(data) {
        var date = data.date, mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }


    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };
    $scope.toggleMin = function () {
        $scope.datepickerOptions.minDate = $scope.datepickerOptions.minDate ? null : new Date();
        $scope.dateDisabledOptions.minDate = $scope.dateDisabledOptions.minDate ? null : new Date();
    };
    $scope.maxDate = new Date(2020, 5, 22);
    $scope.minDate = new Date(1970, 12, 31);

    $scope.open = function () {
        $scope.opened = !$scope.opened;
    };


    $scope.endOpen = function () {
        $scope.endOptions.minDate = $scope.start;
        $scope.startOpened = false;
        $scope.endOpened = !$scope.endOpened;
    };
    $scope.startOpen = function () {
        $scope.startOptions.maxDate = $scope.end;
        $scope.endOpened = false;
        $scope.startOpened = !$scope.startOpened;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[2];

    $scope.hstep = 1;
    $scope.mstep = 15;

    // Time Picker
    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.update = function () {
        var d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        $scope.dt = d;
    };

    $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.dt);
    };

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.addUser = function() {
        UserManagementService.addUser($scope.userInfo).then(function(result) {
            if (result) {
                ngNotify.set('User added successfully',
                {
                    theme: 'pure',
                    position: 'top',
                    type: 'success',
                    button: 'true',
                    sticky: 'false',
                });
            } else {
                ngNotify.set('User addition failed', {
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