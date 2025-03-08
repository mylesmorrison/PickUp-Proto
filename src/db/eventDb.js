const mongoose = require('mongoose');
const Event = require('../models/eventModel.js');
//const  connectDB  = require('./dbConnection.js');


async function getEvents () {
    try {
      
      const events = await Event.find()
      console.log("event lists: ", events)
      return events
    } catch(error) {
        console.log("error fetching events:", error.message)
    }
}

async function getEventById(event_id) {
  try {
    const event = await Event.findById(event_id)
  if (!event) {
    console.log("event not found!")
    return null
  } else {
    console.log("event: ", event)
    return event
  }
  } catch (error) {
     console.log("error fetching event: ", error.message)
  }
}

async function getEventNamesByEventDate(event_date) {
  try {
    const events = await Event.find({event_date})
    if (events.length === 0) {
      console.log("No events found on this date")
      return []
    } else {
      console.log(`events on ${event_date}`, events)
      return events
    }
  } catch (error) {
    console.log("error fetching event name: ", error.message)
  }
}

async function addEvent(event_name, event_date, event_location, event_description) {
  try {
    const newEvent = new Event({
      event_name, 
      event_date,
      event_location,
      event_description
    })
    await newEvent.save()
    console.log("new event added successfully")
    return newEvent

  } catch (error) {
    console.log("error adding event: ", error.message)
  }
}

async function deleteEvent(event_id) {
  try {
    const existingEvent = await Event.findById(event_id) 
    if (!existingEvent) {
      console.log("no event exists!")
      return null
    } else {
      
      const result = await Event.deleteOne( {_id: event_id})
      if (result.deletedCount === 0) {
        console.log(" event not found, nothing deleted.");
        return { success: false, message: "event not found" };
      }
      console.log("event deleted successfully.");
      return { success: true, message: "event deleted" };
    }
  } catch(error) {
    console.log("error deleting event: ", error.message)
  }
}

//connectDB()
//getEvents()
//getEventById('67ba5ae297ed44d10a986e26')
//getEventNamesByEventDate('2025-02-15')
//addEvent()
/** 
addEvent(
  "Sunday Football League",    // Event Name
  "2025-02-10",                // Event Date (String)
  "Central Park, NY",          // Event Location
  "Join us for a friendly football league every Sunday afternoon." // Event Description
);
**/

module.exports = { getEvents, addEvent }