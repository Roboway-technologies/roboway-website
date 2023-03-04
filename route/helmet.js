const express = require('express');
const router = express.Router();

const helmetData = require('../data/helmet');

router
    .route('/')
    .get((req,res)=>{
        const {name} = req.body;
        console.log(req.body);
        const data = helmetData.helmetData(name);
        res.send(data);
    })
    .post((req,res)=>{
        const {name} = req.body;
        console.log(req.body);
        const data = helmetData.helmetData(name);
        res.send(data);
    });
        
module.exports = router;