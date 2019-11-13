const http =require("http");
const fs=require("fs");
const path=require("path");


const os =require("os");

const server =http.createServer((req,res)=>{

    // os.cpus()
    // os.platform()
    // os.type()
    // os.userInfo([options])
    // os.arch()
    // os.hostname()
    // os.totalmem()
})

server.listen((req,res)=>{
    console.log("启动成功")
})