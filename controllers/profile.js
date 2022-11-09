const HandleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.get().collection('users').findOne({ id: id }).then((user) => {
    if (user.length) {
      res.json(user[0]);
    } else {
      res.status(400).json("not found");
    }
  })
    .catch((err) => res.status(400).json("error getting user"));
};

module.exports = {
  HandleProfileGet: HandleProfileGet,
};
