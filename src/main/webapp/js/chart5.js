var chart5 = echarts.init(
    document.getElementById('chart5'), 'white', {renderer: 'canvas'});
var option5 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    grid:{
        top:40,
        right:20,
        bottom:50

    },
    "series": [
        {
            "type": "line",
            "name": "\u8f7f\u8f66",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": false,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "08:00-08:30",
                    60
                ],
                [
                    "08:30-09:00",
                    55
                ],
                [
                    "09:00-09:30",
                    65
                ],
                [
                    "09:30-10:00",
                    68
                ],
                [
                    "10:00-10:30",
                    75
                ],
                [
                    "10:30-11:00",
                    85
                ],
                [
                    "11:00-11:30",
                    95
                ],
                [
                    "11:30-12:00",
                    85
                ],
                [
                    "12:00-12:30",
                    76
                ],
                [
                    "12:30-13:00",
                    48
                ],
                [
                    "13:00-13:30",
                    56
                ],
                [
                    "13:30-14:00",
                    75
                ],
                [
                    "14:00-14:30",
                    85
                ],
                [
                    "14:30-15:00",
                    83
                ],
                [
                    "15:00-15:30",
                    84
                ],
                [
                    "15:30-16:00",
                    75
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "\u5361\u8f66",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "08:00-08:30",
                    40
                ],
                [
                    "08:30-09:00",
                    45
                ],
                [
                    "09:00-09:30",
                    48
                ],
                [
                    "09:30-10:00",
                    52
                ],
                [
                    "10:00-10:30",
                    58
                ],
                [
                    "10:30-11:00",
                    65
                ],
                [
                    "11:00-11:30",
                    75
                ],
                [
                    "11:30-12:00",
                    85
                ],
                [
                    "12:00-12:30",
                    95
                ],
                [
                    "12:30-13:00",
                    81
                ],
                [
                    "13:00-13:30",
                    82
                ],
                [
                    "13:30-14:00",
                    74
                ],
                [
                    "14:00-14:30",
                    84
                ],
                [
                    "14:30-15:00",
                    94
                ],
                [
                    "15:00-15:30",
                    76
                ],
                [
                    "15:30-16:00",
                    86
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.2
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "\u6469\u6258\u8f66",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "08:00-08:30",
                    80
                ],
                [
                    "08:30-09:00",
                    75
                ],
                [
                    "09:00-09:30",
                    78
                ],
                [
                    "09:30-10:00",
                    85
                ],
                [
                    "10:00-10:30",
                    92
                ],
                [
                    "10:30-11:00",
                    65
                ],
                [
                    "11:00-11:30",
                    75
                ],
                [
                    "11:30-12:00",
                    85
                ],
                [
                    "12:00-12:30",
                    55
                ],
                [
                    "12:30-13:00",
                    65
                ],
                [
                    "13:00-13:30",
                    75
                ],
                [
                    "13:30-14:00",
                    65
                ],
                [
                    "14:00-14:30",
                    75
                ],
                [
                    "14:30-15:00",
                    85
                ],
                [
                    "15:00-15:30",
                    95
                ],
                [
                    "15:30-16:00",
                    85
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0.2
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "\u516c\u4ea4\u8f66",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "08:00-08:30",
                    60
                ],
                [
                    "08:30-09:00",
                    35
                ],
                [
                    "09:00-09:30",
                    38
                ],
                [
                    "09:30-10:00",
                    45
                ],
                [
                    "10:00-10:30",
                    52
                ],
                [
                    "10:30-11:00",
                    65
                ],
                [
                    "11:00-11:30",
                    78
                ],
                [
                    "11:30-12:00",
                    88
                ],
                [
                    "12:00-12:30",
                    98
                ],
                [
                    "12:30-13:00",
                    78
                ],
                [
                    "13:00-13:30",
                    98
                ],
                [
                    "13:30-14:00",
                    88
                ],
                [
                    "14:00-14:30",
                    78
                ],
                [
                    "14:30-15:00",
                    98
                ],
                [
                    "15:00-15:30",
                    78
                ],
                [
                    "15:30-16:00",
                    68
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "\u81ea\u884c\u8f66",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "08:00-08:30",
                    70
                ],
                [
                    "08:30-09:00",
                    65
                ],
                [
                    "09:00-09:30",
                    78
                ],
                [
                    "09:30-10:00",
                    55
                ],
                [
                    "10:00-10:30",
                    65
                ],
                [
                    "10:30-11:00",
                    55
                ],
                [
                    "11:00-11:30",
                    65
                ],
                [
                    "11:30-12:00",
                    75
                ],
                [
                    "12:00-12:30",
                    85
                ],
                [
                    "12:30-13:00",
                    95
                ],
                [
                    "13:00-13:30",
                    99
                ],
                [
                    "13:30-14:00",
                    99
                ],
                [
                    "14:00-14:30",
                    99
                ],
                [
                    "14:30-15:00",
                    99
                ],
                [
                    "15:00-15:30",
                    85
                ],
                [
                    "15:30-16:00",
                    75
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "\u7535\u52a8\u81ea\u884c\u8f66",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "08:00-08:30",
                    75
                ],
                [
                    "08:30-09:00",
                    95
                ],
                [
                    "09:00-09:30",
                    78
                ],
                [
                    "09:30-10:00",
                    55
                ],
                [
                    "10:00-10:30",
                    65
                ],
                [
                    "10:30-11:00",
                    78
                ],
                [
                    "11:00-11:30",
                    90
                ],
                [
                    "11:30-12:00",
                    85
                ],
                [
                    "12:00-12:30",
                    98
                ],
                [
                    "12:30-13:00",
                    78
                ],
                [
                    "13:00-13:30",
                    99
                ],
                [
                    "13:30-14:00",
                    99
                ],
                [
                    "14:00-14:30",
                    99
                ],
                [
                    "14:30-15:00",
                    99
                ],
                [
                    "15:00-15:30",
                    95
                ],
                [
                    "15:30-16:00",
                    78
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        },
        {
            "type": "line",
            "name": "\u51fa\u79df\u8f66",
            "connectNulls": false,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "clip": true,
            "step": false,
            "data": [
                [
                    "08:00-08:30",
                    80
                ],
                [
                    "08:30-09:00",
                    75
                ],
                [
                    "09:00-09:30",
                    75
                ],
                [
                    "09:30-10:00",
                    65
                ],
                [
                    "10:00-10:30",
                    75
                ],
                [
                    "10:30-11:00",
                    88
                ],
                [
                    "11:00-11:30",
                    98
                ],
                [
                    "11:30-12:00",
                    75
                ],
                [
                    "12:00-12:30",
                    75
                ],
                [
                    "12:30-13:00",
                    99
                ],
                [
                    "13:00-13:30",
                    99
                ],
                [
                    "13:30-14:00",
                    99
                ],
                [
                    "14:00-14:30",
                    99
                ],
                [
                    "14:30-15:00",
                    99
                ],
                [
                    "15:00-15:30",
                    87
                ],
                [
                    "15:30-16:00",
                    89
                ]
            ],
            "hoverAnimation": true,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "areaStyle": {
                "opacity": 0
            },
            "zlevel": 0,
            "z": 0
        }
    ],
    "legend": [
        {
            "data": [
                "\u8f7f\u8f66",
                "\u5361\u8f66",
                "\u6469\u6258\u8f66",
                "\u516c\u4ea4\u8f66",
                "\u81ea\u884c\u8f66",
                "\u7535\u52a8\u81ea\u884c\u8f66",
                "\u51fa\u79df\u8f66"
            ],
            "selected": {
                "\u8f7f\u8f66": true,
                "\u5361\u8f66": true,
                "\u6469\u6258\u8f66": true,
                "\u516c\u4ea4\u8f66": true,
                "\u81ea\u884c\u8f66": true,
                "\u7535\u52a8\u81ea\u884c\u8f66": true,
                "\u51fa\u79df\u8f66": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "bottom":'2%',
            "textStyle":{
                color:'white',
                fontSize:9
            }
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            axisLabel: {
                color: '#FFF', // 设置坐标轴文字颜色
                fontSize:9
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "08:00-08:30",
                "08:30-09:00",
                "09:00-09:30",
                "09:30-10:00",
                "10:00-10:30",
                "10:30-11:00",
                "11:00-11:30",
                "11:30-12:00",
                "12:00-12:30",
                "12:30-13:00",
                "13:00-13:30",
                "13:30-14:00",
                "14:00-14:30",
                "14:30-15:00",
                "15:00-15:30",
                "15:30-16:00"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            axisLabel: {
                color: '#FFF', // 设置坐标轴文字颜色
                fontSize:9
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "text": "交通流量与平均速度",
            show:true,
            textStyle:{
                color:"#FFF",
                fontSize:13
            },
            left:20,
            top:10
        }
    ],
    "visualMap": {
            "show": false,
        "type": "piecewise",
        "min": 0,
        "max": 100,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 14,
        "borderWidth": 0
    }
};
chart5.setOption(option5);

window.addEventListener('resize',function(){
    chart5.resize();
});