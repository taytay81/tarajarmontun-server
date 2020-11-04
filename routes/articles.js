var express = require("express");
var router = express.Router();
const produitModel = require("../models/Produit");

const produitTypeModel = require("../models/ProduitType");
const produitColorModel = require("../models/ProduitCouleur");
const produitCompositionModel = require("../models/ProduitComposition");
const produitTailleModel = require("../models/ProduitTaille");
const cors = require("cors");
const mongoose = require("mongoose");
router.get("/detail/type/:id", cors(), (req, res, next) => {
  produitTypeModel
    .findOne({ _id: req.params.id }) // this will fetch one type by id
    .then((type) => res.json(type))
    .catch(next); // catched if an error occured );
});
//get specific article type with type Id

//get specific article size with size Id

router.get("/detail/taille/:id", cors(), (req, res, next) => {
  produitTailleModel
    .findOne({ _id: req.params.id }) // this will fetch one taille by id
    .then((taille) => res.json(taille))
    .catch(next); // catched if an error occured );
});

//get specific article composition with composition Id

router.get("/detail/composition/:id", cors(), (req, res, next) => {
  produitCompositionModel
    .findOne({ _id: req.params.id }) // this will fetch one compoisition by id
    .then((compo) => res.json(compo))
    .catch(next); // catched if an error occured );
});

//get specific article couleur with couleur Id

router.get("/detail/couleur/:id", cors(), (req, res, next) => {
  produitColorModel
    .findOne({ _id: req.params.id }) // this will fetch one color by id from db
    .then((color) => res.json(color))
    .catch(next); // catched if an error occured );
});

// get one article with all details
router.get("/detail/:id", cors(), (req, res, next) => {
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
    .then((article) => {
      console.log("article", article);
      console.log(article[0]._id);

      produitModel
        .findByIdAndUpdate(
          article[0]._id,
          { $inc: { click: 1 } },
          { new: true }
        )
        .then((dbRes) => {
          console.log("dbres", dbRes);
          res.status(200).json(article);
        })
        .catch(next);
    })
    .catch(next);
});

//recuper les id des table type /couleur /compo
function retrieveId(collection, field, elt) {
  for (let i = 0; i < collection.length; i++) {
    if (field === "type") {
      if (collection[i].type == elt) return collection[i]._id;
    } else if (field === "couleur") {
      if (collection[i].couleur == elt) return collection[i]._id;
    } else if (field === "composition") {
      if (collection[i].composition == elt) return collection[i]._id;
    }
  }
  return null;
}

/** we are dealing with the search in this section */

// get all articles that match the search
router.get("/recherche/:parametres", cors(), async (req, res, next) => {
  const wordsToSearch = req.params.parametres.split(" ");

  const alltypes = await produitTypeModel.find();
  const allcolors = await produitColorModel.find();
  //pour chaque string il faut chercher le type et la couleur
  //on peut ajouter la composition et tellement plein d elements
  var typeId;
  var colorId;
  for (let i = 0; i < wordsToSearch.length; i++) {
    var localTypeId = retrieveId(
      alltypes,
      "type",
      wordsToSearch[i].toLowerCase()
    );
    var localColorId = retrieveId(
      allcolors,
      "couleur",
      wordsToSearch[i].toLowerCase()
    );
    if (localTypeId) typeId = localTypeId;
    if (localColorId) colorId = localColorId;
  }

  if (typeId && colorId) {
    produitModel
      .aggregate([
        {
          $match: { type: typeId },
          $match: { couleur: colorId },
        },
        {
          $lookup: {
            from: "articles",
            localField: "_id",
            foreignField: "produit",
            as: "articles",
          },
        },
        {
          $match: {
            "articles.disponible": true,
          },
        },
      ])
      .then((lesArticles) => {
        res.json(lesArticles);
        /* if (lesArticles.length > 0) {
          console.log("tralala");
          res.json(lesArticles);
        } else {
          produitModel
            .aggregate([
              {
                $match: { titre: wordsToSearch[wordsToSearch.length - 1] },
                $match: { titre: wordsToSearch[wordsToSearch.length - 2] },
              },
              {
                $lookup: {
                  from: "articles",
                  localField: "_id",
                  foreignField: "produit",
                  as: "articles",
                },
              },
              {
                $match: {
                  "articles.disponible": true,
                },
              },
            ])
            .then((lesArticles) => res.json(lesArticles))
            .catch(next);
          console.log("trilili");
        }*/
      })
      .catch(next);
  } else if (typeId) {
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
            as: "articles",
          },
        },
        {
          $match: {
            "articles.disponible": true,
          },
        },
      ])
      .then((lesArticles) => res.json(lesArticles))
      .catch(next);
  } else if (colorId) {
    produitModel
      .aggregate([
        {
          $match: { couleur: colorId },
        },
        {
          $lookup: {
            from: "articles",
            localField: "_id",
            foreignField: "produit",
            as: "articles",
          },
        },
        {
          $match: {
            "articles.disponible": true,
          },
        },
      ])
      .then((lesArticles) => res.json(lesArticles))
      .catch(next);
  }

  //retrieve each search parameters
  //search in the different fields and retrieve the product
  //search for articles available based on the product found
});

/**Affichage page d accueil les differentes sections  */

//get all available articles that match the robe type

router.get("/robes", cors(), async (req, res, next) => {
  const alltypes = await produitTypeModel.find();
  var typeId = retrieveId(alltypes, "type", "robe");
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
  }
});

