const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connect_db = require("./config/db");
const userRouter = require("./routes/users.routers");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// connect MongoDB
connect_db();

// Test route
app.get("/", (req, res) => {
  res.json({ message: "User route working!" });
});

// Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("MERN Server Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
