var mongoose = require("mongoose");
var config = require("../config/.config");

var initConnection = function(callback) {
  mongoose.connect(
    config.db,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      if (typeof callback === "function") {
        if (err) return callback(err);
        return callback(null, mongoose.connection);
      }
    }
  );
};

module.exports = {
  initConnection: initConnection
};
