// JavaScript код в файле task.js
const timerElement = document.getElementById("timer"); // получаем элемент, содержащий значение таймера
let timer = parseInt(timerElement.textContent); // получаем начальное значение таймера и преобразуем его в число

const intervalId = setInterval(() => {
  timer--; // уменьшаем значение таймера на 1
  timerElement.textContent = timer; // обновляем значение таймера на странице
  if (timer === 0) {
    clearInterval(intervalId); // останавливаем таймер, когда достигнуто значение 0
    alert("Вы победили в конкурсе!");
  }
}, 1000);
