//////////////CONTACT FORM//////////////////////////////
// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//     webPreferences: {
//       nodeIntegration: true
//     }
//   });
// });
//CHUNK 1
const express = require('express');
const app = express();
const PORT = 8080;
const log = console.log;
const path = require("path");


//CHUNK2
//Data-parsing
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


app.post("/email", function(req, res) {
  //TODO:
  // send email here
console.log("Data: ", req.body);

  res.json({
    message: "Message received"
  });
});


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  log("Server is starting on port, ", PORT);
})
