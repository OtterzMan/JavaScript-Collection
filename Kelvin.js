const kelvin = 0; // Todays Temp
let Celsius = kelvin - 273; //Todays temp in C
let Fahrenheit = Celsius * (9/5) + 32; // Todays Temp In F
Fahrenheit = Math.floor(Fahrenheit); // Set Fahrenheit to The Clostest int
let Newton = Celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Celsius} degrees Celsius.`);
