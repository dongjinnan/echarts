$(function(){
    initEvent();
    initPayment();
    initSalesAndProfits();
});

function initEvent() {
    $("#year").change(function() {
        initPayment();
        initSalesAndProfits();
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

function initPayment() {
    let param = {};
    param["year"] = $("#year").val();

    let xAxisData = [];
    let seriesData1 = [];
    let seriesData2 = [];

    $.ajax({
        type: 'post',
        url: '/getPayment/',
        dataType: 'json',
        data : param,
        success: function(result) {
            if (result.isFailed == '1') {
                alert(result.message)
                return false;
            }

            $.each(result.data, function(i, item) {
                let xKey = item["month"] + "月";
                if (!xAxisData.includes(xKey)) {
                    xAxisData.push(xKey);
                }

                if (item["staff"] == 1) {
                    seriesData1.push(item["amount"])
                } else if (item["staff"] == 2) {
                    seriesData2.push(item["amount"])
                }
            });

            paintStackedLine(xAxisData, seriesData1, seriesData2, 'payment');
        }
    });
}

function initSalesAndProfits() {
    let param = {};
    param["year"] = $("#year").val();

    let yAxisData = [];
    let series0Data = [];
    let series1Data = [];

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
                series0Data.push(item["sales"]);
                series1Data.push(item["profits"]);
                yAxisData.push(item["subCategory"]);
            });

            let x0AxisMax = Math.max(...series0Data);
            let x1AxisMax = Math.max(...series1Data);
            let title1 = 'Sales';
            let title2 = 'Profits';

            paintBar(title1, x0AxisMax, yAxisData, series0Data, 'sales');
            paintBar(title2, x1AxisMax, yAxisData, series1Data, 'profits');
        }
    });
}