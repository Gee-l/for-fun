var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.chartOptions = {
        commonSeriesSettings: {
            type: "bar"
        },
        tooltip: {
            enabled: true,
            format: "currency",
            customizeTooltip: function(args) {
                return {
                    html: args.seriesName + " | Total<div class='currency'>" + args.valueText + "</div>"
                };
            }
        },
        size: {
            height: 200
        },
        adaptiveLayout: {
            width: 450
        },
        onInitialized: function(e) {
            $scope.chart = e.component;
        }
    };

    $scope.pivotGridOptions = {
        allowSortingBySummary: true,
        allowFiltering: true,
        showBorders: true,
        showColumnGrandTotals: false,
        showRowGrandTotals: false,
        showRowTotals: false,
        showColumnTotals: false,
        fieldChooser: {
            enabled: true,
            height: 400
        },
        onInitialized: function(e) {
            e.component.bindChart($scope.chart, {
                dataFieldsDisplayMode: "splitPanes",
                alternateDataFields: false
            });
            expand(e.component.getDataSource());
        },
        dataSource: {
            fields: [{
                caption: "Region",
                width: 120,
                dataField: "region",
                area: "row",
                sortBySummaryField: "Total"
            }, {
                caption: "City",
                dataField: "city",
                width: 150,
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                groupName: "date",
                groupInterval: "month",
                visible: false
            }, {
                caption: "Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }],
            store: sales
        }
    };

    function expand(dataSource) {
        setTimeout(function(){
            dataSource.expandHeaderItem("row", ["North America"]);
            dataSource.expandHeaderItem("column", [2015]);
        }, 0);
    }
});


