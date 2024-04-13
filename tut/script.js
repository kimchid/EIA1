
const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');

let playerPosition = 0;
let obstaclePosition = 380;
let gameover = false;

document.addEventListener('keydown', movePlayer);

function movePlayer(e) {
  if (e.key === 'ArrowUp' && playerPosition > 0) {
    playerPosition -= 10;
  } else if (e.key === 'ArrowDown' && playerPosition < 170) {
    playerPosition += 10;
  }

  player.style.top = `${playerPosition}px`;
}

function gameLoop() {
  if (!gameover) {
    obstaclePosition -= 5;
    obstacle.style.left = `${obstaclePosition}px`;

    if (
      playerPosition < 30 &&
      playerPosition + 20 > 10 &&
      obstaclePosition < 30 &&
      obstaclePosition + 20 > 10
    ) {
      gameover = true;
      alert('Game Over! Du hast das Hindernis getroffen.');
    }

    if (obstaclePosition < -20) {
      obstaclePosition = 380;
    }

    requestAnimationFrame(gameLoop);
  }
}

gameLoop();

