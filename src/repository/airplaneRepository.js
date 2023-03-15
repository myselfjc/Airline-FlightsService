const { Airplane } = require('../models/index');

class AirplaneRepository {
    async createAirplane({ data }){
        try{
            const airplane = await Airplane.create({
                data
            })
            return airplane
        }
        catch(error){
            throw {error}
        }
    }

    async updateAirplane(airplaneId, data){
        try{
            const airplane = await Airplane.update(data,{
                where: {
                    id: airplaneId
                }
            })
            return airplane
        }
        catch(error){
            throw {error}
        }
    }

    async deleteAirplane(airplaneId){
        try{
            const airplane = await Airplane.destroy({
                where:{
                    id: airplaneId
                }
            })
            return airplane
        }
        catch(error){
            throw {error}
        }
    }

    async getAirplane(airplaneId){
        try{
            const airplane = await Airplane.findByPk(airplaneId);
            return airplane
        }
        catch(error){
            throw {error}
        }
    }
}

module.exports = AirplaneRepository;