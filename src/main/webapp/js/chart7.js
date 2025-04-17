function loadEnvData() {
    const tbody = document.getElementById('envDataBody');
    tbody.innerHTML = `<tr class="loading-row"><td colspan="4">数据加载中...</td></tr>`;

    fetch('/demo1_war_exploded//getEnvData')
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = data.map(item => `
        <tr>
          <td>${item.camparea}</td>
          <td>${item.roomid}</td>
          <td data-status="${getTempStatus(item.temperature)}">${item.temperature}℃</td>
          <td data-status="${getAirStatus(item.airquality)}">${item.airquality}</td>
        </tr>
      `).join('');
        })
}

// 温度状态判断
function getTempStatus(temp) {
    const value = parseFloat(temp);
    if (value < 18) return 'bad';
    if (value > 26) return 'bad';
    return (value >= 20 && value <= 24) ? 'good' : 'normal';
}

// 空气质量状态判断
function getAirStatus(pm25) {
    const value = parseFloat(pm25);
    if (pm25 === "轻度污染") {
        return 'bad';
    }
    if (pm25 === "良") {
        return 'good';
    }
    return 'normal';
}

document.addEventListener('DOMContentLoaded', loadEnvData);