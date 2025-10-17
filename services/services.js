const userModel = require("../models/user.model")

module.exports.createService = async(username,password,email)=>{
    return await userModel.create({
        username,password,email
    })
}