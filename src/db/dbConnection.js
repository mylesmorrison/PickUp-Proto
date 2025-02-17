const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const User = require('../models/userModel.js');
require('dotenv').config();

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://Myles:germany@cluster0.14ksq.mongodb.net/PickUpProtoDB", {
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

async function main() {
  await connectDB()
  await getUsers()
  process.exit()
}

main()


