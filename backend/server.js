import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// ===========================
// Import Routes
// ===========================
import userRoutes from "./server/routes/userRoutes.js";
import contactRoutes from "./server/routes/contactRoutes.js";
import projectRoutes from "./server/routes/projectRoutes.js";
import qualificationRoutes from "./server/routes/qualificationRoutes.js";

// ===========================
// Environment Variables
// ===========================
dotenv.config();

// ===========================
// Connect to MongoDB
// ===========================
connectDB();

// ===========================
// Initialize Express App
// ===========================
const app = express();

// ===========================
// Middleware
// ===========================
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// ===========================
// Health & Root Check
// ===========================
app.get("/", (req, res) => {
  res.send("Portfolio backend is working!");
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// ===========================
// API Routes
// ===========================
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);

// ===========================
// Start Server
// ===========================
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log("📌 MongoDB & backend ready!");
});