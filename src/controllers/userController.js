const { getUsers, getUserById } = require("../db/userDb")


const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers()
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "error fetching users: " + error.message })
    }
}

const getUserProfile = async (req, res) => {

    const userId = req.params.user_id;
    console.log(userId)
}

const getUserEvents = (req, res) => {
    
}



module.exports = { getAllUsers, getUserProfile }
