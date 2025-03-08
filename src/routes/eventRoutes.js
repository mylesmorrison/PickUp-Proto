const express = require("express");
const { getAllEvents, createEvent } = require("../controllers/eventController");

const router = express.Router();

// Route to get all events
router.get("/", getAllEvents);
router.post("/create", createEvent)

module.exports = router;