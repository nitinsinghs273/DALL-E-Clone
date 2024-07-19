const morgan = require("morgan");
const express = require("express");

const DalleRouter = require("./routes/DalleRouter");
const PostRouter = require("./routes/PostRouter.js");

const app = express();

app.use("/api/v1/dalle", DalleRouter);
app.use("/api/v1/posts", PostRouter);

module.exports = app;
