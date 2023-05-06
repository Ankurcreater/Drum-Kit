// function handleclick() {
//     alert("get clicked");
// }
var drum_length = document.querySelectorAll(".drum").length;
for(var i = 0; i<drum_length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

 

// var audio = new Audio('sounds/tom-1.mp3');
// document.querySelectorAll(".drum")[1].addEventListener("click", function(){

// });

// for(var i = 1; i<4; i++){

// }

// function add(n1,n2) {
//     return n1 + n2;
//    }

//    function multi(n1,n2) {
//        return n1 * n2;
//    };

//    function calci(n1, n2, operator) {
//        return operator(n1,n2);
//    };

// var housekeper1  ={
//       yearsOfExperience: 12,
//       age: 24,
//       name: Angela,
//       cleaningRepertoire:["bathroom","looby","bedroom"]

// }

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);


});
}

//Detecting keyboard press
document.addEventListener("keypress",function(event){
  makeSound(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
  
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
  
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
  
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
  
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
  
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
  
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
  
    default:
      console.log(buttonInnerHTML);
  }

}