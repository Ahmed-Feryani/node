const arr = process.argv;

const sum = arr.splice(2).reduce((prev, current) => +prev + +current, 0);

console.log(sum)
