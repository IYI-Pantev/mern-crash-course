// server.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

// Loads environment variables from a .env file into process.env
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server started at http://localhost:${PORT}`);
});
