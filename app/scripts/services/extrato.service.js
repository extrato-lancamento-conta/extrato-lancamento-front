angular.module('extratoLancamentoContaApp').service('ExtratoService', function($http) {
    this.get = function() {
        return $http.get('http://localhost:8080/v1/extrato/lancamentos');
    };
});