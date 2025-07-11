const express = require('express');
const path = require('path');

const homeRouter = express.Router();
const {names} = require('./submitted');

homeRouter.get("/",(req,res,next)=>{
  console.log(names);
  res.render('home',{names,pageTitle: 'Home'});
})

module.exports=homeRouter;