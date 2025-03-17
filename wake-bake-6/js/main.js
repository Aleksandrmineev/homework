// ========================= БУРГЕР-МЕНЮ И МОДАЛЬНОЕ ОКНО =======================
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const burgerIcon = document.querySelector(".burger-icon");
    const navLinks = document.querySelectorAll(".nav__link");
    const footer = document.querySelector(".footer__inner");
    const modal = document.querySelector(".modal");
    const openButton = document.querySelector(".about__img-button");
    const cancelButton = document.querySelector(".modal__cancel");

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


    if (modal && openButton && cancelButton) {
        // Открытие модального окна
        openButton.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.add("modal--opened");
            body.classList.add("body--no-scroll"); // Отключение прокрутки
        });

        // Функция для закрытия модального окна
        function closeModal() {
            modal.classList.remove("modal--opened");
            body.classList.remove("body--no-scroll"); // Включение прокрутки
        }

        // Закрытие при клике на крестик
        cancelButton.addEventListener("click", closeModal);

        // Закрытие при клике за пределами окна
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Закрытие при нажатии Esc
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    }
});

// ===============================ТАБЫ=====================================

const tabControls = document.querySelector('.tab-controls')
// переменная, которая ВЫБИРАЕТ .tab-controls. 
// Внутри .tab-controls у нас только 4 ссылки: Неделя 1, Неделя 2...

tabControls.addEventListener('click', toggleTab)
// Теперь яваскрипт по tabControls слушает КЛИК и вызывает toggleTab
// Ниже описываем toggleTab
function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')
    // Добавляем еще переменную, которая обращается к .tab-controls__link. 
    // То есть конкнетно к ссылкам Неделя 1 и т.п.

    if (!tabControl) return // если это НЕ tabControl - вернуться
    e.preventDefault()
    //отменяем стандартные действия браузера, то есть НЕ переходим по ссылке

    if (tabControl.classList.contains('tab-controls__link--active')) return
    // выполняем проверку, содержит ли tabControl (то есть конкретная ссылка) модификатор tab-controls__link--active
    // если есть - ничего не делаем, потому что она уже активна и блок с соответств. инф уже открыт.
    const tabContentID = tabControl.getAttribute('href')
    // переменная Айди. Находит #tab - то есть блок с инф. 
    const tabContent = document.querySelector(tabContentID)
    // переменная выбирает блок с инф
    const activeControl = document.querySelector('.tab-controls__link--active')
    //выбирает активную ссылку, содержащую модификатор
    const activeContent = document.querySelector('.tab-content--show')
    // выбирает активный блок контента с соответствующим модификатором

    if (activeControl) { //если КАКАЯ_ЛИБО ссылка содержит модификатор - удаляет его
        activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) { //если КАКОЙ_ЛИБО блок содержит модификатор, удаляет его
        activeContent.classList.remove('tab-content--show')
        // удаляет модификаторы из класслиста
    }

    tabControl.classList.add('tab-controls__link--active') //И добавляет к активной ссылке модификатор
    tabContent.classList.add('tab-content--show') // И добавляет к активному блоку модификатор

    //Кратко:
    // Итак, в блоке .tab-controls функция ищет клики и если что выполняет функцию toggleTab
    // toggleTab обращается к блоку ссылок Неделя 1... 
    // и выбирает e.target, то есть кокретную ссылку, где произошел клик.
    // Удаляет модификаторы у всех ссылок и указанных блоков и добавляет модификатор к текущей.
    // css соответственно обрабатывает модификаторы, меняя стиль кнопок и показывая блоки с модификатором.

}

// ===============АККОРДЕОН========================

document.querySelectorAll('.accordion-list__item').forEach((detail) => {
    detail.addEventListener('click', function () {
        document.querySelectorAll('.accordion-list__item').forEach((el) => {
            if (el !== detail) {
                el.removeAttribute('open');
            }
        });
    });
});

document.querySelectorAll('.accordion-list__control').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            document.querySelectorAll('.accordion-list__content').forEach(item => {
                item.style.maxHeight = null;
            });
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// ===============СЛАЙДЕР-ГАЛЕРЕЯ========================

const swiper = new Swiper('.gallery__slider', {
    slidesPerView: 1.5,
    spaceBetween: 15,

    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
    breakpoints: {
        451: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        601: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        801: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1101: {
            slidesPerView: 4
        }}
    });

// ===============СЛАЙДЕР-ОТЗЫВЫ========================

new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        901: {
            slidesPerView: 1.5
        },
        1201: {
            slidesPerView: 2.1
        }}
    });