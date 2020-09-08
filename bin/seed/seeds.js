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
const ceinturetaille = ["70", "80", "90"];

const articleTypefinal = [];
const articleCouleurfinal = [];
const articleCompositionfinal = [];

// SEEDING FUNCTIONS

function seedRobeTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d274",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}

function seedVesteTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d275",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedManteauTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d276",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedPullTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d277",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedChemiseTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d279",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedCardiganTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d278",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedTopTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d27a",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedtshirtTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d27b",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedSweatTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d27c",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedshortTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d27d",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedpantalonTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d27e",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedjupeTaille() {
  const articleTaillefinal = [];
  articleTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d27f",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedchaussureTaille() {
  const articleTaillefinal = [];
  chaussureTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d280",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedBijouxTaille() {
  const articleTaillefinal = [];
  sacTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d281",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedsacTaille() {
  const articleTaillefinal = [];
  sacTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d283",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedceintureTaille() {
  const articleTaillefinal = [];
  ceinturetaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d282",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedlunetteTaille() {
  const articleTaillefinal = [];
  sacTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d286",
    })
  );
  ArticleTailleModel.insertMany(articleTaillefinal);
}
function seedaccesstextileTaille() {
  const articleTaillefinal = [];
  sacTaille.forEach((taille) =>
    articleTaillefinal.push({
      taille: taille,
      type_article: "5ec5782030b9460abc47d284",
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
seedaccesstextileTaille();
seedlunetteTaille();
seedceintureTaille();
seedsacTaille();
seedBijouxTaille();
seedchaussureTaille();
seedjupeTaille();
seedpantalonTaille();
seedshortTaille();
seedSweatTaille();
seedtshirtTaille();
seedVesteTaille();
seedManteauTaille();
seedPullTaille();
seedChemiseTaille();
seedCardiganTaille();
seedTopTaille();
