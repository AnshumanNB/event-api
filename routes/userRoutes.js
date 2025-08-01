const {getUser, addUser, loginUser} = require("../controller/usercontroller")

const route = require("express").Router()

route.get("/", getUser)
route.post("/", addUser)
route.post("/login", loginUser)

module.exports = route
