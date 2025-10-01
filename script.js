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
