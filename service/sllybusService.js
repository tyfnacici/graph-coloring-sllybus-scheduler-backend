const Course = require("../model/course")
const Instructor = require("../model/instructor")

exports.createSllybus = async () => {
  const findCourseOrder = (numCourses, prerequisites) => {
    let countIncomingCounts = {}
    let result = []
    let possibleQueue = []
    let graph = {}

    for (let x = 0; x < prerequisites.length; x++) {
      let i = prerequisites[x]

      if (graph[i[1]] != null) {
        graph[i[1]].push(i[0])
      } else {
        graph[i[1]] = [i[0]]
      }

      if (countIncomingCounts[i[0]]) {
        countIncomingCounts[i[0]]++
      } else {
        countIncomingCounts[i[0]] = 1
      }
    }

    for (let i = 0; i < numCourses; i++) {
      if (!countIncomingCounts[i] || countIncomingCounts[i] == 0) {
        possibleQueue.push(i)
      }
    }

    while (possibleQueue.length !== 0) {
      let top = possibleQueue.shift(0)
      result.push(top)

      for (let i = 0; graph[top] && i < graph[top].length; i++) {
        let adj = graph[top][i]
        countIncomingCounts[adj] = countIncomingCounts[adj] - 1

        if (countIncomingCounts[adj] === 0) {
          possibleQueue.push(adj)
        }
      }
    }

    return result.length !== numCourses ? [] : result
  }

  try {
    const courses = await Course.find()
    const instructors = await Instructor.find()

    const prerequisites = courses.map((course) => ({
      course: course._id.toString(),
      prerequisites: (course.onceki_dersler || []).map((prerequisite) =>
        prerequisite.toString()
      ),
    }))

    const numCourses = courses.length
    const courseOrder = findCourseOrder(numCourses, prerequisites)

    if (!courseOrder.length) {
      throw new Error(
        "Cannot create schedule, prerequisites have cyclic dependencies."
      )
    }

    const weeklySchedule = {}
    let currentDay = 1
    let currentHour = 1

    for (const courseId of courseOrder) {
      const course = courses.find((c) => c._id.toString() === courseId)

      if (!course || !course.ders_ismi) {
        console.log("Skipping invalid course.")
        continue
      }

      const instructor = instructors.find(
        (inst) => inst._id.toString() === course.egitmen_id.toString()
      )

      if (!instructor) {
        console.log("Skipping course without instructor.")
        continue
      }

      if (
        instructor.haftaici_musait_gunler.includes(currentDay.toString()) &&
        instructor.saat_araliklari.includes(`${currentHour}-${currentHour + 1}`)
      ) {
        weeklySchedule[currentDay] = weeklySchedule[currentDay] || []
        weeklySchedule[currentDay].push({
          Ders_Ismi: course.ders_ismi,
          Saat_Araligi: `${currentHour}-${currentHour + 1}`,
          Sinif: course.sinif,
        })

        currentHour++
        if (currentHour > 9) {
          currentDay++
          currentHour = 1
        }
      }
    }

    return weeklySchedule
  } catch (error) {
    console.error("Error creating schedule:", error)
    return {}
  }
}
