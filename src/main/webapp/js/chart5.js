var chart5 = echarts.init(document.getElementById('chart5'));
// AJAX请求数据
fetch('/demo1_war_exploded/getHotData')
    .then(response => response.json())
    .then(data => {
        // 处理数据
        const xData = data.map(item => item.bookname);
        const yData = data.map(item => item.bowrrowcnt);

        // 配置图表选项
        const option = {
            title: {
                text: '热门图书借阅排行榜 TOP8',
                show:true,
                textStyle:{
                    color:"#FFF",
                    fontSize:13
                },
                left:20,
                top:10
            },
            tooltip: {
                show : true,
            },
            xAxis: {
                type: 'category',
                data: xData,
                axisLabel: {
                    rotate:45 ,
                    textStyle: {
                        fontSize: 6,  // 字体大小缩小至12px（默认14px）[2,5](@ref)
                        color: "#FFF" // 可选：降低字体颜色对比度
                    },
                },

            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: "#FFF"
                    },
                },
            },
            series: [{
                type: 'bar',
                data: yData,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    focus: 'series'
                }
            }]
        };

        chart5.setOption(option);
    })
    .catch(error => console.error('数据加载失败:', error));

// 窗口大小自适应
window.addEventListener('resize', () => chart5.resize());