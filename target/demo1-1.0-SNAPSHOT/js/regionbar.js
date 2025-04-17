
var chart4 = echarts.init(document.getElementById('chart4'),'dark');
var colors = ['#4587E7','#35AB33','#F5AD1D','#ff7f50','#da70d6','#32cd32','#6495ed'];
$.get('hello-servlet', function (data) {
    chart4.setOption({
        backgroundColor: 'transparent', // 设置背景为透明
        grid: {
            top: '20%', // 设置上边距为容器高度的10%
            bottom: '15%', // 设置下边距为容器高度的15%
            left:'20%'
        },
        dataset:{
            dimensions:Object.keys(data[0]),
            source:data,
        },
        title: {
            text: '按地区统计', // 标题内容
            left: 'left', // 标题水平居中
            textStyle: { // 主标题样式
                color: '#fff', // 标题文字颜色
                fontSize: 12, // 标题文字大小
            },
        },
        dataset:{
            dimensions:Object.keys(data[0]),
            source:data,
        },
        tooltip:{
            show:true,
        },
        xAxis: {type:"category"},
        yAxis:{},
        series : [
            {
                name: '地区销售额',
                type: 'bar',    // 设置图表类型为饼图
                // radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                encode:{
                    x:'region',
                    y:'sum',
                },
                // label: {
                //     show: true,
                //     formatter:'{@region}'
                // },
                itemStyle: {
                    color: function (params) {
                        return colors[params.dataIndex];

                    }
                }
            }
        ]
    })
}, 'json')

window.addEventListener('resize',function(){
    chart4.resize();
});
