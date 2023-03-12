const { CityService } = require('../services/index');

const cityService = new CityService();

exports.create = async (req,res,next) =>{
    try{
        const city = await cityService.createCity(req.body);
        res.status(200).json({
            status:"Success",
            message:"Successfully Created!",
            city
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while creating city!",
            error
        })
    }
}

exports.delete = async (req,res,next) =>{
    try {
        const city = await cityService.deleteCity(req.params.id);
        if(!city){
            return res.status(404).json({
                status:"Failed!",
                message:"There is NO city with this id"
            })
        }
        res.status(200).json({
            status:"Success",
            message:"Successfully Deleted!"
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while deleting city!",
            error
        })
    } 
}

exports.update = async (req,res,next) =>{
    try{
        const city = await cityService.updateCity(req.params.id,req.body);
        if(!city){
            return res.status(404).json({
                status:"Failed!",
                message:"There is NO city with this id"
            })
        }
        res.status(200).json({
            status:"Success",
            message:"Successfully updated!"
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while updating city!",
            error
        })
    }
}

exports.getCity = async (req,res,next) =>{
    try{
        const city = await cityService.getCity(req.params.id);
        if(!city){
            return res.status(404).json({
                status:"Failed!",
                message:"There is NO city with this id"
            })
        }
        res.status(200).json({
            status:"Success",
            message:"Successfully fetched",
            data: city
        })
    }
    catch(error){
        res.status(401).json({
            status:"Failed!",
            message:"There is some error while getting city!",
            error
        })
    }
}