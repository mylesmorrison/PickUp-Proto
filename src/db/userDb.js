const mongoose = require('mongoose');
const User = require('../models/userModel.js');
const connectDB = require('./dbConnection.js')

async function getUsers() {
  try {
    const users = await User.find()
    console.log("users list: ", users)
  } catch(error) {
      console.log("error fetching users:", error.message)
  }
}

async function getUserById(user_id) {
  try {
    const user = await User.findById(user_id)
    if(!user) {
      console.log("user not found!")
    } else {
      console.log("user: ", user)
    }
    
  } catch(error) {
    console.log("error fetching user: ", error.message)
  }
}

async function getEmailByUsername(username) {
  try {
    const user = await User.findOne({ username })
    if (!user) {
      console.log("user not found")
    } else {
      console.log("user: ", user["email"])
      // or can do 
      // console.log("user: ", user.email)
    }
  } catch(error) {
    console.log("error fetching user: ", error.message)
  }
}

async function addUser(username, email, password, bio, age) {
  try {
    const existingUser = await User.findOne({ email }) 
    if (existingUser) {
      console.log("user already exists with this email!")
      return null
    } else {
      const newUser = new User({
        username, 
        email,
        password,
        bio,
        age
      })
      await newUser.save()
      console.log("user added successfully!", newUser)
      return newUser
    }
  } catch(error) {
    console.log("error adding user: ", error.message)
  }
}

async function deleteUser(user_id) {
  try {
    const existingUser = await User.findById(user_id) 
    if (!existingUser) {
      console.log("no user exists!")
      return null
    } else {
      
      const result = await User.deleteOne( {_id: user_id})
      if (result.deletedCount === 0) {
        console.log(" user not found, nothing deleted.");
        return { success: false, message: "User not found" };
      }
      console.log("user deleted successfully.");
      return { success: true, message: "User deleted" };
    }
  } catch(error) {
    console.log("error deleting user: ", error.message)
  }
}



connectDB()
getUsers()
getUserById("67b28fae767d1d56e3efe03d")
getEmailByUsername("AliceW")

/** 
addUser(
  "JohnDoe",                   // Username
  "john.doe@smooch.com",       // Email
  "securepassword123",         // Password (hash it before storing)
  "Loves playing football",    // Bio
  28                           // Age
);
**/

