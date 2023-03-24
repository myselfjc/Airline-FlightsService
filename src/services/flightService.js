const { FlightRepository, AirplaneRepository } = require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService{
    constructor(){
        this.FlightRepository = new FlightRepository();
        this.AirplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try{
            if(!compareTime(data.departureTime,data.arrivalTime)){
                throw {error:"Departure Time cannot be greater than arrival Time!"}
            }
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            
            const flight = await this.FlightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAllFlights(data){
        try{
            const flights = await this.FlightRepository.getAllFlights(data);
            return flights
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getFlight(data){
        try {
            const flight = await this.FlightRepository.getFlight(data);
            
            return flight
        } catch (error) {
            throw error;
        }
    }

    async updateFlight(data,id){
        try {
            const flight = await this.FlightRepository.updateFlight(data,id);
            return flight;
        } catch (error) {
            throw {error}
        }
    }
}

module.exports = FlightService;