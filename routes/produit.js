var express = require("express");
var router = express.Router();
const produitModel = require("../models/Produit");
const produitArticleModel = require("../models/Article");
const produitTypeModel = require("../models/ProduitType");
const produitTailleModel = require("../models/ProduitTaille");
const produitCouleureModel = require("../models/ProduitCouleur");
const produitCompositionModel = require("../models/ProduitComposition");
const uploader = require("../config/cloudinary");

// adding a product in the product table
router.post("/", uploader.single("image"), (req, res) => {
  const newArticle = req.body;

  if (req.file) newArticle.image = req.file.secure_url;

  produitModel
    .create(newArticle)
    .then((article) => {
      res.status(200).send(article);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// adding an article using a product Id
router.post("/article", (req, res, next) => {
  produitArticleModel
    .create(req.body)
    .then((article) => res.status(200).json(article))
    .catch(next);
});

//getting all product type

router.get("/type", (req, res, next) => {
  produitTypeModel
    .find()
    .then((articleType) => {
      res.json({ types: articleType });
    })
    .catch(next);
});

//get les tailles des produits par type
router.get("/taille/:id", (req, res, next) => {
  produitTailleModel
    .find({ type_article: req.params.id })
    .then((articleTaille) => res.json({ taille: articleTaille }))
    .catch(next);
});

//getting all article color
router.get("/couleur", (req, res, next) => {
  produitCouleureModel
    .find()
    .then((articleCouleur) => res.json({ couleur: articleCouleur }))
    .catch(next);
});

//add a color

router.post("/couleur", (req, res, next) => {
  produitCouleureModel
    .create(req.body)
    .then((articleCouleur) => res.status(200).json(articleCouleur))
    .catch(next);
});

//edit a color

router.patch("/couleur/:id", (req, res, next) => {
  produitCouleureModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((articleCouleur) => res.status(201).json(articleCouleur))
    .catch(next);
});

router.get("/composition", (req, res, next) => {
  produitCompositionModel
    .find()
    .then((produitComposition) => res.json({ composition: produitComposition }))
    .catch(next);
});

module.exports = router;
