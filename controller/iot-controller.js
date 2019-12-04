var model = require("../models/data");

var fetchLatestDoc = function(callback) {
  model.findOne({}, {}, { sort: { _id: -1 } }, (err, res) => {
    if (typeof callback === "function") callback(err, res);
  });
};

var insertDoc = function(document, callback) {
  model.create(document, (err, data) => {
    if (typeof callback === "function") callback(err, data);
  });
};

var deleteLatestDoc = function(callback) {
  model.findOneAndDelete({}, { sort: { _id: -1 } }, (err, data) => {
    if (typeof callback === "function") callback(err, data);
  });
};

module.exports = {
  fetchLatestDoc: fetchLatestDoc,
  insertDoc: insertDoc,
  deleteLatestDoc: deleteLatestDoc
};
