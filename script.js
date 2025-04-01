// Функция для получения параметров из URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Обработчик клика по кнопке "Написать мне"
  document.getElementById('contact-button').addEventListener('click', function() {
    alert("Скоро добавлю форму для связи! Пока что можно написать мне в личку.");
  });
  
  // Обработчик клика по кнопке Telegram
  document.getElementById('tg-button').addEventListener('click', function() {
    // Ссылка на твой Telegram профиль
    window.location.href = 'https://t.me/permball2';
  });
  
  // Извлекаем user_id из URL (если он есть) и отображаем
  window.onload = function() {
    const userId = getUrlParameter('user_id');
    if (userId) {
      document.getElementById('user-id-display').textContent = userId;
    } else {
      document.getElementById('user-id-display').textContent = 'ID не указан';
    }
  };
  document.addEventListener("DOMContentLoaded", function() {
    alert("Добро пожаловать на сайт Бекоглая! 🚀");
});
