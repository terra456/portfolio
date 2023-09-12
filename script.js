const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__nav');
const headerLinks = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuBtn.classList.toggle('menu-btn--active');
  headerNav.classList.toggle('nav--open');
});

headerLinks.forEach((el) => {
  el.addEventListener('click', (evt) => {

    menuBtn.classList.remove('menu-btn--active');
    headerNav.classList.remove('nav--open');
  })
})