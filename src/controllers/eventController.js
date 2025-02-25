const { getEvents } = require("../db/eventDb")

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

const addEvent = (req, res) => {

}

const deleteEvent = (req, res) => {

}

const updateEvent = (req, res) => {

}

const joinEvent = (req, res) => {

}

const leaveEvent = (req, res) => {
    
}


module.exports = { getAllEvents }