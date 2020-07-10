require("dotenv").config();
require("../../config/mongo");
//DB MODEL IMPORT
const ArticletypeModel = require("../../models/ProduitType");
const ArticlecouleurModel = require("../../models/ProduitCouleur");
const ArticlecompositionModel = require("../../models/ProduitComposition");
const ArticleTailleModel = require("../../models/ProduitTaille");

const articleCouleur = [
  "beige",
  "blanc",
  "bleu nuit",
  "camel",
  "ecru",
  "gris",
  "jaune",
  "noir",
  "orange",
  "rose",
  "rouge",
  "vert",
  "violet",
];
const articleType = [
  "robe",
  "veste",
  "manteaux",
  "pull",
  "cardigan",
  "chemise",
  "top",
  "tshirt",
  "sweat",
  "short",
  "pantalon",
  "jupe",
  "chaussures",
  "bijoux",
  "ceinture",
  "sac",
  "acc. textile",
  "ceinture",
  "lunettes",
];
const articleComposition = ["100% soie", "100% cotton"];
//chaussure
const chaussureTaille = ["36", "37", "38", "39", "40", "41"];
//article en general
const pullTaille = ["s", "m", "l"];
const articleTaille = ["s", "m", "l", "34", "36", "38", "40", "42", "44"];
//
const sacTaille = ["tu"];

const articleTypefinal = [];
const articleCouleurfinal = [];
const articleCompositionfinal = [];
const articleTaillefinal = [];

// SEEDING FUNCTIONS

function seedRobeTaille() {
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d274",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}

function seedArticleType() {
  articleType.forEach((type) => articleTypefinal.push({ type: type }));
  ArticletypeModel.insertMany(articleTypefinal);
}
function seedArticleCouleur() {
  articleCouleur.forEach((couleur) =>
    articleCouleurfinal.push({ couleur: couleur })
  );
  ArticlecouleurModel.insertMany(articleCouleurfinal);
}
function seedArticleComposition() {
  articleComposition.forEach((compo) =>
    articleCompositionfinal.push({ composition: compo })
  );
  ArticlecompositionModel.insertMany(articleCompositionfinal);
}

// SEED FUNCTION CALLS in comment when seeding has been done
//seedArticleType();
//seedArticleCouleur();
//seedArticleComposition();
seedRobeTaille();
