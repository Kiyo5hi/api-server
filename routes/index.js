var express = require("express");
var router = express.Router();

router.all("/", function(req, res, next) {
  res.send({ iot_data_url: "https://api.k1yoshi.com/iot" });
});

module.exports = router;
