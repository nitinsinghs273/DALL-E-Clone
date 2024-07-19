const express = require("express");
const postController = require("../Controller/postController");

const router = express.Router();

router.route("/").get(postController.getPosts).post(postController.createPosts);

module.exports = router;
