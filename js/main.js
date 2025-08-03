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

    // --- 打字机效果逻辑 ---
    function typeWriter(element, text, speed = 150) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // 打字完成后，让光标继续闪烁一段时间再隐藏
                setTimeout(() => {
                    const cursor = document.querySelector('.typewriter-cursor');
                    if (cursor) {
                        cursor.style.display = 'none';
                    }
                }, 3000); // 3秒后隐藏光标
            }
        }
        
        type();
    }

    // 启动打字机效果
    const nameElement = document.getElementById('typewriter-name');
    if (nameElement) {
        // 延迟500ms开始打字效果，让页面完全加载
        setTimeout(() => {
            typeWriter(nameElement, 'Shijie Xu', 120);
        }, 500);
    }

    // --- 返回顶部按钮逻辑 ---
    const backToTopButton = document.getElementById('back-to-top');
    
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // 点击返回顶部
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 为返回顶部按钮添加光标悬停效果
    backToTopButton.addEventListener('mouseenter', () => {
        cursor.classList.add('a-hover-cursor');
    });
    backToTopButton.addEventListener('mouseleave', () => {
        cursor.classList.remove('a-hover-cursor');
    });
   
    // --- 项目缩略图点击效果 ---
    const projectThumbnails = document.querySelectorAll('.project-thumbnail');
    projectThumbnails.forEach(thumbnail => {
        // 为缩略图添加光标悬停效果
        thumbnail.addEventListener('mouseenter', () => {
            cursor.classList.add('a-hover-cursor');
        });
        thumbnail.addEventListener('mouseleave', () => {
            cursor.classList.remove('a-hover-cursor');
        });
    });

});
