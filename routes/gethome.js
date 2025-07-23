const express = require('express');
const path = require('path');
const gethomeroute = express.Router();

var app = express();

const hostController = require('../controllers/gethomeController');
gethomeroute.get("/get-home",hostController.getaddhome);

module.exports=gethomeroute;