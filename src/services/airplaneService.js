const {AirplaneRepository} = require('../repository/index');

class AirplaneService{
    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
    }

    async createAirplane(data){
        try{
            const airplane = await this.AirplaneRepository.createAirplane(data);
            return airplane
        }
        catch(error){
            console.log(error);
        }
    }

    async updateAirplane(airplaneId,data){
        try{
            const airplane = await this.AirplaneRepository.updateAirplane(airplaneId,data);
            return airplane
        }
        catch(error){
            console.log(error);
        }
    }

    async deleteAirplane(airplaneId){
        try{
            const airplane = await this.AirplaneRepository.deleteAirplane(airplaneId);
            return airplane
        }
        catch(error){
            console.log(error);
        }
    }

    async getAirplane(airplaneId){
        try{
            const airplane = await this.AirplaneRepository.getAirplane(airplaneId);
            return airplane
        }
        catch(error){
            console.log(error);
        }
    }
}

module.exports = AirplaneService;