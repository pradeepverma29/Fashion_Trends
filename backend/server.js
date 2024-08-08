const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroutes = require("./routes/rootroutes");
const productroute = require("./routes/productroute");
// const rootcontroller = require("./controllers/rootcontroller");
const connectDB = require("./config/db");  

const PORT = process.env.PORT;
const app = express();
connectDB();

// app.use("/", (req, res)=>{
//     res.send("api is working");
// });
app.use("/", rootroutes);
app.use("/fashiontrends", productroute);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.white);
});