window.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    // 檢查瀏覽器是否有儲存深色模式設定
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
    // 根據儲存設定切換深色模式
    if (isDarkMode) {
      body.classList.add('dark-mode');
      darkModeToggle.textContent = '🌓';
    }
  
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '🌓' : '🌓';
        localStorage.setItem('darkMode', isDarkMode);
      
        // 如果切換為深色模式,則在動畫結束後再更新背景色
        if (isDarkMode) {
          setTimeout(() => {
            body.style.backgroundColor = '#222';
          }, 800);
        } else {
            setTimeout(() => {
                body.style.backgroundColor = '#f8f9fa';
            }, 800);
        }
      });
  });