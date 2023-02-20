// JavaScript код в файле task.js
const timerElement = document.getElementById("timer"); // получаем элемент, содержащий значение таймера
let timeLeft = 59; // устанавливаем стартовое значение таймера

function formatTime(timeLeft) {
  const hours = Math.floor(timeLeft / 3600).toString().padStart(2, "0"); // вычисляем количество часов и форматируем значение
  const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, "0"); // вычисляем количество минут и форматируем значение
  const seconds = (timeLeft % 60).toString().padStart(2, "0"); // вычисляем количество секунд и форматируем значение
  return `${hours}:${minutes}:${seconds}`;
}

timerElement.textContent = formatTime(timeLeft); // устанавливаем начальное значение таймера на странице

const intervalId = setInterval(() => {
  timeLeft--; // уменьшаем значение таймера на 1
  timerElement.textContent = formatTime(timeLeft); // обновляем значение таймера на странице
  if (timeLeft === 0) {
    clearInterval(intervalId); // останавливаем таймер, когда достигнуто значение 0
    alert("Вы победили в конкурсе!"); // выводим сообщение об окончании отсчета
  }
}, 1000);
