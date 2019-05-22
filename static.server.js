var express = require("express");
var app = express();

// MEMO: no need in case of serving only static on '/'
// app.get("/", function(req, res) {
//   res.send("Hello~");
// });

var port = 3333;

app.use(express.static("out"));

app.listen(port, function() {
  console.log(`Listening to the port ${port} ...`);
});
