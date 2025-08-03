// 等待整个页面加载完毕后再执行脚本
document.addEventListener('DOMContentLoaded', (event) => {
    
    // --- 自定义光标逻辑 (已修正) ---
    const cursor = document.querySelector('.cursor');

    // 总是为鼠标移动添加监听器
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    // 注意：在移动设备上隐藏光标的操作，完全由 CSS 的媒体查询负责

    // --- 主题切换逻辑 ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const docElement = document.documentElement;

    themeToggleButton.addEventListener('click', () => {
        // 检查当前是否为深色模式
        if (docElement.classList.contains('dark-mode')) {
            // 如果是，则切换到浅色模式
            docElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            // 如果不是，则切换到深色模式
            docElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
// --- 新增：滚动加载动画逻辑 ---
    const animatedSections = document.querySelectorAll('.section-to-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-is-visible');
            }
        });
    }, {
        threshold: 0.1 // 当元素可见10%时触发
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
