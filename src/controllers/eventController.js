const { getEvents, addEvent } = require("../db/eventDb")

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

const createEvent = async (req, res) => {
    try {
        const data = req.body
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