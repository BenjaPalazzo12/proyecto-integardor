const allowedUsers = require("../utils/user")
const {User} = require('../models/User')


function Login(req,res) {
  
    const {email, password} = req.query;
    let access = false;
    allowedUsers.forEach((user) => {
        if(user.email === email && user.password === Number(password)){
            access = true;
        }
    })
    return res.json({ access })
}

async function createUser(obj){
    try {
        const newUser = await User.create(obj)
        return newUser
    } catch (error) {
        throw error;
    }
}

module.exports = Login