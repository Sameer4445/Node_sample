const express = require('express');
const path = require('path');
const homeRouter = require('./homeRoute');
const gethomeroute = require('./gethome')
const {submitted} = require('./submitted');
const { names } = require('./submitted');

var app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'../','views'));

app.use((req,res,next)=>{
  console.log(req.method,req.url);
  next();
});
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'../public')));

app.use(homeRouter);
app.use(gethomeroute);
app.use(submitted);
app.use((req, res, next) => {
  res.status(404).render('404',{pageTitle : 'Page Not Found'});
})

homeRouter.get("/", (req, res, next) => {
  res.render('home', { names,pageTitle: 'Home' });
});

app.listen(3001,()=>{
  console.log(`server is running on port http://localhost:${3001}`);
})