const nav = document.querySelector('.nav');
const btnButton = document.querySelector('.btn-menu');

btnButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});
