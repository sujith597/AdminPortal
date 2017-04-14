securityApp.controller('AddUserController', function ($scope, UserManagementService, ngNotify, flowFactory) {
    $scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();
   
    $scope.userInfo = {
        firstName: 'Peter',
        lastName: 'Clark',
        url: 'www.example.com',
        email: 'peter@example.com',
        phone: '(641)-734-4763',
        gender: 'male',
        zipCode: '12345',
        city: 'London (UK)',
        avatar: 'assets/images/avatar-1-xl.jpg',
        twitter: '',
        github: '',
        facebook: '',
        linkedin: '',
        google: '',
        skype: 'peterclark82'
    };
    $scope.userInfo.address = {};
    $scope.userInfo.address.tmp = {};
    $scope.userInfo.address.per = {};
    $scope.userInfo.FamilyDetails = [];
    $scope.userInfo.Qualificaitons = [];
    $scope.userInfo.PreviousExperiences = [];

    $scope.userInfo.Proofs = {};
    $scope.userInfo.Proofs.familyMember = {};
    $scope.userInfo.Proofs.qualification = {};
    $scope.userInfo.Proofs.previousExperience = {};

    $scope.userInfo.Proofs.familyMember.residingWithEmployee = true;
    $scope.change = function(value) {
        if (value) {
            $scope.userInfo.address.per = angular.copy($scope.userInfo.address.tmp);
        } else {
            $scope.userInfo.address.per = {};
        }

    };

    $scope.addFamilyMember = function () {
        if ($scope.userInfo.Proofs.familyMember.name) {
            $scope.userInfo.Proofs.familyMember.no = $scope.userInfo.FamilyDetails.length + 1;
            $scope.userInfo.FamilyDetails.push($scope.userInfo.Proofs.familyMember);
            $scope.userInfo.Proofs.familyMember = {};
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
        if ($scope.userInfo.Proofs.qualification.name) {
            $scope.userInfo.Proofs.qualification.no = $scope.userInfo.Qualificaitons.length + 1;
            $scope.userInfo.Qualificaitons.push($scope.userInfo.Proofs.qualification);
            $scope.userInfo.Proofs.qualification = {};
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
        if ($scope.userInfo.Proofs.previousExperience.companyName) {
            $scope.userInfo.Proofs.previousExperience.no = $scope.userInfo.PreviousExperiences.length + 1;
            $scope.userInfo.PreviousExperiences.push($scope.userInfo.Proofs.previousExperience);
            $scope.userInfo.Proofs.previousExperience = {};
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
        $scope.userInfo.FamilyDetails = _.reject($scope.userInfo.FamilyDetails, function (family) {
            return familymem.no == family.no;
        });
    };
    $scope.removeQualification = function (qua) {
        $scope.userInfo.Qualificaitons = _.reject($scope.userInfo.Qualificaitons, function (qualificaiton) {
            return qua.no == qualificaiton.no;
        });
    };
    $scope.removePreviousExp = function (exp) {
        $scope.userInfo.PreviousExperiences = _.reject($scope.userInfo.PreviousExperiences, function (experioence) {
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
    $scope.format = $scope.formats[0];

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
});