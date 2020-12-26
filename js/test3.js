$(function(){
    initEvent();
    getSalesProfitsDiscounts();
    initSalesAndProfits();
    initUSAMap();
});

function initEvent() {
    $("#year").change(function() {
        getSalesProfitsDiscounts();
        initSalesAndProfits();
        initUSAMap();
    });

    $("#category").change(function() {
        getSalesProfitsDiscounts();
        initSalesAndProfits();
        initUSAMap();
    });

    $("#subCategory").change(function() {
        getSalesProfitsDiscounts();
        initSalesAndProfits();
        initUSAMap();
    });

    $("#state").change(function() {
        getSalesProfitsDiscounts();
        initSalesAndProfits();
        initUSAMap();
    });

    $(".ccb-sub-title .title").click(function() {
        $(".selected-title").removeClass("selected-title");
        $(this).addClass("selected-title");
    });

    $(".search").click(function() {
        $(this).find("img").css("display", "none");
        $(this).find("input").css("display", "block");
    });

    $(".change-left").click(function() {
        let selected_tab = $(".selected-title");
        let prev_tab = selected_tab.prev();
        selected_tab.removeClass("selected-title");
        if (prev_tab.hasClass("ccb-ifrs-desc")) {
            $(".ccb-sub-title .title").last().addClass("selected-title");
        } else {
            prev_tab.addClass("selected-title");
        }
    });

    $(".change-right").click(function() {
        let selected_tab = $(".selected-title");
        let next_tab = selected_tab.next();
        $(".selected-title").removeClass("selected-title");
        if (next_tab.hasClass("ccb-selector")) {
            $(".ccb-sub-title .title").eq(0).addClass("selected-title");
        } else {
            next_tab.addClass("selected-title");
        }
    });
}

function getSalesProfitsDiscounts() {
    let param = {};
    param["year"] = $("#year").val();
    param["category"] = $("#category").val();
    param["subCategory"] = $("#subCategory").val();
    param["state"] = $("#state").val();

    let xAxisData = [];
    let seriesData1 = [];
    let seriesData2 = [];
    let seriesData3 = [];

    $.ajax({
        type: 'post',
        url: '/getSalesProfitsDiscounts/',
        dataType: 'json',
        data : param,
        success: function(result) {
            if (result.isFailed == '1') {
                alert(result.message);
                return false;
            }

            $.each(result.data, function(i, item) {

                if (!xAxisData.includes(item["orderDate"])) {
                    xAxisData.push(item["orderDate"]);
                }

                seriesData1.push(item["sales"]);
                seriesData2.push(item["profits"]);
                seriesData3.push(item["discounts"]);

            });

            paintAreaChart(xAxisData, seriesData1, 'sales');
            paintAreaChart(xAxisData, seriesData2, 'profits');
            paintAreaChart(xAxisData, seriesData3, 'discounts');
        }
    });
}

function initSalesAndProfits() {
    let param = {};
    param["year"] = $("#year").val();
    param["category"] = $("#category").val();
    param["subCategory"] = $("#subCategory").val();
    param["state"] = $("#state").val();

    let Data = [];

    $.ajax({
        type: 'post',
        url: '/getSalesAndProfit/',
        dataType: 'json',
        data : param,
        success: function(result) {
            if (result.isFailed == '1') {
                alert(result.message)
                return false;
            }

            $.each(result.data, function(i, item) {
                let obj = {};
                obj['name'] = item["subCategory"];
                obj['value'] = item["sales"];
                Data.push(obj);
            });

            paintRingChart(Data, 'ring');
        }
    });
}

