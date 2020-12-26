$(function(){
    initEvent();
    scatterMapInit();
    graphInit();
    initGrid1();
});

function initEvent() {
    $("#region").change(function() {
        scatterMapInit();
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

function scatterMapInit() {

    let title = '全球主要城市销售数量';
    let subTitle = '来源于11服务器ccb_test假数据';
    let legendData = ['Sales'];
    let tooltip = "销售数量：";
    let seriesMapData = [];

    let seriesScatterData = [
        {name: 'France', value: [2.21,46.23, 25011.23]},
        {name: 'United Kingdom', value: [-3.44,55.38, 15011.89]},
        {name: 'Italy', value: [12.57,41.87, 32346.83]}];

    let param = {};
    param["region"] = $("#region").val();

    $.ajax({
        type: 'post',
        url: '/querySalesByCity/',
        dataType: 'json',
        data : param,
        success: function(result) {
            if (result.isFailed == '1') {
                alert(result.message)
                return false;
            }

            $.each(result.data, function(i, item) {
                let obj = {};
                obj["name"] = item["Country"];
                obj["value"] = item["Sales"];

                seriesMapData.push(obj);
            });

            paintScatterBMap(title, subTitle, legendData, tooltip, seriesMapData, seriesScatterData, 'scatterMap');
        }
    });
}

function graphInit() {
    let nodes = [{
        //category: 0,
        name: "You",
        symbol: "image://../static/img/img1.png",
        symbolSize: 30,
        size: 30,
        x: -90,
        y: 50,
        draggable: true
    },{
        //category: 0,
        name: "She",
        symbol: "image://../static/img/img2.png",
        symbolSize: 30,
        size: 30,
        x: 30,
        y: 50,
        draggable: true
    },{
        //category: 0,
        name: "He",
        symbol: "image://../static/img/img3.png",
        symbolSize: 30,
        size: 30,
        x: -20,
        y: 60,
        draggable: true
    },{
        //category: 0,
        name: "main",
        symbol: "circle",
        symbolSize: 30,
        size: 30,
        label: {
            fontSize: 8,
            position: 'inside'
        },
        x: -50,
        y: 40,
        draggable: true
    },{
        //category: 0,
        name: "I",
        symbol: "pin",
        symbolSize: 30,
        size: 30,
        x: -130,
        y: 50,
        draggable: true
    }];

    let links = [{
        source: "main",
        target: "You",
        weight: 6,
        name: "link1",
        value: "4463",
        label: {
            normal: {
                show: true,
                formatter: '{c}',
                fontSize: 8
            }
        }
    },{
        source: "main",
        target: "She",
        weight: 6,
        name: "link2",
        value: "dhiii",
        label: {
            normal: {
                show: true,
                formatter: '{c}',
                fontSize: 8
            }
        }
    },{
        source: "main",
        target: "He",
        weight: 6,
        name: "link3",
        value: "3ee32",
        label: {
            normal: {
                show: true,
                formatter: '{c}',
                fontSize: 8
            }
        }
    },{
        source: "You",
        target: "I",
        weight: 6,
        name: "link4",
        value: "ui922",
        label: {
            normal: {
                show: true,
                formatter: '{c}',
                fontSize: 8
            }
        }
    }];//关系线条

    paintGraphChart(nodes, links,'graph');

     // $.ajax({
     //        url: "..../GetScholarRelation",
     //        type: "post",
     //        dataType: "jsonp",
     //        async: false,
     //        data: { "Id": id },
     //        jsonp: "callback",
     //        success: function (data) {
     //            var result = data;
     //            if (result.Success == 1) {
     //                //节点
     //                $.each(result.List, function (i, e) {
     //
     //                    nodes.push({
     //                        category: e.GroupCode,
     //                        name: e.RealName,
     //                        symbol: "image://e.Avatar",//e.Avatar为图片链接
     //                        symbolSize: 60,
     //                        size: 60,
     //                        x: null,
     //                        y: null,
     //                        draggable: true,
     //                        scholarUrl:e.Link
     //                    }),
     //                    links.push(
     //                        {
     //                            source: e.RealName,
     //                            target: author,
     //                            weight: 6,
     //                            name: e.RealName,
     //                        })
     //                });
     //
     //                $.each(result.Group, function (i, e) {
     //                    legendData.push(e.GroupName);
     //                    seriesCategories.push({
     //                        name: e.GroupName
     //                    })
     //
     //                });
     //                // 使用刚指定的配置项和数据显示图表。
     //                myChart.setOption(option);
     //
     //                // paintGraphChart('graph');
     //            }
     //            else {
     //                //layer.msg(result.Msg);
     //            }
     //        }
     //    });

}

function initGrid1() {

    let builderJson = {
      "all": 10887,
      "charts": {
        "map": 3237,
        "lines": 2164,
        "bar": 7561,
        "line": 7778,
        "pie": 7355,
        "scatter": 2405,
        "candlestick": 1842,
        "radar": 2090,
        "heatmap": 1762,
        "treemap": 1593,
        "graph": 2060,
        "boxplot": 1537,
        "parallel": 1908,
        "gauge": 2107,
        "funnel": 1692,
        "sankey": 1568
      },
      "components": {
        "geo": 2788,
        "title": 9575,
        "legend": 9400,
        "tooltip": 9466,
        "grid": 9266,
        "markPoint": 3419,
        "markLine": 2984,
        "timeline": 2739,
        "dataZoom": 2744,
        "visualMap": 2466,
        "toolbox": 3034,
        "polar": 1945
      },
      "ie": 9743
    };

    let downloadJson = {
      "echarts.min.js": 17365,
      "echarts.simple.min.js": 4079,
      "echarts.common.min.js": 6929,
      "echarts.js": 14890
    };

    let themeJson = {
      "dark.js": 1594,
      "infographic.js": 925,
      "shine.js": 1608,
      "roma.js": 721,
      "macarons.js": 2179,
      "vintage.js": 1982
    };

    let title = [{
            text: '在线构建',
            subtext: '总计 ' + builderJson.all,
            itemGap: 5,
            x: '25%',
            textStyle: {
                color: '#fff',
                fontSize: 10
            },
            subtextStyle: {
                color: 'gray',
                fontSize: 8
            },
            textAlign: 'center'
        }, {
            text: '各版本下载',
            subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
                return all + downloadJson[key];
            }, 0),
            x: '75%',
            itemGap: 5,
            textStyle: {
                color: '#fff',
                fontSize: 10
            },
            subtextStyle: {
                color: 'gray',
                fontSize: 8
            },
            textAlign: 'center'
        }, {
            text: '主题下载',
            subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
                return all + themeJson[key];
            }, 0),
            x: '75%',
            y: '50%',
            itemGap: 5,
            textStyle: {
                color: '#fff',
                fontSize: 10
            },
            subtextStyle: {
                color: 'gray',
                fontSize: 8
            },
            textAlign: 'center'
        }];

    let x0AxisMax = builderJson.all;
    let x1AxisMax = builderJson.all;
    let y0AxisMax = Object.keys(builderJson.charts);
    let y1AxisMax = Object.keys(builderJson.components);
    // charts--bar--data
    let series0Data = Object.keys(builderJson.charts).map(function (key) {
        return builderJson.charts[key];
    });
    let series1Data = Object.keys(builderJson.charts).map(function (key) {
        return builderJson.all - builderJson.charts[key];
    });
    // components--bar--data
    let series2Data = Object.keys(builderJson.components).map(function (key) {
        return builderJson.components[key];
    });
    let series3Data = Object.keys(builderJson.components).map(function (key) {
        return builderJson.all - builderJson.components[key];
    });
    // pie --data
    let series4Data = Object.keys(downloadJson).map(function (key) {
        return {
            name: key.replace('.js', ''),
            value: downloadJson[key]
        }
    });
    let series5Data = Object.keys(themeJson).map(function (key) {
        return {
            name: key.replace('.js', ''),
            value: themeJson[key]
        }
    });

    paintWaterMark(title, x0AxisMax, x1AxisMax, y0AxisMax, y1AxisMax, series0Data, series1Data,
                        series2Data, series3Data, series4Data, series5Data, 'waterMark');
}