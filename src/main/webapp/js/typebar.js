
var chart5 = echarts.init(document.getElementById('chart5'),'dark');
var colors = ['#4587E7','#35AB33','#F5AD1D','#ff7f50','#da70d6','#32cd32','#6495ed'];
var region = "";
// 自定义状态数组，用于保存柱子的选中状态
var selected = [];
function renderChart5(){
    $.get('typesum?region='+region, function (data) {

        // 初始化选中状态，默认都未选中
        for (var i = 0; i < data.length; i++) {
            selected.push(false);
        }


        chart5.setOption({
            backgroundColor: 'transparent', // 设置背景为透明
            grid: {
                top: '15%', // 设置上边距为容器高度的10%
                bottom: '15%', // 设置下边距为容器高度的15%
                left:'20%'
            },
            dataset:{
                dimensions:Object.keys(data[0]),
                source:data,
            },
            title: {
                text: '按分类统计', // 标题内容
                left: 'left', // 标题水平居中
                textStyle: { // 主标题样式
                    color: '#fff', // 标题文字颜色
                    fontSize: 12, // 标题文字大小
                },
            },
            tooltip:{
                show:true,
            },
            xAxis: {},
            yAxis:{type:"category"},
            series : [
                {
                    name: '地区销售额',
                    type: 'bar',    // 设置图表类型为饼图
                    // radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    encode:{
                        y:'type',
                        x:'sum',
                    },
                    itemStyle: {
                        color: function (params) {
                            return colors[params.dataIndex];

                        }
                    }
                }
            ]
        })
    }, 'json')

}
renderChart5();
function hexToRgb(hex,alpha) {
    // 去除可能存在的 # 符号
    hex = hex.replace(/^#/, '');
    // 每两个字符分割一次，并转换为十进制数值
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    // 返回 RGB 颜色值
    return 'rgba(' + r + ', ' + g + ', ' + b +','+alpha+ ')';
}
function selectOne(id,option){
    // 获取select元素
    var selectElement = document.getElementById(id);
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === option) {
            selectElement.options[i].selected = true; // 设置selected属性为true
            break; // 找到后退出循环
        }else{
            selectElement.options[0].selected = true
        }
    }
}

chart4.on('click',function (params) {
    // 判断点击的图形类型是否为柱形图
    if (params.componentType === 'series' && params.seriesType === 'bar') {
        // 获取点击柱子的索引
        var dataIndex = params.dataIndex;
        // 切换选中状态
        selected[dataIndex] = !selected[dataIndex];
        if(selected[dataIndex]){
            region = params.name;
        }else{
            region = "";
        }
        selectOne("region_select",region);
        renderChart5();

        // 使用 setOption 更新柱子的状态
        chart4.setOption({
            series: [{
                // 根据选中状态设置高亮或取消高亮
                itemStyle: {
                    color: function(params) {
                        if(params.dataIndex==dataIndex){
                            if(selected[dataIndex]){
                                return hexToRgb(colors[params.dataIndex],0.7);
                            }else{
                                return hexToRgb(colors[params.dataIndex],1);
                            }
                        }else{
                            return colors[params.dataIndex];
                        }
                    }
                },
            }],
        });
    }
})

window.addEventListener('resize',function(){
    chart5.resize();
});
