const express = require("express");
const DalleController = require("../Controller/DalleController");

const router = express.Router();

router
  .route("/image")
  .get(DalleController.getAll)
  .post(DalleController.PostImage);

module.exports = router;
