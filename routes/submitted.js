const express = require('express');
const path = require('path');
const submitted = express.Router();

var app = express();

const names=[];

submitted.post("/get-home",(req,res,next)=>{
  res.render('submitted',{pageTitle : 'Submitted'});
  console.log('Name Entered :',req.body.username);
  names.push({username:req.body.username});
  names.push({location:req.body.location});
  names.push({price:req.body.price});
});

exports.submitted=submitted;
exports.names = names;