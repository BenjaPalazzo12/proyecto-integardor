const { Character } = require('../DB_connection')


module.exports = async (req,res) =>{
    try {
        const {name, origin, status, image, species, gender} = req.body

        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).send("Faltan datos")
        }

        await Character.findOrCreate({where:{name, origin, status, image, species, gender}})

        const allChar = await Character.findAll();
        return res.json(allChar)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}