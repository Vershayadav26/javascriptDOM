document.querySelectorAll('.white, .black').forEach(key => {
  key.addEventListener('click', () => {
    key.style.background = '#149e82';
    setTimeout(() => {
      key.style.background = key.classList.contains('white') ? '#fff' : '#000';
    }, 150);
  });
});
