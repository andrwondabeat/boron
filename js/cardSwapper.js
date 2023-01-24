
//Selecting all the cards by their class
const cards = document.querySelectorAll(".tweetSection__right__card");

let cardCounter = 0;
// Tuve que un contador para las cards, porque el método cards.length no estaba funcionando, así que perdon por ponerme rustico en eso.
//lo que hace esto es lo siguiente: inicia un contador de cartas, luego en el forEach que cuenta todas las cartas para separarlas,
//se le agrega uno al contador. Esta fue una solución un poco rustica para el método .lenght que no funcionaba.


//Esta funcion posiciona todas las cards a medida que las cuenta, para poder hacer el slider
cards.forEach((card, indx) => {
  card.style.transform = `translateX(${indx * 150}%)`;
  cardCounter++;
});

// inicializa la variable para la card actual y también obtiene la última card restando 1 al contador que hice antes
let curCard = 0;
let maxCard = cardCounter - 1;


// selecciona el botón para pasar a la siguiente tarjeta
const nextCard = document.querySelector("#rightArrow");

// event listener para trackear los clics en la flecha derecha
nextCard.addEventListener("click", () => {

// si la card actual es la última, va al inicio del slider
  if(curCard == maxCard){
    curCard = 0;
  }else{
   // si no, solo agrega uno al counter para pasar a la siguiente card
    curCard++;
  }



  //esto simplemente establece su translateX al 150% multiplicado por cada índice de las cards en el array.
 //estableci el translateX en 150 por problemas de tamaño, pensé que era una solución rápida (lo era) pero funcionó bastante bien hasta en dispositivos móviles

  cards.forEach((card, indx) => {
    card.style.transform = `translateX(${150 * (indx - curCard)}%)`;
  });
});


//la otra mitad del código es literalmente el mismo pero al revés, asi se puede volver entre las tarjetas

const prevCard = document.querySelector("#leftArrow");

prevCard.addEventListener("click", () => {

  if (curCard == 0) {
    curCard = maxCard;
  } else {
    curCard--;
  }

  //   move Card by 100%
  cards.forEach((card, indx) => {
    card.style.transform = `translateX(${150 * (indx - curCard)}%)`;
  });
});