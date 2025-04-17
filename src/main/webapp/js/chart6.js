function loadBooks() {
    fetch('/demo1_war_exploded/getRecommendData')  // 对接您的推荐接口
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('bookList');
            container.innerHTML = data.map(book => `
        <div class="book-item">
          <div class="book-cover"></div>
          <div class="book-info">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-press">${book.publisher}</div>
          </div>
        </div>
      `).join('');

            // 自动滚动逻辑
            let position = 0;
            const scrollHeight = container.scrollHeight;
            setInterval(() => {
                if (position < scrollHeight) {
                    position += 1;
                    container.style.transform = `translateY(-${position}px)`;
                } else {
                    position = 0;
                    container.style.transform = 'translateY(0)';
                }
            }, 50);
        });
}

// 初始加载
loadBooks();
setInterval(loadBooks, 30000);