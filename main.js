// Today's forecast in Kelvin //
const kelvin = 293;
// The forecast converted to Kelvin.  Celsius is Kelvin - 273 //
let celsius = kelvin - 273;
// Need to convert from Celsius to Fahrenheit.  Can be done with the equation above //
// Used Math.floor() method to make number rounded to nearest integer //
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra practice of converting to Newton //
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} newtons.`);
