const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickerSpeed = document.getElementById('clicker__speed');

let clicks = 0;
let sizeChange = 0;
let speed = 0;
let lastClickTime = new Date().getTime();

cookie.onclick = function() {
  clicks++;
  clickerCounter.textContent = clicks;

  const currentTime = new Date().getTime();
  const timeDifference = (currentTime - lastClickTime) / 1000;
  speed = (1 / timeDifference).toFixed(2);
  clickerSpeed.textContent = speed;

  sizeChange++;
  if (sizeChange % 2 === 0) {
    cookie.style.width = '200px';
    cookie.style.height = '200px';
  } else {
    cookie.style.width = '250px';
    cookie.style.height = '250px';
  }

  lastClickTime = currentTime;
}
