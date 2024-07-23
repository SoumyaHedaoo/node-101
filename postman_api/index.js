const express = require("express");
const user_data= require("./MOCK_DATA.json");
const fs = require("fs");
const app=express();
const port=8000;

/// middle ware
app.use(express.urlencoded({extended : false}));

//implemented user-defined mddleware

app.use((req , res , next)=>{
    req.errror="404-error not found!!";
    console.log("hello from mddleware");
    next();

})
app.use((req , res , next)=>{
    res.end(req.errror);
})
// get and post requests
//post request testes in postman
app.route("/api/users")
.get((req , res)=>{
    return res.json(user_data);
})
.post((req , res) => {
    //create new user
    const body = req.body;
    user_data.push({...body , id: user_data.length+1});
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(user_data) , (err , data)=>{
        return res.send({status : "Completed" , id : user_data.length});
    })
})

//patch and delete req tested iin postman api
app.route("/api/users/:id")
.get((req , res) =>{
    const id=Number(req.params.id);
    const rreq=user_data.find((user) => user.id===id);
    return res.json(rreq);
})
.patch((req , res) => {
    const id=Number(req.params.id);
    const body=req.body;
    user_data.find((user)=>{
        if(user.id === id){
            user.first_name=body.first_name;
        }
    })
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(user_data) ,(err ,data )=> {
        return res.send({status : "Completed" , id : id});
    })
})
.delete((req , res) => {
    // delete user
    const id= Number(req.params.id);
    const body=req.body;
    user_data.find((user)=>{
        if(user.id===id){
            user.first_name=null;
            user.last_name=null;
            user.id=null;
            user.city=null;
        }
    })
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(user_data) , (err , data)=>{
        return res.json({status : "Completed" , id : id});
    })
    
})

app.listen(port);