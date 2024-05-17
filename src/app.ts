import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import adminRoutes from "./routes/AdminRoutes";
import expressListEndpoints from "express-list-endpoints";

dotenv.config();

const app = express();
const port = 8080;
const dbUsername = process.env.DB_MONGO_USER;
const dbPassword = process.env.DB_MONGO_PASS;
const testDB = "OmniAppTest";

// Middleware
app.use("/admin", adminRoutes.getAllUsersRoute);
app.use("/admin", adminRoutes.getUserByIdRoute);

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${dbUsername}:${dbPassword}@omniapp.6wf4v3f.mongodb.net/${testDB}?retryWrites=true&w=majority&appName=omniapp`
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log(expressListEndpoints(app));
  })
  .catch((error: Error) => {
    console.error("Failed to connect to MongoDB Atlas", error);
  });
