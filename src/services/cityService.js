const { CityRepository } = require('../repository/index')

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        }
        catch(error){
            console.log(error);
        }   
    }


    async deleteCity(cityId){
        try{
            const city = await this.cityRepository.deleteCity(cityId);
            return city
        }
        catch(error){
            console.log(error);
        }
    }


    async updateCity(cityId, data){
        try{
            const city = await this.cityRepository.updateCity(cityId, data);
            return city
        }
        catch(error){
            console.log(error);
        }
    }


    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city
        }
        catch(error){
            console.log(error);
        }
    }
}

module.exports = CityService;