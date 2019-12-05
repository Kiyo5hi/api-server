import * as mongoose from "mongoose";
import * as config from "../.config.json";

async function init() {
  return await mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

let db = {
  init: init
};

export = db;
