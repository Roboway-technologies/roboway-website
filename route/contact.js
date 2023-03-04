const express = require('express');
const router = express.Router();
const Contact = require('../model/contactForm');

const data = {
    title: "welcome",
    message: "data came from node backend",
    version: "30.11.22"
};
router
    .route('/')
    .get((req,res)=>{
        res.send('/roboway');
    })
    .post((req,res)=>{
        console.log(req.body);
        const data = req.body;
        const contact = new Contact(data);
        contact.save()
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
        res.json(
            data
        );
    });
        
module.exports = router;