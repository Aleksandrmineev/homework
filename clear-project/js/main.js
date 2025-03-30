
// --------------------FORM----------------------------

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const successMessage = document.getElementById('formSuccess');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const phone = form.phone.value.trim().replace(/\D/g, '');
        const email = form.email.value.trim();

        if (!name || phone.length < 10 || !email.includes('@')) {
            alert('Пожалуйста, заполните все поля корректно');
            return;
        }

        const TOKEN = '8042188223:AAGiQLFwnSYK86FX0O3dMUbsj6dPK-1xwLc'; // ← вставь сюда токен от BotFather
        const CHAT_ID = '303648524'; // ← твой chat_id
        const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

        const message = `
  <b>📥 Новая заявка</b>\n
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
                successMessage.style.display = 'block';
                form.reset();
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                console.error('❌ Ошибка отправки в Telegram:', error);
                alert('Произошла ошибка при отправке.');
            });
    });
});
