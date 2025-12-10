import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// ============================
// Import Routes
// ============================
import userRoutes from "./server/routes/userRoutes.js";
import contactRoutes from "./server/routes/contactRoutes.js";
import projectRoutes from "./server/routes/projectRoutes.js";
import qualificationRoutes from "./server/routes/qualificationRoutes.js";

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
// CORS — Must allow GitHub Pages + localhost + Render
// ============================

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",

  // GitHub Pages (portfolio)
  "https://jifrah4.github.io",
  "https://jifrah4.github.io/",

  // Render backend itself
  "https://react-portfolio-qoaa.onrender.com",
  "https://react-portfolio-qoaa.onrender.com/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("➡️ Incoming origin:", origin);

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ BLOCKED ORIGIN:", origin);
        callback(new Error("CORS blocked: " + origin));
      }
    },
    credentials: true,
  })
);

  


// ============================
// Middleware
// ============================
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// ============================
// Health Check Route
// ============================
app.get("/", (req, res) => {
  res.send("Portfolio backend is LIVE on Render! 🚀");
});

// ============================
// API Routes
// ============================
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);

// ============================
// Start Server
// ============================
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
