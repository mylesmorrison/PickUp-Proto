const { getUsers } = require("../db/userDb")


const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers()
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "error fetching users: " + error.message })
    }
}

const getUserProfile = (req, res) => {
    const userID = req.params.id;
    res.json()
}

const getUserEvents = (req, res) => {
    
}


module.exports = { getAllUsers }
