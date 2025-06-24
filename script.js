//JavaScript can go lie in a hole <3 -Namiko

document.addEventListener('DOMContentLoaded', () => {
  // --- Elements ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');

  // --- Dropdown menu toggle ---
  menuToggle.addEventListener('click', () => {
    const isShown = dropdownMenu.classList.toggle('show');
    dropdownMenu.setAttribute('aria-hidden', !isShown);
  });

  // Close dropdown if clicking outside (im awesome)
  document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      dropdownMenu.classList.remove('show');
      dropdownMenu.setAttribute('aria-hidden', 'true');
    }
  });

  // --- Tabs functionality ---
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active classes
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(tc => tc.classList.remove('active'));

      // Activate clicked tab and corresponding content
      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // --- Konami Code Detection ---
  const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let konamiPosition = 0;

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === konamiCode[konamiPosition].toLowerCase()) {
      konamiPosition++;
      if (konamiPosition === konamiCode.length) {
        alert('nice try');
        konamiPosition = 0;
      }
    } else {
      konamiPosition = 0;
    }
  });
});
