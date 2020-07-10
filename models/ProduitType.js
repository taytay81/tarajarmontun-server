const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produitTypeSchema = new Schema({
  type: {
    type: String,
  },

});

const ProduitType = mongoose.model("ProduitType", produitTypeSchema);

module.exports = ProduitType;
