const { FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService{
    constructor(){
        this.FlightRepository = new FlightRepository();
        this.AirplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try{
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            console.log(airplane);
            const flight = await this.FlightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = FlightService;