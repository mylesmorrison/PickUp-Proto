const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        user_id: {
            type: Number,
            required: true
        }, 
        event_id: {
            type: Number,
            required: true
        },
        joined_at: {
            type: Number,
            required: true
        }
    }
)