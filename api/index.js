const express = require("express")
const courses = require("./courses")
const instructor = require("./instructor")
const { createWeeklySchedule } = require("../controller/sllybusController")

const router = express.Router()

router.get("/", (req, res) => res.end("hello"))
router.get("/sllybus", createWeeklySchedule)

router.use("/api/course", courses)
router.use("/api/instructor", instructor)

module.exports = router
