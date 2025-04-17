// 数据加载函数
function loadStats() {
    fetch('/demo1_war_exploded/getStats')
        .then(response => response.json())
        .then(data => {
            // 更新DOM元素
                document.getElementById('numdiv1').innerHTML = `在馆人数<br/><span style="color:orangered; font-weight: bold;">${data.inLibrary}</span>`;
            document.getElementById('numdiv2').innerHTML = `当日借出<br/><span style="color:darkred; font-weight: bold;">${data.dailyBorrow}</span>`;
            document.getElementById('numdiv3').innerHTML = `当日流量<br/><span style="color:#ca8622; font-weight: bold;">${data.dailyFlow}</span>`;
            document.getElementById('numdiv4').innerHTML = `当日归还<br/><span style="color: #d48265; font-weight: bold;">${data.dailyReturn}</span>`;
            document.getElementById('numdiv5').innerHTML = `本学期总流量<br/><span style="color: tomato; font-weight: bold; font-size: 30px;">${data.semesterFlow}</span>`;
            document.getElementById('numdiv6').innerHTML = `本学期总借书次数<br/><span style="color:lightcoral; font-weight: bold; font-size: 30px;">${data.semesterEntry}</span>`;
        })
        .catch(error => console.error('数据加载失败:', error));
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    loadStats();
    // 定时刷新（每30秒）
    setInterval(loadStats, 30000);
});