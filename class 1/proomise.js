const fs = require('fs')

function kiratReadFile(){
    return new Promise (function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data)
}
//promisi

kiratReadFile().then(onDone);

// Promise when resolved has to be returned and this function when returned can be used by another function