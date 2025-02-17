const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        user_id: {
            type: Number,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        created_at: {
            type: String,
            required: true
        }
    }
)

const User = mongoose.model("Users", userSchema, "Users");

module.exports = User