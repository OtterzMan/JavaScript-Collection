let userName = 'Josh'; // Input Name
userName?console.log(`Welcome ${userName}!\n`):console.log('Welcome Stranger!\n');

let userQuestion = 'Will i have a good day ?'; // Input Question
console.log(userQuestion);
console.log(`Wow ${userName}, What a good question\n`);

let randomNumber = Math.floor(Math.random()*8); //EightBall System
let eightball = '';

switch (randomNumber){
  case 0:
    eightball = 'Of Course !'
    break;
  case 1:
    eightball = 'It is certain'
    break;
  case 2:
    eightball = 'It is decidedly so'
    break;
  case 3:
    eightball = 'Reply hazy try again'
    break;
  case 4:
    eightball = 'Cannot predict now'
    break;
  case 5:
    eightball = 'Do not count on it'
    break;
  case 6:
    eightball = 'My sources say no'
    break;
  case 7:
    eightball = 'Outlook not so good'
    break;
  case 8:
    eightball = 'Signs point to yes'
    break;
}

console.log(eightball); // Prints EightBall Answer