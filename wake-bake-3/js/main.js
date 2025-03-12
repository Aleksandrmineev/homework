document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const burgerIcon = document.querySelector(".burger-icon");
    const navLinks = document.querySelectorAll(".nav__link");
    const footer = document.querySelector(".footer__inner");

    // Функция для переключения меню
    function toggleMenu() {
        body.classList.toggle("body--opened-menu");
    }

    // Функция для закрытия меню
    function closeMenu() {
        body.classList.remove("body--opened-menu");
    }

    // Открытие и закрытие меню при клике на бургер-иконку
    if (burgerIcon) {
        burgerIcon.addEventListener("click", function (event) {
            event.preventDefault();
            toggleMenu();
        });
    }

    // Закрытие меню при клике на ссылку
    if (navLinks.length > 0) {
        navLinks.forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });
    }

    // Наблюдение за изменениями в footer__inner
    if (footer) {
        const observer = new MutationObserver(() => {
            console.log("Grid columns:", getComputedStyle(footer).getPropertyValue("grid-template-columns"));
        });

        observer.observe(footer, { attributes: true, attributeFilter: ["style"] });
    }

    // ================== МОДАЛЬНОЕ ОКНО ==================

    const modal = document.querySelector(".modal");
    const openButton = document.querySelector(".about__img-button");
    const cancelButton = document.querySelector(".modal__cancel");

    if (modal && openButton && cancelButton) {
        // Открытие модального окна
        openButton.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.add("modal--opened");
        });

        // Закрытие при клике на крестик
        cancelButton.addEventListener("click", function () {
            modal.classList.remove("modal--opened");
        });

        // Закрытие при клике за пределами окна
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.remove("modal--opened");
            }
        });

        // Закрытие при нажатии Esc
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                modal.classList.remove("modal--opened");
            }
        });
    }
});
