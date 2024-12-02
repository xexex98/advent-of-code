const arr = require("./input.cjs");

const data = arr
  .split("\n")
  .map((el) => el.split(" "))
  .map((el) => el.map(Number));

let safe = 0;

data.forEach((el) => {
  let checker = 0;

  if (el[0] < el[1]) {
    for (let i = 0; i < el.length - 1; i++) {
      if (
        el[i] < el[i + 1] &&
        el[i + 1] - el[i] <= 3 &&
        el[i + 1] - el[i] >= 1
      ) {
        checker++;
      }
    }
    if (checker === el.length - 1) {
      safe++;
    }
    checker = 0;
  } else if (el[0] > el[1]) {
    for (let i = 0; i < el.length - 1; i++) {
      if (
        el[i] > el[i + 1] &&
        el[i] - el[i + 1] <= 3 &&
        el[i] - el[i + 1] >= 1
      ) {
        checker++;
      }
    }
    if (checker === el.length - 1) {
      safe++;
    }
    checker = 0;
  }
});
//490
console.log(safe);
