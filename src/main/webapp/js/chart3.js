var chart3 = echarts.init(
    document.getElementById('chart3'), 'white', {renderer: 'canvas'});
var option3 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#73c0de",
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#08D3D3",
    ],
    "series": [
        {
            "type": "pie",
            // "colorBy": "data",
            "legendHoverLink": true,
            "selectedMode": false,
            "selectedOffset": 10,
            "clockwise": true,
            "startAngle": 90,
            "minAngle": 0,
            "minShowLabelAngle": 0,
            "avoidLabelOverlap": true,
            "stillShowZeroSum": true,
            "percentPrecision": 2,
            "showEmptyCircle": true,
            "emptyCircleStyle": {
                "color": "lightgray",
                "borderColor": "#000",
                "borderWidth": 0,
                "borderType": "solid",
                "borderDashOffset": 0,
                "borderCap": "butt",
                "borderJoin": "bevel",
                "borderMiterLimit": 10,
                "opacity": 1
            },
            "data": [
                {
                    "name": "\u5361\u8f66",
                    "value": 1432
                },
                {
                    "name": "\u624b\u63a8\u8f66 \u4e09\u8f6e\u8f66",
                    "value": 3149
                },
                {
                    "name": "\u5ba2\u8f66",
                    "value": 989
                },
                {
                    "name": "\u884c\u4eba",
                    "value": 55321
                },
                {
                    "name": "\u975e\u673a\u52a8\u8f66",
                    "value": 57474
                }
            ],
            "radius": [
                "30%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "roseType": "radius",
            "label": {
                "show": true,
                "margin": 8,
                "formatter": "{b}: {d}%",
                "fontSize":9,
                "color": function(params) {
                    // 根据数据项的名称返回不同的颜色
                    // ...
                    return 'white';
                }
            },
            "labelLine": {
                "show": true,
                "showAbove": false,
                "length": 15,
                "length2": 15,
                "smooth": false,
                "minTurnAngle": 90,
                "maxSurfaceAngle": 90
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            },
        }
    ],
    "legend": [
        {
            show:false,
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
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    },
    "title": [
        {
            "show": true,
            "text": "按车型统计",
            show:true,
            textStyle:{
                color:"#FFF",
                fontSize:13
            },
            left:20,
            top:10
        }
    ]
};
chart3.setOption(option3);

window.addEventListener('resize',function(){
    chart3.resize();
});