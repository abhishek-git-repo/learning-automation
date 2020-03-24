// const sqaure = {
//   area: a => a * a,
//   perimeter: a => 4 * a
// };

const sqaure = require("./square.js");

const calsqaure = a => {
  console.log(
    `The value of a is ${a} and area of sqaure is ` + sqaure.area1(a)
  );
  console.log(
    `The value of a is ${a} and perimeter of sqaure is ` + sqaure.perimeter(a)
  );
};

calsqaure(5);
