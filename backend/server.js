import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./userRoutes.js";
import contactRoutes from "./contactRoutes.js";
import projectRoutes from "./projectRoutes.js";
import qualificationRoutes from "./qualificationRoutes.js";

// ============================
// Load Environment Variables
// ============================
dotenv.config();

// ============================
// Connect to MongoDB
// ============================
connectDB();

const app = express();

// ============================
// Middleware
// ============================
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// ============================
// CORS — allow frontend origins
// IMPORTANT: credentials:false unless you use cookies
// ============================
const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://localhost:5173",
  "https://jifrah4.github.io",
]);

app.use(
  cors({
    origin: (origin, cb) => {
      console.log("➡️ Incoming origin:", origin);

      // Allow non-browser requests (Postman/curl)
      if (!origin) return cb(null, true);

      if (allowedOrigins.has(origin)) return cb(null, true);

      console.log("❌ CORS BLOCKED ORIGIN:", origin);
      return cb(new Error(`CORS blocked: ${origin}`), false);
    },
    credentials: false,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Preflight support
app.options("*", cors());

// ============================
// Health Check Routes
// ============================
app.get("/", (req, res) => {
  res.send("🚀 Portfolio backend is LIVE on Render!");
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "API healthy" });
});

// ============================
// API Routes
// ============================
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);

// ============================
// 404 Handler
// ============================
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ============================
// Global Error Handler
// ============================
app.use((err, req, res, next) => {
  console.error("🔥 Server error:", err);
  res.status(500).json({
    success: false,
    message: err?.message || "Server error",
  });
});

// ============================
// Start Server
// ============================
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
