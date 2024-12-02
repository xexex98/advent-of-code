const arr = require("./input.cjs");

let left = [];
let right = [];

arr
  .split("\n")
  .filter(Boolean)
  .map((el) => el.split("   "))
  .forEach((el) => {
    left.push(Number(el[0]));
    right.push(Number(el[1]));
  });

let answer = 0;

while (left.length) {
  let leftMin = Number(Math.min(...left));
  let rightMin = Number(Math.min(...right));

  answer += Number(Math.abs(leftMin - rightMin));

  left.splice(left.indexOf(leftMin), 1);
  right.splice(right.indexOf(rightMin), 1);
}
console.log(answer);
//1579939
