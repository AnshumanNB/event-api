const jwt = require("jsonwebtoken")


async function isSuperAdmin(req,res,next) {
    try {
        const token = req.header("auth-token")
        const user = await jwt.decode(token)
        console.log("user", user)
        if (user.role != "superAdmin") return res.status(500).json({errors: true, message: "You are not authorized to carry out this function"})
        next()
    } catch (error) {
        return res.status(500).json({errors: true, message: error.message})
    }
}

module.exports = isSuperAdmin