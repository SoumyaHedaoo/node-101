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
const fs=require("fs");
const http=require("http");

const myserver=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico"){return; }
    const x=new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    fs.appendFile("log.txt" ,`${x} : user accessed: ${req.url}\n` , (err , data)=>{
        res.end("hii the server is ready to use")
        console.log("new acces granted")

    });
})

myserver.listen(8000 , ()=>{console.log("server started")}); 
