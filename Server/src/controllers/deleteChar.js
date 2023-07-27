const { Character } = require('../DB_connection')

module.exports = async (req,res) =>{
    try {
        
        const { id } = req.params;
        await Character.destroy({where: {id}})

        const allChar = await Character.findAll();
        return res.json(allChar)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}