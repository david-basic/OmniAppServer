import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import testRoute from "./routes/TestRoute";

dotenv.config();

const app = express();
const port = 8080;
const dbPassword = process.env.DB_MONGO_PASS;

// Middleware
app.use('/api', testRoute);

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://dbOmniAppAdmin:${dbPassword}@omniapp.6wf4v3f.mongodb.net/OmniAppTest?retryWrites=true&w=majority&appName=omniapp`
  )
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
