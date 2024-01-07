const sllybusService = require("../service/sllybusService")

exports.createWeeklySchedule = async (req, res) => {
  try {
    const sllybus = await sllybusService.createSllybus()
    res.json({ data: sllybus, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
