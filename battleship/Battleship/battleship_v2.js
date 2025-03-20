var randomLoc = Math.floor(Math.random()* 5)


var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hit = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
   guess = prompt("Ready!,  Aim!, Fire! (Enter number0-6)");

    if(guess == null){
      alert("Thank you for playing!");
      break;

    }

    if (guess < 0 || guess>6) {

      alert("Please enter a valid cell number!")
    }

    else {
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3){

            hit = hit + 1;
           alert("Hits!")

            if(hit == 3){
                isSunk = true;
                alert("You sank my battleship!")
            }
        } else{
            alert("Miss...")
        }
   }
};

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0). toFixed(2);

var stats = "You took" + guesses + "guesses to sank my battleship!" + "\n" 
+ "accuracy" + (accuracy) + "%";
 
alert(stats);