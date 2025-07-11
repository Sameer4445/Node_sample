const express = require('express');
const path = require('path');
const gethomeroute = express.Router();

var app = express();

gethomeroute.get("/get-home",(req,res,next)=>{
  res.render('get-home',{pageTitle : 'Get Home'});
})

module.exports=gethomeroute;