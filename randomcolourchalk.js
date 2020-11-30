const input = parseInt(Math.random()*4)
const chalk = require('chalk');
if (input===0) {
console.log(chalk.bgGreen.black('The number is 0'))
}
if (input===1) {
console.log(chalk.bgRed.black('The number is 1'))
}
if (input===2) {
console.log(chalk.bgCyan.black('The number is 2'))
}
if (input===3) {
console.log(chalk.bgMagenta.black('The number is 3'))
}
