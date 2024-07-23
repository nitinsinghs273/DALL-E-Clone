

# DALL-E Clone

DALL-E Clone is a web application that integrates OpenAI's DALL-E API to generate AI-driven images based on user input. This project is built with a full-stack approach using ReactJs, ExpressJs, NodeJs, Cloudinary, and MongoDB.



##  Current Status

 - Backend: Completed

 - Frontend: In Progress

## Features - Backend
- API Integration: Utilizes OpenAI's DALL-E API for generating images.
- Storage: Integrates with Cloudinary for image storage.
- Database: Uses MongoDB for storing image data and metadata.
- Endpoints: 
  - POST /generate-image: Generates an image based on user input and stores it in Cloudinary.
  - GET /images: Retrieves a list of generated images from the database.


## Features - FrontEnd
- Currently under development. Will be built using ReactJs and will provide a user-friendly interface for interacting with the DALL-E API.

## Tech Stack
- Backend:
   - NodeJs
   - ExpressJs
   - MongoDB
   - Cloudinary
   - OpenAI DALL-E API
- Frontend (To be completed):
  - ReactJs
  - TaiwindCSS


  
## Usage
- Use Postman or a similar tool to test the API endpoints.
- Example POST request to /image with body:

```javascript


{
  "prompt": "A futuristic cityscape"
}
Roadmap
```

