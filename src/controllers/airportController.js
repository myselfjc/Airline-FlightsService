const {AirportService} = require('../services/index');

const airportService = new AirportService();

exports.createAirport = async (req,res,next) =>{
    try{
        const airport = await airportService.create(req.body);
        res.status(200).json({
            status:"Success",
            message:"Successfully created Airport!"
        })
    }
    catch(error){
        res.status(500).json({
            status:"Failed",
            message:"Failed at Controller!",
            error
        })
    }
}