const instructorModel = require("../model/instructor")
const mongoose = require("mongoose")


exports.createInstructor = async (instructor) =>
  instructorModel.create(instructor)

exports.findInstructorByID = async (id) => instructorModel.findOne({ _id: id })

exports.updateInstructor = async (id, instructor) =>
  instructorModel.findOneAndUpdate(
    { _id: id },
    { $set: instructor },
    { new: true }
  )

exports.deleteInstructor = async (id) => instructorModel.findOneAndDelete(id)

exports.getAllInstructors = async () => instructorModel.find()
