let http = require("http");
let bl = require("bl");
let results = [];
let count = 0;

function GetData(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(
      bl((err, data) => {
        results[index] = data.toString();
        count++;
        if (count == 3) {
          for (var i = 0; i < 3; i++) console.log(results[i]);
        }
      })
    );
  });
}

for (let i = 0; i < 3; i++) GetData(i);
