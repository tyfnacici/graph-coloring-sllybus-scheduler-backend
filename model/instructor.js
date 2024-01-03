const mongoose = require('mongoose');

const {Schema} = mongoose;

const instructorSchema = new Schema({
  isim: { type: String, required: true },
  haftaici_musait_gunler: { type: Array, default: [] },
  saat_araliklari: { type: Array, default: [] }
});
  
  module.exports = mongoose.model("Instructor", instructorSchema)