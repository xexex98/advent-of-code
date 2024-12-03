const str = require("./input.cjs");

const arr = str.match(/mul\(\d+,\d+\)/g);

const ans = arr
  .map((el) => el.replace(/mul\(|\)/g, ""))
  .map((el) => el.split(","));

const res = ans.reduce((acc, el) => {
  return (acc += Number(el[0]) * Number(el[1]));
}, 0);

console.log(res);
//184122457
