var fun = require('.././function')

const HandleSignIn = (db,bcrypt) =>(req,res) =>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json('incorrect form submission')
     }
     else{
        fun.doLogin(req.body).then(()=>{
        })
      }
}

module.exports ={
    HandleSignIn: HandleSignIn
}