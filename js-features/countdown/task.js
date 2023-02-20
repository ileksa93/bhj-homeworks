let timer = 59; // стартовое значение таймера

const intervalId = setInterval(() => {
  timer--; // уменьшаем значение таймера на 1
  if (timer === 0) {
    clearInterval(intervalId); // останавливаем таймер, когда достигнуто значение 0
    alert("Вы победили в конкурсе!");
  }
}, 1000);
