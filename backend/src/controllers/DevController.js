const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStrinfAsArray');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },



    //Tipos de parâmetros:

    // Query Params: request.query (filtros, ordenações)
    // Route Params: request.params (Identificar um recurso na alteração ou remoção)
    // Body: request.body (Dados para criação ou alteração de um registro)

    async store(request, response) { //async quer dizer que a função pode demorar para responder
        const {github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); // await, vai aguardar antes de continuar o codigo
    
            const { name = login, avatar_url, bio } = apiResponse.data; // caso não tiver nome será salvo o login
            const techsArray = parseStringAsArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
    
        return response.json(dev);
    }
}