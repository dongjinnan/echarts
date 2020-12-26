$(function(){
    initEvent();
    initWordCloud();
    init3DLine();
    initTable();
});

function initEvent() {
    $("#year").change(function() {
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

function initWordCloud() {
    let keywords = {
        "visualMap": 22199,
        "continuous": 10288,
        "contoller": 620,
        "series": 274470,
        "gauge": 12311,
        "detail": 1206,
        "piecewise": 4885,
        "textStyle": 32294,
        "markPoint": 18574,
        "pie": 38929,
        "roseType": 969,
        "label": 37517,
        "emphasis": 12053,
        "yAxis": 57299,
        "name": 15418,
        "type": 22905,
        "gridIndex": 5146,
        "normal": 49487,
        "itemStyle": 33837,
        "min": 4500,
        "silent": 5744,
        "animation": 4840,
        "offsetCenter": 232,
        "inverse": 3706,
        "borderColor": 4812,
        "markLine": 16578,
        "line": 76970,
        "radiusAxis": 6704,
        "radar": 15964,
        "data": 60679,
        "dataZoom": 24347,
        "tooltip": 43420,
        "toolbox": 25222,
        "geo": 16904,
        "parallelAxis": 4029,
        "parallel": 5319,
        "max": 3393,
        "bar": 43066,
        "heatmap": 3110,
        "map": 20285,
        "animationDuration": 3425,
        "animationDelay": 2431,
        "splitNumber": 5175,
        "axisLine": 12738,
        "lineStyle": 19601,
        "splitLine": 7133,
        "axisTick": 8831,
        "axisLabel": 17516,
        "pointer": 590,
        "color": 23426,
        "title": 38497,
        "formatter": 15214,
        "slider": 7236,
        "legend": 66514,
        "grid": 28516,
        "smooth": 1295,
        "smoothMonotone": 696,
        "sampling": 757,
        "feature": 12815,
        "saveAsImage": 2616,
        "polar": 6279,
        "calculable": 879,
        "backgroundColor": 9419,
        "excludeComponents": 130,
        "show": 20620,
        "text": 2592,
        "icon": 2782,
        "dimension": 478,
        "inRange": 1060,
        "animationEasing": 2983,
        "animationDurationUpdate": 2259,
        "animationDelayUpdate": 2236,
        "animationEasingUpdate": 2213,
        "xAxis": 89459,
        "angleAxis": 5469,
        "showTitle": 484,
        "dataView": 2754,
        "restore": 932,
        "timeline": 10104,
        "range": 477,
        "value": 5732,
        "precision": 878,
        "target": 1433,
        "zlevel": 5361,
        "symbol": 8718,
        "interval": 7964,
        "symbolSize": 5300,
        "showSymbol": 1247,
        "inside": 8913,
        "xAxisIndex": 3843,
        "orient": 4205,
        "boundaryGap": 5073,
        "nameGap": 4896,
        "zoomLock": 571,
        "hoverAnimation": 2307,
        "legendHoverLink": 3553,
        "stack": 2907,
        "throttle": 466,
        "connectNulls": 897,
        "clipOverflow": 826,
        "startValue": 551,
        "minInterval": 3292,
        "opacity": 3097,
        "splitArea": 4775,
        "filterMode": 635,
        "end": 409,
        "left": 6475,
        "funnel": 2238,
        "lines": 6403,
        "baseline": 431,
        "align": 2608,
        "coord": 897,
        "nameTextStyle": 7477,
        "width": 4338,
        "shadowBlur": 4493,
        "effect": 929,
        "period": 225,
        "areaColor": 631,
        "borderWidth": 3654,
        "nameLocation": 4418,
        "position": 11723,
        "containLabel": 1701,
        "scatter": 10718,
        "areaStyle": 5310,
        "scale": 3859,
        "pieces": 414,
        "categories": 1000,
        "selectedMode": 3825,
        "itemSymbol": 273,
        "effectScatter": 7147,
        "fontStyle": 3376,
        "fontSize": 3386,
        "margin": 1034,
        "iconStyle": 2257,
        "link": 1366,
        "axisPointer": 5245,
        "showDelay": 896,
        "graph": 22194,
        "subtext": 1442,
        "selected": 2881,
        "barCategoryGap": 827,
        "barGap": 1094,
        "barWidth": 1521,
        "coordinateSystem": 3622,
        "barBorderRadius": 284,
        "z": 4014,
        "polarIndex": 1456,
        "shadowOffsetX": 3046,
        "shadowColor": 3771,
        "shadowOffsetY": 2475,
        "height": 1988,
        "barMinHeight": 575,
        "lang": 131,
        "symbolRotate": 2752,
        "symbolOffset": 2549,
        "showAllSymbol": 942,
        "transitionDuration": 993,
        "bottom": 3724,
        "fillerColor": 229,
        "nameMap": 1249,
        "barMaxWidth": 747,
        "radius": 2103,
        "center": 2425,
        "magicType": 3276,
        "labelPrecision": 248,
        "option": 654,
        "seriesIndex": 935,
        "controlPosition": 121,
        "itemGap": 3188,
        "padding": 3481,
        "shadowStyle": 347,
        "boxplot": 1394,
        "labelFormatter": 264,
        "realtime": 631,
        "dataBackgroundColor": 239,
        "showDetail": 247,
        "showDataShadow": 217,
        "x": 684,
        "valueDim": 499,
        "onZero": 931,
        "right": 3255,
        "clockwise": 1035,
        "itemWidth": 1732,
        "trigger": 3840,
        "axis": 379,
        "selectedOffset": 670,
        "startAngle": 1293,
        "minAngle": 590,
        "top": 4637,
        "avoidLabelOverlap": 870,
        "labelLine": 3785,
        "sankey": 2933,
        "endAngle": 213,
        "start": 779,
        "roam": 1738,
        "fontWeight": 2828,
        "fontFamily": 2490,
        "subtextStyle": 2066,
        "indicator": 853,
        "sublink": 708,
        "zoom": 1038,
        "subtarget": 659,
        "length": 1060,
        "itemSize": 505,
        "controlStyle": 452,
        "yAxisIndex": 2529,
        "edgeLabel": 1188,
        "radiusAxisIndex": 354,
        "scaleLimit": 1313,
        "geoIndex": 535,
        "regions": 1892,
        "itemHeight": 1290,
        "nodes": 644,
        "candlestick": 3166,
        "crossStyle": 466,
        "edges": 369,
        "links": 3277,
        "layout": 846,
        "barBorderColor": 721,
        "barBorderWidth": 498,
        "treemap": 3865,
        "y": 367,
        "valueIndex": 704,
        "showLegendSymbol": 482,
        "mapValueCalculation": 492,
        "optionToContent": 264,
        "handleColor": 187,
        "handleSize": 271,
        "showContent": 1853,
        "angleAxisIndex": 406,
        "endValue": 327,
        "triggerOn": 1720,
        "contentToOption": 169,
        "buttonColor": 71,
        "rotate": 1144,
        "hoverLink": 335,
        "outOfRange": 491,
        "textareaColor": 58,
        "textareaBorderColor": 58,
        "textColor": 60,
        "buttonTextColor": 66,
        "category": 336,
        "hideDelay": 786,
        "alwaysShowContent": 1267,
        "extraCssText": 901,
        "effectType": 277,
        "force": 1820,
        "rippleEffect": 723,
        "edgeSymbolSize": 329,
        "showEffectOn": 271,
        "gravity": 199,
        "edgeLength": 193,
        "layoutAnimation": 152,
        "length2": 169,
        "enterable": 957,
        "dim": 83,
        "readOnly": 143,
        "levels": 444,
        "textGap": 256,
        "pixelRatio": 84,
        "nodeScaleRatio": 232,
        "draggable": 249,
        "brushType": 158,
        "radarIndex": 152,
        "large": 182,
        "edgeSymbol": 675,
        "largeThreshold": 132,
        "leafDepth": 73,
        "childrenVisibleMin": 73,
        "minSize": 35,
        "maxSize": 35,
        "sort": 90,
        "funnelAlign": 61,
        "source": 336,
        "nodeClick": 200,
        "curveness": 350,
        "areaSelectStyle": 104,
        "parallelIndex": 52,
        "initLayout": 359,
        "trailLength": 116,
        "boxWidth": 20,
        "back": 53,
        "rewind": 110,
        "zoomToNodeRatio": 80,
        "squareRatio": 60,
        "parallelAxisDefault": 358,
        "checkpointStyle": 440,
        "nodeWidth": 49,
        "color0": 62,
        "layoutIterations": 56,
        "nodeGap": 54,
        "color(Array": 76,
        "<string>)": 76,
        "repulsion": 276,
        "tiled": 105,
        "currentIndex": 145,
        "axisType": 227,
        "loop": 97,
        "playInterval": 112,
        "borderColor0": 23,
        "gap": 43,
        "autoPlay": 123,
        "showPlayBtn": 25,
        "breadcrumb": 119,
        "colorMappingBy": 85,
        "id": 18,
        "blurSize": 85,
        "minOpacity": 50,
        "maxOpacity": 54,
        "prevIcon": 12,
        "children": 21,
        "shape": 98,
        "nextIcon": 12,
        "showNextBtn": 17,
        "stopIcon": 21,
        "visibleMin": 83,
        "visualDimension": 97,
        "colorSaturation": 56,
        "colorAlpha": 66,
        "emptyItemWidth": 10,
        "inactiveOpacity": 4,
        "activeOpacity": 4,
        "showPrevBtn": 19,
        "playIcon": 26,
        "ellipsis": 19,
        "gapWidth": 19,
        "borderColorSaturation": 10,
        "handleIcon": 2,
        "handleStyle": 6,
        "borderType": 1,
        "constantSpeed": 1,
        "polyline": 2,
        "blendMode": 1,
        "dataBackground": 1,
        "textAlign": 1,
        "textBaseline": 1,
        "brush": 3
    };
    let data = [];
    for (var name in keywords) {
        data.push({
            name: name,
            value: Math.sqrt(keywords[name])
        })
    }

    paintWordCloud(data, 'wordCloud');
}

function init3DLine() {
    let data = [];
    // Parametric curve
    for (let t = 0; t < 25; t += 0.001) {
        let x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t);
        let y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t);
        let z = t + 2.0 * Math.sin(75 * t);
        data.push([x, y, z]);
    }
    console.log(data.length);

    paint3DLine(data, '3DLine');
}

function initTable() {
    //初始化
 let InitTable = function (url) {
     //先销毁表格
     $('#ccbtest').bootstrapTable("destroy");
    //加载表格
     $('#ccbtest').bootstrapTable({
        searchAlign: 'left',
        search: true,   //显示隐藏搜索框
        showHeader: true,     //是否显示列头
        //classes: 'table-no-bordered',
        showLoading: true,
        undefinedText: '',
        showFullscreen: true,
        toolbarAlign: 'left',
        paginationHAlign: 'right',
        silent: true,
        url: url,
        method: 'post',                      //请求方式（*）
        toolbar: '#toolbar',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        //queryParams: InitTable.queryParams,  //传递参数（*）
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 15,                       //每页的记录行数（*）
        pageList: [2, 5, 10, 15],        //可供选择的每页的行数（*）
        search: false,                      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 680,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "Row_ID",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                    //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                   //是否显示父子表
        showExport: true,
        //exportDataType: 'all',
        exportDataType: "selected",        //导出checkbox选中的行数
        paginationLoop: false,             //是否无限循环
        //得到查询的参数
        queryParams : function (params) {
             //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
             let temp = {
                 rows: params.limit,                         //页面大小
                 page: (params.offset / params.limit) + 1,   //页码
                 sort: params.sort,      //排序列名
                 sortOrder: params.order //排位命令（desc，asc）
             };
             return temp;
         },
        columns: [{
            checkbox: true
        },{
             field: 'Row_ID',
             title: 'Row_ID'
        },{
             field: 'Order_ID',
             title: 'Order_ID',
             width: '200'
        },{
             field: 'Order_Date',
             title: 'Order_Date'
        },{
             field: 'Ship_Date',
             title: 'Ship_Date'
        },{
             field: 'Ship_Mode',
             title: 'Ship_Mode'
        },{
             field: 'Customer_ID',
             title: 'Customer_ID'
        },{
             field: 'Customer_Name',
             title: 'Customer_Name'
        },{
             field: 'Segment',
             title: 'Segment'
        },{
             field: 'City',
             title: 'City'
        },{
             field: 'State',
             title: 'State'
        },{
             field: 'Country',
             title: 'Country'
        },{
             field: 'Region',
             title: 'Region'
        },{
             field: 'Product_ID',
             title: 'Product_ID'
        },{
             field: 'Category',
             title: 'Category'
        },{
             field: 'Sub_Category',
             title: 'Sub_Category'
        },{
             field: 'Product_Name',
             title: 'Product_Name'
        },{
             field: 'Sales',
             title: 'Sales'
        },{
             field: 'Quantity',
             title: 'Quantity'
        },{
             field: 'Discount',
             title: 'Discount'
        },{
             field: 'Profit',
             title: 'Profit'
        }],
         onLoadSuccess: function (data) {
            $('.dropdown-toggle').dropdown();
         },
         onLoadError: function (status, res) {
             //showTips("数据加载失败！");
         },
         onPageChange: function(number, size) {

         },
         onResetView: function(e, cardView) {
            $(".fixed-table-body").height($(".table-responsive").height() - 71)
         }
     });
     return InitTable;
 };

 InitTable('/getCCBData/');
 // 刷新表格
 // $("#tb_SaleOrder").bootstrapTable('refresh');
}
