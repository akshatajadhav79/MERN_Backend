const { createService } = require("../services/services");

module.exports.createUser = async(req,res) =>{
    
    try{
        const {username,password,email} = req.body;
        const user_doc = await createService(username, password,email);
        if(!user_doc){
            throw new Error("can't create User sorry ..!");
        } 
        res.status(201).json({
            message:"user created",
            user_doc,
        });
    }catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
};
