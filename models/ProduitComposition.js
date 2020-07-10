const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produitCompositionSchema = new Schema({
  composition: {
    type: String,
  },
});

const ProduitComposition = mongoose.model(
  "ProduitComposition",
  produitCompositionSchema
);

module.exports = ProduitComposition;
