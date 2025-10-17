const mongoose = require("mongoose");

const connect_db = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log("DB Connection..!")})
    .catch((err)=>{
        console.error("Error DB:",err.message);
    });
};

module.exports = connect_db;