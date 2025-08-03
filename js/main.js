// 等待整个页面加载完毕后再执行脚本
document.addEventListener('DOMContentLoaded', (event) => {
    
    // --- 自定义光标逻辑 ---
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // --- 光标悬停交互 ---
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('a-hover-cursor');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('a-hover-cursor');
        });
    });

    // --- 主题切换逻辑 ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const docElement = document.documentElement;
    themeToggleButton.addEventListener('click', () => {
        if (docElement.classList.contains('dark-mode')) {
            docElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            docElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- 滚动加载动画逻辑 ---
    const animatedSections = document.querySelectorAll('.section-to-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-is-visible');
            }
        });
    }, { threshold: 0.1 });
    animatedSections.forEach(section => { observer.observe(section); });

});
