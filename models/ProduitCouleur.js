const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produitCouleurSchema = new Schema({
  couleur: {
    type: String,
  },
});

const ProduitCouleur = mongoose.model("ProduitCouleur", produitCouleurSchema);

module.exports = ProduitCouleur;


