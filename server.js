const express= require('express');
const bodyParser= require('body-parser');
const cors = require('cors');

const app=express();
const setup = require('./utilities/setup');
const {mongoose} = require('./db/connection');
const userRoutes=require('./routes/user.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api',userRoutes);






const port=3000;
app.listen(port,()=>{
    console.log(`*****************Listening at port ${port}****************`)
})