let wins = 0;
let losses = 0;
let kills = 0;
function getHole(index) {
    return document.getElementById(`hole${index}`);
  }
  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
      if (this.classList.contains('hole_has-mole')) {
        kills++;
        wins++;
        document.getElementById('dead').textContent = kills;
        document.getElementById('win').textContent = wins;
        if (wins === 10) {
          alert('Победа!');
          wins = 0;
          losses = 0;
          kills = 0;
          document.getElementById('win').textContent = wins;
          document.getElementById('lost').textContent = losses;
          document.getElementById('dead').textContent = kills;
        }
      } else {
        losses++;
        document.getElementById('lost').textContent = losses;
        if (losses === 5) {
          alert('Вы проиграли!');
          wins = 0;
          losses = 0;
          kills = 0;
          document.getElementById('win').textContent = wins;
          document.getElementById('lost').textContent = losses;
          document.getElementById('dead').textContent = kills;
        }
      }
    };
  }
  