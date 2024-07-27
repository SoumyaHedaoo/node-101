const fs= require("fs");


function addNewLogEntry(filename){

    return (req , res , next)=>{
        const x=new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        fs.appendFile(
            filename , 
            `Date : ${x} -> ${req.ip} -> ${req.url}` , 
            (err , data)=>{
                next();
            }
        );
    }
}

module.exports = {
    addNewLogEntry
}