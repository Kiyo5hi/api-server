var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

console._log = function(content) {
  console.log(`${new Date().toLocaleString()} | ${content}`);
};

var indexRouter = require("./routes/index");
var iotRouter = require("./routes/iot");

var dbService = require("./services/db");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/iot", iotRouter);

dbService.initConnection((err, connection) => {
  console._log("Connect to database successfully!");
  return connection;
});

module.exports = app;
