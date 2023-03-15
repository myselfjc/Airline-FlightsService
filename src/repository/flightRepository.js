const { flight } = require('../models/index');


class FlightRepository{
    async createFlight(data){
        try{
            const flightDetails = await flight.create(data);
            return flightDetails;
        }
        catch(error){
            throw {error}
        }  
    }
}

module.exports = FlightRepository;