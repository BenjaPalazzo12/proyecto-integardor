const axios = require('axios')
const URL= "https://rickandmortyapi.com/api/character"

const getCharById = async (req,res) =>{
    const {id}= req.params;

    try {
        const { data } = await axios(`${URL}/${id}`);
        const { name, status, species, gender, origin, image} = data
        const character = {
            id:+id,
            name,
            status,
            species,
            origin:origin.name,
            image,
            gender
        }
        return res.status(200).json(character)
        
    } catch (error) {
        error.response.status === 404 ? res.status(error.response.status).send('Not Found') : res.status(error.response.status).send(error.message)
    }
}


module.exports = { getCharById }