const menubtn = document.querySelector('.menu-button');
const menuImage = document.querySelector('.menu-button img');
const menus = document.querySelector('.menu');
const headerBox = document.querySelector('.header-container');
const svgTextPaths = document.querySelectorAll('.text-color');
const svgIconCircle = document.querySelector('.icon-color');
const contactInput = document.querySelector('.contact');
const errorMessage = document.querySelector('.error-message');
console.log(errorMessage);



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

document.querySelectorAll('.accordion-button').forEach(function(accordionbtn) {
  accordionbtn.addEventListener('click', function() {

  const accordionContent = accordionbtn.nextElementSibling;
  accordionbtn.classList.toggle('active');

  if(accordionbtn.classList.contains('active')) {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

  } else {
    accordionContent.style.maxHeight = 0;
  }
  })
})

const tabs = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.content')

document.addEventListener('DOMContentLoaded', () => {
  tabs[0].click();

})

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.style.display = "none");

      tab.classList.add('active');
      const activeTabContent = document.querySelector(`.content[data-tab="${tab.getAttribute('data-for-tab')}"]`);
      activeTabContent.style.display = "flex";
  })

})

contactInput.addEventListener('input', function() {

  if(contactInput.value == '' || validateEmail(contactInput.value)) {
    errorMessage.style.display = "none";
    contactInput.classList.remove('is-invalid');
  } else {
    errorMessage.style.display = "block";
    contactInput.classList.add('is-invalid');
  }

});

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
