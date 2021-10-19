let http = require("http");
let bl = require("bl");
let url = process.argv[2];

http.get(url, (res) => {
  res.pipe(
    bl((err, data) => {
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
