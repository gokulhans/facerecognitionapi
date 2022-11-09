var fun = require('.././function')


const HandleRegister = (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json("incorrect form submission");
  }else{
    fun.doSignup(req.body).then(()=>{

    })
  }
};

module.exports = {
  HandleRegister: HandleRegister,
};
