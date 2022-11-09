const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { is } = require("express/lib/request");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);
const knex = require("knex");
const register = require("./controllers/register");
const signIn = require("./controllers/signIn");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const dotenv = require("dotenv").config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    // ssl:true,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});



const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("success");
});

app.post("/signin", signIn.HandleSignIn(db, bcrypt));

app.post("/register", (req, res) => {
  register.HandleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.HandleProfileGet(req, res, db);
});

app.put("/image", (req, res) => {
  image.HandleImageGet(req, res, db);
});
app.post("/imageUrl", (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`app is running in port ${process.env.PORT}`);
});
