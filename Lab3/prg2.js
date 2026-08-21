import http from 'http'

const server = http.createServer((req,res)=>{
    console.log("server hit by client");
    res.write("<h1>Hello Client</h1>");
    res.end();
});

server.listen(3333 , () => console.log("server is running..."));