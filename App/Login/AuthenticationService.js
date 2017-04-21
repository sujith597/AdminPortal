securityApp.service('AuthenticationService', function ($http, $q, $localStorage) {
    this.login = function (username, password) {
       
        var defer = $q.defer();

        $http.get('App/Login/Token.txt') // need to change this to post( Username and Password)
            .then(function (response) {
                if (response.data.token) {
                    $localStorage.currentUser = { username: username, token: response.data.token };
                    $http.defaults.headers.common.Authorization = 'Token ' + response.data.token;
                    return true;
                } else {
                    return false;
                }
            });
        return defer.promise;
    };
});
