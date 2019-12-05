import * as mongoose from "mongoose";

var model = mongoose.model(
  "data",
  new mongoose.Schema({
    time: { type: Date, default: new Date() },
    temperature: { type: Number, required: true, min: 0, max: 50 },
    humidity: { type: Number, required: true, min: 20, max: 90 }
  })
);

export = model;
