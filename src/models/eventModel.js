const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        event_id: {
            type: Number,
            required: true
        },
        user_id: {
            type: Number, 
            required: true
        },
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