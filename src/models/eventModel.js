const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        event_name: {
            type: String,
            required: true
        },
        event_date: {
            type: String,
            required: true
        },
        event_location: {
            type: String,
            required: true
        },
        event_description: {
            type: String, 
            required: true
        }
    }
)


const Event = mongoose.model("Events", eventSchema, "Events");

module.exports = Event