import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://www.ideovent.com", // Exact frontend URL
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Ideovent Backend is running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`); // Shows actual PORT
});
