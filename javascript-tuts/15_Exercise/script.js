// Create Snake, Water &amp; Gun game in JavaScript.
//  The game should ask you to enter S, W or G. The computer should be
// able to randomly generate S, W or G and declare win or loss using alert
//  Use alert, prompt and confirm whereever required!
// let length = 0;
// alert("Enter S for Snake, W for Water &amp; G for Gun")


function createRandomString(length) {
  const chars = "SWG";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
let AI = createRandomString(1);

let guess = prompt("Enter Your Guess");
guess = guess.toUpperCase(guess);
console.log(guess);
console.log(AI);
for (let chances = 0; chances <= 100; chances++) {
  if (guess === AI) {
    alert("Draw");
    break;
  } else if (guess === "S" && AI === "W") {
    alert("You Won =&gt; Snake vs Water");
    break;
  } else if (guess === "G" && AI === "S") {
    alert("You Win =&gt; Gun vs Snake");
    break;
  } else if (guess === "W" && AI === "G") {
    alert("You Win =&gt; Water vs Gun");
    break;
  } else {
    alert("You losse " + guess + " vs " + AI);
    break;
  }
}

console.log(guess + " vs " + AI);
