const express = require('express');
const router = express.Router();

const profileData = require('../data/profiles');

router
    .route('/')
    .get((req,res)=>{
        const {id} = req.body;
        console.log(req.body);
        const data = profileData.profileData(id);
        res.send(data);
    })
    .post((req,res)=>{
        const {id} = req.body;
        console.log(req.body);
        const data = profileData.profileData(id);
        res.send(data);
    });
        
module.exports = router;