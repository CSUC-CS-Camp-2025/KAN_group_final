document.addEventListener("DOMContentLoaded", () => {
  // All DOM-dependent code here

  // Background music autoplay
  const bgMusic = document.getElementById("bg-music");
  if (bgMusic) {
    bgMusic.volume = 0.2;
    bgMusic.play().catch(() => {
      console.log("Autoplay blocked. Will play on interaction.");
    });
  }

  // Resume music on click if blocked
  document.addEventListener("click", () => {
    if (bgMusic && bgMusic.paused) {
      bgMusic.play();
    }
  });

  // Floating duck spawner (doesn't depend on DOM elements)
  function spawnDuck() {
    const duck = document.createElement("div");
    duck.textContent = "🦆";
    duck.classList.add("duck");
    duck.style.left = `${Math.random() * 100}%`;
    duck.style.animationDuration = `${6 + Math.random() * 5}s`;
    document.body.appendChild(duck);
    setTimeout(() => duck.remove(), 11000);
  }
  setInterval(spawnDuck, 1000);

  // Duck fact easter egg (press "f")
  const duckFacts = [
    "Ducks can sleep with one eye open.",
    "Southern ducks know too much.",
    "You are being watched. By ducks.",
    "Quack is a state of mind.",
    "Only one duck in the world knows your name."
  ];
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === 'f') {
      const fact = duckFacts[Math.floor(Math.random() * duckFacts.length)];
      alert(fact);
    }
  });

  // Glitch effect on "g" key
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === 'g') {
      document.body.classList.add("glitch");
      setTimeout(() => {
        document.body.classList.remove("glitch");
      }, 500);
    }
  });

  // Konami code
  const konami = [
    "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
    "b","a"
  ];
  let kIndex = 0;
  const secretHatchBtn = document.getElementById("secret-hatch-btn");

  document.addEventListener("keydown", (e) => {
    if (e.key === konami[kIndex]) {
      kIndex++;
      if (kIndex === konami.length) {
        alert("Duck Protocol Unlocked");
        if (secretHatchBtn) {
          secretHatchBtn.style.display = "inline-block";
        }
        kIndex = 0;
      }
    } else {
      kIndex = 0;
    }
  });

  if (secretHatchBtn) {
    secretHatchBtn.addEventListener("click", () => {
  alert("You found the secret hatch! But nothing happens... or does it?");
  window.location.href = "indexN3.html";
});
  }

  // Progressive Secrets Unlock: Press S, F, and G in any order to trigger Phase 2
  let unlocks = { s: false, f: false, g: false };
  const prophecy = document.getElementById("prophecy");

  document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (key === 's') unlocks.s = true;
    if (key === 'f') unlocks.f = true;
    if (key === 'g') unlocks.g = true;

    if (unlocks.s && unlocks.f && unlocks.g) {
      if (!document.body.classList.contains("phase-2")) {
        document.body.classList.add("phase-2");
        if (prophecy) {
          prophecy.innerText = "🧬 You have entered Phase 2. The veil thins.";
        } else {
          alert("🧬 You have entered Phase 2. The veil thins.");
        }
      }
    }
  });

  // Duck header click hint
  const duckHeader = document.getElementById("duck-header");
  if (duckHeader) {
    duckHeader.addEventListener("click", () => {
      alert("The rhythm is everything.\n↑ ↑ ↓ ↓ ← → ← → B A");
    });
  }

  // Crack the Portal on click
  const portal = document.getElementById("portal");
  if (portal) {
    portal.addEventListener("click", () => {
      if (!portal.classList.contains("cracked")) {
        portal.classList.add("cracked");
        alert("🪨 The boundary has weakened.");
      }
    });
  }
});
