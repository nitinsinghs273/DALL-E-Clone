const { OpenAIApi, Configuration } = require("openai");
require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateImage(prompt) {
  try {
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    return response;
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status); // e.g. 401
      console.error(error.message); // e.g. The authentication token you passed was invalid...
      console.error(error.code); // e.g. 'invalid_api_key'
      console.error(error.type); // e.g. 'invalid_request_error'
    } else {
      // Non-API error
      console.error(error);
    }
  }
}

exports.getAll = async (req, res) => {
  res.status(200).json({
    status: "sucess",
  });
};

exports.PostImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await generateImage(prompt);
    const image = aiResponse.data.data[0].b64_json;

    res.status(201).json({
      staus: "sucess",
      photo: image,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
