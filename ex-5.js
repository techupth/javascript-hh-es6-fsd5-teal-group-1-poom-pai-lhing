function sum(...rest) {
  let total = (accumulator, currentValue) => accumulator + currentValue;
  return rest.reduce(total, 0);
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
