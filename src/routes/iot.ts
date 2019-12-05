import * as express from "express";
var router = express.Router();

import * as controller from "../controllers/iot-controller";

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await controller.getLatest());
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    res.status(201).send(await controller.insert(req.body.iot));
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/", async (req, res) => {
  try {
    res.status(204).send(await controller.deleteLatest());
  } catch (err) {
    res.status(404).send(err);
  }
});

export = router;
