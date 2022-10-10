let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 17;

// Adds 1000 To Race Number For Early Adults
if (earlyRegister === true && runnerAge >= 18) {
  raceNumber += 1000;
}

if (earlyRegister === true && runnerAge > 18) {
  console.log(`You Registered Early, So You Will Begin your Race At 9:30AM.\nYour Race Number Is ${raceNumber}! Enjoy !!`);
} else if (runnerAge > 18 && earlyRegister === false){
  console.log(`You Registered Late, So You Will Begin your Race At 11:00AM.\nYour Race Number Is ${raceNumber}! Enjoy !!`);
} else if (runnerAge < 18){
  console.log(`You Are Under 18, So You Will Begin your Race At 12:30AM.\nYour Race Number Is ${raceNumber}! Enjoy !!`);
} else{
  console.log("It Appears You are 18, Please Go To The Front Desk To Collect Your Number and get more info")
}