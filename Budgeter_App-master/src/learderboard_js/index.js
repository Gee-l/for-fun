var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.gridOptions = {
        dataSource: students,
        keyExpr: "ID",
        selection: {
            mode: "single"
        },
        onSelectionChanged: function(e) {
            e.component.collapseAll(-1);
            e.component.expandRow(e.currentSelectedRowKeys[0]);
        },
        onContentReady: function(e) {
            if(!e.component.getSelectedRowKeys().length)
                e.component.selectRowsByIndexes(0);
        },
        columns: [{
            width: 70
        },
        "Username",
        "Name", {
        }],
        masterDetail: {
            enabled: false,
            template: "detail"
        }
    };
    
});

var students = [{
    "ID": 1,
    "Username": "Ppreeze",
    "Name": "Peter",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
    "Notes": "",
}, {
    "ID": 2,
    "Username": "Tntini",
    "Name": "",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png",
    "Notes": "",
}, {
    "ID": 3,
    "Username": "Blue",
    "Name": "Lunga",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png",
    "Notes": "",
},];