require("dotenv").config();
require("../../config/mongo");
//DB MODEL IMPORT
const ArticletypeModel = require("../../models/ProduitType");
const ArticlecouleurModel = require("../../models/ProduitCouleur");
const ArticlecompositionModel = require("../../models/ProduitComposition");
const ArticleTailleModel = require("../../models/ProduitTaille");

const articleCouleur = [
  "EMERAUDE",
  "#019875",
  "ROUGE",
  "#FF0000",
  "CAMEL",
  "#c19a6b",
  "ECRU",
  "#f5f5dc",
  "FLAMME",
  "#931520",
  "MENTHE",
  "#004C48",
  "BLEU NUIT",
  "#191724",
  "NOIR",
  "#000000",
  "BEIGE",
  "#d0b38f",
  "BLEU VIF",
  "#202A65",
  "BLEU PETROLE",
  "#013E5B",
  "MORDORE",
  "#C18017",
  "CANARD",
  "#01202B",
  "OR",
  "#d5cda2",
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
const articleComposition = [
  "72% LAINE 25% POLYAMIDE/NYLON 3% CACHEMIRE",
  "47% ACRYLIQUE 25% POLYESTER 8% COTON 8% LAINE VIERGE-LAINE TONTE 6% POLYAMIDE/NYLON 6% LAINE",
  "60% LAINE 38% POLYESTER 2% ELASTHANNE",
  "100% POLYESTER",
  "100% VISCOSE",
  "85% ACRYLIQUE 15% MODACRYLIQUE",
  "72% VISCOSE 28% POLYESTER",
  "100% SOIE",
  "98% LAINE VIERGE-LAINE TONTE 2% ELASTHANNE",
  "60% LAINE 38% POLYESTER 2% ELASTHANNE",
  "73% ACETATE 27% VISCOSE",
  "65% RAMIE 35% SOIE",
  "57% ACETATE 43% VISCOSE",
  "54% POLYESTER 46% VISCOSE",
  "50% POLYESTER 46% COTON 4% ELASTHANNE",
  "100% ACETATE",
  "100% COTON",
  "80% LAINE 20% POLYAMIDE/NYLON",
  "100% CUIR DE VACHE",
  "90% LAINE MERINOS 10% CACHEMIRE",
  "69% LAINE VIERGE-LAINE TONTE 22% POLYAMIDE/NYLON 9% CACHEMIRE",
  "70% LAINE 25% POLYAMIDE/NYLON 5% AUTRES FIBRES",
  "83% COTON 12% POLYESTER 5% AUTRES FIBRES",
  "50% LAINE MERINOS 30% POLYAMIDE/NYLON 20% ACRYLIQUE",
  "89% POLYESTER 11% POLYURETHANE",
  "54% POLYESTER 24% POLYAMIDE/NYLON 22% METAL-FIBRE METALLIQUE",
  "100% VACHETTE",
  "100% LAINE MERINOS",
  "100% CHEVRE",
  "62% VISCOSE 38% POLYESTER",
  "80% VISCOSE 18% SOIE 2% METAL-FIBRE METALLIQUE",
  "52% POLYESTER 28% ELASTHANNE 11.5% METAL / FIBRE METALLIQUE 8.5% CUIR DE VEAU",
  "55% LAINE VIERGE-LAINE TONTE 34% VISCOSE 7% POLYAMIDE/NYLON 4% POLYESTER",
];
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
  console.log("on entre dans la fonction seedarticletype ");
  articleType.forEach((type) => articleTypefinal.push({ type: type }));
  ArticletypeModel.insertMany(articleTypefinal);
  console.log("on sort de la fonction seedarticletype ");
}
function seedArticleCouleur() {
  for (let i = 0; i < articleCouleur.length - 1; i = i + 2) {
    console.log(i, articleCouleur.length - 1, articleCouleur.length);
    console.log("a", articleCouleur[i]);
    console.log("b", articleCouleur[i + 1]);

    articleCouleurfinal.push({
      couleur: articleCouleur[i],
      code: articleCouleur[i + 1],
    });
  }
  /*articleCouleur.forEach((couleur) =>
    articleCouleurfinal.push({ couleur: couleur })
  );*/
  ArticlecouleurModel.insertMany(articleCouleurfinal);
}
function seedArticleComposition() {
  articleComposition.forEach((compo) =>
    articleCompositionfinal.push({ composition: compo })
  );
  ArticlecompositionModel.insertMany(articleCompositionfinal);
}

// SEED FUNCTION CALLS in comment when seeding has been done
seedArticleType();
seedArticleCouleur();
seedArticleComposition();
//seedRobeTaille();
//seedaccesstextileTaille();
//seedlunetteTaille();
//seedceintureTaille();
//seedsacTaille();
//seedBijouxTaille();
//seedchaussureTaille();
//seedjupeTaille();
//seedpantalonTaille();
//seedshortTaille();
//seedSweatTaille();
//seedtshirtTaille();
//seedVesteTaille();
//seedManteauTaille();
//seedPullTaille();
//seedChemiseTaille();
//seedCardiganTaille();
//seedTopTaille();
