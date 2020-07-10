require("dotenv").config();
require("./config/mongo");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// this rule allows the client app to exchange via http via the server (AJAX ... Axios)
const corsOptions = {
  origin: [process.env.CLIENT_URL],
  /* credentials : Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials */
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// cors middle on
var indexRouter = require("./routes/index.js");
var usersRouter = require("./routes/users.js");
var produitRouter = require("./routes/produit.js");
var articleRouter = require("./routes/articles.js");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/produit", produitRouter);
app.use("/articles", articleRouter);

module.exports = app;
