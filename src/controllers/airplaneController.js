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

exports.update = async (req,res,next) =>{
    try{
        const airplane = await airplaneService.updateAirplane(req.params.id,req.body);

        if(!airplane){
            return res.status(401).json({
                status:"Failed!",
                message:"There is some error while updating airplane!",
                error
            })
        }
        res.status(200).json({
            status:"Succes",
            message:"Airplane updated successfully!"
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while updating airplane!",
            error
        })
    }
}

exports.delete = async (req,res,next) =>{
    try{
        const airplane = await airplaneService.deleteAirplane(req.params.id);
        if(!airplane){
            return res.status(401).json({
                status:"Failed!",
                message:"There is some error while deleting airplane!",
                error
            })
        }
        res.status(200).json({
            status:"Succes",
            message:"Airplane deleted successfully!"
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while deleting airplane!",
            error
        })
    }
}

exports.get = async (req,res,next) =>{
    try{
        const airplane = await airplaneService.getAirplane(req.params.id);
        if(!airplane){
            return res.status(401).json({
                status:"Failed!",
                message:"There is some error while getting airplane!",
                error
            })
        }
        res.status(200).json({
            status:"Succes",
            message:"Airplane fetched successfully!",
            data: airplane
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while getting airplane!",
            error
        })
    }
}