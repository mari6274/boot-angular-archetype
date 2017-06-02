(function () {
    angular.module('app').service('ExampleService', ['$location', ExampleService]);

    function ExampleService($location) {
        this.serverAddress = serverAddress;

        return this;

        function serverAddress() {
            return $location.protocol() + '://' + $location.host() + ':' + $location.port();
        }
    }
})();