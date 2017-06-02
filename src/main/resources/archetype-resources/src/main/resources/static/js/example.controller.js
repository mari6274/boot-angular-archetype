(function () {
    angular.module('app').controller('ExampleController', ['ExampleService', ExampleController]);

    function ExampleController(ExampleService) {
        var vm = this;
        vm.serverAddress = ExampleService.serverAddress();
    }
})();