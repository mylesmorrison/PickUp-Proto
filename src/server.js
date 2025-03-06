const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config({ path: '../.env' });
const connectDb = require("./db/dbConnection"); // ✅ Import DB connection function
const session = require("express-session")

const app = express();

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

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
app.get("/profile", (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")))
app.get("/create", (req, res) => res.sendFile(path.join(__dirname, "../public/create.html")))


// Get the form data from create.html

app.post("/create/submit", (req, res) => {
    const data = req.body
    console.log(data)
    res.sendStatus(200)
})

app.post('/login/practice', (req, res) => {
    const {username, password} = req.body
    if (username && password) {
        if (req.session.authenticated) {
            res.json(req.session)
        } else {
            if (password === "123") {
                req.session.authenticated = true;
                req.sessionID.user = {
                    username, password
                }
                res.json(req.session)
            }
        }
    }
    res.send(200)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});