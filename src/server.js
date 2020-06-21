// load the things we need
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const exec = require("child_process").exec;
const mongoose = require("mongoose");
require("dotenv/config");

// set the view engine to ejs
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.json());

//Import Routes
const productRoute = require("./routes/index.js");

//Middlewares
app.use("/", productRoute);


app.listen(8080, () => {
  if (process.send) {
    process.send({ event: "online", url: "http://localhost:8080/" });
  }
  exec("webpack", (error, stdout, stderr) => {
    if (error !== null) {
      console.log("exec error: " + error);
    }
    return;
  });
});

//Database connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Connected to the db"))
  .catch((err) => console.error(err));
console.log("8080 is the magic port");