var sales = [{
    "id": 10780,
    "region": "Frank",
    "country": "Frank",
    "city": "New York",
    "amount": 4470,
    "date": new Date("2015-01-10")
}, {
    "id": 10781,
    "region": "Frank",
    "country": "Frank",
    "city": "Los Angeles",
    "amount": 1125,
    "date": new Date("2015-01-21")
}, {
    "id": 10782,
    "region": "Frank",
    "country": "Frank",
    "city": "Denver",
    "amount": 645,
    "date": new Date("2015-01-17")
}, {
    "id": 10783,
    "region": "Frank",
    "country": "Frank",
    "city": "Vancouver",
    "amount": 675,
    "date": new Date("2015-01-05")
}, {
    "id": 10784,
    "region": "Frank",
    "country": "Frank",
    "city": "Edmonton",
    "amount": 2840,
    "date": new Date("2015-01-05")
}, {
    "id": 10785,
    "region": "Tntini",
    "country": "Brazil",
    "city": "Rio de Janeiro",
    "amount": 2660,
    "date": new Date("2015-01-04")
}, {
    "id": 10786,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Buenos Aires",
    "amount": 4560,
    "date": new Date("2015-01-12")
}, {
    "id": 10787,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Asuncion",
    "amount": 2880,
    "date": new Date("2015-01-20")
}, {
    "id": 10788,
    "region": "Gee",
    "country": "Gee",
    "city": "London",
    "amount": 500,
    "date": new Date("2015-01-02")
}, {
    "id": 10789,
    "region": "Gee",
    "country": "Gee",
    "city": "Berlin",
    "amount": 3925,
    "date": new Date("2015-01-07")
}, {
    "id": 10790,
    "region": "Gee",
    "country": "Gee",
    "city": "Madrid",
    "amount": 5660,
    "date": new Date("2015-01-18")
}, {
    "id": 10791,
    "region": "Gee",
    "country": "Gee",
    "city": "Moscow",
    "amount": 1460,
    "date": new Date("2015-01-22")
}, {
    "id": 10792,
    "region": "Blue",
    "country": "Blue",
    "city": "Beijing",
    "amount": 5040,
    "date": new Date("2015-01-10")
}, {
    "id": 10793,
    "region": "Blue",
    "country": "Blue",
    "city": "Tokyo",
    "amount": 4830,
    "date": new Date("2015-01-13")
}, {
    "id": 10794,
    "region": "Blue",
    "country": "Blue",
    "city": "Seoul",
    "amount": 3075,
    "date": new Date("2015-01-22")
}, {
    "id": 10795,
    "region": "Peter",
    "country": "Peter",
    "city": "Sydney",
    "amount": 3120,
    "date": new Date("2015-01-14")
}, {
    "id": 10796,
    "region": "Peter",
    "country": "Peter",
    "city": "Melbourne",
    "amount": 3525,
    "date": new Date("2015-01-23")
}, {
    "id": 10797,
    "region": "Zola",
    "country": "Zola",
    "city": "Pretoria",
    "amount": 1930,
    "date": new Date("2015-01-09")
}, {
    "id": 10798,
    "region": "Zola",
    "country": "Zola",
    "city": "Cairo",
    "amount": 2890,
    "date": new Date("2015-01-02")
}, {
    "id": 10799,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Buenos Aires",
    "amount": 1545,
    "date": new Date("2015-01-17")
}, {
    "id": 10800,
    "region": "Peter",
    "country": "Peter",
    "city": "Melbourne",
    "amount": 3630,
    "date": new Date("2015-01-20")
}, {
    "id": 10801,
    "region": "Frank",
    "country": "Frank",
    "city": "Vancouver",
    "amount": 4035,
    "date": new Date("2015-01-14")
}, {
    "id": 10802,
    "region": "Peter",
    "country": "Peter",
    "city": "Melbourne",
    "amount": 345,
    "date": new Date("2015-01-06")
}, {
    "id": 10803,
    "region": "Blue",
    "country": "Blue",
    "city": "Seoul",
    "amount": 7000,
    "date": new Date("2015-01-07")
}, {
    "id": 10804,
    "region": "Frank",
    "country": "Frank",
    "city": "New York",
    "amount": 3060,
    "date": new Date("2015-02-13")
}, {
    "id": 10805,
    "region": "Frank",
    "country": "Frank",
    "city": "Los Angeles",
    "amount": 6425,
    "date": new Date("2015-02-04")
}, {
    "id": 10806,
    "region": "Frank",
    "country": "Frank",
    "city": "Denver",
    "amount": 615,
    "date": new Date("2015-02-22")
}, {
    "id": 10807,
    "region": "Frank",
    "country": "Frank",
    "city": "Vancouver",
    "amount": 1755,
    "date": new Date("2015-02-07")
}, {
    "id": 10808,
    "region": "Frank",
    "country": "Frank",
    "city": "Edmonton",
    "amount": 1540,
    "date": new Date("2015-02-21")
}, {
    "id": 10809,
    "region": "Tntini",
    "country": "Brazil",
    "city": "Rio de Janeiro",
    "amount": 2820,
    "date": new Date("2015-02-24")
}, {
    "id": 10810,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Buenos Aires",
    "amount": 4305,
    "date": new Date("2015-02-10")
}, {
    "id": 10811,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Asuncion",
    "amount": 1520,
    "date": new Date("2015-02-26")
}, {
    "id": 10812,
    "region": "Gee",
    "country": "Gee",
    "city": "London",
    "amount": 4725,
    "date": new Date("2015-02-18")
}, {
    "id": 10813,
    "region": "Gee",
    "country": "Gee",
    "city": "Berlin",
    "amount": 6750,
    "date": new Date("2015-02-16")
}, {
    "id": 10814,
    "region": "Gee",
    "country": "Gee",
    "city": "Madrid",
    "amount": 5540,
    "date": new Date("2015-02-07")
}, {
    "id": 10815,
    "region": "Gee",
    "country": "Gee",
    "city": "Moscow",
    "amount": 1880,
    "date": new Date("2015-02-24")
}, {
    "id": 10816,
    "region": "Blue",
    "country": "Blue",
    "city": "Beijing",
    "amount": 6180,
    "date": new Date("2015-02-26")
}, {
    "id": 10817,
    "region": "Blue",
    "country": "Blue",
    "city": "Tokyo",
    "amount": 9300,
    "date": new Date("2015-02-03")
}, {
    "id": 10818,
    "region": "Blue",
    "country": "Blue",
    "city": "Seoul",
    "amount": 3700,
    "date": new Date("2015-02-26")
}, {
    "id": 10819,
    "region": "Peter",
    "country": "Peter",
    "city": "Sydney",
    "amount": 740,
    "date": new Date("2015-02-01")
}, {
    "id": 10820,
    "region": "Peter",
    "country": "Peter",
    "city": "Melbourne",
    "amount": 4755,
    "date": new Date("2015-02-23")
}, {
    "id": 10821,
    "region": "Zola",
    "country": "Zola",
    "city": "Pretoria",
    "amount": 2570,
    "date": new Date("2015-02-20")
}, {
    "id": 10822,
    "region": "Zola",
    "country": "Zola",
    "city": "Cairo",
    "amount": 2860,
    "date": new Date("2015-02-19")
}, {
    "id": 10823,
    "region": "Frank",
    "country": "Frank",
    "city": "New York",
    "amount": 5430,
    "date": new Date("2015-03-21")
}, {
    "id": 10824,
    "region": "Frank",
    "country": "Frank",
    "city": "Los Angeles",
    "amount": 4525,
    "date": new Date("2015-03-21")
}, {
    "id": 10825,
    "region": "Frank",
    "country": "Frank",
    "city": "Denver",
    "amount": 1515,
    "date": new Date("2015-03-10")
}, {
    "id": 10826,
    "region": "Frank",
    "country": "Frank",
    "city": "Vancouver",
    "amount": 630,
    "date": new Date("2015-03-15")
}, {
    "id": 10827,
    "region": "Frank",
    "country": "Frank",
    "city": "Edmonton",
    "amount": 1310,
    "date": new Date("2015-03-01")
}, {
    "id": 10828,
    "region": "Tntini",
    "country": "Brazil",
    "city": "Rio de Janeiro",
    "amount": 3200,
    "date": new Date("2015-03-17")
}, {
    "id": 10829,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Buenos Aires",
    "amount": 3945,
    "date": new Date("2015-03-20")
}, {
    "id": 10830,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Asuncion",
    "amount": 2990,
    "date": new Date("2015-03-18")
}, {
    "id": 10831,
    "region": "Gee",
    "country": "Gee",
    "city": "London",
    "amount": 1125,
    "date": new Date("2015-03-22")
}, {
    "id": 10832,
    "region": "Gee",
    "country": "Gee",
    "city": "Berlin",
    "amount": 7950,
    "date": new Date("2015-03-17")
}, {
    "id": 10833,
    "region": "Gee",
    "country": "Gee",
    "city": "Madrid",
    "amount": 2960,
    "date": new Date("2015-03-25")
}, {
    "id": 10834,
    "region": "Gee",
    "country": "Gee",
    "city": "Moscow",
    "amount": 6300,
    "date": new Date("2015-03-20")
}, {
    "id": 10835,
    "region": "Blue",
    "country": "Blue",
    "city": "Beijing",
    "amount": 8670,
    "date": new Date("2015-03-07")
}, {
    "id": 10836,
    "region": "Blue",
    "country": "Blue",
    "city": "Tokyo",
    "amount": 3930,
    "date": new Date("2015-03-23")
}, {
    "id": 10837,
    "region": "Blue",
    "country": "Blue",
    "city": "Seoul",
    "amount": 6975,
    "date": new Date("2015-03-02")
}, {
    "id": 10838,
    "region": "Peter",
    "country": "Peter",
    "city": "Sydney",
    "amount": 4220,
    "date": new Date("2015-03-17")
}, {
    "id": 10839,
    "region": "Peter",
    "country": "Peter",
    "city": "Melbourne",
    "amount": 3090,
    "date": new Date("2015-03-25")
}, {
    "id": 10840,
    "region": "Zola",
    "country": "Zola",
    "city": "Pretoria",
    "amount": 2380,
    "date": new Date("2015-03-01")
}, {
    "id": 10841,
    "region": "Zola",
    "country": "Zola",
    "city": "Cairo",
    "amount": 1510,
    "date": new Date("2015-03-07")
}, {
    "id": 10842,
    "region": "Blue",
    "country": "Blue",
    "city": "Tokyo",
    "amount": 1020,
    "date": new Date("2015-03-19")
}, {
    "id": 10843,
    "region": "Blue",
    "country": "Blue",
    "city": "Seoul",
    "amount": 6700,
    "date": new Date("2015-03-26")
}, {
    "id": 10844,
    "region": "Frank",
    "country": "Frank",
    "city": "New York",
    "amount": 4890,
    "date": new Date("2015-04-02")
}, {
    "id": 10845,
    "region": "Frank",
    "country": "Frank",
    "city": "Los Angeles",
    "amount": 7225,
    "date": new Date("2015-04-13")
}, {
    "id": 10846,
    "region": "Frank",
    "country": "Frank",
    "city": "Denver",
    "amount": 795,
    "date": new Date("2015-04-07")
}, {
    "id": 10847,
    "region": "Frank",
    "country": "Frank",
    "city": "Vancouver",
    "amount": 1785,
    "date": new Date("2015-04-03")
}, {
    "id": 10848,
    "region": "Frank",
    "country": "Frank",
    "city": "Edmonton",
    "amount": 1850,
    "date": new Date("2015-04-03")
}, {
    "id": 10849,
    "region": "Tntini",
    "country": "Brazil",
    "city": "Rio de Janeiro",
    "amount": 5120,
    "date": new Date("2015-04-12")
}, {
    "id": 10850,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Buenos Aires",
    "amount": 615,
    "date": new Date("2015-04-07")
}, {
    "id": 10851,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Asuncion",
    "amount": 2860,
    "date": new Date("2015-04-05")
}, {
    "id": 10852,
    "region": "Gee",
    "country": "Gee",
    "city": "London",
    "amount": 1525,
    "date": new Date("2015-04-24")
}, {
    "id": 10853,
    "region": "Gee",
    "country": "Gee",
    "city": "Berlin",
    "amount": 7425,
    "date": new Date("2015-04-15")
}, {
    "id": 10854,
    "region": "Gee",
    "country": "Gee",
    "city": "Madrid",
    "amount": 6080,
    "date": new Date("2015-04-13")
}, {
    "id": 10855,
    "region": "Gee",
    "country": "Gee",
    "city": "Moscow",
    "amount": 2940,
    "date": new Date("2015-04-04")
}, {
    "id": 10856,
    "region": "Blue",
    "country": "Blue",
    "city": "Beijing",
    "amount": 5580,
    "date": new Date("2015-04-16")
}, {
    "id": 10857,
    "region": "Blue",
    "country": "Blue",
    "city": "Tokyo",
    "amount": 9390,
    "date": new Date("2015-04-19")
}, {
    "id": 10858,
    "region": "Blue",
    "country": "Blue",
    "city": "Seoul",
    "amount": 3200,
    "date": new Date("2015-04-26")
}, {
    "id": 10859,
    "region": "Peter",
    "country": "Peter",
    "city": "Sydney",
    "amount": 4380,
    "date": new Date("2015-04-05")
}, {
    "id": 10860,
    "region": "Peter",
    "country": "Peter",
    "city": "Melbourne",
    "amount": 4725,
    "date": new Date("2015-04-06")
}, {
    "id": 10861,
    "region": "Zola",
    "country": "Zola",
    "city": "Pretoria",
    "amount": 930,
    "date": new Date("2015-04-25")
}, {
    "id": 10862,
    "region": "Zola",
    "country": "Zola",
    "city": "Cairo",
    "amount": 1910,
    "date": new Date("2015-04-05")
}, {
    "id": 10863,
    "region": "Gee",
    "country": "Gee",
    "city": "London",
    "amount": 2725,
    "date": new Date("2015-04-16")
}, {
    "id": 10864,
    "region": "Peter",
    "country": "Peter",
    "city": "Sydney",
    "amount": 4720,
    "date": new Date("2015-04-02")
}, {
    "id": 10865,
    "region": "Blue",
    "country": "Blue",
    "city": "Beijing",
    "amount": 5190,
    "date": new Date("2015-04-10")
}, {
    "id": 10866,
    "region": "Zola",
    "country": "Zola",
    "city": "Pretoria",
    "amount": 2800,
    "date": new Date("2015-04-26")
}, {
    "id": 10867,
    "region": "Blue",
    "country": "Blue",
    "city": "Tokyo",
    "amount": 3780,
    "date": new Date("2015-04-24")
}, {
    "id": 10868,
    "region": "Frank",
    "country": "Frank",
    "city": "Edmonton",
    "amount": 2340,
    "date": new Date("2015-04-17")
}, {
    "id": 10869,
    "region": "Frank",
    "country": "Frank",
    "city": "New York",
    "amount": 4830,
    "date": new Date("2015-05-12")
}, {
    "id": 10870,
    "region": "Frank",
    "country": "Frank",
    "city": "Los Angeles",
    "amount": 2075,
    "date": new Date("2015-05-23")
}, {
    "id": 10871,
    "region": "Frank",
    "country": "Frank",
    "city": "Denver",
    "amount": 3420,
    "date": new Date("2015-05-21")
}, {
    "id": 10872,
    "region": "Frank",
    "country": "Frank",
    "city": "Vancouver",
    "amount": 1440,
    "date": new Date("2015-05-10")
}, {
    "id": 10873,
    "region": "Frank",
    "country": "Frank",
    "city": "Edmonton",
    "amount": 1680,
    "date": new Date("2015-05-15")
}, {
    "id": 10874,
    "region": "Tntini",
    "country": "Brazil",
    "city": "Rio de Janeiro",
    "amount": 3440,
    "date": new Date("2015-05-16")
}, {
    "id": 10875,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Buenos Aires",
    "amount": 4695,
    "date": new Date("2015-05-10")
}, {
    "id": 10876,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Asuncion",
    "amount": 2380,
    "date": new Date("2015-05-06")
}, {
    "id": 10877,
    "region": "Gee",
    "country": "Gee",
    "city": "London",
    "amount": 1875,
    "date": new Date("2015-05-25")
}, {
    "id": 10878,
    "region": "Gee",
    "country": "Gee",
    "city": "Berlin",
    "amount": 7550,
    "date": new Date("2015-05-14")
}, {
    "id": 10879,
    "region": "Gee",
    "country": "Gee",
    "city": "Madrid",
    "amount": 3340,
    "date": new Date("2015-05-01")
}, {
    "id": 10880,
    "region": "Gee",
    "country": "Gee",
    "city": "Moscow",
    "amount": 1400,
    "date": new Date("2015-05-22")
}, {
    "id": 10881,
    "region": "Blue",
    "country": "Blue",
    "city": "Beijing",
    "amount": 6060,
    "date": new Date("2015-05-22")
}, {
    "id": 10882,
    "region": "Blue",
    "country": "Blue",
    "city": "Tokyo",
    "amount": 8370,
    "date": new Date("2015-05-13")
}, {
    "id": 10883,
    "region": "Blue",
    "country": "Blue",
    "city": "Seoul",
    "amount": 3550,
    "date": new Date("2015-05-26")
}, {
    "id": 10884,
    "region": "Peter",
    "country": "Peter",
    "city": "Sydney",
    "amount": 2620,
    "date": new Date("2015-05-17")
}, {
    "id": 10885,
    "region": "Peter",
    "country": "Peter",
    "city": "Melbourne",
    "amount": 2400,
    "date": new Date("2015-05-21")
}, {
    "id": 10886,
    "region": "Zola",
    "country": "Zola",
    "city": "Pretoria",
    "amount": 1740,
    "date": new Date("2015-05-21")
}, {
    "id": 10887,
    "region": "Zola",
    "country": "Zola",
    "city": "Cairo",
    "amount": 500,
    "date": new Date("2015-05-26")
}, {
    "id": 10888,
    "region": "Tntini",
    "country": "Tntini",
    "city": "Buenos Aires",
    "amount": 780,
    "date": new Date("2015-05-07")
}];