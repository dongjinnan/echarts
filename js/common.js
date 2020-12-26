// 绘制条形图
function paintBar(title, xAxisMax, yAxisData, seriesData, domId) {
    let option = {
        grid: {
            title: {
                text: 'Sales',
                show: true
            },
            right: '15%',
            top: '5',
            bottom: '1',
            // bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            max: xAxisMax,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#E3E3E3'
                }
            },
            axisLabel: {
                fontSize: 8,
                show: true,
                color: 'black',
                formatter: '${value}'
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: yAxisData,
            axisLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                interval: 0,
                fontSize: 8,
                show: true
            },
            splitLine: {
                show: false
            },
            axisTick: {
                length: 1,
                inside: true
            }
        },
        series: {
            type: 'bar',
            itemStyle: {
                color: '#2DB757'
            },
            data: seriesData
        }
    };

    if (domId == 'sales') {
        option.grid.top = '10';
        option.xAxis.axisLabel.show = false;
    } else if (domId == 'profits'){
        option.grid.top = '0';
        option.grid.bottom = '10';
        option.xAxis.axisTick.show = true;
    }

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// 绘制面积图
function paintAreaChart(xAxisData, seriesData, domId) {
    let option = {
        grid: {
            top: '10',
            bottom: '10',
            left: '15%'
        },
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            //boundaryGap: false,
            data: xAxisData,
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#eee'
                }
            },
            minInterval: 1
        },
        yAxis: {
            type: 'value',
            minInterval: 10000,
            axisLabel: {
                fontSize: 10,
                color: '#fff',
                formatter: '${value}'
            },
            splitLine: {
                lineStyle: {
                    color: '#ebebeb',
                    type: 'dashed'
                }
            },
            axisTick: {
                width: 1
            },
            axisLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#eee'
                }
            }
        },
        series: [
            {
                type:'line',
                smooth:0.1,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                },
                data: seriesData
            }
        ]
    };

    if (domId == 'sales') {
        option.grid.top = '10';
        option.xAxis.axisLabel.show = false;
        option.series[0].itemStyle.color = '#188CE5';
        option.series[0].areaStyle.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#188CE5'
                    }, {
                        offset: 1,
                        color: '#fff'
                    }]);
    } else if (domId == 'discounts') {
        option.grid.bottom = '30';
        option.xAxis.axisTick.show = true;
        option.xAxis.axisLine.lineStyle.color = '#333333';
        option.yAxis.minInterval = 10;
        option.series[0].itemStyle.color = '#FF4136';
        option.series[0].areaStyle.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF4136'
                    }, {
                        offset: 1,
                        color: '#fff'
                    }]);
    } else if (domId == 'profits') {
        option.xAxis.axisLabel.show = false;
        option.yAxis.minInterval = 1000;
        option.series[0].itemStyle.color = '#FFE600';
        option.series[0].areaStyle.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFE600'
                    }, {
                        offset: 1,
                        color: '#fff'
                    }]);
    }

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// 画环形图
function paintRingChart(data, domId) {
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "Sales <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        color: '#fff',
                        position: 'center',
                        formatter: 'Sales:\n${c}'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    color: {
                        colorStops: [{
                            offset: 0, color: '#fff' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2DB757' // 100% 处的颜色
                        }],
                    }
                },
                data: data
            }
        ]
    };

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// 堆叠折线图
function paintStackedLine(xAxisData, seriesData1, seriesData2, domId) {
    let option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData,
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                fontSize: 8
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                fontSize: 8,
                textStyle: {
                    color: '#fff'
                },
                formatter: '${value}'
            },
            splitLine: {
                show: true,
                lineStyle:{
                    color: ['#696969'],
                    width: 1,
                    type: 'solid'
                }
            }
        },
        series: [
            {
                name:'Mike.Hillyer',
                type:'line',
                stack: '总量',
                data:seriesData1,
                itemStyle: {
                    normal: {
                        color: '#188CE5',
                        lineStyle: {
                            width:3,
                            color: '#188CE5'
                        }
                    }
                }
            },
            {
                name:'Jon.Stephens',
                type:'line',
                stack: '总量',
                data:seriesData2,
                itemStyle: {
                    normal: {
                        color: '#FFE600',
                        lineStyle: {
                            width:5,
                            color: '#FFE600'
                        }
                    }
                }
            },
            {
                name:'Linda.Williams',
                type:'line',
                stack: '总量',
                data:["2709.50", "5355.12", "18071.12", "13095.39"],
                itemStyle: {
                    normal: {
                        color: '#FF4136',
                        lineStyle: {
                            width:8,
                            color: '#FF4136'
                        }
                    }
                }
            }
        ]
    };

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// 画堆叠柱状图
function paintStackedBar(legendData, xData, seriesData, domId) {
    let option = {
        tooltip : {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle: {
                fontSize: 10
            }
        },
        legend: {
            itemWidth: 16,
            itemHeight: 10,
            data: legendData,
            textStyle: {
                color: '#fff',
                fontSize: 10
            }
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '5%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xData,
                axisLine: {
                    lineStyle: {
                        color: '#eee',
                    }
                },
                axisLabel: {
                    fontSize: 8
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    lineStyle: {
                        color: '#eee',
                    }
                },
                axisLabel: {
                    fontSize: 8
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#696969'],
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        ],
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: 0,
                zoomOnMouseWheel:true,
                moveOnMouseMove:true,
                filterMode: 'empty'
            },
            {
                type: 'inside',
                yAxisIndex: 0,
                zoomOnMouseWheel:true,
                moveOnMouseMove:true,
                filterMode: 'empty'
            }
        ],
        series : seriesData
    };

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// 画双X轴折线图
function paintMultipleXAxises(legendData, xAxis0Data, xAxis1Data, series0Data, series1Data, xAxis0PointerLabel, xAxis1PointerLabel, domId) {
    const colors = ['#5793f3', '#d14a61', '#675bba'];
    let dom = document.getElementById(domId);
    let myChart = echarts.init(dom);

    let option = {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross',
            }
        },
        legend: {
            x: 'right',
            y: 30,
            itemWidth: 16,
            itemHeight: 6,
            align: 'left',
            orient: 'vertical',
            textStyle: {
                color: '#fff',
                fontSize: 6
            },
            data:legendData
        },
        grid: {
            top: 30,
            bottom: 30,
            right: 0
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    fontSize: 8
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return xAxis0PointerLabel + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: xAxis0Data
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    fontSize: 8
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return xAxis1PointerLabel + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: xAxis1Data
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#eee',
                    }
                },
                axisLabel: {
                    fontSize: 8
                },
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#696969'],
                        width: 1,
                        type: 'solid'
                    }
                },
                axisPointer: {
                    label: {
                        color: '#fff',
                        backgroundColor: 'gray'
                    }
                }
            }
        ],
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: 0,
                filterMode: 'empty'
            },
            {
                type: 'inside',
                xAxisIndex: 1,
                filterMode: 'empty'
            },
            {
                type: 'inside',
                yAxisIndex: 0,
                filterMode: 'empty'
            }
        ],
        series: [
            {
                name:'分类销量',
                type:'line',
                xAxisIndex: 1,
                smooth: true,
                data: series0Data
            },
            {
                name:'下单销量',
                type:'line',
                smooth: true,
                data: series1Data
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

// 画散点气泡图
function paintScatterBubble(xAxisName, yAxisName, seriesData, domId) {
    const schema = [
        {name: 'Sales', index: 0, text: '销量'},
        {name: 'Profit', index: 1, text: '利润'},
        {name: 'Discount', index: 2, text: '折扣'},
        {name: 'Order_Date', index: 3, text: '日期'}
    ];

    const itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    $.each(seriesData, function(i, item) {
        item["itemStyle"] = itemStyle;
    });

    let option = {
        color: [
            '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
            y: 'top',
            itemWidth: 16,
            itemHeight: 10,
            data: ['North', 'South', 'Central'],
            textStyle: {
                color: '#fff',
                fontSize: 10
            }
        },
        grid: {
            x: '10%',
            x2: 150,
            y: '18%',
            y2: '10%'
        },
        tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                let value = obj.value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 12px;padding-bottom: 5px;margin-bottom: 5px">'
                    + obj.seriesName + ' ' + value[3] + '：'
                    + value[4]
                    + '</div>'
                    + schema[0].text + '：' + value[0] + '<br>'
                    + schema[1].text + '：' + value[1] + '<br>'
                    + schema[2].text + '：' + value[2] + '<br>';
            },
            textStyle: {
                fontSize: 10
            }
        },
        xAxis: {
            type: 'value',
            name: xAxisName,
            nameGap: 16,
            nameTextStyle: {
                color: '#fff',
                fontSize: 10
            },
            // max: 31,
            splitLine: {
                show: false
            },
            axisLabel: {
                fontSize: 8
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: yAxisName,
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 10
            },
            axisLabel: {
                fontSize: 8
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        visualMap: [
            {
                left: 'right',
                top: '10%',
                dimension: 0,
                min: 0,
                max: 10000,
                itemWidth: 30,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['圆形大小：PM2.5'],
                textGap: 30,
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                },
                inRange: {
                    symbolSize: [10, 70]
                },
                outOfRange: {
                    symbolSize: [10, 70],
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            },
            {
                right: '3.5%',
                bottom: '5%',
                dimension: 1,
                min: 0,
                max: 850,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['明暗：利润'],
                textGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                },
                inRange: {
                    colorLightness: [1, 0.5]
                },
                outOfRange: {
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            }
        ],
        series: seriesData
    };

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// 画世界地图颜色区块显示/散点图
function paintScatterBMap(title, subTitle, legendData, tooltip, seriesMapData, seriesScatterData, domId) {
    let option = {
        title: {
            text: title,
            subtext: subTitle,
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 12,
                fontWeight: 10
            },
            subtextStyle: {
                fontSize: 10,
            }
        },
        legend: { //图例组件。
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:legendData,
            textStyle: {
                color: '#fff',
                fontSize: 8
            }
        },
        //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        visualMap: {
            min: 0, //最小值
            max: 30000, //最大值
            calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
            inRange: {
                color: ['#fff', '#FFE600', '#ffab35'] //颜色
            },
            textStyle: {
                color: '#fff',
                fontSize: 8
            },
        },
        tooltip : {
            show:true, //鼠标移入是否触发数据
            trigger: 'item', // 触发方式
            formatter: '{b}-' + tooltip + '{c}',
            // formatter: function(obj) {
            //     let data = obj["data"];
            //     let name = data["name"];
            //     let value = data["value"];
            //     return name + "-" + tooltip + value[2];
            // }
        },
        // 散点图使用
        // geo: {
        //     name: '地图',
        //     type: 'map', //地图种类
        //     map: 'world', //地图类型。
        //     center: [0,56.23],
        //     zoom:5,//放大比例
        //     roam: true,
        //     // geoIndex: 0,
        //     // aspectScale: 0.75, // 长宽比
        // },
        series : [
            {

                type: 'map',
                map: 'world', //地图类型。
                center: [0,56.23],
                zoom:5,//放大比例
                roam: true,
                coordinateSystem: 'geo', //该系列使用的坐标系
                itemStyle: {//地图区域的多边形 图形样式。
                    normal: {
                        label: {
                            show: true,
                        }
                        // areaColor: '',
                        // borderColor: ''
                    },
                    emphasis: { //高亮状态下的样试
                        label: {
                            show: true,
                        },
                        areaColor: '#76EEC6',
                        // borderColor: ''
                    }
                },
                label: { //图形上的文本标签，可用于说明图形的一些数据信息
                    show:true,
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: seriesMapData
            },
            // {
            //     name: 'Top 3',
            //     type: 'effectScatter',
            //     coordinateSystem: 'geo', //该系列使用的坐标系
            //     data: seriesScatterData,
            //     symbolSize: function (val) {
            //         return val[2]/1000;
            //     }, //标记的大小
            //     showEffectOn: 'render', // 配置什么时候显示特效
            //     rippleEffect: {
            //         brushType: 'stroke'
            //     },
            //     hoverAnimation: true,
            //     label: {
            //         normal: {
            //             formatter: '{a}',
            //             position: 'right',
            //             show: true
            //         }
            //     },
            //     itemStyle: {
            //         normal: {
            //             color: 'red',
            //             shadowBlur: 10,
            //             shadowColor: '#696969'
            //         }
            //     },
            //     zlevel: 1
            // }
        ]
    };

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// 画USA地图
function paintUSAMap(seriesData, domId) {
    let dom = document.getElementById(domId);
    let myChart = echarts.init(dom);

    myChart.showLoading();

    $.get('../static/json/USA.json', function (usaJson) {

        myChart.hideLoading();

        echarts.registerMap('USA', usaJson, {
            Alaska: {              // 把阿拉斯加移到美国主大陆左下方
                left: -121,
                top: 20,
                width: 15
            },
            Hawaii: {
                left: -110,        // 夏威夷
                top: 28,
                width: 5
            },
            'Puerto Rico': {       // 波多黎各
                left: -76,
                top: 26,
                width: 2
            }
        });

        let option = {
            tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function (params) {
                    var value = (params.value + '').split('.');
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                    return params.seriesName + '<br/>' + params.name + ': ' + value;
                }
            },
            visualMap: {
                show: true,
                left: 'right',
                min: 500000,
                max: 38000000,
                inRange: {
                    color: ['#481890', '#188CE5', '#30A8A8', '#2DB757', '#FFE600', '#FF7800', '#FF4136']
                },
                text:['High','Low'],           // 文本，默认为数值文本
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                },
                calculable: true
            },
            series: [
                {
                    name: 'USA PopEstimates',
                    type: 'map',
                    roam: true,
                    map: 'USA',
                    itemStyle:{
                        emphasis:{label:{show:true}}
                    },
                    // 文本位置修正
                    textFixed: {
                        Alaska: [20, -20]
                    },
                    data: seriesData
                }
            ]
        };

        myChart.setOption(option);
    });
}

// 画网络图
function paintGraphChart(nodes, links, domId) {

    let option = {
        title: {//标题组件，包含主标题和副标题。
            text: '网络图',
            subtext: '',
            x: 'right',
            y: 'bottom'
        },
        tooltip: {//提示框组件
            trigger: 'item',
            formatter: '{c}'
        },
        toolbox: {//工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
            show: true,
            feature: {
                // restore: { show: true },//重置
                // magicType: { show: true, type: ['force', 'chord'] },
                saveAsImage: { show: true }//导出图片
            }
        },
        //edgeLength: [500, 100],
        series: [//系列列表。每个系列通过 type 决定自己的图表类型。series[i]-graph用于展现节点以及节点之间的关系数据。
            {
                type: 'graph',
                layout: 'none',
                //symbol: 'pin',
                ribbonType: false,
                legendHoverLink:true,       //是否启用图例 hover 时的联动高亮。
                hoverAnimation:true,        //是否开启鼠标 hover 节点的提示动画效果。
                // categories: seriesCategories,//分类数据
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            },
                            fontSize: 10,
                            position: 'bottom',//标签位置
                            distance: 3//标签距离图形的距离
                        },
                        nodeStyle: {
                            brushType: 'both',
                            borderColor: 'rgba(255,215,0,0.4)',
                            borderWidth: 1
                        },
                        linkStyle: {
                            type: 'line'
                        }
                    },
                    emphasis: {//高亮的图形样式
                        label: {
                            show: true
                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                        },
                        nodeStyle: {
                            //r: 30
                        },
                        linkStyle: {}
                    }
                },
                edgeLabel: {
                    color: '#fff'
                },
                edgeSymbol: ['', 'arrow'],
                //useWorker: false,
                minRadius: 15,
                maxRadius: 25,
                //gravity: 0.1,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                //scaling: 0.1,
                //roam: 'move',
                nodes: nodes,//同data,关系图的节点数据列表。
                links: links,//节点间的关系数据。
                // force: {
                //     repulsion: 1000//节点之间的斥力因子。
                // }
            }]
    };

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// two bars and two pies
function paintWaterMark(title, x0AxisMax, x1AxisMax, y0AxisMax, y1AxisMax, series0Data, series1Data,
                        series2Data, series3Data, series4Data, series5Data, domId) {

    let option = {
        tooltip: {},
        title: title,
        grid: [{
            top: 35,
            width: '50%',
            bottom: '45%',
            left: 0,
            containLabel: true
        }, {
            top: '60%',
            width: '50%',
            bottom: 20,
            left: 0,
            padding: 0,
            containLabel: true
        }],
        xAxis: [{
            type: 'value',
            max: x0AxisMax,
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 8
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        }, {
            type: 'value',
            max: x1AxisMax,
            gridIndex: 1,
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 8
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        }],
        yAxis: [{
            color: '#fff',
            type: 'category',
            data: y0AxisMax,
            axisLabel: {
                interval: 0,
                rotate: 30,
                color: '#FFE600',
                fontSize: 8
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        }, {
            color: '#fff',
            gridIndex: 1,
            type: 'category',
            data: y1AxisMax,
            axisLabel: {
                interval: 0,
                rotate: 30,
                color: '#FFE600',
                fontSize: 8
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        }],
        series: [{
            type: 'bar',
            stack: 'chart',
            z: 3,
            label: {
                normal: {
                    position: 'right',
                    show: true,
                    color: '#fff',
                    fontSize: 8
                }
            },
            data: series0Data
        }, {
            type: 'bar',
            stack: 'chart',
            silent: true,
            itemStyle: {
                normal: {
                    color: '#777'
                }
            },
            data: series1Data
        }, {
            type: 'bar',
            stack: 'component',
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            label: {
                normal: {
                    position: 'right',
                    show: true,
                    color: '#fff',
                    fontSize: 8
                }
            },
            data: series2Data
        }, {
            type: 'bar',
            stack: 'component',
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#777'
                }
            },
            data: series3Data
        }, {
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '25%'],
            label: {
                fontSize: 8
            },
            data: series4Data
        }, {
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '75%'],
            label: {
                fontSize: 8
            },
            data: series5Data
        }]
    };

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

