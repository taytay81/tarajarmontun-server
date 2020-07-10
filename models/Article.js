const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  produit: {
    type: Schema.Types.ObjectId,
    ref: "Produit",
    required: true,
  },

  taille: {
    type: Schema.Types.ObjectId,
    ref: "ProduitTaille",
    required: true,
  },
  disponible: {
    type: Boolean,
    default: true,
    required: true,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
