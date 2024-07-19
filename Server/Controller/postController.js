const Post = require("../Model/PostModel");

exports.getPosts = async (req, res) => {
  const posts = await Post.find({});
  try {
    res.status(200).json({
      status: "sucess",
      data: posts,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.createPosts = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const newPost = await Post.create({
      name,
      prompt,
      photo,
    });
    res.status(201).json({
      status: "sucess",
      message: newPost,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Posting Failed",
    });
  }
};
