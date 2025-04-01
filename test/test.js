const fs = require("../main.js");

let number = 0;

setInterval(() => {
  number++;

  fs.writeFileSync("./test/test.txt", number.toString());
}, 0);