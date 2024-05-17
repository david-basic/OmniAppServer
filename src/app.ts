require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8080;
const dbPassword = process.env.DB_MONGO_PASS;

// Connect to MongoDB
mongoose
  .connect(`mongodb+srv://dbOmniAppAdmin:${dbPassword}@omniapp.6wf4v3f.mongodb.net/?retryWrites=true&w=majority&appName=omniapp`)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Failed to connect to MongoDB", error);
  });
