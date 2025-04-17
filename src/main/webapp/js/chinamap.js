
var ROOT_PATH = '';

var chartDom = document.getElementById('chinamapdiv');
var map1 = echarts.init(chartDom);
var mapOption;
var mapData =  [
    {name: '北京', value: Math.round(Math.random() * 1000)},
    {name: '天津', value: Math.round(Math.random() * 1000)},
    {name: '上海', value: Math.round(Math.random() * 1000)},
    {name: '重庆', value: Math.round(Math.random() * 1000)},
    {name: '河北', value: Math.round(Math.random() * 1000)},
    {name: '河南', value: Math.round(Math.random() * 1000)},
    {name: '云南', value: Math.round(Math.random() * 1000)},
    {name: '辽宁', value: Math.round(Math.random() * 1000)},
    {name: '黑龙江', value: Math.round(Math.random() * 1000)},
    {name: '湖南', value: Math.round(Math.random() * 1000)},
    {name: '安徽', value: Math.round(Math.random() * 1000)},
    {name: '山东', value: Math.round(Math.random() * 1000)},
    {name: '江西', value: Math.round(Math.random() * 1000)}
];

map1.showLoading();
$.get(ROOT_PATH + 'data/map/china.json', function (geoJson) {
    map1.hideLoading();
    echarts.registerMap('china', geoJson);
    map1.setOption(
        (mapOption = {
            // title: {
            //     text: 'ChinaMap',
            //     subtext: 'SubTitle'
            // },
            grid:{
              left:0,
              right:0,
              bottom:0,
              top:0

            },


            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (元)'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                // feature: {
                //     dataView: { readOnly: false },
                //     restore: {},
                //     saveAsImage: {}
                // }
            },
            visualMap: {
                min: 0,
                max: 1000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['#24cff4', '#1e62ac']
                },
                show:false
            },
            series: [
                {
                    name: '销售额',
                    type: 'map',
                    map: 'china',
                    label: {
                        show: false
                    },

                    itemStyle:{
                            borderColor: '#fff',  // 边界线颜色
                            borderWidth: 1,       // 边界线宽度
                            areaColor:'#24cff4', //默认颜色
                    },
                    data:mapData,
                    // 自定义名称映射
                    nameMap: {

                    }
                }
            ]
        })
    );
});

mapOption && map1.setOption(mapOption);
window.addEventListener('resize',function () {
    map1.resize();
})

//演示地图数据实时刷新
window.setInterval(function () {
    mapOption.series[0].data= [
        {name: '北京', value: Math.round(Math.random() * 1000)},
        {name: '天津', value: Math.round(Math.random() * 1000)},
        {name: '上海', value: Math.round(Math.random() * 1000)},
        {name: '重庆', value: Math.round(Math.random() * 1000)},
        {name: '河北', value: Math.round(Math.random() * 1000)},
        {name: '河南', value: Math.round(Math.random() * 1000)},
        {name: '云南', value: Math.round(Math.random() * 1000)},
        {name: '辽宁', value: Math.round(Math.random() * 1000)},
        {name: '黑龙江', value: Math.round(Math.random() * 1000)},
        {name: '湖南', value: Math.round(Math.random() * 1000)},
        {name: '安徽', value: Math.round(Math.random() * 1000)},
        {name: '山东', value: Math.round(Math.random() * 1000)},
        {name: '江西', value: Math.round(Math.random() * 1000)}
    ];
    map1.setOption(mapOption);
},1000);

map1.on('click',function(params){
   alert('我的名字是:'+params.name+', 我的数据是:'+params.value);
});