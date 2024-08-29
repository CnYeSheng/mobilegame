 // 动态加载导航内容
 document.addEventListener("DOMContentLoaded", function() {
    fetch("head.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;

            // 设置当前选中的按钮
            const currentUrl = window.location.href;
            document.querySelectorAll('.primary-button').forEach(button => {
                if (button.href === currentUrl) {
                    button.classList.add('selected');
                }
            });

            // 菜单滑出功能
            const menuIcon = document.getElementById('menu-icon');
            const slideMenu = document.getElementById('slide-menu');
            const closeBtn = document.getElementById('close-btn');

            menuIcon.addEventListener('click', function() {
                slideMenu.style.left = '0';
            });

            closeBtn.addEventListener('click', function() {
                slideMenu.style.left = '-250px';
            });
        });
});