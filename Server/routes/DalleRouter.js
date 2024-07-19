const express = require("express");
const DalleController = require("../Controller/DalleController");

const router = express.Router();

router.route("/").get(DalleController.getAll).post(DalleController.PostImage);

module.exports = router;
