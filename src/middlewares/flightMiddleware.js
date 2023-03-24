const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.price
        ){
            return res.status(400).json({
                status:"Failed",
                message:"All the mandatory fields must be entered!"
            })
        }
    next();
}

module.exports = {
    validateCreateFlight
}