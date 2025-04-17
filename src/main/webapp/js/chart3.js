var chart3 = echarts.init(document.getElementById('chart3'));
    $.get('/demo1_war_exploded/getBorrowingData', function (datasetData) {

        chart3.setOption({
            dataset: {
                dimensions: ['month', 'returnedcnt', 'borrowcnt'],
                source: datasetData
            },
            // 标题与图例
            title: {
                text: '月度借阅情况分析',
                show:true,
                textStyle:{
                    color:"#FFF",
                    fontSize:13
                },
                left:20,
                top:10

            },
            legend: {
                data: ['借书量', '还书量'],
                right: 20,
                textStyle: { color: '#fff' }
            },

            // 坐标轴配置
            xAxis: {
                type: 'category',
                axisLabel: {
                    color: '#fff',
                    interval: 0, // 强制显示所有月份
                    rotate: 30   // 标签旋转避免重叠
                },
                axisLine: { lineStyle: { color: '#666' } }
            },
            yAxis: {
                type: 'value',
                axisLabel: { color: '#fff' },
                splitLine: { lineStyle: { color: '#333' } }
            },

            // 双柱系列配置
            series: [
                {
                    name: '借书量',
                    type: 'bar',
                    barGap: '30%',  // 柱子间距控制
                    encode: { x: 'month', y: 'borrowcnt' },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#83bff6' },
                            { offset: 1, color: '#188df0' }
                        ])
                    }
                },
                {
                    name: '还书量',
                    type: 'bar',
                    encode: { x: 'month', y: 'returnedcnt' },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#ff9f7f' },
                            { offset: 1, color: '#ff6b6b' }
                        ])
                    }
                }
            ],

            tooltip: {
                show: true,

            },
            dataZoom: [{
                type: 'slider',
                show: true,
                XAxisIndex: 0,
                filterMode: 'filter'
            }]
        });
    }, 'json');

// 窗口自适应
window.addEventListener('resize', function() {
    chart3.resize();
});