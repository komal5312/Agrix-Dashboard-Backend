const mongoose = require("mongoose");

var dashboard_schema = mongoose.Schema({
    plotId: {
        type: String
    },
    VillageName: {
        type: String
    },
    VillageId: {
        type: String
    },
    ClusterId: {
        type: String
    },
    Latitude: {
        type: Number
    },
    Longitue: {
        type: Number
    },
    Perimeter: {
        type: Number
    },
    Area: {
        type: String
    },
    FarmerName: {
        type: String
    },
    FarmerId: {
        type: String
    },
    mobileNo: {
        type: Number
    },
    soilType: {
        type: String
    },
    Date: {
        type: Date, 
        default: Date.now 
    },
    season: {
        type: String
    },
    crop: {
        type: String
    },
    variety: {
        type: String
    },
    yield: {
        type: String
    },
    remark: {
        type: Number
    }

});

module.exports = new mongoose.model("dashboard", dashboard_schema);