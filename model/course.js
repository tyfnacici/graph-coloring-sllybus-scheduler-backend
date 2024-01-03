const mongoose = require('mongoose');

const {Schema} = mongoose;

const courseSchema = new Schema({
  ders_ismi: { type: String, required: true },
  ogrenci_sayisi: { type: Number, required: true },
  sinif: { type: String, required: true },
  egitmen_id: { type: mongoose.Types.ObjectId, ref: "Instructor" }
});
  
  module.exports = mongoose.model("Course", courseSchema)