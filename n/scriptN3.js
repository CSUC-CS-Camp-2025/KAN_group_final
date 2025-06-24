const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");
const pauseBtn = document.getElementById("pause-btn");
const secretLink = document.getElementById("secret-link");

let ducks = [];
let score = 0;
let isPaused = false;
let mouse = { x: 0, y: 0 };

// Draw a single duck
function drawDuck(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#ffcc00";
  ctx.fill();
  ctx.strokeStyle = "#333";
  ctx.stroke();
  ctx.font = "20px sans-serif";
  ctx.fillStyle = "#000";
  ctx.fillText("🦆", x - 12, y + 8);
}

// Check if mouse "caught" the duck
function isDuckCaught(duck) {
  const dx = mouse.x - duck.x;
  const dy = mouse.y - duck.y;
  return Math.sqrt(dx * dx + dy * dy) < 20;
}

// Spawn a new duck from the left side
function spawnDuck() {
  const y = Math.random() * canvas.height;
  const speed = .5 + Math.random() * 1.6;
  ducks.push({ x: -40, y, speed });
}

// Main game loop
function gameLoop() {
  if (!isPaused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = ducks.length - 1; i >= 0; i--) {
      let duck = ducks[i];
      duck.x += duck.speed;
      drawDuck(duck.x, duck.y);

      if (isDuckCaught(duck)) {
        ducks.splice(i, 1);
        score++;
        scoreDisplay.textContent = score;

        if (score === 100) {
          alert("👁‍🗨 A rhythm begins to form...\n↑ ↑ ↓ ↓ ← → ← → B A");
        }
      } else if (duck.x > canvas.width + 40) {
        ducks.splice(i, 1);
      }
    }
  }

  requestAnimationFrame(gameLoop);
}

// Track mouse position over canvas
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Pause/Resume toggle
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
});

// Konami Code
const konami = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a"
];
let kIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === konami[kIndex]) {
    kIndex++;
    if (kIndex === konami.length) {
      alert("✨ Portal Unlocked!");
      secretLink.style.display = "block";
      kIndex = 0;
    }
  } else {
    kIndex = 0;
  }
});

// Start everything
setInterval(spawnDuck, 800);
gameLoop();
