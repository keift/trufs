const fs = require("../main.js");

var number = 0;

setInterval(() => {
  number++;

  fs.writeFileSync("./test/test.txt", number.toString());
}, 0);