const menubtn = document.querySelector('.menu-button');
const menuImage = document.querySelector('.menu-button img');
const menus = document.querySelector('.menu');
const headerBox = document.querySelector('.header-container');
const svgTextPaths = document.querySelectorAll('.text-color');
const svgIconCircle = document.querySelector('.icon-color');


menubtn.addEventListener('click', function() {
  menus.classList.toggle('hidden');
  headerBox.classList.toggle('blue-background');
  menuImage.classList.toggle('blue-background');

    svgIconCircle.setAttribute('fill', svgIconCircle.getAttribute('fill') === '#5267DF'? '#FFFFFF' : '#5267DF');

    svgTextPaths.forEach(function(path) {
    path.setAttribute('fill', path.getAttribute('fill') === '#242A45' ? '#FFFFFF' : '#242A45');
    });

    menuImage.setAttribute('src', menuImage.getAttribute('src') === './images/icon-hamburger.svg' ? './images/icon-close.svg' :'./images/icon-hamburger.svg')

})
