(function() {

    angular.module("app", ["confirmModule"]);

    angular.module("app").controller("AppController", AppController);

    AppController.$inject = ["$scope", "$log", "confirmService"];

    function AppController($scope, $log, confirmService) {

        $log.info("Controlador principal iniciado");

        $scope.confirmar = function() {
            confirmService.confirm("¿Esta seguro?", "Esta acción es irreversible").then(function() {
                $log.info("Acceptaste la accion peligrosa");
            }).catch(function () {
                $log.info("No aceptaste");
            });
        }

    }

})();