const { FlightService } = require('../services/index');

const flightService = new FlightService();

exports.createFlight = async (req,res,next) => {
    try{
        console.log(req.body);
        const flight = await flightService.createFlight(req.body);
        if(!flight){
            return res.status(401).json({
                status:"Failed!",
                message:"There is some error while creating flight!",
                error
            })
        }
        res.status(200).json({
            status:"Success",
            message:"Flight Created Successfully!",
            data: flight
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while creating flight",
            error
        })
    }
}

exports.getAllFlights = async (req,res,next) => {
    try{
        const flights = await flightService.getAllFlights(req.query);
        console.log(flights);
        if(!flights){
            res.status(401).json({
                status:"Failed!",
                message:"There is some error while fetching flights",
                error
            })
        }
        res.status(200).json({
            status:"Success",
            message:"Flights fetched Successfully!",
            data: flights
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while fetching flights",
            error
        })
    }
}