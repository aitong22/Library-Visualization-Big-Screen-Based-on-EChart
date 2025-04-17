var chart3 = echarts.init(document.getElementById('chart3'));

var colors = ['#4587E7','#35AB33','#F5AD1D','#ff7f50','#da70d6','#32cd32','#6495ed'];
// 指定图表的配置项和数据
var option = {
    grid:{  //图表的边距控制
        bottom:'25px',
        right:'25px',
    },
    title: {
        text: 'ECharts 入门示例',
        textStyle:{   //文字的样式控制
            color: '#ffffff',
            fontSize:'1vw',
        },
        left:'20px',
        top:'10px',

    },
    tooltip: {},
    // legend: {    //图例控制
    //     data: ['销量']
    // },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        textStyle: {
            color:'#ffffff',
            fontSize: '20px',//为什么无效？
        }
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            itemStyle: {
                color: function(params) {
                    // 通过返回值的下标一一对应将颜色赋给柱子上，return出去什么颜色就是什么颜色，这里可以写判断
                    // console.log(params)
                    // if(cityList[0].indexOf(params.name) != -1) {
                    //     return colors[0]
                    // } else if(cityList[1].indexOf(params.name) != -1) {
                    //     return colors[1]
                    // }
                    return colors[params.dataIndex];
                }
            }
        }
    ],
};

// 使用刚指定的配置项和数据显示图表。
chart3.setOption(option);


option.series[0].data=[5, 20, 36, 10, 10, 20];
window.setInterval(function(){
    option.series[0].data=[5, Math.random()*50, 36, Math.random()*50, Math.random()*50, 20];
    // option.series[0].type='pie';
    chart3.setOption(option);
},1000);

window.addEventListener('resize',function(){
    chart3.resize();
});

