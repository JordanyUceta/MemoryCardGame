const gameContainer = document.getElementById("game");
let click1 = null; 
let click2 = null; 
let colorsDiv = []; 
let total = []; 
let score = 0; 

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  event.target.style.backgroundColor = event.target.classList.value;
  let color = event.target.classList.value;  
  // setInterval(() => {
  //   compareColors(color, event.target); 
    
  // }, 1000);
  setTimeout(() => {
    compareColors(color, event.target); 
  }, 500);

}

function compareColors(clickFunction, event) { 
  total.push(clickFunction); 
  colorsDiv.push(event); 
  // console.log(event.classList); 

  console.log(colorsDiv[0].style.backgroundColor);
  console.log(colorsDiv.length); 
  if (total.length == 2) {
    if (total[0] === total[1]) {
      score++; //
      

      colorsDiv = []; 
      total = []; 
    } else {
      console.log("didn't match");
      for(let i = 0; i < colorsDiv.length; i++){
        colorsDiv[i].style.removeProperty('background');
      }
      colorsDiv = [];
      total = [];
    }
  }
}


// when the DOM loads
createDivsForColors(shuffledColors);
// e.target.style.background = 'white';
/* */