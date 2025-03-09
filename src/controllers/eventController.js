// import database functions 
const { getEvents, addEvent } = require("../db/eventDb")

/**
 * Fetch all events from db then return them as JSON.
 * @route GET /events.
 * @param {Object} req - Express request object.
 * @param {Object} res - Expres response object.
 */
const getAllEvents = async (req, res) => {
    try {
        const events = await getEvents()
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "error fetching events: " + error.message })
    }
}

const getEventInformation = (req, res) => {
    
}

/**
 * addEvent to the database and then send response message.
 * @route POST /events/create
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createEvent = async (req, res) => {
    try {
        const data = req.body
        //validate inputs 

        if (!data.event_name || !data.event_date || !data.event_location || data.event_desc) {
            return res.status(400).json({ error: "All fields are required: event_name, event_date, event_location, event_desc" })
        }
        const event = await addEvent(data.event_name, data.event_date, data.event_location, data.event_desc)
        console.log(event)
        res.json({"response": "successful"})
    } catch (error) {
        res.status(500).json({ error: "error adding event: " + error.message })
    }
}

const deleteEvent = (req, res) => {

}

const updateEvent = (req, res) => {

}

const joinEvent = (req, res) => {

}

const leaveEvent = (req, res) => {
    
}




module.exports = { getAllEvents, createEvent }