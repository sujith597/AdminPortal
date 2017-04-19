﻿securityApp.controller('ViewUserController', function ($scope,$stateParams, UserManagementService, ngNotify) {
    $scope.userId = $stateParams.UserId;
    $scope.userInfo = {};
    
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
    $scope.userInfo = {
        "familyDetails": [
            { "residingWithEmployee": true, "name": "sfasdfasd", "no": 1 },
            {
                "name": "asdfasd",
                "dob": "fasdfasd",
                "occupasion": "fasdfa",
                "relationship": "sdfasdfasd",
                "age": "fasdfasdf",
                "pfNominee": true,
                "esiNominee": true,
                "no": 2
            }, {
                "name": "sdfasdfasd",
                "dob": "asdfas",
                "relationship": "dfasdf",
                "occupasion": "asdfasd",
                "age": "fasdfadf",
                "esiNominee": true,
                "pfNominee": true,
                "no": 3
            }, {
                "name": "New pnme 1",
                "dob": "sdfas",
                "occupasion": "sfda",
                "relationship": "sdfa",
                "age": "sdfasd",
                "esiNominee": true,
                "pfNominee": true,
                "residingWithEmployee": true,
                "no": 4
            }
        ],
        "educationDetails": [],
        "previousExperiences": [],
        "physicalStandard": {
            "height": "5.10",
            "weigth": "90",
            "chestUnExpanded": "56",
            "chestExpanded": "55",
            "hariColor": "Black",
            "eyesColor": "Brown"
        },
        "addressDetails": {
            "tmpaddressLine1": "Line 1",
            "tmpaddressLine2": "line 2",
            "tmplandMark": "Landmark1",
            "tmppostOffice": "Kukatpally",
            "tmppoliceStation": "pragathi nagar",
            "tmpstate": "telugu",
            "tmpdistrict": "hindi",
            "tmppinCode": "500072",
            "peraddressLine1": "Line 1",
            "peraddressLine2": "line 2",
            "perlandMark": "Landmark1",
            "perpostOffice": "Kukatpally"
        },
        "employeeinfo": {
            "refNameAndAddress": "ref name 1, Address 1",
            "refNameAndAddress2": "refe name 3, address 2",
            "bloodGroup": "urdu",
            "physicalRemarks": "No physical remarks",
            "identificationMarks1": "on head",
            "identificationMarks2": "on hand",
            "remarks": "no remaks",
            "speciallyAbled": true,
            "applicantCategory": "hindi"
        },
        "personalInformation": {
            "firstName": "Sujith",
            "middleName": "kumar",
            "lastName": "pallapati",
            "email": "sujithkumar649@gmail.com",
            "dateOfBirth": "2017-04-17T18:30:00.000Z",
            "phone": "1231231231",
            "religion": "HIndu",
            "gender": "male",
            "qualification": "B.tech",
            "motherTongue": "hindi",
            "languagesKnown": "Telugu, english",
            "designation": "HI",
            "dateOfInterview": "2017-04-03T18:30:00.000Z",
            "dateOfJoin": "2017-04-20T18:30:00.000Z",
            "fatherName": "Subba rao",
            "fatherOccupation": "frutis",
            "motherName": "chowdeswari",
            "spouseName": "triveni",
            "avatar":"assets/images/default-user.png"
        },
        "additionalInformation": {
            "branch": "CA",
            "division": "CA",
            "department": "NV",
            "sitePostedTo": "CA",
            "grossSalary": "100000",
            "psaraCode": "w453452",
            "idCardIssuedDate": "2017-03-27T18:30:00.000Z",
            "idCardValidTillDate": "2017-04-19T18:30:00.000Z",
            "previousEmployee": "Employee2"
        },
        "bankDetails": {
            "bankAccountNumber": "12312423423",
            "bankName": "CA",
            "branchName": "Kukatpally",
            "branchCode": "HDFOC0001",
            "bankAppNo": "App1231",
            "bankCodeNo": "109231HDFC",
            "bankCardRefernce": "No refernece",
            "ifscCode": "21312HDFC",
            "regionCode": "SC",
            "insDebtAmount": "1000",
            "insuranceNominee": "mother",
            "nomineeDOB": "10-10-10",
            "insuranceCover": "10000",
            "nomineeRelationShip": "mother",
            "UANNo": "12309123A3210423"
        },
        "PF": { "PFDeduct": true, "epfNo": "123123nkdsnfkasdk", "PTDeduct": true, "pfEnrollDate": "sadfsad" },
        "ESI": { "ESIDeduct": true, "esiNo": "hdfg24234", "esiDispName": "43534534" },
        "salaryDetails": { "additionalAmount": "1000000", "foodAllowance": "21000" },
        "SalaryStructure": {
            "noOfDays": "telugu",
            "Basic": "10000",
            "HRA": "2342",
            "CCA": "23458",
            "gratutity": "e645",
            "WA": "4634",
            "NFHs": "645",
            "RC": "4634",
            "Nots": "hindi",
            "CS": "4563",
            "splAllowance": "45",
            "OA": "4564",
            "bonus": "5464",
            "LA": "453",
            "Conveyance": "43",
            "DA": "23",
            "mobileAllowance": "5678",
            "travellingAllowance": "7645"
        },
        "govProofs": {
            "aadharCardNumber": "1231231",
            "aadharCardName": "sdfs",
            "drivingLicenseNumber": "242345",
            "drivingLicenseName": "346456",
            "voterIDNumber": "3242",
            "voterIDName": "hfghd",
            "rationCardNumber": "323423",
            "rationCardName": "gfthjg",
            "pancardNumber": "3654",
            "pancardName": "nb",
            "bankPassBookNumber": "34234",
            "bankPassBookName": "asdfrewt",
            "electricityBillNumber": "12334",
            "electricityBillName": "fdfsgsdf",
            "esicCardNumber": "234234",
            "esicCardName": "5sasda",
            "ExServiceNumber": "342452",
            "EMPExService": true,
            "ExServicedateOfEnrollment": "dsgfsd",
            "ExServiceRank": "fgsd",
            "ExServiceCrops": "sfgs",
            "ExServicemedicalCategory": "nbsc",
            "ExServiceconduct": "sass",
            "ExServiceTrade": "err",
            "ExServicedateOfDischarge": "ert",
            "otherCardsNumber": "sdfhsd",
            "otherCardsName": "ertsdf"
        }
    };
    //(UserManagementService.getUserInformation($scope.userId).then(function(userInfo) {

    //}))();

});