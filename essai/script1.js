const icons = document.querySelectorAll('.icon');
const tooltip = document.querySelector('.tooltip');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        tooltip.textContent = icon.getAttribute('data-name');
        tooltip.style.opacity = '1';
    });

    icon.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});