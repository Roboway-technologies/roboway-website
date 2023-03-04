const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 35,

    },
    subject: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    priceDiscussion: {
        type: String,
        default: "False",
        enum: ['true', 'false'],
    },
    date: {
        type: Date,
        default: Date.now
    },
    isRead: {
        type: Boolean,
        default: false
    },
    isReplied: {
        type: Boolean,
        default: false
    },
    additional:{
        type: String,
        default: "no additional information",
        maxlength: 1024,
    },
    pricingOption: {
        type: Number,
        min: 3000,
        max: 19000,
    },
    projectName: {
        type: String,
        default: "no project name",
        maxlength: 128,
        minlength: 5,
    },
    customName: {
        type: String,
        default: "no project name",
        minlength: 3,
    },

    },{collection: 'contracts'}
  );

const Contact = mongoose.model('contracts', contactSchema);
module.exports = Contact;