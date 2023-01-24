//esto es solamente una animacion para cuando algunos elementos aparezcan en pantalla

//constructor para un IntersectionObserver
const observer2 = new IntersectionObserver((entries) => {

//foreach para cada entrada que el observer recibe
  entries.forEach((entry) => {
  
    // logea las entrys por la salud del codigo, y verificar que todo funciona bien


    // checkea si la entry intersecta con algun item
    if(entry.isIntersecting){
      entry.target.classList.add('showUp');
      console.log('asd');
    }
  });
});

//selecciona todos los items que tengan la clase '.hidden'
const hiddenElements2 = document.querySelectorAll('.hiddenUp');

//se le dice al observer que tiene que observar y triggerear la funcion que se hizo en el constructor
hiddenElements2.forEach((el) => observer2.observe(el));