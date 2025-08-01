const {getClub, postClub, updateClub, deleteClub} = require("../controller/clubController")
const auth = require("../middleware/auth")
const isSuperAdmin = require("../middleware/superAdmin")

const route = require("express").Router()

route.get("/", [auth, isSuperAdmin], getClub)
route.post("/", [auth, isSuperAdmin], postClub)
route.put("/:id", [auth, isSuperAdmin], updateClub)
route.delete("/:id", [auth, isSuperAdmin], deleteClub)

module.exports = route