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

})()
