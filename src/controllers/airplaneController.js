const {AirplaneService} = require('../services/index');

const airplaneService = new AirplaneService();

exports.create = async (req,res,next) =>{
    try{
        const airplane = await airplaneService.createAirplane(req.body);
        if(!airplane){
            return res.status(401).json({
                status:"Failed!",
                message:"model_number and capacity both are required!",
                error
            })
        }
        res.status(200).json({
            status:"Succes",
            message:"Airplane created successfully!",
            data: airplane
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while creating airplane!",
            error
        })
    }
}