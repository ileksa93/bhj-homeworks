// Получаем элементы со страницы
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalCloseButtons = document.querySelectorAll('.modal__close');
const showSuccessButton = document.querySelector('.show-success');

// Показываем модальное окно #modal_main при загрузке страницы
modalMain.classList.add('modal_active');

// Функция для закрытия модальных окон
function closeModal() {
  this.closest('.modal').classList.remove('modal_active');
}

// Привязываем функцию закрытия к элементам modal__close
modalCloseButtons.forEach((button) => {
  button.addEventListener('click', closeModal);
});

// По нажатию на элемент show-success показываем модальное окно #modal_success
showSuccessButton.addEventListener('click', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение ссылки
  modalSuccess.classList.add('modal_active');
});
