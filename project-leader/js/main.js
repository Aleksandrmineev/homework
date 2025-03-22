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
});


// слайдер 
new Swiper('.hero-slider', {
    slidesPerView: 6,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    // Responsive
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        }
    }
});
