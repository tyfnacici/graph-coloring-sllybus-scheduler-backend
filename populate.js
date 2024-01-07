const mongoose = require("mongoose")
const Course = require("./model/course")
const Instructor = require("./model/instructor")
require("dotenv").config()

const dersler = [
  {
    ders_ismi: "Veri Bilimi",
    ogrenci_sayisi: 20,
    sinif: "A",
    egitmen_id: "659a877d3c3a6eba71142483",
  },
  {
    ders_ismi: "Programlama",
    ogrenci_sayisi: 30,
    sinif: "B",
    egitmen_id: "659a877d3c3a6eba71142484",
  },
  {
    ders_ismi: "Matematik",
    ogrenci_sayisi: 40,
    sinif: "C",
    egitmen_id: "659a877d3c3a6eba71142485",
  },
  {
    ders_ismi: "Fizik",
    ogrenci_sayisi: 50,
    sinif: "D",
    egitmen_id: "659a877d3c3a6eba71142486",
  },
  {
    ders_ismi: "Kimya",
    ogrenci_sayisi: 60,
    sinif: "E",
    egitmen_id: "659a877d3c3a6eba71142483",
  },
  {
    ders_ismi: "Biyoloji",
    ogrenci_sayisi: 70,
    sinif: "F",
    egitmen_id: "659a877d3c3a6eba71142484",
  },
  {
    ders_ismi: "Tarih",
    ogrenci_sayisi: 80,
    sinif: "G",
    egitmen_id: "659a877d3c3a6eba71142485",
  },
]

// Rest of your code remains unchanged

const populateData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove useFindAndModify option
    })

    console.log("Connected to MongoDB")

    // Dersleri kaydet
    await Course.insertMany(dersler)

    // Eğitmenleri kaydet
    // await Instructor.insertMany(egitmenler)

    console.log("Data populated successfully.")
  } catch (error) {
    console.error("Error while populating data:", error)
  } finally {
    // After saving data, close the connection
    await mongoose.connection.close()
    console.log("MongoDB connection closed.")
  }
}

// Invoke the async function
populateData()
