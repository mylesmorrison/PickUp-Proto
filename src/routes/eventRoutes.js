const express = require("express");
const { getAllEvents } = require("../controllers/eventController");

const router = express.Router();

// Route to get all events
router.get("/", getAllEvents);

module.exports = router;