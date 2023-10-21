//FIRST SECTION: DETECTING BUTTON PRESS:
//var to use in the for loop: selects all elements with class .drum and counts how many there are
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

//for loop initialize: it will run as long as numberOfDrumButtons is true
for (let i = 0; i < numberOfDrumButtons; i++) {
  //selects each ".drum" element one by one and adds a click event listener to it using an anonymous function.
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //Inside the anonymous function "this" object refers to the element that triggered the event: the specific ".drum" element that was clicked.In this code, with "this" we get the identity if the button that was clicked

    //if a BUTTON is pressed it detects which button was pressed and checks its innerHTML and send that to makeSound in order to play the relevant sound
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    //we also want it to not only play the sound but also do some animation. We pass the same parameter as in the makeSound function
    buttonAnimation(buttonInnerHTML);
  });
}

//SECOND SECTION: DETECTING KEYBOARD PRESS:
//if a KEY was pressed, then the code listens to which key was pressed in the whole document. Once that is detected, the anonymous function gets called passing in the event that triggered the key pressed.
document.addEventListener("keydown", function (event) {
  //and because that event contains a property called "key", it can tell us which keyboard key was pressed and it sends that over to our other function makeSound that goes to the switch function to decide which sound to play depending on the pressed key
  makeSound(event.key);
  //we also want it to not only play the sound but also do some animation. We pass the same parameter as in the makeSound function
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      //to play a sound when a button is clicked we will use constractor functions to create a new Audio object and providing the path to the audio file "sounds/crash.mp3"
      let crash = new Audio("sounds/crash.mp3");
      // hte constructor function has an associated method called "play", and this play function will play the audio associated with the crash object
      crash.play();
      break;
    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

//we want to create a button animation when the key or button is pressed so that user knows which one he pressed
function buttonAnimation(currentKey) {
  //first we want to find the current key that was pressed (as ours have classes e.g: ".a", we concatenate the . before)
  let activeButton = document.querySelector("." + currentKey);
  //once we know which is was pressed, we add the class called "pressed" which I defined in my CSS to give it the style of shadow and transparency
  activeButton.classList.add("pressed");
  //after a wait of about 0.1 seconds, I want to remove that class from the classList
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
