/*program to generate a random number and store in a variable
  in a variable. program then takes an input from the user to 
  tell them weather the guess was correct , greater or lesser
  than the original number .
  100 - (number of guesses) is the score of the usert
  Terminate program once number is guessed.Number should be b/w 1-100
*/

let num = Math.floor(Math.random() * 101);
let count = 0;
let chances = 0;

for(chances = 0; chances <= 100; chances++){
    let guess = prompt("Guess the Value: ");
    guess = Number.parseInt(guess);

    if(num == guess){
        console.log("Correct Guess: "+ num);
        break;
    }
    else if(num > guess){
        console.log("Enter a Higher value");
    }
    else {
        console.log("Enter a Lower value")
    }

}
console.log("You have guessed the correct number in " + chances + " tries")



// console.log(num);