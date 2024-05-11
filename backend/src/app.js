// Configure environment variables
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import express from "express";
import cors from "cors";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// Creates the express server
const app = express();

// Configure middleware (logging, CORS support, JSON parsing support, static files support)
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Import and use our application routes.
import routes from "./routes/routes.js";
app.use("/", routes);

// Connect to database
await mongoose.connect(process.env.DB_URL);

// Start the server.
app.listen(PORT, () => console.log(`App server listening on port ${PORT}!`));
