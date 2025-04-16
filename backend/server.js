import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"; // Import auth routes

dotenv.config();

const app = express();
const port = 3000;

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Use authentication routes
app.use("/api/v1", authRoutes);

// ✅ Connect to MongoDB
mongoose.set('strictQuery', true); // Optional, suppress Mongoose 7 deprecation warning

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB connected..."))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit the app if DB fails to connect
  });
// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});


