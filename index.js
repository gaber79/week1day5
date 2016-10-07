var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var weytk = chalk.blue.bgRed.bold("Weytk-p! ") + chalk.green.bgWhite("Le7 en tuc?")
var name = chalk.black.bgMagenta.underline("Gabe ren skwekst. Le7 ren pupsmen!") 
console.log(message);
console.log(weytk);
console.log(name);