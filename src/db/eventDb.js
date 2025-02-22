const mongoose = require('mongoose');
const Event = require('../models/eventModel.js');
const  connectDB  = require('./dbConnection.js');


async function getEvents () {
    try {
      
      const events = await Event.find()
      console.log("event lists: ", events)
    } catch(error) {
        console.log("error fetching events:", error.message)
    }
}
connectDB()
getEvents()
