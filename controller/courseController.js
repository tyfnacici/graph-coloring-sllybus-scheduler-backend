const courseService = require("../service/courseService")

exports.createCourse = async (req, res) => {
  try {
    const course = await courseService.createCourse(req.body)
    res.json({ data: course, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getCourseByCourseId = async (req, res) => {
  try {
    const course = await courseService.getCourseByCourseId(req.params.id)
    res.json({ data: course, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateCourse = async (req, res) => {
  try {
    const course = await courseService.updateCourse(req.params.id, req.body)
    res.json({ data: course, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.deleteCourse = async (req, res) => {
  try {
    const course = await courseService.deleteCourse(req.params.id)
    res.json({ data: course, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getAllCourses = async (req, res) => {
  try {
    const course = await courseService.getAllCourses()
    res.json({ data: course, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}