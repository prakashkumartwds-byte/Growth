const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});