import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import chatRoutes from "./routes/chat";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration - allow frontend origin only
app.use(
  cors({
    origin: "https://www.ideovent.com", // tumhara frontend URL hona chahiye yahaan
    credentials: true,
  })
);

app.use(bodyParser.json());

// Routes
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Ideovent Backend is running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
