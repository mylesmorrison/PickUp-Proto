const mongoose = require('mongoose');
const Users = require('../models/userModel.js');

// Adds a new user the database
async function userAdd(username, password) {
    try {
      
      // Do checks here
  
      const userData = {
        username,
        password
      };
  
      const newUser = new User(userData);
      
      
    } catch (error) {
      return { error: `Error adding user: ${error.message}` };
    }
  }

async function userDelete(username) {
  try {
    // do checks for valid delete
  } catch (error) {
    return { error: `Error deleting user: ${error.message}` };
  }
}

