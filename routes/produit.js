var express = require("express");
var router = express.Router();
const produitModel = require("../models/Produit");
const produitArticleModel = require("../models/Article");
const produitTypeModel = require("../models/ProduitType");
const produitTailleModel = require("../models/ProduitTaille");
const produitCouleureModel = require("../models/ProduitCouleur");
const produitCompositionModel = require("../models/ProduitComposition");
const uploader = require("../config/cloudinary");
const cors = require("cors");
// adding a product in the product table
const corsOptions = {
  origin: [process.env.CLIENT_URL],
  /* credentials : Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials */
  credentials: true,
  optionsSuccessStatus: 200,
};

router.post("/", cors(corsOptions), uploader.array("image"), (req, res) => {
  const newProduit = req.body;

  var files = req.files[0].secure_url;
  console.log(files);

  console.log("l objet ", newProduit);

  if (req.files) {
    newProduit.image = [];
    newProduit.image.push(req.files[0].secure_url);
    newProduit.image.push(req.files[1].secure_url);
  }

  produitModel
    .create(newProduit)
    .then((produit) => {
      console.log("produit", produit);
      res.status(200).send(produit);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// adding an article using a product Id
router.post("/article", cors(corsOptions), (req, res) => {
  produitArticleModel
    .create(req.body)
    .then((article) => res.status(200).send(article))
    .catch((err) => {
      res.status(500).json(err);
    });
});

//getting all product type

router.get("/type", cors(), (req, res, next) => {
  produitTypeModel
    .find()
    .then((articleType) => {
      res.json({ types: articleType });
    })
    .catch(next);
});

//get les tailles des produits par type
router.get("/taille/:id", cors(), (req, res, next) => {
  produitTailleModel
    .find({ type_article: req.params.id })
    .then((articleTaille) => res.json({ taille: articleTaille }))
    .catch(next);
});

//getting all article color
router.get("/couleur", cors(), (req, res, next) => {
  produitCouleureModel
    .find()
    .then((articleCouleur) => res.json({ couleur: articleCouleur }))
    .catch(next);
});

//add a color

router.post("/couleur", cors(), (req, res, next) => {
  produitCouleureModel
    .create(req.body)
    .then((articleCouleur) => res.status(200).json(articleCouleur))
    .catch(next);
});

//edit a color

router.patch("/couleur/:id", cors(), (req, res, next) => {
  produitCouleureModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((articleCouleur) => res.status(201).json(articleCouleur))
    .catch(next);
});

router.get("/composition", cors(), (req, res, next) => {
  console.log("on a ajoute cors sur cette requete");
  produitCompositionModel
    .find()
    .then((produitComposition) => res.json({ composition: produitComposition }))
    .catch(next);
});

module.exports = router;
