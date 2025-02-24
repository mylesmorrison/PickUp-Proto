const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
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
        }
    }
)

const User = mongoose.model("Users", userSchema, "Users");

module.exports = User