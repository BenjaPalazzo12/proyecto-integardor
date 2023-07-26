const dotenv = require('dotenv')
const morgan = require('morgan')
dotenv.config();
const { PORT, PASSWORD } = process.env;
const cors = require('cors')

//Routers
const characterRouter = require('./routes/character');
const userRouter = require('./routes/user');
const favoritesRouter = require('./routes/favorites')
//express
const express = require('express');
const server = express()




// Middlewars
server.use(express.json()) // para poder recibir json por bodys
server.use(morgan("dev"))


//Permisos
server.use(cors())
//Routers
server.use("/character", characterRouter)
server.use("/user", userRouter)
server.use("/favorites",favoritesRouter)


server.get("/health_check", (req, res) =>{
    res.send("Working!")
})

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
})


