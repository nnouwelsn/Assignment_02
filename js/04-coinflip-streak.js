let coinFlip;
let i;
do {
    i = 0;
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads") + i;
    } else if (coinFlip === 1) {
        console.log("Tails") + i;
    }
} while (coinFlip === 0);
