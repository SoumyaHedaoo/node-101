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
        switch(req.url){
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

myserver.listen(8000); 
