// 等待整个页面加载完毕后再执行脚本
document.addEventListener('DOMContentLoaded', (event) => {
    
    // --- 自定义光标逻辑 ---
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
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

    // --- 新增：获取并显示地理位置信息 ---
    function getFlagEmoji(countryCode) {
        // 通过国家代码生成国旗emoji
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }

    async function fetchLocationInfo() {
        try {
            const response = await fetch('https://ip-api.com/json');
            const data = await response.json();
            
            if (data.status === 'success') {
                const country = data.country;
                const countryCode = data.countryCode;
                const flag = getFlagEmoji(countryCode);
                
                const locationElement = document.getElementById('location-info');
                locationElement.innerHTML = `Connected via ${country}, ${countryCode} ${flag}`;
            } else {
                throw new Error('Failed to get location');
            }
        } catch (error) {
            console.error('Error fetching location:', error);
            const locationElement = document.getElementById('location-info');
            locationElement.style.display = 'none'; // 如果获取失败，直接隐藏该行
        }
    }

    fetchLocationInfo();
});
