angular.module('extratoLancamentoContaApp').controller('extratoCtrl', function(ExtratoService, $scope) {
	ExtratoService.get().then(function(response) {
        $scope.lancamentos = response.data;
    });	
});