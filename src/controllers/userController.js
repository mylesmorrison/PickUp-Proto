const { getUsers, getUserById, getUserByUsername } = require("../db/userDb")


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
        //console.log("Fetching user with ID:", user_id); // Debugging log
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

const getUserEvents = async (req, res) => {
    
}

const loginUser = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Missing username or password" });
    }
    try {
        const user = await getUserByUsername(username); // Retrieve user from DB

        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid username or password" });
        }

        // Start a session after successful login
        req.session.user = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        console.log(user._id)


        return res.json({ success: true, message: "Login successful" });

    } catch (error) {
        console.error("Login error:", error.message);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

}

const getSessionUser = async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ success: false, message: "No user logged in" });
    }

    res.json({ success: true, user: req.session.user });
};



module.exports = { getAllUsers, getUserProfile, loginUser, getSessionUser }
