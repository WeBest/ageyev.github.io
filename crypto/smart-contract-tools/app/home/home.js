(function () {

    'use strict';

    var controller_name = "app.home";

    var controller = angular.module(controller_name, []);

// https://docs.angularjs.org/api/ng/provider/$logProvider
    controller.config(function ($logProvider) {
            // $logProvider.debugEnabled(false);
            $logProvider.debugEnabled(true);
        }
    );

    controller.controller(controller_name, [
        '$scope',
        '$rootScope',
        '$log',
        '$state',
        function homeCtrl($scope,
                          $rootScope,
                          $log,
                          $state) {

            $log.info("controller ", controller_name, "started");

        } // end function homeCtl
    ]);
})();