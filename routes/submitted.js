const express = require('express');
const path = require('path');
const submitted = express.Router();

var app = express();

const names=[];

submitted.post("/get-home",(req,res,next)=>{
  names.push({
    username: req.body.username,
    location: req.body.location,
    price: req.body.price,
    image: req.body.image
  });
  res.render('submitted',{pageTitle : 'Submitted'});
});

exports.submitted=submitted;
exports.names = names;
