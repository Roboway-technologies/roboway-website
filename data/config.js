const sendingCookie = {
    httpOnly:true,
    secure:true,
    sameSite:'none',
    maxAge:60*60*24*30,
    path:'/'
}

const sendingHeader = {
    'Content-Type': 'text/json',
    //'access-control-allow-origin': true,
    'access-control-allow-methods': 'GET, POST',
    'access-control-allow-headers': 'Origin, Authorization'
}

const corsConfig = {
    origin: true,
    methods: 'GET,POST', //GET,HEAD,PUT,PATCH,POST,DELETE
    preflightContinue: false,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type'],
    maxAge: 60000,
    preflightContinue: false,
    credentials: true
}

const corsOptions = {
    origin:["https://robowaytech.com","http://localhost:3000","https://www.robowaytech.com"],
    credentials: true,
    optionsSuccessStatus: 200, 
    preflightContinue: true,
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type','Authorization'],
    exposedHeaders: ['Content-Type'],
    maxAge: 3600,
    accessControlAllowOrigin: true,
    accessControlAllowCredentials: true,
    accessControlAllowMethods: 'GET,POST',
    accessControlAllowHeaders: 'Content-Type,Authorization',
    accessControlExposeHeaders: 'Content-Type',
}
const corsOptionsTest = {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200, 
    preflightContinue: true,
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type','Authorization'],
    exposedHeaders: ['Content-Type'],
    maxAge: 3600,
    accessControlAllowOrigin: true,
    accessControlAllowCredentials: true,
    accessControlAllowMethods: 'GET,POST',
    accessControlAllowHeaders: 'Content-Type,Authorization',
    accessControlExposeHeaders: 'Content-Type',
}

const sessionSettings = {
    secret: process.env.SECRET,
    saveUninitialized:true,
    resave: false, 
    cookie: { 
        sendingCookie
      },
  }

module.exports = {
    sendingHeader, 
    sendingCookie,
    corsConfig, 
    sessionSettings, 
    corsOptions,
    corsOptionsTest
};