angular.module("versionManagementApp",["ui.router"])
    // .constant('timeInterval', 2000)
    // .config(['ChartJsProvider', function (ChartJsProvider) {
    //     ChartJsProvider.setOptions({
    //         colours: ['#9F0A80', '#18AF0', '#983570', '#809358']
    //     });
    // }])
    .config(function ($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/config');

        $stateProvider.state('config', {
            url: '/config',
            templateUrl: 'view/transferConfig.html'
        }).state('status', {
            url: '/status',
            templateUrl: 'view/transferStatus.html'
        });
    });