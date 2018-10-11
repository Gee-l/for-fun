var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.currentMonth = 0;
    $scope.subValueOne = 0;
    $scope.additionalMonths = [12];
    $scope.gauge = {
        value: $scope.currentMonth,
        subvalues: $scope.additionalMonths
    };
    
    $scope.gaugeOptions = {
        bindingOptions: {
            value: "gauge.value",
            subvalues: "gauge.subvalues"
        },
        scale: {
            startValue: 0, 
            endValue: 800,
            tickInterval: 50,
            label: {
                customizeText: function (arg) {
                    return "R " + arg.valueText;
                }
            }
        },
        rangeContainer: {
          ranges: [
            {startValue: "0", endValue: "200", color: "rgb(34,139,34)"},
            {startValue: "200", endValue: "400", color: "rgb(255,223,0)"},
            {startValue: "400", endValue: "600", color: "rgb(255,140,0)"},
            {startValue: "600", endValue: "800", color: "#CE2029"}
          ]
        },
        tooltip: { enabled: true },
        title: {
            text: "$pending meter",
            font: { size: 28 }
        }
    };
    
    $scope.currentMonthOptions = {
        bindingOptions: {
            value: "currentMonth"
        },
        min: 0,
        max: 800,
        width: 100,
        showSpinButtons: true
    };
    
    $scope.additionalMonthOne = {
        bindingOptions: {
            value: "subValueOne"
        },
        min: 0,
        max: 800,
        width: 100,
        showSpinButtons: true
    }; 
    
    $scope.editButton = {
        text: "Apply",
        width: 100,
        onClick: function(e) {
             $scope.additionalMonths = [$scope.subValueOne];        
             $scope.gauge = {
                 value: $scope.currentMonth,
                 subvalues: $scope.additionalMonths
             };
        }
    };
});