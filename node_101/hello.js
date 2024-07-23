//const os=require("os");
//console.log(os.cpus().length)
// console.log("hellow World!!!")
// 
// const math=require("./math");

// console.log(`addition is${math.add(2,7)}`);
// console.log(`Subtraction is${math.sub(6,2)}`);


// fs.writeFileSync("./test.txt" , "hii there!!");

// fs.writeFile("./test.txt" , "hiiii new async message" , ()=>{});

// fs.readFile("test.txt" , "utf-8" , (err , data)=>{
//     console.log(data)
// }); 
// const fs=require("fs");
// const url = require("url");
const http=require("http");
const express =require("express");

const app = express();

app.get("/" , (req , res)=>{
    return res.end(`i guess your name is ${req.query.name} and your age is ${req.query.age} `);
})

app.get("/about" , (req , res)=>{
    return res.end("i am developer my name is batman");
})

app.listen(8000);




















/*const myserver=http.createServer((req,res)=>{
   
    if(req.url==="/favicon.ico"){return; }
    
    const x=new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    const myurl=url.parse(req.url , true);
    console.log(myurl);
    fs.appendFile("log.txt" ,`${x} : user accessed: ${req.url}\n` , (err , data)=>{
        switch(myurl.pathname){
            case '/' : res.end("nothing but this")
            break;
            case'/about' : res.end("yeah i am batman💀")
            break;
            case '/end' : res.end('you have reached end')
            break;
            default : res.end("dont be oversmart")
        }
    });
})
*/

