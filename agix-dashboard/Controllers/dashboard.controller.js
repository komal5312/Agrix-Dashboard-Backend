const dashboard_data = require("../models/dashboard")

// post coupan api ....
exports.FarmerDetails = async (req,res) => {
    const { plotId,VillageName,VillageId,CluterId,Latitude,Longitue,Perimeter,Area,FarmerName,FarmerId,mobileNo,soilType,season,crop,variety,yield,remark} = req.body
    try {
        const Fertilizing = new dashboard_data({
            plotId,
            VillageName,
            VillageId,
            CluterId,
            Latitude,
            Longitue,
            Perimeter,
            Area,
            FarmerName,
            FarmerId,
            soilType,
            mobileNo,
            season,
            crop,
            variety,
            yield,
            remark
        });
        console.log(Fertilizing,"iiiii")


        Fertilizing 
            .save()
            .then((data) => {
                console.log(data)
                return res.status(201).json({
                    status: true,
                    message: "successfully has been created....!",
                    data,
                });
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({
                    status: false,
                    message: "Something went wrong.You might have missed some field",
                    error,
                })
            })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: false,
            message: "went wrong....!", error,
        });
    }
}


// get api by plotId...
exports.Getdata = async (req,res) => {
    dashboard_data.find({ plotId: req.params.plotId }).exec((error ,farmarData) => {
        if (error){
          return res.status(400).send("the error is.... ", error);
        } else if (farmarData) {
            return res.status(201).json({
                status: true,
                message: "here are your data by plotid...!", farmarData
            })
        }
    })
}


// get api...
exports.Getalldata = async (req,res) => {
    dashboard_data.find({}).exec((err,data) => {
        if (err){
            return res.status(400).json({
                status: false,
                message: "something went wrong" , 
                    err
            })
        }else if (data){
            return res.status(201).json({
                status: true,
                message: `here are your ${data.length} data` ,
                data
            })
        }
    })
}


// update api for products collection....!
exports.updateDashboard = async (req,res) => {
    try {
        const FarmerUpdate = await dashboard_data.findOneAndUpdate({_id: req.params.id},{
            $set:{
                plotId: req.body.plotId,
                VillageName: req.body.VillageName,
                VillageId: req.body.VillageId,
                CluterId: req.body.CluterId,
                Latitude: req.body.Latitude,
                Longitue: req.body.Longitue,
                Perimeter: req.body.Perimeter,
                Area: req.body.Area,
                FarmerName: req.body.FarmerName,
                FarmerId: req.body.FarmerId,
                soilType: req.body.soilType,
                mobileNo: req.body.mobileNo,
                season: req.body.season,
                crop: req.body.crop,
                variety: req.body.variety,
                yield: req.body.yield,
                remark: req.body.remark
            }
        })
        return res.status(200).json({
                updated: "updated successfully",
                FarmerUpdate
            })
    }catch (err) {
        return res.status(400).json({
            error : err
        })
    }
}