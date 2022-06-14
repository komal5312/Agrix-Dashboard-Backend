const express = require("express");
const router = express.Router();
const {FarmerDetails,Getdata,Getalldata,updateDashboard} = require("../controllers/dashboard.controller");

router.post("/new_data", FarmerDetails)
router.get("/Alldata/:plotId", Getdata)
router.get("/Dashboard_data", Getalldata)
router.put("/updateDashboard/:id", updateDashboard)

module.exports = router;
// app.use(app.router);
