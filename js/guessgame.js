const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.prompt(`Enter a valid number! :(`);
  } else if (guess < minNum || guess > maxNum) {
    window.prompt(`Please, enter a valid number :)`);
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW! Try again, freaky");
    } else if (guess > answer) {
      window.alert("TOO HIGH!! try again, freaky");
    } else {
      window.alert(
        `CORRECT! SIGMA DETECTED! answer = ${answer} It took ${attempts} attempts!`
      );
      running = false;
    }
  }
}
