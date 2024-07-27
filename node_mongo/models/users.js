const mongoose= require("mongoose");

//scheme create
const userSchema= new mongoose.Schema({
    firstName: {
        type: String,
        require : true
    },
    lastName : {
        type : String,
    },
    city : {
        type: String,
        required : true,
    },
    email: {
        type : String,
        require : true,
        unique : true
    }
});

//create model
const User = mongoose.model("User" , userSchema);

module.exports= User;