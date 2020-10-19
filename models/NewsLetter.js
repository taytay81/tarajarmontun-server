const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
  prenom: { type: String },
  email: { type: String, required: true },
  date_creation: { type: Date, default: Date.now },
});
const NewsLetter = mongoose.model("NewsLetter", newsletterSchema);

module.exports = NewsLetter;
