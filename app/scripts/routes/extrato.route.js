angular.module('extratoLancamentoContaApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/extrato.html',
            controller: 'extratoCtrl'
        });
});