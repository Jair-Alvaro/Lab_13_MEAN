const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String },
  platform: { type: String },
  releaseDate: { type: Date },
  imageUrl: { type: String }
});

module.exports = mongoose.model('Item', itemSchema);
