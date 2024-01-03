const courseModel = require("../model/course")

exports.createCourse = async (course) => courseModel.create(course)

exports.findCourseByID = async (id) => courseModel.findOne({ _id: id })

exports.updateCourse = async (id, course) =>
  courseModel.findOneAndUpdate({ id }, course, { new: true })

exports.deleteCourse = async (id) => courseModel.findOneAndDelete(id)

exports.getAllCourses = async () => courseModel.find()