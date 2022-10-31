const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { Sequelize } = require('sequelize');
require("dotenv").config();
const authRoute = require("./routes/auth")
const testUser = require("./routes/TestLogin")
const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL);

//console.log(sequelize)
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',authRoute)
app.use('/api',testUser)



const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Start server in port ${port}`)

})