// 词云
function paintWordCloud(data, domId) {
    let dom = document.getElementById(domId);
    let myChart = echarts.init(dom);

    let maskImage = new Image();
    maskImage.src = '../static/img/oval.png';// 菱形

    let option = {
        //backgroundColor: '#F7F7F7',
        series: [{
            type: 'wordCloud',
            //size: ['0%', '100%'],
            sizeRange: [6, 25],
            //textRotation: [0, 45, 90, -45],
            rotationRange: [-45, 90],
            //shape: 'circle',
            maskImage: maskImage,
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 6
            },
            width: '100%',
            height: '100%',
            textStyle: {
                normal: {
                    color: function(v) {
                        if (v.value > 500) {
                            return 'white';
                        } else if (v.value > 260) {
                            return 'gray';
                        } else if (v.value > 210) {
                            return '#481890';
                        } else if (v.value > 170) {
                            return '#188CE5';
                        } else if (v.value > 130) {
                            return '#ff4136';
                        } else if (v.value > 80) {
                            return '#FF7800';
                        } else if (v.value > 50) {
                            return '#30A8A8';
                        } else if (v.value > 30) {
                            return '#2DB757';
                        } else {
                            return '#FFE600';
                        }
			        }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#eee'
                }
            },
            data: data
        }]
    };
    maskImage.onload = function() {
        myChart.setOption(option);
    };
}

