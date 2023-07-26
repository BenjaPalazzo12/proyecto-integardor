const allowedUsers = require("../utils/user")

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

module.exports = Login