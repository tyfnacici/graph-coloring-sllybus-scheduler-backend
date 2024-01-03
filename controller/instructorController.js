const instructorService = require("../service/instructorService")

exports.createInstructor = async (req, res) => {
  try {
    const instructor = await instructorService.createInstructor(req.body)
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getInstructorByinstructorId = async (req, res) => {
  try {
    const instructor = await instructorService.getInstructorByInstructorId(
      req.params.id
    )
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateInstructor = async (req, res) => {
  try {
    const instructor = await instructorService.updateInstructor(
      req.params.id,
      req.body
    )
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.deleteInstructor = async (req, res) => {
  try {
    const instructor = await instructorService.deleteInstructor(req.params.id)
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getAllInstructors = async (req, res) => {
  try {
    const instructor = await instructorService.getAllInstructors()
    res.json({ data: instructor, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}