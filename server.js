const express = require('express');
const mongoose =  require('mongoose');

// DB config
const mongodb = require('./config/keys').mongoURI;

// mongdb connect
mongoose.connect(mongodb)
.then(()=>console.log("mongdb Connected"))
.catch((err)=>console.log("Err connecting mongodb:",err))


const app = express();
app.get('/',(req,res)=>res.send('Estoy enamorado de mi novia Faith Coronado Meza, alias ratón. Te amo nena <3'));

const port = process.env.PORT || 8080;

app.listen(port,()=>console.log("App listening at port:",port))
