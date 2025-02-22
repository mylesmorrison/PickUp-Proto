const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const User = require('../models/userModel.js');
require('dotenv').config({ path: '../../.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("MongoDB Connected!");
    console.log(mongoose.connection.name)
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

async function getUsers() {
  try {
    const users = await User.find()
    console.log("users lists: ", users)
  } catch(error) {
    console.log("error fetching users:", error.message)
  }
}

module.exports = connectDB


