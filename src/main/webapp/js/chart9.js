let chart8 = echarts.init(document.getElementById('chart8'));
var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
// 数据请求与处理
$.get('/demo1_war_exploded/getCflowData', function(rawData) {
    // 数据预处理（按流量倒序）
    const sortedData = [...rawData].sort((a, b) => b.count - a.count);

    const option = {
        dataset: {
            dimensions: ['departname', 'count'],
            source: sortedData
        },
        title: {
            text: '学院流量占比分析',
            subtext: `总访问量：${sortedData.reduce((sum, d) => sum + d.count, 0)}次`,

            show:true,
            textStyle:{
                color:"#FFF",
                fontSize:13
            },
            left:20,
            top:10,
            subtextStyle: {
                color: '#DDD',
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}: {c}次 ({d}%)'  // 显示百分比
        },
        legend: {
            orient: 'vertical',
            right: '5%',
            top: '15%',
            textStyle: { color: '#FFF' },
            itemWidth: 12,
            itemHeight: 12
        },
        series: [{
            name: '学院流量',
            type: 'pie',
            radius: ['30%', '65%'],  // 内外半径形成环状
            center: ['50%', '55%'],
            avoidLabelOverlap: true,
            itemStyle: {
                borderRadius: 7,  // 圆角设置[6](@ref)
                borderColor: '#FFF',
                borderWidth: 2,
                color: function (params) {
                    return colorList[params.dataIndex];
                }
            },
            label: {
                show: true,
                position: 'outer',
                // alignTo: 'edge',
                // formatter: (params) =>
                //     `${params.name.substring(0,4)}: ${params.percent}%`,  // 截断长名称
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
            encode: {
                itemName: 'departname',
                value: 'count'
            }
        }]
    };

    chart8.setOption(option);
}, 'json');

// 响应式处理
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => chart8.resize(), 200);
});