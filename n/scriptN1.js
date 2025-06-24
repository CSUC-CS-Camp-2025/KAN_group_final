document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const videoModal = document.getElementById('video-modal');
  const openVideoBtn = document.getElementById('open-video');
  const closeVideoBtn = document.getElementById('close-video');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  openVideoBtn.addEventListener('click', () => {
    videoModal.style.display = 'block';
  });

  closeVideoBtn.addEventListener('click', () => {
    videoModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == videoModal) {
      videoModal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Load story from text file
  fetch('story.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('story-box-content').textContent = data;
    })
    .catch(err => {
      console.error('Failed to load story:', err);
    });
});
