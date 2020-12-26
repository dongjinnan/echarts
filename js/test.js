$(function(){
    initBar();
    initMultipleXAxis();
    initGrid3();
    initEvent();
});

// 初始化条形图
function initBar() {

    let param = {};
    param["region"] = $("#region").val();

    let sub_category = [];
    let order_date = [];
    let series_data = [];
    let series_object_data = [];
    let series_object = {};
    let temp_sub_cate = "";
    let temp_cate = "";

    $.ajax({
        type: 'post',
        url: '/queryBarData/',
        dataType: 'json',
        data : param,
        success: function(result) {
            if (result.isFailed == '1') {
                alert(result.message)
                return false;
            }

            $.each(result.barData, function(i, item){
                let subcate = item["Sub_Category"];
                let orderdate = item["Order_Date"];
                let categoryData = [];

                if (!order_date.includes(orderdate)) {
                    order_date.push(orderdate)
                }

                if (!sub_category.includes(subcate)) {

                    if (series_object_data.length > 0) {
                        series_object["name"] = temp_sub_cate;
                        series_object["type"] = "bar";
                        series_object["stack"] = temp_cate;
                        series_object["data"] = series_object_data;
                        series_data.push(series_object);

                        series_object = {};
                        series_object_data = [];
                    } else {
                        series_object["data"] = series_object_data;
                    }

                    sub_category.push(subcate);
                    series_object_data.push(item["count"])
                } else {
                    series_object_data.push(item["count"])
                }

                temp_sub_cate = subcate;
                temp_cate = item["Category"];
            });

            // 添加最后一条
            series_object["name"] = temp_sub_cate;
            series_object["type"] = "bar";
            series_object["stack"] = temp_cate;
            series_object["data"] = series_object_data;
            series_data.push(series_object);

            // 坐标轴无数据,不显示表格
            if (!order_date || order_date.length == 0) {
                return false;
            }

            // 画堆叠柱状图
            paintStackedBar(sub_category, order_date, series_data, "bar_grid");
        }
    });
}

function initMultipleXAxis() {
    let param = {};
    param["region"] = $("#region").val();

    let xAxis1_data = [];
    let xAxis2_data = [];
    let series_data1 = [];
    let series_data2 = [];
    let legendData = ['分类销量', '下单销量'];
    let xAxis0PointerLabel = '销量  ';
    let xAxis1PointerLabel = '销量  ';

    $.ajax({
        type: 'post',
        url: '/querySalesData/',
        dataType: 'json',
        data : param,
        success: function(result) {
            if (result.isFailed == '1') {
                alert(result.message)
                return false;
            }

            // 类目销量
            $.each(result.categorySales, function(i, item) {
                xAxis1_data.push(item["Sub_Category"]);
                series_data1.push(item["totalSales"]);
            });
            // 日期销量
            $.each(result.dateSales, function(i, item) {
                xAxis2_data.push(item["Order_Date"]);
                series_data2.push(item["totalSales"]);
            });

            // 画双X轴折线图
            paintMultipleXAxises(legendData, xAxis1_data, xAxis2_data, series_data1, series_data2, xAxis0PointerLabel,
                xAxis1PointerLabel, "multipleXAxis_grid");
        }
    });
}

function initGrid3() {

    let param = {};
    param["region"] = $("#region").val();

    let dataNorth = [];
    let dataSouth = [];
    let dataCentral = [];

    $.ajax({
        type: 'post',
        url: '/queryGrid3Data/',
        dataType: 'json',
        data : param,
        success: function(result) {
            if (result.isFailed == '1') {
                alert(result.message)
                return false;
            }

            $.each(result.bubble, function(i, item) {
                let regi = item["Region"];
                let sales = item["Sales"];
                let profit = item["Profit"];
                let discount = item["Discount"];
                let date = item["Order_Date"];

                let dataRow = [];
                dataRow.push(sales);
                dataRow.push(profit);
                dataRow.push(discount);
                dataRow.push(date);

                if (sales > 6000) {
                    dataRow.push("优秀");
                } else if (sales > 4000) {
                    dataRow.push("良好");
                } else if (sales > 500) {
                    dataRow.push("及格");
                } else {
                    dataRow.push("差");
                }

                if (regi == "North") {
                    dataNorth.push(dataRow);
                } else if (regi == "South") {
                    dataSouth.push(dataRow);
                } else {
                    dataCentral.push(dataRow);
                }
            });

            let seriesData = [
                {
                    name: 'North',
                    type: 'scatter',
                    data: dataNorth
                },
                {
                    name: 'South',
                    type: 'scatter',
                    data: dataSouth
                },
                {
                    name: 'Central',
                    type: 'scatter',
                    data: dataCentral
                }
            ];

            paintScatterBubble('销量', '利润', seriesData, "bubble_grid");
        }
    });
}

function initEvent() {
    $("#region").change(function() {
        initBar();
        initMultipleXAxis();
        initGrid3();
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