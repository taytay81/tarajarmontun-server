const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produitTailleSchema = new Schema({
  taille: { 
    type: String
  },
  type_article: 
    {
      type: Schema.Types.ObjectId,
      ref: "ProduitType",
    },
  
});

const ProduitTaille = mongoose.model("ProduitTaille", produitTailleSchema);

module.exports = ProduitTaille;
