const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const DalleRouter = require("./routes/DalleRouter");
const PostRouter = require("./routes/PostRouter.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/dalle", DalleRouter);
app.use("/api/v1/posts", PostRouter);

module.exports = app;
