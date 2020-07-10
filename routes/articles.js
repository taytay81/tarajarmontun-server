var express = require("express");
var router = express.Router();
const produitModel = require("../models/Produit");
const articleModel = require("../models/Article");
const produitTypeModel = require("../models/ProduitType");
const mongoose = require("mongoose");

// get one article with all details
router.get("/detail/:id", (req, res, next) => {
  console.log(req.params.id);
  produitModel
    .aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "produit",
          as: "article_size",
        },
      },
      {
        $match: {
          "article_size.disponible": true,
        },
      },
    ])
    .then((article) => res.json(article))
    .catch(next);
});

//recuperer les types
//get les robes disponibles
//on doit recuperer les produits type robe ensuite les articles dispo
//recupere toutes les robes affichees sur la page robe
function retrieveTypeId(allTypes, type) {
  for (let i = 0; i < allTypes.length; i++) {
    if (allTypes[i].type == type) return allTypes[i]._id;
  }
  return null;
}
router.get("/robes", async (req, res, next) => {
  const alltypes = await produitTypeModel.find();
  var typeId = retrieveTypeId(alltypes, "robe");
  if (typeId != null) {
    produitModel
      .aggregate([
        {
          $match: { type: typeId },
        },
        {
          $lookup: {
            from: "articles",
            localField: "_id",
            foreignField: "produit",
            as: "dresses",
          },
        },
        {
          $match: {
            "dresses.disponible": true,
          },
        },
      ])
      .then((allDress) => res.json(allDress))
      .catch(next);
    /*articleModel

      .find({ disponible: true })
      .populate({
        path: "produit",
        match: { type: typeId },
      })
      .then((allDress) => res.json(allDress))
      .catch(next);*/
  }
});

module.exports = router;
