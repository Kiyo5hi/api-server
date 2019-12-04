var mongoose = require("mongoose");

var DataSchema = new mongoose.Schema({
  time: { type: Date, default: new Date() },
  temperature: { type: Number, required: true, min: 0, max: 50 },
  humidity: { type: Number, required: true, min: 20, max: 90 }
});

module.exports = mongoose.model("Data", DataSchema);
