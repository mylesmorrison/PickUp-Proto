const express = require("express");
const app = express();

app.use(express.static("public")); // Serve files from 'public' folder

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});