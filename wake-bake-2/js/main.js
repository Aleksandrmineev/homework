(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
        const burgerIcon = document.querySelector('.burger-icon');
        const navLinks = document.querySelectorAll('.nav__link');

        // Функция для переключения класса body--opened-menu
        function toggleMenu() {
            body.classList.toggle('body--opened-menu');
        }

        // Функция для закрытия меню
        function closeMenu() {
            body.classList.remove('body--opened-menu');
        }

        // Обработчик клика по бургер-иконке
        burgerIcon.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем переход по ссылке #
            toggleMenu();
        });

        // Обработчики кликов по ссылкам меню
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
                // Переход по ссылке произойдет автоматически
            });
        });
    });
    const footer = document.querySelector('.footer__inner');

    const observer = new MutationObserver(() => {
        console.log('Grid columns:', getComputedStyle(footer).getPropertyValue('grid-template-columns'));
    });
    
    observer.observe(footer, { attributes: true, attributeFilter: ['style'] });
    
})()

function updateGridColumns() {
    const grid = document.querySelector('.footer__inner');
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) {
        grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else if (screenWidth > 800) {
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        grid.style.gridTemplateColumns = '1fr';
    }
}
