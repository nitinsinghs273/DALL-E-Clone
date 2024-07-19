console.log("DalleController loaded");

exports.getAll = async (req, res) => {
  res.status(200).json({
    status: "sucess",
  });
};

exports.PostImage = async (req, res) => {
  try {
    res.status(201).json({
      staus: "sucess",
      message: "Post sucess",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
