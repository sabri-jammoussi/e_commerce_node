import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Create tales frirst
createUserTable();

// Routes
app.use("/api", userRoutes);
// Error handling middleware
app.use(errorHandling);
// Testing postgres connection
app.get("/", async (req, res) => {
  try {
    console.log("start");
    const result = await pool.query("SELECT current_database()");
    console.log("Query result:", result.rows[0]); // Debug log
    res.send(`The database name is: ${result.rows[0].current_database}`);
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).send("Database connection failed");
  }
});
// Server runnig
app.listen(port, () => {
  console.log(`Server is running on http:localhost:${port}`);
});
