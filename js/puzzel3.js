// Input

const inputButton = document.querySelector(".input-button");
// ^Variabel van de button naast de input^

inputButton.addEventListener("click", toggleWinner);
// ^Als je hier op klikt voert hij de functie toggleWinner uit^

function toggleWinner() {
  const winner = document.querySelector(".winner");
  const inputValue = document.querySelector(".input-puzzel").value;
  // ^Variabelen voor de input value en winner div^
  if(inputValue === "vond je alle spellen leuk? dank je voor het spelen!"){
    // ^Als inputValue gelijk is aan die zin voert hij de if statement uit^
    // ^Als dat niet zo is voert hij de else statement uit^
    winner.classList.add("active");
    // ^Geeft aan de variabele winner een class die heet active^
    console.log("Jij bent een winnaar!");
  }else{
    console.log("Verkeerd antwoord")
  }
}
// ^Functie voor als je hebt gewonnen^

// Dialoog

const dialoogBtn1 = document.querySelector(".dialoog1-btn");
const dialoogDiv = document.querySelector(".dialoog1");
// ^Variabelen voor de dialoog button en dialoog div^

dialoogBtn1.addEventListener("click", gaDoor)
// ^Als je hier op klikt voert hij de functie gaDoor uit^

function gaDoor(){
  dialoogDiv.classList.add("active")
  // ^dialoogDiv krijgt een class genaamd active^
}