const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const AgrixDashboard = require("./routes/dashboardRoute");
const dashboard_details = require("./routes/dashboardRoute");
const dashboard_update = require("./routes/dashboardRoute");
const Agrixdata = require("./routes/dashboardRoute");
const port = 5000;


// mongodb connection....!
mongoose
    .connect(
        `mongodb+srv://evanjali:evan123@dashboard-cluster.u3i1c.mongodb.net/Data`,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }
    )
    .then(() => {
        console.log("connected with mongodb");
    })
    .catch((err) => {
        console.log(err);
    });

    
app.use(express.json());
app.use(cors());

// Route middlewares...!
app.use("/", AgrixDashboard);
app.use("/", dashboard_details);
app.use("/", dashboard_update);
app.use("/", Agrixdata);

// server is running on this port ....!
app.listen(port, () => {
    console.log(`server running at port:${port}`);
});
  