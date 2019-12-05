import * as model from "../models/iot-model";

async function getLatest() {
  return await model.findOne({}, {}, { sort: { _id: -1 } });
}

async function insert(data: Object) {
  return await model.create(data);
}

async function deleteLatest() {
  return await model.findOneAndDelete({}, { sort: { _id: -1 } });
}

let controller = {
  getLatest: getLatest,
  insert: insert,
  deleteLatest: deleteLatest
};

export = controller;
