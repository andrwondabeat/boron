const button = document.querySelector('.navBar__hambButton');
const menu = document.querySelector('.navBar__hamburger');

button.addEventListener('click', () =>{

  console.log('ASD');
  menu.classList.toggle('showHamb');

})