require('dotenv').config();

// express
const express       = require('express');
const app           = express();
const session       = require("express-session");

// middlewares
const cookieparser  = require("cookie-parser");
const cors          = require('cors');

// databases
const mongo         = require('./model/mongo');


// environment setups
const port = process.env.PORT;
const {corsOptions, sessionSettings} = require('./data/config');
app.use(session(sessionSettings));
app.use(cors(corsOptions));
app.use(cookieparser());
app.use(express.json())
app.use(express.urlencoded({extended: true}));


// routes 
app.use('/',require('./route/index'));
app.use("/helmet",require("./route/helmet"));
app.use("/profile",require("./route/profile"));
app.use("/contact",require("./route/contact"));

// error handling

const {errorRoute} = require ("./controllers/messages");
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(errorRoute);
});


app.listen(port,()=>{
    console.log('listening on port',port);
})