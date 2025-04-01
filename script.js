// Обработчик клика по кнопке "Написать мне"
document.getElementById('contact-button').addEventListener('click', function() {
  alert("Скоро добавлю форму для связи! Пока что можно написать мне в личку.");
});

// Обработчик клика по кнопке Telegram
document.getElementById('tg-button').addEventListener('click', function() {
  // Ссылка на твой Telegram профиль
  window.location.href = 'https://t.me/permball2';
});
