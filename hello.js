//const os=require("os");
//console.log(os.cpus().length)
// console.log("hellow World!!!")
// 
// const math=require("./math");

// console.log(`addition is${math.add(2,7)}`);
// console.log(`Subtraction is${math.sub(6,2)}`);

const fs=require("fs");
fs.writeFileSync("./test.txt" , "hii there!!");

fs.writeFile("./test.txt" , "hiiii new async message" , ()=>{});

fs.readFile("test.txt" , "utf-8" , (err , data)=>{
    console.log(data)
});

