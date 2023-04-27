const mongoose = require("mongoose");

// Define the schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// Create a model from the schema
module.exports = mongoose.model("Task", taskSchema);
