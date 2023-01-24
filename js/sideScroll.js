//esto es solamente una animacion para cuando algunos elementos aparezcan en pantalla

//constructor para un IntersectionObserver
const observer = new IntersectionObserver((entries) => {

//foreach para cada entrada que el observer recibe
  entries.forEach((entry) => {
  
    // logea las entrys por la salud del codigo, y verificar que todo funciona bien
    console.log(entry)

    // checkea si la entry intersecta con algun item
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

//selecciona todos los items que tengan la clase '.hidden'
const hiddenElements = document.querySelectorAll('.hidden');

//se le dice al observer que tiene que observar y triggerear la funcion que se hizo en el constructor
hiddenElements.forEach((el) => observer.observe(el));