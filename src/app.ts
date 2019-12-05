import * as express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";

import * as dbService from "./services/db-service";

import * as indexRouter from "./routes/index";
import * as iotRouter from "./routes/iot";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/iot", iotRouter);

(async () => {
  await dbService.init();
})();

export = app;
