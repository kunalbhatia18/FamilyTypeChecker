/**
 * Created by wwaller on 11/27/16.
 */
(function () {
    'use strict';

    angular.module('FamilyCheck', [])
        .controller('FamilyCheckController', FamilyCheck);

    FamilyCheck.$inject = ['$scope'];
    function FamilyCheck ($scope) {
        $scope.typicalFamily = '';
        $scope.FamilyCheckResponse = '';

        $scope.itemCount = function countArrayItems (items) {
            var FamilyItemCount = 0;
            var FamilyItemArray = [];

            if (items.trim() !== '' && items !== null &&
                items !== undefined && items != Infinity) {
                FamilyItemArray = items.split(',');
                for (var item in FamilyItemArray) {
                    if (FamilyItemArray[item].trim().length > 0) {
                        FamilyItemCount = FamilyItemCount + 1;
                    }
                }
            }

            return FamilyItemCount;
        };

        $scope.isTooMuch = function checkMealSize () {
            var noOfItems =
                $scope.itemCount($scope.typicalFamily);
            var returnedMessage = 'Please enter data first';
            if (noOfItems>= 1 && noOfItems <= 3) {
                returnedMessage = 'Nucelur Family';
            }
            else if (noOfItems >= 4) {
                returnedMessage = 'Joint Family!';
            }

            $scope.FamilyCheckResponse = returnedMessage;
        };

    }
})();
