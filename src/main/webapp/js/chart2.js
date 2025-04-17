// 基于准备好的dom，初始化echarts实例
var chart2 = echarts.init(document.getElementById('chart2'));


$.get('/demo1_war_exploded/getEresData', function (data) {

    chart2.setOption({
        // grid:{
        //   bottom:'40px'
        // },
            dataset: {
                dimensions: ['platform', 'visits'],
                source: data
            },
        title:{
            text:'电子资源库使用情况',
            show:true,
            textStyle:{
                color:"#FFF",
                fontSize:13
            },
            left:20,
            top:10
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },


        series: [{
            type: 'pie',
            radius: ["15%", "80%"],  // 百分比自适应容器
            center: ['50%', '55%'],  // 垂直微调
            roseType: 'radius',      // 面积模式更合理
            minAngle: 10,            // 防止极小值不可见[3,5](@ref)
            label: {
                show: true,
                position: 'outer',

                color: '#FFF',
                fontSize: 12
            },
            labelLine: {
                length: 15,
                length2: 20,
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            },
        }]
    });
}, 'json');

window.addEventListener('resize',function(){
    chart2.resize();
});