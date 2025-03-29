// выбираем меню и красим его в активный цвет

document.querySelectorAll('.nav_list a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav_list a').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
    });
});

// таймер обратного отсчета
document.addEventListener("DOMContentLoaded", () => {
    const timerDuration = 28 * 24 * 60 * 60 * 1000; // 27 дней в мс
    const now = Date.now();

    let startTime = localStorage.getItem("firstVisitTime");
    if (!startTime) {
        localStorage.setItem("firstVisitTime", now);
        startTime = now;
    } else {
        startTime = parseInt(startTime, 10);
    }

    const endTime = startTime + timerDuration;

    function updateTimer() {
        const currentTime = Date.now();
        const diff = endTime - currentTime;

        if (diff <= 0) {
            document.getElementById("timer").textContent = "⏳ Время истекло!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    const interval = setInterval(updateTimer, 1000);
    updateTimer(); // первая отрисовка

    // === АККОРДЕОН ===
    const accordions = document.querySelectorAll('.main__questions-accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        const icon = accordion.querySelector('.accordion-icon-right');

        header.addEventListener('click', () => {
            const isOpen = accordion.classList.contains('open');

            // Закрыть все остальные
            accordions.forEach(acc => {
                acc.classList.remove('open');
                acc.querySelector('.accordion-content').style.maxHeight = null;
                acc.querySelector('.accordion-icon-right').style.transform = 'rotate(0deg)';
            });

            // Открыть текущий, если он был закрыт
            if (!isOpen) {
                accordion.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });


});


// слайдер 
new Swiper('.hero-slider', {
    slidesPerView: 6,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    // Responsive
    breakpoints: {
        150: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1.5,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1224: {
            slidesPerView: 6,
        }
    }
});

// ========================бургер меню=========================

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const burgerIcon = document.querySelector(".burger-icon");
    const navLinks = document.querySelectorAll(".nav_link");
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

    const closeButton = document.querySelector('.menu-close');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            document.body.classList.remove('body--opened-menu');
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            document.body.classList.remove("body--opened-menu");
        }
    });

    const form = document.querySelector('.main__form');
    const nameInput = form.querySelector('input[name="name"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const emailInput = form.querySelector('input[name="email"]');

    // Маска
    Inputmask("+7 999 999 99 99").mask(phoneInput);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Очистка ошибок
        form.querySelectorAll('.form-group').forEach(group => {
            const input = group.querySelector('input');
            const error = group.querySelector('.error-message');
          
            if (input) input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            if (error) {
              error.textContent = '';
              error.style.display = 'none';
            }
          });
          
          

        [nameInput, phoneInput, emailInput].forEach(input => {
            input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        });

        // Имя
        if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'Введите имя (минимум 2 символа)');
            isValid = false;
        }

        // Телефон
        const rawDigits = phoneInput.inputmask?.unmaskedvalue();
        const digits = rawDigits ? '7' + rawDigits : '';
        console.log("Проверяем номер:", digits, "длина:", digits.length);

        if (!digits || digits.length !== 11 || !/^7\d{10}$/.test(digits)) {
            showError(phoneInput, 'Введите корректный номер телефона');
            isValid = false;
        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, 'Введите корректный email');
            isValid = false;
        }

        if (isValid) {
            console.log('✅ Форма валидна');
            form.reset();
        }
    });

    function showError(input, message) {
        const group = input.closest('.form-group');
        const error = group.querySelector('.error-message');
        input.style.borderColor = 'red';
        error.textContent = message;
        error.style.display = 'block';
    }


});
// ------------------Модальное окно--------------------------
const modal = document.getElementById('securityModal');
const openModalLink = document.querySelector('.footer__info-politik');
const closeModalBtn = modal.querySelector('.modal__close');
const overlay = modal.querySelector('.modal__overlay');

function openModal() {
    modal.classList.add('open');
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
}

openModalLink.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Закрытие по клавише ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});

// ----------------Scroll to Top Button-----------------------
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ==========================отправка данных форм в телеграм===================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const nameInput = form.querySelector('input[name="name"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const emailInput = form.querySelector('input[name="email"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        form.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
        form.querySelectorAll('.form-group').forEach(group => {
            const input = group.querySelector('input');
            const error = group.querySelector('.error-message');
            if (input) input.style.borderColor = '';
            if (error) {
                error.textContent = '';
                error.style.display = 'none';
            }
        });

        [nameInput, phoneInput, emailInput].forEach(input => {
            input.style.borderColor = '';
        });

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();

        if (name.length < 2) {
            showError(nameInput, 'Введите имя (минимум 2 символа)');
            isValid = false;
        }

        if (!/^(\+7|8)\d{10}$/.test(phone.replace(/\D/g, ''))) {
            showError(phoneInput, 'Введите корректный номер телефона');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError(emailInput, 'Введите корректный email');
            isValid = false;
        }

        if (isValid) {
            const name = nameInput.value.trim();
            const phone = '7' + phoneInput.value.replace(/\D/g, '').slice(-10);
            const email = emailInput.value.trim();

            const TOKEN = '8042188223:AAGiQLFwnSYK86FX0O3dMUbsj6dPK-1xwLc';
            const CHAT_ID = '303648524';
            const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

            const message = `
          <b>📥 Новая заявка с сайта</b>\n
          👤 <b>Имя:</b> ${name}
          📱 <b>Телефон:</b> ${phone}
          ✉️ <b>Email:</b> ${email}
          `;

            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            })
                .then(() => {
                    const successMessage = document.getElementById('formSuccess');
                    if (successMessage) {
                        successMessage.style.display = 'block';
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                        }, 5000);
                    }
                    form.reset();
                })
                .catch(error => {
                    console.error('❌ Ошибка отправки в Telegram:', error);
                    alert('Ошибка при отправке. Попробуйте позже.');
                });
        }

    });

    function showError(input, message) {
        const group = input.closest('.form-group');
        const error = group.querySelector('.error-message');
        input.style.borderColor = 'red';
        error.textContent = message;
        error.style.display = 'block';
    }
});
