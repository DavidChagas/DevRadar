const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStrinfAsArray');

module.exports = {
    async index(request, response){
        console.log(request.query);
        // buscar todos os devs num raio 10km
        // filtrar por tecnologia

        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);

         const devs = await Dev.find({
             techs: {
                $in: techsArray //$in operador logico mongoDB
             },
             location: {
                 $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 100000
                 }
             }
         })

        return response.json({ devs });
    }
}