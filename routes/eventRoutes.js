const {getEvent, addEvent, updateEvent, deleteEvent} = require("../controller/eventController")
const isAdmin = require("../middleware/admin")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/", [auth, isAdmin], getEvent)
route.post("/", [auth, isAdmin], addEvent)
route.put("/:id", [auth, isAdmin], updateEvent)
route.delete("/:id", [auth, isAdmin], deleteEvent)

module.exports = route