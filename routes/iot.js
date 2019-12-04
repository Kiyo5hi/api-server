var express = require("express");
var router = express.Router();

var iotController = require("../controller/iot-controller");

router.get("/", (req, res, next) => {
  iotController.fetchLatestDoc((err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
});

router.post("/", (req, res, next) => {
  iotController.insertDoc(req.body.iot, (err, data) => {
    if (err) return res.status(400).send(err);
    return res.status(201).send(data);
  });
});

router.delete("/", (req, res, next) => {
  iotController.deleteLatestDoc((err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(204).send();
  });
});

module.exports = router;
