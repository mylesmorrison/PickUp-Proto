const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config({ path: '../.env' });
const connectDb = require("./db/dbConnection"); // ✅ Import DB connection function


const app = express();
app.use(express.json()); // Allow JSON in requests

// Serve static files (index.html, script.js, etc.)
app.use(express.static(path.join(__dirname, "../public")));

// Use event routes
const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);

// Use user routes 
const userRoutes = require("./routes/userRoutes")
app.use("/api/users", userRoutes)

// ✅ Connect to MongoDB at startup
connectDb();

// Serve static frontend pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "../public/about.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
app.get("/signup", (req, res) => res.sendFile(path.join(__dirname, "../public/signup.html")));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});