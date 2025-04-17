// 基于准备好的dom，初始化echarts实例
var chart6 = echarts.init(document.getElementById('chart6'));

// 指定图表的配置项和数据
var colors = ['#4587E7','#35AB33','#F5AD1D','#ff7f50','#da70d6','#32cd32','#6495ed'];

$.get('data/chart6.json', function (data) {

    chart6.setOption({
        dataset: {
            dimensions: Object.keys(data[0]),
            source: data,
        },
        grid:{
          top:35,
            bottom:20,
            left:40,
            right:1
        },
        legend:{
            show:true,
            data:['稳重型','激进型','普通型'],
            top:'10%'
        },
        title:{
            text:'驾驶风格',
            show:true,
            textStyle:{
                color:"#FFF",
                fontSize:13
            },
            left:20,
            top:10
        },
        xAxis: {
            type: 'value',
            scale:true,
            min:-1,
            max:1,
            interval:0.25,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#FFF', // X轴标签颜色为青色
                    fontSize: 9
                }
            }
        },
        yAxis:[
            {
                type:'value',
                name:"",
                scale:true,
                min:-1,
                max:1,
                interval:0.25,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#FFF',// X轴标签颜色为青色
                        fontSize:9
                    }
                }
            }
        ],
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.data.C === 'c1') {
                    return '激进型';
                } else if(params.data.C==='c2'){
                    return '稳重型';
                }else{
                    return '缓慢型';
                }
            }
            },
            series: [
            {
                type: 'scatter',
                yAxisIndex: 0,
                itemStyle: { // 这里设置散点颜色
                    color: function (params) {
                        // params 是包含当前数据点信息的对象
                        // 可以根据 params 的属性返回不同的颜色值来设置散点颜色
                        // 这里简单地根据 y 值返回不同的颜色

                        if (params.data.C === 'c1') {
                            return '#046DC0';
                        } else if(params.data.C==='c2'){
                            return '#08D3D3';
                        }else{
                            return '#eac763';
                        }
                    }
                }
            }
        ],
    });
}, 'json');
window.addEventListener('resize',function(){
    chart6.resize();
});