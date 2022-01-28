console.log('Javascript Memory file is loaded');

const dialoogBtn1 = document.querySelector(".dialoog1-btn");
const dialoogDiv = document.querySelector(".dialoog1");

dialoogBtn1.addEventListener("click", gaDoor)

function gaDoor(){
  dialoogDiv.classList.add("active")
}


// Ik heb hier gebruik gemaakt van de variabele let, omdat dit later nog verandert moet kunnen worden// 

let fas = [...document.getElementsByClassName('fas')],
list = [...document.getElementsByClassName("list")],
mainCard = [...document.getElementsByClassName("card")],
cards = [...document.getElementsByClassName("cards")],
opend = [...document.getElementsByClassName("open")],
rating = [...document.getElementsByClassName("rates")],
movehml = [...document.getElementsByClassName('moves')],
time = [...document.getElementsByClassName("time")],
timeFinal = [...document.getElementsByClassName("time-final")],
modal = [...document.getElementsByClassName("modal")],
finalRate = [...document.getElementsByClassName("final-rating")],
numMistakes = [],
stopTimer,
moves = 1,
numCardOpend = [];



(function mainFunc() {
list.forEach(function (item) {
  item.addEventListener("click", addToArray);
});
})();


function addToArray() {
  numCardOpend.push(this);
  movehml[0].innerHTML = parseInt(moves++ / 2) + " moves ";
  this.children[0].classList.add("open");
    if(moves === 2) clock();
    if (numCardOpend.length === 2) compare();
    if ((opend.length * 2) === list.length) {rate(); final(); finalRating();}
    if (numCardOpend[0].firstElementChild.classList.contains("open") || numCardOpend[1].firstElementChild.classList.contains("open")) {
      numCardOpend[0].removeEventListener("click", addToArray);
    } 
}
// Timer //

var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 0;

  function myClock() {
    document.getElementsByClassName("time")[0].innerHTML = (++c) + " second";
  }

}


// shuffle //
// Deze twee functies shuffelen alle kaarten //

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomCards() {
  shuffle(list); // shuffle de kaarten //
   cards[0].innerHTML = ""; // Dit maakt de lijst leeg
   /*list.forEach(function (item) { // zet shuffle kaarten
     cards[0].appendChild(item);
   });*/
   for (var i = 0; i < list.length; i++) {
     cards[0].appendChild(list[i]);
   }
   
}

randomCards();

// compare
// Deze functie zal de kaarten vergelijken //
function compare() {
  // Dit wordt uitgevoerd als dezelfde kaart getrokken wordt door middel van een if else statement //
  if (numCardOpend[0].innerHTML === numCardOpend[1].innerHTML) {
  numCardOpend[0].children[0].parentNode.classList.add("open", "backcolor");
  numCardOpend[1].children[0].parentNode.classList.add("open", "backcolor");
  opend.push(this);
  numCardOpend.length = 0;
  // Dit wordt uitgevoerd als er niet dezelfde kaart getrokken wordt //
  } else if (numCardOpend[0].innerHTML !== numCardOpend[1].innerHTML) {
  numMistakes.push(this);
  setTimeout(function () {
    numCardOpend[0].children[0].classList.remove("open");
    numCardOpend[0].addEventListener("click", addToArray);
    numCardOpend[1].addEventListener("click", addToArray);
    numCardOpend[1].children[0].classList.remove("open");
    numCardOpend.length = 0;
  }, 400);
  }

}

// Deze functie werkt alleen als alle kaarten geopend zijn //  
function rate() {
  clearInterval(myTimer);
        if (numMistakes.length <= 3) {
          rating[0].children[0].classList.add("ratesJs");
          rating[0].children[1].classList.add("ratesJs");
          rating[0].children[2].classList.add("ratesJs");
      } else if (4 < numMistakes.length && numMistakes.length < 10) {
        rating[0].children[0].classList.add("ratesJs");
        rating[0].children[1].classList.add("ratesJs");
      } else if (numMistakes.length > 10) {
        rating[0].children[0].classList.add("ratesJs");
      }
}



// Deze functie wordt uitgevoerd als je gewonnen hebt //

function final() {
  timeFinal[0].innerHTML = parseInt(time[0].textContent); 
  modal[0].style.display="block";
}

function finalRating() {
  if (moves / 2 - (1/2) > 20) {
    finalRate[0].children[0].style.color = "gold";
    finalRate[0].children[1].style.color = "gold";
  }

  if (moves / 2 - (1/2) < 20) {
    finalRate[0].children[0].style.color = "gold";
    finalRate[0].children[1].style.color = "gold";
    finalRate[0].children[2].style.color = "gold";
  }
}