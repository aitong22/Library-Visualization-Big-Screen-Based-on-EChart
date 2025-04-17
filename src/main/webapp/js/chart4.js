var myChart = echarts.init(document.getElementById('chart4'));
var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];

$.get('/demo1_war_exploded/getdayflowData', function (data) {

    var campusData = {};
    data.forEach(item => {
        if (!campusData[item.departname]) {
            campusData[item.departname] = [];
        }
        campusData[item.departname].push([item.time, item.sum]);
    });

    var series = [];
    var i = 0;
    for (var campus in campusData) {
        series.push({
            name: campus,
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            itemStyle: {
                color: colorList[i]
            },
            data: campusData[campus].map(item => item[1])
        });
        i++;
    }

    var xAxisData = [];
    if (Object.keys(campusData).length > 0) {
        xAxisData = campusData[Object.keys(campusData)[0]].map(item => item[0]);
    }

    myChart.setOption({
        title: {
            text: '当日流量统计',
            show:true,
            textStyle:{
                color:"#FFF",
                fontSize:13
            },
            left:20,
            top:10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
            data: Object.keys(campusData),
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xAxisData,
                axisLabel: {
                    textStyle: {
                        color: "#FFF"
                    },
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "#FFF"
                    },
                },
            }
        ],
        series: series,
    });
}, 'json');