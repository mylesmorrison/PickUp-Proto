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
    const user_id = req.params.user_id
    try {
        console.log("Fetching user with ID:", user_id); // Debugging log
        const user = await getUserById(user_id); // Fetch from database

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user); // Send user data as JSON
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Server error" });
    }
}

const getUserEvents = (req, res) => {
    
}



module.exports = { getAllUsers, getUserProfile }
