const app = require("./index");
const mongoose = require("mongoose");

const Port = process.env.PORT;
console.log(process.env.OPENAI_API_KEY);

app.get("/", (req, res) => console.log("Hello From DALL-E"));

const startServer = async () => {
  try {
    app.listen(Port, (req, res) => {
      console.log(`Server is Connect to ${Port} `);
    });

    mongoose
      .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((err) => console.log(`connection error: ${err}`));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
