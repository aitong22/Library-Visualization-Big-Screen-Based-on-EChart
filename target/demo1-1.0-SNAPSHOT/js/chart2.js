// 基于准备好的dom，初始化echarts实例
var chart2 = echarts.init(document.getElementById('chart2'));


$.get('data/chart2.json', function (data) {

    chart2.setOption({
        grid:{
          bottom:'40px'
        },
        dataset: {
            dimensions: Object.keys(data[0]),
            source: data,
        },
        title:{
            text:'交通指数',
            show:true,
            textStyle:{
                color:"#FFF",
                fontSize:13
            },
            left:20,
            top:10
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#FFF', // X轴标签颜色为青色
                    fontSize:9
                }
            }
        },
        yAxis:[
            {
                name:"延误时间",
                min:0,
                max:80000,
                interval:20000,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#FFF' ,// X轴标签颜色为青色
                        fontSize:9,
                    }
                }
            },
            {
                name:"数量",
                min:0,
                max:2000,
                interval: 500,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#FFF', // X轴标签颜色为青色
                        fontSize:9
                    }
                }
            }
        ],
        tooltip:{
            show:true,
        },
        series: [
            {
                type: 'bar',
                yAxisIndex: 0,
                itemStyle:{
                    color:'#08D3D3',
                }
            },
            {
                type: 'line',  // 折线图
                yAxisIndex: 1,
            },
            {
                type: 'line',  // 折线图
                yAxisIndex: 1,
            },
            {
                type: 'line',  // 折线图
                yAxisIndex: 1,
            },
        ],
    });
}, 'json');

window.addEventListener('resize',function(){
    chart2.resize();
});