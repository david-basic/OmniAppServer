import express from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";
import adminRoutes from "./routes/AdminRoutes";
import expressListEndpoints from "express-list-endpoints";
import { errorHandler } from "./controllers/ErrorHandlingController";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const dbUsername = process.env.DB_MONGO_USER;
const dbPassword = process.env.DB_MONGO_PASS;
const dbName = process.env.DB_MONGO_DB_NAME;

// Middleware
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

// Connect to MongoDB
connect(
  `mongodb+srv://${dbUsername}:${dbPassword}@omniapp.6wf4v3f.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=omniapp`
)
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    // List all endpoints
    console.log(expressListEndpoints(app));
  })
  .catch((error: Error) => {
    console.error("Failed to connect to MongoDB Atlas", error);
  });
