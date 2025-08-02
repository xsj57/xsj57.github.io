// 等待整个页面加载完毕后再执行脚本
document.addEventListener('DOMContentLoaded', (event) => {
    
    // 选取我们自定义的光标元素
    const cursor = document.querySelector('.cursor');

    // 在整个文档上监听鼠标移动事件
    document.addEventListener('mousemove', e => {
        // 将光标的位置更新为鼠标的实时坐标
        // e.clientX 是水平坐标
        // e.clientY 是垂直坐标
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});