(function() {
    angular.module("confirmModule", []);
    
    angular.module("confirmModule").service("confirmService", ConfirmService);

    ConfirmService.$inject = ["$rootScope", "$q", "$compile"];
    function ConfirmService($rootScope, $q, $compile) {

        this.confirm = function(titulo, mensaje) {
            var defer = $q.defer();
            var html = "<div class='confirm-wrapper' id='confirm-id-{{ $id }}'><div class='confirm-container'><div class='confirm-title'>{{ titulo }}</div>" +
                        "<div class='confirm-content'>{{ mensaje }}</div>"  +
                        "<div class='confirm-buttons'><button ng-click='cerrar(true)'>Si</button><button ng-click='cerrar(false)'>No</button></div></div>"+"</div>";
            var scope = $rootScope.$new();

            scope.titulo = titulo;
            scope.mensaje = mensaje;

            scope.cerrar = function(afirmativo) {

                document.querySelector("#confirm-id-"+scope.$id).remove();

                if(afirmativo) {
                    defer.resolve();
                }else{
                    defer.reject();
                }
            }

            var htmlCompilado = $compile(html)(scope);

            document.querySelector("body").appendChild(htmlCompilado[0]);

            return defer.promise;
        }

    }
})();