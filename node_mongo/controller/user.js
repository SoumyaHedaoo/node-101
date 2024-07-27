const mongoose = require("mongoose");
const User = require("../models/users"); 


const getAlluser = async(req , res)=>{
    const dbusers = await User.find({});
    return res.json(dbusers);
}

const createNewUser =async(req , res)=>{
    const body = req.body;
    if(!body || !body.firstName || !body.lastName || !body.email || !body.city){
        return res.status(400).json({msg : "all fields are required"});
    }

    const result=await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        city : body.city
    });

    return res.status(201).json({msg : "new user created"});

}

const xgetUserById =async(req , res)=>{
    const id =(req.params.id);
    const result = await User.findById(id);
    if(!result) return res.status(404).json({error : "no entry found"});
    
    return res.json(result);

}
const xupdateUserById = async(req , res)=>{
    const body=req.body;
    const result =await User.findByIdAndUpdate(req.params.id , {city : body.city});
    if(!result) return res.status(404).json({error : "no entry found"});
    return res.send({msg : "query successfull"});
}

const xxId =async(req , res)=>{
    const result = User.findByIdAndDelete(req.params.id);
    if(!result) return res.status(404).json({error : "no entry found"});
    return res.json({msg : "query successfull"});
}




module.exports={
    getAlluser,
    createNewUser,
    xgetUserById,
    xupdateUserById,
    xxId
}