var bannerMaker = require('./banner');
var boxMaker = require('./box');
var caesarMaker = require('./caesar');
var extendVowelsMaker = require('./extend-vowels');
var factorMaker = require('./factors');
var leetMaker = require('./leet');
var matrixMultiplyMaker = require('./matix-multiply');
var matrixSumMaker = require('./matrix-sum');
var positiveNumsMaker = require('./positive-nums');
var printNumsMaker = require('./print_numbers');
var rockPaperScissorsMaker = require('./rock-paper-scissors');
var squareMaker = require('./square');
var sumNumbersMaker = require('./sum-numbers');
var ticTacToeMaker = require('./tic-tac-toe');

bannerMaker.banner('Frodo Lives!', '*');

squareMaker.square(10, '*');

boxMaker.box(5, 8, '*', ' ');

var encrypted = caesarMaker.cipher('I am the master of my fate, I am the captain of my soul.', 10);
console.log(encrypted);

var solved = caesarMaker.cipher(encrypted, -10);
console.log(solved);

var message = leetMaker.leet('I am the master of my fate; I am the captain of my soul.');
console.log(message);

console.log(extendVowelsMaker.extendLongVowels('Ooh, have some cheese, Gromit!', ['e', 'o'], 5));

console.log(sumNumbersMaker.sumNumbers([4, 2, 6, 22]));

console.log(positiveNumsMaker.positiveNums([1, -3, -22, 4, 55, 0]));

var test1 = [[2, 7], [4, 1]];
var test2 = [[6, 1], [3, 0]];
console.log(matrixSumMaker.matrixSum(test1, test2));
console.log(matrixMultiplyMaker.matrixMultiply(test1, test2));

console.log(printNumsMaker.printNumbersFor(1, 10)
);

console.log(printNumsMaker.printNumbersWhile(1, 10)
);

console.log(factorMaker.factors(20));

console.log(rockPaperScissorsMaker.rockPaperScissors('rock', 'scissors'));


console.log(ticTacToeMaker.ticTacToe([['O', null, 'X'], [null, 'O', 'X'], ['X', 'O', 'X']]));