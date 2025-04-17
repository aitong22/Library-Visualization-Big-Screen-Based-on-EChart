function loadNotices() {
    fetch('/demo1_war_exploded/getNoticeData')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('noticeContainer');
            container.innerHTML = data.map(notice => `
        <div class="notice-item">
          <div class="notice-time">${new Date(notice.time).toLocaleString()}</div>
          <div class="notice-content">${notice.content}</div>
        </div>
      `).join('');

            // 自动滚动效果
            let position = 0;
            setInterval(() => {
                if (position < container.scrollHeight) {
                    position += 1;
                    container.style.transform = `translateY(-${position}px)`;
                } else {
                    position = 0;
                    container.style.transform = 'translateY(0)';
                }
            }, 50);
        })
        .catch(error => console.error('公告加载失败:', error));
}
loadNotices();
setInterval(loadNotices, 30000);