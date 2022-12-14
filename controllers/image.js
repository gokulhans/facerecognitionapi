const Clarifai = require("clarifai");
const { json } = require("express/lib/response");

const app = new Clarifai.App({
  apiKey: "api key", //paste your api key here
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("unable to work with API"));
};

const HandleImageGet = (req, res, db) => {
  const { id } = req.body;
  let user = db.get().collection('users').findOne({ id: id })
  console.log("image entry ++");
  // db("users")
  //   .where("id", "=", id)
  //   .increment("entries", 1)
  //   .returning("entries")
  //   .then((entries) => {
  //     res.json(entries[0]);
  //   })
  //   .catch((err) => res.status(400).json("unable to get entries"));
};

module.exports = {
  HandleImageGet,
  handleApiCall,
};
