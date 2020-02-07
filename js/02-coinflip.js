let coinFlip = Math.random() * 20;
console.log(coinFlip);
let choice = prompt("Enter Heads or Tails");
if (coinFlip > 10 && choice == "tails") {
    window.alert("Tails, you guessed right");
} else if (coinFlip < 10 && choice == "heads") {
    window.alert("Heads, you guessed right");
} else if (coinFlip > 10 && choice == "heads") {
    window.alert("Tails, you guessed wrong");
} else if (coinFlip < 10 && choice == "tails") {
    window.alert("Heads, you guessed wrong");
}