function initUSAMap() {
    let seriesData = [
                        {name: 'Alabama', value: 4822023},
                        {name: 'Arizona', value: 6553255},
                        {name: 'Arkansas', value: 2949131},
                        {name: 'California', value: 38041430},
                        {name: 'Colorado', value: 5187582},
                        {name: 'Connecticut', value: 3590347},
                        {name: 'Delaware', value: 917092},
                        {name: 'District of Columbia', value: 632323},
                        {name: 'Florida', value: 19317568},
                        {name: 'Georgia', value: 9919945},
                        {name: 'Idaho', value: 1595728},
                        {name: 'Illinois', value: 12875255},
                        {name: 'Indiana', value: 6537334},
                        {name: 'Iowa', value: 3074186},
                        {name: 'Kansas', value: 2885905},
                        {name: 'Kentucky', value: 4380415},
                        {name: 'Louisiana', value: 4601893},
                        {name: 'Maine', value: 1329192},
                        {name: 'Maryland', value: 5884563},
                        {name: 'Massachusetts', value: 6646144},
                        {name: 'Michigan', value: 9883360},
                        {name: 'Minnesota', value: 5379139},
                        {name: 'Mississippi', value: 2984926},
                        {name: 'Missouri', value: 6021988},
                        {name: 'Montana', value: 1005141},
                        {name: 'Nebraska', value: 1855525},
                        {name: 'Nevada', value: 2758931},
                        {name: 'New Hampshire', value: 1320718},
                        {name: 'New Jersey', value: 8864590},
                        {name: 'New Mexico', value: 2085538},
                        {name: 'New York', value: 19570261},
                        {name: 'North Carolina', value: 9752073},
                        {name: 'North Dakota', value: 699628},
                        {name: 'Ohio', value: 11544225},
                        {name: 'Oklahoma', value: 3814820},
                        {name: 'Oregon', value: 3899353},
                        {name: 'Pennsylvania', value: 12763536},
                        {name: 'Rhode Island', value: 1050292},
                        {name: 'South Carolina', value: 4723723},
                        {name: 'South Dakota', value: 833354},
                        {name: 'Tennessee', value: 6456243},
                        {name: 'Texas', value: 26059203},
                        {name: 'Utah', value: 2855287},
                        {name: 'Vermont', value: 626011},
                        {name: 'Virginia', value: 8185867},
                        {name: 'Washington', value: 6897012},
                        {name: 'West Virginia', value: 1855413},
                        {name: 'Wisconsin', value: 5726398},
                        {name: 'Wyoming', value: 576412}
                    ];

    let param = {};
    let stateParam = $("#state").val();
    if (stateParam == 'England') {
            seriesData = [
                        {name: 'Alabama', value: 4822023},
                        {name: 'Arizona', value: 6553255},
                        {name: 'California', value: 38041430},
                        {name: 'Colorado', value: 5187582},
                        {name: 'Indiana', value: 6537334},
                        {name: 'Iowa', value: 3074186},
                        {name: 'Kansas', value: 2885905},
                        {name: 'Louisiana', value: 4601893},
                        {name: 'Maine', value: 1329192},
                        {name: 'Maryland', value: 5884563},
                        {name: 'Nebraska', value: 1855525},
                        {name: 'Nevada', value: 2758931},
                        {name: 'New Jersey', value: 8864590},
                        {name: 'New Mexico', value: 2085538},
                        {name: 'New York', value: 19570261},
                        {name: 'North Dakota', value: 699628},
                        {name: 'Ohio', value: 11544225},
                        {name: 'Oklahoma', value: 3814820},
                        {name: 'Rhode Island', value: 1050292},
                        {name: 'South Carolina', value: 4723723},
                        {name: 'South Dakota', value: 833354},
                        {name: 'Tennessee', value: 6456243},
                        {name: 'West Virginia', value: 1855413},
                        {name: 'Wisconsin', value: 5726398},
                        {name: 'Wyoming', value: 576412}
                    ];
    } else if (stateParam == 'Centre-Val de Loire') {
            seriesData = [
                        {name: 'Alabama', value: 4822023},
                        {name: 'Arizona', value: 6553255},
                        {name: 'Arkansas', value: 2949131},
                        {name: 'Colorado', value: 5187582},
                        {name: 'Connecticut', value: 3590347},
                        {name: 'District of Columbia', value: 632323},
                        {name: 'Florida', value: 19317568},
                        {name: 'Georgia', value: 9919945},
                        {name: 'Illinois', value: 12875255},
                        {name: 'Indiana', value: 6537334},
                        {name: 'Iowa', value: 3074186},
                        {name: 'Kansas', value: 2885905},
                        {name: 'Louisiana', value: 4601893},
                        {name: 'Maine', value: 1329192},
                        {name: 'Maryland', value: 5884563},
                        {name: 'Massachusetts', value: 6646144},
                        {name: 'Michigan', value: 9883360},
                        {name: 'Mississippi', value: 2984926},
                        {name: 'Missouri', value: 6021988},
                        {name: 'Montana', value: 1005141},
                        {name: 'New Jersey', value: 8864590},
                        {name: 'New Mexico', value: 2085538},
                        {name: 'New York', value: 19570261},
                        {name: 'North Carolina', value: 9752073},
                        {name: 'Pennsylvania', value: 12763536},
                        {name: 'Rhode Island', value: 1050292},
                        {name: 'South Carolina', value: 4723723},
                        {name: 'Tennessee', value: 6456243},
                        {name: 'Texas', value: 26059203},
                        {name: 'Utah', value: 2855287},
                        {name: 'Vermont', value: 626011},
                        {name: 'Washington', value: 6897012},
                        {name: 'West Virginia', value: 1855413}
                    ];
    }
    paintUSAMap(seriesData, 'map');
}