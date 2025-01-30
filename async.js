const fs = require("fs");
const http = require("http");
const crypto = require("crypto");

console.log("Hello world");

var a = 89087;
var b = 67890;

http.get('http://dummyjson.com/products', (res)=>{
    console.log("Fetched data successfully")
});

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("first key is generated")

setTimeout(()=>{
    console.log("set time out came");
},5000);

fs.readFile("./launchpad.txt", "utf8", (err, data)=>{
    console.log("File data", data)
});

//password base key derivative function
// async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key)=>{
    console.log("key generted")
})

function multiply(x,y){
    return x * y;
}

var multiplicationResult = multiply(a, b);

console.log("multiplication result", multiplicationResult)