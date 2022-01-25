const widgetMenu = document.querySelector('.header__menu');
const layer = document.querySelector('.js-layer');
const button = document.querySelector('.js-button');

button.addEventListener('click', function(){
  button.classList.toggle('_active');
  layer.classList.toggle('_active');
  widgetMenu.classList.toggle('_active');
})

layer.addEventListener('click', function(){
  button.classList.remove('_active');
  layer.classList.remove('_active');
  widgetMenu.classList.remove('_active');
})