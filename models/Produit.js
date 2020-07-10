const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produitSchema = new Schema({
  reference: { type: String, required: true },
  image: {
    type: String,
    default:
      "https://s1.qwant.com/thumbr/0x380/3/e/38241f096fcbc253212fd57ad2acbab0a7fdf0eab51d8e9790ab3f01027e75/default.jpeg?u=https%3A%2F%2Flargeasse.fr%2Fwp-content%2Fuploads%2F2015%2F05%2Fdefault.jpeg&q=0&b=1&p=0&a=1",
  },
  titre: { type: String, required: true },
  description: { type: String, required: true },
  composition: {
    type: Schema.Types.ObjectId,
    ref: "ProduitComposition",
    required: true,
  },
  couleur: {
    type: Schema.Types.ObjectId,
    ref: "ProduitCouleur",
    required: true,
  },
  prix: { type: Number, required: true },
  type: { type: Schema.Types.ObjectId, ref: "ProduitType", required: true },
});

const Produit = mongoose.model("Produit", produitSchema);

module.exports = Produit;
