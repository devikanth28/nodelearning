const http = require("node:http");

const server = http.createServer(function (req, res){
    console.log("requ",req)
    if(req.url === "/getSecretData"){

        res.end("no secret data");
    }
});

server.listen(7777);