// get the 8 most clicked items to include in the most wanted section
router.get("/MostWanted", cors(), async (req, res, next) => {
  produitModel
    .aggregate([
      {
        $sort: { click: -1 },
      },
      { $limit: 8 },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "produit",
          as: "mostwanted",
        },
      },
      {
        $match: {
          "mostwanted.disponible": true,
        },
      },
    ])
    .then((mostwantedRes) => res.json(mostwantedRes))
    .catch(next);
});

//get all available articles that match the manteaux et veste type
router.get("/manteauVeste", cors(), async (req, res, next) => {
  const alltypes = await produitTypeModel.find();
  var typeIdm = retrieveId(alltypes, "type", "manteaux");
  var typeIdv = retrieveId(alltypes, "type", "veste");
  if (typeIdm != null || typeIdv != null) {
    produitModel
      .aggregate([
        {
          $match: {
            $or: [{ type: typeIdm }, { type: typeIdv }],
          },
        },

        {
          $lookup: {
            from: "articles",
            localField: "_id",
            foreignField: "produit",
            as: "mv",
          },
        },
        {
          $match: {
            "mv.disponible": true,
          },
        },
      ])
      .then((allmv) => res.json(allmv))
      .catch(next);
  }
});

//get all available articles that matches the maille type

router.get("/maille", cors(), async (req, res, next) => {
  const alltypes = await produitTypeModel.find();
  var typeIdpull = retrieveId(alltypes, "type", "pull");
  var typeIdcardigan = retrieveId(alltypes, "type", "cardigan");
  var typeIdsweat = retrieveId(alltypes, "type", "sweat");

  if (typeIdpull != null || typeIdcardigan != null || typeIdsweat != null) {
    produitModel
      .aggregate([
        {
          $match: {
            $or: [
              { type: typeIdpull },
              { type: typeIdcardigan },
              { type: typeIdsweat },
            ],
          },
        },

        {
          $lookup: {
            from: "articles",
            localField: "_id",
            foreignField: "produit",
            as: "mailles",
          },
        },
        {
          $match: {
            "mailles.disponible": true,
          },
        },
      ])
      .then((allmailles) => res.json(allmailles))
      .catch(next);
  }
});

//get all available articles that matches the top type

router.get("/top", cors(), async (req, res, next) => {
  const alltypes = await produitTypeModel.find();
  var typeIdtshirt = retrieveId(alltypes, "type", "tshirt");
  var typeIdtop = retrieveId(alltypes, "type", "top");
  var typeIdchemise = retrieveId(alltypes, "type", "chemise");
  var typeIdsweat = retrieveId(alltypes, "type", "sweat");

  if (
    typeIdtshirt != null ||
    typeIdtop != null ||
    typeIdsweat != null ||
    typeIdchemise != null
  ) {
    produitModel
      .aggregate([
        {
          $match: {
            $or: [
              { type: typeIdtshirt },
              { type: typeIdtop },
              { type: typeIdsweat },
              { type: typeIdchemise },
            ],
          },
        },

        {
          $lookup: {
            from: "articles",
            localField: "_id",
            foreignField: "produit",
            as: "top",
          },
        },
        {
          $match: {
            "top.disponible": true,
          },
        },
      ])
      .then((alltop) => res.json(alltop))
      .catch(next);
  }
});

router.get("/bas", cors(), async (req, res, next) => {
  const alltypes = await produitTypeModel.find();
  var typeIdpantalon = retrieveId(alltypes, "type", "pantalon");
  var typeIdjupe = retrieveId(alltypes, "type", "jupe");
  var typeIdshort = retrieveId(alltypes, "type", "short");

  if (typeIdpantalon != null || typeIdjupe != null || typeIdshort != null) {
    produitModel
      .aggregate([
        {
          $match: {
            $or: [
              { type: typeIdpantalon },
              { type: typeIdjupe },
              { type: typeIdshort },
            ],
          },
        },

        {
          $lookup: {
            from: "articles",
            localField: "_id",
            foreignField: "produit",
            as: "bas",
          },
        },
        {
          $match: {
            "bas.disponible": true,
          },
        },
      ])
      .then((allbas) => res.json(allbas))
      .catch(next);
  }
});

// get  all available articles that match the accessoire type

router.get("/accessoire", cors(), async (req, res, next) => {
  const alltypes = await produitTypeModel.find();
  var typeIdc = retrieveId(alltypes, "type", "ceinture");
  var typeIdl = retrieveId(alltypes, "type", "lunettes");
  var typeIdat = retrieveId(alltypes, "type", "acc. textile");
  var typeIdb = retrieveId(alltypes, "type", "bijoux");
  var typeIds = retrieveId(alltypes, "type", "sac");

  if (
    typeIdc != null ||
    typeIdl != null ||
    typeIdat != null ||
    typeIdb != null ||
    typeIds != null
  ) {
    produitModel
      .aggregate([
        {
          $match: {
            $or: [
              { type: typeIdc },
              { type: typeIdl },
              { type: typeIdat },
              { type: typeIdb },
              { type: typeIds },
            ],
          },
        },

        {
          $lookup: {
            from: "articles",
            localField: "_id",
            foreignField: "produit",
            as: "access",
          },
        },
        {
          $match: {
            "access.disponible": true,
          },
        },
      ])
      .then((allaccess) => res.json(allaccess))
      .catch(next);
  }
});

// get the 15 latest inserted article to print in the new In
router.get("/newIn", cors(), async (req, res, next) => {
  produitModel
    .aggregate([
      {
        $sort: { _id: -1 },
      },
      { $limit: 15 },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "produit",
          as: "newIn",
        },
      },
      {
        $match: {
          "newIn.disponible": true,
        },
      },
    ])
    .then((newInRes) => res.json(newInRes))
    .catch(next);
});

module.exports = router;
