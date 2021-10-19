const fs = require("fs");
const path = require("path");
fs.readdir(process.argv[2], (err, list) => {
  list.forEach((fileName) => {
    if (path.extname(fileName) === "." + process.argv[3]) {
      console.log(fileName);
    }
  });
});