// 3D折线图
function paint3DLine(data, domId) {
    let option = {
        tooltip: {
            textStyle: {
                fontSize: 10
            },
            axisPointer: {
                label: {
                    fontSize: 10
                }
            }
        },
        visualMap: {
            show: false,
            dimension: 2,
            min: 0,
            max: 30,
            inRange: {
                color: ['#481890', '#188CE5', '#30A8A8', '#2DB757', '#FFE600', '#FF7800', '#ff4136']
            }
        },
        xAxis3D: {
            type: 'value',
            nameGap: 35,
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    color: '#696969'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis3D: {
            type: 'value',
            nameGap: 35,
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    color: '#696969'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        zAxis3D: {
            type: 'value',
            nameGap: 35,
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    color: '#696969'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid3D: {
            viewControl: {
                projection: 'orthographic'
            }
        },
        series: [{
            type: 'line3D',
            data: data,
            lineStyle: {
                width: 4
            }
        }]
    };

    if (option && typeof option === "object") {
        let dom = document.getElementById(domId);
        let myChart = echarts.init(dom);
        myChart.setOption(option, true);
    }
}

function updatePosition(data, myChart) {
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
    });
}

function showTooltip(dataIndex, myChart) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex, myChart) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, dx, dy, myChart) {
    data[dataIndex] = myChart.convertFromPixel('grid', this.position);

    // Update data
    myChart.setOption({
        series: [{
            id: 'a',
            data: data
        }]
    });
}

// 折线图添加拖拽功能
function addGraphic(data, myChart) {
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                type: 'circle',
                position: myChart.convertToPixel('grid', item),
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 5
                },
                invisible: true,
                draggable: true,
                ondrag: echarts.util.curry(onPointDragging, dataIndex, myChart),
                onmousemove: echarts.util.curry(showTooltip, dataIndex, myChart),
                onmouseout: echarts.util.curry(hideTooltip, dataIndex, myChart),
                z: 100
            };
        })
    });
}
