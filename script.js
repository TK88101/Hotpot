// JS for menu hover or future interactivity
// You can expand this for more features later

document.addEventListener('DOMContentLoaded', function() {
    // Example: highlight menu item on click (future use)
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});

// Typed.js effect for logo code block
var typed = new Typed("#code-block", {
    strings: [
        `> if(cold) { hotpot = "四川×アソウ"; warmup(); }<br>> serve(hotpot, "学園祭");<br>> console.log("みんなでぽかぽか！");`
    ],
    typeSpeed: 50,
    backSpeed: 0,
    showCursor: true,
    cursorChar: '|',
});
