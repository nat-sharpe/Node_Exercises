
let condition = /[A-Z]/;

console.assert(condition.test('AAPL') === true);
console.assert(condition.test('GOOG') === true);
console.assert(condition.test('GOOGL') === false);
// console.assert(condition.test('123') === false);


