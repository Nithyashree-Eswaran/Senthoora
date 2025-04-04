const mongoose = require("mongoose");

const LawyerSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  specialization: String,
});

module.exports = mongoose.model("Lawyer", LawyerSchema);

