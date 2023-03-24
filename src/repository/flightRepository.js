const { flight } = require('../models/index');
const {Op} = require('sequelize');


class FlightRepository{
    #createFilter(data){
        let filter = {};
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
            console.log(filter)
        }
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter, {[Op.and]:
            [
                {price: {[Op.lte]:data.maxPrice}},
                {price: {[Op.gte]:data.minPrice}}
            ]
            })
            return filter
        }
        if(data.maxPrice){
            Object.assign(filter, {price:{[Op.lte]:data.maxPrice}})
        }
        if(data.minPrice){
            Object.assign(filter, {price:{[Op.gte]:data.minPrice}})
        }
        
        return filter
    }

    async createFlight(data){
        try{
            const flightDetails = await flight.create(data);
            return flightDetails;
        }
        catch(error){
            throw {error}
        }  
    }

    async getAllFlights(data){
        try{
            const filterObject = this.#createFilter(data);
            console.log(filterObject);
            const flights = await flight.findAll({
                where: filterObject
            });
            return flights;
        }
        catch(error){
            throw {error}
        }  
    }

    async getFlight(id){
        try {
            const reqFlight = await flight.findByPk(id);
            return reqFlight
        } catch (error) {
            throw {error}
        }
    }

    async updateFlight(data,id){
        try {
            const reqFlight = await flight.update(data,{
                where:{
                    id
                }
            })
            return reqFlight
        } catch (error) {
            throw {error}
        }
    }
}

module.exports = FlightRepository;