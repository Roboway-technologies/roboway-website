const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

try{
    mongoose.connect(process.env.DB_URL)
        .then(()=>console.log('mongo → 200'))
        .catch((err)=>console.log(err));
    module.exports = mongoose;
}
catch(e){
    console.log("fatal connection error");
    module.exports = null;
}