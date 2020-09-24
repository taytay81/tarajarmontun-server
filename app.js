require("dotenv").config();
require("./config/mongo");
//require("./config/passport");

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session"); //sessions make data persist between http calls
//const passport = require("passport"); // auth library (needs sessions)
const cors = require("cors");

var app = express();

// this rule allows the client app to exchange via http via the server (AJAX ... Axios)
const corsOptions = {
  origin: [process.env.CLIENT_URL],
  /* credentials : Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials */
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION,
  })
);

// cors middle on
//app.use(passport.initialize());
//app.use(passport.session());

var indexRouter = require("./routes/index.js");
var usersRouter = require("./routes/users.js");
var produitRouter = require("./routes/produit.js");
var articleRouter = require("./routes/articles.js");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/produit", produitRouter);
app.use("/articles", articleRouter);

module.exports = app;
