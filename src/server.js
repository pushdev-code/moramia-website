// load the things we need
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const exec = require("child_process").exec;
const mongoose = require("mongoose");
const GcpSecretsLoader = require("./gcp-secrets");
require("dotenv/config");

// set the view engine to ejs
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.json());

//Import Routes
const indexRoute = require("./routes/index.js");
const productRoute = require("./routes/products.js");
//Middlewares
app.use("/", indexRoute);
app.use("/products",productRoute);

//initializers
app.listen(8080, () => {
  if (process.send) {
    process.send({
      event: "online",
      url: "http://localhost:8080/",
    });
  }
  exec("webpack", (error, stdout, stderr) => {
    if (error !== null) {
      console.log("exec error: " + error);
    }
    return;
  });
});

async function databaseConecction() {
    let gcpSecretsLoader = new GcpSecretsLoader();
    let connection = await gcpSecretsLoader.getSecret("secret_database");
    //Database connection
    mongoose
      .connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((db) => console.log("Connected to the db"))
      .catch((err) => console.error(err));
}

databaseConecction();

console.log("8080 is the magic port");
